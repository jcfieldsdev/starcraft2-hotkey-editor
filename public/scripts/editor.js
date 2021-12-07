/******************************************************************************
 * Starcraft II Hotkey Editor                                                 *
 *                                                                            *
 * Copyright (C) 2018 J.C. Fields (jcfields@jcfields.dev).                    *
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
const CARDS = 3;
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
const ANNOYED_CLICKS = 5;
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

	const mem = store.load();

	if (mem != null) {
		commands.load(mem);
	}

	editor.load();

	window.addEventListener("beforeunload", function() {
		store.save(commands);
	});
	window.addEventListener("hashchange", function() {
		// changes on link or browser back/forward
		editor.load();
	});
	window.addEventListener("keyup", function(event) {
		const keyCode = event.keyCode;

		if (keyCode == 27) { // Esc
			for (const overlay of Object.values(overlays)) {
				overlay.hide();
			}
		}
	});

	let clicks = 0;

	document.addEventListener("click", function(event) {
		const element = event.target;

		if (element.closest("#open")) {
			const file = overlays.load.getText();

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
			store.save(commands);
			overlays.save.setText(commands.convert());
			overlays.save.show();
		}

		if (element.matches("#download")) {
			const file = new Blob([overlays.save.getText()], {type: MIME_TYPE});

			const a = $("#link");
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
			clicks++;

			if (clicks >= ANNOYED_CLICKS) {
				const audio = new Audio([ICON_DIR, ANNOYED_SOUND].join("/"));
				audio.play();
				clicks = 0;
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

		if (element.closest(".icon")) {
			editor.setCommand(element.closest(".icon").value);
		}

		if (element.matches(".command")) {
			editor.setCommand(element.textContent);
		}

		if (element.matches(".tab")) {
			editor.switchTab(element.value);
		}
	});
	document.addEventListener("input", function(event) {
		const element = event.target;

		if (element.matches("#query")) {
			editor.findUnitsNamed(element.value);
		}
	});
	document.addEventListener("keydown", function(event) {
		const element = event.target;

		if (element.matches("#hotkey input")) {
			// ignores input if modifier key held
			if (!event.ctrlKey && !event.altKey && !event.metaKey) {
				event.preventDefault();
				editor.setHotkey(element, event);
			}
		}

		if (element.matches("#query")) {
			const keyCode = event.keyCode;

			if (keyCode == 13) { // return/enter
				editor.openResult();
			}

			if (keyCode == 27) { // Esc
				editor.clearSearch(true);
			}

			if (keyCode == 38) { // up arrow
				editor.selectResult(true);
			}

			if (keyCode == 40) { // down arrow
				editor.selectResult(false);
			}
		}
	});
	document.addEventListener("mouseover", function(event) {
		const element = event.target;

		if (element.matches("#results li")) {
			editor.selected = $$("#results li").findIndex(function(item) {
				return item == element;
			});
			editor.highlightResult();
		}
	});

	$("#file").addEventListener("change", function(event) {
		const file = event.target.files[0];

		if (file != null) {
			const reader = new FileReader();
			reader.addEventListener("load", function(event) {
				overlays.load.setText(event.target.result);
			});
			reader.readAsText(file);
		}
	});

	for (const element of $$("#query, textarea")) {
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

	this.filter = "";
	this.name = "";
	this.id = "";

	this.buttons = [];
	this.tab = "units";

	this.matches = [];
	this.selected = -1; // selected search result
}

Editor.prototype.load = function() {
	let name = "";

	// gets current unit from URL if specified
	if (window.location.hash != "") {
		name = window.location.hash.replace("#", ""); // chops initial #
	} else {
		name = DEFAULT_UNIT;
	}

	this.setUnit(name);
};

Editor.prototype.open = function() {
	this.clearButtons();
	this.clearFields();
	this.unitEditor();
};

Editor.prototype.setUnit = function(name) {
	this.name = name;

	if (data.units[this.name] != undefined) {
		this.filter = data.units[this.name].commander;
		this.filterUnits(data.units[this.name]);
	}

	this.clearSearch(true);
	this.open();
};

Editor.prototype.setCommand = function(id) {
	this.id = id;

	this.commandEditor();
	this.switchTab(this.tab);
};

Editor.prototype.unitEditor = function() {
	const unit = data.units[this.name];

	if (unit == undefined) {
		console.error(`Undefined: ${this.name} (unit)`);
		return;
	}

	if (unit.type == COMMANDER) {
		this.setUnit(unit.defaultUnit);
		return;
	}

	const icon = unit.icon || DEFAULT_ICON;
	const img = $("#unit img");
	img.setAttribute("src", [ICON_DIR, icon + ICON_EXT].join("/"));
	img.setAttribute("alt", "[" + unit.name + "]");
	img.setAttribute("title", unit.name);

	$("#unit span").textContent = unit.name;

	let commands = [], legends = [];
	this.buttons = [];

	if (Array.isArray(unit.commands)) {
		commands.push(unit.commands);
		legends.push(unit.name);
	} else {
		commands = Object.values(unit.commands);
		legends = Object.keys(unit.commands);
	}

	for (const n of commands.keys()) {
		this.setLegend(legends[n], n);
		createCommandCard.call(this, unit, commands[n], n);
	}

	this.setVisibleHotkeys();
	this.checkAllConflicts();

	function createCommandCard(unit, commands, n) {
		// adds common commands
		if (n == 0 && (unit.type == UNIT || unit.type == HERO)) {
			commands = commands.concat(data.common.basic);
		}

		const fieldset = $("#card" + n);
		const buttons = [];

		// prevents error if unit has more command cards than HTML file
		if (fieldset == null) {
			return;
		}

		if (n > CARDS - 1) { // unhides extra card
			fieldset.hidden = false;
		}

		for (const id of commands) {
			const command = this.commands.getCommand(
				unit.commander, this.name, id
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
			if (this.id == id) {
				this.setCommand(id);
			}

			const button = createButton.call(this, id, command, n);
			const pos = COLS * command.y + command.x;
			$$(`#card${n} .button`)[pos].replaceWith(button);
		}

		this.buttons.push(buttons);
	}

	function createButton(id, command, n) {
		const div = document.createElement("div");
		div.className = "button";

		const icon = command.icon || DEFAULT_ICON;
		const img = document.createElement("img");
		img.setAttribute("src", [ICON_DIR, icon + ICON_EXT].join("/"));
		img.setAttribute("alt", "[" + command.name + "]");
		img.setAttribute("title", command.name);
		img.classList.toggle("mask", command.mask || icon == DEFAULT_ICON);

		const button = document.createElement("button");
		button.className = "icon";
		button.setAttribute("type", "button");
		button.setAttribute("value", id);
		button.appendChild(img);

		const span = document.createElement("span");
		span.id = "span_" + n + command.y + command.x;
		button.appendChild(span);
		div.appendChild(button);

		return div;
	}
};

Editor.prototype.createInput = function(hotkey="") {
	const input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("value", hotkey);

	return input;
};

Editor.prototype.setLegend = function(title, n) {
	const legend = $(`#card${n} legend`);
	legend.textContent = title;
	legend.hidden = !Boolean(title);
};

Editor.prototype.commandEditor = function(n) {
	const hotkeys = this.commands.getHotkeys(this.filter, this.id);
	this.formatHotkey(hotkeys);

	// automatically selects last hotkey field
	if (hotkeys.length > 0) {
		$("#hotkey").lastChild.focus();
	}

	const command = this.commands.getCommand(
		data.units[this.name].commander, this.name, this.id
	);

	$("#command").innerHTML = command.name.replace(/\n/g, "<br>");
	$("#prereq").textContent = command.prereq || "";

	this.findUnitsWith(this.id);
	this.findCommandsNamed(this.id);

	for (const element of $$("#control button, #tabs")) {
		element.hidden = false;
	}
};

Editor.prototype.addField = function() {
	const element = $("#hotkey");

	// will not add new field if current field is empty
	if (element.lastChild.value == "") {
		element.lastChild.focus();
		return;
	}

	const input = this.createInput();
	element.appendChild(input);
	input.focus();
};

Editor.prototype.removeField = function() {
	const element = $("#hotkey");

	if (element.childElementCount > 1) {
		element.removeChild(element.lastChild);
		this.commands.removeLast(this.id);
		this.commands.checkDefaults(this.id, this.filter);
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
	const p = document.createElement("p");
	p.id = "hotkey";

	const element = $("#" + p.id);

	if (hotkeys.length == 0) { // hides field if empty
		element.replaceWith(p);
		element.hidden = true;
	} else {
		for (const hotkey of hotkeys) { // handles multiple hotkeys
			p.appendChild(this.createInput(hotkey));
		}

		element.replaceWith(p);
		element.hidden = false;
	}
};

Editor.prototype.setHotkey = function(input, event) {
	if (event.keyCode in data.keyInfo) {
		input.value = data.keyInfo[event.keyCode].symbol;
	}

	const fields = [];

	for (const element of $$("#hotkey input")) {
		fields.push(element.value);
	}

	this.commands.setHotkeys(this.id, fields);
	this.commands.checkDefaults(this.id, this.filter);

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
	for (const [n, card] of this.buttons.entries()) {
		const keys = {}, sets = {};

		for (const command of card) {
			if (command == "") {
				continue;
			}

			const hotkeys = this.commands.getHotkeys(this.filter, command.id);
			const hotkeySet = data.commands[command.id].hotkeySet || "";

			const spanId = "span_" + n + command.y + command.x;
			$("#" + spanId).textContent = hotkeys[0];

			// records hotkey set if specified and "allow set conflicts" is on
			if (this.commands.allowSetConflicts && hotkeySet != "") {
				sets[spanId] = hotkeySet;
			}

			for (const hotkey of hotkeys) {
				if (hotkey == "") {
					continue;
				}

				if (keys[hotkey] == undefined) {
					// using set to prevent duplicates so a hotkey cannot
					// conflict with itself
					keys[hotkey] = new Set();
				}

				keys[hotkey].add(spanId);
			}
		}

		// tracks conflicts outside of loop so conflicts can be detected in
		// commands with multiple hotkeys, else class will be toggled an
		// unpredictable amount
		const conflicts = [];

		for (const spanIds of Object.values(keys)) {
			for (const spanId of spanIds) {
				let size = spanIds.size;

				if (this.commands.allowSetConflicts && size > 1) {
					for (const [checkId, checkSet] of Object.entries(sets)) {
						if (spanId == checkId || sets[spanId] != checkSet) {
							continue;
						}

						// ignores hotkey conflict if it comes from a member
						// of the same set
						if (spanIds.has(checkId)) {
							size--;
						}
					}
				}

				const conflict = size > 1;

				if (!conflicts.includes(spanId)) {
					$("#" + spanId).classList.toggle("conflict", conflict);
				}

				if (conflict) {
					conflicts.push(spanId);
				}
			}
		}
	}
};

Editor.prototype.checkAllConflicts = function() {
	const commanders = new Set();
	const names = new Set();

	// checks for conflicts in all unit links
	for (const element of $$("section a")) {
		if (element.hash == "") {
			continue;
		}

		const name = element.hash.replace("#", "");

		if (this.commands.checkConflicts(name)) {
			element.classList.add("conflict");

			commanders.add(element.closest("section").id);
			names.add(name);
		} else {
			element.classList.remove("conflict");
		}
	}

	// checks for conflicts in "other units with command" list
	for (const element of $$("#units a")) {
		if (element.hash == "") {
			continue;
		}

		const name = element.hash.replace("#", "");
		element.classList.toggle("conflict", names.has(name));
	}

	// flags filter icon if section contains conflict
	for (const element of $$(".filter")) {
		element.classList.toggle("conflict", commanders.has(element.value));
	}
};

Editor.prototype.filterUnits = function(unit) {
	const filter = data.units[unit.commander].sortCommander || unit.commander;

	// hides unit lists for commanders other than selected
	for (const element of $$("section")) {
		element.hidden = element.id != filter;
	}

	// sets commander icon to active
	for (const element of $$(".filter")) {
		element.classList.toggle("active", element.value == filter);
	}

	// sets color scheme to race of commander
	document.documentElement.className = unit.race;
};

Editor.prototype.switchTab = function(value) {
	for (const element of $$(".tab")) {
		element.classList.toggle("active", element.value == value);
	}

	for (const element of $$("#lists ul")) {
		if (element.id == "tabs") {
			continue;
		}

		element.hidden = element.id != value;
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

	const matches = new Set();
	const filters = new Set();

	for (const [name, properties] of Object.entries(data.units)) {
		if (properties.name == undefined) {
			continue;
		}

		const search = prepareString(properties.displayName || properties.name);
		const keywords = prepareString(properties.keywords || "");

		if (search.includes(query) || keywords.includes(query)) {
			matches.add(name);
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
	const matches = new Set();

	for (const [name, properties] of Object.entries(data.units)) {
		if (properties.commands == undefined) {
			continue;
		}

		let ids = [];

		if (Array.isArray(properties.commands)) {
			ids = properties.commands;
		} else {
			for (const card of Object.values(properties.commands)) {
				ids = ids.concat(card); // combines all command cards
			}
		}

		if (ids.includes(id)) {
			matches.add(name);
		}
	}

	$("#code").textContent = id;
	this.formatResults("units", matches);
};

Editor.prototype.findCommandsNamed = function(id) {
	const matches = new Set();
	const command = this.commands.getCommand(
		data.units[this.name].commander, this.name, this.id
	);

	for (const [id, properties] of Object.entries(data.commands)) {
		if (properties.name == command.name) {
			matches.add(id);
		}
	}

	for (const commander of Object.values(data.overrides)) {
		for (const [id, properties] of Object.entries(commander)) {
			if (properties.name == command.name) {
				matches.add(id);
			}
		}
	}

	const ul = document.createElement("ul");
	ul.id = "commands";

	for (const match of matches) {
		const command = data.commands[match];
		const li = document.createElement("li");

		const icon = command.icon || DEFAULT_ICON;
		const img = document.createElement("img");
		img.setAttribute("src", [ICON_DIR, icon + ICON_EXT].join("/"));
		img.setAttribute("alt", "[" + command.name + "]");
		img.setAttribute("title", command.name);
		img.classList.toggle("mask", command.mask || icon == DEFAULT_ICON);
		li.appendChild(img);

		const a = document.createElement("a");
		a.className = "command";
		a.appendChild(document.createTextNode(match));
		li.appendChild(a);

		const hotkey = this.commands.getHotkeys(this.filter, match);

		if (hotkey != "") {
			li.appendChild(document.createTextNode(" (" + hotkey + ")"));
		}

		ul.appendChild(li);
	}

	$("#commands").replaceWith(ul);
};

Editor.prototype.formatResults = function(id, matches) {
	const ul = document.createElement("ul");
	ul.id = id;

	for (const match of matches) {
		const unit = data.units[match];
		const li = document.createElement("li");

		const icon = unit.icon || DEFAULT_ICON;
		const img = document.createElement("img");
		img.setAttribute("src", [ICON_DIR, icon + ICON_EXT].join("/"));
		img.setAttribute("alt", "[" + unit.name + "]");
		img.setAttribute("title", unit.name);
		li.appendChild(img);

		const a = document.createElement("a");
		a.href = "#" + match;

		// special case for currently selected unit (which will not fire
		// hashchange event)
		if (this.name == match) {
			a.classList.add("clear");
		}

		const displayName = data.units[unit.commander].displayName;

		if (unit.type == COMMANDER) {
			const name = displayName || unit.name;
			a.appendChild(document.createTextNode("Commander: " + name));
		} else {
			const name = displayName || unit.commander;
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

Editor.prototype.selectResult = function(dir) {
	const results = $$("#results li");

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

	this.highlightResult();
};

Editor.prototype.highlightResult = function() {
	for (const [i, result] of $$("#results li").entries()) {
		if (this.selected == i) {
			result.classList.add("selected");
			result.scrollIntoView(); // for long lists with scrollbars
			this.highlightFilter(i);
		} else {
			if (this.selected < 0) {
				for (const element of $$(".filter")) {
					element.classList.remove("highlight");
				}
			}

			result.classList.remove("selected");
		}
	}
};

Editor.prototype.openResult = function() {
	const results = $$("#results a");

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

	for (const element of $$(".filter")) {
		element.classList.toggle("exclude", !filters.includes(element.value));
	}
};

Editor.prototype.highlightFilter = function(n) {
	const match = this.matches[n];
	const unit = data.units[match];
	const filter = data.units[unit.commander].sortCommander || unit.commander;

	for (const element of $$(".filter")) {
		element.classList.toggle("highlight", element.value == filter);
	}
};

Editor.prototype.clearElements = function(element) {
	if (element == null) {
		return;
	}

	while (element.lastChild) { // removes all children
		element.removeChild(element.lastChild);
	}
};

Editor.prototype.clearButtons = function() {
	for (const [n, card] of $$(".card").entries()) {
		this.setLegend(" ", n);

		for (const element of $$(`#card${n} .button`)) {
			this.clearElements(element);
		}

		if (n > CARDS - 1) { // hides cards after third unless needed
			card.hidden = true;
		}
	}
};

Editor.prototype.clearFields = function() {
	for (const element of $$("#fields h3, #fields p")) {
		this.clearElements(element);
	}

	this.clearElements($("#code"));
	this.clearElements($("#units"));
	this.clearElements($("#commands"));

	for (const element of $$("#control button, #lists ul")) {
		element.hidden = true;
	}
};

Editor.prototype.clearSearch = function(clearQuery=false) {
	if (clearQuery) {
		$("#query").value = "";
	}

	this.matches = [];
	this.selected = -1;

	this.clearElements($("#results"));
	$("#results").hidden = true;

	for (const element of $$(".filter")) {
		element.classList.remove("exclude", "highlight");
	}
};

/*
 * Commands prototype
 */

function Commands() {
	this.list = {
		Commands: {}
	};
	this.suffix = "";
	this.allowSetConflicts = false;
}

Commands.prototype.load = function(list={}) {
	this.list = list;

	if (this.list.Commands == undefined) {
		this.list.Commands = {};
	}

	// gets suffix used for non-standard base layouts
	if (this.list.Settings == undefined) {
		this.suffix = "";
		this.allowSetConflicts = false;
	} else {
		if (this.list.Settings.Suffix == undefined) {
			this.suffix = "";
		} else {
			// _NRS standard for lefties
			// _GLS grid
			// _GRS grid for lefties
			// _SC1 classic
			this.suffix = this.list.Settings.Suffix;
		}

		this.allowSetConflicts = Boolean(this.list.Settings.AllowSetConflicts);
	}
};

// converts from hotkey file format to object
Commands.prototype.parse = function(text) {
	const list = {};
	let block = {}, section = "", command = "", hotkey = "";

	const lines = text.split("\n");
	const pattern = /^([\w_\/]+)=([\w,+]*)$/;

	// ensures empty line at end of file so final section block is saved
	lines.push("");

	for (const [i, line] of lines.entries()) {
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
	let text = "";

	for (const [section, block] of Object.entries(this.list)) {
		text += "\n[" + section + "]\n";

		for (const command of Object.keys(block).sort()) {
			text += command + "=" + block[command] + "\n";
		}
	}

	return text.trim();
};

Commands.prototype.getCommand = function(commander, name, id) {
	if (data.commands[id] == undefined) {
		return;
	}

	let command = Object.assign({}, data.commands[id]);

	if (this.checkCommanderOverride(id, commander, false)) {
		command = Object.assign(command, data.overrides[commander][id]);
	}

	if (this.checkUnitOverride(id, name)) {
		command = Object.assign(command, data.units[name].overrides[id]);
	}

	return command;
};

Commands.prototype.getHotkeys = function(commander, id) {
	let value = "";

	if (this.checkUserOverride(id, true)) {
		value = this.list.Commands[id];
	} else if (this.checkCommanderSuffixOverride(id, commander)) {
		value = data.overrides[commander][id]["hotkey" + this.suffix];
	} else if (this.checkCommanderOverride(id, commander, true)) {
		value = data.overrides[commander][id].hotkey;
	} else if (this.checkSuffixOverride(id)) {
		value = data.commands[id]["hotkey" + this.suffix];
	} else {
		value = data.commands[id].hotkey || "";
	}

	return value.split(DELIMITER).map(function(symbol) {
		// converts from file format to display representation
		const keyCode = Object.values(data.keyInfo).find(function(value) {
			return symbol == value.hotkey;
		});

		if (keyCode != undefined) {
			return keyCode.symbol;
		}

		return symbol;
	});
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
		const keyCode = Object.values(data.keyInfo).find(function(value) {
			return hotkey == value.symbol;
		});

		if (keyCode != undefined) {
			return keyCode.hotkey;
		}

		return hotkey;
	});

	this.list.Commands[command] = "";
	this.list.Commands[command] = hotkeys.join(DELIMITER);
};

Commands.prototype.checkConflicts = function(id) {
	const unit = data.units[id];

	if (unit != undefined && unit.commands != undefined) {
		let cards = [];

		if (Array.isArray(unit.commands)) {
			cards.push(unit.commands);
		} else {
			cards = Object.values(unit.commands);
		}

		for (const [n, card] of cards.entries()) {
			const keys = {}, sets = {};
			let buttons = card;

			if (n == 0 && (unit.type == UNIT || unit.type == HERO)) {
				buttons = card.concat(data.common.basic);
			}

			for (const id of buttons) {
				if (data.commands[id] == undefined) {
					continue;
				}

				const hotkeys = this.getHotkeys(unit.commander, id);
				const hotkeySet = data.commands[id].hotkeySet;

				for (const hotkey of hotkeys) {
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

	const hotkey = this.getHotkeys(commander, id).join(DELIMITER);

	// removes user hotkey if same as default (to avoid redundant entries)
	if (hotkey == defaultHotkey) {
		this.clear(id);
	}
};

// applies only to hotkey
Commands.prototype.checkUserOverride = function(id) {
	if (this.list.Commands == undefined) {
		return;
	}

	if (this.list.Commands[id] == undefined) {
		return;
	}

	return true;
};

// applies to everything but hotkey
Commands.prototype.checkUnitOverride = function(id, name) {
	if (data.units[name] == undefined) {
		return;
	}

	if (data.units[name].overrides == undefined) {
		return;
	}

	if (data.units[name].overrides[id] == undefined) {
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
		const fields = this.list.Commands[id].split(DELIMITER);
		fields.splice(-1, 1);

		this.list.Commands[id] = fields.join(DELIMITER);
	}
};

Commands.prototype.clear = function(id) {
	delete this.list.Commands[id];
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
		return JSON.parse(localStorage.getItem(this.name));
	} catch (err) {
		console.error(err);
		this.reset();
		return null;
	}
};

Storage.prototype.save = function(commands) {
	const list = commands.list;

	if (list.Commands == undefined) {
		return;
	}

	try {
		// saves storage if:
		// it contains more than one section ("Commands" is always present)
		// or "Commands" is not empty (and therefore contains custom values)
		if (Object.keys(list).length > 1 || Object.keys(list.Commands).length) {
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