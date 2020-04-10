# starcraft2-hotkey-editor

<div align="center"><img src="https://gitlab.com/jcfields/starcraft2-coop-randomizer/raw/master/screenshot.jpg" width="713" height="384" alt="[Starcraft II Hotkey Editor]"></div>

A [hotkey editor for *Starcraft II*](https://jcfields.gitlab.io/starcraft2-hotkey-editor/) written in JavaScript. Includes all units and structures from versus, co-op, and the official campaigns. Identifies conflicts across all three modes simultaneously.

## Limitations

- The editor only edits hotkeys for units and thus cannot detect conflicts that could potentially arise between units and UI hotkeys. For example, if you set a protoss hotkey to `W`, it will interfere with the default hotkey for selecting warp gates, but the editor will not detect or warn you about this. Similarly, it cannot be used to set hotkeys outside of units, such as setting top bar commands or setting up rapid-fire.
- There are a number of weird, unused commands in the game that could potentially cause conflicts but are not included in the editor because of the impracticality of including so many unused commands and because of the amount of clutter they would create. For example, the *Wings of Liberty* campaign dependency includes all of the old multiplayer upgrades, even though they are not used in the campaign or even necessarily in the modern multiplayer mode. So you could, for instance, create a conflict between the "Weapons Refit" upgrade and the now obsolete "Behemoth Reactor" upgrade in the Fusion Core that the editor would not detect. Some of the potential conflicts are even stranger: the Twilight Council in *Legacy of the Void* includes commands for summoning various "champions" (alongside the standard commands for researching "Charge" and "Blink"). The *Legacy of the Void* campaign's banshee has a "Lift Off" command for some reason. Many of the production structures for Amon's forces in co-op mode have combinations of units that never appear to the player, allowing you to inadvertently create conflicts that would not otherwise be possible, such as between ravens and science vessels.

## Authors

- J.C. Fields <jcfields+gitlab@gmail.com>
- Uses [Fira Mono](https://github.com/mozilla/Fira) font by [Carrois Type Design](http://www.carrois.com/)

## License

- [MIT license](http://opensource.org/licenses/mit-license.php)

## See also

- [*Warcraft III* Hotkey Editor](https://gitlab.com/jcfields/warcraft3-hotkey-editor)—A similar editor on which this project is based.
- [*Starcraft II* Co-op Randomizer](https://gitlab.com/jcfields/starcraft2-coop-randomizer)—Another helpful utility for co-op mode.
