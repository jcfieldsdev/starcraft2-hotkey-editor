"use strict";

/*
 * constants
 */

// dimensions of command cards
const ROWS=3;
const COLS=5;

// defaults
const DEFAULT_UNIT="Raynor_SCV";
const DEFAULT_SAVE_NAME="Hotkeys.SC2Hotkeys";
const ICONS_DIR="icons/";
const ICONS_EXT=".png";
const HELP_PAGE="help.html";

// delimiter for multiple hotkeys
const DELIMITER=",";

// objects
const store=new Storage("sc2hk");
const overlays={
	load: new Overlay("load"),
	save: new Overlay("save")
};
const commands=new Commands();
const editor=new Editor();

/*
 * initialization
 */

window.addEventListener("load", function() {
	let saved=store.load();

	if (saved!=null) {
		commands.load(saved);
	}

	editor.load();

	// sets event listeners
	document.getElementById("open").addEventListener("click", function() {
		let file=overlays.load.getText();

		if (file!="") {
			commands.parse(file);
			editor.open();
			overlays.load.hide();
		}
	});
	document.getElementById("reset").addEventListener("click", function() {
		commands.reset();
		store.reset();

		editor.open();

		overlays.load.setText("");
		overlays.load.hide();
	});
	document.getElementById("copy").addEventListener("click", function() {
		overlays[this.value].select();
		document.execCommand("copy");
	});
	document.getElementById("download").addEventListener("click", function() {
		let contents=new Blob([overlays.save.getText()], {type: "text/plain"});

		let a=document.getElementById("link");
		a.download=DEFAULT_SAVE_NAME;
		a.href=window.URL.createObjectURL(contents);
		a.click();
		window.URL.revokeObjectURL(contents);
	});
	document.getElementById("help").addEventListener("click", function() {
		window.location=HELP_PAGE;
	});
	document.getElementById("load").addEventListener("click", function() {
		overlays.load.show();
	});
	document.getElementById("save").addEventListener("click", function() {
		store.save(commands.list);
		overlays.save.setText(commands.convert());
		overlays.save.show();
	});
	document.getElementById("file").addEventListener("input", function(event) {
		let file=event.target.files[0];

		if (file) {
			let reader=new FileReader();
			reader.addEventListener("load", function(event) {
				overlays.load.setText(event.target.result);
			});
			reader.readAsText(file);
		}
	});
	disableAutocomplete(document.getElementById("text_load"));
	disableAutocomplete(document.getElementById("text_save"));

	window.addEventListener("beforeunload", function() {
		// saves on close
		store.save(commands.list);
	});
	window.addEventListener("hashchange", function() {
		// changes on link or browser back/forward
		editor.load();
	});
	window.addEventListener("keyup", function(event) {
		if (event.keyCode==27) { // Esc
			Object.values(overlays).forEach(function(overlay) {
				overlay.hide();
			});
		}
	});


	let query=document.getElementById("query");

	query.addEventListener("input", function() {
		editor.findUnitsNamed(this.value);
	});
	query.addEventListener("keydown", function(event) {
		if (event.keyCode==13) { // return/enter
			editor.openResult();
		}

		if (event.keyCode==27) { // Esc
			editor.clearSearch(true);
		}

		if (event.keyCode==38) { // up arrow
			editor.highlightResult(true);
		}

		if (event.keyCode==40) { // down arrow
			editor.highlightResult(false);
		}
	});
	disableAutocomplete(query);

	let filters=document.getElementsByClassName("filter");

	for (let element of filters) {
		element.addEventListener("click", function() {
			window.location.hash=data.units[this.value].defaultUnit;
		});
	}

	let close=document.getElementsByClassName("close");

	for (let element of close) {
		element.addEventListener("click", function() {
			overlays[this.value].hide();
		});
	}

	function disableAutocomplete(input) {
		input.setAttribute("autocomplete", "off");
		input.setAttribute("autocorrect", "off");
		input.setAttribute("autocapitalize", "off");
		input.setAttribute("spellcheck", "false");
	}
});

/*
 * Editor prototype
 */

function Editor() {
	this.unit="";
	this.commander="";
	this.buttons=[];
	this.selected=-1; // selected search result
}

Editor.prototype.load=function() {
	let unit="";

	// gets current unit from URL if specified
	if (window.location.hash!="") {
		unit=window.location.hash.replace("#", ""); // chops initial #
	} else {
		unit=DEFAULT_UNIT;
	}

	this.setUnit(unit);
};

Editor.prototype.open=function() {
	this.clearButtons();
	this.clearFields();
	this.unitEditor();
};

Editor.prototype.setUnit=function(unit) {
	this.unit=unit;

	if (data.units[this.unit]==undefined) {
		console.error("Undefined: "+this.unit+" (unit)");
	} else {
		this.commander=data.units[this.unit].commander;
		console.log("Unit: "+data.units[this.unit].name+" ("+this.unit+")");
		this.filter(data.units[this.unit]);
	}

	this.clearSearch(true);
	this.open();
};

Editor.prototype.setCommand=function(command, name) {
	this.command=command;
	this.name=name.replace(/\n/g, "<br>");
	console.log("Command: "+name+" ("+command+")");

	this.commandEditor();
};

Editor.prototype.unitEditor=function() {
	let unit=data.units[this.unit];

	if (unit==undefined) {
		return;
	}

	if (unit.type==COMMANDER) {
		this.setUnit(unit.defaultUnit);
		return;
	}

	let h2=document.createElement("h2");
	h2.id="unit";

	if (unit.icon!=undefined) {
		let img=document.createElement("img");
		img.setAttribute("src", ICONS_DIR+unit.icon+ICONS_EXT);
		img.setAttribute("alt", "["+unit.name+"]");
		img.setAttribute("title", unit.name);
		h2.appendChild(img);
	}

	h2.appendChild(document.createTextNode(unit.name));
	document.getElementById("unit").replaceWith(h2);

	let cards=[], legends=[];
	this.buttons=[];

	if (Array.isArray(unit.commands)) {
		cards.push(unit.commands);
		legends.push(unit.name);
	} else {
		cards=Object.values(unit.commands);
		legends=Object.keys(unit.commands);
	}

	for (let n in cards) {
		this.setLegend(legends[n], n);
		this.createCommandCard(unit, cards[n], n);
	}

	this.setVisibleHotkeys();
	this.checkAllConflicts();
};

Editor.prototype.createCommandCard=function(unit, card, n) {
	// adds common commands
	if (n==0&&(unit.type==UNIT||unit.type==HERO)) {
		card=card.concat(data.common.basic);
	}

	let fieldset=document.getElementById("card"+n);
	let buttons=[];

	// prevents error if unit has more command cards than HTML file
	if (fieldset==null) {
		return;
	}

	if (n>2) { // unhides extra card
		fieldset.classList.remove("hidden");
	}

	card.forEach(function(id) {
		let command=commands.getCommand(unit.commander, id);

		if (command==undefined) {
			console.error("Undefined: "+id+" (command)");
			return;
		}

		buttons.push({
			id,
			y: command.y,
			x: command.x
		});

		// re-selects command if selected on previously viewed unit
		if (this.command==id) {
			this.setCommand(id, command.name);
		}

		let button=this.createButton(id, command, n);
		let pos=COLS*command.y+command.x;
		let cell=fieldset.getElementsByTagName("div")[0].children[pos];
		cell.replaceWith(button);
	}, this);

	this.buttons.push(buttons);
};

Editor.prototype.createButton=function(id, command, n) {
	let div=document.createElement("div");
	let img=document.createElement("img");
	img.setAttribute("src", ICONS_DIR+command.icon+ICONS_EXT);
	img.setAttribute("alt", "["+command.name+"]");
	img.setAttribute("title", command.name);
	img.addEventListener("click", function() {
		this.setCommand(id, command.name);
	}.bind(this));
	img.classList.toggle("mask", command.mask);
	div.appendChild(img);

	let span=document.createElement("span");
	span.id="span_"+n+command.y+command.x;
	div.appendChild(span);

	return div;
};

Editor.prototype.createInput=function(hotkey="") {
	let input=document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("value", hotkey);
	input.addEventListener("click", function() {
		this.select();
	});
	input.addEventListener("keydown", function(event) {
		// ignores input if modifier key held
		if (!event.ctrlKey&&!event.altKey&&!event.metaKey) {
			event.preventDefault();
			this.setHotkey(input, event);
		}
	}.bind(this));

	return input;
};

Editor.prototype.setLegend=function(title, n) {
	let fieldset=document.getElementById("card"+n);
	let legend=fieldset.getElementsByTagName("legend")[0];

	legend.textContent=title;
	legend.classList.toggle("hidden", !title);
};

Editor.prototype.clear=function(element) {
	if (element==null) {
		return;
	}

	while (element.lastChild) { // removes all children
		element.removeChild(element.lastChild);
	}
};

Editor.prototype.clearButtons=function() {
	let cards=document.getElementsByClassName("card");

	Array.from(cards).forEach(function(card, n) {
		let buttons=card.getElementsByTagName("div")[0].children;
		this.setLegend(" ", n);

		for (let element of buttons) {
			element.className="";
			this.clear(element);
		}

		if (n>2) { // hides cards after third unless needed
			card.classList.add("hidden");
		}
	}, this);
};

Editor.prototype.clearFields=function() {
	let fields=document.getElementById("fields").children;

	for (let element of fields) {
		this.clear(element);
	}

	this.clear(document.getElementById("code"));
	this.clear(document.getElementById("other"));
};

Editor.prototype.clearSearch=function(clearQuery=false) {
	if (clearQuery) {
		document.getElementById("query").value="";
	}

	this.selected=-1;
	this.clear(document.getElementById("results"));
	document.getElementById("results").classList.add("hidden");
};

Editor.prototype.commandEditor=function(n) {
	if (data.common.basic.includes(this.command)) {
		this.clearFields();
	} else {
		this.findUnitsWith(this.command);
	}

	let hotkeys=commands.getHotkeys(this.commander, this.command);
	this.formatHotkey(hotkeys);

	// automatically selects last hotkey field
	if (hotkeys.length>0) {
		document.getElementById("hotkey").lastChild.select();
	}

	document.getElementById("command").innerHTML=this.name;

	let p=document.createElement("p");
	p.id="control";

	let button=document.createElement("button");
	button.setAttribute("type", "button");
	button.addEventListener("click", function() {
		this.addField();
	}.bind(this));
	button.appendChild(document.createTextNode("Add"));
	p.appendChild(button);

	button=document.createElement("button");
	button.setAttribute("type", "button");
	button.addEventListener("click", function() {
		this.removeField();
	}.bind(this));
	button.appendChild(document.createTextNode("Remove"));
	p.appendChild(button);

	button=document.createElement("button");
	button.setAttribute("type", "button");
	button.addEventListener("click", function() {
		this.resetDefaults();
	}.bind(this));
	button.appendChild(document.createTextNode("Reset"));
	p.appendChild(button);

	document.getElementById("control").replaceWith(p);
};

Editor.prototype.addField=function() {
	let element=document.getElementById("hotkey");

	// will not add new field if current field is empty
	if (element.lastChild.value=="") {
		element.lastChild.select();
		return;
	}

	let input=this.createInput();
	element.appendChild(input);
	input.select();
};

Editor.prototype.removeField=function() {
	let element=document.getElementById("hotkey");

	if (element.childElementCount>1) {
		element.removeChild(element.lastChild);
		commands.removeLast(this.command);
		commands.checkDefaults(this.commander, this.command);
	} else { // last field
		element.lastChild.value="";
		commands.setHotkeys(this.command, []);
	}

	element.lastChild.select();

	this.setVisibleHotkeys();
	this.checkAllConflicts();
};

Editor.prototype.formatHotkey=function(hotkeys) {
	let p=document.createElement("p");
	p.id="hotkey";

	if (hotkeys.length==0) { // hides field if empty
		document.getElementById(p.id).replaceWith(p);
		document.getElementById(p.id).classList.add("hidden");
		return;
	}

	// handles multiple hotkeys
	hotkeys.forEach(function(hotkey) {
		p.appendChild(this.createInput(hotkey));
	}, this);

	document.getElementById(p.id).classList.remove("hidden");
	document.getElementById(p.id).replaceWith(p);
};

Editor.prototype.setHotkey=function(input, event) {
	if (event.keyCode in data.keyCodes) {
		let keyCode=data.keyCodes[event.keyCode];
		input.value=keyCode.symbol||keyCode.hotkey;
	}

	let inputs=document.getElementById("hotkey").getElementsByTagName("input");
	let fields=[];

	for (let element of inputs) {
		fields.push(element.value);
	}

	commands.setHotkeys(this.command, fields);

	input.select();
	commands.checkDefaults(this.commander, this.command);

	this.setVisibleHotkeys();
	this.checkAllConflicts();
};

Editor.prototype.resetDefaults=function() {
	commands.clear(this.command);

	this.commandEditor();
	this.setVisibleHotkeys();
	this.checkAllConflicts();
};

Editor.prototype.filter=function(unit) {
	let filter=data.units[unit.commander].sortCommander||unit.commander;
	let items=document.getElementsByTagName("section");

	// hides unit lists for commanders other than selected
	for (let element of items) {
		element.classList.toggle("hidden", element.id!=filter);
	}

	// sets commander icon to active
	let icons=document.getElementsByClassName("filter");

	for (let element of icons) {
		element.classList.toggle("active", element.value==filter);
	}

	// sets color scheme to race of commander
	document.documentElement.className=unit.race;
};

Editor.prototype.setVisibleHotkeys=function() {
	// checks for conflicts in currently visible command cards
	this.buttons.forEach(function(card, n) {
		let keys={};

		card.forEach(function(command) {
			if (command=="") {
				return;
			}

			let hotkeys=commands.getHotkeys(this.commander, command.id);

			let span="span_"+n+command.y+command.x;
			document.getElementById(span).textContent=hotkeys[0];

			hotkeys.forEach(function(hotkey) {
				if (hotkey=="") {
					return;
				}

				if (keys[hotkey]==undefined) {
					// using set to prevent duplicates so a hotkey cannot
					// conflict with itself
					keys[hotkey]=new Set();
				}

				keys[hotkey].add(span);
			});
		}, this);

		// tracks conflicts outside of loop so conflicts can be detected in
		// commands with multiple hotkeys, else class will be toggled an
		// unpredictable amount
		let conflicts=[];

		Object.values(keys).forEach(function(values) {
			values.forEach(function(value) {
				let conflict=values.size>1, span=document.getElementById(value);

				if (!conflicts.includes(value)) {
					span.classList.toggle("conflict", conflict);
				}

				if (conflict) {
					conflicts.push(value);
				}
			});
		});
	}, this);
};

Editor.prototype.checkAllConflicts=function() {
	let sections=document.getElementsByTagName("section");
	let commanders=new Set(), units=new Set();

	// checks for conflicts in all unit links
	for (let section of sections) {
		let links=section.getElementsByTagName("a");

		for (let link of links) {
			if (link.hash=="") {
				continue;
			}

			let unit=link.hash.replace("#", "");

			if (commands.checkConflicts(unit)) {
				link.classList.add("conflict");

				commanders.add(section.id);
				units.add(unit);
			} else {
				link.classList.remove("conflict");
			}
		}
	}

	// checks for conflicts in "other units with command" list
	let others=document.getElementById("other").getElementsByTagName("a");

	for (let element of others) {
		if (element.hash=="") {
			continue;
		}

		let unit=element.hash.replace("#", "");
		element.classList.toggle("conflict", units.has(unit));
	}

	let filters=document.getElementsByClassName("filter");

	// flags filter icon if section contains conflict
	for (let element of filters) {
		let value=element.value;
		element.classList.toggle("conflict", commanders.has(value));
	}
};

Editor.prototype.findUnitsNamed=function(query) {
	// minimum three characters to search to prevent huge result lists
	if (query.length<3) {
		this.clearSearch();
		return;
	}

	let matches=[];

	query=query.toLowerCase();

	Object.entries(data.units).forEach(function([unit, properties]) {
		if (properties.name==undefined) {
			return;
		}

		let name=properties.displayName||properties.name;
		name=name.toLowerCase();
		// replaces curly quotes
		name=name.replace(/[‘’]/g, "'");
		name=name.replace(/[“”]/g, "\"");

		if (name.indexOf(query)!=-1) {
			matches.push(unit);
		}
	});

	this.formatResults("results", matches);
};

Editor.prototype.findUnitsWith=function(id) {
	let matches=new Set();

	Object.entries(data.units).forEach(function([unit, properties]) {
		if (properties.commands==undefined) {
			return;
		}

		let search=[];

		if (Array.isArray(properties.commands)) {
			search=properties.commands;
		} else {
			Object.values(properties.commands).forEach(function(card) {
				search=search.concat(card);
			});
		}

		Object.values(search).forEach(function(result) {
			if (id==result) {
				matches.add(unit);
			}
		});
	});

	document.getElementById("code").textContent=id;
	this.formatResults("other", matches);
};

Editor.prototype.formatResults=function(id, matches) {
	let ul=document.createElement("ul");
	ul.id=id;

	matches.forEach(function(match) {
		let unit=data.units[match];
		let li=document.createElement("li");

		if (unit.icon!=undefined) {
			let img=document.createElement("img");
			img.setAttribute("src", ICONS_DIR+unit.icon+ICONS_EXT);
			img.setAttribute("alt", "["+unit.name+"]");
			img.setAttribute("title", unit.name);
			li.appendChild(img);
		}

		let a=document.createElement("a");
		a.href="#"+match;

		// special case for currently selected unit (which will not fire
		// hashchange event)
		if (this.unit==match) {
			a.addEventListener("click", function() {
				this.commandEditor();
				this.clearSearch(true);
			}.bind(this));
		}

		if (unit.type==COMMANDER) {
			let name=data.units[unit.commander].displayName||unit.name;
			a.appendChild(document.createTextNode("Commander: "+name));
		} else {
			let filter=data.units[unit.commander].displayName||unit.commander;
			a.appendChild(document.createTextNode(filter+": "+unit.name));
			a.classList.toggle("conflict", commands.checkConflicts(match));
		}

		if (unit.suffix!=undefined) {
			a.textContent+=" ("+unit.suffix+")";
		}

		li.appendChild(a);
		ul.appendChild(li);
	}, this);

	document.getElementById(id).replaceWith(ul);
};

Editor.prototype.highlightResult=function(dir) {
	let results=document.getElementById("results").children;

	if (dir) { // up arrow
		if (this.selected==-1) {
			// loops back around to bottom
			this.selected=results.length-1;
		} else {
			this.selected--;
		}
	} else { // down arrow
		if (this.selected>=results.length-1) {
			// loops back around to top
			this.selected=-1;
		} else {
			this.selected++;
		}
	}

	Array.from(results).forEach(function(result, i) {
		if (this.selected==i) {
			result.classList.add("selected");
			result.scrollIntoView(); // for long lists with scrollbars
		} else {
			result.classList.remove("selected");
		}
	}, this);
};

Editor.prototype.openResult=function() {
	let results=document.getElementById("results").children;

	// ignores invalid array indices
	if (this.selected<0||this.selected>=results.length) {
		return;
	}

	results[this.selected].getElementsByTagName("a")[0].click();
};

/*
 * Commands prototype
 */

function Commands() {
	this.list={
		"Commands": {}
	};
}

Commands.prototype.load=function(list) {
	this.list=list;
};

// converts from hotkey file format to object
Commands.prototype.parse=function(text) {
	let list={}, block={}, section="", command="", hotkey="";

	let lines=text.split("\n");
	let pattern=/^([\w_\/]+)=([\w,+]*)$/;

	// ensures empty line at end of file so final section block is saved
	lines.push("");

	lines.forEach(function(line, i) {
		// adds section block to object whenever new section block is found
		// or at end of file (for the last section block)
		if (lines.length==i+1||line.match(/^\[(\w+)\]$/)) {
			if (section!="") {
				list[section]=block;
				block={};
			}

			section=line.slice(1, -1);
		}

		// matches command=hotkey pairs
		if (line.match(pattern)) {
			command=line.replace(pattern, "$1");
			hotkey=line.replace(pattern, "$2");
			block[command]={};
			block[command].hotkey=hotkey;
		}
	});

	this.load(list);
};

// converts from object to hotkey file format
Commands.prototype.convert=function() {
	let text=Object.keys(this.list).reduce(function(text, section) {
		let list=Object.keys(this.list[section]).reduce(function(list, id) {
			list.push({id, hotkey: this.list[section][id].hotkey});
			return list;
		}.bind(this), []);

		// alphabetizes commands
		list.sort(function(a, b) {
			if (a.id<b.id) {
				return -1;
			}

			return a.id>b.id;
		});

		text+="\n["+section+"]\n";
		text=list.reduce(function(text, item) {
			return text+item.id+"="+item.hotkey+"\n";
		}.bind(this), text);

		return text;
	}.bind(this), "");

	return text.trim();
};

Commands.prototype.getCommand=function(commander, id) {
	if (data.commands[id]==undefined) {
		return;
	}

	let command=Object.assign({}, data.commands[id]);

	if (this.checkUserOverrides(id)) {
		command=Object.assign(command, this.list["Commands"][id]);
	}

	if (this.checkOverrides(commander, id)) {
		command=Object.assign(command, data.overrides[commander][id]);
	}

	return command;
};

Commands.prototype.getHotkeys=function(commander, id) {
	let value="";

	if (this.checkUserOverrides(id, true)) {
		value=this.list["Commands"][id].hotkey;
	} else if (this.checkOverrides(commander, id, true)) {
		value=data.overrides[commander][id].hotkey;
	} else {
		value=data.commands[id].hotkey;
	}

	let hotkeys=value.split(DELIMITER);

	hotkeys=hotkeys.map(function(symbol) {
		let hotkey=symbol;

		// converts from file format to display representation
		Object.values(data.keyCodes).forEach(function(keyCode) {
			if (symbol==keyCode.hotkey) {
				hotkey=keyCode.symbol||keyCode.hotkey;
				return;
			}
		});

		return hotkey;
	});

	return hotkeys;
};

Commands.prototype.setHotkeys=function(command, hotkeys) {
	if (!this.checkUserOverrides(command)) {
		this.clear(command);
	}

	hotkeys=hotkeys.filter(function(hotkey) {
		return hotkey!=""; // omits blank entries
	});

	hotkeys=hotkeys.map(function(hotkey) {
		let symbol=hotkey;

		// converts from display format to file representation
		Object.values(data.keyCodes).forEach(function(keyCode) {
			if (hotkey==keyCode.symbol) {
				symbol=keyCode.hotkey;
				return;
			}
		});

		return symbol;
	});

	this.list["Commands"][command]={};
	this.list["Commands"][command].hotkey=hotkeys.join(DELIMITER);
};

Commands.prototype.checkConflicts=function(id) {
	let unit=data.units[id];

	if (unit==undefined||unit.commands==undefined) {
		return;
	}

	let cards=[], conflict=false;

	if (Array.isArray(unit.commands)) {
		cards.push(unit.commands);
	} else {
		cards=Object.values(unit.commands);
	}

	cards.forEach(function(card, n) {
		let keys={};

		if (conflict) {
			return;
		}

		if (n==0&&(unit.type==UNIT||unit.type==HERO)) {
			card=card.concat(data.common.basic);
		}

		card.forEach(function(id) {
			if (conflict||data.commands[id]==undefined) {
				return;
			}

			let hotkeys=this.getHotkeys(unit.commander, id);

			hotkeys.forEach(function(hotkey) {
				if (conflict||hotkey=="") {
					return;
				}

				if (keys[hotkey]==undefined) {
					keys[hotkey]=0;
				}

				keys[hotkey]++;
				conflict=keys[hotkey]>1;
			});
		}, this);
	}, this);

	return conflict;
};

Commands.prototype.checkDefaults=function(commander, id) {
	let defaultHotkeys=data.commands[id].hotkey;

	if (this.checkOverrides(commander, id, true)) {
		defaultHotkeys=data.overrides[commander][id].hotkey;
	}

	// removes user hotkey if same as default (to avoid redundant entries)
	if (this.getHotkeys(commander, id).join(DELIMITER)==defaultHotkeys) {
		this.clear(id);
	}
};

Commands.prototype.checkOverrides=function(commander, id, checkHotkey=false) {
	if (data.overrides[commander]==undefined) {
		return;
	}

	if (data.overrides[commander][id]==undefined) {
		return;
	}

	if (checkHotkey&&data.overrides[commander][id].hotkey==undefined) {
		return;
	}

	return true;
};

Commands.prototype.checkUserOverrides=function(id, checkHotkey=false) {
	if (this.list["Commands"]==undefined) {
		return;
	}

	if (this.list["Commands"][id]==undefined) {
		return;
	}

	if (checkHotkey&&this.list["Commands"][id].hotkey==undefined) {
		return;
	}

	return true;
};

Commands.prototype.removeLast=function(command) {
	if (this.checkUserOverrides(command)) {
		let fields=this.list["Commands"][command].hotkey.split(DELIMITER);
		fields.splice(-1, 1);

		this.list["Commands"][command].hotkey=fields.join(DELIMITER);
	}
};

Commands.prototype.clear=function(command) {
	delete this.list["Commands"][command];
};

Commands.prototype.reset=function() {
	this.load({
		"Commands": {}
	});
};

/*
 * Overlay prototype
 */

function Overlay(id) {
	this.id="overlay_"+id;
	this.textarea="text_"+id;
}

Overlay.prototype.show=function() {
	document.getElementById(this.id).classList.add("open");
	this.focus();
};

Overlay.prototype.hide=function() {
	document.getElementById(this.id).classList.remove("open");
};

Overlay.prototype.getText=function() {
	return document.getElementById(this.textarea).value;
};

Overlay.prototype.setText=function(text) {
	document.getElementById(this.textarea).value=text;
};

Overlay.prototype.focus=function() {
	document.getElementById(this.textarea).focus();
	document.getElementById(this.textarea).setSelectionRange(0, 0);
};

Overlay.prototype.select=function() {
	document.getElementById(this.textarea).select();
};

/*
 * Storage prototype
 */

function Storage(name) {
	this.name=name;
}

Storage.prototype.load=function() {
	try {
		let contents=localStorage.getItem(this.name);

		if (contents!=null) {
			return JSON.parse(contents);
		}
	} catch (err) {
		console.error(err);
	}
};

Storage.prototype.save=function(list) {
	try {
		if (Object.keys(list).length>1) {
			localStorage.setItem(this.name, JSON.stringify(list));
		} else {
			this.reset();
		}
	} catch (err) {
		console.error(err);
	}
};

Storage.prototype.reset=function() {
	try {
		localStorage.removeItem(this.name);
	} catch (err) {
		console.error(err);
	}
};