/******************************************************************************
 * Starcraft II Hotkey Editor                                                 *
 *                                                                            *
 * Copyright (C) 2018 J.C. Fields (jcfields@gmail.com).                       *
 *                                                                            *
 * Permission is hereby granted, free of charge, to any person obtaining a    *
 * copy of this software and associated documentation files (the "Software"), *
 * to deal in the Software without restriction, including without limitation  *
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,   *
 * and/or sell copies of the Software, and to permit persons to whom the      *
 * Software is furnished to do so, subject to the following conditions:       *
 *                                                                            *
 * The above copyright notice and this permission notice shall be included in *
 * all copies or substantial portions of the Software.                        *
 *                                                                            *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR *
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,   *
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL    *
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER *
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING    *
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER        *
 * DEALINGS IN THE SOFTWARE.                                                  *
 ******************************************************************************/

"use strict";

/*
 * constants
 */

// dimensions of command cards
const ROWS = 3;
const COLS = 5;

// initial unit on load
const DEFAULT_UNIT = "Raynor_SCV";

// file names and locations
const DEFAULT_SAVE_NAME = "Hotkeys.SC2Hotkeys";
const DEFAULT_ICON = "btn-missing-kaeo";
const ICON_DIR = "icons";
const ICON_EXT = ".png";
const HELP_PAGE = "help.html";
const ANNOYED_CLICKS = 10;
const ANNOYED_SOUND = "annoyed.ogg";
const MIME_TYPE = "text/plain";
const STORAGE_NAME = "sc2hk";

// delimiter for multiple hotkeys
const DELIMITER = ",";

/*
 * initialization
 */

window.addEventListener("load", function() {
	const store = new Storage(STORAGE_NAME);
	const overlays = {
		load: new Overlay("load"),
		save: new Overlay("save")
	};
	const commands = new Commands();
	const editor = new Editor(commands);

	let mem = store.load();

	if (mem != null) {
		commands.load(mem);
	}

	editor.load();

	window.addEventListener("beforeunload", function() {
		// saves on close
		store.save(commands.list);
	});
	window.addEventListener("hashchange", function() {
		// changes on link or browser back/forward
		editor.load();
	});
	window.addEventListener("keyup", function(event) {
		let keyCode = event.keyCode;

		if (keyCode == 27) { // Esc
			for (let overlay of Object.values(overlays)) {
				overlay.hide();
			}
		}
	});

	document.addEventListener("click", function(event) {
		let element = event.target;

		if (element.closest("#open")) {
			let file = overlays.load.getText();

			if (file != "") {
				commands.parse(file);
				editor.open();
				overlays.load.hide();
			}
		}

		if (element.closest("#reset")) {
			commands.reset();
			store.reset();

			editor.open();

			overlays.load.setText("");
			overlays.load.hide();
		}

		if (element.closest("#copy")) {
			overlays.save.select();
			document.execCommand("copy");
		}

		if (element.matches("#help")) {
			window.location = HELP_PAGE;
		}

		if (element.closest("#load")) {
			overlays.load.show();
		}

		if (element.closest("#save")) {
			store.save(commands.list);
			overlays.save.setText(commands.convert());
			overlays.save.show();
		}

		if (element.matches("#download")) {
			let file = new Blob([overlays.save.getText()], {type: MIME_TYPE});

			let a = $("#link");
			a.download = DEFAULT_SAVE_NAME;
			a.href = window.URL.createObjectURL(file);
			a.click();
			window.URL.revokeObjectURL(file);
		}

		if (element.matches("#add")) {
			editor.addField();
		}

		if (element.matches("#remove")) {
			editor.removeField();
		}

		if (element.matches("#defaults")) {
			editor.resetDefaults();
		}

		if (element.matches("#unit img")) {
			editor.clicks++;

			if (editor.clicks >= ANNOYED_CLICKS) {
				editor.clicks = 0;

				let audio = new Audio(ICON_DIR + "/" + ANNOYED_SOUND);
				audio.play();
			}
		}

		if (element.matches(".clear")) {
			editor.clearSearch(true);
		}

		if (element.matches(".filter")) {
			window.location.hash = data.units[element.value].defaultUnit;
		}

		if (element.closest(".close")) {
			overlays[element.closest(".close").value].hide();
		}

		if (element.matches(".tab")) {
			editor.switchTab(element.value);
		}
	});
	document.addEventListener("input", function(event) {
		let element = event.target;

		if (element.matches("#query")) {
			editor.findUnitsNamed(element.value);
		}
	});
	document.addEventListener("keydown", function(event) {
		let element = event.target;

		if (element.matches("#hotkey input")) {
			// ignores input if modifier key held
			if (!event.ctrlKey && !event.altKey && !event.metaKey) {
				event.preventDefault();
				editor.setHotkey(element, event);
			}
		}

		if (element.matches("#query")) {
			let keyCode = event.keyCode;

			if (keyCode == 13) { // return/enter
				editor.openResult();
			}

			if (keyCode == 27) { // Esc
				editor.clearSearch(true);
			}

			if (keyCode == 38) { // up arrow
				editor.highlightResult(true);
			}

			if (keyCode == 40) { // down arrow
				editor.highlightResult(false);
			}
		}
	});

	$("#file").addEventListener("change", function(event) {
		let file = event.target.files[0];

		if (file != null) {
			let reader = new FileReader();
			reader.addEventListener("load", function(event) {
				overlays.load.setText(event.target.result);
			});
			reader.readAsText(file);
		}
	});

	for (let element of $$("#query, textarea")) {
		element.setAttribute("autocomplete", "off");
		element.setAttribute("autocorrect", "off");
		element.setAttribute("autocapitalize", "off");
		element.setAttribute("spellcheck", "false");
	}
});

function $(selector) {
	return document.querySelector(selector);
}

function $$(selector) {
	return Array.from(document.querySelectorAll(selector));
}

/*
 * Editor prototype
 */

function Editor(commands) {
	this.commands = commands;

	this.unit = "";
	this.commander = "";
	this.id = "";
	this.command = null;

	this.buttons = [];
	this.tab = "units";

	this.matches = [];
	this.selected = -1; // selected search result
}

Editor.prototype.load = function() {
	let unit = "";

	// gets current unit from URL if specified
	if (window.location.hash != "") {
		unit = window.location.hash.replace("#", ""); // chops initial #
	} else {
		unit = DEFAULT_UNIT;
	}

	this.setUnit(unit);
};

Editor.prototype.open = function() {
	this.clearButtons();
	this.clearFields();
	this.unitEditor();
};

Editor.prototype.setUnit = function(unit) {
	this.unit = unit;

	if (data.units[this.unit] == undefined) {
		console.error(`Undefined: ${this.unit} (unit)`);
	} else {
		this.commander = data.units[this.unit].commander;
		this.filter(data.units[this.unit]);
	}

	this.clearSearch(true);
	this.open();
};

Editor.prototype.setCommand = function(id, command) {
	this.id = id;
	this.command = command;

	this.commandEditor();
	this.switchTab(this.tab);
};

Editor.prototype.unitEditor = function() {
	let unit = data.units[this.unit];

	if (unit == undefined) {
		return;
	}

	if (unit.type == COMMANDER) {
		this.setUnit(unit.defaultUnit);
		return;
	}

	this.clicks = 0;

	let h2 = document.createElement("h2");
	h2.id = "unit";

	let icon = unit.icon || DEFAULT_ICON;
	let img = document.createElement("img");
	img.setAttribute("src", ICON_DIR + "/" + icon + ICON_EXT);
	img.setAttribute("alt", "[" + unit.name + "]");
	img.setAttribute("title", unit.name);

	h2.appendChild(img);
	h2.appendChild(document.createTextNode(unit.name));
	$("#unit").replaceWith(h2);

	let commands = [], legends = [];
	this.buttons = [];

	if (Array.isArray(unit.commands)) {
		commands.push(unit.commands);
		legends.push(unit.name);
	} else {
		commands = Object.values(unit.commands);
		legends = Object.keys(unit.commands);
	}

	const self = this;

	for (let n of commands.keys()) {
		this.setLegend(legends[n], n);
		createCommandCard(unit, commands[n], n);
	}

	this.setVisibleHotkeys();
	this.checkAllConflicts();

	function createCommandCard(unit, commands, n) {
		// adds common commands
		if (n == 0 && (unit.type == UNIT || unit.type == HERO)) {
			commands = commands.concat(data.common.basic);
		}

		let fieldset = $("#card" + n);
		let buttons = [];

		// prevents error if unit has more command cards than HTML file
		if (fieldset == null) {
			return;
		}

		if (n > 2) { // unhides extra card
			fieldset.classList.remove("hidden");
		}

		for (let id of commands) {
			let command = self.commands.getCommand(
				unit.commander, self.unit, id
			);

			if (command == undefined) {
				console.error(`Undefined: ${id} (command)`);
				continue;
			}

			buttons.push({
				id,
				y: command.y,
				x: command.x
			});

			// re-selects command if selected on previously viewed unit
			if (self.id == id) {
				self.setCommand(id, command);
			}

			let button = createButton(id, command, n);
			let pos = COLS * command.y + command.x;
			$$(`#card${n}>div div`)[pos].replaceWith(button);
		}

		self.buttons.push(buttons);
	}

	function createButton(id, command, n) {
		let div = document.createElement("div");

		let icon = command.icon || DEFAULT_ICON;
		let img = document.createElement("img");
		img.setAttribute("src", ICON_DIR + "/" + icon + ICON_EXT);
		img.setAttribute("alt", "[" + command.name + "]");
		img.setAttribute("title", command.name);
		img.addEventListener("click", function() {
			self.setCommand(id, command);
		});
		img.classList.toggle("mask", command.mask || icon == DEFAULT_ICON);
		div.appendChild(img);

		let span = document.createElement("span");
		span.id = "span_" + n + command.y + command.x;
		div.appendChild(span);

		return div;
	}
};

Editor.prototype.createInput = function(hotkey="") {
	let input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("value", hotkey);

	return input;
};

Editor.prototype.setLegend = function(title, n) {
	let legend = $(`#card${n} legend`);
	legend.textContent = title;
	legend.classList.toggle("hidden", !title);
};

Editor.prototype.commandEditor = function(n) {
	let hotkeys = this.commands.getHotkeys(this.commander, this.id);
	this.formatHotkey(hotkeys);

	// automatically selects last hotkey field
	if (hotkeys.length > 0) {
		$("#hotkey").lastChild.focus();
	}

	$("#command").innerHTML = this.command.name.replace(/\n/g, "<br>");
	$("#prestige").textContent = this.command.prestige || "";

	this.findUnitsWith(this.id);
	this.findCommandsNamed(this.id);

	for (let element of $$("#control button, #tabs")) {
		element.classList.remove("hidden");
	}
};

Editor.prototype.addField = function() {
	let element = $("#hotkey");

	// will not add new field if current field is empty
	if (element.lastChild.value == "") {
		element.lastChild.focus();
		return;
	}

	let input = this.createInput();
	element.appendChild(input);
	input.focus();
};

Editor.prototype.removeField = function() {
	let element = $("#hotkey");

	if (element.childElementCount > 1) {
		element.removeChild(element.lastChild);
		this.commands.removeLast(this.id);
		this.commands.checkDefaults(this.id, this.commander);
	} else { // last field
		element.lastChild.value = "";
		this.commands.setHotkeys(this.id, []);
	}

	element.lastChild.focus();

	this.findCommandsNamed(this.id);
	this.switchTab(this.tab);
	this.setVisibleHotkeys();
	this.checkAllConflicts();
};

Editor.prototype.formatHotkey = function(hotkeys) {
	let p = document.createElement("p");
	p.id = "hotkey";

	let element = $("#" + p.id);

	if (hotkeys.length == 0) { // hides field if empty
		element.replaceWith(p);
		element.classList.add("hidden");
		return;
	}

	for (let hotkey of hotkeys) { // handles multiple hotkeys
		p.appendChild(this.createInput(hotkey));
	}

	element.classList.remove("hidden");
	element.replaceWith(p);
};

Editor.prototype.setHotkey = function(input, event) {
	if (event.keyCode in data.keyCodes) {
		let keyCode = data.keyCodes[event.keyCode];
		input.value = keyCode.symbol || keyCode.hotkey;
	}

	let fields = [];

	for (let element of $$("#hotkey input")) {
		fields.push(element.value);
	}

	this.commands.setHotkeys(this.id, fields);
	this.commands.checkDefaults(this.id, this.commander);

	this.findCommandsNamed(this.id);
	this.switchTab(this.tab);
	this.setVisibleHotkeys();
	this.checkAllConflicts();
};

Editor.prototype.resetDefaults = function() {
	this.commands.clear(this.id);

	this.commandEditor();
	this.findCommandsNamed(this.id);
	this.switchTab(this.tab);
	this.setVisibleHotkeys();
	this.checkAllConflicts();
};

Editor.prototype.setVisibleHotkeys = function() {
	// checks for conflicts in currently visible command cards
	for (let [n, card] of this.buttons.entries()) {
		let keys = {}, sets = {};

		for (let command of card) {
			if (command == "") {
				continue;
			}

			let hotkeys = this.commands.getHotkeys(this.commander, command.id);
			let hotkeySet = data.commands[command.id].hotkeySet || "";

			let id = "span_" + n + command.y + command.x;
			$("#" + id).textContent = hotkeys[0];

			// records hotkey set if specified and "allow set conflicts" is on
			if (this.commands.allowSetConflicts && hotkeySet != "") {
				sets[id] = hotkeySet;
			}

			for (let hotkey of hotkeys) {
				if (hotkey == "") {
					continue;
				}

				if (keys[hotkey] == undefined) {
					// using set to prevent duplicates so a hotkey cannot
					// conflict with itself
					keys[hotkey] = new Set();
				}

				keys[hotkey].add(id);
			}
		}

		// tracks conflicts outside of loop so conflicts can be detected in
		// commands with multiple hotkeys, else class will be toggled an
		// unpredictable amount
		let conflicts = [];

		for (let ids of Object.values(keys)) {
			for (let id of ids) {
				let size = ids.size;

				if (this.commands.allowSetConflicts && size > 1) {
					let currentSet = sets[id];

					for (let [compareId, compareSet] of Object.entries(sets)) {
						// ignores hotkey conflict if it comes from a
						// member of the same set
						if (
							id != compareId
							&& currentSet == compareSet
							&& ids.has(compareId)
						) {
							size--;
						}
					}
				}

				let conflict = size > 1;

				if (!conflicts.includes(id)) {
					$("#" + id).classList.toggle("conflict", conflict);
				}

				if (conflict) {
					conflicts.push(id);
				}
			}
		}
	}
};

Editor.prototype.checkAllConflicts = function() {
	let commanders = new Set(), units = new Set();

	// checks for conflicts in all unit links
	for (let element of $$("section a")) {
		if (element.hash == "") {
			continue;
		}

		let unit = element.hash.replace("#", "");

		if (this.commands.checkConflicts(unit)) {
			element.classList.add("conflict");

			commanders.add(element.closest("section").id);
			units.add(unit);
		} else {
			element.classList.remove("conflict");
		}
	}

	// checks for conflicts in "other units with command" list
	for (let element of $$("#units a")) {
		if (element.hash == "") {
			continue;
		}

		let unit = element.hash.replace("#", "");
		element.classList.toggle("conflict", units.has(unit));
	}

	// flags filter icon if section contains conflict
	for (let element of $$(".filter")) {
		element.classList.toggle("conflict", commanders.has(element.value));
	}
};

Editor.prototype.filter = function(unit) {
	let filter = data.units[unit.commander].sortCommander || unit.commander;

	// hides unit lists for commanders other than selected
	for (let element of $$("section")) {
		element.classList.toggle("hidden", element.id != filter);
	}

	// sets commander icon to active
	for (let element of $$(".filter")) {
		element.classList.toggle("active", element.value == filter);
	}

	// sets color scheme to race of commander
	document.documentElement.className = unit.race;
};

Editor.prototype.switchTab = function(value) {
	for (let element of $$(".tab")) {
		element.classList.toggle("active", element.value == value);
	}

	for (let element of $$("#lists ul")) {
		if (element.id == "tabs") {
			continue;
		}

		element.classList.toggle("hidden", element.id != value);
	}

	this.tab = value;
};

Editor.prototype.findUnitsNamed = function(query) {
	query = query.toLowerCase().trim();

	// minimum three characters to search to prevent huge result lists
	if (query.length < 3) {
		this.clearSearch();
		return;
	}

	let matches = new Set(), filters = new Set();

	for (let [unit, properties] of Object.entries(data.units)) {
		if (properties.name == undefined) {
			continue;
		}

		let name = properties.displayName || properties.name;
		name = prepareString(name);

		let keywords = properties.keywords || "";
		keywords = prepareString(keywords);

		if (name.indexOf(query) != -1 || keywords.indexOf(query) != -1) {
			matches.add(unit);
			filters.add(properties.commander);
		}
	}

	if (matches.size > 0) {
		this.matches = Array.from(matches);

		this.formatResults("results", matches);
		this.dimFilters(filters);
	} else {
		this.clearSearch();
	}

	function prepareString(str) {
		// replaces curly quotes
		str = str.replace(/[‘’]/g, "'");
		str = str.replace(/[“”]/g, "\"");

		return str.toLowerCase();
	}
};

Editor.prototype.findUnitsWith = function(id) {
	let matches = new Set();

	for (let [unit, properties] of Object.entries(data.units)) {
		if (properties.commands == undefined) {
			continue;
		}

		let search = [];

		if (Array.isArray(properties.commands)) {
			search = properties.commands;
		} else {
			for (let card of Object.values(properties.commands)) {
				search = search.concat(card); // combines all command cards
			}
		}

		if (search.includes(id)) {
			matches.add(unit);
		}
	}

	$("#code").textContent = id;
	this.formatResults("units", matches);
};

Editor.prototype.findCommandsNamed = function(id) {
	let matches = new Set();

	for (let [command, properties] of Object.entries(data.commands)) {
		if (properties.name == this.command.name) {
			matches.add(command);
		}
	}

	for (let commander of Object.values(data.overrides)) {
		for (let [command, properties] of Object.entries(commander)) {
			if (properties.name == this.command.name) {
				matches.add(command);
			}
		}
	}

	let ul = document.createElement("ul");
	ul.id = "commands";

	for (let match of matches) {
		let command = data.commands[match];
		let li = document.createElement("li");

		let icon = command.icon || DEFAULT_ICON;
		let img = document.createElement("img");
		img.setAttribute("src", ICON_DIR + "/" + icon + ICON_EXT);
		img.setAttribute("alt", "[" + command.name + "]");
		img.setAttribute("title", command.name);
		img.classList.toggle("mask", command.mask || icon == DEFAULT_ICON);
		li.appendChild(img);

		let a = document.createElement("a");
		a.addEventListener("click", function() {
			this.setCommand(match, command);
		}.bind(this));
		a.appendChild(document.createTextNode(match));
		li.appendChild(a);

		let hotkey = this.commands.getHotkeys(this.commander, match);

		if (hotkey != "") {
			li.appendChild(document.createTextNode(" (" + hotkey + ")"));
		}

		ul.appendChild(li);
	}

	$("#commands").replaceWith(ul);
};

Editor.prototype.formatResults = function(id, matches) {
	let ul = document.createElement("ul");
	ul.id = id;

	for (let match of matches) {
		let unit = data.units[match];
		let li = document.createElement("li");

		let icon = unit.icon || DEFAULT_ICON;
		let img = document.createElement("img");
		img.setAttribute("src", ICON_DIR + "/" + icon + ICON_EXT);
		img.setAttribute("alt", "[" + unit.name + "]");
		img.setAttribute("title", unit.name);
		li.appendChild(img);

		let a = document.createElement("a");
		a.href = "#" + match;

		// special case for currently selected unit (which will not fire
		// hashchange event)
		if (this.unit == match) {
			a.classList.add("clear");
		}

		if (unit.type == COMMANDER) {
			let name = data.units[unit.commander].displayName || unit.name;
			a.appendChild(document.createTextNode("Commander: " + name));
		} else {
			let name = data.units[unit.commander].displayName || unit.commander;
			a.appendChild(document.createTextNode(name + ": " + unit.name));
			a.classList.toggle("conflict", this.commands.checkConflicts(match));
		}

		if (unit.suffix != undefined) {
			a.textContent += " (" + unit.suffix + ")";
		}

		li.appendChild(a);
		ul.appendChild(li);
	}

	$("#" + id).replaceWith(ul);
};

Editor.prototype.highlightResult = function(dir) {
	let results = $$("#results li");

	if (dir) { // up arrow
		if (this.selected < 0) {
			// loops back around to bottom
			this.selected = results.length - 1;
		} else {
			this.selected--;
		}
	} else { // down arrow
		if (this.selected >= results.length - 1) {
			// loops back around to top
			this.selected = -1;
		} else {
			this.selected++;
		}
	}

	for (let [i, result] of results.entries()) {
		if (this.selected == i) {
			result.classList.add("selected");
			result.scrollIntoView(); // for long lists with scrollbars
			this.highlightFilter(i);
		} else {
			if (this.selected < 0) {
				for (let element of $$(".filter")) {
					element.classList.remove("highlight");
				}
			}

			result.classList.remove("selected");
		}
	}
};

Editor.prototype.openResult = function() {
	let results = $$("#results a");

	// ignores invalid array indices
	if (this.selected < 0 || this.selected >= results.length) {
		return;
	}

	results[this.selected].click();
};

Editor.prototype.dimFilters = function(filters) {
	filters = Array.from(filters).map(function(filter) {
		return data.units[filter].sortCommander || filter;
	});

	for (let element of $$(".filter")) {
		element.classList.toggle("exclude", !filters.includes(element.value));
	}
};

Editor.prototype.highlightFilter = function(n) {
	let match = this.matches[n];
	let unit = data.units[match];
	let filter = data.units[unit.commander].sortCommander || unit.commander;

	for (let element of $$(".filter")) {
		element.classList.toggle("highlight", element.value == filter);
	}
};

Editor.prototype.clear = function(element) {
	if (element == null) {
		return;
	}

	while (element.lastChild) { // removes all children
		element.removeChild(element.lastChild);
	}
};

Editor.prototype.clearButtons = function() {
	for (let [n, card] of $$(".card").entries()) {
		this.setLegend(" ", n);

		for (let element of $$(`#card${n}>div div`)) {
			element.className = "";
			this.clear(element);
		}

		if (n > 2) { // hides cards after third unless needed
			card.classList.add("hidden");
		}
	}
};

Editor.prototype.clearFields = function() {
	for (let element of $$("#fields h3, #fields p")) {
		this.clear(element);
	}

	this.clear($("#code"));
	this.clear($("#units"));
	this.clear($("#commands"));

	for (let element of $$("#control button, #lists ul")) {
		element.classList.add("hidden");
	}
};

Editor.prototype.clearSearch = function(clearQuery=false) {
	if (clearQuery) {
		$("#query").value = "";
	}

	this.matches = [];
	this.selected = -1;

	this.clear($("#results"));
	$("#results").classList.add("hidden");

	for (let element of $$(".filter")) {
		element.classList.remove("exclude", "highlight");
	}
};

/*
 * Commands prototype
 */

function Commands() {
	this.list = {
		"Commands": {}
	};
	this.suffix = "";
	this.allowSetConflicts = false;
}

Commands.prototype.load = function(list={}) {
	this.list = list;

	if (this.list["Commands"] == undefined) {
		this.list["Commands"] = {};
	}

	// gets suffix used for non-standard base layouts
	if (this.list["Settings"] == undefined) {
		this.suffix = "";
		this.allowSetConflicts = false;
	} else {
		if (this.list["Settings"]["Suffix"] == undefined) {
			this.suffix = "";
		} else {
			// _NRS standard for lefties
			// _GLS grid
			// _GRS grid for lefties
			// _SC1 classic
			this.suffix = this.list["Settings"]["Suffix"];
		}

		let allowSetConflicts = this.list["Settings"]["AllowSetConflicts"];
		this.allowSetConflicts = Boolean(allowSetConflicts);
	}
};

// converts from hotkey file format to object
Commands.prototype.parse = function(text) {
	let list = {}, block = {}, section = "", command = "", hotkey = "";

	let lines = text.split("\n");
	let pattern = /^([\w_\/]+)=([\w,+]*)$/;

	// ensures empty line at end of file so final section block is saved
	lines.push("");

	for (let [i, line] of lines.entries()) {
		// adds section block to object whenever new section block is found
		// or at end of file (for the last section block)
		if (lines.length == i + 1 || line.match(/^\[(\w+)\]$/)) {
			if (section != "") {
				list[section] = block;
				block = {};
			}

			section = line.slice(1, -1);
		}

		// matches command=hotkey pairs
		if (line.match(pattern)) {
			command = line.replace(pattern, "$1");
			hotkey = line.replace(pattern, "$2");
			block[command] = {};
			block[command] = hotkey;
		}
	}

	this.load(list);
};

// converts from object to hotkey file format
Commands.prototype.convert = function() {
	let text = Object.keys(this.list).reduce(function(text, section) {
		let list = Object.keys(this.list[section]).reduce(function(list, id) {
			list.push({id, hotkey: this.list[section][id]});
			return list;
		}.bind(this), []);

		// alphabetizes commands
		list.sort(function(a, b) {
			if (a.id < b.id) {
				return -1;
			}

			return a.id > b.id;
		});

		text += "\n[" + section + "]\n";
		text = list.reduce(function(text, item) {
			return text + item.id + "=" + item.hotkey + "\n";
		}.bind(this), text);

		return text;
	}.bind(this), "");

	return text.trim();
};

Commands.prototype.getCommand = function(commander, unit, id) {
	if (data.commands[id] == undefined) {
		return;
	}

	let command = Object.assign({}, data.commands[id]);

	if (this.checkCommanderOverride(id, commander, false)) {
		command = Object.assign(command, data.overrides[commander][id]);
	}

	if (this.checkUnitOverride(id, unit)) {
		command = Object.assign(command, data.units[unit].overrides[id]);
	}

	return command;
};

Commands.prototype.getHotkeys = function(commander, id) {
	let value = "";

	if (this.checkUserOverride(id, true)) {
		value = this.list["Commands"][id];
	} else if (this.checkCommanderSuffixOverride(id, commander)) {
		value = data.overrides[commander][id]["hotkey" + this.suffix];
	} else if (this.checkCommanderOverride(id, commander, true)) {
		value = data.overrides[commander][id].hotkey;
	} else if (this.checkSuffixOverride(id)) {
		value = data.commands[id]["hotkey" + this.suffix];
	} else {
		value = data.commands[id].hotkey || "";
	}

	let hotkeys = value.split(DELIMITER).map(function(symbol) {
		// converts from file format to display representation
		let keyCode = Object.values(data.keyCodes).find(function(value) {
			return symbol == value.hotkey;
		});

		if (keyCode != undefined) {
			return keyCode.symbol || keyCode.hotkey;
		}

		return symbol;
	});

	return hotkeys;
};

Commands.prototype.setHotkeys = function(command, hotkeys) {
	if (!this.checkUserOverride(command)) {
		this.clear(command);
	}

	hotkeys = hotkeys.filter(function(hotkey) {
		return hotkey != ""; // omits blank entries
	});
	hotkeys = hotkeys.map(function(hotkey) {
		// converts from display format to file representation
		let keyCode = Object.values(data.keyCodes).find(function(value) {
			return hotkey == value.symbol;
		});

		if (keyCode != undefined) {
			return keyCode.hotkey;
		}

		return hotkey;
	});

	this.list["Commands"][command] = "";
	this.list["Commands"][command] = hotkeys.join(DELIMITER);
};

Commands.prototype.checkConflicts = function(id) {
	let unit = data.units[id];

	if (unit != undefined && unit.commands != undefined) {
		let cards = [];

		if (Array.isArray(unit.commands)) {
			cards.push(unit.commands);
		} else {
			cards = Object.values(unit.commands);
		}

		for (let [n, card] of cards.entries()) {
			let keys = {}, sets = {};

			if (n == 0 && (unit.type == UNIT || unit.type == HERO)) {
				card = card.concat(data.common.basic);
			}

			for (let id of card) {
				if (data.commands[id] == undefined) {
					continue;
				}

				let hotkeys = this.getHotkeys(unit.commander, id);
				let hotkeySet = data.commands[id].hotkeySet;

				for (let hotkey of hotkeys) {
					if (hotkey == "") {
						continue;
					}

					if (this.allowSetConflicts && hotkeySet != undefined) {
						// only records same hotkey once per hotkey set (for
						// two-state commands) if set conflicts allowed
						if (sets[hotkeySet] == hotkey) {
							continue;
						}

						sets[hotkeySet] = hotkey;
					}

					if (keys[hotkey] == undefined) {
						keys[hotkey] = 0;
					}

					keys[hotkey]++;

					if (keys[hotkey] > 1) {
						return true;
					}
				}
			}
		}
	}

	return false; // no conflicts
};

Commands.prototype.checkDefaults = function(id, commander) {
	let defaultHotkey = data.commands[id].hotkey;

	if (this.checkCommanderSuffixOverride(id, commander)) {
		defaultHotkey = data.overrides[commander][id]["hotkey" + this.suffix];
	} else if (this.checkCommanderOverride(id, commander, true)) {
		defaultHotkey = data.overrides[commander][id].hotkey;
	}

	let hotkey = this.getHotkeys(commander, id).join(DELIMITER);

	// removes user hotkey if same as default (to avoid redundant entries)
	if (hotkey == defaultHotkey) {
		this.clear(id);
	}
};

// applies only to hotkey
Commands.prototype.checkUserOverride = function(id) {
	if (this.list["Commands"] == undefined) {
		return;
	}

	if (this.list["Commands"][id] == undefined) {
		return;
	}

	return true;
};

// applies to everything but hotkey
Commands.prototype.checkUnitOverride = function(id, unit) {
	if (data.units[unit] == undefined) {
		return;
	}

	if (data.units[unit].overrides == undefined) {
		return;
	}

	if (data.units[unit].overrides[id] == undefined) {
		return;
	}

	return true;
};

// applies only to hotkey
Commands.prototype.checkCommanderSuffixOverride = function(id, commander) {
	if (this.suffix == undefined) {
		return;
	}

	if (data.overrides[commander] == undefined) {
		return;
	}

	if (data.overrides[commander][id] == undefined) {
		return;
	}

	if (data.overrides[commander][id]["hotkey" + this.suffix] == undefined) {
		return;
	}

	return true;
};

Commands.prototype.checkCommanderOverride = function(id, commander, hotkey) {
	if (data.overrides[commander] == undefined) {
		return;
	}

	if (data.overrides[commander][id] == undefined) {
		return;
	}

	if (hotkey && data.overrides[commander][id].hotkey == undefined) {
		return;
	}

	return true;
};

// suffix override only applies to hotkey
Commands.prototype.checkSuffixOverride = function(id) {
	if (this.suffix == undefined) {
		return;
	}

	if (data.commands[id]["hotkey" + this.suffix] == undefined) {
		return;
	}

	return true;
};

Commands.prototype.removeLast = function(id) {
	if (this.checkUserOverride(id)) {
		let fields = this.list["Commands"][id].split(DELIMITER);
		fields.splice(-1, 1);

		this.list["Commands"][id] = fields.join(DELIMITER);
	}
};

Commands.prototype.clear = function(id) {
	delete this.list["Commands"][id];
};

Commands.prototype.reset = function() {
	this.load();
};

/*
 * Overlay prototype
 */

function Overlay(id) {
	this.element = $("#overlay_" + id);
	this.textarea = $("#text_" + id);
}

Overlay.prototype.show = function() {
	this.element.classList.add("open");
	this.focus();
};

Overlay.prototype.hide = function() {
	this.element.classList.remove("open");
};

Overlay.prototype.getText = function() {
	return this.textarea.value;
};

Overlay.prototype.setText = function(text) {
	this.textarea.value = text;
};

Overlay.prototype.focus = function() {
	this.textarea.focus();
	this.textarea.setSelectionRange(0, 0);
};

Overlay.prototype.select = function() {
	this.textarea.select();
};

/*
 * Storage prototype
 */

function Storage(name) {
	this.name = name;
}

Storage.prototype.load = function() {
	try {
		let contents = localStorage.getItem(this.name);

		if (contents != null) {
			let obj = JSON.parse(contents);

			// converts from old format
			for (let section of Object.keys(obj)) {
				for (let [key, value] of Object.entries(obj[section])) {
					if (typeof value == "object" && value.hotkey != undefined) {
						obj[section][key] = value.hotkey;
					}
				}
			}

			return obj;
		}
	} catch (err) {
		console.error(err);
		this.reset();
		return null;
	}
};

Storage.prototype.save = function(list) {
	if (list["Commands"] == undefined) {
		return;
	}

	try {
		// saves storage if:
		// it contains more than one section ("Commands" is always present)
		// or "Commands" is not empty (and therefore contains custom values)
		if (
			Object.keys(list).length > 1
			|| Object.keys(list["Commands"]).length
		) {
			localStorage.setItem(this.name, JSON.stringify(list));
		} else {
			this.reset();
		}
	} catch (err) {
		console.error(err);
	}
};

Storage.prototype.reset = function() {
	try {
		localStorage.removeItem(this.name);
	} catch (err) {
		console.error(err);
	}
};