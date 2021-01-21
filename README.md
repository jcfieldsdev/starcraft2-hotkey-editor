# starcraft2-hotkey-editor

<div align="center"><img src="https://gitlab.com/jcfields/starcraft2-hotkey-editor/raw/master/screenshot.jpg" width="713" height="384" alt="[Starcraft II Hotkey Editor]"></div>

A [hotkey editor for *Starcraft II*](https://jcfields.gitlab.io/starcraft2-hotkey-editor/). Written in JavaScript. Includes all units and structures from versus, co-op, and the official campaigns. Identifies conflicts across all three modes simultaneously.

## Guide

### Finding units

Select a co-op commander or multiplayer faction using the icons at the top of the page. This shows a list of all units and structures associated with that commander or faction in the left side of the screen. Similar or related units are sometimes grouped together. For example, the Orbital Command and Planetary Fortress are grouped with the Command Center and Locusts are grouped with Swarm Hosts.

Campaign units are sorted under their associated factions: *Wings of Liberty* and *Nova Covert Ops* under Terran, *Heart of the Swarm* under Zerg, and *Legacy of the Void* under Protoss.

You can also use the search box in the bottom-left of the page to search for a particular unit by name. The search tries to find closely related units. For instance, searching for "Zealot" also finds all of the campaign and co-op Zealot variants, such as the Centurion and the Legionnaire.

### Editing hotkeys

Once a unit has been selected, its associated command cards appear in the editor view on the right side of the screen. Clicking a command button in one of the command cards brings up all of the hotkeys for that command. The hotkey currently being edited is highlighted with a white glow around it. Almost any key on the keyboard can be used as a hotkey by pressing the desired key while the box is highlighted.

If there is more than one hotkey for the command, there will be multiple boxes. The last hotkey is highlighted by default, but any box can be selected for editing by clicking it.

Commands in *Starcraft II* can have multiple hotkeys associated with them (such that pressing any of the assigned hotkeys issues the associated command). To add another hotkey, click the `Add` button. The `Remove` button removes the last hotkey. The `Reset` button resets the command to its default value (removing extra hotkeys if necessary).

The first hotkey of a command appears as a character or short sequence over the command button. If there is a hotkey conflict, the hotkeys of the conflicting commands are highlighted in red. Conflicts are automatically detected as you edit hotkeys. Additionally, units with conflicting commands are highlighted in red in the list of units, and commanders who have units with conflicting commands have a red border in the list of commanders.

The right side of the editor shows some additional information:

- The editor code for the command. This uniquely identifies the command. In many cases, two commands that appear to be the same actually have two editor codes (such as the multiplayer and campaign Stalker's "Blink" command). Or sometimes, two commands that seem different are actually the same (such as the standard "Use Stimpack" and the Nova campaign's "Super Stimpack" command).
- The "Units with Command" tab below it shows all units with that exact same command. These units will also be affected when this hotkey is edited. Sometimes changing a hotkey for one unit inadvertently creates a conflict for another; if that happens, the unit with the conflict will be highlighted in red in this area.
- The "Similar Commands" tab shows other commands that have the same name as the command you're editing, which you may also want to change for consistency. For example, selecting the "Cloak" command of one unit shows all of the other "Cloak" commands used by other units, which can be clicked and edited separately. However, this only finds exact name matches so, for instance, "Yamato Cannon" won't match with "Stetmato Cannon."

### Loading and saving

You can load your existing hotkey profile by clicking the `Load` button in the bottom-right corner of the screen. This brings up an overlay with the following functionality:

- You can load a hotkey file from your computer under "Load local file." This imports its contents into the text box. Click the `Open` button to load it into the hotkey editor.
- You can copy and paste the contents of a hotkey file directly into the text box and click the `Open` button to load it.
- The `Reset` button resets all hotkeys to their default values.

If you load a hotkey profile based on the "Standard for Lefties" or "Classic" sets, the default hotkeys will be changed appropriately. Note that some units have hotkey conflicts by default when using these base sets. The editor also supports the "AllowSetConflicts" setting used by the "Classic" set, which ignores conflicts between two states of the same command (such as "Siege Mode" and "Tank Mode").

After customizing your hotkeys, click the `Save` button in the bottom-right corner of the screen to generate a new hotkey file based on your modifications. You can copy the contents of this file by directly copying from the text box or by clicking the `Copy` button, or you can download the file by clicking the `Download` button.

The `?` button next to the `Load` and `Save` buttons brings up the [help page](https://jcfields.gitlab.io/starcraft2-hotkey-editor/help.html), which explains in detail where the hotkey file is located on your computer and how to select it in the game.

## Limitations

- The editor only edits hotkeys for units and thus cannot detect conflicts that could potentially arise between units and UI hotkeys. For example, if you set a Protoss hotkey to `W`, it will interfere with the default hotkey for selecting Warp Gates, but the editor will not detect or warn you about this. Similarly, it cannot be used to set hotkeys outside of units, such as setting top bar commands or setting up rapid-fire.
- There are a number of weird, unused commands in the game that could potentially cause conflicts but are not included in the editor because of the impracticality of including so many unused commands and because of the amount of clutter they would create. For example, the *Wings of Liberty* campaign dependency includes all of the old multiplayer upgrades, even though they are not used in the campaign or even necessarily in the modern multiplayer mode. So you could, for instance, create a conflict between the "Weapons Refit" upgrade and the now obsolete "Behemoth Reactor" upgrade in the Fusion Core that the editor would not detect. Some of the potential conflicts are even stranger: the Twilight Council in *Legacy of the Void* includes commands for summoning various "champions" (alongside the standard commands for researching "Charge" and "Blink"). The *Legacy of the Void* campaign's Banshee has a "Lift Off" command for some reason. Many of the production structures for Amon's forces in co-op mode have combinations of units that never appear to the player, allowing you to inadvertently create conflicts that would not otherwise be possible, such as between Ravens and Science Vessels.

## Acknowledgments

Used [Maguro's co-op test maps](https://www.maguro.one/p/my-maps.html) for testing.

Uses [Fira Mono](https://github.com/mozilla/Fira) font by [Carrois Type Design](http://www.carrois.com/).

## Authors

- J.C. Fields <jcfields@jcfields.dev>

## License

- [MIT license](https://opensource.org/licenses/mit-license.php)

## See also

- [*Warcraft III* Hotkey Editor](https://gitlab.com/jcfields/warcraft3-hotkey-editor)—A similar editor on which this project is based.
- [*Starcraft II* Co-op Randomizer](https://gitlab.com/jcfields/starcraft2-coop-randomizer)—A utility for picking a random co-op map or commander.
- [*Starcraft II* Co-op Replay Tool](https://gitlab.com/jcfields/starcraft2-coop-replay-tool)—A utility for analyzing co-op replays.
