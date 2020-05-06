"use strict";

const NEUTRAL="neutral";
const TERRAN="terran";
const ZERG="zerg";
const PROTOSS="protoss";

const OTHER=0;
const COMMANDER=1;
const UNIT=2;
const HERO=3;
const BUILDING=4;

const data={};

data.keyCodes={
	8: {
		hotkey: "Backspace",
		symbol: "Bck"
	},
	9: {
		hotkey: "Tab"
	},
	12: {
		hotkey: "Clear",
		symbol: "Clr"
	},
	13: {
		hotkey: "Enter",
		symbol: "Ent"
	},
	19: {
		hotkey: "Pause",
		symbol: "Pau"
	},
	20: {
		hotkey: "CapsLock",
		symbol: "CL"
	},
	27: {
		hotkey: "Escape",
		symbol: "Esc"
	},
	32: {
		hotkey: "Space",
		symbol: "Spc"
	},
	33: {
		hotkey: "PageUp",
		symbol: "Pup"
	},
	34: {
		hotkey: "PageDown",
		symbol: "PDn"
	},
	35: {
		hotkey: "End"
	},
	36: {
		hotkey: "Home",
		symbol: "Hom"
	},
	37: {
		hotkey: "Left",
		symbol: "Lft"
	},
	38: {
		hotkey: "Up"
	},
	39: {
		hotkey: "Right",
		symbol: "Rgt"
	},
	40: {
		hotkey: "Down",
		symbol: "Dwn"
	},
	44: {
		hotkey: "PrintScreen",
		symbol: "PrS"
	},
	45: {
		hotkey: "Insert",
		symbol: "Ins"
	},
	46: {
		hotkey: "Delete",
		symbol: "Del"
	},
	47: {
		hotkey: "Help",
		symbol: "Hlp"
	},
	48: {
		hotkey: "0"
	},
	49: {
		hotkey: "1"
	},
	50: {
		hotkey: "2"
	},
	51: {
		hotkey: "3"
	},
	52: {
		hotkey: "4"
	},
	53: {
		hotkey: "5"
	},
	54: {
		hotkey: "6"
	},
	55: {
		hotkey: "7"
	},
	56: {
		hotkey: "8"
	},
	57: {
		hotkey: "9"
	},
	59: {
		hotkey: "SemiColon",
		symbol: ";"
	},
	61: {
		hotkey: "Equals",
		symbol: "="
	},
	65: {
		hotkey: "A"
	},
	66: {
		hotkey: "B"
	},
	67: {
		hotkey: "C"
	},
	68: {
		hotkey: "D"
	},
	69: {
		hotkey: "E"
	},
	70: {
		hotkey: "F"
	},
	71: {
		hotkey: "G"
	},
	72: {
		hotkey: "H"
	},
	73: {
		hotkey: "I"
	},
	74: {
		hotkey: "J"
	},
	75: {
		hotkey: "K"
	},
	76: {
		hotkey: "L"
	},
	77: {
		hotkey: "M"
	},
	78: {
		hotkey: "N"
	},
	79: {
		hotkey: "O"
	},
	80: {
		hotkey: "P"
	},
	81: {
		hotkey: "Q"
	},
	82: {
		hotkey: "R"
	},
	83: {
		hotkey: "S"
	},
	84: {
		hotkey: "T"
	},
	85: {
		hotkey: "U"
	},
	86: {
		hotkey: "V"
	},
	87: {
		hotkey: "W"
	},
	88: {
		hotkey: "X"
	},
	89: {
		hotkey: "Y"
	},
	90: {
		hotkey: "Z"
	},
	96: {
		hotkey: "NumPad0",
		symbol: "N 0"
	},
	97: {
		hotkey: "NumPad1",
		symbol: "N 1"
	},
	98: {
		hotkey: "NumPad2",
		symbol: "N 2"
	},
	99: {
		hotkey: "NumPad3",
		symbol: "N 3"
	},
	100: {
		hotkey: "NumPad4",
		symbol: "N 4"
	},
	101: {
		hotkey: "NumPad5",
		symbol: "N 5"
	},
	102: {
		hotkey: "NumPad6",
		symbol: "N 6"
	},
	103: {
		hotkey: "NumPad7",
		symbol: "N 7"
	},
	104: {
		hotkey: "NumPad8",
		symbol: "N 8"
	},
	105: {
		hotkey: "NumPad9",
		symbol: "N 9"
	},
	106: {
		hotkey: "NumPadMultiply",
		symbol: "N *"
	},
	107: {
		hotkey: "NumPadPlus",
		symbol: "N +"
	},
	109: {
		hotkey: "NumPadMinus",
		symbol: "N -"
	},
	110: {
		hotkey: "NumPadDecimal",
		symbol: "N ."
	},
	111: {
		hotkey: "NumPadDivide",
		symbol: "N /"
	},
	112: {
		hotkey: "F1"
	},
	113: {
		hotkey: "F2"
	},
	114: {
		hotkey: "F3"
	},
	115: {
		hotkey: "F4"
	},
	116: {
		hotkey: "F5"
	},
	117: {
		hotkey: "F6"
	},
	118: {
		hotkey: "F7"
	},
	119: {
		hotkey: "F8"
	},
	120: {
		hotkey: "F9"
	},
	121: {
		hotkey: "F10"
	},
	122: {
		hotkey: "F11"
	},
	123: {
		hotkey: "F12"
	},
	124: {
		hotkey: "F13"
	},
	125: {
		hotkey: "F14"
	},
	126: {
		hotkey: "F15"
	},
	127: {
		hotkey: "F16"
	},
	128: {
		hotkey: "F17"
	},
	129: {
		hotkey: "F18"
	},
	130: {
		hotkey: "F19"
	},
	131: {
		hotkey: "F20"
	},
	132: {
		hotkey: "F21"
	},
	133: {
		hotkey: "F22"
	},
	134: {
		hotkey: "F23"
	},
	135: {
		hotkey: "F24"
	},
	144: {
		hotkey: "NumLock",
		symbol: "NL"
	},
	145: {
		hotkey: "ScrollLock",
		symbol: "SL"
	},
	173: {
		hotkey: "Minus",
		symbol: "-"
	},
	186: {
		hotkey: "SemiColon",
		symbol: ";"
	},
	187: {
		hotkey: "Equals",
		symbol: "="
	},
	188: {
		hotkey: "Comma",
		symbol: ","
	},
	189: {
		hotkey: "Minus",
		symbol: "-"
	},
	190: {
		hotkey: "Period",
		symbol: "."
	},
	191: {
		hotkey: "Slash",
		symbol: "/"
	},
	192: {
		hotkey: "Grave",
		symbol: "`"
	},
	219: {
		hotkey: "BracketOpen",
		symbol: "["
	},
	220: {
		hotkey: "BackSlash",
		symbol: "\\"
	},
	221: {
		hotkey: "BracketClose",
		symbol: "]"
	},
	222: {
		hotkey: "Apostrophe",
		symbol: "'"
	}
};

data.common={
	basic: [
		"Move",
		"Stop",
		"MoveHoldPosition",
		"MovePatrol",
		"Attack"
	],
	flying: [
		"Move",
		"Stop",
		"MoveHoldPosition",
		"MovePatrol"
	],
	tower: [
		"Stop",
		"Attack"
	]
};

data.units={
	"Terran": {
		name: "Terran",
		icon: "btn-unit-terran-marine",
		race: TERRAN,
		commander: "Terran",
		type: COMMANDER,
		defaultUnit: "Terran_SCV"
	},
	"Terran_SCV": {
		name: "SCV",
		icon: "btn-unit-terran-scv",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/SCV",
				"TerranBuildAdvanced/SCV",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"CommandCenter/SCV",
				"Refinery/SCV",
				"SupplyDepot/SCV",
				"Barracks/SCV",
				"EngineeringBay/SCV",
				"Bunker/SCV",
				"MissileTurret/SCV",
				"SensorTower/SCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"GhostAcademy/SCV",
				"Factory/SCV",
				"Armory/SCV",
				"Starport/SCV",
				"FusionCore/SCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Terran_MULE": {
		name: "MULE",
		icon: "btn-unit-terran-mule",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"GatherProt",
			"ReturnCargo",
			"Repair"
		]
	},
	"Terran_Marine": {
		name: "Marine",
		icon: "btn-unit-terran-marine",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"Stim"
		]
	},
	"Terran_Reaper": {
		name: "Reaper",
		icon: "btn-unit-terran-reaper",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"KD8Charge/Reaper"
		]
	},
	"Terran_Marauder": {
		name: "Marauder",
		icon: "btn-unit-terran-marauder",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"Stim"
		]
	},
	"Terran_Ghost": {
		name: "Ghost",
		icon: "btn-unit-terran-ghost",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"NukeCalldown/Ghost",
			"GhostHoldFire/Ghost",
			"WeaponsFree/Ghost",
			"ChannelSnipe/Ghost",
			"EMP/Ghost",
			"CloakOnBanshee",
			"CloakOff",
			"Cancel"
		],
		overrides: {
			"CloakOnBanshee": {
				x: 2
			},
			"CloakOff": {
				x: 3
			}
		}
	},
	"Terran_Hellbat": {
		name: "Hellbat",
		keywords: "Hellion",
		icon: "btn-unit-terran-hellionbattlemode",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"MorphToHellion/Hellion",
			"MorphToHellionTank/Hellion"
		]
	},
	"Terran_WidowMine": {
		name: "Widow Mine",
		icon: "btn-unit-terran-widowmine",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"WidowMineBurrow/WidowMine",
			"WidowMineUnburrow/WidowMine"
		]
	},
	"Terran_Cyclone": {
		name: "Cyclone",
		icon: "btn-unit-terran-cyclone",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"LockOn/Cyclone"
		]
	},
	"Terran_SiegeTank": {
		name: "Siege Tank",
		icon: "btn-unit-terran-siegetank",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"SiegeMode",
			"Unsiege"
		]
	},
	"Terran_Thor": {
		name: "Thor",
		icon: "btn-unit-terran-thor",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"ArmorpiercingMode",
			"ExplosiveMode"
		]
	},
	"Terran_Viking": {
		name: "Viking",
		icon: "btn-unit-terran-vikingfighter",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"AssaultMode",
			"FighterMode"
		]
	},
	"Terran_Medivac": {
		name: "Medivac",
		icon: "btn-unit-terran-medivac",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"Heal/Medivac",
			"MedivacSpeedBoost/Medivac",
			"BunkerLoad",
			"BunkerUnloadAll"
		],
		overrides: {
			"BunkerLoad": {
				x: 2
			},
			"BunkerUnloadAll": {
				x: 3
			}
		}
	},
	"Terran_Liberator": {
		name: "Liberator",
		icon: "btn-unit-terran-liberator",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"LiberatorAGMode/Liberator",
			"LiberatorAAMode/Liberator"
		]
	},
	"Terran_Raven": {
		name: "Raven",
		keywords: "Auto-Turret",
		icon: "btn-unit-terran-raven",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: {
			"Raven": [
				"AutoTurret/Raven",
				"RavenScramblerMissile/Raven",
				"RavenShredderMissile/Raven"
			],
			"Auto-Turret": [
				...data.common.tower
			]
		}
	},
	"Terran_Banshee": {
		name: "Banshee",
		icon: "btn-unit-terran-banshee",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"CloakOnBanshee",
			"CloakOff"
		]
	},
	"Terran_Battlecruiser": {
		name: "Battlecruiser",
		icon: "btn-unit-terran-battlecruiser",
		race: TERRAN,
		commander: "Terran",
		type: UNIT,
		commands: [
			"YamatoGun",
			"Hyperjump/Battlecruiser"
		]
	},
	"Terran_CommandCenter": {
		name: "Command Center",
		keywords: "Orbital Command, Planetary Fortress",
		icon: "btn-building-terran-commandcenter",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SCV",
				"OrbitalCommand/CommandCenter",
				"UpgradeToPlanetaryFortress/CommandCenter",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Orbital Command": [
				"SCV",
				"Rally",
				"CalldownMULE/OrbitalCommand",
				"SupplyDrop/OrbitalCommand",
				"Scan/OrbitalCommand",
				"Lift",
				"Cancel"
			],
			"Planetary Fortress": [
				"SCV",
				"Rally",
				"StopPlanetaryFortress/PlanetaryFortress",
				"Attack",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"Terran_Refinery": {
		name: "Refinery",
		icon: "btn-building-terran-refinery",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Terran_SupplyDepot": {
		name: "Supply Depot",
		icon: "btn-building-terran-supplydepot",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: {
			"Raised": [
				"SelectBuilder",
				"Lower/SupplyDepot",
				"Halt",
				"Cancel"
			],
			"Lowered": [
				"Raise/SupplyDepotLowered"
			]
		}
	},
	"Terran_Barracks": {
		name: "Barracks",
		icon: "btn-building-terran-barracks",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: {
			"Barracks": [
				"Marine/Barracks",
				"Reaper/Barracks",
				"Marauder/Barracks",
				"Ghost/Barracks",
				"SelectBuilder",
				"Rally",
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchShieldWall/BarracksTechLab",
				"Stimpack/BarracksTechLab",
				"ResearchPunisherGrenades/BarracksTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Land"
			]
		}
	},
	"Terran_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-terran-engineeringbay",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			"TerranInfantryWeaponsLevel1/EngineeringBay",
			"TerranInfantryArmorLevel1/EngineeringBay",
			"ResearchHiSecAutoTracking/EngineeringBay",
			"UpgradeBuildingArmorLevel1/EngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Terran_Bunker": {
		name: "Bunker",
		icon: "btn-building-terran-bunker",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Rally",
			"Stim",
			"BunkerLoad",
			"BunkerUnloadAll",
			"Salvage/Bunker",
			"Cancel"
		]
	},
	"Terran_MissileTurret": {
		name: "Missile Turret",
		icon: "btn-building-terran-missileturret",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/MissileTurret",
			"Halt",
			"Cancel"
		]
	},
	"Terran_SensorTower": {
		name: "Sensor Tower",
		icon: "btn-building-terran-sensordome",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Terran_GhostAcademy": {
		name: "Ghost Academy",
		icon: "btn-building-terran-ghostacademy",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			"ResearchPersonalCloaking/GhostAcademy",
			"ResearchEnhancedShockwaves/GhostAcademy",
			"NukeArm/GhostAcademy",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Terran_Factory": {
		name: "Factory",
		icon: "btn-building-terran-factory",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: {
			"Factory": [
				"Hellion/Factory",
				"WidowMine/Factory",
				"BuildCyclone/Factory",
				"SiegeTank/Factory",
				"HellionTank/Factory",
				"Thor/Factory",
				"SelectBuilder",
				"Rally",
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchHighCapacityBarrels/FactoryTechLab",
				"CycloneResearchLockOnDamageUpgrade/FactoryTechLab",
				"ResearchDrillClaws/FactoryTechLab",
				"ResearchSmartServos/FactoryTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Land"
			]
		}
	},
	"Terran_Armory": {
		name: "Armory",
		icon: "btn-building-terran-armory",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			"TerranVehicleWeaponsLevel1/Armory",
			"TerranVehicleAndShipPlatingLevel1/Armory",
			"TerranShipWeaponsLevel1/Armory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Terran_Starport": {
		name: "Starport",
		icon: "btn-building-terran-starport",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: {
			"Starport": [
				"VikingFighter/Starport",
				"Medivac/Starport",
				"Liberator/Starport",
				"Raven/Starport",
				"Banshee/Starport",
				"Battlecruiser/Starport",
				"SelectBuilder",
				"Rally",
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchRavenEnergyUpgrade/StarportTechLab",
				"ResearchBansheeCloak/StarportTechLab",
				"BansheeSpeed/StarportTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Land"
			]
		}
	},
	"Terran_FusionCore": {
		name: "Fusion Core",
		icon: "btn-building-terran-fusioncore",
		race: TERRAN,
		commander: "Terran",
		type: BUILDING,
		commands: [
			"ResearchBattlecruiserSpecializations/FusionCore",
			"ResearchRapidReignitionSystem/FusionCore",
			"ResearchBallisticRange/FusionCore",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty": {
		name: "WingsOfLiberty",
		displayName: "Wings of Liberty",
		icon: "btn-unit-terran-marineraynorhev",
		race: TERRAN,
		commander: "WingsOfLiberty",
		sortCommander: "Terran",
		type: COMMANDER,
		defaultUnit: "WingsOfLiberty_SCV"
	},
	"WingsOfLiberty_Raynor": {
		name: "Jim Raynor",
		keywords: "Renegade Commander, Marine",
		icon: "btn-unit-terran-marineraynorhev",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: {
			"Mar Sara": [],
			"Castanar": [
				...data.common.basic,
				"PlantC4Charge/Raynor",
				"TossGrenade/Raynor",
				"ExperimentalPlasmaGun/Raynor",
				"TheMorosDevice/Raynor"

			],
			"Char": [
				...data.common.basic,
				"RaynorSnipe/RaynorCommando"
			]
		}
	},
	"WingsOfLiberty_Tychus": {
		name: "Tychus Findlay",
		keywords: "Legendary Outlaw, Marine",
		icon: "btn-unit-terran-marinetychus",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"TossGrenadeTychus/TychusCommando"
		]
	},
	"WingsOfLiberty_Swann": {
		name: "Rory Swann",
		keywords: "Chief Engineer, Marauder, Flaming Betty",
		icon: "btn-unit-terran-marauderswann",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: {
			"Rory Swann": [
				"DutchPlaceTurret/Swann"
			],
			"Flaming Betty": [
				...data.common.tower
			]
		}
	},
	"WingsOfLiberty_Stetmann": {
		name: "Egon Stetmann",
		keywords: "Medic",
		icon: "btn-unit-terran-medicstetmann",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"BonesHeal/Stetmann"
		]
	},
	"WingsOfLiberty_Nova": {
		name: "Nova",
		keywords: "Ghost",
		icon: "btn-unit-terran-nova",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"NovaSnipe/Nova",
			"Domination/Nova",
			"ReleaseMinion/Nova",
			"HeroNukeCalldown/Nova",
			"Cancel"
		]
	},
	"WingsOfLiberty_Tosh": {
		name: "Tosh",
		keywords: "Spectre",
		icon: "btn-unit-terran-tosh",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"MindBlast/Tosh",
			"VoodooShield/Tosh",
			"Consumption/Tosh",
			"HeroNukeCalldown/Tosh",
			"Cancel"
		]
	},
	"WingsOfLiberty_Zeratul": {
		name: "Zeratul",
		keywords: "Dark Templar",
		icon: "btn-unit-protoss-zeratul",
		race: PROTOSS,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"ZeratulBlink/Zeratul",
			"ZeratulStun/Zeratul"
		]
	},
	"WingsOfLiberty_Urun": {
		name: "Urun",
		keywords: "Phoenix",
		icon: "btn-unit-protoss-phoenix-urun",
		race: PROTOSS,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"GravitonBeam/Urun",
			"Cancel"
		]
	},
	"WingsOfLiberty_Mohandar": {
		name: "Mohandar",
		keywords: "Void Ray",
		icon: "btn-unit-protoss-voidray-mohandar",
		race: PROTOSS,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: []
	},
	"WingsOfLiberty_Selendis": {
		name: "Selendis",
		keywords: "Carrier",
		icon: "btn-unit-protoss-carrier-selendis",
		race: PROTOSS,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"Interceptor/Selendis",
			"Cancel"
		]
	},
	"WingsOfLiberty_Artanis": {
		name: "Shield of Aiur",
		keywords: "Artanis, Hierarch of the Daelaam, Mothership",
		icon: "btn-unit-protoss-artanis",
		race: PROTOSS,
		commander: "WingsOfLiberty",
		type: HERO,
		commands: [
			"MassRecall/Artanis",
			"Vortex/Artanis"
		]
	},
	"WingsOfLiberty_SCV": {
		name: "SCV",
		icon: "btn-unit-terran-scv",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/SCV",
				"TerranBuildAdvanced/SCV",
				"Repair",
				"Halt"
			],
			"Build Structure": [
				"CommandCenter/SCV",
				"Refinery/SCV",
				"SupplyDepot/SCV",
				"Barracks/SCV",
				"EngineeringBay/SCV",
				"PerditionTurret/SCV",
				"Bunker/SCV",
				"MissileTurret/SCV",
				"SensorTower/SCV",
				"HiveMindEmulator/SCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"GhostAcademy/SCV",
				"MercCompound/SCV",
				"Factory/SCV",
				"Armory/SCV",
				"Starport/SCV",
				"FusionCore/SCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"WingsOfLiberty_MULE": {
		name: "MULE",
		icon: "btn-unit-terran-mule",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"GatherProt",
			"ReturnCargo",
			"Repair"
		]
	},
	"WingsOfLiberty_Marine": {
		name: "Marine",
		icon: "btn-unit-terran-marine",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"Stim"
		]
	},
	"WingsOfLiberty_Reaper": {
		name: "Reaper",
		icon: "btn-unit-terran-reaper",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"D8Charge/Reaper"
		]
	},
	"WingsOfLiberty_Marauder": {
		name: "Marauder",
		icon: "btn-unit-terran-marauder",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: []
	},
	"WingsOfLiberty_Firebat": {
		name: "Firebat",
		icon: "btn-unit-terran-firebat",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: []
	},
	"WingsOfLiberty_Medic": {
		name: "Medic",
		icon: "btn-unit-terran-medic",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"MedicHeal/Medic"
		]
	},
	"WingsOfLiberty_Ghost": {
		name: "Ghost",
		icon: "btn-unit-terran-ghost",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: {
			"Decloaked": [
				"NukeCalldown/Ghost",
				"GhostHoldFire/Ghost",
				"WeaponsFree/Ghost",
				"Snipe/Ghost",
				"EMP/Ghost",
				"CloakOnBanshee",
				"Cancel"
			],
			"Cloaked": [
				...data.common.basic,
				"NukeCalldown/Ghost",
				"GhostHoldFire/Ghost",
				"WeaponsFree/Ghost",
				"Snipe/Ghost",
				"EMP/Ghost",
				"CloakOff",
				"Cancel"
			]
		},
		overrides: {
			"CloakOnBanshee": {
				x: 2
			},
			"CloakOff": {
				x: 2
			},
			"NukeCalldown/Ghost": {
				x: 3,
				y: 2
			}
		}
	},
	"WingsOfLiberty_Spectre": {
		name: "Spectre",
		keywords: "Ghost",
		icon: "btn-unit-terran-spectre",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: {
			"Decloaked": [
				"SpectreHoldFire/Spectre",
				"SpectreWeaponsFree/Spectre",
				"UltrasonicPulse/Spectre",
				"Obliterate/Spectre",
				"CloakOnBanshee",
				"SpectreNukeCalldown/Spectre",
				"Cancel"
			],
			"Cloaked": [
				...data.common.basic,
				"SpectreHoldFire/Spectre",
				"SpectreWeaponsFree/Spectre",
				"UltrasonicPulse/Spectre",
				"Obliterate/Spectre",
				"CloakOff",
				"SpectreNukeCalldown/Spectre",
				"Cancel"
			]
		},
		overrides: {
			"CloakOnBanshee": {
				x: 2
			},
			"CloakOff": {
				x: 2
			}
		}
	},
	"WingsOfLiberty_Hellion": {
		name: "Hellion",
		icon: "btn-unit-terran-hellion",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: []
	},
	"WingsOfLiberty_SiegeTank": {
		name: "Siege Tank",
		icon: "btn-unit-terran-siegetank",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"SiegeMode",
			"Unsiege"
		]
	},
	"WingsOfLiberty_Thor": {
		name: "Thor",
		icon: "btn-unit-terran-thor",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: {
			"Thor": [
				"250mmStrikeCannons/Thor"
			],
			"Destroyed": [
				"ImmortalityProtocol/ThorWreckage",
				"Cancel"
			]
		}
	},
	"WingsOfLiberty_Predator": {
		name: "Predator",
		icon: "btn-unit-terran-predator",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: []
	},
	"WingsOfLiberty_Vulture": {
		name: "Vulture",
		icon: "btn-unit-terran-vulture",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"SpiderMine/Vulture",
			"SpiderMineReplenish/Vulture"
		]
	},
	"WingsOfLiberty_Diamondback": {
		name: "Diamondback",
		icon: "btn-unit-terran-diamondback",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: []
	},
	"WingsOfLiberty_Goliath": {
		name: "Goliath",
		icon: "btn-unit-terran-goliath",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: []
	},
	"WingsOfLiberty_Viking": {
		name: "Viking",
		icon: "btn-unit-terran-vikingfighter",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"AssaultMode",
			"FighterMode"
		]
	},
	"WingsOfLiberty_Wraith": {
		name: "Wraith",
		icon: "btn-unit-terran-wraith",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"WraithCloakOn/Wraith",
			"WraithCloakOff/Wraith"
		]
	},
	"WingsOfLiberty_Medivac": {
		name: "Medivac",
		icon: "btn-unit-terran-medivac",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"Heal/Medivac",
			"BunkerLoad",
			"BunkerUnloadAll"
		],
		overrides: {
			"BunkerLoad": {
				x: 2
			},
			"BunkerUnloadAll": {
				x: 3
			}
		}
	},
	"WingsOfLiberty_Banshee": {
		name: "Banshee",
		icon: "btn-unit-terran-banshee",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"CloakOnBanshee",
			"CloakOff"
		]
	},
	"WingsOfLiberty_Raven": {
		name: "Raven",
		keywords: "Auto-Turret",
		icon: "btn-unit-terran-raven",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: {
			"Raven": [
				"BuildAutoTurret/Raven",
				"BuildPointDefenseDrone/Raven",
				"HunterSeekerMissile/Raven"
			],
			"Auto-Turret": [
				...data.common.tower
			]
		}
	},
	"WingsOfLiberty_ScienceVessel": {
		name: "Science Vessel",
		icon: "btn-unit-terran-sciencevessel",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"NanoRepair/ScienceVessel",
			"Irradiate/ScienceVessel"
		]
	},
	"WingsOfLiberty_Hercules": {
		name: "Hercules",
		icon: "btn-unit-terran-hercules",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"HerculesLoad/Hercules",
			"HerculesUnloadAll/Hercules"
		]
	},
	"WingsOfLiberty_Battlecruiser": {
		name: "Battlecruiser",
		icon: "btn-unit-terran-battlecruiser",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"YamatoGun",
			"MissilePods/Battlecruiser",
			"DefensiveMatrix/Battlecruiser"
		]
	},
	"WingsOfLiberty_Odin": {
		name: "Odin",
		keywords: "Thor",
		icon: "btn-unit-terran-odin",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: [
			"OdinBarrage/Odin",
			"OdinNukeCalldown/Odin"
		]
	},
	"WingsOfLiberty_WarBot": {
		name: "A.R.E.S.",
		keywords: "Warbot",
		icon: "btn-unit-terran-ares",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: UNIT,
		commands: []
	},
	"WingsOfLiberty_CommandCenter": {
		name: "Command Center",
		keywords: "Orbital Relay, Orbital Command, Planetary Fortress",
		icon: "btn-building-terran-commandcenter",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SCV",
				"UpgradeToPlanetaryFortress/CommandCenter",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Orbital Relay": [
				"SCV",
				"UpgradeToPlanetaryFortress/CommandCenter",
				"Rally",
				"CalldownMULE/CommandCenter",
				"Scan/CommandCenter",
				"SelectBuilder",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Planetary Fortress": [
				"SCV",
				"Rally",
				"StopPlanetaryFortress/PlanetaryFortress",
				"Attack",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"WingsOfLiberty_Refinery": {
		name: "Refinery",
		icon: "btn-building-terran-refinery",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_SupplyDepot": {
		name: "Supply Depot",
		icon: "btn-building-terran-supplydepot",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: {
			"Raised": [
				"SelectBuilder",
				"Lower/SupplyDepot",
				"Halt",
				"Cancel"
			],
			"Lowered": [
				"Raise/SupplyDepotLowered"
			]
		}
	},
	"WingsOfLiberty_Barracks": {
		name: "Barracks",
		icon: "btn-building-terran-barracks",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: {
			"With Ghosts": [
				"Marine/Barracks",
				"Reaper/Barracks",
				"Marauder/Barracks",
				"Ghost/Barracks",
				"Medic/Barracks",
				"Firebat/Barracks",
				"SelectBuilder",
				"Rally",
				"TechReactorAI/Barracks",
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Lift",
				"Cancel"
			],
			"With Spectres": [
				"Marine/Barracks",
				"Reaper/Barracks",
				"Marauder/Barracks",
				"Spectre/Barracks",
				"Medic/Barracks",
				"Firebat/Barracks",
				"SelectBuilder",
				"Rally",
				"TechReactorAI/Barracks",
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabBarracks/Barracks",
				"TechReactorAI/Barracks",
				"Reactor/Barracks",
				"Land"
			]
		}
	},
	"WingsOfLiberty_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-terran-engineeringbay",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"TerranInfantryWeaponsLevel1/EngineeringBay",
			"TerranInfantryArmorLevel1/EngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_Bunker": {
		name: "Bunker",
		icon: "btn-building-terran-bunker",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Rally",
			"Stim",
			"BunkerLoad",
			"BunkerUnloadAll",
			"Salvage/Bunker",
			"Cancel"
		]
	},
	"WingsOfLiberty_PerditionTurret": {
		name: "Perdition Turret",
		icon: "btn-unit-terran-perditionturret",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_MissileTurret": {
		name: "Missile Turret",
		icon: "btn-building-terran-missileturret",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_SensorTower": {
		name: "Sensor Tower",
		icon: "btn-building-terran-sensordome",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_HiveMindEmulator": {
		name: "Hive Mind Emulator",
		icon: "btn-building-terran-hivemindemulator",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"MindControl/HiveMindEmulator",
			"Cancel"
		]
	},
	"WingsOfLiberty_PsiDisrupter": {
		name: "Psi Disrupter",
		icon: "btn-building-terran-sigmaprojector",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"WingsOfLiberty_GhostAcademy": {
		name: "Ghost Academy",
		keywords: "Shadow Ops",
		icon: "btn-building-terran-ghostacademy",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: {
			"Ghost Academy": [
				"NukeArm/GhostAcademy",
				"SelectBuilder",
				"Halt",
				"Cancel"
			],
			"Shadow Ops": [
				"SpectreNukeArm/GhostAcademy",
				"SelectBuilder",
				"Halt",
				"Cancel"
			]
		}
	},
	"WingsOfLiberty_Factory": {
		name: "Factory",
		icon: "btn-building-terran-factory",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: {
			"Factory": [
				"Hellion/Factory",
				"SiegeTank/Factory",
				"Thor/Factory",
				"Predator/Factory",
				"Vulture/Factory",
				"Diamondback/Factory",
				"Goliath/Factory",
				"SelectBuilder",
				"Rally",
				"TechReactorAI/Factory",
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechReactorAI/Factory",
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Land"
			]
		}
	},
	"WingsOfLiberty_Armory": {
		name: "Armory",
		icon: "btn-building-terran-armory",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"TerranVehicleWeaponsLevel1/Armory",
			"TerranVehiclePlatingLevel1/Armory",
			"TerranShipWeaponsLevel1/Armory",
			"TerranShipPlatingLevel1/Armory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_Starport": {
		name: "Starport",
		icon: "btn-building-terran-starport",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: {
			"Starport": [
				"VikingFighter/Starport",
				"Medivac/Starport",
				"Raven/Starport",
				"Banshee/Starport",
				"Battlecruiser/Starport",
				"Wraith/Starport",
				"BuildHercules/Starport",
				"SelectBuilder",
				"Rally",
				"TechReactorAI/Starport",
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechReactorAI/Starport",
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Land"
			]
		}
	},
	"WingsOfLiberty_FusionCore": {
		name: "Fusion Core",
		icon: "btn-building-terran-fusioncore",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_MercCompound": {
		name: "Merc Compound",
		keywords: "Mercenary Compound",
		icon: "btn-building-terran-merccompound",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"HireKelmorianMiners/MercCompound",
			"HireDevilDogs/MercCompound",
			"HireHammerSecurities/MercCompound",
			"HireSpartanCompany/MercCompound",
			"HireSiegeBreakers/MercCompound",
			"HireHelsAngels/MercCompound",
			"HireDuskWing/MercCompound",
			"HireDukesRevenge/MercCompound",
			"SelectBuilder",
			"Rally",
			"Halt",
			"Cancel"
		]
	},
	"WingsOfLiberty_LaserDrill": {
		name: "Drakken Laser Drill",
		icon: "btn-upgrade-swann-laserdrillattack",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"Attack",
		]
	},
	"WingsOfLiberty_Artifact": {
		name: "Artifact",
		icon: "btn-building-terran-artifact",
		race: TERRAN,
		commander: "WingsOfLiberty",
		type: BUILDING,
		commands: [
			"EnergyNova/Artifact"
		]
	},
	"NovaCovertOps": {
		name: "NovaCovertOps",
		displayName: "Nova Covert Ops",
		icon: "btn-unit-terran-nova",
		race: TERRAN,
		commander: "NovaCovertOps",
		sortCommander: "Terran",
		type: COMMANDER,
		defaultUnit: "NovaCovertOps_SCV"
	},
	"NovaCovertOps_Nova": {
		name: "Nova",
		keywords: "Ghost",
		icon: "btn-unit-terran-nova",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: HERO,
		commands: [
			"GhostHoldFire/NovaHero",
			"WeaponsFree/NovaHero",
			"NovaWeaponCanisterRifleSnipe/NovaHero",
			"NovaGadgetPulseGrenades/NovaHero",
			"ApolloCloakOnNova/NovaHero",
			"NovaDomination/NovaHero",
			"HeroNukeCalldown/NovaHero"
		]
	},
	"NovaCovertOps_SCV": {
		name: "SCV",
		icon: "btn-unit-terran-scvblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/SCV",
				"TerranBuildAdvanced/SCV",
				"Repair",
				"Halt"
			],
			"Build Structure": [
				"CommandCenter/SCV",
				"Refinery/SCV",
				"SupplyDepot/SCV",
				"Barracks/SCV",
				"EngineeringBay/SCV",
				"Bunker/SCV",
				"MissileTurret/SCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"GhostAcademy/SCV",
				"Factory/SCV",
				"Armory/SCV",
				"Starport/SCV",
				"FusionCore/SCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"NovaCovertOps_Marine": {
		name: "Marine",
		icon: "btn-unit-terran-marineblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"Stim",
			"MagrailMunitions/Marine"
		]
	},
	"NovaCovertOps_Marauder": {
		name: "Marauder",
		icon: "btn-unit-terran-marauderblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"Stim",
			"MagrailMunitions/Marauder"
		]
	},
	"NovaCovertOps_Reaper": {
		name: "Reaper",
		icon: "btn-unit-terran-reaperblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"Stim",
			"SpiderMine/Reaper"
		]
	},
	"NovaCovertOps_Hellbat": {
		name: "Hellbat",
		keywords: "Hellion",
		icon: "btn-unit-terran-hellbatblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"Stim",
			"MorphToHellion/Hellion",
			"MorphToHellionTank/Hellion"
		],
		overrides: {
			"Stim": {
				x: 2
			}
		}
	},
	"NovaCovertOps_Goliath": {
		name: "Goliath",
		icon: "btn-unit-terran-goliathblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: []
	},
	"NovaCovertOps_SiegeTank": {
		name: "Siege Tank",
		icon: "btn-unit-terran-siegetankblackops-tank",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"SiegeMode",
			"Unsiege",
			"DeploySpiderMines/SiegeTank"
		]
	},
	"NovaCovertOps_Liberator": {
		name: "Liberator",
		icon: "btn-unit-terran-liberatorblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"LiberatorAGMode/Liberator",
			"LiberatorAAMode/Liberator",
			"CloakOnLiberator",
			"CloakOff"
		]
	},
	"NovaCovertOps_Raven": {
		name: "Raven",
		keywords: "Auto-Turret, Railgun Turret",
		icon: "btn-unit-terran-ravenblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: {
			"Raven": [
				"AutoTurret/Raven",
				"BuildHealingDrone/Raven",
				"HunterSeekerMissile/Raven"
			],
			"With Spider Mines": [
				...data.common.basic,
				"AutoTurret/Raven",
				"BuildHealingDrone/Raven",
				"HunterSeekerMissile/Raven",
				"DeploySpiderMinesRaven/Raven"
			],
			"With Railgun Turrets": [
				...data.common.basic,
				"BuildRailgunTurret/Raven",
				"BuildHealingDrone/Raven",
				"HunterSeekerMissile/Raven"
			]
		}
	},
	"NovaCovertOps_Banshee": {
		name: "Banshee",
		icon: "btn-unit-terran-bansheeblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"CloakOnBanshee",
			"CloakOff"
		],
		overrides: {
			"CloakOnBanshee": {
				x: 0
			},
			"CloakOff": {
				x: 1
			}
		}
	},
	"NovaCovertOps_Battlecruiser": {
		name: "Battlecruiser",
		icon: "btn-unit-terran-blackops-battlecruiser",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"YamatoGun",
			"Hyperjump/Battlecruiser",
			"CloakOnBattlecruiser",
			"CloakOff"
		]
	},
	"NovaCovertOps_Stone": {
		name: "Stone",
		icon: "btn-unit-terran-ghost",
		race: TERRAN,
		commander: "Terran",
		type: HERO,
		commands: [
			"NovaStoneTargetEnemy/NovaStoneHeroic",
			"NovaStoneTargetEMP/NovaStoneHeroic",
			"GhostHoldFire/NovaStoneHeroic",
			"WeaponsFree/NovaStoneHeroic",
			"Snipe/NovaStoneHeroic",
			"EMP/NovaStoneHeroic",
			"NovaStoneDefensiveMatrix/NovaStoneHeroic",
			"NovaArmorBlinkSuitBlinkStone/NovaStoneHeroic",
			"SuperStimpackStone"
		]
	},
	"NovaCovertOps_Trooper": {
		name: "Trooper",
		keywords: "Marine",
		icon: "btn-unit-terran-dom-grunt",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"Stim"
		],
		overrides: {
			"Stim": {
				name: "Use Stimpack",
				icon: "btn-ability-terran-stimpack-color",
			}
		}
	},
	"NovaCovertOps_HERC": {
		name: "HERC",
		icon: "btn-unit-terran-herc",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"HercGrapple/HERC"
		]
	},
	"NovaCovertOps_Ghost": {
		name: "Ghost",
		icon: "btn-unit-terran-dom-femaleghost",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"NukeCalldown/Ghost",
			"DOMGhostPersonalDefensiveMatrix/Ghost",
			"GhostHoldFire/Ghost",
			"WeaponsFree/Ghost",
			"ChannelSnipe/Ghost",
			"EMP/Ghost",
			"CloakOnBanshee",
			"CloakOff",
			"Cancel"
		]
	},
	"NovaCovertOps_SensorDrone": {
		name: "Sensor Drone",
		icon: "btn-unit-terran-nova-shredder",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"NovaAlarmBotEMP/NovaAlarmBot"
		]
	},
	"NovaCovertOps_SonarDrone": {
		name: "Sonar Drone",
		icon: "btn-unit-terran-targetingdrone",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: [
			"NovaSonarPing/NovaSonarDrone",
			"EMP/NovaSonarDrone"
		]
	},
	"NovaCovertOps_Defiler": {
		name: "Defiler",
		icon: "btn-unit-zerg-defilerex3",
		race: ZERG,
		commander: "NovaCovertOps",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"InfestorConsumption/DefilerMP",
				"DefilerMPPlague/DefilerMP",
				"DefilerMPDarkSwarm/DefilerMP",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"NovaCovertOps_CommandCenter": {
		name: "Command Center",
		icon: "btn-building-nova-commandcenter",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SCV",
				"OrbitalCommand/CommandCenter",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Orbital Command": [
				"SCV",
				"Rally",
				"SupplyDrop/OrbitalCommand",
				"Scan/OrbitalCommand",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"NovaCovertOps_SupplyDepot": {
		name: "Supply Depot",
		icon: "btn-building-nova-supplydepot",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: {
			"Raised": [
				"SelectBuilder",
				"Lower/SupplyDepot",
				"Halt",
				"Cancel"
			],
			"Lowered": [
				"Raise/SupplyDepotLowered"
			]
		}
	},
	"NovaCovertOps_Refinery": {
		name: "Refinery",
		icon: "btn-building-nova-refinery",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"NovaCovertOps_Barracks": {
		name: "Barracks",
		icon: "btn-building-nova-barracks",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: {
			"Barracks": [
				"Marine/Barracks",
				"Reaper/Barracks",
				"Marauder/Barracks",
				"SelectBuilder",
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Lift"
			],
			"Flying": [
				...data.common.flying,
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Land"
			]
		}
	},
	"NovaCovertOps_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-nova-engineeringbay",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			"TerranInfantryWeaponsLevel1/EngineeringBay",
			"TerranInfantryArmorLevel1/EngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"NovaCovertOps_Bunker": {
		name: "Bunker",
		icon: "btn-building-nova-bunker",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Rally",
			"Stim",
			"BunkerLoad",
			"BunkerUnloadAll",
			"Salvage/Bunker",
			"Cancel"
		]
	},
	"NovaCovertOps_MissileTurret": {
		name: "Missile Turret",
		icon: "btn-building-nova-missileturret",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/MissileTurret",
			"Halt",
			"Cancel"
		]
	},
	"NovaCovertOps_GhostAcademy": {
		name: "Ghost Academy",
		icon: "btn-building-nova-ghostacademy",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			"NovaNukeArm/GhostAcademy",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"NovaCovertOps_Factory": {
		name: "Factory",
		icon: "btn-unit-terran-factoryblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: {
			"Factory": [
				"HellionTank/Factory",
				"SiegeTank/Factory",
				"Goliath/Factory",
				"SelectBuilder",
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Lift"
			],
			"Flying": [
				...data.common.flying,
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Land"
			]
		}
	},
	"NovaCovertOps_Armory": {
		name: "Armory",
		icon: "btn-unit-terran-armoryblackops",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			"TerranVehicleAndShipWeaponsLevel1/Armory",
			"TerranVehicleAndShipPlatingLevel1/Armory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"NovaCovertOps_Starport": {
		name: "Starport",
		icon: "btn-building-nova-starport",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: {
			"Starport": [
				"Liberator/Starport",
				"Banshee/Starport",
				"Raven/Starport",
				"Battlecruiser/Starport",
				"SelectBuilder",
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Lift"
			],
			"Flying": [
				...data.common.flying,
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Land"
			]
		}
	},
	"NovaCovertOps_FusionCore": {
		name: "Fusion Core",
		icon: "btn-building-nova-fusioncore",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"NovaCovertOps_HERCCompound": {
		name: "HERC Compound",
		icon: "btn-building-terran-mercenaryport",
		race: TERRAN,
		commander: "NovaCovertOps",
		type: BUILDING,
		commands: [
			"TrainHERC/HERCCompound",
			"SelectBuilder",
			"Rally",
			"Cancel"
		]
	},
	"Raynor": {
		name: "Raynor",
		keywords: "Renegade Commander",
		icon: "talent-raynor-level15-hyperiondamageaura",
		race: TERRAN,
		commander: "Raynor",
		type: COMMANDER,
		defaultUnit: "Raynor_SCV"
	},
	"Raynor_SCV": {
		name: "SCV",
		icon: "btn-unit-terran-scv",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/SCV",
				"TerranBuildAdvanced/SCV",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"CommandCenter/SCV",
				"Refinery/SCV",
				"SupplyDepot/SCV",
				"Barracks/SCV",
				"EngineeringBay/SCV",
				"Bunker/SCV",
				"MissileTurret/SCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"Factory/SCV",
				"Armory/SCV",
				"Starport/SCV",
				"FusionCore/SCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Raynor_MULE": {
		name: "MULE",
		icon: "btn-unit-terran-mule",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"GatherProt",
			"ReturnCargo",
			"Repair"
		]
	},
	"Raynor_Marine": {
		name: "Marine",
		icon: "btn-unit-terran-marine",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"Stim"
		]
	},
	"Raynor_Firebat": {
		name: "Firebat",
		icon: "btn-unit-terran-firebat",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"Stim"
		]
	},
	"Raynor_Medic": {
		name: "Medic",
		icon: "btn-unit-terran-medic",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"MedicHeal/Medic"
		]
	},
	"Raynor_Marauder": {
		name: "Marauder",
		icon: "btn-unit-terran-marauder",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"Stim"
		]
	},
	"Raynor_Vulture": {
		name: "Vulture",
		icon: "btn-unit-terran-vulture",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"SpiderMine/Vulture",
			"SpiderMineReplenish/Vulture",
			"IgniteAfterburners/Vulture"
		]
	},
	"Raynor_SiegeTank": {
		name: "Siege Tank",
		icon: "btn-unit-terran-siegetank",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"SiegeMode",
			"Unsiege",
			"IgniteAfterburners/SiegeTank"
		]
	},
	"Raynor_Viking": {
		name: "Viking",
		icon: "btn-unit-terran-vikingfighter",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"AssaultMode",
			"FighterMode",
			"IgniteAfterburners/VikingAssault"
		]
	},
	"Raynor_Banshee": {
		name: "Banshee",
		icon: "btn-unit-terran-banshee",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"CloakOnBanshee",
			"CloakOff",
			"IgniteAfterburners/Banshee"
		]
	},
	"Raynor_Battlecruiser": {
		name: "Battlecruiser",
		icon: "btn-unit-terran-battlecruiser",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"YamatoGun",
			"Hyperjump/Battlecruiser",
			"IgniteAfterburners/Battlecruiser"
		]
	},
	"Raynor_Hyperion": {
		name: "Hyperion",
		keywords: "Raynor, Battlecruiser",
		icon: "btn-unit-terran-hyperion",
		race: TERRAN,
		commander: "Raynor",
		type: HERO,
		commands: [
			"HyperionVoidCoopHyperjump/HyperionVoidCoop",
			"HyperionVoidCoopYamatoCannon/HyperionVoidCoop",
			"HyperionAdvancedPDD/HyperionVoidCoop"
		]
	},
	"Raynor_DuskWings": {
		name: "Dusk Wings",
		keywords: "Banshee",
		icon: "btn-unit-terran-merc-banshee",
		race: TERRAN,
		commander: "Raynor",
		type: UNIT,
		commands: [
			"CloakOnBanshee",
			"CloakOff"
		]
	},
	"Raynor_CommandCenter": {
		name: "Command Center",
		keywords: "Orbital Command",
		icon: "btn-building-terran-commandcenter",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SCV",
				"OrbitalCommand/CommandCenter",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Orbital Command": [
				"SCV",
				"Rally",
				"CalldownMULE/OrbitalCommand",
				"Scan/OrbitalCommand",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"Raynor_Refinery": {
		name: "Refinery",
		icon: "btn-building-terran-refinery",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Raynor_SupplyDepot": {
		name: "Supply Depot",
		icon: "btn-building-terran-supplydepot",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: {
			"Raised": [
				"SelectBuilder",
				"Lower/SupplyDepot",
				"Halt",
				"Cancel"
			],
			"Lowered": [
				"Raise/SupplyDepotLowered"
			]
		}
	},
	"Raynor_Barracks": {
		name: "Barracks",
		icon: "btn-building-terran-barracks",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: {
			"Barracks": [
				"Marine/Barracks",
				"Marauder/Barracks",
				"Firebat/Barracks",
				"Medic/Barracks",
				"SelectBuilder",
				"Rally",
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchShieldWall/BarracksTechLab",
				"Stimpack/BarracksTechLab",
				"ResearchPunisherGrenades/BarracksTechLab",
				"ResearchIncineratorGauntlets/BarracksTechLab",
				"ResearchJuggernautPlating/BarracksTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Land"
			]
		}
	},
	"Raynor_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-terran-engineeringbay",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: [
			"TerranInfantryWeaponsLevel1/EngineeringBay",
			"TerranInfantryArmorLevel1/EngineeringBay",
			"ResearchNeosteelFrame/EngineeringBay",
			"UpgradeBuildingArmorLevel1/EngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Raynor_Bunker": {
		name: "Bunker",
		icon: "btn-building-terran-bunkershriketurret",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Rally",
			"Stim",
			"BunkerLoad",
			"BunkerUnloadAll",
			"Salvage/Bunker",
			"Cancel"
		]
	},
	"Raynor_MissileTurret": {
		name: "Missile Turret",
		icon: "btn-building-terran-missileturret",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/MissileTurret",
			"Halt",
			"Cancel"
		]
	},
	"Raynor_Factory": {
		name: "Factory",
		icon: "btn-building-terran-factory",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: {
			"Factory": [
				"HellionTank/Factory",
				"SiegeTank/Factory",
				"SelectBuilder",
				"Rally",
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchHighCapacityBarrels/FactoryTechLab",
				"ResearchHellbatHellArmor/FactoryTechLab",
				"ResearchImprovedSiegeMode/FactoryTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Land"
			]
		}
	},
	"Raynor_Armory": {
		name: "Armory",
		icon: "btn-building-terran-armory",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: [
			"TerranVehicleAndShipWeaponsLevel1/Armory",
			"TerranVehicleAndShipPlatingLevel1/Armory",
			"ResearchVehicleWeaponRange/Armory",
			"ResearchRegenerativeBioSteel/Armory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Raynor_Starport": {
		name: "Starport",
		icon: "btn-building-terran-starport",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: {
			"Starport": [
				"VikingFighter/Starport",
				"Banshee/Starport",
				"Battlecruiser/Starport",
				"SelectBuilder",
				"Rally",
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchBansheeCloak/StarportTechLab",
				"ResearchShockwaveMissileBattery/StarportTechLab",
				"ResearchPhobosClassWeaponsSystem/StarportTechLab",
				"ResearchRipwaveMissiles/StarportTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Land"
			]
		}
	},
	"Raynor_FusionCore": {
		name: "Fusion Core",
		icon: "btn-building-terran-fusioncore",
		race: TERRAN,
		commander: "Raynor",
		type: BUILDING,
		commands: [
			"ResearchBattlecruiserSpecializations/FusionCore",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Swann": {
		name: "Swann",
		keywords: "Chief Engineer",
		icon: "btn-upgrade-swann-laserdrillattack",
		race: TERRAN,
		commander: "Swann",
		type: COMMANDER,
		defaultUnit: "Swann_SCV"
	},
	"Swann_SCV": {
		name: "SCV",
		icon: "btn-unit-terran-scv",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"AdvancedConstructionAuto/SCV",
				"TerranBuild/SCV",
				"TerranBuildAdvanced/SCV",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"CommandCenter/SCV",
				"Refinery/SCV",
				"SupplyDepot/SCV",
				"EngineeringBay/SCV",
				"Bunker/SCV",
				"MissileTurret/SCV",
				"BuildKelMorianRocketTurret/SCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"Factory/SCV",
				"Armory/SCV",
				"Starport/SCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Swann_Hellbat": {
		name: "Hellbat",
		keywords: "Hellion",
		icon: "btn-unit-terran-hellionbattlemode",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: [
			"MorphToHellion/Hellion",
			"MorphToHellionTank/Hellion"
		]
	},
	"Swann_Goliath": {
		name: "Goliath",
		icon: "btn-unit-terran-goliath",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: []
	},
	"Swann_SiegeTank": {
		name: "Siege Tank",
		icon: "btn-unit-terran-siegetank",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: [
			"SiegeMode",
			"Unsiege",
			"SwannCommanderRebuild"
		]
	},
	"Swann_Cyclone": {
		name: "Cyclone",
		icon: "btn-unit-terran-cyclone",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: [
			"LockOn/Cyclone"
		]
	},
	"Swann_Thor": {
		name: "Thor",
		icon: "btn-unit-terran-thor",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: [
			"250mmStrikeCannons/Thor",
			"SwannCommanderRebuild"
		]
	},
	"Swann_Wraith": {
		name: "Wraith",
		icon: "btn-unit-terran-wraith",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: [
			"WraithCloakOn/Wraith",
			"WraithCloakOff/Wraith"
		]
	},
	"Swann_Hercules": {
		name: "Hercules",
		icon: "btn-unit-terran-hercules",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: [
			"HerculesLoad/Hercules",
			"HerculesUnloadAll/Hercules",
			"HyperjumpHercules/Hercules"
		]
	},
	"Swann_ScienceVessel": {
		name: "Science Vessel",
		icon: "btn-unit-terran-sciencevessel",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: [
			"NanoRepair/ScienceVessel",
			"Irradiate/ScienceVessel",
			"DefensiveMatrixTarget/ScienceVessel"
		]
	},
	"Swann_WarBot": {
		name: "A.R.E.S.",
		keywords: "Warbot",
		icon: "btn-unit-terran-ares",
		race: TERRAN,
		commander: "Swann",
		type: UNIT,
		commands: []
	},
	"Swann_CommandCenter": {
		name: "Command Center",
		icon: "btn-building-terran-commandcenter",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SCV",
				"VespeneDrone/CommandCenter",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"Swann_Refinery": {
		name: "Refinery",
		icon: "btn-building-terran-refinery",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Swann_SupplyDepot": {
		name: "Supply Depot",
		icon: "btn-building-terran-supplydepot",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: {
			"Raised": [
				"SelectBuilder",
				"Lower/SupplyDepot",
				"Halt",
				"Cancel"
			],
			"Lowered": [
				"Raise/SupplyDepotLowered"
			]
		}
	},
	"Swann_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-terran-engineeringbay",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: [
			"ResearchNeosteelFrame/EngineeringBay",
			"UpgradeBuildingArmorLevel1/EngineeringBay",
			"ResearchFireSuppressionSystems/EngineeringBay",
			"ResearchImprovedTurretAttackSpeed/EngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Swann_PerditionTurret": {
		name: "Perdition Turret",
		keywords: "Flaming Betty",
		icon: "btn-unit-terran-perditionturret",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: {
			"Unburrowed": [
				...data.common.tower,
				"SelectBuilder",
				"Salvage/PerditionTurret",
				"Halt",
				"Cancel"
			],
			"Burrowed": [
				...data.common.tower,
				"SelectBuilder",
				"Salvage/PerditionTurretUnderground"
			]
		}
	},
	"Swann_DevastationTurret": {
		name: "Devastation Turret",
		keywords: "Blaster Billy",
		icon: "btn-tips-flamingbetty",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/KelMorianGrenadeTurret",
			"Halt",
			"Cancel"
		]
	},
	"Swann_MissileTurret": {
		name: "Missile Turret",
		keywords: "Spinning Dizzy",
		icon: "btn-building-terran-missileturrettitaniumhousing",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/KelMorianMissileTurret",
			"Halt",
			"Cancel"
		]
	},
	"Swann_Factory": {
		name: "Factory",
		icon: "btn-building-terran-factory",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: {
			"Factory": [
				"HellionTank/Factory",
				"Goliath/Factory",
				"SiegeTank/Factory",
				"BuildCyclone/Factory",
				"Thor/Factory",
				"Hellion/Factory",
				"SelectBuilder",
				"Rally",
				"TechLabFactory/Factory",
				"Lift",
				"Cancel"
			],
			"Tech Reactor": [
				"ResearchHighCapacityBarrels/FactoryTechReactor",
				"ResearchHellbatHellArmor/FactoryTechReactor",
				"ResearchImprovedSiegeMode/FactoryTechReactor",
				"ResearchMultiLockWeaponsSystem/FactoryTechReactor",
				"ResearchMaelstromRounds/FactoryTechReactor",
				"ResearchLockOnRangeUpgrade/FactoryTechReactor",
				"ResearchCycloneLockOnDamageUpgrade/FactoryTechReactor",
				"Research330mmBarrageCannon/FactoryTechReactor",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabFactory/Factory",
				"Land"
			]
		}
	},
	"Swann_Armory": {
		name: "Armory",
		icon: "btn-building-terran-armory",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: [
			"TerranVehicleAndShipWeaponsLevel1/Armory",
			"TerranVehicleAndShipPlatingLevel1/Armory",
			"ResearchVehicleWeaponRange/Armory",
			"ResearchRegenerativeBioSteel/Armory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Swann_Starport": {
		name: "Starport",
		icon: "btn-building-terran-starport",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: {
			"Starport": [
				"Wraith/Starport",
				"BuildHercules/Starport",
				"BuildScienceVessel/Starport",
				"SelectBuilder",
				"Rally",
				"TechLabStarport/Starport",
				"Lift",
				"Cancel"
			],
			"Tech Reactor": [
				"ResearchBansheeCloak/StarportTechReactor",
				"ResearchShockwaveMissileBattery/StarportTechReactor",
				"ResearchPhobosClassWeaponsSystem/StarportTechReactor",
				"ResearchRipwaveMissiles/StarportTechReactor",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabStarport/Starport",
				"Land"
			]
		}
	},
	"Swann_LaserDrill": {
		name: "Drakken Laser Drill",
		icon: "btn-upgrade-swann-laserdrillattack",
		race: TERRAN,
		commander: "Swann",
		type: BUILDING,
		commands: {
			"Level 0": [
				"Attack",
				"ResearchDrakkenLaserDrillBFG/DrakkenLaserDrillCoop",
				"Cancel"
			],
			"Level 1": [
				"Attack",
				"ResearchDrakkenLaserDrillNuke/DrakkenLaserDrillCoop",
				"Cancel"
			]
		}
	},
	"Nova": {
		name: "Nova",
		keywords: "Dominion Ghost",
		icon: "nova coop_lvl 01_black ops",
		race: TERRAN,
		commander: "Nova",
		type: COMMANDER,
		defaultUnit: "Nova_SCV"
	},
	"Nova_Nova": {
		name: "Nova",
		keywords: "Ghost",
		icon: "btn-unit-terran-nova",
		race: TERRAN,
		commander: "Nova",
		type: HERO,
		commands: {
			"Nova": [
				"GhostHoldFire/NovaCoop",
				"WeaponsFree/NovaCoop",
				"NovaWeaponImprovedCanisterRifleSnipe",
				"NovaGadgetBoombots",
				"NovaUnitNuke",
				"NovaSwitchAssaultMode"
			],
			"Nova’s Stasis Shell": [
				"NovaWeaponImprovedCanisterRifleSnipe",
				"NovaGadgetBoombots",
				"NovaUnitNuke",
				"NovaSwitchAssaultMode",
				"Rally"
			]
		}
	},
	"Nova_SCV": {
		name: "SCV",
		icon: "btn-unit-terran-scvblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/SCV",
				"TerranBuildAdvanced/SCV",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"CommandCenter/SCV",
				"Refinery/SCV",
				"Barracks/SCV",
				"EngineeringBay/SCV",
				"Bunker/SCV",
				"MissileTurret/SCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"GhostAcademy/SCV",
				"Factory/SCV",
				"Armory/SCV",
				"Starport/SCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Nova_Marine": {
		name: "Elite Marine",
		icon: "btn-unit-terran-marineblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"MarineSuperStimpack/Marine_BlackOps"
		]
	},
	"Nova_Marauder": {
		name: "Marauder Commando",
		icon: "btn-unit-terran-marauderblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"MagrailMunitions/Marauder_BlackOps"
		]
	},
	"Nova_Ghost": {
		name: "Spec Ops Ghost",
		icon: "btn-unit-terran-blackops-ghost",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"GhostHoldFire/Ghost_BlackOps",
			"WeaponsFree/Ghost_BlackOps",
			"Snipe_BlackOps/Ghost_BlackOps",
			"EMP/Ghost_BlackOps"
		]
	},
	"Nova_Hellbat": {
		name: "Hellbat Ranger",
		keywords: "Hellion",
		icon: "btn-unit-terran-hellbatblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"MorphToHellion/HellionBlackOps",
			"MorphToHellbatBlackOps/HellionBlackOps",
			"HellbatJumpJetAssault/HellionBlackOps"
		]
	},
	"Nova_Goliath": {
		name: "Strike Goliath",
		icon: "btn-unit-terran-goliathblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: []
	},
	"Nova_SiegeTank": {
		name: "Heavy Siege Tank",
		icon: "btn-unit-terran-siegetankblackops-tank",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"SiegeTank_BlackOpsSiege",
			"SiegeTank_BlackOpsUnsiege",
			"DeploySpiderMines/SiegeTank_BlackOps"
		]
	},
	"Nova_Liberator": {
		name: "Raid Liberator",
		icon: "btn-unit-terran-liberatorblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"Liberator_BlackOpsMorphtoAG/Liberator_BlackOps",
			"Liberator_BlackOpsMorphtoAA/Liberator_BlackOps"
		]
	},
	"Nova_Raven": {
		name: "Raven Type-II",
		keywords: "Railgun Turret",
		icon: "btn-unit-terran-ravenblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: {
			"Raven Type-II": [
				"AutoTurret/Raven_BlackOps",
				"PointDefenseDrone/Raven_BlackOps",
				"InstantHunterSeekerMissile/Raven_BlackOps"
			],
			"Railgun Turret": [
				...data.common.tower
			]
		}
	},
	"Nova_Banshee": {
		name: "Covert Banshee",
		icon: "btn-unit-terran-bansheeblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"Banshee_BlackOpsAirstrike/Banshee_BlackOps"
		]
	},
	"Nova_DefensiveDrone": {
		name: "Defensive Drone",
		icon: "btn-unit-collection-defensivematrixdrone-covertops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"DefensiveMatrixTarget/NovaDefensiveMatrixDrone"
		]
	},
	"Nova_SabotageDrone": {
		name: "Sabotage Drone",
		icon: "btn-unit-terran-sabotagedroneblackops",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"NovaBoombotBurrow/NovaBoombot"
		]
	},
	"Nova_RepairDrone": {
		name: "Bio-Mechanical Repair Drone",
		icon: "btn-unit-biomechanicaldrone",
		race: TERRAN,
		commander: "Nova",
		type: UNIT,
		commands: [
			"BioMechanicalHeal/HealingDrone"
		]
	},
	"Nova_CommandCenter": {
		name: "Command Center",
		icon: "btn-building-nova-commandcenter",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SCV",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"Nova_Refinery": {
		name: "Automated Refinery",
		icon: "btn-building-nova-autorefinery",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Nova_Barracks": {
		name: "Barracks",
		icon: "btn-building-nova-barracks",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: {
			"Barracks": [
				"Marine/Barracks",
				"Marauder/Barracks",
				"Firebat/Barracks",
				"SelectBuilder",
				"TechLabBarracks/Barracks",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchShieldWall/BarracksTechLab",
				"Stimpack/BarracksTechLab",
				"ResearchPunisherGrenades/BarracksTechLab",
				"ResearchMarauderMagrailMunitions/BarracksTechLab",
				"ResearchIncineratorGauntlets/BarracksTechLab",
				"ResearchJuggernautPlating/BarracksTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabBarracks/Barracks",
				"Land"
			]
		}
	},
	"Nova_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-nova-engineeringbay",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: [
			"TerranInfantryWeaponsLevel1/EngineeringBay",
			"TerranInfantryArmorLevel1/EngineeringBay",
			"UpgradeBuildingArmorLevel1/EngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Nova_RailgunTurret": {
		name: "Railgun Turret",
		icon: "btn-unit-terran-autoturretblackops",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/NovaACLaserTurret",
			"Halt",
			"Cancel"
		]
	},
	"Nova_MissileTurret": {
		name: "Missile Turret",
		icon: "btn-building-nova-missileturret",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/MissileTurret",
			"Halt",
			"Cancel"
		]
	},
	"Nova_Factory": {
		name: "Factory",
		icon: "btn-unit-terran-factoryblackops",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: {
			"Factory": [
				"HellionTank/Factory",
				"Goliath/Factory",
				"SiegeTank/Factory",
				"SelectBuilder",
				"TechLabFactory/Factory",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchHighCapacityBarrels/FactoryTechLab",
				"ResearchHellbatHellArmor/FactoryTechLab",
				"ResearchImprovedSiegeMode/FactoryTechLab",
				"ResearchMultiLockWeaponsSystem/FactoryTechLab",
				"ResearchMaelstromRounds/FactoryTechLab",
				"ResearchLockOnRangeUpgrade/FactoryTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabFactory/Factory",
				"Land"
			]
		}
	},
	"Nova_Armory": {
		name: "Armory",
		icon: "btn-unit-terran-armoryblackops",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: [
			"TerranVehicleAndShipWeaponsLevel1/Armory",
			"TerranVehicleAndShipPlatingLevel1/Armory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Nova_Starport": {
		name: "Starport",
		icon: "btn-building-nova-starport",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: {
			"Starport": [
				"Liberator/Starport",
				"Banshee/Starport",
				"Raven/Starport",
				"SelectBuilder",
				"TechLabStarport/Starport",
				"Lift",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchBansheeCloak/StarportTechLab",
				"ResearchShockwaveMissileBattery/StarportTechLab",
				"ResearchPhobosClassWeaponsSystem/StarportTechLab",
				"ResearchRipwaveMissiles/StarportTechLab",
				"ResearchMedivacCloakedHealBeam/StarportTechLab",
				"ResearchSuperScience/StarportTechLab",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"TechLabStarport/Starport",
				"Land"
			]
		}
	},
	"Nova_GhostAcademy": {
		name: "Ghost Academy",
		icon: "btn-building-nova-ghostacademy",
		race: TERRAN,
		commander: "Nova",
		type: BUILDING,
		commands: [
			"ResearchNovaDetector/GhostAcademyNova",
			"ResearchNovaLifeRegen/GhostAcademyNova",
			"ResearchNovaShotgunBlastRange/GhostAcademyNova",
			"ResearchNovaSnipeRefund/GhostAcademyNova",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Han": {
		name: "Han",
		keywords: "Mira Han, Matt Horner, Mercenary, Dominion Admiral",
		displayName: "Han & Horner",
		icon: "btn-progression-hornerhan-1-precisionchaos",
		race: TERRAN,
		commander: "Han",
		type: COMMANDER,
		defaultUnit: "Han_SCV"
	},
	"Han_SCV": {
		name: "SCV",
		icon: "btn-unit-collection-scv-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/HHSCV",
				"TerranBuildAdvanced/HHSCV",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"CommandCenter/HHSCV",
				"Refinery/HHSCV",
				"SupplyDepot/HHSCV",
				"BuildHHMercStarport/HHSCV",
				"HHMercCompound/HHSCV",
				"MissileTurret/HHSCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"BuildHHBomberPlatform/HHSCV",
				"HHArmory/HHSCV",
				"FusionCore/HHSCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Han_Reaper": {
		name: "Reaper",
		icon: "btn-unit-collection-reaper-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: [
			"HHKD8Charge/HHReaper",
			"HHReaperFly/HHReaper"
		]
	},
	"Han_WidowMine": {
		name: "Widow Mine",
		icon: "btn-unit-collection-widowmine-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: [
			"WidowMineBurrow/HHWidowMine",
			"WidowMineUnburrow/HHWidowMine"
		]
	},
	"Han_Hellbat": {
		name: "Hellbat",
		keywords: "Hellion",
		icon: "btn-unit-collection-hellbat-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: {
			"Hellbat": [
				"MorphToHHHellion/HHHellionTank"
			],
			"Hellion": [
				...data.common.basic,
				"MorphToHellionTank/HHHellion",
				"HHHellionBomb/HHHellion"
			]
		}
	},
	"Han_Wraith": {
		name: "Asteria Wraith",
		icon: "btn-unit-collection-wraith-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: [
			"FleetwideJump/HHWraith",
			"WraithCloakOn/HHWraith",
			"WraithCloakOff/HHWraith"
		]
	},
	"Han_Viking": {
		name: "Deimos Viking",
		icon: "btn-unit-collection-vikingfighter-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: {
			"Fighter Mode": [
				"FleetwideJump/HHVikingFighter",
				"HHVikingRockets/HHVikingFighter",
				"AssaultMode"
			],
			"Assault Mode": [
				...data.common.basic,
				"FleetwideJump/HHVikingAssault",
				"FighterMode"
			]
		}
	},
	"Han_Raven": {
		name: "Theia Raven",
		icon: "btn-unit-collection-ravencoop-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: [
			"FleetwideJump/HHRaven",
			"HHNomadTargetLock/HHRaven",
			"MorphtoHHRavenSiege/HHRaven",
			"MorphtoHHRaven/HHRaven"
		]
	},
	"Han_Battlecruiser": {
		name: "Sovereign Battlecruiser",
		icon: "btn-unit-collection-battlecruiser-junker",
		race: TERRAN,
		commander: "Han",
		type: UNIT,
		commands: [
			"Hyperjump/HHBattlecruiser",
			"HHYamatoShots/HHBattlecruiser",
			"HHBattlecruiserShots/HHBattlecruiser"
		]
	},
	"Han_CommandCenter": {
		name: "Command Center",
		icon: "btn-building-hornerhan-commandcenter",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SCV",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"Han_Refinery": {
		name: "Refinery",
		icon: "btn-building-hornerhan-refinery",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: [
			"SelectBuilder"
		]
	},
	"Han_SupplyDepot": {
		name: "Supply Depot",
		icon: "btn-building-hornerhan-supplypod",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: {
			"Raised": [
				"SelectBuilder",
				"Lower/SupplyDepot"
			],
			"Lowered": [
				"Raise/SupplyDepotLowered"
			]
		}
	},
	"Han_AssaultGalleon": {
		name: "Assault Galleon",
		icon: "btn-building-hornerhan-assaultgalleon",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: [
			...data.common.basic,
			"ResearchHHMercStarportHangarBay/HHMercStarportUpgraded",
			"HHReaper/HHMercStarportUpgraded",
			"HHWidowMine/HHMercStarportUpgraded",
			"HHHellion/HHMercStarportUpgraded",
			"HHHellionTank/HHMercStarportUpgraded",
			"SelectBuilder",
			"Cancel"
		]
	},
	"Han_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-hornerhan-engineeringbay",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: [
			"ResearchHHReaperClusterBombs/HHMercCompound",
			"ResearchHHReaperFlight/HHMercCompound",
			"ResearchHHWidowMineDeathBlossom/HHMercCompound",
			"ResearchHHWidowMineRangeAttack/HHMercCompound",
			"ResearchHHHellionDeathStim/HHMercCompound",
			"ResearchHHHellionRocket/HHMercCompound",
			"ResearchHHHellionDeathFear/HHMercCompound",
			"ResearchHHHellionAttackDoT/HHMercCompound",
			"SelectBuilder",
			"Cancel"
		]
	},
	"Han_MissileTurret": {
		name: "Missile Turret",
		icon: "btn-building-hornerhan-missileturret",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/MissileTurret",
			"Halt",
			"Cancel"
		]
	},
	"Han_StrikeFighterPlatform": {
		name: "Strike Fighter Platform",
		icon: "btn-building-hornerhan-bomberplatform",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: [
			"HHBomberAreaBomb/HHBomberPlatform",
			"TrainHHBomber/HHBomberPlatform",
			"Halt",
			"Cancel"
		]
	},
	"Han_Armory": {
		name: "Armory",
		icon: "btn-building-hornerhan-armory",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: [
			"TerranVehicleAndShipWeaponsLevel1/Armory",
			"TerranVehicleAndShipPlatingLevel1/Armory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Han_Starport": {
		name: "Dominion Starport",
		icon: "btn-building-hornerhan-starport",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: {
			"Starport": [
				"Wraith/HHStarport",
				"VikingFighter/HHStarport",
				"Battlecruiser/HHStarport",
				"HHRaven/HHStarport",
				"HHTechLabStarport/HHStarport"
			],
			"Tech Lab": [
				"ResearchBansheeCloak/StarportTechLab",
				"ResearchShockwaveMissileBattery/StarportTechLab",
				"ResearchPhobosClassWeaponsSystem/StarportTechLab",
				"ResearchRipwaveMissiles/StarportTechLab",
				"ResearchMedivacCloakedHealBeam/StarportTechLab",
				"ResearchHHTacticalJumpCharges/StarportTechLab",
				"Cancel"
			]
		}
	},
	"Han_FusionCore": {
		name: "Fusion Core",
		icon: "btn-building-hornerhan-fusioncore",
		race: TERRAN,
		commander: "Han",
		type: BUILDING,
		commands: [
			"ResearchBattlecruiserSpecializations/FusionCore",
			"ResearchHHBomberNapalm/FusionCore",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Tychus": {
		name: "Tychus",
		keywords: "Legendary Outlaw",
		icon: "talent-tychus-level01-squadbar",
		race: TERRAN,
		commander: "Tychus",
		type: COMMANDER,
		defaultUnit: "Tychus_SCV"
	},
	"Tychus_Tychus": {
		name: "Tychus",
		keywords: "Legendary Outlaw, Marine",
		icon: "btn-unit-terran-tychuscoop",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_Odin": {
		name: "Odin",
		keywords: "Thor",
		icon: "btn-unit-terran-tychusodin",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: {
			"Odin": [
				"TychusOdinRedButton/TychusOdin",
				"TychusHeroCommonAbil2",
				"TychusHeroCommonAbil3",
				"TychusHeroCommonAbil4",
				"TychusHeroCommonAbil5"
			],
			"Upgraded": [
				...data.common.basic,
				"TychusOdinNuclearStrike/TychusOdin",
				"TychusHeroCommonAbil2",
				"TychusHeroCommonAbil3",
				"TychusHeroCommonAbil4",
				"TychusHeroCommonAbil5"
			]
		}
	},
	"Tychus_CrookedSam": {
		name: "Crooked Sam",
		keywords: "Outlaw, Reaper",
		icon: "btn-unit-terran-tychusreaper",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusReaperEvasionBuff/TychusReaper",
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_Sirius": {
		name: "James “Sirius” Sykes",
		keywords: "Outlaw, Warhound, Warhound Turret",
		icon: "btn-unit-terran-tychuswarhound",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: {
			"James “Sirius” Sykes": [
				"TychusWarhoundHaywireMissiles/TychusWarhound",
				"TychusHeroCommonAbil1",
				"TychusHeroCommonAbil2",
				"TychusHeroCommonAbil3",
				"TychusHeroCommonAbil4",
				"TychusHeroCommonAbil5"
			],
			"Warhound Turret": [
				...data.common.tower,
				"TychusWarhoundTurretHaywireMissiles/TychusWarhoundAutoTurret"
			]
		}
	},
	"Tychus_Blaze": {
		name: "Miles “Blaze” Lewis",
		keywords: "Outlaw, Firebat",
		icon: "btn-unit-terran-tychusfirebat",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_Rattlesnake": {
		name: "Kev “Rattlesnake” West",
		keywords: "Outlaw, Marauder",
		icon: "btn-unit-terran-tychusmarauder",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusMarauderSuperStim/TychusMarauder",
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_Cannonball": {
		name: "Rob “Cannonball” Boswell",
		keywords: "Outlaw, HERC",
		icon: "btn-unit-terran-tychusherc",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_Vega": {
		name: "Vega",
		keywords: "Outlaw, Ghost",
		icon: "btn-unit-terran-tychusghost",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusGhostPsychicSnare/TychusGhost",
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_Nux": {
		name: "Nux",
		keywords: "Outlaw, Spectre",
		icon: "btn-unit-terran-tychusspectre",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_Nikara": {
		name: "Lt. Layna Nikara",
		keywords: "Outlaw, Medic",
		icon: "btn-unit-terran-tychusmedic",
		race: TERRAN,
		commander: "Tychus",
		type: HERO,
		commands: [
			"TychusMedicDefensiveMatrix/TychusMedic",
			"TychusMedicHeal/TychusMedic",
			"TychusHeroCommonAbil1",
			"TychusHeroCommonAbil2",
			"TychusHeroCommonAbil3",
			"TychusHeroCommonAbil4",
			"TychusHeroCommonAbil5"
		]
	},
	"Tychus_SCV": {
		name: "SCV",
		icon: "btn-unit-terran-tychusscv",
		race: TERRAN,
		commander: "Tychus",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/TychusSCV",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"TychusCommandCenter/TychusSCV",
				"TychusRefinery/TychusSCV",
				"BuildTychusBar/TychusSCV",
				"TychusEngineeringBay/TychusSCV",
				"TychusSCVAutoTurret/TychusSCV",
				"TychusMercCompound/TychusSCV",
				"TychusArmory/TychusSCV",
				"TychusGhostAcademy/TychusSCV",
				"BuildTychusMedivacPlatform/TychusSCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Tychus_CommandCenter": {
		name: "Command Center",
		icon: "btn-building-terran-tychuscommandcenter",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: {
			"Command Center": [
				"TychusSCV/TychusCommandCenter",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"Land"
			]
		}
	},
	"Tychus_Refinery": {
		name: "Refinery",
		icon: "btn-building-terran-tychusrefinery",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Tychus_Bar": {
		name: "Joeyray’s Bar",
		icon: "btn-building-terran-tychusbar",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			"TychusACHero/TychusResearchCenter",
			"TychusReaper/TychusResearchCenter",
			"TychusWarhound/TychusResearchCenter",
			"TychusFirebat/TychusResearchCenter",
			"TychusHERC/TychusResearchCenter",
			"TychusMarauder/TychusResearchCenter",
			"TychusGhost/TychusResearchCenter",
			"TychusSpectre/TychusResearchCenter",
			"TychusMedic/TychusResearchCenter",
			"Halt",
			"Cancel"
		]
	},
	"Tychus_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-terran-tychusengineeringbay",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			"TychusOutlawWeaponsLevel1/TychusEngineeringBay",
			"TychusOutlawArmorLevel1/TychusEngineeringBay",
			"TychusSquadAttackSpeed/TychusEngineeringBay",
			"TychusSquadHealth/TychusEngineeringBay",
			"TychusSquadDetection/TychusEngineeringBay",
			"TychusUpgradeOdinRedButton/TychusEngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Tychus_AutoTurret": {
		name: "Auto-Turret",
		icon: "btn-building-terran-tychusturret",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/TychusSCVAutoTurret"
		]
	},
	"Tychus_Guns": {
		name: "Gunslingers’ Hideout",
		icon: "btn-building-terran-tychusassaultdepot",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			"TychusACImplosionGrenadesLearn/TychusMercCompound",
			"TychusACRageGrenadesLearn/TychusMercCompound",
			"TychusACPiercingRoundsLearn/TychusMercCompound",
			"TychusACBandofBrothersLearn/TychusMercCompound",
			"TychusReaperBombDamageLearn/TychusMercCompound",
			"TychusReaperBombStunLearn/TychusMercCompound",
			"TychusReaperEvasionLearn/TychusMercCompound",
			"TychusReaperBombChargesLearn/TychusMercCompound",
			"TychusWarhoundHaywireMissilesUpgrade/TychusMercCompound",
			"TychusWarhoundFearUpgrade/TychusMercCompound",
			"TychusWarhoundDeathExplosionUpgrade/TychusMercCompound",
			"TychusWarhoundTurretUpgrade/TychusMercCompound"
		]
	},
	"Tychus_Muscle": {
		name: "Muscle Armory",
		icon: "btn-building-terran-tychustankdepot",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			"TychusFirebatPremiumPetroleumLearn/TychusArmory",
			"TychusFirebatBlueFlameOilLearn/TychusArmory",
			"TychusFirebatIncendiaryPetroleumLearn/TychusArmory",
			"TychusFirebatShieldLearn/TychusArmory",
			"TychusHercGrappleImpacts/TychusArmory",
			"TychusHercGrappleArmor/TychusArmory",
			"TychusHercRageLearn/TychusArmory",
			"TychusHercCrit/TychusArmory",
			"TychusMarauderHealingWardBuffLearn/TychusArmory",
			"TychusMarauderHealingWardSpeedBuffLearn/TychusArmory",
			"TychusMarauderSuperStimLearn/TychusArmory",
			"TychusMarauderAttackSplashLearn/TychusArmory"
		]
	},
	"Tychus_Fixers": {
		name: "Fixers’ Safehouse",
		icon: "btn-building-terran-tychusspecialistdepot",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			"TychusGhostDominateBuffLearn/TychusGhostAcademy",
			"TychusGhostConfusingDominationLearn/TychusGhostAcademy",
			"TychusGhostPsychicSnareLearn/TychusGhostAcademy",
			"TychusGhostConcentrationHelmetLearn/TychusGhostAcademy",
			"TychusSpectreSuperUltrasonicPulseLearn/TychusGhostAcademy",
			"TychusSpectreVisionSuitLearn/TychusGhostAcademy",
			"TychusSpectreExtendedPulseGunLearn/TychusGhostAcademy",
			"TychusSpectreBrillianceAuraLearn/TychusGhostAcademy",
			"TychusMedicHealingSprayUpgrade/TychusGhostAcademy",
			"TychusMedicHealUpgrade/TychusGhostAcademy",
			"TychusMedicDoubleHealLearn/TychusGhostAcademy",
			"TychusMedicDefensiveMatrixLearn/TychusGhostAcademy"
		]
	},
	"Tychus_MedivacPlatform": {
		name: "Medivac Platform",
		icon: "btn-building-terran-tychusmedivacplatform",
		race: TERRAN,
		commander: "Tychus",
		type: BUILDING,
		commands: [
			"TychusMedicTransportUnits/TychusMedivacPlatform",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Mengsk": {
		name: "Mengsk",
		keywords: "Emperor of the Dominion",
		icon: "btn-upgrade-mengsk-veterancy",
		race: TERRAN,
		commander: "Mengsk",
		type: COMMANDER,
		defaultUnit: "Mengsk_Laborer"
	},
	"Mengsk_Laborer": {
		name: "Dominion Laborer",
		keywords: "SCV",
		icon: "btn-unit-terran-scvmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: {
			"Laborer": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/SCVMengsk",
				"TerranBuildAdvanced/SCVMengsk",
				"TrooperMengskEnlist/SCVMengsk",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"CommandCenterMengsk/SCVMengsk",
				"RefineryMengsk/SCVMengsk",
				"BunkerMengsk/SCVMengsk",
				"BarracksMengsk/SCVMengsk",
				"EngineeringBayMengsk/SCVMengsk",
				"ArtilleryMengsk/SCVMengsk",
				"MissileTurretMengsk/SCVMengsk",
				"Cancel"
			],
			"Build Advanced Structure": [
				"GhostAcademyMengsk/SCVMengsk",
				"FactoryMengsk/SCVMengsk",
				"ArmoryMengsk/SCVMengsk",
				"StarportMengsk/SCVMengsk",
				"FusionCoreMengsk/SCVMengsk",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Mengsk_Trooper": {
		name: "Dominion Trooper",
		keywords: "Marine",
		icon: "btn-unit-terran-troopermengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: {
			"Trooper": [
				"SCVMengskEnlist/TrooperMengsk",
				"TrooperMengskBuild/TrooperMengsk",
				"TrooperMengskSpecializeImproved/TrooperMengsk",
				"TrooperMengskSpecializeFlamethrower/TrooperMengsk",
				"TrooperMengskSpecializeAA/TrooperMengsk",
				"Halt"
			],
			"Build Combat Structure": [
				"BunkerMengsk/TrooperMengsk",
				"ArtilleryMengsk/TrooperMengsk",
				"MissileTurretMengsk/TrooperMengsk",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Mengsk_Marauder": {
		name: "Aegis Guard",
		keywords: "Marauder",
		icon: "btn-unit-terran-maraudermengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"MarauderMengskAttackSpeedBoost/MarauderMengsk"
		]
	},
	"Mengsk_Ghost": {
		name: "Emperor’s Shadow",
		keywords: "Ghost",
		icon: "btn-unit-terran-ghostmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"GhostMengskHoldFire/GhostMengsk",
			"WeaponsFreeMengsk/GhostMengsk",
			"GhostMengskIrradiate/GhostMengsk",
			"GhostMengskEMP/GhostMengsk",
			"GhostMengskSuperCloak/GhostMengsk",
			"NukeCalldownMengsk/GhostMengsk",
			"Cancel"
		]
	},
	"Mengsk_SiegeTank": {
		name: "Shock Division",
		keywords: "Siege Tank",
		icon: "btn-unit-terran-siegetankmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"SiegeModeMengsk",
			"UnsiegeMengsk/SiegeTankMengsk"
		]
	},
	"Mengsk_Thor": {
		name: "Blackhammer",
		keywords: "Thor",
		icon: "btn-unit-terran-thormengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"ThorMengskSiege/ThorMengsk",
			"ThorMengskUnsiege/ThorMengsk"
		]
	},
	"Mengsk_Viking": {
		name: "Sky Fury",
		keywords: "Viking",
		icon: "btn-unit-terran-vikingmengskfighter",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"FighterModeMengsk/VikingMengskFighter",
			"AssaultModeMengsk/VikingMengskFighter"
		]
	},
	"Mengsk_Medivac": {
		name: "Imperial Intercessor",
		keywords: "Medivac",
		icon: "btn-unit-terran-medivacmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"HealMengsk/MedivacMengsk",
			"IgniteAfterburnersMengsk/MedivacMengsk",
			"BunkerLoad",
			"BunkerUnloadAll"
		],
		overrides: {
			"BunkerLoad": {
				x: 2
			},
			"BunkerUnloadAll": {
				x: 3
			}
		}
	},
	"Mengsk_Raven": {
		name: "Imperial Witness",
		keywords: "Raven",
		icon: "btn-unit-terran-blimpmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"MorphtoRavenMengskSieged/RavenMengsk",
			"MorphtoRavenMengsk/RavenMengsk"
		]
	},
	"Mengsk_Battlecruiser": {
		name: "Pride of Augustgrad",
		keywords: "Battlecruiser",
		icon: "btn-unit-terran-battlecruisermengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: [
			"YamatoGunMengsk",
			"BattlecruiserMengskHyperjump/BattlecruiserMengsk"
		]
	},
	"Mengsk_CommandCenter": {
		name: "Enlistment Center",
		keywords: "Command Center",
		icon: "btn-building-terran-commandcentermengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: {
			"Enlistment Center": [
				"SCVMengsk",
				"TrooperMengsk/CommandCenterMengsk",
				"SCVMengskEnlistCC/CommandCenterMengsk",
				"TrooperMengskEnlistCC/CommandCenterMengsk",
				"SelectBuilder",
				"SetArtilleryMengskRallyPoint/CommandCenterMengsk",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"Land"
			]
		}
	},
	"Mengsk_Refinery": {
		name: "Refinery",
		icon: "btn-building-terran-refinerymengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Mengsk_SupplyDepot": {
		name: "Supply Bunker",
		keywords: "Supply Depot",
		icon: "btn-building-terran-supplybunkermengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SCVMengskEnlistCC/BunkerDepotMengsk",
			"TrooperMengskEnlistCC/BunkerDepotMengsk",
			"SelectBuilder",
			"SetArtilleryMengskRallyPoint/BunkerDepotMengsk",
			"BunkerDepotMengskLoad",
			"ArtilleryMengskUnloadAll",
			"BunkerMengskSalvage/BunkerDepotMengsk",
			"Cancel"
		]
	},
	"Mengsk_Barracks": {
		name: "Barracks",
		icon: "btn-building-terran-barracksmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: {
			"Barracks": [
				"MarauderMengsk/BarracksMengsk",
				"GhostMengsk/BarracksMengsk",
				"SelectBuilder",
				"Rally",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"Land"
			]
		}
	},
	"Mengsk_EngineeringBay": {
		name: "Engineering Bay",
		icon: "btn-building-terran-engineeringbaymengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			"MengskTrooperWeaponsLevel1/EngineeringBayMengsk",
			"MengskTrooperArmorLevel1/EngineeringBayMengsk",
			"TrooperMengskDropTrainResearch/EngineeringBayMengsk",
			"StructureArmorMengsk/EngineeringBayMengsk",
			"BunkerDepotMengskRangeResearch/EngineeringBayMengsk",
			"ArtilleryMengskRangeResearch/EngineeringBayMengsk",
			"SelectBuilder",
			"Halt",
			"Cancel"
		],
		overrides: {
			"SelectBuilder": {
				y: 0
			}
		}
	},
	"Mengsk_Artillery": {
		name: "Earthsplitter Ordnance",
		keywords: "Artillery",
		icon: "btn-building-terran-artillerymengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			"Stop",
			"SelectBuilder",
			"SetArtilleryMengskRallyPoint/ArtilleryMengsk",
			"ArtilleryMengskBombardment/ArtilleryMengsk",
			"ArtilleryMengskLoad",
			"ArtilleryMengskUnloadAll",
			"Salvage/ArtilleryMengsk",
			"Cancel"
		]
	},
	"Mengsk_MissileTurret": {
		name: "Missile Turret",
		icon: "btn-building-terran-missileturretmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"SelectBuilder",
			"Salvage/MissileTurretMengsk",
			"Halt",
			"Cancel"
		]
	},
	"Mengsk_GhostAcademy": {
		name: "Royal Academy",
		keywords: "Ghost Academy",
		icon: "btn-building-terran-ghostacademymengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			"MarauderMengskSlowResearch/GhostAcademyMengsk",
			"GhostMengskGuidedStrikeRessearch/GhostAcademyMengsk",
			"NukeMengskArm/GhostAcademyMengsk"
		]
	},
	"Mengsk_Factory": {
		name: "Factory",
		icon: "btn-building-terran-factorymengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: {
			"Factory": [
				"SiegeTankMengsk/FactoryMengsk",
				"ThorMengsk/FactoryMengsk",
				"SelectBuilder",
				"Rally",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"Land"
			]
		}
	},
	"Mengsk_Armory": {
		name: "Armory",
		icon: "btn-building-terran-armorymengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			"MedivacMengskSiegeTankAirliftResearch/ArmoryMengsk",
			"ThorMengskArmorAuraResearch/ArmoryMengsk",
			"MechTransformationSpeedMengsk/ArmoryMengsk",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Mengsk_Starport": {
		name: "Starport",
		icon: "btn-building-terran-starportmengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: {
			"Starport": [
				"VikingMengskFighter/StarportMengsk",
				"MedivacMengsk/StarportMengsk",
				"RavenMengsk/StarportMengsk",
				"BattlecruiserMengsk/StarportMengsk",
				"SelectBuilder",
				"Rally",
				"Lift",
				"Cancel"
			],
			"Flying": [
				...data.common.flying,
				"Land"
			]
		}
	},
	"Mengsk_FusionCore": {
		name: "Fusion Core",
		icon: "btn-building-terran-fusioncoremengsk",
		race: TERRAN,
		commander: "Mengsk",
		type: BUILDING,
		commands: [
			"MedivacMengskDoubleHealBeamResearch/FusionCoreMengsk",
			"MedivacMengskPermanentCloakResearch/FusionCoreMengsk",
			"BlimpMengskTopbarRegenResearch/FusionCoreMengsk",
			"VikingMengskSpeedResearch/FusionCoreMengsk",
			"BattlecruiserMengskRangeAuraResearch/FusionCoreMengsk",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Mengsk_Zergling": {
		name: "Enthralled Zergling",
		icon: "btn-unit-zerg-zerglingupgraded-rcz",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: []
	},
	"Mengsk_Hydralisk": {
		name: "Enthralled Hydralisk",
		icon: "btn-unit-zerg-hydralisk-rcz",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: []
	},
	"Mengsk_Mutalisk": {
		name: "Enthralled Mutalisk",
		icon: "btn-unit-zerg-mutalisk-rcz",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: []
	},
	"Mengsk_Ultralisk": {
		name: "Enthralled Ultralisk",
		icon: "btn-unit-zerg-ultralisk-rcz",
		race: TERRAN,
		commander: "Mengsk",
		type: UNIT,
		commands: []
	},
	"Zerg": {
		name: "Zerg",
		icon: "btn-unit-zerg-hydralisk",
		race: ZERG,
		commander: "Zerg",
		type: COMMANDER,
		defaultUnit: "Zerg_Drone"
	},
	"Zerg_Larva": {
		name: "Larva",
		icon: "btn-unit-zerg-larva",
		race: ZERG,
		commander: "Zerg",
		type: OTHER,
		commands: {
			"Larva": [
				"Drone/Larva",
				"Overlord/Larva",
				"Zergling/Larva",
				"Roach/Larva",
				"Hydralisk/Larva",
				"Mutalisk/Larva",
				"Corruptor/Larva",
				"Infestor/Larva",
				"SwarmHostMP/Larva",
				"Viper/Larva",
				"Ultralisk/Larva"
			],
			"Cocoon": [
				"Rally",
				"Cancel"
			]
		}
	},
	"Zerg_Drone": {
		name: "Drone",
		icon: "btn-unit-zerg-drone",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Drone": [
				"GatherProt",
				"ReturnCargo",
				"ZergBuild/Drone",
				"ZergBuildAdvanced/Drone",
				"Spray",
				"BurrowDown",
				"BurrowUp"
			],
			"Build Structure": [
				"Hatchery/Drone",
				"Extractor/Drone",
				"SpawningPool/Drone",
				"EvolutionChamber/Drone",
				"RoachWarren/Drone",
				"BanelingNest/Drone",
				"SpineCrawler/Drone",
				"SporeCrawler/Drone",
				"Cancel"
			],
			"Build Advanced Structure": [
				"HydraliskDen/Drone",
				"InfestationPit/Drone",
				"MutateintoLurkerDen/Drone",
				"Spire/Drone",
				"NydusNetwork/Drone",
				"UltraliskCavern/Drone",
				"Cancel"
			]
		}
	},
	"Zerg_Queen": {
		name: "Queen",
		icon: "btn-unit-zerg-queen",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Queen": [
				"BuildCreepTumor/Queen",
				"MorphMorphalisk/Queen",
				"Transfusion/Queen",
				"BurrowDown",
				"BurrowUp"
			],
			"Creep Tumor": [
				"BuildCreepTumorPropagate/CreepTumorBurrowed",
				"Cancel"
			]
		}
	},
	"Zerg_Overlord": {
		name: "Overlord",
		icon: "btn-unit-zerg-overlord",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Overlord": [
				"MorphToOverseer/Overlord",
				"GenerateCreep/Overlord",
				"MorphtoOverlordTransport/Overlord"
			],
			"Ventral Sacs": [
				...data.common.basic,
				"MorphToOverseer/Overlord",
				"GenerateCreep/Overlord",
				"BunkerLoad",
				"BunkerUnloadAll"
			],
			"Generating Creep": [
				"StopGenerateCreep"
			]
		}
	},
	"Zerg_Overseer": {
		name: "Overseer",
		keywords: "Changeling",
		icon: "btn-unit-zerg-overseer",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Overseer": [
				"MorphtoOverseerSiege/Overseer",
				"MorphtoOverseerNormal/Overseer",
				"SpawnChangeling/Overseer",
				"Contaminate/Overseer"
			],
			"Changeling": [
				...data.common.basic
			]
		}
	},
	"Zerg_Zergling": {
		name: "Zergling",
		icon: "btn-unit-zerg-zergling",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: [
			"Baneling/Zergling",
			"BurrowDown",
			"BurrowUp"
		]
	},
	"Zerg_Baneling": {
		name: "Baneling",
		icon: "btn-unit-zerg-baneling",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Explode/Baneling",
				"EnableBuildingAttack/Baneling",
				"DisableBuildingAttack/Baneling",
				"BurrowDown"
			],
			"Burrowed": [
				"Explode/BanelingBurrowed",
				"BurrowUp"
			]
		}
	},
	"Zerg_Roach": {
		name: "Roach",
		icon: "btn-unit-zerg-roach",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: [
			"Ravager/Roach",
			"BurrowDown",
			"BurrowUp"
		]
	},
	"Zerg_Ravager": {
		name: "Ravager",
		icon: "btn-unit-zerg-ravager",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: [
			"RavagerCorrosiveBile/Ravager",
			"BurrowDown",
			"BurrowUp"
		]
	},
	"Zerg_Hydralisk": {
		name: "Hydralisk",
		icon: "btn-unit-zerg-hydralisk",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: [
			"LurkerMP/Hydralisk",
			"BurrowDown",
			"BurrowUp"
		]
	},
	"Zerg_Lurker": {
		name: "Lurker",
		icon: "btn-unit-zerg-lurker",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowLurkerMP"
			],
			"Burrowed": [
				...data.common.tower,
				"LurkerCancelHoldFire/LurkerMP",
				"LurkerHoldFire/LurkerMP",
				"LurkerBurrowUp"
			]
		}
	},
	"Zerg_Mutalisk": {
		name: "Mutalisk",
		icon: "btn-unit-zerg-mutalisk",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: []
	},
	"Zerg_Corruptor": {
		name: "Corruptor",
		icon: "btn-unit-zerg-corruptor",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: [
			"CausticSpray/Corruptor",
			"BroodLord/Corruptor",
			"Cancel"
		]
	},
	"Zerg_BroodLord": {
		name: "Brood Lord",
		keywords: "Broodling",
		icon: "btn-unit-zerg-broodlord",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Brood Lord": [],
			"Broodling": [
				...data.common.basic
			]
		}
	},
	"Zerg_Infestor": {
		name: "Infestor",
		keywords: "Infested Terran",
		icon: "btn-unit-zerg-infestor",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Cancel",
				"InfestedTerrans/Infestor",
				"FungalGrowth/Infestor",
				"NeuralParasite/Infestor",
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"Cancel",
				"InfestedTerrans/InfestorBurrowed",
				"NeuralParasite/InfestorBurrowed",
				"BurrowUp"
			],
			"Infested Terran": [
				...data.common.basic
			]
		},
		overrides: {
			"Cancel": {
				x: 2,
				y: 1
			}
		}
	},
	"Zerg_SwarmHost": {
		name: "Swarm Host",
		keywords: "Locust",
		icon: "btn-unit-zerg-swarmhost",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"VoidSwarmHostSpawnLocust/SwarmHostMP",
				"SwarmHostBurrowDown"
			],
			"Burrowed": [
				...data.common.tower,
				"VoidSwarmHostSpawnLocust/SwarmHostBurrowedMP",
				"SwarmHostBurrowUp"
			],
			"Locust": [
				...data.common.basic,
				"LocustMPFlyingSwoop/LocustMPFlying"
			]
		}
	},
	"Zerg_Viper": {
		name: "Viper",
		icon: "btn-unit-zerg-viper",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: [
			"ViperConsume/Viper",
			"FaceEmbrace/Viper",
			"BlindingCloud/Viper",
			"ParasiticBomb/Viper"
		]
	},
	"Zerg_Ultralisk": {
		name: "Ultralisk",
		icon: "btn-unit-zerg-ultralisk",
		race: ZERG,
		commander: "Zerg",
		type: UNIT,
		commands: [
			"BurrowDown",
			"BurrowUp"
		]
	},
	"Zerg_Hatchery": {
		name: "Hatchery",
		keywords: "Lair, Hive",
		icon: "btn-building-zerg-hatchery",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: {
			"Hatchery": [
				"Larva",
				"Queen",
				"ResearchBurrow",
				"overlordspeed",
				"RallyEgg",
				"Rally",
				"Lair/Hatchery",
				"Cancel"
			],
			"Lair": [
				"Larva",
				"Queen",
				"ResearchBurrow",
				"overlordspeed",
				"RallyEgg",
				"Rally",
				"Hive/Lair",
				"Cancel"
			],
			"Hive": [
				"Larva",
				"Queen",
				"ResearchBurrow",
				"overlordspeed",
				"RallyEgg",
				"Rally",
				"Cancel"
			]
		}
	},
	"Zerg_Extractor": {
		name: "Extractor",
		icon: "btn-building-zerg-extractor",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Zerg_SpawningPool": {
		name: "Spawning Pool",
		icon: "btn-building-zerg-spawningpool",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"zerglingmovementspeed/SpawningPool",
			"zerglingattackspeed/SpawningPool",
			"Cancel"
		]
	},
	"Zerg_EvolutionChamber": {
		name: "Evolution Chamber",
		icon: "btn-building-zerg-evolutionchamber",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"zergmeleeweapons1/EvolutionChamber",
			"zergmissileweapons1/EvolutionChamber",
			"zerggroundarmor1/EvolutionChamber",
			"Cancel"
		]
	},
	"Zerg_RoachWarren": {
		name: "Roach Warren",
		icon: "btn-building-zerg-roachwarren",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"EvolveGlialRegeneration/RoachWarren",
			"EvolveTunnelingClaws/RoachWarren",
			"Cancel"
		]
	},
	"Zerg_BanelingNest": {
		name: "Baneling Nest",
		icon: "btn-building-zerg-banelingnest",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"EvolveCentrificalHooks/BanelingNest",
			"Cancel"
		]
	},
	"Zerg_SpineCrawler": {
		name: "Spine Crawler",
		icon: "btn-building-zerg-spinecrawler",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			...data.common.basic,
			"SpineCrawlerRoot/SpineCrawlerUprooted",
			"SpineCrawlerUproot/SpineCrawler",
			"Cancel"
		]
	},
	"Zerg_SporeCrawler": {
		name: "Spore Crawler",
		icon: "btn-building-zerg-sporecrawler",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			...data.common.basic,
			"SporeCrawlerUproot/SporeCrawler",
			"SporeCrawlerRoot/SporeCrawlerUprooted",
			"Cancel"
		]
	},
	"Zerg_HydraliskDen": {
		name: "Hydralisk Den",
		icon: "btn-building-zerg-hydraliskden",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"EvolveGroovedSpines/HydraliskDen",
			"EvolveMuscularAugments/HydraliskDen",
			"Cancel"
		]
	},
	"Zerg_InfestationPit": {
		name: "Infestation Pit",
		icon: "btn-building-zerg-infestationpit",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"EvolveInfestorEnergyUpgrade/InfestationPit",
			"ResearchNeuralParasite/InfestationPit",
			"EvolveAmorphousArmorcloud/InfestationPit",
			"Cancel"
		]
	},
	"Zerg_LurkerDen": {
		name: "Lurker Den",
		icon: "btn-building-zerg-lurkerden",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"EvolveDiggingClaws/LurkerDenMP",
			"ResearchLurkerRange/LurkerDenMP",
			"Cancel"
		]
	},
	"Zerg_Spire": {
		name: "Spire",
		keywords: "Greater Spire",
		icon: "btn-building-zerg-spire",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: {
			"Spire": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"GreaterSpire/Spire",
				"Cancel"
			],
			"Greater Spire": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"Cancel"
			]
		}
	},
	"Zerg_NydusNetwork": {
		name: "Nydus Network",
		keywords: "Nydus Worm",
		icon: "btn-building-zerg-nydusnetwork",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: {
			"Nydus Network": [
				"Stop",
				"SummonNydusWorm/NydusNetwork",
				"Rally",
				"BunkerLoad",
				"BunkerUnloadAll",
				"Cancel"
			],
			"Nydus Worm": [
				"Stop",
				"Rally",
				"BunkerLoad",
				"BunkerUnloadAll"
			]
		},
		overrides: {
			"BunkerLoad": {
				x: 0
			},
			"BunkerUnloadAll": {
				x: 1
			}
		}
	},
	"Zerg_UltraliskCavern": {
		name: "Ultralisk Cavern",
		icon: "btn-building-zerg-ultraliskcavern",
		race: ZERG,
		commander: "Zerg",
		type: BUILDING,
		commands: [
			"EvolveChitinousPlating/UltraliskCavern",
			"EvolveAnabolicSynthesis2/UltraliskCavern"
		]
	},
	"HeartOfTheSwarm": {
		name: "HeartOfTheSwarm",
		displayName: "Heart of the Swarm",
		icon: "btn-unit-zerg-kerriganinfested",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		sortCommander: "Zerg",
		type: COMMANDER,
		defaultUnit: "HeartOfTheSwarm_Drone"
	},
	"HeartOfTheSwarm_Kerrigan": {
		name: "Kerrigan",
		keywords: "Queen of Blades",
		icon: "btn-unit-zerg-kerriganinfested",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: HERO,
		commands: {
			"Unburrowed": [
				"MindBolt/K5Kerrigan",
				"PsionicLift/K5Kerrigan",
				"WildMutation/K5Kerrigan",
				"K5Leviathan/K5Kerrigan",
				"BurrowDown"
			],
			"Burrowed": [
				"MindBolt/K5KerriganBurrowed",
				"PsionicLift/K5KerriganBurrowed",
				"WildMutation/K5KerriganBurrowed",
				"K5Leviathan/K5KerriganBurrowed",
				"BurrowUp"
			],
			"Umoja": [
				...data.common.basic,
				"MindBolt/KerriganGhostLab",
				"PsionicLift/KerriganGhostLab"
			]
		}
	},
	"HeartOfTheSwarm_Niadra": {
		name: "Niadra",
		keywords: "Queen, Broodmother",
		icon: "btn-unit-zerg-broodqueen",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: HERO,
		commands: {
			"Larva": [
				"ParasiticInvasion/LarvalQueen",
				"GrowSwarmQueen/LarvalQueen"
			],
			"Stage 1": [
				...data.common.basic,
				"SwarmQueenParasiticInvasion/SwarmQueen",
				"SwarmQueenZergling/SwarmQueen",
				"GrowLargeQueen/SwarmQueen",
				"BurrowDown"
			],
			"Stage 2": [
				...data.common.basic,
				"SwarmQueenParasiticInvasion/LargeSwarmQueen",
				"SwarmQueenZergling/LargeSwarmQueen",
				"SwarmQueenRoach/LargeSwarmQueen",
				"GrowHugeQueen/LargeSwarmQueen",
				"BurrowDown"
			],
			"Stage 3": [
				...data.common.basic,
				"SwarmQueenParasiticInvasion/HugeSwarmQueen",
				"SwarmQueenZergling/HugeSwarmQueen",
				"SwarmQueenRoach/HugeSwarmQueen",
				"SwarmQueenHydralisk/HugeSwarmQueen",
				"BurrowDown"
			]
		}
	},
	"HeartOfTheSwarm_Stukov": {
		name: "Stukov",
		keywords: "Infested Admiral, Infested Terran",
		icon: "btn-unit-zerg-stukov",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: HERO,
		commands: {
			"Stukov": [
				"DevastatingShot/InfestedStukov",
				"StukovInfestedTerrans/InfestedStukov"
			],
			"Infested Terran": [
				...data.common.basic
			]
		}
	},
	"HeartOfTheSwarm_Dehaka": {
		name: "Dehaka",
		keywords: "Primal Pack Leader",
		icon: "btn-unit-zerg-dehaka",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: HERO,
		commands: {
			"Unburrowed": [
				"Drag/Dehaka",
				"DehakaMirrorImage/Dehaka",
				"DehakaHeal/Dehaka",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			],
			"Spawn": [
				...data.common.basic,
				"Drag/DehakaMirrorImage"
			]
		}
	},
	"HeartOfTheSwarm_Hyperion": {
		name: "Hyperion",
		keywords: "Horner, Battlecruiser",
		icon: "btn-unit-terran-hyperion",
		race: TERRAN,
		commander: "HeartOfTheSwarm",
		type: HERO,
		commands: [
			"SJHyperionFightersRecall/SJHyperion",
			"SJHyperionBlink/SJHyperion",
			"SJHyperionFighters/SJHyperion",
			"SJHyperionYamato/SJHyperion",
			"SJHyperionLightningStorm/SJHyperion"
		]
	},
	"HeartOfTheSwarm_Brutalisk": {
		name: "Brutalisk",
		icon: "btn-unit-zerg-brutalisk",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: []
	},
	"HeartOfTheSwarm_Leviathan": {
		name: "Leviathan",
		icon: "btn-unit-zerg-leviathan",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: [
			"HotSBioPlasmidDischarge/HotSLeviathan",
			"HotSBioStasis/HotSLeviathan"
		]
	},
	"HeartOfTheSwarm_Warhound": {
		name: "Warhound",
		icon: "btn-unit-terran-warhound",
		race: TERRAN,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: [
			"TornadoMissile/WarHound"
		]
	},
	"HeartOfTheSwarm_Lyote": {
		name: "Lyote",
		race: NEUTRAL,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: [
			"Consume/Lyote"
		]
	},
	"HeartOfTheSwarm_GiantUrsadon": {
		name: "Giant Ursadon",
		race: NEUTRAL,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: [
			"GiantYetiLeap/GiantYeti",
			"Consume/GiantYeti"
		]
	},
	"HeartOfTheSwarm_Larva": {
		name: "Larva",
		icon: "btn-unit-zerg-larva",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: OTHER,
		commands: {
			"Larva": [
				"Drone/Larva",
				"Overlord/Larva",
				"Zergling/Larva",
				"Aberration/Larva",
				"Roach/Larva",
				"Hydralisk/Larva",
				"Infestor/Larva",
				"Ultralisk/Larva",
				"SwarmHostMP/Larva",
				"Mutalisk/Larva"
			],
			"Cocoon": [
				"Rally",
				"Cancel"
			]
		}
	},
	"HeartOfTheSwarm_Drone": {
		name: "Drone",
		icon: "btn-unit-zerg-drone",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Drone": [
				"GatherProt",
				"ReturnCargo",
				"ZergBuild/Drone",
				"ZergBuildAdvanced/Drone",
				"BurrowDown"
			],
			"Build Structure": [
				"Hatchery/Drone",
				"Extractor/Drone",
				"SpawningPool/Drone",
				"EvolutionChamber/Drone",
				"RoachWarren/Drone",
				"BanelingNest/Drone",
				"SpineCrawler/Drone",
				"SporeCrawler/Drone",
				"Cancel"
			],
			"Build Advanced Structure": [
				"HydraliskDen/Drone",
				"InfestationPit/Drone",
				"Spire/Drone",
				"UltraliskCavern/Drone",
				"Cancel"
			]
		}
	},
	"HeartOfTheSwarm_Queen": {
		name: "Swarm Queen",
		icon: "btn-unit-zerg-queen",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BuildCreepTumor/Queen",
				"QueenBurstHeal/Queen",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			],
			"Creep Tumor": [
				"BuildCreepTumorPropagate/CreepTumorBurrowed",
				"Cancel"
			]
		}
	},
	"HeartOfTheSwarm_Overlord": {
		name: "Overlord",
		icon: "btn-unit-zerg-overlord",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: []
	},
	"HeartOfTheSwarm_Zergling": {
		name: "Zergling",
		icon: "btn-unit-zerg-zergling",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Baneling/Zergling",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_ZerglingSwarmling": {
		name: "Zergling",
		keywords: "Swarmling",
		suffix: "Swarmling Strain",
		icon: "btn-unit-zerg-zergling-swarmling",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Baneling/HotSSwarmling",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_ZerglingRaptor": {
		name: "Zergling",
		keywords: "Raptor",
		suffix: "Raptor Strain",
		icon: "btn-unit-zerg-zergling-raptor",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Baneling/HotSRaptor",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Baneling": {
		name: "Baneling",
		icon: "btn-unit-zerg-baneling",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Explode/Baneling",
				"EnableBuildingAttack/Baneling",
				"DisableBuildingAttack/Baneling",
				"BurrowDown"
			],
			"Burrowed": [
				"Explode/BanelingBurrowed",
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_BanelingSplitter": {
		name: "Baneling",
		keywords: "Splitter",
		suffix: "Splitter Strain",
		icon: "btn-unit-zerg-baneling",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Explode/HotSSplitterlingBig",
				"EnableBuildingAttack/HotSSplitterlingBig",
				"DisableBuildingAttack/HotSSplitterlingBig",
				"BurrowDown"
			],
			"Spawn": [
				...data.common.basic,
				"Explode/HotSSplitterlingBig",
				"EnableBuildingAttack/HotSSplitterlingMedium",
				"DisableBuildingAttack/HotSSplitterlingMedium",
				"BurrowDown"
			],
			"Burrowed": [
				"Explode/HotSSplitterlingBigBurrowed",
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_BanelingHunter": {
		name: "Baneling",
		keywords: "Hunter",
		suffix: "Hunter Strain",
		icon: "btn-unit-zerg-baneling-hunter",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Explode/HotSHunter",
				"EnableBuildingAttack/HotSHunter",
				"DisableBuildingAttack/HotSHunter",
				"BurrowDown"
			],
			"Burrowed": [
				"Explode/HotSHunterBurrowed",
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Aberration": {
		name: "Aberration",
		icon: "btn-unit-zerg-aberration",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Roach": {
		name: "Roach",
		icon: "btn-unit-zerg-roach",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_RoachCorpser": {
		name: "Roach",
		keywords: "Corpser",
		suffix: "Corpser Strain",
		icon: "btn-unit-zerg-roach-corpser",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			],
			"Roachling": [
				...data.common.basic
			]
		}
	},
	"HeartOfTheSwarm_RoachVile": {
		name: "Roach",
		keywords: "Vile",
		suffix: "Vile Strain",
		icon: "btn-unit-zerg-roach-vile",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Hydralisk": {
		name: "Hydralisk",
		icon: "btn-unit-zerg-hydralisk",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"HydraliskFrenzy/Hydralisk",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_HydraliskImpaler": {
		name: "Hydralisk",
		keywords: "Impaler",
		suffix: "Impaler Strain",
		icon: "btn-unit-zerg-hydralisk-impaler",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Impaler/HydraliskImpaler",
				"HydraliskFrenzy/HydraliskImpaler",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_HydraliskLurker": {
		name: "Hydralisk",
		keywords: "Lurker",
		suffix: "Lurker Strain",
		icon: "btn-unit-zerg-hydralisk-lurker",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Lurker/HydraliskLurker",
				"HydraliskFrenzy/HydraliskLurker",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Impaler": {
		name: "Impaler",
		icon: "btn-unit-zerg-impaler",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"ImpalerBurrowDown"
			],
			"Burrowed": [
				...data.common.tower,
				"ImpalerBurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Lurker": {
		name: "Lurker",
		icon: "btn-unit-zerg-lurker",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowLurkerMP"
			],
			"Burrowed": [
				...data.common.tower,
				"LurkerBurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Infestor": {
		name: "Infestor",
		icon: "btn-unit-zerg-infestor",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"FungalGrowth/Infestor",
				"NPSwarm/Infestor",
				"InfestorConsumption/Infestor",
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_SwarmHost": {
		name: "Swarm Host",
		icon: "btn-unit-zerg-swarmhost",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Uprooted": [
				"SwarmHostRoot"
			],
			"Rooted": [
				...data.common.tower,
				"LocustLaunch/SwarmHostRooted",
				"SwarmHostUproot"
			],
			"Unburrowed": [
				...data.common.basic,
				"SwarmHostRootBurrow"
			],
			"Burrowed": [
				...data.common.tower,
				"LocustLaunch/SwarmHostBurrowed",
				"SwarmHostUprootUnburrow"
			]
		}
	},
	"HeartOfTheSwarm_SwarmHostCarrion": {
		name: "Swarm Host",
		suffix: "Carrion Strain",
		icon: "btn-unit-zerg-swarmhost-carrion",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Uprooted": [
				"SwarmHostRoot"
			],
			"Rooted": [
				...data.common.tower,
				"LocustFlyingLaunch/SwarmHostSplitARooted",
				"SwarmHostUproot"
			],
			"Unburrowed": [
				...data.common.basic,
				"SwarmHostRootBurrow"
			],
			"Burrowed": [
				...data.common.tower,
				"LocustFlyingLaunch/SwarmHostSplitABurrowed",
				"SwarmHostUprootUnburrow"
			]
		}
	},
	"HeartOfTheSwarm_SwarmHostCreeper": {
		name: "Swarm Host",
		suffix: "Creeper Strain",
		icon: "btn-unit-zerg-swarmhost-creeper",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Uprooted": [
				"SwarmHostDeepBurrow/SwarmHostSplitB",
				"SwarmHostRoot"
			],
			"Rooted": [
				...data.common.tower,
				"LocustLaunchCreeper/SwarmHostSplitBRooted",
				"SwarmHostDeepBurrow/SwarmHostSplitBRooted",
				"SwarmHostUproot"
			],
			"Unburrowed": [
				...data.common.basic,
				"SwarmHostDeepBurrow/SwarmHostSplitB",
				"SwarmHostRootBurrow"
			],
			"Burrowed": [
				...data.common.tower,
				"SwarmHostDeepBurrow/SwarmHostSplitBBurrowed",
				"LocustLaunchCreeper/SwarmHostSplitBBurrowed",
				"SwarmHostUprootUnburrow"
			]
		}
	},
	"HeartOfTheSwarm_Mutalisk": {
		name: "Mutalisk",
		icon: "btn-unit-zerg-mutalisk",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: []
	},
	"HeartOfTheSwarm_MutaliskBroodLord": {
		name: "Mutalisk",
		keywords: "Brood Lord",
		suffix: "Brood Lord Strain",
		icon: "btn-unit-zerg-mutalisk-broodlord",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: [
			"BroodLord/MutaliskBroodlord"
		]
	},
	"HeartOfTheSwarm_MutaliskViper": {
		name: "Mutalisk",
		keywords: "Viper",
		suffix: "Viper Strain",
		icon: "btn-unit-zerg-mutalisk-viper",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: [
			"Viper/MutaliskViper"
		]
	},
	"HeartOfTheSwarm_BroodLord": {
		name: "Brood Lord",
		keywords: "Broodling",
		icon: "btn-unit-zerg-broodlord",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Brood Lord": [],
			"Broodling": [
				...data.common.basic
			]
		}
	},
	"HeartOfTheSwarm_Viper": {
		name: "Viper",
		icon: "btn-unit-zerg-viper",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: [
			"FaceEmbrace/Viper",
			"DisablingCloud/Viper",
			"ViperConsumption/Viper"
		]
	},
	"HeartOfTheSwarm_Ultralisk": {
		name: "Ultralisk",
		icon: "btn-unit-zerg-ultralisk",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowChargeCampaign/Ultralisk",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_UltraliskNoxious": {
		name: "Ultralisk",
		keywords: "Noxious",
		suffix: "Noxious Strain",
		icon: "btn-unit-zerg-ultralisk-noxious",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"PoisonNova/HotSNoxious",
				"BurrowChargeCampaignNoxious/HotSNoxious",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_UltraliskTorrasque": {
		name: "Ultralisk",
		keywords: "Torrasque",
		suffix: "Torrasque Strain",
		icon: "btn-unit-zerg-ultralisk-torrasque",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowChargeCampaign/HotSTorrasque",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"HeartOfTheSwarm_Hatchery": {
		name: "Hatchery",
		keywords: "Lair, Hive",
		icon: "btn-building-zerg-hatchery",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"Hatchery": [
				"Larva",
				"Queen",
				"RespawnZergling/Hatchery",
				"RallyEgg",
				"Rally",
				"Lair/Hatchery",
				"Cancel"
			],
			"Lair": [
				"Larva",
				"Queen",
				"RespawnZergling/Lair",
				"RallyEgg",
				"Rally",
				"Hive/Lair",
				"Cancel"
			],
			"Hive": [
				"Larva",
				"Queen",
				"RespawnZergling/Hive",
				"RallyEgg",
				"Rally",
				"Cancel"
			]
		}
	},
	"HeartOfTheSwarm_Extractor": {
		name: "Extractor",
		icon: "btn-building-zerg-extractor",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"HeartOfTheSwarm_SpawningPool": {
		name: "Spawning Pool",
		icon: "btn-building-zerg-spawningpool",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"HeartOfTheSwarm_EvolutionChamber": {
		name: "Evolution Chamber",
		icon: "btn-building-zerg-evolutionchamber",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"zergmeleeweapons1/EvolutionChamber",
			"zergmissileweapons1/EvolutionChamber",
			"zerggroundarmor1/EvolutionChamber",
			"Cancel"
		]
	},
	"HeartOfTheSwarm_RoachWarren": {
		name: "Roach Warren",
		icon: "btn-building-zerg-roachwarren",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"HeartOfTheSwarm_BanelingNest": {
		name: "Spawning Pool",
		icon: "btn-building-zerg-banelingnest",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"HeartOfTheSwarm_SpineCrawler": {
		name: "Spine Crawler",
		icon: "btn-building-zerg-spinecrawler",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SpineCrawlerUproot/SpineCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SpineCrawlerRoot/SpineCrawlerUprooted"
			]
		}
	},
	"HeartOfTheSwarm_SporeCrawler": {
		name: "Spore Crawler",
		icon: "btn-building-zerg-sporecrawler",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SporeCrawlerUproot/SporeCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SporeCrawlerRoot/SporeCrawlerUprooted"
			]
		}
	},
	"HeartOfTheSwarm_HydraliskDen": {
		name: "Hydralisk Den",
		keywords: "Lurker Den, Impaler Den",
		icon: "btn-building-zerg-hydraliskden",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"With Lurkers": [
				"LurkerDen/HydraliskDen",
				"Cancel"
			],
			"With Impalers": [
				"ImpalerDen/HydraliskDen",
				"Cancel"
			],
			"Lurker Den / Impaler Den": []
		}
	},
	"HeartOfTheSwarm_InfestationPit": {
		name: "Infestation Pit",
		icon: "btn-building-zerg-infestationpit",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"HeartOfTheSwarm_Spire": {
		name: "Spire",
		keywords: "Greater Spire",
		icon: "btn-building-zerg-spire",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"With Brood Lords": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"GreaterSpireBroodlord/Spire",
				"Cancel"
			],
			"With Vipers": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"GreaterSpireViper/Spire",
				"Cancel"
			],
			"Greater Spire": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"Cancel"
			]
		}
	},
	"HeartOfTheSwarm_UltraliskCavern": {
		name: "Ultralisk Cavern",
		icon: "btn-building-zerg-ultraliskcavern",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"HeartOfTheSwarm_Chrysalis": {
		name: "Kerrigan’s Chrysalis",
		icon: "btn-doodad-chrysalis",
		race: ZERG,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: [
			"PrimalSpawning/Zerus02Chrysalis"
		]
	},
	"HeartOfTheSwarm_Barracks": {
		name: "Barracks",
		icon: "btn-building-terran-barracks",
		race: TERRAN,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"Barracks": [
				"Marine/Barracks",
				"Reaper/Barracks",
				"Marauder/Barracks",
				"Medic/Barracks",
				"Firebat/Barracks",
				"Ghost/Barracks",
				"Spectre/Barracks",
				"SelectBuilder",
				"Rally",
				"TechReactorAI/Barracks",
				"TechLabBarracks/Barracks",
				"Reactor/Barracks",
				"Lift",
				"Cancel"
			],
			"Mercenaries": [
				"Marine/Barracks",
				"Marauder/Barracks",
				"Reaper/Barracks",
				"Firebat/Barracks",
				"Medic/Barracks",
				"HireKelmorianMiners/Barracks",
				"HireHammerSecurities/Barracks",
				"HireDevilDogs/Barracks",
				"MercReaper/Barracks",
				"MercMedic/Barracks",
				"Cancel"
			]
		}
	},
	"HeartOfTheSwarm_Factory": {
		name: "Factory",
		icon: "btn-building-terran-factory",
		race: TERRAN,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"Factory": [
				"Hellion/Factory",
				"SiegeTank/Factory",
				"WarHound/Factory",
				"CampaignVehicles/Factory",
				"SelectBuilder",
				"Rally",
				"TechReactorAI/Factory",
				"TechLabFactory/Factory",
				"Reactor/Factory",
				"Lift",
				"Cancel"
			],
			"Campaign": [
				"Vulture/Factory",
				"Predator/Factory",
				"Diamondback/Factory",
				"Goliath/Factory",
				"MicroBot/Factory",
				"Thor/Factory",
				"Hellion/Factory",
				"Cancel"
			],
			"Mercenaries": [
				"Hellion/Factory",
				"Goliath/Factory",
				"SiegeTank/Factory",
				"Diamondback/Factory",
				"MercHellion/Factory",
				"HireSpartanCompany/Factory",
				"HireSiegeBreakers/Factory",
				"Thor/Factory",
				"Cancel"
			]
		}
	},
	"HeartOfTheSwarm_Starport": {
		name: "Starport",
		icon: "btn-building-terran-starport",
		race: TERRAN,
		commander: "HeartOfTheSwarm",
		type: BUILDING,
		commands: {
			"Starport": [
				"VikingFighter/Starport",
				"Medivac/Starport",
				"Raven/Starport",
				"Banshee/Starport",
				"Battlecruiser/Starport",
				"CampaignVehicles/Starport",
				"SelectBuilder",
				"Rally",
				"TechReactorAI/Starport",
				"TechLabStarport/Starport",
				"Reactor/Starport",
				"Lift",
				"Cancel"
			],
			"Campaign": [
				"Wraith/Starport",
				"BuildHercules/Starport",
				"BuildScienceVessel/Starport",
				"Battlecruiser/Starport",
				"Cancel"
			],
			"Mercenaries": [
				"VikingFighter/Starport",
				"Banshee/Starport",
				"Wraith/Starport",
				"Battlecruiser/Starport",
				"HireDuskWing/Starport",
				"HireHelsAngels/Starport",
				"HireDukesRevenge/Starport",
				"Cancel"
			]
		}
	},
	"Kerrigan": {
		name: "Kerrigan",
		keywords: "Queen of Blades",
		icon: "btn-ability-kerrigan-fury",
		race: ZERG,
		commander: "Kerrigan",
		type: COMMANDER,
		defaultUnit: "Kerrigan_Drone"
	},
	"Kerrigan_Kerrigan": {
		name: "Kerrigan",
		keywords: "Queen of Blades",
		icon: "btn-unit-zerg-kerriganinfested",
		race: ZERG,
		commander: "Kerrigan",
		type: HERO,
		commands: {
			"Unburrowed": [
				"MindBolt/K5Kerrigan",
				"PsionicLift/K5Kerrigan",
				"KerriganVoidCoopEconDrop/K5Kerrigan",
				"KerriganVoidCoopCrushingGripWave/K5Kerrigan",
				"BurrowDown"
			],
			"Burrowed": [
				"MindBolt/K5KerriganBurrowed",
				"PsionicLift/K5KerriganBurrowed",
				"KerriganVoidCoopEconDrop/K5KerriganBurrowed",
				"KerriganVoidCoopCrushingGripWave/K5KerriganBurrowed",
				"BurrowUp"
			],
			"Kerrigan’s Cocoon": [
				"Rally",
				"MindBolt/KerriganReviveCocoon",
				"PsionicLift/KerriganReviveCocoon",
				"KerriganVoidCoopEconDrop/KerriganReviveCocoon",
				"KerriganVoidCoopCrushingGripWave/KerriganReviveCocoon"
			]
		}
	},
	"Kerrigan_Larva": {
		name: "Larva",
		icon: "btn-unit-zerg-larva",
		race: ZERG,
		commander: "Kerrigan",
		type: OTHER,
		commands: {
			"Larva": [
				"Drone/Larva",
				"Overlord/Larva",
				"Zergling/Larva",
				"Hydralisk/Larva",
				"Ultralisk/Larva",
				"Mutalisk/Larva"
			],
			"Cocoon": [
				"Rally",
				"Cancel"
			]
		}
	},
	"Kerrigan_Drone": {
		name: "Drone",
		icon: "btn-unit-zerg-drone",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Drone": [
				"GatherProt",
				"ReturnCargo",
				"ZergBuild/Drone",
				"ZergBuildAdvanced/Drone",
				"Spray",
				"BurrowDown"
			],
			"Build Structure": [
				"Hatchery/Drone",
				"Extractor/Drone",
				"SpawningPool/Drone",
				"EvolutionChamber/Drone",
				"SpineCrawler/Drone",
				"SporeCrawler/Drone",
				"Cancel"
			],
			"Build Advanced Structure": [
				"HydraliskDen/Drone",
				"Spire/Drone",
				"NydusNetwork/Drone",
				"UltraliskCavern/Drone",
				"Cancel"
			]
		}
	},
	"Kerrigan_Queen": {
		name: "Queen",
		icon: "btn-unit-zerg-queen",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BuildCreepTumor/QueenCoop",
				"MorphMorphalisk/QueenCoop",
				"Transfusion/QueenCoop",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			],
			"Creep Tumor": [
				"BuildCreepTumorPropagate/CreepTumorBurrowed",
				"Cancel"
			]
		}
	},
	"Kerrigan_Overlord": {
		name: "Overlord",
		icon: "btn-unit-zerg-overlord",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Overlord": [
				"MorphToOverseer/Overlord",
				"GenerateCreep/Overlord",
				"BunkerLoad",
				"BunkerUnloadAll"
			],
			"Generating Creep": [
				"StopGenerateCreep"
			]
		}
	},
	"Kerrigan_Overseer": {
		name: "Overseer",
		icon: "btn-unit-zerg-overseer",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: [
			"MorphtoOverseerSiege/Overseer",
			"MorphtoOverseerNormal/Overseer"
		]
	},
	"Kerrigan_Zergling": {
		name: "Zergling",
		keywords: "Raptor",
		suffix: "Raptor Strain",
		icon: "btn-unit-zerg-zergling-raptor",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Kerrigan_Hydralisk": {
		name: "Hydralisk",
		keywords: "Lurker",
		suffix: "Lurker Strain",
		icon: "btn-unit-zerg-hydralisk-lurker",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Lurker/HydraliskLurker",
				"HydraliskFrenzy/Hydralisk",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Kerrigan_Lurker": {
		name: "Lurker",
		icon: "btn-unit-zerg-lurker",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowLurkerMP"
			],
			"Burrowed": [
				...data.common.tower,
				"LurkerCancelHoldFire/LurkerBurrowed",
				"LurkerHoldFire/LurkerBurrowed",
				"LurkerBurrowUp"
			]
		}
	},
	"Kerrigan_Mutalisk": {
		name: "Mutalisk",
		keywords: "Brood Lord",
		suffix: "Brood Lord Strain",
		icon: "btn-unit-zerg-mutalisk-broodlord",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: [
			"BroodLord/MutaliskBroodlord"
		]
	},
	"Kerrigan_BroodLord": {
		name: "Brood Lord",
		keywords: "Broodling",
		icon: "btn-unit-zerg-broodlord",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Brood Lord": [],
			"Broodling": [
				...data.common.basic
			]
		}
	},
	"Kerrigan_Ultralisk": {
		name: "Ultralisk",
		keywords: "Torrasque",
		suffix: "Torrasque Strain",
		icon: "btn-unit-zerg-ultralisk-torrasque",
		race: ZERG,
		commander: "Kerrigan",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowChargeCampaign/HotSTorrasque",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Kerrigan_Hatchery": {
		name: "Hatchery",
		keywords: "Lair, Hive",
		icon: "btn-building-zerg-hatchery",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: {
			"Hatchery": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Lair/Hatchery",
				"Cancel"
			],
			"Lair": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Hive/Lair",
				"Cancel"
			],
			"Hive": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Cancel"
			]
		}
	},
	"Kerrigan_Extractor": {
		name: "Extractor",
		icon: "btn-building-zerg-extractor",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Kerrigan_SpawningPool": {
		name: "Spawning Pool",
		icon: "btn-building-zerg-spawningpool",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: [
			"zerglingmovementspeed/SpawningPool",
			"EvolveHardenedCarapace/SpawningPool",
			"zerglingattackspeed/SpawningPool",
			"EvolveZerglingArmorShred/SpawningPool",
			"Cancel"
		]
	},
	"Kerrigan_EvolutionChamber": {
		name: "Evolution Chamber",
		icon: "btn-building-zerg-evolutionchamber",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: [
			"zergmeleeweapons1/EvolutionChamber",
			"zergmissileweapons1/EvolutionChamber",
			"zerggroundarmor1/EvolutionChamber",
			"EvolveKerriganHeroicFortitude/EvolutionChamber",
			"EvolveK5ChainLightning/EvolutionChamber",
			"EvolveK5Cooldowns/EvolutionChamber",
			"Cancel"
		]
	},
	"Kerrigan_SpineCrawler": {
		name: "Spine Crawler",
		icon: "btn-building-zerg-spinecrawler",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SpineCrawlerUproot/SpineCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SpineCrawlerRoot/SpineCrawlerUprooted"
			]
		}
	},
	"Kerrigan_SporeCrawler": {
		name: "Spore Crawler",
		icon: "btn-building-zerg-sporecrawler",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SporeCrawlerUproot/SporeCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SporeCrawlerRoot/SporeCrawlerUprooted"
			]
		}
	},
	"Kerrigan_HydraliskDen": {
		name: "Hydralisk Den",
		keywords: "Lurker Den",
		icon: "btn-building-zerg-hydraliskden",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: {
			"Hydralisk Den": [
				"EvolveMuscularAugments/HydraliskDen",
				"EvolveAncillaryCarapace/HydraliskDen",
				"EvolveFrenzy/HydraliskDen",
				"ResearchLurkerRange/HydraliskDen",
				"LurkerDen/HydraliskDen",
				"Cancel"
			],
			"Lurker Den": [
				"EvolveMuscularAugments/LurkerDen",
				"EvolveAncillaryCarapace/LurkerDen",
				"EvolveFrenzy/LurkerDen",
				"ResearchLurkerRange/LurkerDen",
				"Cancel"
			]
		}
	},
	"Kerrigan_Spire": {
		name: "Spire",
		keywords: "Greater Spire",
		icon: "btn-building-zerg-spire",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: {
			"Spire": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"EvolveMutaliskRapidRegeneration/Spire",
				"EvolveKerriganViciousGlaive/Spire",
				"EvolveSeveringGlave/Spire",
				"EvolveGuardianAttackRangeIncrease/Spire",
				"GreaterSpireBroodlord/Spire",
				"Cancel"
			],
			"Greater Spire": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"EvolveMutaliskRapidRegeneration/GreaterSpire",
				"EvolveKerriganViciousGlaive/GreaterSpire",
				"EvolveSeveringGlave/GreaterSpire",
				"EvolveGuardianAttackRangeIncrease/GreaterSpire",
				"Cancel"
			]
		}
	},
	"Kerrigan_NydusNetwork": {
		name: "Omega Network",
		keywords: "Nydus Network, Nydus Worm, Omega Worm",
		icon: "btn-building-zerg-nydusnetwork",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: {
			"Omega Network": [
				"Stop",
				"ZagaraVoidCoopNydusWorm/NydusNetwork",
				"Rally",
				"BunkerLoad",
				"BunkerUnloadAll",
				"Cancel"
			],
			"Omega Worm": [
				"Stop",
				"Rally",
				"BunkerLoad",
				"BunkerUnloadAll"
			]
		},
		overrides: {
			"BunkerLoad": {
				x: 0
			},
			"BunkerUnloadAll": {
				x: 1
			}
		}
	},
	"Kerrigan_UltraliskCavern": {
		name: "Ultralisk Cavern",
		icon: "btn-building-zerg-ultraliskcavern",
		race: ZERG,
		commander: "Kerrigan",
		type: BUILDING,
		commands: [
			"EvolveChitinousPlating/UltraliskCavern",
			"EvolveBurrowCharge/UltraliskCavern",
			"EvolveTissueAssimilation/UltraliskCavern",
			"Cancel"
		]
	},
	"Zagara": {
		name: "Zagara",
		keywords: "Overqueen",
		icon: "talent-zagara-level07-volatilebanelingnest",
		race: ZERG,
		commander: "Zagara",
		type: COMMANDER,
		defaultUnit: "Zagara_Drone"
	},
	"Zagara_Zagara": {
		name: "Zagara",
		keywords: "Overqueen, Queen, Broodmother",
		icon: "btn-unit-zerg-broodqueen",
		race: ZERG,
		commander: "Zagara",
		type: HERO,
		commands: {
			"Unburrowed": [
				"ZagaraVoidCoopBanelingBarrage/ZagaraVoidCoop",
				"ZagaraVoidCoopSpawnHunterKillers/ZagaraVoidCoop",
				"ZagaraVoidCoopMassFrenzy/ZagaraVoidCoop",
				"MassRoachDrop/ZagaraVoidCoop",
				"BurrowDown"
			],
			"Burrowed": [
				"ZagaraVoidCoopBanelingBarrage/ZagaraVoidCoopBurrowed",
				"ZagaraVoidCoopSpawnHunterKillers/ZagaraVoidCoopBurrowed",
				"ZagaraVoidCoopMassFrenzy/ZagaraVoidCoopBurrowed",
				"MassRoachDrop/ZagaraVoidCoopBurrowed",
				"BurrowUp"
			],
			"Zagara’s Cocoon": [
				"Rally",
				"ZagaraVoidCoopBanelingBarrage/ZagaraReviveCocoon",
				"ZagaraVoidCoopSpawnHunterKillers/ZagaraReviveCocoon",
				"ZagaraVoidCoopMassFrenzy/ZagaraReviveCocoon",
				"MassRoachDrop/ZagaraReviveCocoon"
			]
		}
	},
	"Zagara_Larva": {
		name: "Larva",
		icon: "btn-unit-zerg-larva",
		race: ZERG,
		commander: "Zagara",
		type: OTHER,
		commands: {
			"Larva": [
				"Drone/Larva",
				"Overlord/Larva",
				"Zergling/Larva",
				"Aberration/Larva",
				"Roach/Larva",
				"SwarmHostMP/Larva"
			],
			"Cocoon": [
				"Rally",
				"Cancel"
			]
		}
	},
	"Zagara_Drone": {
		name: "Drone",
		icon: "btn-unit-collection-webby-drone",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Drone": [
				"GatherProt",
				"ReturnCargo",
				"ZergBuild/Drone",
				"ZergBuildAdvanced/Drone",
				"Spray",
				"BurrowDown"
			],
			"Build Structure": [
				"Hatchery/Drone",
				"Extractor/Drone",
				"SpawningPool/Drone",
				"EvolutionChamber/Drone",
				"BanelingNest/Drone",
				"SpineCrawler/Drone",
				"SporeCrawler/Drone",
				"ZagaraBileLauncher/Drone",
				"Cancel"
			],
			"Build Advanced Structure": [
				"ScourgeNest/Drone",
				"Cancel"
			]
		}
	},
	"Zagara_Queen": {
		name: "Queen",
		icon: "btn-unit-collection-webby-queen",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BuildCreepTumor/QueenCoop",
				"MorphMorphalisk/QueenCoop",
				"Transfusion/QueenCoop",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			],
			"Creep Tumor": [
				"BuildCreepTumorPropagate/CreepTumorBurrowed",
				"Cancel"
			]
		}
	},
	"Zagara_Overlord": {
		name: "Overlord",
		icon: "btn-unit-collection-webby-overlord",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Overlord": [
				"MorphToOverseer/Overlord",
				"GenerateCreep/Overlord",
				"BunkerLoad",
				"BunkerUnloadAll"
			],
			"Generating Creep": [
				"StopGenerateCreep"
			]
		}
	},
	"Zagara_Overseer": {
		name: "Overseer",
		icon: "btn-unit-collection-webby-overseer",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: [
			"MorphtoOverseerSiege/Overseer",
			"MorphtoOverseerNormal/Overseer"
		]
	},
	"Zagara_Zergling": {
		name: "Zergling",
		keywords: "Swarmling",
		suffix: "Swarmling Strain",
		icon: "btn-unit-collection-webby-zergling",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Baneling/Zergling",
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"Zagara_Baneling": {
		name: "Baneling",
		keywords: "Splitter",
		suffix: "Splitter Strain",
		icon: "btn-unit-collection-webby-baneling",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Explode/HotSSplitterlingBig",
				"EnableBuildingAttack/HotSSplitterlingBig",
				"DisableBuildingAttack/HotSSplitterlingBig",
				"BurrowDown"
			],
			"Spawn": [
				...data.common.basic,
				"Explode/HotSSplitterlingBig",
				"EnableBuildingAttack/HotSSplitterlingMedium",
				"DisableBuildingAttack/HotSSplitterlingMedium",
				"BurrowDown"
			],
			"Burrowed": [
				"Explode/HotSSplitterlingBigBurrowed",
				"BurrowUp"
			]
		}
	},
	"Zagara_Aberration": {
		name: "Aberration",
		icon: "btn-unit-zerg-aberration",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Zagara_Scourge": {
		name: "Scourge",
		icon: "btn-unit-zerg-scourge",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: [
			"DetonateScourge/Scourge",
			"EnableBuildingAttackScourge/Scourge",
			"DisableBuildingAttackScourge/Scourge"
		]
	},
	"Zagara_Corruptor": {
		name: "Corruptor",
		icon: "btn-unit-collection-webby-corruptor",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: [
			"CorruptionAbility/ZagaraCorruptor",
			"Cancel"
		]
	},
	"Zagara_HunterKiller": {
		name: "Hunter Killer",
		keywords: "Hydralisk",
		icon: "btn-unit-collection-webby-hydra",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Zagara_Roach": {
		name: "Roach",
		icon: "btn-unit-collection-webby-roach",
		race: ZERG,
		commander: "Zagara",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"Zagara_Hatchery": {
		name: "Hatchery",
		keywords: "Lair, Hive",
		icon: "btn-building-zerg-hatchery",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: {
			"Hatchery": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Lair/Hatchery",
				"Cancel"
			],
			"Lair": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Hive/Lair",
				"Cancel"
			],
			"Hive": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Cancel"
			]
		}
	},
	"Zagara_Extractor": {
		name: "Extractor",
		icon: "btn-building-zerg-extractor",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Zagara_SpawningPool": {
		name: "Spawning Pool",
		icon: "btn-building-zerg-spawningpool",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: [
			"zerglingmovementspeed/SpawningPool",
			"EvolveHardenedCarapace/SpawningPool",
			"zerglingattackspeed/SpawningPool",
			"EvolveZerglingArmorShred/SpawningPool",
			"EvolveBileLauncherIncreasedRange/SpawningPool",
			"EvolveBileLauncherBombardmentCooldown/SpawningPool",
			"Cancel"
		]
	},
	"Zagara_EvolutionChamber": {
		name: "Evolution Chamber",
		icon: "btn-building-zerg-evolutionchamber",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: [
			"zergmeleeweapons1/EvolutionChamber",
			"zergmissileweapons1/EvolutionChamber",
			"zerggroundarmor1/EvolutionChamber",
			"EvolveKerriganHeroicFortitude/EvolutionChamber",
			"EvolveK5ChainLightning/EvolutionChamber",
			"EvolveK5Cooldowns/EvolutionChamber",
			"Cancel"
		]
	},
	"Zagara_BanelingNest": {
		name: "Baneling Nest",
		icon: "btn-building-zerg-banelingnest",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: [
			"EvolveCentrificalHooks/BanelingNest",
			"EvolveBanelingCorrosiveBile/BanelingNest",
			"EvolveBanelingRupture/BanelingNest",
			"EvolveBanelingHeal/BanelingNest",
			"ZagaraVoidCoopBanelingSpawner/BanelingNest",
			"Cancel"
		]
	},
	"Zagara_SpineCrawler": {
		name: "Spine Crawler",
		icon: "btn-building-zerg-spinecrawler",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SpineCrawlerUproot/SpineCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SpineCrawlerRoot/SpineCrawlerUprooted"
			]
		}
	},
	"Zagara_SporeCrawler": {
		name: "Spore Crawler",
		icon: "btn-building-zerg-sporecrawler",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SporeCrawlerUproot/SporeCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SporeCrawlerRoot/SporeCrawlerUprooted"
			]
		}
	},
	"Zagara_BileLauncher": {
		name: "Bile Launcher",
		icon: "btn-building-zerg-sporecannon",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: [
			"Stop",
			"BileLauncherBombardment/BileLauncherZagara",
			"Cancel"
		]
	},
	"Zagara_ScourgeNest": {
		name: "Scourge Nest",
		keywords: "Spire",
		icon: "btn-doodad-scourgenests",
		race: ZERG,
		commander: "Zagara",
		type: BUILDING,
		commands: [
			"zergflyerattack1",
			"zergflyerarmor1",
			"EvolveScourgeSplashDamage/ScourgeNest",
			"EvolveScourgeGasCostReduction/ScourgeNest",
			"Cancel"
		]
	},
	"Abathur": {
		name: "Abathur",
		keywords: "Evolution Master",
		icon: "btn-upgrade-zerg-abathur-biomass",
		race: ZERG,
		commander: "Abathur",
		type: COMMANDER,
		defaultUnit: "Abathur_Drone"
	},
	"Abathur_Larva": {
		name: "Larva",
		icon: "btn-unit-zerg-larva",
		race: ZERG,
		commander: "Abathur",
		type: OTHER,
		commands: {
			"Larva": [
				"Drone/Larva",
				"Overlord/Larva",
				"Roach/Larva",
				"Hydralisk/Larva",
				"Mutalisk/Larva",
				"Viper/Larva"
			],
			"Cocoon": [
				"Rally",
				"Cancel"
			]
		}
	},
	"Abathur_Drone": {
		name: "Drone",
		icon: "btn-unit-zerg-drone",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: {
			"Drone": [
				"GatherProt",
				"ReturnCargo",
				"ZergBuild/Drone",
				"ZergBuildAdvanced/Drone",
				"Spray",
				"BurrowDown"
			],
			"Build Structure": [
				"Hatchery/Drone",
				"Extractor/Drone",
				"EvolutionChamber/Drone",
				"RoachWarren/Drone",
				"SpineCrawler/Drone",
				"SporeCrawler/Drone",
				"Cancel"
			],
			"Build Advanced Structure": [
				"InfestationPit/Drone",
				"Spire/Drone",
				"NydusNetwork/Drone",
				"Cancel"
			]
		}
	},
	"Abathur_Queen": {
		name: "Swarm Queen",
		icon: "btn-unit-zerg-broodqueen",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BuildCreepTumor/Queen",
				"Transfusion/Queen",
				"EvolveToBrutalisk/Queen",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			],
			"Creep Tumor": [
				"BuildCreepTumorPropagate/CreepTumorBurrowed",
				"Cancel"
			]
		}
	},
	"Abathur_Overlord": {
		name: "Overlord",
		icon: "btn-unit-zerg-overlord",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: {
			"Overlord": [
				"MorphToOverseer/Overlord",
				"GenerateCreep/Overlord",
				"BunkerLoad",
				"BunkerUnloadAll"
			],
			"Generating Creep": [
				"StopGenerateCreep"
			]
		}
	},
	"Abathur_Overseer": {
		name: "Overseer",
		icon: "btn-unit-zerg-overseer",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: [
			"MorphtoOverseerSiege/Overseer",
			"MorphtoOverseerNormal/Overseer"
		]
	},
	"Abathur_Roach": {
		name: "Roach",
		suffix: "Vile Strain",
		icon: "btn-unit-zerg-roach-vile",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"Ravager/Roach",
				"EvolveToBrutalisk/Roach",
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"EvolveToBrutalisk/RoachBurrowed",
				"BurrowUp"
			]
		}
	},
	"Abathur_Ravager": {
		name: "Ravager",
		icon: "btn-unit-zerg-ravager",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"RavagerAbathurCorrosiveBile/RavagerAbathur",
				"EvolveToBrutalisk/RavagerAbathur",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Abathur_SwarmHost": {
		name: "Swarm Host",
		keywords: "Locust",
		icon: "btn-unit-zerg-swarmhost",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"LocustLaunch/SwarmHost",
				"AbathurDeepTunnel/SwarmHost",
				"EvolveToBrutalisk/SwarmHost",
				"SwarmHostRootBurrow"
			],
			"Burrowed": [
				...data.common.tower,
				"LocustLaunch/SwarmHostBurrowed",
				"AbathurDeepTunnel/SwarmHostBurrowed",
				"EvolveToBrutalisk/SwarmHost",
				"SwarmHostUprootUnburrow"
			],
			"Locust": [
				...data.common.basic
			]
		}
	},
	"Abathur_Mutalisk": {
		name: "Mutalisk",
		icon: "btn-unit-zerg-mutalisk",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: [
			"MorphToGuardian/Mutalisk",
			"MorphtoDevourer/Mutalisk",
			"EvolveToLeviathan/Mutalisk"
		]
	},
	"Abathur_Guardian": {
		name: "Guardian",
		icon: "btn-unit-zerg-primalguardian",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: [
			"EvolveToLeviathan/GuardianMP"
		]
	},
	"Abathur_Devourer": {
		name: "Devourer",
		icon: "btn-unit-zerg-devourerex3",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: [
			"CorrosiveAcidDevourer/Devourer",
			"EvolveToLeviathan/Devourer"
		]
	},
	"Abathur_Viper": {
		name: "Viper",
		icon: "btn-unit-zerg-viper",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: [
			"FaceEmbrace/Viper",
			"DisablingCloud/Viper",
			"ViperConsumption/Viper",
			"ParasiticBomb/Viper",
			"EvolveToLeviathan/Viper"
		]
	},
	"Abathur_Brutalisk": {
		name: "Brutalisk",
		icon: "btn-unit-zerg-brutalisk",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BrutaliskDeepTunnel/Brutalisk",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Abathur_Leviathan": {
		name: "Leviathan",
		icon: "btn-unit-zerg-leviathan",
		race: ZERG,
		commander: "Abathur",
		type: UNIT,
		commands: []
	},
	"Abathur_Hatchery": {
		name: "Hatchery",
		keywords: "Lair, Hive",
		icon: "btn-building-zerg-hatchery",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: {
			"Hatchery": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Lair/Hatchery",
				"Cancel"
			],
			"Lair": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Hive/Lair",
				"Cancel"
			],
			"Hive": [
				"Larva",
				"Queen",
				"overlordspeed",
				"EvolveVentralSacks",
				"RallyEgg",
				"Rally",
				"Cancel"
			]
		}
	},
	"Abathur_Extractor": {
		name: "Extractor",
		icon: "btn-building-zerg-extractor",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Abathur_RoachWarren": {
		name: "Roach Warren",
		icon: "btn-building-zerg-roachwarren",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: [
			"EvolveGlialRegeneration/RoachWarren",
			"EvolveTunnelingClaws/RoachWarren",
			"EvolveHydriodicBile/RoachWarren",
			"EvolveAdaptivePlating/RoachWarren",
			"EvolveCorrosiveBileRadiusIncrease/RoachWarren",
			"EvolveCorrosiveBileDamageIncrease/RoachWarren",
			"Cancel"
		]
	},
	"Abathur_EvolutionChamber": {
		name: "Evolution Chamber",
		icon: "btn-building-zerg-evolutionchamber",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: [
			"zergmissileweapons1/EvolutionChamber",
			"zerggroundarmor1/EvolutionChamber",
			"Transfusion/EvolutionChamber",
			"EvolveHatcheryDoubleQueue/EvolutionChamber",
			"Cancel"
		]
	},
	"Abathur_SpineCrawler": {
		name: "Spine Crawler",
		icon: "btn-building-zerg-spinecrawler",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SpineCrawlerUproot/SpineCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SpineCrawlerRoot/SpineCrawlerUprooted"
			]
		}
	},
	"Abathur_SporeCrawler": {
		name: "Spore Crawler",
		icon: "btn-building-zerg-sporecrawler",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SporeCrawlerUproot/SporeCrawler",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SporeCrawlerRoot/SporeCrawlerUprooted"
			]
		}
	},
	"Abathur_InfestationPit": {
		name: "Infestation Pit",
		icon: "btn-building-zerg-infestationpit",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: [
			"HotSPressurizedGlands/InfestationPit",
			"EvolveViperImprovedCastRange/InfestationPit",
			"EvolveInfestorEnergyUpgrade/InfestationPit",
			"ResearchNeuralParasite/InfestationPit",
			"Cancel"
		]
	},
	"Abathur_Spire": {
		name: "Spire",
		keywords: "Greater Spire",
		icon: "btn-building-zerg-spire",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: {
			"Spire": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"EvolveMutaliskRapidRegeneration/Spire",
				"EvolveViciousGlaive/Spire",
				"EvolveSunderingGlave/Spire",
				"EvolveGuardianAttackRangeIncrease/Spire",
				"EvolveDevourerAoEDamage/Spire",
				"GreaterSpireBroodlord/Spire",
				"Cancel"
			],
			"Greater Spire": [
				"zergflyerattack1",
				"zergflyerarmor1",
				"EvolveMutaliskRapidRegeneration/GreaterSpire",
				"EvolveViciousGlaive/GreaterSpire",
				"EvolveSunderingGlave/GreaterSpire",
				"EvolveGuardianAttackRangeIncrease/GreaterSpire",
				"EvolveDevourerAoEDamage/GreaterSpire",
				"Cancel"
			]
		}
	},
	"Abathur_NydusNetwork": {
		name: "Nydus Network",
		keywords: "Nydus Worm",
		icon: "btn-building-zerg-nydusnetwork",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: {
			"Omega Network": [
				"Stop",
				"ZagaraVoidCoopNydusWorm/NydusNetwork",
				"Rally",
				"BunkerLoad",
				"BunkerUnloadAll",
				"Cancel"
			],
			"Omega Worm": [
				"Stop",
				"Rally",
				"BunkerLoad",
				"BunkerUnloadAll"
			]
		},
		overrides: {
			"BunkerLoad": {
				x: 0
			},
			"BunkerUnloadAll": {
				x: 1
			}
		}
	},
	"Abathur_ToxicNest": {
		name: "Toxic Nest",
		icon: "btn-unit-zerg-toxicnest",
		race: ZERG,
		commander: "Abathur",
		type: BUILDING,
		commands: [
			"ToxicNestExplode/ToxicNest",
			"Cancel"
		]
	},
	"Stukov": {
		name: "Stukov",
		keywords: "Infested Admiral",
		icon: "btn-upgrade-zerg-stukov-unlockresearchbundle_infestedcivilianmarines_07",
		race: ZERG,
		commander: "Stukov",
		type: COMMANDER,
		defaultUnit: "Stukov_SCV"
	},
	"Stukov_SCV": {
		name: "Infested SCV",
		icon: "btn-unit-zerg-infestedscv",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: {
			"SCV": [
				"GatherProt",
				"ReturnCargo",
				"TerranBuild/SISCV",
				"TerranBuildAdvanced/SISCV",
				"Repair",
				"Spray",
				"Halt"
			],
			"Build Structure": [
				"SICommandCenter/SISCV",
				"SIRefinery/SISCV",
				"SICivilianStructure/SISCV",
				"SIBarracks/SISCV",
				"SIEngineeringBay/SISCV",
				"SIInfestedBunker/SISCV",
				"SIMissileTurret/SISCV",
				"Cancel"
			],
			"Build Advanced Structure": [
				"SIFactory/SISCV",
				"SIArmory/SISCV",
				"SIStarport/SISCV",
				"Cancel"
			]
		},
		overrides: {
			"Halt": {
				x: 4
			}
		}
	},
	"Stukov_Civilian": {
		name: "Infested Civilian",
		icon: "btn-unit-zerg-infestedcolonist",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stukov_Overlord": {
		name: "Overlord",
		icon: "btn-unit-zerg-overlord",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: {
			"Overlord": [
				"MorphToOverseer/SIOverlord",
				"GenerateCreep/SIOverlord"
			],
			"Generating Creep": [
				"StopGenerateCreep"
			]
		}
	},
	"Stukov_Overseer": {
		name: "Overseer",
		icon: "btn-unit-zerg-overseer",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: [
			"MorphtoOverseerSiege/Overseer",
			"MorphtoOverseerNormal/Overseer"
		]
	},
	"Stukov_Volatile": {
		name: "Volatile Infested",
		icon: "btn-unit-zerg-volatileinfested",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"ExplodeVolatileInfested/SIVolatileInfested",
				"EnableBuildingAttackVolatileInfested/SIVolatileInfested",
				"DisableBuildingAttackVolatileInfested/SIVolatileInfested",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stukov_Marine": {
		name: "Infested Marine",
		keywords: "Infested Trooper",
		icon: "btn-unit-zerg-infestedmarine",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stukov_Diamondback": {
		name: "Infested Diamondback",
		icon: "btn-unit-zerg-infesteddiamondback",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: [
			"StukovInfestedDiamondbackSnare/StukovInfestedDiamondBack"
		]
	},
	"Stukov_SiegeTank": {
		name: "Infested Siege Tank",
		icon: "btn-unit-zerg-infestedsiegetank",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: [
			"StukovInfestedSiegeTankRoot/StukovInfestedSiegeTank",
			"StukovInfestedSiegeTankUproot/StukovInfestedSiegeTank",
			"StukovInfestedSiegeTankDeepTunnel/StukovInfestedSiegeTank"
		]
	},
	"Stukov_Liberator": {
		name: "Infested Liberator",
		icon: "btn-unit-zerg-infestedliberator",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: []
	},
	"Stukov_Banshee": {
		name: "Infested Banshee",
		icon: "btn-unit-zerg-infestedbanshee",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"CloakOnBanshee",
				"CloakOff",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stukov_Queen": {
		name: "Brood Queen",
		keywords: "Classic Queen",
		icon: "btn-unit-zerg-classicqueen",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: [
			"QueenClassicParasite/SIQueen",
			"QueenMPSpawnBroodlings/SIQueen",
			"SIQueenFungalGrowth/SIQueen"
		]
	},
	"Stukov_Apocalisk": {
		name: "Apocalisk",
		keywords: "Ultralisk",
		icon: "btn-upgrade-zerg-stukov-apocolisk_04",
		race: ZERG,
		commander: "Stukov",
		type: UNIT,
		commands: [
			"SIClusterRockets/StukovApocalisk",
			"ApocaliskBurrowCharge/StukovApocalisk"
		]
	},
	"Stukov_Aleksander": {
		name: "Aleksander",
		keywords: "Stukov, Battlecruiser",
		icon: "btn-ability-zerg-stukov-summonaleksander",
		race: ZERG,
		commander: "Stukov",
		type: HERO,
		commands: []
	},
	"Stukov_CommandCenter": {
		name: "Infested Command Center",
		icon: "btn-building-stukov-infestedcommandcenter",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: {
			"Command Center": [
				"SISCV",
				"SIOverlord/SICommandCenter",
				"ResearchHeavyInfestation/SICommandCenter",
				"overlordspeed",
				"SelectBuilder",
				"Rally",
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"SIUproot/SICommandCenter",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"CommandCenterLoad",
				"CommandCenterUnloadAll",
				"SIRoot/SICommandCenterFlying"
			]
		}
	},
	"Stukov_Refinery": {
		name: "Infested Refinery",
		icon: "btn-building-stukov-infestedrefinery",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: [
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Stukov_ColonistCompound": {
		name: "Infested Colonist Compound",
		icon: "btn-building-stukov-infestedcolonisthut",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: {
			"Rooted": [
				"ResearchSIBarracksTrainInfestedCivilianLevel2/SICivilianStructure",
				"EvolveStukovInfestedInfestedCivilianLeap/SICivilianStructure",
				"EvolveStukovInfestedCivilianSpawnBroodlingsOnDeath/SICivilianStructure",
				"SelectBuilder",
				"SIInfestedCivilian/SICivilianStructure",
				"SIStukovPlaceHordeRally/SICivilianStructure",
				"SIUproot/SICivilianStructure",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SIInfestedCivilian/SICivilianStructureFlying",
				"SIRoot/SICivilianStructureFlying"
			]
		}
	},
	"Stukov_Barracks": {
		name: "Infested Barracks",
		icon: "btn-building-stukov-infestedbarracks",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: {
			"Rooted": [
				"SIInfestedMarine/SIBarracks",
				"SelectBuilder",
				"SIStukovPlaceHordeRally/SIBarracks",
				"SITechLabBarracks/SIBarracks",
				"SIUproot/SIBarracks",
				"Cancel"
			],
			"Tech Lab": [
				"EvolveSIMarineTrooperImprovedRange/SIBarracksTechLab",
				"EvolvePlaguedMunitions/SIBarracksTechLab",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SITechLabBarracks/SIBarracks",
				"SIRoot/SIBarracksFlying"
			]
		}
	},
	"Stukov_EngineeringBay": {
		name: "Infested Engineering Bay",
		icon: "btn-building-stukov-infestedengineeringbay",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: [
			"TerranInfantryWeaponsLevel1/SIEngineeringBay",
			"TerranInfantryArmorLevel1/SIEngineeringBay",
			"ResearchInfestedBunkerLifeRegen/SIEngineeringBay",
			"ResearchInfestedBunkerArmor/SIEngineeringBay",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Stukov_Bunker": {
		name: "Infested Bunker",
		icon: "btn-building-stukov-infestedbunkerform",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SIInfestedBunkerSpawnInfestedMarine/SIInfestedBunker",
				"SelectBuilder",
				"SIStukovPlaceHordeRally/SIInfestedBunker",
				"BunkerLoad",
				"BunkerUnloadAll",
				"SIInfestedBunkerUproot/SIInfestedBunker",
				"Halt",
				"Cancel"
			],
			"Uprooted": [
				...data.common.basic,
				"BunkerLoad",
				"BunkerUnloadAll",
				"SIInfestedBunkerRoot/SIInfestedBunkerUprooted",
				"Cancel"
			]
		}
	},
	"Stukov_MissileTurret": {
		name: "Infested Missile Turret",
		icon: "btn-building-stukov-infestedturret",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SelectBuilder",
				"Salvage/SIMissileTurret",
				"SIUproot/SIMissileTurret",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"Salvage/SIMissileTurret",
				"SIRoot/SIMissileTurretFlying"
			]
		}
	},
	"Stukov_Factory": {
		name: "Infested Factory",
		icon: "btn-building-stukov-infestedfactory",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: {
			"Factory": [
				"SIDiamondBack/SIFactory",
				"SISiegeTank/SIFactory",
				"SelectBuilder",
				"Rally",
				"SITechLabFactory/SIFactory",
				"SIUproot/SIFactory",
				"Cancel"
			],
			"Tech Lab": [
				"EvolveSIDiamondbackImprovedEnsnare/SIFactoryTechLab",
				"EvolveSIDiamondbackSnailTrail/SIFactoryTechLab",
				"ResearchAutoCreateInfestedCivilianAmmo/SIFactoryTechLab",
				"ResearchInfestedSiegeTankArmoredDamage/SIFactoryTechLab",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SITechLabFactory/SIFactory",
				"SIRoot/SIFactoryFlying"
			]
		}
	},
	"Stukov_Armory": {
		name: "Infested Armory",
		icon: "btn-building-stukov-infestedarmory",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: [
			"TerranVehicleAndShipWeaponsLevel1/SIArmory",
			"TerranVehicleAndShipPlatingLevel1/SIArmory",
			"SelectBuilder",
			"Halt",
			"Cancel"
		]
	},
	"Stukov_Starport": {
		name: "Infested Starport",
		icon: "btn-building-stukov-infestedstarport",
		race: ZERG,
		commander: "Stukov",
		type: BUILDING,
		commands: {
			"Rooted": [
				"SILiberator/SIStarport",
				"SIBanshee/SIStarport",
				"SIQueen",
				"SelectBuilder",
				"Rally",
				"SITechLabStarport/SIStarport",
				"SIUproot/SIStarport",
				"Cancel"
			],
			"Tech Lab": [
				"ResearchSILiberatorImprovedAoeAttack/SIStarportTechLab",
				"ResearchSILiberatorBecometheSwarm/SIStarportTechLab",
				"ResearchStukovInfestedBansheeBurrowRegeneration/SIStarportTechLab",
				"ResearchStukovInfestedBansheeInfestedLife/SIStarportTechLab",
				"ResearchSIQueenFungalGrowth/SIStarportTechLab",
				"ResearchSIQueenEnergy/SIStarportTechLab",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SITechLabStarport/SIStarport",
				"SIRoot/SIStarportFlying"
			]
		}
	},
	"Dehaka": {
		name: "Dehaka",
		keywords: "Primal Pack Leader",
		icon: "btn-progression-zerg-dehaka-1-dehakaunlock",
		race: ZERG,
		commander: "Dehaka",
		type: COMMANDER,
		defaultUnit: "Dehaka_Drone"
	},
	"Dehaka_Dehaka": {
		name: "Dehaka",
		keywords: "Primal Pack Leader, Godzilla",
		icon: "btn-unit-dehaka-mammothdehaka",
		race: ZERG,
		commander: "Dehaka",
		type: HERO,
		commands: {
			"Dehaka": [
				"DehakaLeapStomp/DehakaCoop",
				"DehakaIntimidatingRoar/DehakaCoop",
				"DehakaConsume/DehakaCoop",
				"MammothBreath/DehakaCoop",
				"DehakaDeepTunnel/DehakaCoop",
				"DehakaLearnAbilities/DehakaCoop"
			],
			"Learn": [
				"LearnDehakaMendingAura/DehakaCoop",
				"LearnDehakaDetector/DehakaCoop",
				"LearnDehakaArmorUpgrade/DehakaCoop",
				"DehakaAirAttackUpgrade/DehakaCoop",
				"LearnDehakaLeapStomp/DehakaCoop",
				"LearnDehakaIntimidatingRoar/DehakaCoop",
				"LearnDehakaConsume/DehakaCoop",
				"LearnDehakaMammothBreath/DehakaCoop",
				"Cancel"
			]
		}
	},
	"Dehaka_Drone": {
		name: "Primal Drone",
		icon: "btn-unit-collection-primal-drone",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Drone": [
				"GatherProt",
				"ReturnCargo",
				"DehakaBuild/DehakaDrone",
				"Spray",
				"BurrowDown"
			],
			"Build Structure": [
				"DehakaHatchery/DehakaDrone",
				"DehakaBarracks/DehakaDrone",
				"DehakaGlevigStructure/DehakaDrone",
				"DehakaMurvarStructure/DehakaDrone",
				"DehakaDakrunStructure/DehakaDrone",
				"DehakaNydusDestroyer/DehakaDrone",
				"Cancel"
			]
		}
	},
	"Dehaka_Zergling": {
		name: "Primal Zergling",
		icon: "btn-unit-collection-primal-zergling",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"DehakaRavasaurMerge/DehakaZerglingLevel2",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Dehaka_Ravasaur": {
		name: "Ravasaur",
		icon: "btn-unit-collection-primal-ravasaur",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Dehaka_Roach": {
		name: "Primal Roach",
		icon: "btn-unit-collection-primal-roach",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"DehakaRoachLevel2Merge/DehakaRoachLevel2",
				"DehakaRoachGuardianMerge/DehakaRoachLevel2",
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"Dehaka_Igniter": {
		name: "Primal Igniter",
		keywords: "Roach",
		icon: "btn-unit-collection-primal-roachupgrade",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"Dehaka_Guardian": {
		name: "Primal Guardian",
		icon: "btn-unit-collection-primal-guardian",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: [
			"DehakaGuardianMineCharge/DehakaGuardian"
		]
	},
	"Dehaka_Hydralisk": {
		name: "Primal Hydralisk",
		icon: "btn-unit-collection-primal-hydralisk",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"DehakaHydraliskToMutalisk/DehakaHydraliskLevel2",
				"DehakaHydraliskImpalerMerge/DehakaHydraliskLevel2",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Dehaka_Mutalisk": {
		name: "Primal Mutalisk",
		icon: "btn-unit-collection-primal-mutalisk",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: []
	},
	"Dehaka_Lurker": {
		name: "Impaler",
		icon: "btn-unit-collection-primal-lurker",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"ImpalerBurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"ImpalerBurrowUp"
			]
		}
	},
	"Dehaka_SwarmHost": {
		name: "Primal Host",
		keywords: "Swarm Host, Locust",
		icon: "btn-unit-collection-primal-creeperhost",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"DehakaSpawnLocusts/DehakaSwarmHost",
				"DehakaSwarmHostMerge/DehakaSwarmHost",
				"SwarmHostBurrowDown"
			],
			"Burrowed": [
				...data.common.tower,
				"DehakaSpawnLocusts/DehakaSwarmHostBurrowed",
				"SwarmHostBurrowUp"
			],
			"Locust": [
				...data.common.basic
			]
		}
	},
	"Dehaka_CreeperHost": {
		name: "Creeper Host",
		keywords: "Swarm Host",
		icon: "btn-unit-collection-primal-swarmhost",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"DehakaSpawnLocustsBomb/DehakaPrimalSwarmHost",
				"SwarmHostBurrowDown"
			],
			"Burrowed": [
				...data.common.tower,
				"DehakaSpawnLocustsBomb/DehakaPrimalSwarmHostBurrowed",
				"SwarmHostBurrowUp"
			],
			"Creeper": [
				...data.common.basic
			]
		}
	},
	"Dehaka_Ultralisk": {
		name: "Primal Ultralisk",
		icon: "btn-unit-collection-primal-ultralisk",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"DehakaUltraliskCrashingCharge/DehakaUltraliskLevel2",
				"DehakaUltraliskLevel2Merge/DehakaUltraliskLevel2",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Dehaka_Tyrannozor": {
		name: "Tyrannozor",
		icon: "btn-unit-collection-primal-tyrannozor",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"DehakaTyrannozorFanOfKnives/DehakaUltraliskLevel3",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Dehaka_Hatchery": {
		name: "Primal Hive",
		icon: "btn-building-dehaka-primalhatchery",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: {
			"Rooted": [
				"DehakaDrone/DehakaHatchery",
				"BuildDehakaExtractor/DehakaHatchery",
				"RallySCV",
				"DehakaLearnPrimalWeaponsLevel1/DehakaHatchery",
				"DehakaLearnPrimalArmorLevel1/DehakaHatchery",
				"PrimalBuildingRoot/DehakaHatcheryUprooted",
				"Cancel"
			],
			"Uprooted": [
				...data.common.basic,
				"Rally",
				"PrimalBuildingUproot/DehakaHatchery"
			]
		}
	},
	"Dehaka_Extractor": {
		name: "Primal Extractor",
		icon: "btn-building-dehaka-extractor",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Dehaka_Barracks": {
		name: "Primal Warden",
		icon: "btn-building-dehaka-primalbarracks",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: {
			"Rooted": [
				"DehakaZergling/DehakaBarracks",
				"DehakaRoach/DehakaBarracks",
				"DehakaHydralisk/DehakaBarracks",
				"DehakaSwarmHost/DehakaBarracks",
				"DehakaUltralisk/DehakaBarracks",
				"Rally",
				"PrimalBuildingUproot/DehakaBarracks",
				"Cancel"
			],
			"Uprooted": [
				...data.common.basic,
				"Rally",
				"PrimalBuildingRoot/DehakaBarracksUprooted"
			]
		}
	},
	"Dehaka_DehakaDen": {
		name: "Dehaka’s Den",
		icon: "btn-building-dehaka-dehakanest",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			"ConsumeDrone/DehakaCoopReviveCocoon",
			"Rally"
		]
	},
	"Dehaka_GlevigDen": {
		name: "Glevig’s Den",
		icon: "btn-building-dehaka-glevignest",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			"ResearchDehakaRavasaurVSArmor/DehakaGlevigStructure",
			"ResearchDehakaRavasaurRange/DehakaGlevigStructure",
			"DehakaRoachMoveSpeed/DehakaGlevigStructure",
			"DehakaGlevigRoachFireBreath/DehakaGlevigStructure",
			"ResearchDehakaHydraliskSpeed/DehakaGlevigStructure",
			"ResearchDehakaImpalerTenderize/DehakaGlevigStructure",
			"Cancel"
		]
	},
	"Dehaka_MurvarDen": {
		name: "Murvar’s Den",
		icon: "btn-building-dehaka-murvarnest",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			"ResearchSlicingGlave/DehakaMurvarStructure",
			"ResearchDehakaMutaliskDamageReduction/DehakaMurvarStructure",
			"ResearchDehakaMutaliskRespawnOnDeath/DehakaMurvarStructure",
			"ResearchDehakaGuardianExplosiveBomb/DehakaMurvarStructure",
			"ResearchDehakaGuardianFury/DehakaMurvarStructure",
			"DehakaMurvarCreeperAir/DehakaMurvarStructure",
			"Cancel"
		]
	},
	"Dehaka_DakrunDen": {
		name: "Dakrun’s Den",
		icon: "btn-building-dehaka-dakrunnest",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			"ResearchDehakaUltraliskCrashingCharge/DehakaDakrunStructure",
			"ResearchDehakaUltraliskRegen/DehakaDakrunStructure",
			"ResearchDehakaUltraliskBash/DehakaDakrunStructure",
			"ResearchDehakaTyrannozorFanOfKnives/DehakaDakrunStructure",
			"ResearchDehakaTyrannozorArmorAura/DehakaDakrunStructure",
			"Cancel"
		]
	},
	"Dehaka_Wurm": {
		name: "Primal Wurm",
		icon: "btn-building-dehaka-primalwurm",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"NydusDestroyerBeam/DehakaNydusDestroyer",
			"NydusDestroyerDeepTunnel/DehakaNydusDestroyer"
		]
	},
	"Dehaka_GreaterWurm": {
		name: "Greater Primal Wurm",
		icon: "btn-unit-zerg-wurm",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"DehakaNydusDestroyerTimedNoFoodBeam/DehakaNydusDestroyerTimedNoFood",
			"GreaterNydusDestroyerDeepTunnel/DehakaNydusDestroyerTimedNoFood"
		]
	},
	"Dehaka_Glevig": {
		name: "Glevig",
		icon: "btn-unit-zerg-glevig",
		race: ZERG,
		commander: "Dehaka",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"GlevigFirebreath/DehakaGlevig",
			"GlevigTunnel/DehakaGlevig"
		]
	},
	"Dehaka_Murvar": {
		name: "Murvar",
		icon: "btn-unit-zerg-murvar",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: [
			"CoopMurvarSpawnCreepers/DehakaMurvar",
			"MurvarPukeCoop/DehakaMurvar"
		]
	},
	"Dehaka_Dakrun": {
		name: "Dakrun",
		icon: "btn-unit-zerg-dakrun",
		race: ZERG,
		commander: "Dehaka",
		type: UNIT,
		commands: [
			"DakrunCrashingCharge/DehakaDakrun"
		]
	},
	"Stetmann": {
		name: "Stetmann",
		keywords: "Hero Genius (Henius)",
		icon: "btn-progression-stetmann-15-supergarytransform",
		race: ZERG,
		commander: "Stetmann",
		type: COMMANDER,
		defaultUnit: "Stetmann_Drone"
	},
	"Stetmann_Gary": {
		name: "Gary",
		keywords: "Science Vessel",
		icon: "btn-unit-stetmann-gary",
		race: ZERG,
		commander: "Stetmann",
		type: HERO,
		commands: {
			"Gary": [
				"GaryStetmannOrb/GaryStetmann",
				"PowerTowerOverchargeStetmannSpeed/GaryStetmann",
				"GaryStetmannRecall/GaryStetmann",
				"MorphToSuperGaryStetmann/GaryStetmann",
				"CancelSuperGaryStetmannMorph"
			],
			"Super Gary": [
				...data.common.basic,
				"GaryStetmannOrb/SuperGaryStetmann",
				"PowerTowerOverchargeStetmannSpeed/SuperGaryStetmann",
				"GaryStetmannRecall/SuperGaryStetmann",
				"PowerFieldSuperGaryStetmannSpeed/SuperGaryStetmann"
			]
		},
	},
	"Stetmann_Larva": {
		name: "Mecha Larva",
		icon: "btn-unit-zerg-larva-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: OTHER,
		commands: {
			"Mecha Larva": [
				"DroneStetmann/LarvaStetmann",
				"OverlordStetmann/LarvaStetmann",
				"ZerglingStetmann/LarvaStetmann",
				"HydraliskStetmann/LarvaStetmann",
				"CorruptorStetmann/LarvaStetmann",
				"InfestorStetmann/LarvaStetmann",
				"UltraliskStetmann/LarvaStetmann"
			],
			"Mecha Egg": [
				"Rally",
				"Cancel"
			]
		}
	},
	"Stetmann_Drone": {
		name: "Mecha Drone",
		icon: "btn-unit-collection-drone-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Mecha Drone": [
				"GatherProt",
				"ReturnCargo",
				"ZergBuild/DroneStetmann",
				"ZergBuildAdvanced/DroneStetmann",
				"RepairStetmann",
				"Spray",
				"BurrowUp"
			],
			"Build Structure": [
				"HatcheryStetmann/DroneStetmann",
				"ExtractorStetmann/DroneStetmann",
				"SpawningPoolStetmann/DroneStetmann",
				"EvolutionChamberStetmann/DroneStetmann",
				"BanelingNestStetmann/DroneStetmann",
				"SpineCrawlerStetmann/DroneStetmann",
				"SporeCrawlerStetmann/DroneStetmann",
				"Cancel"
			],
			"Build Advanced Structure": [
				"HydraliskDenStetmann/DroneStetmann",
				"InfestationPitStetmann/DroneStetmann",
				"SpireStetmann/DroneStetmann",
				"UltraliskCavernStetmann/DroneStetmann",
				"Cancel"
			]
		}
	},
	"Stetmann_Overlord": {
		name: "Mecha Overlord",
		icon: "btn-unit-collection-overlord-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: [
			"MorphToOverseerStetmann/OverlordStetmann",
			"BunkerLoad",
			"BunkerUnloadAll"
		]
	},
	"Stetmann_Overseer": {
		name: "Mecha Overseer",
		icon: "btn-unit-collection-overseer-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: [
			"MorphtoOverseerSiegeStetmann/OverseerStetmann",
			"MorphtoOverseerNormalStetmann/OverseerStetmann"
		]
	},
	"Stetmann_Zergling": {
		name: "Mecha Zergling",
		icon: "btn-unit-collection-zergling-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BanelingStetmann/ZerglingStetmann",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stetmann_Baneling": {
		name: "Mecha Baneling",
		icon: "btn-unit-collection-baneling-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"ExplodeStetmann/BanelingStetmann",
				"EnableBuildingAttack/BanelingStetmann",
				"BanelingStetmannMovementSpeed/BanelingStetmann",
				"BurrowDown"
			],
			"Structure Attack": [
				...data.common.basic,
				"ExplodeStetmann/BanelingStetmann",
				"DisableBuildingAttack/BanelingStetmann",
				"BanelingStetmannMovementSpeed/BanelingStetmann",
				"BurrowDown"
			],
			"Burrowed": [
				"ExplodeStetmann/BanelingStetmannBurrowed",
				"BurrowUp"
			]
		}
	},
	"Stetmann_Roach": {
		name: "Mecha Roach",
		icon: "btn-unit-collection-roach-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"BurrowUp"
			]
		}
	},
	"Stetmann_Ravager": {
		name: "Mecha Ravager",
		icon: "btn-unit-collection-ravager-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"RavagerStetmannCorrosiveBile/RavagerStetmann",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stetmann_Hydralisk": {
		name: "Mecha Hydralisk",
		icon: "btn-unit-collection-hydralisk-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"HydraliskStetmannMissilePowerOn",
				"HydraliskStetmannMissilePowerOff/HydraliskStetmann",
				"LurkerStetmann/HydraliskStetmann",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stetmann_Lurker": {
		name: "Mecha Lurker",
		icon: "btn-unit-collection-lurker-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"LurkerStetmannTunnelingBurst/LurkerStetmann",
				"LurkerStetmannChannelingSpines/LurkerStetmann",
				"LurkerBurrowDown"
			],
			"Burrowed": [
				...data.common.tower,
				"LurkerStetmannTunnelingBurst/LurkerStetmannBurrowed",
				"LurkerStetmannChannelingSpines/LurkerStetmannBurrowed",
				"LurkerCancelHoldFire/LurkerStetmannBurrowed",
				"LurkerHoldFire/LurkerStetmannBurrowed",
				"LurkerBurrowUp"
			]
		}
	},
	"Stetmann_Corruptor": {
		name: "Mecha Corruptor",
		icon: "btn-unit-collection-corruptor-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: [
			"CorruptorStetmannMissilePods/CorruptorStetmann",
			"CausticSprayStetmann/CorruptorStetmann",
			"BroodLordStetmann/CorruptorStetmann",
			"Cancel"
		]
	},
	"Stetmann_BroodLord": {
		name: "Mecha Battlecarrier Lord",
		keywords: "Brood Lord, Mecha Broodling, Mecha Locusceptor",
		icon: "btn-unit-collection-broodlord-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Mecha Battlecarrier Lord": [
				"BroodLordStetmannBroodlings/BroodLordStetmann",
				"BroodLordStetmannBombers/BroodLordStetmann",
				"BroodLordStetmannYamatoCannon",
				"Cancel"
			],
			"Mecha Broodling": [
				...data.common.basic
			]
		}
	},
	"Stetmann_Infestor": {
		name: "Mecha Infestor",
		icon: "btn-unit-collection-infestor-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"InfestorStetmannEggLaunch/InfestorStetmann",
				"InfestorStetmannHealingTentacle/InfestorStetmann",
				"InfestorStetmannInfestBuilding/InfestorStetmann",
				"BurrowDown"
			],
			"Burrowed": [
				...data.common.basic,
				"InfestorStetmannEggLaunch/InfestorStetmannBurrowed",
				"InfestorStetmannHealingTentacle/InfestorStetmannBurrowed",
				"InfestorStetmannInfestBuilding/InfestorStetmannBurrowed",
				"BurrowUp"
			]
		}
	},
	"Stetmann_Ultralisk": {
		name: "Mecha Ultralisk",
		icon: "btn-unit-collection-ultralisk-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: UNIT,
		commands: {
			"Unburrowed": [
				"UltraliskStetmannBurrowCharge/UltraliskStetmann",
				"UltraliskStetmannMechanicalLifeLeech/UltraliskStetmann",
				"BurrowDown"
			],
			"Burrowed": [
				"BurrowUp"
			]
		}
	},
	"Stetmann_Hatchery": {
		name: "Mecha Hatchery",
		keywords: "Mecha Lair, Mecha Hive",
		icon: "btn-building-zerg-hatchery-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: {
			"Mecha Hatchery": [
				"LarvaStetmann",
				"ResearchOverlordStetmannSpeed",
				"ResearchOverlordStetmannVentralSacks",
				"RallyEggStetmann",
				"Rally",
				"LairStetmann/HatcheryStetmann",
				"Cancel"
			],
			"Mecha Lair": [
				"LarvaStetmann",
				"ResearchOverlordStetmannSpeed",
				"ResearchOverlordStetmannVentralSacks",
				"RallyEggStetmann",
				"Rally",
				"HiveStetmann/LairStetmann",
				"Cancel"
			],
			"Mecha Hive": [
				"LarvaStetmann",
				"ResearchOverlordStetmannSpeed",
				"ResearchOverlordStetmannVentralSacks",
				"RallyEggStetmann",
				"Rally",
				"Cancel"
			]
		}
	},
	"Stetmann_Extractor": {
		name: "Mecha Extractor",
		icon: "btn-building-zerg-extractor-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Stetmann_SpawningPool": {
		name: "Mecha Spawning Pool",
		icon: "btn-building-zerg-spawningpool-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: [
			"ResearchZerglingStetmannMovementSpeed/SpawningPoolStetmann",
			"ResearchZerglingStetmannHardenedShield/SpawningPoolStetmann",
			"ResearchZerglingStetmannAttackSpeed/SpawningPoolStetmann",
			"RallyStetmannBuilding",
			"ZerglingStetmannRespawn/SpawningPoolStetmann",
			"Cancel"
		]
	},
	"Stetmann_EvolutionChamber": {
		name: "Mecha Evolution Chamber",
		icon: "btn-building-zerg-evolutionchamber-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: [
			"ZergMeleeWeaponsStetmann1/EvolutionChamberStetmann",
			"ZergMissileWeaponsStetmann1/EvolutionChamberStetmann",
			"ZergGroundArmorStetmann1/EvolutionChamberStetmann",
			"Cancel"
		]
	},
	"Stetmann_BanelingNest": {
		name: "Mecha Baneling Nest",
		icon: "btn-building-zerg-banelingnest-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: [
			"ResearchBanelingStetmannMovementSpeed/BanelingNestStetmann",
			"ResearchBanelingStetmannExtraDamage/BanelingNestStetmann",
			"ResearchBanelingStetmannManaShieldBonus/BanelingNestStetmann",
			"Cancel"
		]
	},
	"Stetmann_SpineCrawler": {
		name: "Mecha Spine Crawler",
		icon: "btn-building-zerg-spinecrawler-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SpineCrawlerUprootStetmann/SpineCrawlerStetmann",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SpineCrawlerRootStetmann/SpineCrawlerUprootedStetmann"
			]
		}
	},
	"Stetmann_SporeCrawler": {
		name: "Mecha Spore Crawler",
		icon: "btn-building-zerg-spinecrawler-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: {
			"Rooted": [
				...data.common.tower,
				"SporeCrawlerUprootStetmann/SporeCrawlerStetmann",
				"Cancel"
			],
			"Uprooted": [
				...data.common.flying,
				"SporeCrawlerRootStetmann/SporeCrawlerUprootedStetmann"
			]
		}
	},
	"Stetmann_HydraliskDen": {
		name: "Mecha Hydralisk Den",
		keywords: "Mecha Lurker Den",
		icon: "btn-building-zerg-hydraliskden-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: {
			"Mecha Hydralisk Den": [
				"ResearchHydraliskStetmannMovementSpeed/HydraliskDenStetmann",
				"ResearchHydraliskStetmannDamage/HydraliskDenStetmann",
				"ResearchHydraliskStetmannRange/HydraliskDenStetmann",
				"ResearchLurkerStetmannTunnelingBurstRange/HydraliskDenStetmann",
				"ReserachLurkerStetmannChannelingSpines/HydraliskDenStetmann",
				"RallyStetmannBuilding",
				"LurkerDenStetmann/HydraliskDenStetmann",
				"HydraliskStetmannRespawn/HydraliskDenStetmann",
				"Cancel"
			],
			"Mecha Lurker Den": [
				"ResearchHydraliskStetmannMovementSpeed/LurkerDenStetmann",
				"ResearchHydraliskStetmannDamage/LurkerDenStetmann",
				"ResearchHydraliskStetmannRange/LurkerDenStetmann",
				"ResearchLurkerStetmannTunnelingBurstRange/LurkerDenStetmann",
				"ReserachLurkerStetmannChannelingSpines/LurkerDenStetmann",
				"RallyStetmannBuilding",
				"HydraliskStetmannRespawn/LurkerDenStetmann",
				"Cancel"
			]
		}
	},
	"Stetmann_InfestationPit": {
		name: "Mecha Infestation Pit",
		icon: "btn-building-zerg-infestationpit-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: [
			"InfestorStetmannRecharge/InfestationPitStetmann",
			"InfestorStetmannBonusRavager/InfestationPitStetmann",
			"RallyStetmannBuilding",
			"InfestorStetmannRespawn/InfestationPitStetmann",
			"Cancel"
		]
	},
	"Stetmann_Spire": {
		name: "Mecha Spire",
		keywords: "Mecha Greater Spire",
		icon: "btn-building-zerg-spire-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: {
			"Mecha Spire": [
				"ZergFlyerAttackStetmann1",
				"ZergFlyerArmorStetmann1",
				"CorruptorStetmannBiggerAoE/SpireStetmann",
				"ResearchCorruptorCausticSprayStetmann/SpireStetmann",
				"BroodLordStetmannBombersLearn/SpireStetmann",
				"BroodLordStetmannYamato/SpireStetmann",
				"RallyStetmannBuilding",
				"GreaterSpireStetmann/SpireStetmann",
				"CorruptorStetmannRespawn/SpireStetmann",
				"Cancel"
			],
			"Mecha Greater Spire": [
				"ZergFlyerAttackStetmann1",
				"ZergFlyerArmorStetmann1",
				"CorruptorStetmannBiggerAoE/GreaterSpireStetmann",
				"ResearchCorruptorCausticSprayStetmann/GreaterSpireStetmann",
				"BroodLordStetmannBombersLearn/GreaterSpireStetmann",
				"BroodLordStetmannYamato/GreaterSpireStetmann",
				"RallyStetmannBuilding",
				"CorruptorStetmannRespawn/GreaterSpireStetmann",
				"Cancel"
			]
		}
	},
	"Stetmann_UltraliskCavern": {
		name: "Mecha Ultralisk Cavern",
		icon: "btn-building-zerg-ultraliskcavern-mecha",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: [
			"ResearchUltraliskStetmannBurrowChargeMechanicalStun/UltraliskCavernStetmann",
			"ReserachUltraliskStetmannMechanicalLifeLeech/UltraliskCavernStetmann",
			"ReserachUltraliskStetmannArmor/UltraliskCavernStetmann",
			"RallyStetmannBuilding",
			"UltraliskStetmannRespawn/UltraliskCavernStetmann",
			"Cancel"
		]
	},
	"Stetmann_Stetellite": {
		name: "Stetellite",
		icon: "btn-building-stetmann-stetellite",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: {
			"F.A.S.T. Configuration": [
				"FASTOverloadStetmann/PowerTowerStetmann"
			],
			"H.U.G.S. Configuration": [
				"HUGSOverloadStetmann/PowerTowerStetmann"
			],
			"J.U.I.C.E. Configuration": [
				"JUICEOverloadStetmann/PowerTowerStetmann"
			]
		}
	},
	"Stetmann_GaryRoom": {
		name: "Gary’s Room",
		icon: "btn-building-stetmann-garysroom",
		race: ZERG,
		commander: "Stetmann",
		type: BUILDING,
		commands: [
			"Rally"
		]
	},
	"Protoss": {
		name: "Protoss",
		icon: "btn-unit-protoss-zealot",
		race: PROTOSS,
		commander: "Protoss",
		type: COMMANDER,
		defaultUnit: "Protoss_Probe"
	},
	"Protoss_Probe": {
		name: "Probe",
		icon: "btn-unit-protoss-probe",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe",
				"Spray"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Assimilator/Probe",
				"Pylon/Probe",
				"Gateway/Probe",
				"Forge/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"ShieldBattery/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"TwilightCouncil/Probe",
				"Stargate/Probe",
				"RoboticsFacility/Probe",
				"TemplarArchive/Probe",
				"FleetBeacon/Probe",
				"RoboticsBay/Probe",
				"DarkShrine/Probe",
				"Cancel"
			]
		}
	},
	"Protoss_Zealot": {
		name: "Zealot",
		icon: "btn-unit-protoss-zealot",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"Charge/Zealot"
		]
	},
	"Protoss_Sentry": {
		name: "Sentry",
		icon: "btn-unit-protoss-sentry",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: {
			"Sentry": [
				"ForceField/Sentry",
				"GuardianShield/Sentry",
				"Hallucination/Sentry"
			],
			"Hallucinations": [
				"ProbeHallucination/Sentry",
				"ZealotHallucination/Sentry",
				"AdeptHallucination/Sentry",
				"StalkerHallucination/Sentry",
				"ImmortalHallucination/Sentry",
				"HighTemplarHallucination/Sentry",
				"ArchonHallucination/Sentry",
				"VoidRayHallucination/Sentry",
				"PhoenixHallucination/Sentry",
				"WarpPrismHallucination/Sentry",
				"OracleHallucination/Sentry",
				"ColossusHallucination/Sentry",
				"DisruptorHallucination/Sentry",
				"Cancel"
			]
		}
	},
	"Protoss_Stalker": {
		name: "Stalker",
		icon: "btn-unit-protoss-stalker",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"Blink/Stalker"
		]
	},
	"Protoss_Adept": {
		name: "Adept",
		icon: "btn-unit-protoss-adept",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: {
			"Adept": [
				"AdeptPhaseShift/Adept",
				"Cancel"
			],
			"Shade": [
				...data.common.basic,
				"Cancel"
			]
		}
	},
	"Protoss_HighTemplar": {
		name: "High Templar",
		icon: "btn-unit-protoss-hightemplar",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"Feedback/HighTemplar",
			"PsiStorm/HighTemplar",
			"AWrp"
		]
	},
	"Protoss_DarkTemplar": {
		name: "Dark Templar",
		icon: "btn-unit-protoss-darktemplar",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"DarkTemplarBlink/DarkTemplar",
			"AWrp"
		]
	},
	"Protoss_Archon": {
		name: "Archon",
		icon: "btn-unit-protoss-archon",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: []
	},
	"Protoss_Observer": {
		name: "Observer",
		icon: "btn-unit-protoss-observer",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"MorphtoObserverSiege/Observer",
			"MorphtoObserver/Observer"
		]
	},
	"Protoss_WarpPrism": {
		name: "Warp Prism",
		icon: "btn-unit-protoss-warpprism",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"PhasingMode/WarpPrism",
			"TransportMode/WarpPrism",
			"BunkerLoad",
			"BunkerUnloadAll"
		]
	},
	"Protoss_Immortal": {
		name: "Immortal",
		icon: "btn-unit-protoss-immortal",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: []
	},
	"Protoss_Colossus": {
		name: "Colossus",
		icon: "btn-unit-protoss-colossus",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: []
	},
	"Protoss_Disruptor": {
		name: "Disruptor",
		icon: "btn-unit-protoss-disruptor",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"PurificationNovaTargeted/Disruptor"
		]
	},
	"Protoss_Phoenix": {
		name: "Phoenix",
		icon: "btn-unit-protoss-phoenix",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"GravitonBeam/Phoenix",
			"Cancel"
		]
	},
	"Protoss_Oracle": {
		name: "Oracle",
		icon: "btn-unit-protoss-oracle",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"OracleRevelation/Oracle",
			"OracleBuildStasisTrap/Oracle",
			"OracleWeaponOn/Oracle",
			"OracleWeaponOff/Oracle"
		]
	},
	"Protoss_VoidRay": {
		name: "Void Ray",
		icon: "btn-unit-protoss-warpray",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"VoidRaySwarmDamageBoost/VoidRay",
			"Cancel"
		]
	},
	"Protoss_Tempest": {
		name: "Tempest",
		icon: "btn-unit-protoss-tempest",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: []
	},
	"Protoss_Carrier": {
		name: "Carrier",
		icon: "btn-unit-protoss-carrier",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"Interceptor/Carrier",
			"Cancel"
		]
	},
	"Protoss_MothershipCore": {
		name: "Mothership Core",
		icon: "btn-unit-protoss-mothershipcore",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"MorphToMothership/MothershipCore",
			"MothershipCoreWeapon/MothershipCore",
			"MothershipCoreMassRecall/MothershipCore",
			"TemporalField/MothershipCore",
			"Cancel"
		]
	},
	"Protoss_Mothership": {
		name: "Mothership",
		icon: "btn-unit-protoss-mothership",
		race: PROTOSS,
		commander: "Protoss",
		type: UNIT,
		commands: [
			"MassRecall/Mothership",
			"TemporalField/Mothership"
		]
	},
	"Protoss_Nexus": {
		name: "Nexus",
		icon: "btn-building-protoss-nexus",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Mothership/Nexus",
			"Rally",
			"ChronoBoostEnergyCost/Nexus",
			"NexusMassRecall/Nexus",
			"Cancel"
		]
	},
	"Protoss_Assimilator": {
		name: "Assimilator",
		icon: "btn-building-protoss-assimilator",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Protoss_Pylon": {
		name: "Pylon",
		icon: "btn-building-protoss-pylon",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Protoss_Gateway": {
		name: "Gateway",
		keywords: "Warp Gate",
		icon: "btn-building-protoss-gateway",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: {
			"Gateway": [
				"Zealot",
				"Sentry",
				"Stalker",
				"WarpInAdept/Gateway",
				"HighTemplar",
				"DarkTemplar",
				"Rally",
				"UpgradeToWarpGate/Gateway",
				"Cancel"
			],
			"Warp Gate": [
				"Zealot",
				"Sentry",
				"Stalker",
				"WarpInAdept/WarpGate",
				"HighTemplar",
				"DarkTemplar",
				"MorphBackToGateway/WarpGate",
				"Cancel"
			]
		}
	},
	"Protoss_ShieldBattery": {
		name: "Shield Battery",
		icon: "btn-building-protoss-shieldbattery",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"Stop",
			"ShieldBatteryRecharge/ShieldBattery",
			"Cancel"
		]
	},
	"Protoss_Forge": {
		name: "Forge",
		icon: "btn-building-protoss-forge",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"ProtossGroundWeaponsLevel1/Forge",
			"ProtossGroundArmorLevel1/Forge",
			"ProtossShieldsLevel1/Forge",
			"Cancel"
		]
	},
	"Protoss_PhotonCannon": {
		name: "Photon Cannon",
		icon: "btn-building-protoss-photoncannon",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"Protoss_CyberneticsCore": {
		name: "Cybernetics Core",
		icon: "btn-building-protoss-cyberneticscore",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"ProtossAirWeaponsLevel1/CyberneticsCore",
			"ProtossAirArmorLevel1/CyberneticsCore",
			"ResearchWarpGate/CyberneticsCore",
			"Cancel"
		]
	},
	"Protoss_TwilightCouncil": {
		name: "Twilight Council",
		icon: "btn-building-protoss-twilightcouncil",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"ResearchCharge/TwilightCouncil",
			"ResearchStalkerTeleport/TwilightCouncil",
			"AdeptResearchPiercingUpgrade/TwilightCouncil",
			"Cancel"
		]
	},
	"Protoss_TemplarArchives": {
		name: "Templar Archives",
		icon: "btn-building-protoss-templararchives",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"ResearchPsiStorm/TemplarArchive",
			"Cancel"
		]
	},
	"Protoss_DarkShrine": {
		name: "Dark Shrine",
		icon: "btn-building-protoss-darkshrine",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"ResearchDarkTemplarBlink/DarkShrine",
			"Cancel"
		]
	},
	"Protoss_RoboticsFacility": {
		name: "Robotics Facility",
		icon: "btn-building-protoss-roboticsfacility",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"Observer/RoboticsFacility",
			"WarpPrism/RoboticsFacility",
			"Immortal/RoboticsFacility",
			"Colossus/RoboticsFacility",
			"WarpinDisruptor/RoboticsFacility",
			"Rally",
			"Cancel"
		]
	},
	"Protoss_RoboticsBay": {
		name: "Robotics Bay",
		icon: "btn-building-protoss-roboticssupportbay",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"ResearchGraviticBooster/RoboticsBay",
			"ResearchGraviticDrive/RoboticsBay",
			"ResearchExtendedThermalLance/RoboticsBay",
			"Cancel"
		]
	},
	"Protoss_Stargate": {
		name: "Stargate",
		icon: "btn-building-protoss-stargate",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"Phoenix/Stargate",
			"Oracle/Stargate",
			"VoidRay/Stargate",
			"Tempest/Stargate",
			"Carrier/Stargate",
			"Rally",
			"Cancel"
		]
	},
	"Protoss_FleetBeacon": {
		name: "Fleet Beacon",
		icon: "btn-building-protoss-fleetbeacon",
		race: PROTOSS,
		commander: "Protoss",
		type: BUILDING,
		commands: [
			"AnionPulseCrystals/FleetBeacon",
			"ResearchVoidRaySpeedUpgrade/FleetBeacon",
			"Cancel"
		]
	},
	"LegacyOfTheVoid": {
		name: "LegacyOfTheVoid",
		displayName: "Legacy of the Void",
		icon: "btn-unit-protoss-artanishero",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		sortCommander: "Protoss",
		type: COMMANDER,
		defaultUnit: "LegacyOfTheVoid_Probe"
	},
	"LegacyOfTheVoid_Zeratul": {
		name: "Zeratul",
		keywords: "Dark Prelate, Dark Templar",
		icon: "btn-unit-protoss-zeratul",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: HERO,
		commands: [
			"ZeratulBlink/PrologueZeratul",
			"PrologueVoidArmor/PrologueZeratul",
			"ShadowBlade/PrologueZeratul"
		]
	},
	"LegacyOfTheVoid_Artanis": {
		name: "Artanis",
		keywords: "Hierarch of the Daelaam",
		icon: "btn-unit-protoss-artanishero",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: HERO,
		commands: [
			"ArtanisLightningDash/ArtanisVoid",
			"ArtanisAstralWind/ArtanisVoid"
		]
	},
	"LegacyOfTheVoid_Vorazun": {
		name: "Vorazun",
		keywords: "Matriarch of the Nerazim, Dark Templar",
		icon: "btn-unit-protoss-vorazun",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: HERO,
		commands: [
			"VorazunBlink/VorazunChampion",
			"MohandarOmnislash/VorazunChampion"
		]
	},
	"LegacyOfTheVoid_Alarak": {
		name: "Alarak",
		keywords: "Highlord of the Tal'darim",
		icon: "btn-unit-protoss-alarak",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: HERO,
		commands: [
			"AlarakKnockback/AlarakChampion",
			"AlarakDeadlyCharge/AlarakChampion"
		]
	},
	"LegacyOfTheVoid_Karax": {
		name: "Karax",
		keywords: "Master Phase-Smith",
		icon: "btn-unit-protoss-karax",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: HERO,
		commands: [
			"Reclamation/KaraxChampion",
			"PhaseCannon/KaraxChampion"
		]
	},
	"LegacyOfTheVoid_Fenix": {
		name: "Fenix",
		keywords: "Purifier Executor, Talandar",
		icon: "btn-unit-protoss-fenix",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: HERO,
		commands: {
			"Fenix": [
				"FenixSOACharge/FenixChampion",
				"FenixWhirlwind/FenixChampion",
				"VoidShieldCapacitor/FenixChampion"
			],
			"Calldown": [
				...data.common.basic,
				"FenixSOACharge/FenixSOA",
				"FenixWhirlwind/FenixSOA"
			]
		}
	},
	"LegacyOfTheVoid_Kerrigan": {
		name: "Kerrigan",
		icon: "btn-ability-zerg-cosmicfury",
		race: ZERG,
		commander: "LegacyOfTheVoid",
		type: HERO,
		commands: {
			"Ulnar": [
				"KerriganVoidKineticBlast/KerriganVoidUlnar02",
				"KerriganVoidSpawnBanelings/KerriganVoidUlnar02"
			],
			"Epilogue 2": [
				...data.common.tower,
				"CelestialBeam/KerriganEpilogue02"
			],
			"Epilogue 3": [
				...data.common.basic,
				"KerriganEpilogue03QuantumRay/KerriganEpilogue03",
				"KerriganEpilogue03Heal/KerriganEpilogue03",
				"KerriganEpilogue03CreepTeleport/KerriganEpilogue03",
				"KerriganEpilogue03Extinction/KerriganEpilogue03"
			]
		}
	},
	"LegacyOfTheVoid_Probe": {
		name: "Probe",
		icon: "btn-unit-protoss-probe",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Assimilator/Probe",
				"Pylon/Probe",
				"Gateway/Probe",
				"Forge/Probe",
				"ShieldBattery/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"KhaydarinMonolith/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"Stargate/Probe",
				"RoboticsFacility/Probe",
				"TemplarArchive/Probe",
				"FleetBeacon/Probe",
				"RoboticsBay/Probe",
				"DarkShrine/Probe",
				"Cancel"
			]
		}
	},
	"LegacyOfTheVoid_Zealot": {
		name: "Zealot",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-zealot-aiur",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Zealot": [
				"Charge/ZealotAiur",
				"VoidZealotWhirlwind/ZealotAiur"
			],
			"Prologue": [
				...data.common.basic,
				"Charge/Zealot"
			]
		}
	},
	"LegacyOfTheVoid_Centurion": {
		name: "Centurion",
		keywords: "Zealot",
		suffix: "Nerazim Faction",
		icon: "btn-unit-protoss-zealot-nerazim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"VoidZealotShadowCharge/ZealotShakuras",
			"VoidZealotShadowChargeStun/ZealotShakuras"
		]
	},
	"LegacyOfTheVoid_Sentinel": {
		name: "Sentinel",
		keywords: "Zealot",
		suffix: "Purifier Faction",
		icon: "btn-unit-protoss-zealot-purifier",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"Charge/ZealotPurifier"
		]
	},
	"LegacyOfTheVoid_Sentry": {
		name: "Sentry",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-sentry",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Sentry": [
				"VoidSentryShieldRepairDouble/SentryAiur",
				"GuardianShield/SentryAiur"
			],
			"Prologue": [
				...data.common.basic,
				"VoidSentryShieldRepair/Sentry",
				"GuardianShield/Sentry",
				"ForceField/Sentry"
			]
		}
	},
	"LegacyOfTheVoid_Energizer": {
		name: "Energizer",
		suffix: "Purifier Faction",
		keywords: "Sentry",
		icon: "btn-unit-protoss-sentry-purifier",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"VoidSentryChronoBeam/SentryPurifier",
			"VoidSentryPhasingMode/SentryPurifier",
			"VoidSentryMobileMode/SentryPurifier"
		]
	},
	"LegacyOfTheVoid_Havoc": {
		name: "Havoc",
		suffix: "Tal’darim Faction",
		keywords: "Sentry",
		icon: "btn-unit-protoss-sentry-taldarim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"TargetLock/Monitor",
			"SentryTaldarimForceField/Monitor"
		]
	},
	"LegacyOfTheVoid_Stalker": {
		name: "Stalker",
		suffix: "Nerazim Faction",
		icon: "btn-unit-protoss-stalker",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Stalker": [
				"StalkerBlinkShieldRestoreBase/StalkerShakuras"
			],
			"Prologue": [
				...data.common.basic,
				"Blink/Stalker"
			]
		}
	},
	"LegacyOfTheVoid_Dragoon": {
		name: "Dragoon",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-dragoon-void",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: []
	},
	"LegacyOfTheVoid_Adept": {
		name: "Adept",
		suffix: "Purifier Faction",
		icon: "btn-unit-protoss-adept-purifier",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Adept": [
				"AdeptPhaseShift/Adept",
				"Cancel"
			],
			"Shade": [
				...data.common.basic,
				"Cancel"
			]
		}
	},
	"LegacyOfTheVoid_Instigator": {
		name: "Instigator",
		suffix: "Purifier Faction",
		keywords: "Stalker",
		icon: "btn-unit-collection-purifier-stalker",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"StalkerBlinkMultiple/StalkerPurifier"
		]
	},
	"LegacyOfTheVoid_HighTemplar": {
		name: "High Templar",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-hightemplarnocord",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"High Templar": [
				"Feedback/HighTemplar",
				"PsiStorm/HighTemplar",
				"AWrp"
			],
			"Archon": [
				...data.common.basic
			]
		}
	},
	"LegacyOfTheVoid_DarkArchon": {
		name: "Dark Archon",
		suffix: "Nerazim Faction",
		icon: "btn-unit-protoss-darkarchon",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"DarkArchonConfusion/DarkArchon",
			"DarkArchonMindControl/DarkArchon"
		]
	},
	"LegacyOfTheVoid_Ascendant": {
		name: "Ascendant",
		suffix: "Tal’darim Faction",
		keywords: "High Templar",
		icon: "btn-unit-protoss-hightemplar-taldarim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"VoidHighTemplarPsiOrb/HighTemplarTaldarim",
			"VoidHighTemplarMindBlast/HighTemplarTaldarim",
			"AscendantSacrifice/HighTemplarTaldarim"
		]
	},
	"LegacyOfTheVoid_DarkTemplar": {
		name: "Dark Templar",
		suffix: "Nerazim Faction",
		icon: "btn-unit-protoss-darktemplar-nerazim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Dark Templar": [
				"VoidDarkTemplarShadowFury/DarkTemplarShakuras"
			],
			"Prologue": [
				...data.common.basic,
				"AWrp"
			]
		}
	},
	"LegacyOfTheVoid_Avenger": {
		name: "Avenger",
		suffix: "Aiur Faction",
		keywords: "Dark Templar",
		icon: "btn-unit-protoss-darktemplar-aiur",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: []
	},
	"LegacyOfTheVoid_BloodHunter": {
		name: "Blood Hunter",
		suffix: "Tal’darim Faction",
		keywords: "Dark Templar",
		icon: "btn-unit-protoss-darktemplar-taldarim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"VoidStasis/DarkTemplarTaldarim"
		]
	},
	"LegacyOfTheVoid_Immortal": {
		name: "Immortal",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-immortal",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"ImmortalOverload/Immortal"
		]
	},
	"LegacyOfTheVoid_Annihilator": {
		name: "Annihilator",
		keywords: "Immortal",
		suffix: "Nerazim Faction",
		icon: "btn-unit-protoss-immortal-nerazim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"ImmortalShakurasShadowCannon/ImmortalShakuras"
		]
	},
	"LegacyOfTheVoid_Vanguard": {
		name: "Vanguard",
		keywords: "Immortal",
		suffix: "Tal’darim Faction",
		icon: "btn-unit-protoss-immortal-taldarim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: []
	},
	"LegacyOfTheVoid_Colossus": {
		name: "Colossus",
		suffix: "Purifier Faction",
		icon: "btn-unit-protoss-colossus-purifier",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: []
	},
	"LegacyOfTheVoid_Reaver": {
		name: "Reaver",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-reaver",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"ReaverScarabs/Reaver",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Wrathwalker": {
		name: "Wrathwalker",
		suffix: "Tal’darim Faction",
		keywords: "Colossus",
		icon: "btn-unit-protoss-colossus-taldarimex3",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: []
	},
	"LegacyOfTheVoid_Phoenix": {
		name: "Phoenix",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-phoenix",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"GravitonBeam/Phoenix",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Corsair": {
		name: "Corsair",
		suffix: "Nerazim Faction",
		icon: "btn-unit-protoss-corsair",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"CorsairMPDisruptionWeb/CorsairMP"
		]
	},
	"LegacyOfTheVoid_Mirage": {
		name: "Mirage",
		suffix: "Purifier Faction",
		keywords: "Phoenix",
		icon: "btn-unit-protoss-phoenix-purifier",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"GravitonBeam/PhoenixPurifier",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_VoidRay": {
		name: "Void Ray",
		suffix: "Nerazim Faction",
		icon: "btn-unit-protoss-voidray-nerazim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: []
	},
	"LegacyOfTheVoid_Destroyer": {
		name: "Destroyer",
		suffix: "Tal’darim Faction",
		keywords: "Void Ray",
		icon: "btn-unit-protoss-voidray-taldarim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: []
	},
	"LegacyOfTheVoid_Arbiter": {
		name: "Arbiter",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-arbiter",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"ArbiterMPStasisField/ArbiterMP",
			"ArbiterMPRecall/ArbiterMP"
		]
	},
	"LegacyOfTheVoid_Carrier": {
		name: "Carrier",
		suffix: "Aiur Faction",
		icon: "btn-unit-protoss-carrierhero",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Carrier": [
				"Interceptor/Carrier",
				"RepairDrones/Carrier",
				"Cancel"
			],
			"Prologue": [
				...data.common.basic,
				"Interceptor/Carrier",
				"Cancel"
			]
		}
	},
	"LegacyOfTheVoid_Tempest": {
		name: "Tempest",
		suffix: "Purifier Faction",
		icon: "btn-unit-protoss-tempest-purifier",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: {
			"Tempest": [
				"LightningBomb/Tempest"
			],
			"Prologue": [
				...data.common.basic
			]
		}
	},
	"LegacyOfTheVoid_Mothership": {
		name: "Mothership",
		suffix: "Tal’darim Faction",
		icon: "btn-unit-protoss-mothership-taldarim",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"VoidSentryBlackHole/SOAMothershipv4",
			"SOAMothershipLineAttack/SOAMothershipv4",
			"SOAMothershipBlink/SOAMothershipv4"
		]
	},
	"LegacyOfTheVoid_Queen": {
		name: "Queen",
		keywords: "Classic Queen, Brood Queen",
		icon: "btn-unit-zerg-queenclassic",
		race: ZERG,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"QueenClassicParasite/QueenClassic",
			"QueenMPEnsnare/QueenClassic",
			"QueenMPSpawnBroodlings/QueenClassic",
			"CreepTumor/QueenClassic"
		]
	},
	"LegacyOfTheVoid_TaurenMarine": {
		name: "Tauren Space Marine",
		icon: "btn-unit-terran-taurenspacemarine",
		race: NEUTRAL,
		commander: "LegacyOfTheVoid",
		type: UNIT,
		commands: [
			"Stim"
		]
	},
	"LegacyOfTheVoid_Nexus": {
		name: "Nexus",
		icon: "btn-building-protoss-nexus",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Rally",
			"TimeWarp/Nexus",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Assimilator": {
		name: "Assimilator",
		icon: "btn-building-protoss-assimilator",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Pylon": {
		name: "Pylon",
		icon: "btn-building-protoss-pylon",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Gateway": {
		name: "Gateway",
		keywords: "Warp Gate",
		icon: "btn-building-protoss-gateway",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: {
			"Gateway": [
				"Zealot",
				"Sentry",
				"Stalker",
				"HighTemplar",
				"DarkTemplar",
				"Rally",
				"UpgradeToWarpGate/Gateway",
				"Cancel"
			],
			"Warp Gate": [
				"Zealot",
				"Sentry",
				"Stalker",
				"HighTemplar",
				"DarkTemplar",
				"MorphBackToGateway/WarpGate",
				"Cancel"
			]
		}
	},
	"LegacyOfTheVoid_ShieldBattery": {
		name: "Shield Battery",
		icon: "btn-building-protoss-shieldbattery",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Stop",
			"ShieldBatteryRecharge/ShieldBattery",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Forge": {
		name: "Forge",
		icon: "btn-building-protoss-forge",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"ProtossGroundWeaponsLevel1/Forge",
			"ProtossGroundArmorLevel1/Forge",
			"ProtossShieldsLevel1/Forge",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_PhotonCannon": {
		name: "Photon Cannon",
		icon: "btn-building-protoss-photoncannon",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Monolith": {
		name: "Khaydarin Monolith",
		icon: "btn-unit-protoss-khaydarinmonolith",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"LegacyOfTheVoid_CyberneticsCore": {
		name: "Cybernetics Core",
		icon: "btn-building-protoss-cyberneticscore",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"ProtossAirWeaponsLevel1/CyberneticsCore",
			"ProtossAirArmorLevel1/CyberneticsCore",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_TemplarArchives": {
		name: "Templar Archives",
		icon: "btn-building-protoss-templararchives",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"LegacyOfTheVoid_DarkShrine": {
		name: "Dark Shrine",
		icon: "btn-building-protoss-darkshrine",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Rally",
			"Cancel"
		]
	},
	"LegacyOfTheVoid_RoboticsFacility": {
		name: "Robotics Facility",
		keywords: "Warp Robotics Facility",
		icon: "btn-building-protoss-roboticsfacility",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: {
			"Robotics Facility": [
				"Immortal/RoboticsFacility",
				"Colossus/RoboticsFacility",
				"Rally",
				"UpgradeToRoboticsFacilityWarp/RoboticsFacility",
				"Cancel"
			],
			"Warp Robotics Facility": [
				"Immortal/RoboticsFacilityWarp",
				"Colossus/RoboticsFacilityWarp",
				"MorphBackToRoboticsFacility/RoboticsFacilityWarp",
				"Cancel"
			]
		}
	},
	"LegacyOfTheVoid_RoboticsBay": {
		name: "Robotics Bay",
		icon: "btn-building-protoss-roboticssupportbay",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"LegacyOfTheVoid_Stargate": {
		name: "Stargate",
		keywords: "Warp Stargate",
		icon: "btn-building-protoss-stargate",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: {
			"Stargate": [
				"Phoenix/Stargate",
				"VoidRay/Stargate",
				"Carrier/Stargate",
				"Rally",
				"UpgradeToStargateWarp/Stargate",
				"Cancel"
			],
			"Warp Stargate": [
				"Phoenix/StargateWarp",
				"VoidRay/StargateWarp",
				"Carrier/StargateWarp",
				"MorphBackToStargate/StargateWarp",
				"Cancel"
			]
		}
	},
	"LegacyOfTheVoid_FleetBeacon": {
		name: "Fleet Beacon",
		icon: "btn-building-protoss-fleetbeacon",
		race: PROTOSS,
		commander: "LegacyOfTheVoid",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Artanis": {
		name: "Artanis",
		keywords: "Hierarch of the Daelaam",
		icon: "talent-artanis-level01-swiftretribution",
		race: PROTOSS,
		commander: "Artanis",
		type: COMMANDER,
		defaultUnit: "Artanis_Probe"
	},
	"Artanis_Probe": {
		name: "Probe",
		icon: "btn-unit-protoss-probe",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe",
				"Spray"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Assimilator/Probe",
				"Pylon/Probe",
				"Gateway/Probe",
				"Forge/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"TwilightCouncil/Probe",
				"Stargate/Probe",
				"RoboticsFacility/Probe",
				"TemplarArchive/Probe",
				"FleetBeacon/Probe",
				"RoboticsBay/Probe",
				"Cancel"
			]
		}
	},
	"Artanis_Zealot": {
		name: "Zealot",
		icon: "btn-unit-protoss-zealot-aiur",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"Charge/ZealotAiur",
			"VoidZealotWhirlwind/ZealotAiur"
		]
	},
	"Artanis_Dragoon": {
		name: "Dragoon",
		icon: "btn-unit-protoss-dragoon-void",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: []
	},
	"Artanis_HighTemplar": {
		name: "High Templar",
		icon: "btn-unit-protoss-hightemplarnocord",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"Feedback/HighTemplar",
			"PsiStorm/HighTemplar",
			"AWrp"
		]
	},
	"Artanis_Archon": {
		name: "Archon",
		icon: "btn-unit-protoss-archon",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"Feedback/Archon",
			"PsiStorm/Archon"
		]
	},
	"Artanis_Immortal": {
		name: "Immortal",
		icon: "btn-unit-protoss-immortal",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"ImmortalOverload/Immortal"
		]
	},
	"Artanis_Observer": {
		name: "Observer",
		icon: "btn-unit-protoss-observer",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"MorphtoObserverSiege/Observer",
			"MorphtoObserver/Observer"
		]
	},
	"Artanis_Reaver": {
		name: "Reaver",
		icon: "btn-unit-protoss-reaver",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"ReaverScarabs/Reaver",
			"Cancel"
		]
	},
	"Artanis_Phoenix": {
		name: "Phoenix",
		icon: "btn-unit-protoss-phoenix",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"GravitonBeam/Phoenix",
			"Cancel"
		]
	},
	"Artanis_Tempest": {
		name: "Tempest",
		icon: "btn-unit-protoss-tempest",
		race: PROTOSS,
		commander: "Artanis",
		type: UNIT,
		commands: [
			"LightningBomb/Tempest"
		]
	},
	"Artanis_Nexus": {
		name: "Nexus",
		icon: "btn-building-protoss-nexus",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Rally",
			"TimeWarp/Nexus",
			"Cancel"
		]
	},
	"Artanis_Assimilator": {
		name: "Assimilator",
		icon: "btn-building-protoss-assimilator",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Artanis_Pylon": {
		name: "Pylon",
		icon: "btn-building-protoss-pylon",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Artanis_Gateway": {
		name: "Gateway",
		keywords: "Warp Gate",
		icon: "btn-building-protoss-gateway",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: {
			"Gateway": [
				"Zealot",
				"Stalker",
				"HighTemplar",
				"Rally",
				"UpgradeToWarpGate/Gateway",
				"Cancel"
			],
			"Warp Gate": [
				"Zealot",
				"Stalker",
				"HighTemplar",
				"MorphBackToGateway/WarpGate",
				"Cancel"
			]
		}
	},
	"Artanis_Forge": {
		name: "Forge",
		icon: "btn-building-protoss-forge",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"ProtossGroundWeaponsLevel1/Forge",
			"ProtossGroundArmorLevel1/Forge",
			"ProtossShieldsLevel1/Forge",
			"Cancel"
		]
	},
	"Artanis_PhotonCannon": {
		name: "Photon Cannon",
		icon: "btn-building-protoss-photoncannon",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"Artanis_CyberneticsCore": {
		name: "Cybernetics Core",
		icon: "btn-building-protoss-cyberneticscore",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"ProtossAirWeaponsLevel1/CyberneticsCore",
			"ProtossAirArmorLevel1/CyberneticsCore",
			"Cancel"
		]
	},
	"Artanis_TwilightCouncil": {
		name: "Twilight Council",
		icon: "btn-building-protoss-twilightcouncil",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"ResearchCharge/TwilightCouncil",
			"ResearchDragoonRange/TwilightCouncil",
			"ResearchWhirlwind/TwilightCouncil",
			"ResearchDragoonChassis/TwilightCouncil",
			"Cancel"
		]
	},
	"Artanis_TemplarArchives": {
		name: "Templar Archives",
		icon: "btn-building-protoss-templararchives",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"ResearchPsiStorm/TemplarArchive",
			"ResearchHighTemplarEnergyUpgrade/TemplarArchive",
			"ResearchHealingPsionicStorm/TemplarArchive",
			"Cancel"
		]
	},
	"Artanis_RoboticsFacility": {
		name: "Robotics Facility",
		keywords: "Warp Robotics Facility",
		icon: "btn-building-protoss-roboticsfacility",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: {
			"Robotics Facility": [
				"Immortal/RoboticsFacility",
				"Colossus/RoboticsFacility",
				"Observer/RoboticsFacility",
				"Rally",
				"UpgradeToRoboticsFacilityWarp/RoboticsFacility",
				"Cancel"
			],
			"Warp Robotics Facility": [
				"Immortal/RoboticsFacilityWarp",
				"Colossus/RoboticsFacilityWarp",
				"Observer/RoboticsFacilityWarp",
				"MorphBackToRoboticsFacility/RoboticsFacilityWarp",
				"Cancel"
			]
		}
	},
	"Artanis_RoboticsBay": {
		name: "Robotics Bay",
		icon: "btn-building-protoss-roboticssupportbay",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"ResearchGraviticBooster/RoboticsBay",
			"ResearchExtendedThermalLance/RoboticsBay",
			"ResearchReaverIncreasedScarabCount/RoboticsBay",
			"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay",
			"Cancel"
		]
	},
	"Artanis_Stargate": {
		name: "Stargate",
		keywords: "Warp Stargate",
		icon: "btn-building-protoss-stargate",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: {
			"Stargate": [
				"Phoenix/Stargate",
				"VoidRay/Stargate",
				"Rally",
				"UpgradeToStargateWarp/Stargate",
				"Cancel"
			],
			"Warp Stargate": [
				"Phoenix/StargateWarp",
				"VoidRay/StargateWarp",
				"MorphBackToStargate/StargateWarp",
				"Cancel"
			]
		}
	},
	"Artanis_FleetBeacon": {
		name: "Fleet Beacon",
		icon: "btn-building-protoss-fleetbeacon",
		race: PROTOSS,
		commander: "Artanis",
		type: BUILDING,
		commands: [
			"AnionPulseCrystals/FleetBeacon",
			"ResearchDoubleGravitonBeam/FleetBeacon",
			"ResearchTempestDisintegration/FleetBeacon",
			"Cancel"
		]
	},
	"Vorazun": {
		name: "Vorazun",
		keywords: "Matriarch of the Nerazim",
		icon: "talent-vorazun-level01-shadowstalk",
		race: PROTOSS,
		commander: "Vorazun",
		type: COMMANDER,
		defaultUnit: "Vorazun_Probe"
	},
	"Vorazun_Probe": {
		name: "Probe",
		icon: "btn-unit-protoss-probe",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe",
				"Spray"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Assimilator/Probe",
				"Pylon/Probe",
				"Gateway/Probe",
				"Forge/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"TwilightCouncil/Probe",
				"Stargate/Probe",
				"FleetBeacon/Probe",
				"DarkShrine/Probe",
				"Cancel"
			]
		}
	},
	"Vorazun_Zealot": {
		name: "Centurion",
		keywords: "Zealot",
		icon: "btn-unit-protoss-zealot-nerazim",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: [
			"VoidZealotShadowCharge/ZealotShakuras",
			"VoidZealotShadowChargeStun/ZealotShakuras"
		]
	},
	"Vorazun_Stalker": {
		name: "Stalker",
		icon: "btn-unit-protoss-stalker",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: [
			"StalkerBlinkShieldRestoreBase/StalkerShakuras"
		]
	},
	"Vorazun_DarkTemplar": {
		name: "Dark Templar",
		icon: "btn-unit-protoss-darktemplar",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: [
			"VoidDarkTemplarShadowFury/DarkTemplarShakuras",
			"DarkTemplarShadowDash/DarkTemplarShakuras",
			"VoidStasis/DarkTemplarShakuras"
		]
	},
	"Vorazun_DarkArchon": {
		name: "Dark Archon",
		icon: "btn-unit-protoss-darkarchon",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: [
			"DarkArchonConfusion/DarkArchon",
			"DarkArchonMindControl/DarkArchon"
		]
	},
	"Vorazun_Corsair": {
		name: "Corsair",
		icon: "btn-unit-protoss-corsair",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: [
			"CorsairMPDisruptionWeb/CorsairMP"
		]
	},
	"Vorazun_VoidRay": {
		name: "Void Ray",
		icon: "btn-unit-protoss-voidray-nerazim",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: []
	},
	"Vorazun_Oracle": {
		name: "Oracle",
		icon: "btn-unit-protoss-oracle",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: [
			"OracleWeaponOn/Oracle",
			"OracleWeaponOff/Oracle",
			"OracleBuildStasisTrap/Oracle"
		]
	},
	"Vorazun_ShadowGuard": {
		name: "Shadow Guard",
		keywords: "Dark Templar",
		icon: "btn-upgrade-vorazun-summonshadowguard",
		race: PROTOSS,
		commander: "Vorazun",
		type: UNIT,
		commands: [
			"VoidShadowGuardShadowFury/VorazunShadowGuard",
			"ShadowGuardBlink/VorazunShadowGuard",
			"VoidStasis/VorazunShadowGuard"
		]
	},
	"Vorazun_Nexus": {
		name: "Nexus",
		icon: "btn-building-protoss-nexus",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Rally",
			"TimeWarp/Nexus",
			"Cancel"
		]
	},
	"Vorazun_Assimilator": {
		name: "Orbital Assimilator",
		icon: "btn-building-protoss-assimilator",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Vorazun_Pylon": {
		name: "Pylon",
		icon: "btn-building-protoss-pylon",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Vorazun_Gateway": {
		name: "Gateway",
		keywords: "Warp Gate",
		icon: "btn-building-protoss-gateway",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: {
			"Gateway": [
				"Zealot",
				"Stalker",
				"DarkTemplar",
				"DarkArchon/Gateway",
				"Rally",
				"UpgradeToWarpGate/Gateway",
				"Cancel"
			],
			"Warp Gate": [
				"Zealot",
				"Stalker",
				"DarkTemplar",
				"DarkArchon/WarpGate",
				"MorphBackToGateway/WarpGate",
				"Cancel"
			]
		}
	},
	"Vorazun_Forge": {
		name: "Forge",
		icon: "btn-building-protoss-forge",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"ProtossGroundWeaponsLevel1/Forge",
			"ProtossGroundArmorLevel1/Forge",
			"ProtossShieldsLevel1/Forge",
			"Cancel"
		]
	},
	"Vorazun_PhotonCannon": {
		name: "Photon Cannon",
		icon: "btn-building-protoss-photoncannon",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"Vorazun_CyberneticsCore": {
		name: "Cybernetics Core",
		icon: "btn-building-protoss-cyberneticscore",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"ProtossAirWeaponsLevel1/CyberneticsCore",
			"ProtossAirArmorLevel1/CyberneticsCore",
			"ResearchWarpGate/CyberneticsCore",
			"Cancel"
		]
	},
	"Vorazun_TwilightCouncil": {
		name: "Twilight Council",
		icon: "btn-building-protoss-twilightcouncil",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"ResearchCharge/TwilightCouncil",
			"ResearchDragoonRange/TwilightCouncil",
			"ResearchWhirlwind/TwilightCouncil",
			"ResearchDragoonChassis/TwilightCouncil",
			"Cancel"
		]
	},
	"Vorazun_DarkShrine": {
		name: "Dark Shrine",
		icon: "btn-building-protoss-darkshrine",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"ResearchShadowFury/DarkShrine",
			"ResearchShadowDash/DarkShrine",
			"ResearchVoidStasis/DarkShrine",
			"ResearchDarkArchonFullStartingEnergy/DarkShrine",
			"ResearchDarkArchonMindControl/DarkShrine",
			"Cancel"
		]
	},
	"Vorazun_Stargate": {
		name: "Stargate",
		icon: "btn-building-protoss-stargate",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"Phoenix/Stargate",
			"VoidRay/Stargate",
			"Oracle/Stargate",
			"Rally",
			"Cancel"
		]
	},
	"Vorazun_FleetBeacon": {
		name: "Fleet Beacon",
		icon: "btn-building-protoss-fleetbeacon",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"AnionPulseCrystals/FleetBeacon",
			"ResearchDoubleGravitonBeam/FleetBeacon",
			"ResearchTempestDisintegration/FleetBeacon",
			"ResearchOracleStasisWardUpgrade/FleetBeacon",
			"Cancel"
		]
	},
	"Vorazun_DarkPylon": {
		name: "Dark Pylon",
		icon: "btn-building-protoss-darkpylon",
		race: PROTOSS,
		commander: "Vorazun",
		type: BUILDING,
		commands: [
			"DarkPylonRecall/DarkPylon",
			"Cancel"
		]
	},
	"Karax": {
		name: "Karax",
		keywords: "Master Phase-Smith",
		icon: "btn-upgrade-karax-chronowave",
		race: PROTOSS,
		commander: "Karax",
		type: COMMANDER,
		defaultUnit: "Karax_Probe"
	},
	"Karax_Probe": {
		name: "Probe",
		icon: "btn-unit-protoss-probe",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe",
				"Spray"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Assimilator/Probe",
				"Pylon/Probe",
				"Gateway/Probe",
				"Forge/Probe",
				"ShieldBattery/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"KhaydarinMonolith/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"TwilightCouncil/Probe",
				"Stargate/Probe",
				"RoboticsFacility/Probe",
				"FleetBeacon/Probe",
				"RoboticsBay/Probe",
				"Cancel"
			]
		}
	},
	"Karax_Zealot": {
		name: "Sentinel",
		keywords: "Zealot",
		icon: "btn-unit-protoss-zealot-purifier",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: [
			"Charge/ZealotPurifier"
		]
	},
	"Karax_Sentry": {
		name: "Energizer",
		keywords: "Sentry",
		icon: "btn-unit-protoss-sentry-purifier",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: [
			"VoidSentryChronoBeam/SentryPurifier",
			"EnergizerReclamation/SentryPurifier",
			"VoidSentryPhasingMode/SentryPurifier",
			"VoidSentryMobileMode/SentryPurifier"
		]
	},
	"Karax_Immortal": {
		name: "Immortal",
		icon: "btn-unit-protoss-immortal",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: [
			"ImmortalOverload/Immortal",
			"ImmortalShakurasShadowCannon/Immortal"
		]
	},
	"Karax_Observer": {
		name: "Observer",
		icon: "btn-unit-protoss-observer",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: [
			"MorphtoObserverSiege/Observer",
			"MorphtoObserver/Observer"
		]
	},
	"Karax_Colossus": {
		name: "Colossus",
		icon: "btn-unit-protoss-colossus-purifier",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: []
	},
	"Karax_Phoenix": {
		name: "Mirage",
		keywords: "Phoenix",
		icon: "btn-unit-protoss-phoenix-purifier",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: [
			"GravitonBeam/PhoenixPurifier",
			"Cancel"
		]
	},
	"Karax_Carrier": {
		name: "Carrier",
		icon: "btn-unit-protoss-carrierhero",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: [
			"Interceptor/Carrier",
			"RepairDrones/Carrier",
			"Cancel"
		]
	},
	"Karax_PurifierBeam": {
		name: "Purifier Beam",
		icon: "btn-ability-spearofadun-purifierbeam",
		race: PROTOSS,
		commander: "Karax",
		type: UNIT,
		commands: []
	},
	"Karax_Nexus": {
		name: "Nexus",
		icon: "btn-building-protoss-nexus",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Rally",
			"TimeWarp/Nexus",
			"Cancel"
		]
	},
	"Karax_Assimilator": {
		name: "Assimilator",
		icon: "btn-building-protoss-assimilator",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Karax_Pylon": {
		name: "Pylon",
		icon: "btn-building-protoss-pylon",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Karax_Gateway": {
		name: "Gateway",
		keywords: "Warp Gate",
		icon: "btn-building-protoss-gateway",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: {
			"Gateway": [
				"Zealot",
				"Sentry",
				"Rally",
				"UpgradeToWarpGate/Gateway",
				"Cancel"
			],
			"Warp Gate": [
				"Zealot",
				"Sentry",
				"MorphBackToGateway/WarpGate",
				"Cancel"
			]
		}
	},
	"Karax_ShieldBattery": {
		name: "Shield Battery",
		icon: "btn-building-protoss-shieldbattery",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"Stop",
			"ShieldBatteryRecharge/ShieldBattery",
			"ShieldBatteryStructureBarrier/ShieldBattery",
			"Cancel"
		]
	},
	"Karax_Forge": {
		name: "Forge",
		icon: "btn-building-protoss-forge",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"ProtossGroundWeaponsLevel1/Forge",
			"ProtossGroundArmorLevel1/Forge",
			"ProtossShieldsLevel1/Forge",
			"ResearchKaraxTurretRange/Forge",
			"ResearchKaraxTurretAttackSpeed/Forge",
			"ResearchStructureBarrier/Forge",
			"Cancel"
		]
	},
	"Karax_PhotonCannon": {
		name: "Photon Cannon",
		icon: "btn-building-protoss-photoncannon",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"Karax_Monolith": {
		name: "Khaydarin Monolith",
		icon: "btn-building-protoss-khaydarinmonolithaiur",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"Karax_CyberneticsCore": {
		name: "Cybernetics Core",
		icon: "btn-building-protoss-cyberneticscore",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"ProtossAirWeaponsLevel1/CyberneticsCore",
			"ProtossAirArmorLevel1/CyberneticsCore",
			"ResearchWarpGate/CyberneticsCore",
			"Cancel"
		]
	},
	"Karax_TwilightCouncil": {
		name: "Twilight Council",
		icon: "btn-building-protoss-twilightcouncil",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"ResearchCharge/TwilightCouncil",
			"ResearchDragoonRange/TwilightCouncil",
			"ResearchWhirlwind/TwilightCouncil",
			"ResearchDragoonChassis/TwilightCouncil",
			"Cancel"
		]
	},
	"Karax_RoboticsFacility": {
		name: "Robotics Facility",
		icon: "btn-building-protoss-roboticsfacility",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"Immortal/RoboticsFacility",
			"Colossus/RoboticsFacility",
			"Observer/RoboticsFacility",
			"Rally",
			"Cancel"
		]
	},
	"Karax_RoboticsBay": {
		name: "Robotics Bay",
		icon: "btn-building-protoss-roboticssupportbay",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"ResearchGraviticBooster/RoboticsBay",
			"ResearchExtendedThermalLance/RoboticsBay",
			"ResearchReaverIncreasedScarabCount/RoboticsBay",
			"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay",
			"Cancel"
		]
	},
	"Karax_Stargate": {
		name: "Stargate",
		icon: "btn-building-protoss-stargate",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"Phoenix/Stargate",
			"VoidRay/Stargate",
			"Rally",
			"Cancel"
		]
	},
	"Karax_FleetBeacon": {
		name: "Fleet Beacon",
		icon: "btn-building-protoss-fleetbeacon",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: [
			"AnionPulseCrystals/FleetBeacon",
			"ResearchDoubleGravitonBeam/FleetBeacon",
			"ResearchTempestDisintegration/FleetBeacon",
			"Cancel"
		]
	},
	"Karax_SolarForge": {
		name: "Solar Forge",
		icon: "btn-building-protoss-solarforge",
		race: PROTOSS,
		commander: "Karax",
		type: BUILDING,
		commands: {
			"Solar Forge": [
				"ResearchSolarEfficiencyLevel1/SolarForge",
				"ResearchSOARepairBeamExtraTarget/SolarForge",
				"ResearchSOAOrbitalStrikeUpgrade/SolarForge",
				"ResearchSOASolarLanceUpgrade/SolarForge",
				"Cancel"
			],
			"Destroyed": [
				"BrokenSolarForge/SolarForge"
			]
		}
	},
	"Alarak": {
		name: "Alarak",
		keywords: "Highlord of the Tal'darim",
		icon: "btn-upgrade-protoss-alarak-empoweraoeattacks",
		race: PROTOSS,
		commander: "Alarak",
		type: COMMANDER,
		defaultUnit: "Alarak_Probe"
	},
	"Alarak_Alarak": {
		name: "Alarak",
		keywords: "Highlord of the Tal'darim",
		icon: "btn-unit-protoss-alarak",
		race: PROTOSS,
		commander: "Alarak",
		type: HERO,
		commands: {
			"Alarak": [
				"AlarakDeadlyCharge",
				"AlarakKnockback",
				"AlarakEmpower"
			],
			"Alarak’s Beacon": [
				"Rally",
				"AlarakDeadlyCharge",
				"AlarakKnockback",
				"AlarakEmpower"
			]
		},
		overrides: {
			"Rally": {
				y: 2
			}
		}
	},
	"Alarak_Probe": {
		name: "Probe",
		icon: "btn-unit-protoss-alarak-taldarim-probe",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe",
				"Spray"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Assimilator/Probe",
				"Pylon/Probe",
				"Gateway/Probe",
				"Forge/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"TwilightCouncil/Probe",
				"RoboticsFacility/Probe",
				"TemplarArchive/Probe",
				"RoboticsBay/Probe",
				"Cancel"
			]
		}
	},
	"Alarak_Supplicant": {
		name: "Supplicant",
		icon: "btn-unit-protoss-alarak-taldarim-supplicant",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: []
	},
	"Alarak_Stalker": {
		name: "Slayer",
		keywords: "Stalker",
		icon: "btn-unit-protoss-alarak-taldarim-stalker",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: [
			"Blink/Stalker"
		]
	},
	"Alarak_Sentry": {
		name: "Havoc",
		keywords: "Sentry",
		icon: "btn-unit-protoss-alarak-taldarim-sentry",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: [
			"TargetLock/Monitor",
			"SentryTaldarimForceField/Monitor"
		]
	},
	"Alarak_HighTemplar": {
		name: "Ascendant",
		keywords: "High Templar",
		icon: "btn-unit-protoss-alarak-taldarim-hightemplar",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: [
			"VoidHighTemplarPsiOrb/HighTemplarTaldarim",
			"VoidHighTemplarMindBlast/HighTemplarTaldarim",
			"AscendantSacrifice/HighTemplarTaldarim"
		]
	},
	"Alarak_Immortal": {
		name: "Vanguard",
		keywords: "Immortal",
		icon: "btn-unit-protoss-alarak-taldarim-immortal",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: []
	},
	"Alarak_Colossus": {
		name: "Wrathwalker",
		keywords: "Colossus",
		icon: "btn-unit-protoss-alarak-taldarim-colossus",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: []
	},
	"Alarak_WarpPrism": {
		name: "War Prism",
		keywords: "Warp Prism",
		icon: "btn-unit-protoss-alarak-taldarim-warpprism",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: [
			"ACAlarakPhasingMode/WarpPrismTaldarim",
			"ACAlarakTransportMode/WarpPrismTaldarim",
			"BunkerLoad",
			"BunkerUnloadAll"
		]
	},
	"Alarak_VoidRay": {
		name: "Destroyer",
		keywords: "Void Ray",
		icon: "btn-unit-protoss-alarak-taldarim-voidray",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: []
	},
	"Alarak_Mothership": {
		name: "Mothership",
		icon: "btn-unit-protoss-alarak-taldarim-mothership",
		race: PROTOSS,
		commander: "Alarak",
		type: UNIT,
		commands: [
			"SOAMothershipLineAttack/SOAMothershipv4",
			"AlarakMothershipMassTeleport/SOAMothershipv4"
		]
	},
	"Alarak_Nexus": {
		name: "Nexus",
		icon: "btn-unit-protoss-alarak-taldarim-nexus",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Rally",
			"TimeWarp/Nexus",
			"Cancel"
		]
	},
	"Alarak_Assimilator": {
		name: "Assimilator",
		icon: "btn-unit-protoss-alarak-taldarim-assimilator",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Alarak_Pylon": {
		name: "Pylon",
		icon: "btn-unit-protoss-alarak-taldarim-pylon",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Alarak_Gateway": {
		name: "Gateway",
		keywords: "Warp Gate",
		icon: "btn-unit-protoss-alarak-taldarim-gateway",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: {
			"Gateway": [
				"Zealot",
				"Sentry",
				"Stalker",
				"HighTemplar",
				"Rally",
				"UpgradeToWarpGate/Gateway",
				"Cancel"
			],
			"Warp Gate": [
				"Zealot",
				"Sentry",
				"Stalker",
				"HighTemplar",
				"MorphBackToGateway/WarpGate",
				"Cancel"
			]
		}
	},
	"Alarak_Forge": {
		name: "Forge",
		icon: "btn-unit-protoss-alarak-taldarim-forge",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"ProtossGroundWeaponsLevel1/Forge",
			"ProtossGroundArmorLevel1/Forge",
			"ProtossShieldsLevel1/Forge",
			"ResearchKaraxTurretRange/Forge",
			"ResearchKaraxTurretAttackSpeed/Forge",
			"Cancel"
		]
	},
	"Alarak_PhotonCannon": {
		name: "Photon Cannon",
		icon: "btn-unit-protoss-alarak-taldarim-photoncannon",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"Alarak_CyberneticsCore": {
		name: "Cybernetics Core",
		icon: "btn-unit-protoss-alarak-taldarim-cyberneticscore",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"ProtossAirWeaponsLevel1/CyberneticsCore",
			"ProtossAirArmorLevel1/CyberneticsCore",
			"ResearchAlarakTargetLockBuff/CyberneticsCore",
			"ResearchWarpGate/CyberneticsCore",
			"Cancel"
		]
	},
	"Alarak_TwilightCouncil": {
		name: "Death Council",
		keywords: "Twilight Council",
		icon: "btn-unit-protoss-alarak-taldarim-twilightcouncil",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"ResearchCharge/TwilightCouncil",
			"ResearchDragoonRange/TwilightCouncil",
			"ResearchWhirlwind/TwilightCouncil",
			"ResearchDragoonChassis/TwilightCouncil",
			"Cancel"
		]
	},
	"Alarak_TemplarArchives": {
		name: "Ascendant Archives",
		keywords: "Templar Archives",
		icon: "btn-unit-protoss-alarak-taldarim-templararchives",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"ResearchPsiStorm/TemplarArchive",
			"ResearchHighTemplarEnergyUpgrade/TemplarArchive",
			"ResearchHealingPsionicStorm/TemplarArchive",
			"Cancel"
		]
	},
	"Alarak_RoboticsFacility": {
		name: "Robotics Facility",
		icon: "btn-unit-protoss-alarak-taldarim-roboticsfacility",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"Immortal/RoboticsFacility",
			"Colossus/RoboticsFacility",
			"WarpinDisruptor/RoboticsFacility",
			"Rally",
			"Cancel"
		]
	},
	"Alarak_RoboticsBay": {
		name: "Robotics Bay",
		icon: "btn-unit-protoss-alarak-taldarim-roboticssupportbay",
		race: PROTOSS,
		commander: "Alarak",
		type: BUILDING,
		commands: [
			"ResearchGraviticBooster/RoboticsBay",
			"ResearchExtendedThermalLance/RoboticsBay",
			"ResearchReaverIncreasedScarabCount/RoboticsBay",
			"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay",
			"Cancel"
		]
	},
	"Fenix": {
		name: "Fenix",
		keywords: "Purifier Executor, Talandar",
		icon: "btn-progression-protoss-fenix-1-zealotsuit",
		race: PROTOSS,
		commander: "Fenix",
		type: COMMANDER,
		defaultUnit: "Fenix_Probe"
	},
	"Fenix_Fenix": {
		name: "Fenix",
		keywords: "Purifier Executor, Talandar, Praetor Armor, Solarite Dragoon, Cybros Arbiter",
		icon: "btn-unit-protoss-fenix",
		race: PROTOSS,
		commander: "Fenix",
		type: HERO,
		commands: {
			"Praetor Armor": [
				"FenixThunderousChargeCoop/FenixCoop",
				"FenixWhirlwind/FenixCoop",
				"VoidShieldCapacitor/FenixCoop"
			],
			"Solarite Dragoon": [
				...data.common.basic,
				"FenixDragoonChargedBuster/FenixDragoon",
				"FenixDragoonAirBomb/FenixDragoon",
				"FenixDragoonArsenalOvercharge/FenixDragoon"
			],
			"Cybros Arbiter": [
				...data.common.basic,
				"FenixArbiterStasisField/FenixArbiter",
				"FenixArbiterCloakField/FenixArbiter",
				"ArbiterMPRecall/FenixArbiter"
			]
		}
	},
	"Fenix_Probe": {
		name: "Probe",
		icon: "btn-unit-collection-purifier-probe",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe",
				"Spray"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Assimilator/Probe",
				"Pylon/Probe",
				"Gateway/Probe",
				"Forge/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"TwilightCouncil/Probe",
				"Stargate/Probe",
				"RoboticsFacility/Probe",
				"FleetBeacon/Probe",
				"RoboticsBay/Probe",
				"Cancel"
			]
		}
	},
	"Fenix_Zealot": {
		name: "Legionnaire",
		keywords: "Zealot",
		icon: "btn-unit-collection-purifier-zealot",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"Charge/ZealotPurifier"
		]
	},
	"Fenix_Adept": {
		name: "Adept",
		icon: "btn-unit-collection-purifier-adept",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: []
	},
	"Fenix_Sentry": {
		name: "Conservator",
		keywords: "Sentry",
		icon: "btn-unit-collection-purifier-sentry",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"FenixSentryGuardianZone/SentryFenix",
			"VoidSentryPhasingMode/SentryFenix",
			"VoidSentryMobileMode/SentryFenix"
		]
	},
	"Fenix_Immortal": {
		name: "Immortal",
		icon: "btn-unit-collection-purifier-immortal",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"ImmortalOverload/Immortal"
		]
	},
	"Fenix_Observer": {
		name: "Observer",
		icon: "btn-unit-collection-purifier-observer",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"MorphtoObserverSiege/Observer",
			"MorphtoObserver/Observer"
		]
	},
	"Fenix_Colossus": {
		name: "Colossus",
		icon: "btn-unit-collection-purifier-colossus",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: []
	},
	"Fenix_Disruptor": {
		name: "Disruptor",
		icon: "btn-unit-collection-purifier-disruptor",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"FenixPurificationNova/Disruptor"
		]
	},
	"Fenix_Scout": {
		name: "Scout",
		icon: "btn-unit-protoss-scout-purifier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: []
	},
	"Fenix_Carrier": {
		name: "Carrier",
		icon: "btn-unit-collection-purifier-carrier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"Interceptor/Carrier",
			"Cancel"
		]
	},
	"Fenix_ProbeChampion": {
		name: "Probius",
		keywords: "Probe",
		icon: "btn-unit-collection-purifier-probe",
		race: PROTOSS,
		commander: "Fenix",
		type: OTHER,
		commands: {
			"Probius": [
				"FenixProbiusProbe00/FenixProbiusProbe",
				"FenixProbiusProbe01/FenixProbiusProbe",
				"FenixProbiusProbe02/FenixProbiusProbe",
				"FenixProbiusProbe03/FenixProbiusProbe",
				"FenixProbiusProbe04/FenixProbiusProbe",
				"FenixProbiusProbe10/FenixProbiusProbe",
				"FenixProbiusProbe11/FenixProbiusProbe",
				"FenixProbiusProbe12/FenixProbiusProbe",
				"FenixProbiusProbe13/FenixProbiusProbe",
				"FenixProbiusProbe14/FenixProbiusProbe",
				"FenixProbiusProbe20/FenixProbiusProbe",
				"FenixProbiusProbe21/FenixProbiusProbe",
				"FenixProbiusProbe22/FenixProbiusProbe",
				"FenixProbiusProbe23/FenixProbiusProbe",
				"FenixProbiusProbe24/FenixProbiusProbe"
			],
			"Build Structure": [
				"FenixProbiusProbe00/FenixProbiusProbe",
				"FenixProbiusProbe01/FenixProbiusProbe",
				"FenixProbiusProbe02/FenixProbiusProbe",
				"FenixProbiusProbe03/FenixProbiusProbe",
				"FenixProbiusProbe04/FenixProbiusProbe",
				"FenixProbiusProbe10/FenixProbiusProbe",
				"FenixProbiusProbe11/FenixProbiusProbe",
				"FenixProbiusProbe12/FenixProbiusProbe",
				"FenixProbiusProbe13/FenixProbiusProbe",
				"FenixProbiusProbe14/FenixProbiusProbe",
				"FenixProbiusProbe20/FenixProbiusProbe",
				"FenixProbiusProbe21/FenixProbiusProbe",
				"FenixProbiusProbe22/FenixProbiusProbe",
				"FenixProbiusProbe23/FenixProbiusProbe",
				"FenixProbiusProbe24/FenixProbiusProbe"
			],
			"Build Advanced Structure": [
				"FenixProbiusProbe00/FenixProbiusProbe",
				"FenixProbiusProbe01/FenixProbiusProbe",
				"FenixProbiusProbe02/FenixProbiusProbe",
				"FenixProbiusProbe03/FenixProbiusProbe",
				"FenixProbiusProbe04/FenixProbiusProbe",
				"FenixProbiusProbe10/FenixProbiusProbe",
				"FenixProbiusProbe11/FenixProbiusProbe",
				"FenixProbiusProbe12/FenixProbiusProbe",
				"FenixProbiusProbe13/FenixProbiusProbe",
				"FenixProbiusProbe14/FenixProbiusProbe",
				"FenixProbiusProbe20/FenixProbiusProbe",
				"FenixProbiusProbe21/FenixProbiusProbe",
				"FenixProbiusProbe22/FenixProbiusProbe",
				"FenixProbiusProbe23/FenixProbiusProbe",
				"FenixProbiusProbe24/FenixProbiusProbe"
			]
		}
	},
	"Fenix_ZealotChampion": {
		name: "Kaldalis",
		keywords: "Zealot, Legionnaire",
		icon: "btn-unit-protoss-champion-zealot-purifier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"FenixKaldalisZealotCharge/FenixKaldalisZealot"
		]
	},
	"Fenix_AdeptChampion": {
		name: "Talis",
		keywords: "Adept",
		icon: "btn-unit-protoss-champion-adept-purifier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"FenixTalisAdeptBounceShot/FenixTalisAdept"
		]
	},
	"Fenix_ImmortalChampion": {
		name: "Taldarin",
		keywords: "Immortal",
		icon: "btn-unit-protoss-champion-immortal-purifier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"ImmortalOverload/FenixTaldarinImmortal"
		]
	},
	"Fenix_ColossusChampion": {
		name: "Warbringer",
		keywords: "Colossus",
		icon: "btn-unit-protoss-champion-colossus-purifier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"FenixWarbringerColossusPowerShot/FenixWarbringerColossus"
		]
	},
	"Fenix_ScoutChampion": {
		name: "Mojo",
		keywords: "Scout",
		icon: "btn-unit-protoss-champion-scout-purifier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"FenixMojoMissiles/FenixMojoScout"
		]
	},
	"Fenix_CarrierChampion": {
		name: "Clolarion",
		keywords: "Carrier",
		icon: "btn-unit-protoss-champion-carrier-purifier",
		race: PROTOSS,
		commander: "Fenix",
		type: UNIT,
		commands: [
			"FenixClolarionInterceptor/FenixClolarionCarrier",
			"FenixClolarionBomberDummy/FenixClolarionCarrier",
			"Cancel"
		]
	},
	"Fenix_Nexus": {
		name: "Nexus",
		icon: "btn-unit-protoss-fenix-purifier-nexus",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Rally",
			"TimeWarp/Nexus",
			"Cancel"
		]
	},
	"Fenix_Assimilator": {
		name: "Assimilator",
		icon: "btn-unit-protoss-fenix-purifier-assimilator",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Fenix_Pylon": {
		name: "Pylon",
		icon: "btn-unit-protoss-fenix-purifier-pylon",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Fenix_Gateway": {
		name: "Gateway",
		keywords: "Warp Gate",
		icon: "btn-unit-protoss-fenix-purifier-gateway",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: {
			"Gateway": [
				"Zealot",
				"Sentry",
				"Stalker",
				"Rally",
				"UpgradeToWarpGate/Gateway",
				"Cancel"
			],
			"Warp Gate": [
				"Zealot",
				"Sentry",
				"Stalker",
				"MorphBackToGateway/WarpGate",
				"Cancel"
			]
		}
	},
	"Fenix_Forge": {
		name: "Forge",
		icon: "btn-unit-protoss-fenix-purifier-forge",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"ProtossGroundWeaponsLevel1/Forge",
			"ProtossGroundArmorLevel1/Forge",
			"ProtossShieldsLevel1/Forge",
			"ResearchKaraxTurretRange/Forge",
			"ResearchKaraxTurretAttackSpeed/Forge",
			"ResearchStructureBarrier/Forge",
			"Cancel"
		]
	},
	"Fenix_PhotonCannon": {
		name: "Photon Cannon",
		icon: "btn-unit-protoss-fenix-purifier-photoncannon",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"Cancel"
		]
	},
	"Fenix_CyberneticsCore": {
		name: "Cybernetics Core",
		icon: "btn-unit-protoss-fenix-purifier-cyberneticscore",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"ProtossAirWeaponsLevel1/CyberneticsCore",
			"ProtossAirArmorLevel1/CyberneticsCore",
			"ResearchAlarakTargetLockBuff/CyberneticsCore",
			"ResearchWarpGate/CyberneticsCore",
			"Cancel"
		]
	},
	"Fenix_TwilightCouncil": {
		name: "Twilight Council",
		icon: "btn-unit-protoss-fenix-purifier-twilightcouncil",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"ResearchCharge/TwilightCouncil",
			"ResearchDragoonRange/TwilightCouncil",
			"ResearchWhirlwind/TwilightCouncil",
			"ResearchDragoonChassis/TwilightCouncil",
			"Cancel"
		]
	},
	"Fenix_RoboticsFacility": {
		name: "Robotics Facility",
		icon: "btn-unit-protoss-fenix-purifier-roboticsfacility",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"Immortal/RoboticsFacility",
			"Colossus/RoboticsFacility",
			"Observer/RoboticsFacility",
			"WarpinDisruptor/RoboticsFacility",
			"Rally",
			"Cancel"
		]
	},
	"Fenix_RoboticsBay": {
		name: "Robotics Bay",
		icon: "btn-unit-protoss-fenix-purifier-roboticssupportbay",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"ResearchGraviticBooster/RoboticsBay",
			"ResearchExtendedThermalLance/RoboticsBay",
			"ResearchReaverIncreasedScarabCount/RoboticsBay",
			"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay",
			"FenixImmortalResearchDetonationShot/RoboticsBay",
			"ResearchFenixWarbringerColossusPowerShot/RoboticsBay",
			"Cancel"
		]
	},
	"Fenix_Stargate": {
		name: "Stargate",
		icon: "btn-unit-protoss-fenix-purifier-stargate",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"Phoenix/Stargate",
			"VoidRay/Stargate",
			"Rally",
			"Cancel"
		]
	},
	"Fenix_FleetBeacon": {
		name: "Fleet Beacon",
		icon: "btn-unit-protoss-fenix-purifier-fleetbeacon",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"AnionPulseCrystals/FleetBeacon",
			"ResearchDoubleGravitonBeam/FleetBeacon",
			"ResearchTempestDisintegration/FleetBeacon",
			"ResearchOracleStasisWardUpgrade/FleetBeacon",
			"Cancel"
		]
	},
	"Fenix_PurifierConclave": {
		name: "Purifier Conclave",
		icon: "btn-unit-protoss-fenix-purifier-conclave",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: {
			"Purifier Conclave": [
				"FenixKaldalisZealotDownloadUpgrade",
				"FenixTalisAdeptDownloadUpgrade",
				"FenixTaldarinImmortalDownloadUpgrade",
				"FenixWarbringerColossusDownloadUpgrade",
				"FenixMojoScoutDownloadUpgrade",
				"FenixClolarionCarrierDownloadUpgrade",
				"Cancel"
			],
			"Destroyed": [
				"BrokenFenixAltarOfPsiStorms/FenixAltarOfPsiStorms"
			]
		}
	},
	"Fenix_PurifierDataCore": {
		name: "Purifier Data Core",
		icon: "btn-building-purifier-datacore",
		race: PROTOSS,
		commander: "Fenix",
		type: BUILDING,
		commands: [
			"DownloadBackupPart1/CybrosEscortDownloader",
			"DownloadBackupPart2/CybrosEscortDownloader",
			"DownloadBackupPart3/CybrosEscortDownloader"
		]
	},
	"Zeratul": {
		name: "Zeratul",
		keywords: "Dark Prelate",
		icon: "btn-progression-zeratul-01-powerofthexelnaga",
		race: PROTOSS,
		commander: "Zeratul",
		type: COMMANDER,
		defaultUnit: "Zeratul_Probe"
	},
	"Zeratul_Zeratul": {
		name: "Zeratul",
		keywords: "Dark Prelate, Dark Templar",
		icon: "btn-unit-protoss-zeratulcoop",
		race: PROTOSS,
		commander: "Zeratul",
		type: HERO,
		commands: {
			"Zeratul": [
				"ZeratulBlink/ZeratulCoop",
				"ZeratulSummonVoidSeeker/ZeratulCoop",
				"ZeratulShadowCleave/ZeratulCoop",
				"ProphecyVision/ZeratulCoop"
			],
			"Zeratul’s Beacon": [
				"Rally"
			]
		},
		overrides: {
			"Rally": {
				y: 2
			}
		}
	},
	"Zeratul_Probe": {
		name: "Xel’Naga Precursor",
		keywords: "Probe",
		icon: "btn-unit-protoss-zeratulprobe",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: {
			"Probe": [
				"GatherProt",
				"ReturnCargo",
				"ProtossBuild/Probe",
				"ProtossBuildAdvanced/Probe",
				"Spray"
			],
			"Build Structure": [
				"Nexus/Probe",
				"Gateway/Probe",
				"CyberneticsCore/Probe",
				"PhotonCannon/Probe",
				"Cancel"
			],
			"Build Advanced Structure": [
				"RoboticsFacility/Probe",
				"RoboticsBay/Probe",
				"DarkShrine/Probe",
				"Cancel"
			]
		}
	},
	"Zeratul_Stalker": {
		name: "Xel’Naga Ambusher",
		keywords: "Stalker",
		icon: "btn-unit-protoss-zeratulstalker",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"Blink/ZeratulStalker"
		]
	},
	"Zeratul_Sentry": {
		name: "Xel’Naga Shieldguard",
		keywords: "Sentry",
		icon: "btn-unit-protoss-zeratulsentry",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"VoidSentryShieldRepair/ZeratulSentry",
			"ZeratulReflectionShield/ZeratulSentry"
		]
	},
	"Zeratul_DarkTemplar": {
		name: "Void Templar",
		keywords: "Dark Templar",
		icon: "btn-unit-protoss-zeratuldarktemplar",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"Blink/ZeratulDarkTemplar"
		]
	},
	"Zeratul_Immortal": {
		name: "Xel’Naga Enforcer",
		keywords: "Immortal",
		icon: "btn-unit-protoss-zeratulimmortal",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"ImmortalOverload/ZeratulImmortal"
		]
	},
	"Zeratul_Observer": {
		name: "Xel’Naga Watcher",
		keywords: "Observer",
		icon: "btn-unit-protoss-zeratulobserver",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"MorphtoObserverSiege/ZeratulObserver",
			"MorphtoObserver/ZeratulObserver"
		]
	},
	"Zeratul_Disruptor": {
		name: "Xel’Naga Abrogator",
		keywords: "Disruptor",
		icon: "btn-unit-protoss-zeratuldisruptor",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"ZeratulPurificationNovaTargeted/ZeratulDisruptor"
		]
	},
	"Zeratul_WarpPrism": {
		name: "Xel’Naga Void Array",
		keywords: "Warp Prism",
		icon: "btn-unit-protoss-zeratulwarpprism",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: {
			"Flight Mode": [
				"PhasingMode/ZeratulWarpPrism",
				"ZeratulWarpPrismSelectVoidRift",
			],
			"Wormhole Mode": [
				...data.common.basic,
				"TransportMode/ZeratulWarpPrismPhasing",
				"ZeratulWarpPrismSelectVoidRift",
				"WarpPrismLoad",
				"ZeratulWarpPrismUnload/ZeratulWarpPrismPhasing",
				"ZeratulWarpPrismAutoUnloadOn/ZeratulWarpPrismPhasing",
				"ZeratulWarpPrismAutoUnloadOff/ZeratulWarpPrismPhasing"
			]
		}
	},
	"Zeratul_VoidSuppressionCrystal": {
		name: "Void Suppression Crystal",
		icon: "btn-ability-zeratul-topbar-voidsuppressioncrystal",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: []
	},
	"Zeratul_AvatarForm": {
		name: "Avatar of Form",
		icon: "btn-unit-protoss-zeratulconstructform",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: {
			"Avatar of Form": [
				"EntropicBlast/ZeratulXelNagaConstructCyan",
				"ZeratulXelNagaConstructPsiStorm/ZeratulXelNagaConstructCyan",
				"ZeratulXelNagaConstructPsiBlast/ZeratulXelNagaConstructCyan"
			],
			"Charged Crystal": [
				...data.common.basic
			]
		}
	},
	"Zeratul_AvatarEssence": {
		name: "Avatar of Essence",
		icon: "btn-unit-protoss-zeratulconstructessence",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"ZeratulXelNagaConstructDevolve/ZeratulXelNagaConstruct"
		]
	},
	"Zeratul_Zealot": {
		name: "Zealot",
		icon: "btn-unit-protoss-zeratulzealot",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"Charge/ZeratulSummonZealot",
			"VoidZealotWhirlwind/ZeratulSummonZealot"
		]
	},
	"Zeratul_Telbrus": {
		name: "Telbrus",
		keywords: "High Templar",
		icon: "btn-unit-protoss-zeratulhightemplarhero",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"Feedback/ZeratulSummonKarass",
			"PsiStormTelbrus/ZeratulSummonKarass"
		]
	},
	"Zeratul_DarkArchon": {
		name: "Dark Archon",
		icon: "btn-unit-protoss-darkarchon",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"ZeratulDarkArchonMaelstrom/ZeratulDarkArchon",
			"ZeratulDarkArchonMindControl/ZeratulDarkArchon"
		]
	},
	"Zeratul_Serdath": {
		name: "Serdath",
		keywords: "Dark Archon",
		icon: "btn-unit-protoss-zeratuldarkarchonhero",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: [
			"ZeratulDarkArchonMaelstrom/ZeratulHeroDarkArchon",
			"ZeratulDarkArchonMindControl/ZeratulHeroDarkArchon"
		]
	},
	"Zeratul_VoidRay": {
		name: "Void Ray",
		icon: "btn-unit-protoss-zeratulvoidray",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: []
	},
	"Zeratul_Zoraya": {
		name: "Zoraya",
		keywords: "Void Ray",
		icon: "btn-unit-protoss-zeratulvoidrayhero",
		race: PROTOSS,
		commander: "Zeratul",
		type: UNIT,
		commands: []
	},
	"Zeratul_Nexus": {
		name: "Ancient Nexus",
		icon: "btn-building-protoss-zeratulnexus",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"Probe/Nexus",
			"Assimilator/Nexus",
			"TimeWarp/Nexus",
			"Cancel"
		]
	},
	"Zeratul_Assimilator": {
		name: "Ancient Assimilator",
		icon: "btn-building-protoss-zeratulassimilator",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Zeratul_Gateway": {
		name: "Xel’Naga Passageway",
		keywords: "Gateway",
		icon: "btn-building-protoss-zeratulgateway",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"StalkerZeratul/ZeratulGateway",
			"SentryZeratul/ZeratulGateway",
			"DarkTemplarZeratul/ZeratulGateway",
			"Rally",
			"Cancel"
		]
	},
	"Zeratul_PhotonCannon": {
		name: "Tesseract Cannon",
		keywords: "Photon Cannon",
		icon: "btn-building-protoss-zeratulphotoncannon",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"ZeratulPhaseCannonProjectionPassive/ZeratulPhotonCannon",
			"ZeratulStructureBarrier/ZeratulPhotonCannon",
			"Cancel"
		]
	},
	"Zeratul_Monolith": {
		name: "Tesseract Monolith",
		icon: "btn-building-protoss-zeratulmonolith",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			...data.common.tower,
			"ZeratulKhaydarinMonolithWarp/ZeratulKhaydarinMonolith",
			"ZeratulStructureBarrier/ZeratulKhaydarinMonolith",
			"Cancel"
		]
	},
	"Zeratul_CyberneticsCore": {
		name: "Core Forge",
		keywords: "Cybernetics Core",
		icon: "btn-building-protoss-zeratulcyberneticscore",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Zeratul_DarkShrine": {
		name: "Void Shrine",
		keywords: "Dark Shrine",
		icon: "btn-building-protoss-zeratuldarkshrine",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Zeratul_RoboticsFacility": {
		name: "Constructs Facility",
		keywords: "Robotics Facility",
		icon: "btn-building-protoss-zeratulroboticsfacility",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"ImmortalZeratul/ZeratulRoboticsFacility",
			"ZeratulWarpinDisruptor/ZeratulRoboticsFacility",
			"WarpInZeratulWarpPrism/ZeratulRoboticsFacility",
			"ZeratulObserver/ZeratulRoboticsFacility",
			"Rally",
			"Cancel"
		]
	},
	"Zeratul_RoboticsBay": {
		name: "Constructs Bay",
		keywords: "Robotics Bay",
		icon: "btn-building-protoss-zeratulroboticssupportbay",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"Cancel"
		]
	},
	"Zeratul_ArtifactReserve": {
		name: "Artifact Reserve",
		icon: "btn-building-protoss-zeratulartifactrepo",
		race: PROTOSS,
		commander: "Zeratul",
		type: BUILDING,
		commands: [
			"ZeratulMapWideStasis/ZeratulACArtifact"
		]
	}
};

data.commands={
	"Move": {
		name: "Move",
		hotkey: "M",
		icon: "btn-command-move",
		mask: true,
		y: 0,
		x: 0
	},
	"Stop": {
		name: "Stop",
		hotkey: "S",
		hotkey_NRS: "O",
		icon: "btn-command-stop",
		mask: true,
		y: 0,
		x: 1
	},
	"MoveHoldPosition": {
		name: "Hold Position",
		hotkey: "H",
		icon: "btn-command-holdposition",
		y: 0,
		x: 2
	},
	"MovePatrol": {
		name: "Patrol",
		hotkey: "P",
		icon: "btn-command-patrol",
		mask: true,
		y: 0,
		x: 3
	},
	"Attack":{
		name: "Attack",
		hotkey: "A",
		hotkey_NRS: "K",
		icon: "btn-command-attack",
		mask: true,
		y: 0,
		x: 4
	},
	"GatherProt": {
		name: "Gather",
		hotkey: "G",
		icon: "btn-ability-terran-gather",
		mask: true,
		y: 1,
		x: 0
	},
	"GhostHoldFire/Ghost": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"GhostHoldFire/NovaHero": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"GhostHoldFire/NovaCoop": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 3
	},
	"GhostHoldFire/Ghost_BlackOps": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"GhostHoldFire/NovaStoneHeroic": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"SpectreHoldFire/Spectre": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"GhostMengskHoldFire/GhostMengsk": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"WeaponsFree/Ghost": {
		name: "Weapons Free",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"WeaponsFree/NovaHero": {
		name: "Weapons Free",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"WeaponsFree/NovaCoop": {
		name: "Weapons Free",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 4
	},
	"WeaponsFree/Ghost_BlackOps": {
		name: "Weapons Free",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"WeaponsFree/NovaStoneHeroic": {
		name: "Weapons Free",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"SpectreWeaponsFree/Spectre": {
		name: "Weapons Free",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"WeaponsFreeMengsk/GhostMengsk": {
		name: "Weapons Free",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"LurkerHoldFire/LurkerBurrowed": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "LurkerHoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"LurkerHoldFire/LurkerMP": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "LurkerHoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"LurkerCancelHoldFire/LurkerBurrowed": {
		name: "Cancel Hold Fire",
		hotkey: "G",
		hotkeySet: "LurkerHoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"LurkerCancelHoldFire/LurkerMP": {
		name: "Cancel Hold Fire",
		hotkey: "G",
		hotkeySet: "LurkerHoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"LurkerCancelHoldFire/LurkerStetmannBurrowed": {
		name: "Hold Fire",
		hotkey: "F",
		hotkeySet: "LurkerHoldFire",
		icon: "btn-ability-terran-holdfire",
		mask: true,
		y: 1,
		x: 2
	},
	"LurkerHoldFire/LurkerStetmannBurrowed": {
		name: "Cancel Hold Fire",
		hotkey: "G",
		hotkeySet: "LurkerHoldFire",
		icon: "btn-ability-terran-weaponsfree",
		mask: true,
		y: 1,
		x: 3
	},
	"ReturnCargo": {
		name: "Return Cargo",
		hotkey: "C",
		icon: "btn-command-returncargo",
		mask: true,
		y: 1,
		x: 1
	},
	"AdvancedConstructionAuto/SCV": {
		name: "Advanced Construction",
		hotkey: "O",
		hotkey_NRS: "J",
		icon: "talent-swann-level08-improvedscvs",
		mask: false,
		y: 1,
		x: 2
	},
	"TerranBuild/SCV": {
		name: "Build Structure",
		hotkey: "B",
		icon: "btn-command-terran-buildstructure",
		mask: true,
		y: 2,
		x: 0
	},
	"TerranBuildAdvanced/SCV": {
		name: "Build Advanced Structure",
		hotkey: "V",
		hotkey_NRS: "N",
		icon: "btn-command-terran-buildadvancedstructure",
		mask: true,
		y: 2,
		x: 1
	},
	"TerranBuild/HHSCV": {
		name: "Build Structure",
		hotkey: "B",
		icon: "btn-command-terran-buildstructure",
		mask: true,
		y: 2,
		x: 0
	},
	"TerranBuildAdvanced/HHSCV": {
		name: "Build Advanced Structure",
		hotkey: "V",
		hotkey_NRS: "N",
		icon: "btn-command-terran-buildadvancedstructure",
		mask: true,
		y: 2,
		x: 1
	},
	"TerranBuild/TychusSCV": {
		name: "Build Structure",
		hotkey: "B",
		icon: "btn-command-terran-buildstructure",
		mask: true,
		y: 2,
		x: 0
	},
	"TerranBuild/SCVMengsk": {
		name: "Build Structure",
		hotkey: "B",
		icon: "btn-command-terran-buildstructure",
		mask: true,
		y: 2,
		x: 0
	},
	"TerranBuildAdvanced/SCVMengsk": {
		name: "Build Advanced Structure",
		hotkey: "V",
		hotkey_NRS: "N",
		icon: "btn-command-terran-buildadvancedstructure",
		mask: true,
		y: 2,
		x: 1
	},
	"TerranBuild/SISCV": {
		name: "Build Structure",
		hotkey: "B",
		icon: "btn-command-terran-buildstructure",
		mask: true,
		y: 2,
		x: 0
	},
	"TerranBuildAdvanced/SISCV": {
		name: "Build Advanced Structure",
		hotkey: "V",
		hotkey_NRS: "N",
		icon: "btn-command-terran-buildadvancedstructure",
		mask: true,
		y: 2,
		x: 1
	},
	"ZergBuild/Drone": {
		name: "Basic Mutation",
		hotkey: "B",
		icon: "btn-ability-zerg-basicmutation",
		mask: true,
		y: 2,
		x: 0
	},
	"ZergBuildAdvanced/Drone": {
		name: "Advanced Mutation",
		hotkey: "V",
		hotkey_NRS: "N",
		icon: "btn-ability-zerg-advancedmutation",
		mask: true,
		y: 2,
		x: 1
	},
	"ZergBuild/DroneStetmann": {
		name: "Basic Mutation",
		hotkey: "B",
		icon: "btn-ability-zerg-basicmutation",
		mask: true,
		y: 2,
		x: 0
	},
	"ZergBuildAdvanced/DroneStetmann": {
		name: "Advanced Mutation",
		hotkey: "V",
		hotkey_NRS: "N",
		icon: "btn-ability-zerg-advancedmutation",
		mask: true,
		y: 2,
		x: 1
	},
	"ProtossBuild/Probe": {
		name: "Warp In Structure",
		hotkey: "B",
		icon: "btn-command-protoss-buildstructure",
		mask: true,
		y: 2,
		x: 0
	},
	"ProtossBuildAdvanced/Probe": {
		name: "Warp In Advanced Structure",
		hotkey: "V",
		hotkey_NRS: "N",
		icon: "btn-command-protoss-buildadvancedstructure",
		mask: true,
		y: 2,
		x: 1
	},
	"Repair": {
		name: "Repair",
		hotkey: "R",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-repair",
		mask: true,
		y: 2,
		x: 2
	},
	"RepairStetmann": {
		name: "Repair",
		hotkey: "E",
		icon: "btn-ability-terran-repair",
		mask: true,
		y: 2,
		x: 2
	},
	"Spray": {
		name: "Spray",
		hotkey: "Y",
		icon: "btn-command-spray",
		mask: true,
		y: 2,
		x: 3
	},
	"Halt": {
		name: "Halt",
		hotkey: "T",
		icon: "btn-command-cancel",
		mask: true,
		y: 2,
		x: 3
	},
	"Cancel": {
		name: "Cancel",
		hotkey: "Escape",
		hotkey_NRS: "F12",
		icon: "btn-command-cancel",
		mask: true,
		y: 2,
		x: 4
	},
	"SelectBuilder": {
		name: "Select Builder",
		hotkey: "Q",
		hotkey_NRS: "Z",
		hotkey_SC1: "I",
		icon: "btn-upgrade-terran-weaponrefit",
		mask: false,
		y: 1,
		x: 3
	},
	"Rally": {
		name: "Set Rally Point",
		hotkey: "Y",
		hotkey_SC1: "R",
		icon: "btn-ability-terran-setrallypoint",
		mask: true,
		y: 1,
		x: 4
	},
	"RallySCV": {
		name: "Set Worker Rally Point",
		hotkey: "Y",
		icon: "btn-ability-terran-setrallypoint",
		mask: true,
		y: 1,
		x: 4
	},
	"RallyStetmannBuilding": {
		name: "Set Rally Point",
		hotkey: "Y",
		icon: "btn-ability-terran-setrallypoint",
		mask: true,
		y: 1,
		x: 4
	},
	"Lift": {
		name: "Lift Off",
		hotkey: "L",
		hotkey_NRS: "F",
		icon: "btn-ability-terran-liftoff",
		mask: true,
		y: 2,
		x: 3
	},
	"Land": {
		name: "Land",
		hotkey: "L",
		hotkey_NRS: "F",
		icon: "btn-ability-terran-land",
		mask: true,
		y: 2,
		x: 3
	},
	"BurrowDown": {
		name: "Burrow",
		hotkey: "D",
		icon: "btn-ability-zerg-burrow-color",
		mask: false,
		y: 2,
		x: 3
	},
	"BurrowUp": {
		name: "Unburrow",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-upburrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"CommandCenter/SCV": {
		name: "Build Command Center",
		hotkey: "C",
		icon: "btn-building-terran-commandcenter",
		mask: false,
		y: 0,
		x: 0
	},
	"Refinery/SCV": {
		name: "Build Refinery",
		hotkey: "R",
		hotkey_NRS: "I",
		icon: "btn-building-terran-refinery",
		mask: false,
		y: 0,
		x: 1
	},
	"SupplyDepot/SCV": {
		name: "Build Supply Depot",
		hotkey: "S",
		hotkey_NRS: "P",
		icon: "btn-building-terran-supplydepot",
		mask: false,
		y: 0,
		x: 2
	},
	"Barracks/SCV": {
		name: "Build Barracks",
		hotkey: "B",
		icon: "btn-building-terran-barracks",
		mask: false,
		y: 1,
		x: 0
	},
	"EngineeringBay/SCV": {
		name: "Build Engineering Bay",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-building-terran-engineeringbay",
		mask: false,
		y: 1,
		x: 1
	},
	"Bunker/SCV": {
		name: "Build Bunker",
		hotkey: "U",
		icon: "btn-building-terran-bunker",
		mask: false,
		y: 2,
		x: 0
	},
	"PerditionTurret/SCV": {
		name: "Build Perdition Turret",
		hotkey: "P",
		hotkey_NRS: "L",
		icon: "btn-unit-terran-perditionturret",
		mask: false,
		y: 1,
		x: 2
	},
	"MissileTurret/SCV": {
		name: "Build Missile Turret",
		hotkey: "T",
		hotkey_NRS: "M",
		icon: "btn-building-terran-missileturret",
		mask: false,
		y: 2,
		x: 1
	},
	"SensorTower/SCV": {
		name: "Build Sensor Tower",
		hotkey: "N",
		hotkey_NRS: "O",
		icon: "btn-building-terran-sensordome",
		mask: false,
		y: 2,
		x: 2
	},
	"HiveMindEmulator/SCV": {
		name: "Build Hive Mind Emulator\nBuild Psi Disrupter",
		hotkey: "I",
		hotkey_NRS: "H",
		icon: "btn-building-terran-hivemindemulator",
		mask: false,
		y: 2,
		x: 3
	},
	"BuildKelMorianRocketTurret/SCV": {
		name: "Build Devastation Turret",
		hotkey: "G",
		icon: "btn-tips-flamingbetty",
		mask: false,
		y: 2,
		x: 2
	},
	"GhostAcademy/SCV": {
		name: "Build Ghost Academy",
		hotkey: "G",
		icon: "btn-building-terran-ghostacademy",
		mask: false,
		y: 0,
		x: 0
	},
	"MercCompound/SCV": {
		name: "Build Merc Compound",
		hotkey: "M",
		hotkey_NRS: "R",
		icon: "btn-building-terran-merccompound",
		mask: false,
		y: 0,
		x: 1
	},
	"Factory/SCV": {
		name: "Build Factory",
		hotkey: "F",
		hotkey_NRS: "O",
		icon: "btn-building-terran-factory",
		mask: false,
		y: 1,
		x: 0
	},
	"Armory/SCV": {
		name: "Build Armory",
		hotkey: "A",
		hotkey_NRS: "M",
		icon: "btn-building-terran-armory",
		mask: false,
		y: 1,
		x: 1
	},
	"Starport/SCV": {
		name: "Build Starport",
		hotkey: "S",
		hotkey_NRS: "P",
		icon: "btn-building-terran-starport",
		mask: false,
		y: 2,
		x: 0
	},
	"FusionCore/SCV": {
		name: "Build Fusion Core",
		hotkey: "C",
		hotkey_NRS: "U",
		icon: "btn-building-terran-fusioncore",
		mask: false,
		y: 2,
		x: 1
	},
	"Stim": {
		name: "Use Stimpack",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-stimpack-color",
		mask: false,
		y: 2,
		x: 0
	},
	"D8Charge/Reaper": {
		name: "G-4 Cluster Bombs",
		hotkey: "G",
		icon: "btn-ability-terran-d8charge",
		mask: true,
		y: 2,
		x: 0
	},
	"KD8Charge/Reaper": {
		name: "KD8 Charge",
		hotkey: "D",
		icon: "btn-upgrade-terran-kd8chargeex3",
		mask: false,
		y: 2,
		x: 0
	},
	"NukeCalldown/Ghost": {
		name: "Tac Nuke Strike",
		hotkey: "N",
		icon: "btn-ability-terran-nuclearstrike-color",
		mask: false,
		y: 1,
		x: 0
	},
	"SpectreNukeCalldown/Spectre": {
		name: "Tac Nuke Strike",
		hotkey: "N",
		icon: "btn-ability-terran-nuclearstrike-color",
		mask: false,
		y: 2,
		x: 3
	},
	"Snipe/Ghost": {
		name: "Sniper Round",
		hotkey: "R",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-snipe-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ChannelSnipe/Ghost": {
		name: "Steady Targeting",
		hotkey: "R",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-snipe-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EMP/Ghost": {
		name: "EMP Round",
		hotkey: "E",
		hotkey_NRS: "U",
		icon: "btn-ability-terran-emp-color",
		mask: false,
		y: 2,
		x: 1
	},
	"UltrasonicPulse/Spectre": {
		name: "Ultrasonic Pulse",
		hotkey: "U",
		icon: "btn-ability-terran-ultrasonicpulse",
		mask: true,
		y: 2,
		x: 0
	},
	"Obliterate/Spectre": {
		name: "Psionic Lash",
		hotkey: "I",
		icon: "btn-techupgrade-terran-psioniclash",
		mask: true,
		y: 2,
		x: 1
	},
	"DOMGhostPersonalDefensiveMatrix/Ghost": {
		name: "Ionic Force Field",
		hotkey: "W",
		icon: "btn-upgrade-terran-nova-personaldefensivematrix",
		mask: false,
		y: 1,
		x: 1
	},
	"MedicHeal/Medic": {
		name: "Heal",
		hotkey: "E",
		hotkey_NRS: "X",
		icon: "btn-ability-terran-heal-color",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphToHellion/Hellion": {
		name: "Hellion Mode",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkeySet: "HellionModes",
		icon: "btn-unit-terran-hellion",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphToHellionTank/Hellion": {
		name: "Hellbat Mode",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkeySet: "HellionModes",
		icon: "btn-unit-terran-hellionbattlemode",
		mask: false,
		y: 2,
		x: 1
	},
	"SpiderMine/Vulture": {
		name: "Deploy Spider Mine",
		hotkey: "E",
		hotkey_NRS: "I",
		icon: "btn-upgrade-terran-spidermineex3",
		mask: false,
		y: 2,
		x: 0
	},
	"SpiderMineReplenish/Vulture": {
		name: "Replenish Spider Mine",
		hotkey: "R",
		hotkey_NRS: "L",
		icon: "btn-upgrade-raynor-replenishablemagazine",
		mask: false,
		y: 2,
		x: 1
	},
	"IgniteAfterburners/Vulture": {
		name: "Ignite Afterburners",
		hotkey: "B",
		hotkey_NRS: "J",
		hotkey_SC1: "J",
		icon: "btn-upgrade-terran-medivacemergencythrusters",
		mask: false,
		y: 2,
		x: 2
	},
	"WidowMineBurrow/WidowMine": {
		name: "Activate Mine",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkeySet: "WidowMineModes",
		icon: "btn-ability-terran-activatemine",
		mask: false,
		y: 2,
		x: 1
	},
	"WidowMineUnburrow/WidowMine": {
		name: "Deactivate Mine",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkeySet: "WidowMineModes",
		icon: "btn-ability-terran-deactivatemine",
		mask: false,
		y: 2,
		x: 2
	},
	"SiegeMode": {
		name: "Siege Mode",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkey_SC1: "O",
		hotkeySet: "TankModes",
		icon: "btn-unit-terran-siegetanksiegemode",
		mask: false,
		y: 2,
		x: 0
	},
	"Unsiege": {
		name: "Tank Mode",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkey_SC1: "O",
		hotkeySet: "TankModes",
		icon: "btn-unit-terran-siegetank",
		mask: false,
		y: 2,
		x: 1
	},
	"IgniteAfterburners/SiegeTank": {
		name: "Ignite Afterburners",
		hotkey: "B",
		hotkey_NRS: "J",
		hotkey_SC1: "J",
		icon: "btn-upgrade-terran-medivacemergencythrusters",
		mask: false,
		y: 2,
		x: 2
	},
	"LockOn/Cyclone": {
		name: "Lock On",
		hotkey: "C",
		icon: "btn-ability-terran-lockon",
		mask: false,
		y: 2,
		x: 0
	},
	"ArmorpiercingMode": {
		name: "High Impact Payload",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkey_SC1: "B",
		hotkeySet: "ThorModes",
		icon: "btn-unit-terran-thorsiegemode",
		mask: false,
		y: 2,
		x: 0
	},
	"ExplosiveMode": {
		name: "Explosive Payload",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		hotkeySet: "ThorModes",
		icon: "btn-unit-terran-thor",
		mask: false,
		y: 2,
		x: 1
	},
	"250mmStrikeCannons/Thor": {
		name: "250mm Strike Cannons",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-bombardmentstrike-color",
		mask: false,
		y: 2,
		x: 0
	},
	"SelfRepair/Thor": {
		name: "Emergency Repair",
		hotkey: "R",
		icon: "btn-techupgrade-terran-immortalityprotocol",
		mask: true,
		y: 2,
		x: 2
	},
	"SelfRepair/ThorWreckage": {
		name: "Emergency Repair",
		hotkey: "R",
		icon: "btn-techupgrade-terran-immortalityprotocol",
		mask: true,
		y: 2,
		x: 2
	},
	"FighterMode": {
		name: "Fighter Mode",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkeySet: "VikingModes",
		icon: "btn-unit-terran-vikingfighter",
		mask: false,
		y: 2,
		x: 0
	},
	"AssaultMode": {
		name: "Assault Mode",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkeySet: "VikingModes",
		icon: "btn-unit-terran-vikingassault",
		mask: false,
		y: 2,
		x: 1
	},
	"IgniteAfterburners/VikingAssault": {
		name: "Ignite Afterburners",
		hotkey: "B",
		hotkey_NRS: "J",
		hotkey_SC1: "J",
		icon: "btn-upgrade-terran-medivacemergencythrusters",
		mask: false,
		y: 2,
		x: 2
	},
	"Heal/Medivac": {
		name: "Heal",
		hotkey: "E",
		hotkey_NRS: "X",
		icon: "btn-ability-terran-heal-color",
		mask: false,
		y: 2,
		x: 0
	},
	"MedivacSpeedBoost/Medivac": {
		name: "Ignite Afterburners",
		hotkey: "B",
		icon: "btn-upgrade-terran-medivacemergencythrusters",
		mask: false,
		y: 2,
		x: 1
	},
	"LiberatorAGMode/Liberator": {
		name: "Defender Mode",
		hotkey: "E",
		hotkeySet: "LiberatorModes",
		icon: "btn-upgrade-terran-liberator-agmode",
		mask: false,
		y: 2,
		x: 0
	},
	"LiberatorAAMode/Liberator": {
		name: "Fighter Mode",
		hotkey: "D",
		hotkeySet: "LiberatorModes",
		icon: "btn-unit-terran-liberator",
		mask: false,
		y: 2,
		x: 1
	},
	"BuildAutoTurret/Raven": {
		name: "Build Auto-Turret",
		hotkey: "T",
		hotkey_NRS: "U",
		icon: "btn-building-terran-autoturret",
		mask: false,
		y: 2,
		x: 0
	},
	"AutoTurret/Raven": {
		name: "Build Auto-Turret",
		hotkey: "T",
		hotkey_NRS: "U",
		icon: "btn-building-terran-autoturret",
		mask: false,
		y: 2,
		x: 0
	},
	"BuildPointDefenseDrone/Raven": {
		name: "Build Point Defense Drone",
		hotkey: "D",
		hotkey_NRS: "I",
		icon: "btn-unit-terran-targetingdrone",
		mask: false,
		y: 2,
		x: 1
	},
	"RavenScramblerMissile/Raven": {
		name: "Interference Matrix",
		hotkey: "C",
		icon: "btn-upgrade-terran-interferencematrix",
		mask: false,
		y: 2,
		x: 1
	},
	"RavenShredderMissile/Raven": {
		name: "Anti-Armor Missile",
		hotkey: "R",
		icon: "btn-ability-terran-huntermissile-color",
		mask: false,
		y: 2,
		x: 2
	},
	"HunterSeekerMissile/Raven": {
		name: "Seeker Missile",
		hotkey: "R",
		hotkey_NRS: "L",
		icon: "btn-ability-terran-huntermissile-color",
		mask: false,
		y: 2,
		x: 2
	},
	"CloakOnBanshee": {
		name: "Cloak",
		hotkey: "C",
		hotkey_NRS: "L",
		hotkeySet: "Cloak",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 2,
		x: 0
	},
	"CloakOnLiberator": {
		name: "Cloak",
		hotkey: "C",
		hotkeySet: "Cloak",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 2,
		x: 2
	},
	"CloakOnBattlecruiser": {
		name: "Cloak",
		hotkey: "C",
		hotkeySet: "Cloak",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 2,
		x: 2
	},
	"CloakOff": {
		name: "Decloak",
		hotkey: "D",
		hotkey_NRS: "SemiColon",
		hotkey_SC1: "C",
		hotkeySet: "Cloak",
		icon: "btn-ability-terran-decloak-color",
		mask: false,
		y: 2,
		x: 1
	},
	"IgniteAfterburners/Banshee": {
		name: "Ignite Afterburners",
		hotkey: "B",
		hotkey_NRS: "J",
		hotkey_SC1: "J",
		icon: "btn-upgrade-terran-medivacemergencythrusters",
		mask: false,
		y: 2,
		x: 2
	},
	"WraithCloakOn/Wraith": {
		name: "Cloak",
		hotkey: "C",
		hotkeySet: "WraithCloak",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 2,
		x: 0
	},
	"WraithCloakOff/Wraith": {
		name: "Decloak",
		hotkey: "D",
		hotkeySet: "WraithCloak",
		icon: "btn-ability-terran-decloak-color",
		mask: false,
		y: 2,
		x: 1
	},
	"HerculesLoad/Hercules": {
		name: "Load",
		hotkey: "L",
		icon: "btn-ability-terran-load",
		mask: true,
		y: 2,
		x: 0
	},
	"HerculesUnloadAll/Hercules": {
		name: "Unload All",
		hotkey: "D",
		icon: "btn-ability-terran-unloadall",
		mask: true,
		y: 2,
		x: 1
	},
	"HyperjumpHercules/Hercules": {
		name: "Tactical Jump",
		hotkey: "T",
		icon: "btn-ability-terran-hercules-tacticaljump",
		mask: false,
		y: 2,
		x: 2
	},
	"NanoRepair/ScienceVessel": {
		name: "Nano-Repair",
		hotkey: "N",
		icon: "btn-upgrade-swann-nanorepair",
		mask: false,
		y: 2,
		x: 0
	},
	"Irradiate/ScienceVessel": {
		name: "Irradiate",
		hotkey: "R",
		icon: "btn-upgrade-swann-irradiate",
		mask: false,
		y: 2,
		x: 1
	},
	"DefensiveMatrixTarget/ScienceVessel": {
		name: "Defensive Matrix",
		hotkey: "D",
		icon: "btn-upgrade-swann-defensivematrix",
		mask: false,
		y: 2,
		x: 2
	},
	"YamatoGun": {
		name: "Yamato Cannon",
		hotkey: "Y",
		icon: "btn-ability-terran-yamatogun-color",
		mask: false,
		y: 2,
		x: 0
	},
	"MissilePods/Battlecruiser": {
		name: "Missile Pods",
		hotkey: "E",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-hurricane",
		mask: true,
		y: 2,
		x: 1
	},
	"DefensiveMatrix/Battlecruiser": {
		name: "Defensive Matrix",
		hotkey: "D",
		hotkey_NRS: "N",
		icon: "btn-ability-terran-defensivematrix",
		mask: true,
		y: 2,
		x: 2
	},
	"Hyperjump/Battlecruiser": {
		name: "Tactical Jump",
		hotkey: "T",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-terran-warpjump",
		mask: false,
		y: 2,
		x: 1
	},
	"IgniteAfterburners/Battlecruiser": {
		name: "Ignite Afterburners",
		hotkey: "B",
		hotkey_NRS: "J",
		hotkey_SC1: "J",
		icon: "btn-upgrade-terran-medivacemergencythrusters",
		mask: false,
		y: 2,
		x: 2
	},
	"HyperionVoidCoopHyperjump/HyperionVoidCoop": {
		name: "Hyperjump",
		hotkey: "Q",
		icon: "btn-ability-terran-warpjump",
		mask: false,
		y: 2,
		x: 0
	},
	"HyperionVoidCoopYamatoCannon/HyperionVoidCoop": {
		name: "Yamato Cannon",
		hotkey: "Y",
		icon: "btn-ability-terran-yamatogun-color",
		mask: false,
		y: 2,
		x: 1
	},
	"HyperionAdvancedPDD/HyperionVoidCoop": {
		name: "Point Defense Drone",
		hotkey: "D",
		hotkey_NRS: "R",
		hotkey_SC1: "R",
		icon: "talent-raynor-level05-pointdefensedrones",
		mask: false,
		y: 2,
		x: 2
	},
	"SCV": {
		name: "Train SCV",
		hotkey: "S",
		hotkey_NRS: "J",
		icon: "btn-unit-terran-scv",
		mask: false,
		y: 0,
		x: 0
	},
	"OrbitalCommand/CommandCenter": {
		name: "Upgrade to Orbital Command",
		hotkey: "B",
		hotkey_NRS: "O",
		icon: "btn-building-terran-surveillancestation",
		mask: false,
		y: 0,
		x: 3
	},
	"UpgradeToPlanetaryFortress/CommandCenter": {
		name: "Upgrade to Planetary Fortress",
		hotkey: "P",
		hotkey_NRS: "P",
		icon: "btn-building-terran-planetaryfortress",
		mask: false,
		y: 0,
		x: 4
	},
	"CommandCenterLoad": {
		name: "Load",
		hotkey: "O",
		hotkey_NRS: "A",
		icon: "btn-ability-terran-load",
		mask: true,
		y: 2,
		x: 0
	},
	"CommandCenterUnloadAll": {
		name: "Unload All",
		hotkey: "D",
		icon: "btn-ability-terran-unloadall",
		mask: true,
		y: 2,
		x: 1
	},
	"CalldownMULE/OrbitalCommand": {
		name: "Calldown: MULE",
		hotkey: "E",
		hotkey_NRS: "U",
		icon: "btn-unit-terran-mule",
		mask: false,
		y: 2,
		x: 0
	},
	"Scan/OrbitalCommand": {
		name: "Scanner Sweep",
		hotkey: "C",
		hotkey_NRS: "N",
		icon: "btn-ability-terran-scannersweep-color",
		mask: false,
		y: 2,
		x: 2
	},
	"SupplyDrop/OrbitalCommand": {
		name: "Calldown: Extra Supplies",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-terran-calldownextrasupplies-color",
		mask: false,
		y: 2,
		x: 1
	},
	"CalldownMULE/CommandCenter": {
		name: "Calldown: MULE",
		hotkey: "E",
		hotkey_NRS: "U",
		icon: "btn-unit-terran-mule",
		mask: false,
		y: 1,
		x: 2
	},
	"Scan/CommandCenter": {
		name: "Scanner Sweep",
		hotkey: "C",
		hotkey_NRS: "N",
		icon: "btn-ability-terran-scannersweep-color",
		mask: false,
		y: 1,
		x: 1
	},
	"StopPlanetaryFortress/PlanetaryFortress": {
		name: "Stop",
		hotkey: "P",
		icon: "btn-command-stop",
		mask: true,
		y: 0,
		x: 3
	},
	"Lower/SupplyDepot": {
		name: "Lower",
		hotkey: "R",
		hotkey_NRS: "O",
		icon: "btn-building-terran-supplydepotlowered",
		mask: false,
		y: 2,
		x: 0
	},
	"Raise/SupplyDepotLowered": {
		name: "Raise",
		hotkey: "R",
		hotkey_NRS: "O",
		icon: "btn-building-terran-supplydepot",
		mask: false,
		y: 2,
		x: 0
	},
	"Marine/Barracks": {
		name: "Train Marine",
		hotkey: "A",
		hotkey_NRS: "M",
		hotkey_SC1: "M",
		icon: "btn-unit-terran-marine",
		mask: false,
		y: 0,
		x: 0
	},
	"Reaper/Barracks": {
		name: "Train Reaper",
		hotkey: "R",
		hotkey_NRS: "P",
		hotkey_SC1: "E",
		icon: "btn-unit-terran-reaper",
		mask: false,
		y: 0,
		x: 1
	},
	"Marauder/Barracks": {
		name: "Train Marauder",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkey_SC1: "F",
		icon: "btn-unit-terran-marauder",
		mask: false,
		y: 0,
		x: 2
	},
	"Ghost/Barracks": {
		name: "Train Ghost",
		hotkey: "G",
		icon: "btn-unit-terran-ghost",
		mask: false,
		y: 0,
		x: 3
	},
	"Spectre/Barracks": {
		name: "Train Spectre",
		hotkey: "G",
		hotkey_NRS: "K",
		hotkey_SC1: "Q",
		icon: "btn-unit-terran-spectre",
		mask: false,
		y: 0,
		x: 3
	},
	"Firebat/Barracks": {
		name: "Train Firebat",
		hotkey: "F",
		hotkey_NRS: "B",
		icon: "btn-unit-terran-firebat",
		mask: false,
		y: 1,
		x: 1
	},
	"Medic/Barracks": {
		name: "Train Medic",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkey_SC1: "C",
		icon: "btn-unit-terran-medic",
		mask: false,
		y: 1,
		x: 0
	},
	"TechLabBarracks/Barracks": {
		name: "Build Tech Lab",
		hotkey: "X",
		hotkey_NRS: "L",
		hotkey_SC1: "Z",
		icon: "btn-building-terran-techlab",
		mask: false,
		y: 2,
		x: 0
	},
	"Reactor/Barracks": {
		name: "Build Reactor",
		hotkey: "C",
		hotkey_NRS: "SemiColon",
		hotkey_SC1: "X",
		icon: "btn-building-terran-reactor",
		mask: false,
		y: 2,
		x: 1
	},
	"TechReactorAI/Barracks": {
		name: "Build Tech Reactor",
		hotkey: "Z",
		hotkey_NRS: "Comma",
		hotkey_SC1: "S",
		icon: "btn-building-terran-techreactor",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchShieldWall/BarracksTechLab": {
		name: "Research Combat Shield",
		hotkey: "C",
		icon: "btn-techupgrade-terran-combatshield-color",
		mask: false,
		y: 0,
		x: 0
	},
	"Stimpack/BarracksTechLab": {
		name: "Research Stimpack",
		hotkey: "T",
		icon: "btn-ability-terran-stimpack-color",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchPunisherGrenades/BarracksTechLab": {
		name: "Research Concussive Shells",
		hotkey: "G",
		icon: "btn-ability-terran-punishergrenade-color",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchMarauderMagrailMunitions/BarracksTechLab": {
		name: "Research Magrail Munitions",
		hotkey: "S",
		icon: "btn-upgrade-terran-magrailmunitions",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchIncineratorGauntlets/BarracksTechLab": {
		name: "Research Incinerator Gauntlets",
		hotkey: "I",
		icon: "btn-upgrade-raynor-incineratorgauntlets",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchJuggernautPlating/BarracksTechLab": {
		name: "Research Juggernaut Plating",
		hotkey: "J",
		icon: "btn-upgrade-raynor-juggernautplating",
		mask: false,
		y: 1,
		x: 1
	},
	"TerranInfantryWeaponsLevel1/EngineeringBay": {
		name: "Upgrade Infantry Weapons",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkey_SC1: "W",
		icon: "btn-upgrade-terran-infantryweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"TerranInfantryArmorLevel1/EngineeringBay": {
		name: "Upgrade Infantry Armor",
		hotkey: "A",
		icon: "btn-upgrade-terran-infantryarmorlevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchHiSecAutoTracking/EngineeringBay": {
		name: "Research Hi-Sec Auto Tracking",
		hotkey: "H",
		icon: "btn-upgrade-terran-hisecautotracking",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchNeosteelFrame/EngineeringBay": {
		name: "Research Neosteel Frame",
		hotkey: "N",
		icon: "btn-upgrade-terran-neosteelframe",
		mask: false,
		y: 1,
		x: 0
	},
	"UpgradeBuildingArmorLevel1/EngineeringBay": {
		name: "Upgrade Neosteel Armor",
		hotkey: "B",
		icon: "btn-upgrade-terran-buildingarmor",
		mask: false,
		y: 1,
		x: 1
	},
	"ResearchFireSuppressionSystems/EngineeringBay": {
		name: "Research Fire Suppression Systems",
		hotkey: "F",
		icon: "btn-upgrade-swann-firesuppressionsystem",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchImprovedTurretAttackSpeed/EngineeringBay": {
		name: "Research KMC Auto-Loaders",
		hotkey: "R",
		icon: "btn-upgrade-swann-kmcautoloaders",
		mask: false,
		y: 2,
		x: 1
	},
	"BunkerLoad": {
		name: "Load",
		hotkey: "L",
		hotkey_NRS: "A",
		icon: "btn-ability-terran-load",
		mask: true,
		y: 2,
		x: 1
	},
	"BunkerUnloadAll": {
		name: "Unload All",
		hotkey: "D",
		hotkey_NRS: "D",
		hotkey_SC1: "U",
		icon: "btn-ability-terran-unloadall",
		mask: true,
		y: 2,
		x: 2
	},
	"Salvage/Bunker": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 3
	},
	"Salvage/MissileTurret": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"Salvage/KelMorianMissileTurret": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"Salvage/PerditionTurret": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"Salvage/PerditionTurretUnderground": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"Salvage/KelMorianGrenadeTurret": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"Salvage/NovaACLaserTurret": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"Salvage/TychusSCVAutoTurret": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 3
	},
	"BunkerMengskSalvage/BunkerDepotMengsk": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 3
	},
	"Salvage/ArtilleryMengsk": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 3
	},
	"Salvage/MissileTurretMengsk": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"Salvage/SIMissileTurret": {
		name: "Salvage",
		hotkey: "V",
		icon: "btn-ability-terran-salvage",
		mask: true,
		y: 2,
		x: 0
	},
	"MindControl/HiveMindEmulator": {
		name: "Mind Control",
		hotkey: "C",
		hotkey_NRS: "M",
		icon: "btn-ability-terran-scannersweep-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchPersonalCloaking/GhostAcademy": {
		name: "Research Personal Cloaking",
		hotkey: "C",
		hotkey_NRS: "L",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchEnhancedShockwaves/GhostAcademy": {
		name: "Research Enhanced Shockwaves",
		hotkey: "S",
		icon: "btn-ability-terran-electricfield",
		mask: false,
		y: 0,
		x: 1
	},
	"NukeArm/GhostAcademy": {
		name: "Arm Silo with Nuke",
		hotkey: "N",
		icon: "btn-ability-terran-armnuke",
		mask: false,
		y: 2,
		x: 0
	},
	"SpectreNukeArm/GhostAcademy": {
		name: "Arm Silo with Nuke",
		hotkey: "N",
		icon: "btn-ability-terran-armnuke",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaNukeArm/GhostAcademy": {
		name: "Arm Silo with Nuke",
		hotkey: "",
		icon: "btn-ability-terran-armnuke",
		mask: false,
		y: 2,
		x: 0
	},
	"Hellion/Factory": {
		name: "Build Hellion",
		hotkey: "E",
		hotkey_NRS: "H",
		hotkey_SC1: "V",
		icon: "btn-unit-terran-hellion",
		mask: false,
		y: 0,
		x: 0
	},
	"HellionTank/Factory": {
		name: "Build Hellbat",
		hotkey: "R",
		hotkey_NRS: "P",
		hotkey_SC1: "H",
		icon: "btn-unit-terran-hellionbattlemode",
		mask: false,
		y: 1,
		x: 0
	},
	"WidowMine/Factory": {
		name: "Build Widow Mine",
		hotkey: "D",
		icon: "btn-unit-terran-widowmine",
		mask: false,
		y: 0,
		x: 1
	},
	"Goliath/Factory": {
		name: "Build Goliath",
		hotkey: "G",
		icon: "btn-unit-terran-goliath",
		mask: false,
		y: 1,
		x: 2
	},
	"SiegeTank/Factory": {
		name: "Build Siege Tank",
		hotkey: "S",
		hotkey_NRS: "I",
		hotkey_SC1: "T",
		icon: "btn-unit-terran-siegetank",
		mask: false,
		y: 0,
		x: 3
	},
	"BuildCyclone/Factory": {
		name: "Build Cyclone",
		hotkey: "N",
		icon: "btn-unit-terran-cyclone",
		mask: false,
		y: 0,
		x: 2
	},
	"Thor/Factory": {
		name: "Build Thor",
		hotkey: "T",
		hotkey_NRS: "O",
		hotkey_SC1: "G",
		icon: "btn-unit-terran-thor",
		mask: false,
		y: 1,
		x: 1
	},
	"Predator/Factory": {
		name: "Build Predator",
		hotkey: "P",
		icon: "btn-unit-terran-predator",
		mask: false,
		y: 0,
		x: 3
	},
	"Vulture/Factory": {
		name: "Build Vulture",
		hotkey: "V",
		icon: "btn-unit-terran-vulture",
		mask: false,
		y: 1,
		x: 0
	},
	"Diamondback/Factory": {
		name: "Build Diamondback",
		hotkey: "D",
		hotkey_NRS: "M",
		icon: "btn-unit-terran-diamondback",
		mask: false,
		y: 1,
		x: 1
	},
	"WarHound/Factory": {
		name: "Build Warhound",
		hotkey: "R",
		icon: "btn-unit-terran-warhound",
		mask: false,
		y: 0,
		x: 2
	},
	"MicroBot/Factory": {
		name: "Sentry Bot",
		hotkey: "M",
		icon: "btn-unit-terran-ares",
		mask: false,
		y: 0,
		x: 4
	},
	"TechLabFactory/Factory": {
		name: "Build Tech Lab",
		hotkey: "X",
		hotkey_NRS: "L",
		hotkey_SC1: "Z",
		icon: "btn-building-terran-techlab",
		mask: false,
		y: 2,
		x: 0
	},
	"Reactor/Factory": {
		name: "Build Reactor",
		hotkey: "C",
		hotkey_NRS: "SemiColon",
		hotkey_SC1: "X",
		icon: "btn-building-terran-reactor",
		mask: false,
		y: 2,
		x: 1
	},
	"TechReactorAI/Factory": {
		name: "Build Tech Reactor",
		hotkey: "Z",
		hotkey_NRS: "Comma",
		hotkey_SC1: "S",
		icon: "btn-building-terran-techreactor",
		mask: false,
		y: 2,
		x: 0
	},
	"CampaignVehicles/Factory": {
		name: "Campaign Vehicles",
		hotkey: "A",
		icon: "btn-tips-armory",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchHighCapacityBarrels/FactoryTechLab": {
		name: "Research Infernal Pre-Igniter",
		hotkey: "I",
		icon: "btn-upgrade-terran-infernalpreigniter",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchHighCapacityBarrels/FactoryTechReactor": {
		name: "Research Infernal Pre-igniter",
		hotkey: "I",
		icon: "btn-upgrade-terran-infernalpreigniter",
		mask: false,
		y: 0,
		x: 0
	},
	"CycloneResearchLockOnDamageUpgrade/FactoryTechLab": {
		name: "Research Mag-Field Accelerator",
		hotkey: "R",
		icon: "btn-upgrade-terran-magfieldaccelerator",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchDrillClaws/FactoryTechLab": {
		name: "Research Drilling Claws",
		hotkey: "C",
		hotkey_NRS: "P",
		hotkey_SC1: "P",
		icon: "btn-upgrade-terran-researchdrillingclaws",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchSmartServos/FactoryTechLab": {
		name: "Research Smart Servos",
		hotkey: "S",
		icon: "btn-upgrade-terran-transformationservos",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchHellbatHellArmor/FactoryTechLab": {
		name: "Research Infernal Plating",
		hotkey: "H",
		icon: "btn-upgrade-swann-hellarmor",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchHellbatHellArmor/FactoryTechReactor": {
		name: "Research Infernal Plating",
		hotkey: "H",
		icon: "btn-upgrade-swann-hellarmor",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchImprovedSiegeMode/FactoryTechLab": {
		name: "Research Advanced Siege Tech",
		hotkey: "E",
		hotkey_NRS: "S",
		hotkey_SC1: "S",
		icon: "btn-upgrade-raynor-improvedsiegemode",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchImprovedSiegeMode/FactoryTechReactor": {
		name: "Research Ares-Class Targeting System",
		hotkey: "E",
		hotkey_SC1: "S",
		icon: "btn-upgrade-swann-aresclasstargetingsystem",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchMultiLockWeaponsSystem/FactoryTechLab": {
		name: "Research Lockdown Missiles",
		hotkey: "L",
		icon: "btn-upgrade-terran-nova-hellfiremissiles",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchMultiLockWeaponsSystem/FactoryTechReactor": {
		name: "Research Multi-Lock Weapons System",
		hotkey: "L",
		icon: "btn-upgrade-swann-multilockweaponsystem",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchMaelstromRounds/FactoryTechLab": {
		name: "Research Spider Mines",
		hotkey: "M",
		icon: "btn-upgrade-siegetank-spidermines",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchMaelstromRounds/FactoryTechReactor": {
		name: "Research Maelstrom Rounds",
		hotkey: "M",
		icon: "btn-upgrade-raynor-maelstromrounds",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchLockOnRangeUpgrade/FactoryTechLab": {
		name: "Research Graduating Range",
		hotkey: "R",
		icon: "btn-upgrade-terran-nova-siegetankrange",
		mask: false,
		y: 1,
		x: 1
	},
	"ResearchLockOnRangeUpgrade/FactoryTechReactor": {
		name: "Research Targeting Optics",
		hotkey: "R",
		icon: "btn-upgrade-swann-targetingoptics",
		mask: false,
		y: 1,
		x: 1
	},
	"ResearchCycloneLockOnDamageUpgrade/FactoryTechReactor": {
		name: "Research Mag-Field Accelerator",
		hotkey: "O",
		icon: "btn-upgrade-terran-magfieldaccelerator",
		mask: false,
		y: 1,
		x: 2
	},
	"Research330mmBarrageCannon/FactoryTechReactor": {
		name: "Research 330mm Barrage Cannon",
		hotkey: "C",
		hotkey_NRS: "N",
		icon: "btn-ability-terran-bombardmentstrike-color",
		mask: false,
		y: 1,
		x: 3
	},
	"TerranVehicleWeaponsLevel1/Armory": {
		name: "Upgrade Vehicle Weapons",
		hotkey: "E",
		hotkey_NRS: "A",
		hotkey_SC1: "W",
		icon: "btn-upgrade-terran-vehicleweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"TerranVehiclePlatingLevel1/Armory": {
		name: "Upgrade Vehicle Plating",
		hotkey: "V",
		hotkey_SC1: "P",
		icon: "btn-upgrade-terran-vehicleplatinglevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"TerranShipWeaponsLevel1/Armory": {
		name: "Upgrade Ship Weapons",
		hotkey: "S",
		icon: "btn-upgrade-terran-shipweaponslevel1",
		mask: false,
		y: 1,
		x: 0
	},
	"TerranShipPlatingLevel1/Armory": {
		name: "Upgrade Ship Plating",
		hotkey: "P",
		hotkey_SC1: "H",
		icon: "btn-upgrade-terran-shipplatinglevel1",
		mask: false,
		y: 1,
		x: 1
	},
	"TerranVehicleAndShipWeaponsLevel1/Armory": {
		name: "Upgrade Vehicle and Ship Weapons",
		hotkey: "E",
		hotkey_NRS: "A",
		hotkey_SC1: "W",
		icon: "btn-upgrade-terran-vehicleweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"TerranVehicleAndShipPlatingLevel1/Armory": {
		name: "Upgrade Vehicle and Ship Armor",
		hotkey: "V",
		hotkey_SC1: "P",
		icon: "btn-upgrade-terran-vehicleplatinglevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchVehicleWeaponRange/Armory": {
		name: "Research Advanced Optics",
		hotkey: "R",
		icon: "btn-upgrade-swann-vehiclerangeincrease",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchRegenerativeBioSteel/Armory": {
		name: "Research Regenerative Bio-Steel",
		hotkey: "B",
		icon: "btn-upgrade-swann-regenerativebiosteel",
		mask: false,
		y: 1,
		x: 1
	},
	"VikingFighter/Starport": {
		name: "Build Viking",
		hotkey: "V",
		hotkey_NRS: "K",
		hotkey_SC1: "W",
		icon: "btn-unit-terran-vikingfighter",
		mask: false,
		y: 0,
		x: 0
	},
	"Medivac/Starport": {
		name: "Build Medivac",
		hotkey: "D",
		hotkey_NRS: "M",
		icon: "btn-unit-terran-medivac",
		mask: false,
		y: 0,
		x: 1
	},
	"Banshee/Starport": {
		name: "Build Banshee",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-unit-terran-banshee",
		mask: false,
		y: 0,
		x: 4
	},
	"Battlecruiser/Starport": {
		name: "Build Battlecruiser",
		hotkey: "B",
		icon: "btn-unit-terran-battlecruiser",
		mask: false,
		y: 1,
		x: 0
	},
	"Wraith/Starport": {
		name: "Build Wraith",
		hotkey: "A",
		hotkey_NRS: "T",
		icon: "btn-unit-terran-wraith",
		mask: false,
		y: 1,
		x: 0
	},
	"BuildHercules/Starport": {
		name: "Build Hercules",
		hotkey: "H",
		icon: "btn-unit-terran-hercules",
		mask: false,
		y: 1,
		x: 1
	},
	"BuildScienceVessel/Starport": {
		name: "Build Science Vessel",
		hotkey: "S",
		icon: "btn-unit-terran-sciencevessel",
		mask: false,
		y: 0,
		x: 2
	},
	"Liberator/Starport": {
		name: "Build Liberator",
		hotkey: "N",
		hotkey_NRS: "I",
		icon: "btn-unit-terran-liberator",
		mask: false,
		y: 0,
		x: 2
	},
	"Raven/Starport": {
		name: "Build Raven",
		hotkey: "R",
		hotkey_NRS: "V",
		hotkey_SC1: "V",
		icon: "btn-unit-terran-raven",
		mask: false,
		y: 0,
		x: 3
	},
	"TechLabStarport/Starport": {
		name: "Build Tech Lab",
		hotkey: "X",
		hotkey_NRS: "L",
		hotkey_SC1: "Z",
		icon: "btn-building-terran-techlab",
		mask: false,
		y: 2,
		x: 0
	},
	"Reactor/Starport": {
		name: "Build Reactor",
		hotkey: "C",
		hotkey_NRS: "SemiColon",
		hotkey_SC1: "X",
		icon: "btn-building-terran-reactor",
		mask: false,
		y: 2,
		x: 1
	},
	"TechReactorAI/Starport": {
		name: "Build Tech Reactor",
		hotkey: "Z",
		hotkey_NRS: "Comma",
		hotkey_SC1: "S",
		icon: "btn-building-terran-techreactor",
		mask: false,
		y: 2,
		x: 0
	},
	"CampaignVehicles/Starport": {
		name: "Campaign Vehicles",
		hotkey: "A",
		icon: "btn-tips-armory",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchRapidReignitionSystem/StarportTechLab": {
		name: "Research Rapid Reignition System",
		hotkey: "R",
		icon: "btn-upgrade-terran-highcapacityfueltanks",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchRavenEnergyUpgrade/StarportTechLab": {
		name: "Research Corvid Reactor",
		hotkey: "T",
		icon: "btn-upgrade-terran-corvidreactor",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchBansheeCloak/StarportTechLab": {
		name: "Research Cloaking Field",
		hotkey: "C",
		hotkey_NRS: "L",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 0,
		x: 1
	},
	"BansheeSpeed/StarportTechLab": {
		name: "Research Hyperflight Rotors",
		hotkey: "B",
		icon: "btn-upgrade-terran-hyperflightrotors",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchBallisticRange/StarportTechLab": {
		name: "Research Advanced Ballistics",
		hotkey: "N",
		icon: "btn-upgrade-terran-advanceballistics",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchBansheeCloak/StarportTechReactor": {
		name: "Research Pulse Amplifier",
		hotkey: "C",
		icon: "btn-upgrade-swann-improvedburstlaser",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchShockwaveMissileBattery/StarportTechLab": {
		name: "Research Shockwave Missile Battery",
		hotkey: "S",
		icon: "btn-upgrade-raynor-shockwavemissilebattery",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchShockwaveMissileBattery/StarportTechReactor": {
		name: "Research Displacement Field",
		hotkey: "S",
		icon: "btn-upgrade-swann-displacementfield",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchPhobosClassWeaponsSystem/StarportTechLab": {
		name: "Research Phobos Weapons System",
		hotkey: "B",
		icon: "btn-upgrade-raynor-phobosclassweaponssystem",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchPhobosClassWeaponsSystem/StarportTechReactor": {
		name: "Research Improved Nano-Repair",
		hotkey: "B",
		icon: "btn-upgrade-swann-improvednanorepair",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchRipwaveMissiles/StarportTechLab": {
		name: "Research Ripwave Missiles",
		hotkey: "R",
		icon: "btn-upgrade-raynor-ripwavemissiles",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchRipwaveMissiles/StarportTechReactor": {
		name: "Research Defensive Matrix",
		hotkey: "R",
		icon: "btn-upgrade-swann-defensivematrix",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchMedivacCloakedHealBeam/StarportTechLab": {
		name: "Research Covert Triage",
		hotkey: "H",
		hotkey_NRS: "C",
		icon: "btn-upgrade-terran-nova-repairbeamcloak",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchSuperScience/StarportTechLab": {
		name: "Research Enhanced Manufacturing",
		hotkey: "U",
		icon: "btn-upgrade-terran-nova-superscience",
		mask: false,
		y: 1,
		x: 1
	},
	"ResearchBattlecruiserSpecializations/FusionCore": {
		name: "Research Weapon Refit",
		hotkey: "R",
		icon: "btn-ability-terran-yamatogun-color",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchRapidReignitionSystem/FusionCore": {
		name: "Research Rapid Reignition System",
		hotkey: "S",
		icon: "btn-upgrade-terran-highcapacityfueltanks",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchBallisticRange/FusionCore": {
		name: "Research Advanced Ballistics",
		hotkey: "N",
		icon: "btn-upgrade-terran-advanceballistics",
		mask: false,
		y: 0,
		x: 2
	},
	"HireKelmorianMiners/Barracks": {
		name: "War Pigs",
		hotkey: "P",
		icon: "btn-unit-terran-marinemercenary",
		mask: false,
		y: 1,
		x: 0
	},
	"HireHammerSecurities/Barracks": {
		name: "Hammer Securities",
		hotkey: "H",
		icon: "btn-unit-terran-maraudermercenary",
		mask: false,
		y: 1,
		x: 1
	},
	"HireDevilDogs/Barracks": {
		name: "Devil Dogs",
		hotkey: "L",
		icon: "btn-unit-terran-firebatmercenary",
		mask: false,
		y: 1,
		x: 2
	},
	"MercReaper/Barracks": {
		name: "Death Head",
		hotkey: "J",
		icon: "btn-unit-terran-deathhead",
		mask: false,
		y: 1,
		x: 3
	},
	"MercMedic/Barracks": {
		name: "Skibi’s Angels",
		hotkey: "B",
		icon: "btn-unit-terran-medicelite",
		mask: false,
		y: 1,
		x: 4
	},
	"Separatist/Barracks": {
		name: "Train Trooper",
		hotkey: "S",
		icon: "btn-unit-terran-dom-grunt",
		mask: false,
		y: 2,
		x: 0
	},
	"MercHellion/Factory": {
		name: "Outback Hunter",
		hotkey: "N",
		icon: "btn-unit-terran-outbackhunter",
		mask: false,
		y: 1,
		x: 0
	},
	"HireSpartanCompany/Factory": {
		name: "Spartan Company",
		hotkey: "C",
		icon: "btn-unit-terran-goliathmercenary",
		mask: false,
		y: 1,
		x: 1
	},
	"HireSiegeBreakers/Factory": {
		name: "Siege Breakers",
		hotkey: "K",
		icon: "btn-unit-terran-siegetankmercenary-tank",
		mask: false,
		y: 1,
		x: 2
	},
	"HireDuskWing/Starport": {
		name: "Dusk Wings",
		hotkey: "I",
		icon: "btn-unit-terran-bansheemercenary",
		mask: false,
		y: 1,
		x: 0
	},
	"HireHelsAngels/Starport": {
		name: "Hel’s Angels",
		hotkey: "A",
		icon: "btn-unit-terran-vikingmercenary-fighter",
		mask: false,
		y: 1,
		x: 1
	},
	"HireDukesRevenge/Starport": {
		name: "Jackson’s Revenge",
		hotkey: "U",
		icon: "btn-unit-terran-battlecruiserloki",
		mask: false,
		y: 1,
		x: 2
	},
	"HireKelmorianMiners/MercCompound": {
		name: "War Pigs",
		hotkey: "P",
		icon: "btn-unit-terran-marinemercenary",
		mask: false,
		y: 0,
		x: 0
	},
	"HireDevilDogs/MercCompound": {
		name: "Devil Dogs",
		hotkey: "D",
		icon: "btn-unit-terran-firebatmercenary",
		mask: false,
		y: 0,
		x: 1
	},
	"HireHammerSecurities/MercCompound": {
		name: "Hammer Securities",
		hotkey: "H",
		icon: "btn-unit-terran-maraudermercenary",
		mask: false,
		y: 0,
		x: 2
	},
	"HireSpartanCompany/MercCompound": {
		name: "Spartan Company",
		hotkey: "C",
		icon: "btn-unit-terran-goliathmercenary",
		mask: false,
		y: 0,
		x: 3
	},
	"HireSiegeBreakers/MercCompound": {
		name: "Siege Breakers",
		hotkey: "S",
		icon: "btn-unit-terran-siegetankmercenary-tank",
		mask: false,
		y: 1,
		x: 0
	},
	"HireHelsAngels/MercCompound": {
		name: "Hel’s Angels",
		hotkey: "A",
		icon: "btn-unit-terran-vikingmercenary-fighter",
		mask: false,
		y: 1,
		x: 1
	},
	"HireDuskWing/MercCompound": {
		name: "Dusk Wings",
		hotkey: "I",
		hotkey_SC1: "K",
		icon: "btn-unit-terran-bansheemercenary",
		mask: false,
		y: 1,
		x: 2
	},
	"HireDukesRevenge/MercCompound": {
		name: "Jackson’s Revenge",
		hotkey: "U",
		icon: "btn-unit-terran-battlecruiserloki",
		mask: false,
		y: 2,
		x: 0
	},
	"EnergyNova/Artifact": {
		name: "Energy Nova",
		hotkey: "V",
		icon: "btn-ability-terran-emp-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ImmortalityProtocol/ThorWreckage": {
		name: "Immortality Protocol",
		hotkey: "I",
		icon: "btn-techupgrade-terran-immortalityprotocol",
		mask: true,
		y: 2,
		x: 0
	},
	"SwannCommanderRebuild": {
		name: "Rebuild",
		hotkey: "R",
		icon: "btn-techupgrade-terran-immortalityprotocol",
		mask: true,
		y: 2,
		x: 2
	},
	"VespeneDrone/CommandCenter": {
		name: "Vespene Harvester",
		hotkey: "R",
		hotkey_SC1: "V",
		icon: "talent-swann-level05-vespenedrone",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchDrakkenLaserDrillBFG/DrakkenLaserDrillCoop": {
		name: "Upgrade Laser Drill Level 1",
		hotkey: "D",
		icon: "btn-tips-laserdrillcontrol",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchDrakkenLaserDrillNuke/DrakkenLaserDrillCoop": {
		name: "Upgrade Laser Drill Level 2",
		hotkey: "D",
		icon: "btn-tips-laserdrillcontrol",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaWeaponCanisterRifleSnipe/NovaHero": {
		name: "Break Neck\nSnipe\nPenetrating Blast\nDash Attack\nPlasma Shot\nFury of One",
		hotkey: "Q",
		icon: "btn-ability-terran-snipe-color",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaGadgetPulseGrenades/NovaHero": {
		name: "Pulse Grenade\nFlashbang Grenade\nStim Infusion\nHolo Decoy\nIonic Force Field",
		hotkey: "W",
		icon: "btn-upgrade-nova-pulsegrenade",
		mask: false,
		y: 2,
		x: 1
	},
	"ApolloCloakOnNova/NovaHero": {
		name: "Cloak\nBlink",
		hotkey: "C",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 2,
		x: 2
	},
	"NovaDomination/NovaHero": {
		name: "Domination",
		hotkey: "D",
		icon: "btn-ability-nova-domination",
		mask: false,
		y: 2,
		x: 3
	},
	"HeroNukeCalldown/NovaHero": {
		name: "Tac Nuke Strike",
		hotkey: "N",
		icon: "btn-ability-terran-nuclearstrike-color",
		mask: false,
		y: 2,
		x: 4
	},
	"NovaStoneTargetEnemy/NovaStoneHeroic": {
		name: "Target Enemy",
		hotkey: "T",
		icon: "btn-upgrade-terran-lazertargetingsystem",
		mask: false,
		y: 1,
		x: 0
	},
	"NovaWeaponImprovedCanisterRifleSnipe": {
		name: "Snipe\nPenetrating Blast",
		hotkey: "Q",
		icon: "btn-ability-terran-snipe-color",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaGadgetBoombots": {
		name: "Sabotage Drone\nBlink",
		hotkey: "E",
		icon: "btn-unit-terran-sabotagedroneblackops",
		mask: false,
		y: 2,
		x: 2
	},
	"NovaUnitNuke": {
		name: "Tac Nuke Strike\nHolo Decoy",
		hotkey: "R",
		hotkey_SC1: "Y",
		icon: "btn-ability-terran-nuclearstrike-color",
		mask: false,
		y: 2,
		x: 3
	},
	"NovaSwitchAssaultMode": {
		name: "Assault Mode\nStealth Mode",
		hotkey: "D",
		icon: "btn-upgrade-terran-nova-modeswapping",
		mask: false,
		y: 2,
		x: 4
	},
	"MarineSuperStimpack/Marine_BlackOps": {
		name: "Super Stimpack",
		hotkey: "T",
		icon: "btn-upgrade-nova-equipment-superstimppack",
		mask: false,
		y: 2,
		x: 0
	},
	"MagrailMunitions/Marine": {
		name: "Magrail Munitions",
		hotkey: "U",
		icon: "btn-upgrade-terran-magrailmunitions",
		mask: false,
		y: 2,
		x: 1
	},
	"MagrailMunitions/Marauder": {
		name: "Magrail Munitions",
		hotkey: "U",
		icon: "btn-upgrade-terran-magrailmunitions",
		mask: false,
		y: 2,
		x: 1
	},
	"MagrailMunitions/Marauder_BlackOps": {
		name: "Magrail Munitions",
		hotkey: "U",
		icon: "btn-upgrade-terran-magrailmunitions",
		mask: false,
		y: 2,
		x: 0
	},
	"Snipe_BlackOps/Ghost_BlackOps": {
		name: "Snipe",
		hotkey: "R",
		icon: "btn-ability-terran-snipe-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EMP/Ghost_BlackOps": {
		name: "EMP Round",
		hotkey: "E",
		hotkey_NRS: "U",
		icon: "btn-ability-terran-emp-color",
		mask: false,
		y: 2,
		x: 1
	},
	"MorphToHellion/HellionBlackOps": {
		name: "Hellion Mode",
		hotkey: "E",
		hotkeySet: "HellionModes",
		icon: "btn-unit-terran-hellionblackops",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphToHellbatBlackOps/HellionBlackOps": {
		name: "Hellbat Mode",
		hotkey: "D",
		hotkeySet: "HellionModes",
		icon: "btn-unit-terran-hellbatblackops",
		mask: false,
		y: 2,
		x: 1
	},
	"HellbatJumpJetAssault/HellionBlackOps": {
		name: "Jump Jet Assault",
		hotkey: "J",
		icon: "btn-upgrade-terran-jumpjets",
		mask: false,
		y: 2,
		x: 2
	},
	"SiegeTank_BlackOpsSiege": {
		name: "Siege Mode",
		hotkey: "E",
		hotkeySet: "TankModes",
		icon: "btn-unit-terran-siegetankblackops-sieged",
		mask: false,
		y: 2,
		x: 0
	},
	"SiegeTank_BlackOpsUnsiege": {
		name: "Tank Mode",
		hotkey: "D",
		hotkeySet: "TankModes",
		icon: "btn-unit-terran-siegetankblackops-tank",
		mask: false,
		y: 2,
		x: 1
	},
	"SpiderMine/Reaper": {
		name: "Deploy Spider Mine",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-upgrade-siegetank-spidermines",
		mask: false,
		y: 2,
		x: 1
	},
	"DeploySpiderMines/SiegeTank": {
		name: "Jump Jets\nDeploy Spider Mines",
		hotkey: "R",
		icon: "btn-upgrade-terran-jumpjets",
		mask: false,
		y: 2,
		x: 2
	},
	"DeploySpiderMinesRaven/Raven": {
		name: "Deploy Spider Mines",
		hotkey: "E",
		icon: "btn-upgrade-siegetank-spidermines",
		mask: false,
		y: 2,
		x: 3
	},
	"DeploySpiderMines/SiegeTank_BlackOps": {
		name: "Deploy Spider Mines",
		hotkey: "R",
		icon: "btn-upgrade-siegetank-spidermines",
		mask: false,
		y: 2,
		x: 2
	},
	"Liberator_BlackOpsMorphtoAG/Liberator_BlackOps": {
		name: "Defender Mode",
		hotkey: "E",
		hotkeySet: "RaidLiberatorModes",
		icon: "btn-unit-terran-liberator-agmodeblackops",
		mask: false,
		y: 2,
		x: 0
	},
	"Liberator_BlackOpsMorphtoAA/Liberator_BlackOps": {
		name: "Fighter Mode",
		hotkey: "D",
		hotkeySet: "RaidLiberatorModes",
		icon: "btn-unit-terran-liberatorblackops",
		mask: false,
		y: 2,
		x: 1
	},
	"BuildRailgunTurret/Raven": {
		name: "Deploy Railgun Turret",
		hotkey: "T",
		icon: "btn-unit-terran-autoturretblackops",
		mask: false,
		y: 2,
		x: 0
	},
	"AutoTurret/Raven_BlackOps": {
		name: "Build Railgun Turret",
		hotkey: "T",
		icon: "btn-unit-terran-autoturretblackops",
		mask: false,
		y: 2,
		x: 0
	},
	"BuildHealingDrone/Raven": {
		name: "Deploy Bio-Mechanical Repair Drone",
		hotkey: "D",
		icon: "btn-unit-biomechanicaldrone",
		mask: false,
		y: 2,
		x: 1
	},
	"PointDefenseDrone/Raven_BlackOps": {
		name: "Deploy Bio-Mechanical Repair Drone",
		hotkey: "D",
		icon: "btn-unit-biomechanicaldrone",
		mask: false,
		y: 2,
		x: 1
	},
	"InstantHunterSeekerMissile/Raven_BlackOps": {
		name: "Predator Missile",
		hotkey: "R",
		icon: "btn-ability-terran-huntermissile-color",
		mask: false,
		y: 2,
		x: 2
	},
	"Banshee_BlackOpsAirstrike/Banshee_BlackOps": {
		name: "Rocket Barrage",
		hotkey: "R",
		icon: "btn-upgrade-terran-nova-bansheemissilestrik",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaBoombotBurrow/NovaBoombot": {
		name: "Detonation",
		hotkey: "E",
		icon: "btn-upgrade-nova-droneexplosion",
		mask: false,
		y: 2,
		x: 0
	},
	"BioMechanicalHeal/HealingDrone": {
		name: "Bio-Mechanical Repair",
		hotkey: "E",
		icon: "btn-ability-terran-heal-color",
		mask: false,
		y: 2,
		x: 0
	},
	"DefensiveMatrixTarget/NovaDefensiveMatrixDrone": {
		name: "Defensive Matrix",
		hotkey: "D",
		icon: "btn-upgrade-swann-defensivematrix",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchNovaDetector/GhostAcademyNova": {
		name: "Research Ghost Visor",
		hotkey: "G",
		hotkey_NRS: "D",
		hotkey_SC1: "D",
		icon: "btn-upgrade-terran-nova-detector",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchNovaLifeRegen/GhostAcademyNova": {
		name: "Research Caduceus Reactor",
		hotkey: "C",
		hotkey_NRS: "F",
		hotkey_SC1: "F",
		icon: "btn-upgrade-terran-nova-liferegen",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchNovaShotgunBlastRange/GhostAcademyNova": {
		name: "Research Operational Efficiency",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-upgrade-terran-nova-snipeenergyrefund",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchNovaSnipeRefund/GhostAcademyNova": {
		name: "Research Infernal Projectiles",
		hotkey: "H",
		hotkey_NRS: "P",
		hotkey_SC1: "P",
		icon: "btn-upgrade-terran-nova-shotgunaoe",
		mask: false,
		y: 0,
		x: 3
	},
	"HercGrapple/HERC": {
		name: "Grapple",
		hotkey: "G",
		icon: "btn-tips-terran-penetrator",
		mask: false,
		y: 2,
		x: 0
	},
	"TornadoMissile/WarHound": {
		name: "Haywire Missiles",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-ability-terran-haywiremissile",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaAlarmBotEMP/NovaAlarmBot": {
		name: "EMP Blast",
		hotkey: "E",
		icon: "btn-ability-terran-emp-color",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaSonarPing/NovaSonarDrone": {
		name: "Sonar Ping",
		hotkey: "N",
		icon: "btn-status-radar",
		mask: true,
		y: 2,
		x: 0
	},
	"EMP/NovaSonarDrone": {
		name: "EMP Round",
		hotkey: "E",
		hotkey_NRS: "U",
		icon: "btn-ability-terran-emp-color",
		mask: false,
		y: 2,
		x: 1
	},
	"CommandCenter/HHSCV": {
		name: "Build Command Center",
		hotkey: "C",
		icon: "btn-building-hornerhan-commandcenter",
		mask: false,
		y: 0,
		x: 0
	},
	"Refinery/HHSCV": {
		name: "Build Refinery",
		hotkey: "R",
		icon: "btn-building-hornerhan-refinery",
		mask: false,
		y: 0,
		x: 1
	},
	"SupplyDepot/HHSCV": {
		name: "Build Supply Depot",
		hotkey: "S",
		hotkey_NRS: "P",
		icon: "btn-building-hornerhan-supplypod",
		mask: false,
		y: 0,
		x: 2
	},
	"BuildHHMercStarport/HHSCV": {
		name: "Build Assault Galleon",
		hotkey: "B",
		icon: "btn-building-hornerhan-assaultgalleon",
		mask: false,
		y: 1,
		x: 0
	},
	"HHMercCompound/HHSCV": {
		name: "Build Engineering Bay",
		hotkey: "E",
		icon: "btn-building-hornerhan-engineeringbay",
		mask: false,
		y: 1,
		x: 1
	},
	"MissileTurret/HHSCV": {
		name: "Build Missile Turret",
		hotkey: "T",
		hotkey_NRS: "M",
		icon: "btn-building-hornerhan-missileturret",
		mask: false,
		y: 2,
		x: 1
	},
	"BuildHHBomberPlatform/HHSCV": {
		name: "Build Strike Fighter Platform",
		hotkey: "F",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-building-hornerhan-bomberplatform",
		mask: false,
		y: 1,
		x: 0
	},
	"HHArmory/HHSCV": {
		name: "Build Armory",
		hotkey: "A",
		icon: "btn-building-hornerhan-armory",
		mask: false,
		y: 1,
		x: 1
	},
	"FusionCore/HHSCV": {
		name: "Build Fusion Core",
		hotkey: "C",
		hotkey_NRS: "U",
		icon: "btn-building-hornerhan-fusioncore",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchHHMercStarportHangarBay/HHMercStarportUpgraded": {
		name: "Install Drone Hangar",
		hotkey: "B",
		icon: "btn-unit-collection-interceptor-junker",
		mask: false,
		y: 1,
		x: 0
	},
	"HHReaper/HHMercStarportUpgraded": {
		name: "Train Reaper",
		hotkey: "R",
		icon: "btn-unit-collection-reaper-junker",
		mask: false,
		y: 2,
		x: 0
	},
	"HHWidowMine/HHMercStarportUpgraded": {
		name: "Train Widow Mine",
		hotkey: "D",
		icon: "btn-unit-collection-widowmine-junker",
		mask: false,
		y: 2,
		x: 1
	},
	"HHHellion/HHMercStarportUpgraded": {
		name: "Train Hellion",
		hotkey: "E",
		icon: "btn-unit-collection-hellion-junker",
		mask: false,
		y: 2,
		x: 2
	},
	"HHHellionTank/HHMercStarportUpgraded": {
		name: "Train Hellbat",
		hotkey: "T",
		icon: "btn-unit-collection-hellbat-junker",
		mask: false,
		y: 2,
		x: 3
	},
	"HHKD8Charge/HHReaper": {
		name: "KD8 Charge",
		hotkey: "D",
		icon: "btn-upgrade-terran-kd8chargeex3",
		mask: false,
		y: 2,
		x: 0
	},
	"HHReaperFly/HHReaper": {
		name: "Jet Pack Overdrive",
		hotkey: "F",
		icon: "btn-ability-hornerhan-reaper-flightmode",
		mask: false,
		y: 2,
		x: 1
	},
	"WidowMineBurrow/HHWidowMine": {
		name: "Activate Mine",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkeySet: "WidowMineModes",
		icon: "btn-ability-terran-activatemine",
		mask: false,
		y: 2,
		x: 1
	},
	"WidowMineUnburrow/HHWidowMine": {
		name: "Deactivate Mine",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkeySet: "WidowMineModes",
		icon: "btn-ability-terran-deactivatemine",
		mask: false,
		y: 2,
		x: 2
	},
	"MorphToHellionTank/HHHellion": {
		name: "Hellbat Mode",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkeySet: "HellionModes",
		icon: "btn-unit-collection-hellbat-junker",
		mask: false,
		y: 2,
		x: 1
	},
	"HHHellionBomb/HHHellion": {
		name: "Tar Bombs",
		hotkey: "E",
		icon: "btn-ability-hornerhan-hellion-slowbomb",
		mask: false,
		y: 2,
		x: 2
	},
	"MorphToHHHellion/HHHellionTank": {
		name: "Hellion Mode",
		hotkey: "E",
		hotkeySet: "HellionModes",
		icon: "btn-unit-collection-hellion-junker",
		mask: false,
		y: 2,
		x: 0
	},
	"FleetwideJump/HHWraith": {
		name: "Tactical Jump",
		hotkey: "T",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-hornerhan-fleethyperjump",
		mask: false,
		y: 2,
		x: 0
	},
	"WraithCloakOn/HHWraith": {
		name: "Cloak",
		hotkey: "C",
		hotkeySet: "WraithCloak",
		icon: "btn-ability-terran-cloak-color",
		mask: false,
		y: 2,
		x: 1
	},
	"WraithCloakOff/HHWraith": {
		name: "Decloak",
		hotkey: "D",
		hotkeySet: "WraithCloak",
		icon: "btn-ability-terran-decloak-color",
		mask: false,
		y: 2,
		x: 2
	},
	"FleetwideJump/HHVikingFighter": {
		name: "Tactical Jump",
		hotkey: "T",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-hornerhan-fleethyperjump",
		mask: false,
		y: 2,
		x: 0
	},
	"HHVikingRockets/HHVikingFighter": {
		name: "W.I.L.D. Missiles",
		hotkey: "W",
		icon: "btn-ability-hornerhan-viking-missileupgrade",
		mask: false,
		y: 2,
		x: 1
	},
	"FleetwideJump/HHVikingAssault": {
		name: "Tactical Jump",
		hotkey: "T",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-hornerhan-fleethyperjump",
		mask: false,
		y: 2,
		x: 0
	},
	"FleetwideJump/HHRaven": {
		name: "Tactical Jump",
		hotkey: "T",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-hornerhan-fleethyperjump",
		mask: false,
		y: 2,
		x: 0
	},
	"HHNomadTargetLock/HHRaven": {
		name: "Analyze Weakness",
		hotkey: "R",
		icon: "btn-ability-hornerhan-raven-analyzetarget",
		mask: false,
		y: 2,
		x: 1
	},
	"MorphtoHHRavenSiege/HHRaven": {
		name: "Enable Silent Mode",
		hotkey: "E",
		hotkeySet: "TheiaRavenModes",
		icon: "btn-unit-collection-ravencoop-junker",
		mask: false,
		y: 2,
		x: 2
	},
	"MorphtoHHRaven/HHRaven": {
		name: "Cancel Silent Mode",
		hotkey: "D",
		hotkeySet: "TheiaRavenModes",
		icon: "btn-unit-collection-ravencoop-junker",
		mask: false,
		y: 2,
		x: 3
	},
	"Hyperjump/HHBattlecruiser": {
		name: "Tactical Jump",
		hotkey: "T",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-hornerhan-fleethyperjump",
		mask: false,
		y: 2,
		x: 0
	},
	"HHYamatoShots/HHBattlecruiser": {
		name: "Overcharged Reactor",
		hotkey: "E",
		icon: "btn-ability-hornerhan-battlecruiser-yamato",
		mask: false,
		y: 2,
		x: 1
	},
	"HHBattlecruiserShots/HHBattlecruiser": {
		name: "Revert to ATX Laser Battery",
		hotkey: "D",
		icon: "btn-ability-hornerhan-battlecruiser-laser",
		mask: false,
		y: 2,
		x: 2
	},
	"ResearchHHReaperClusterBombs/HHMercCompound": {
		name: "Research LE9 Cluster Charges",
		hotkey: "B",
		icon: "btn-ability-hornerhan-reaper-deaththrows",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchHHReaperFlight/HHMercCompound": {
		name: "Research Jet Pack Overdrive",
		hotkey: "F",
		icon: "btn-ability-hornerhan-reaper-flightmode",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchHHWidowMineDeathBlossom/HHMercCompound": {
		name: "Research Executioner Missiles",
		hotkey: "D",
		icon: "btn-ability-hornerhan-widowmine-deathblossom",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchHHWidowMineRangeAttack/HHMercCompound": {
		name: "Research Black Market Launchers",
		hotkey: "R",
		icon: "btn-ability-hornerhan-widowmine-attackrange",
		mask: false,
		y: 1,
		x: 1
	},
	"ResearchHHHellionDeathStim/HHMercCompound": {
		name: "Research Aerosol Stim Emitters",
		hotkey: "A",
		icon: "btn-ability-hornerhan-hellion-stim",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchHHHellionRocket/HHMercCompound": {
		name: "Research Tar Bombs",
		hotkey: "E",
		icon: "btn-ability-hornerhan-hellion-slowbomb",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchHHHellionDeathFear/HHMercCompound": {
		name: "Research Wildfire Explosives",
		hotkey: "H",
		icon: "btn-ability-hornerhan-hellbat-fear",
		mask: false,
		y: 2,
		x: 2
	},
	"ResearchHHHellionAttackDoT/HHMercCompound": {
		name: "Research Immolation Fluid",
		hotkey: "T",
		icon: "btn-ability-hornerhan-hellbat-dot",
		mask: false,
		y: 2,
		x: 3
	},
	"HHBomberAreaBomb/HHBomberPlatform": {
		name: "Precision Strike",
		hotkey: "Q",
		icon: "btn-top-hornerhan-bombers",
		mask: false,
		y: 1,
		x: 3
	},
	"TrainHHBomber/HHBomberPlatform": {
		name: "Build Strike Fighter",
		hotkey: "B",
		icon: "btn-unit-hornerhan-strikefighter",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchHHBomberNapalm/FusionCore": {
		name: "Research Napalm Payload",
		hotkey: "E",
		icon: "btn-ability-hornerhan-bomberplatform-napalm",
		mask: false,
		y: 0,
		x: 1
	},
	"Wraith/HHStarport": {
		name: "Build Asteria Wraith",
		hotkey: "T",
		hotkey_SC1: "W",
		icon: "btn-unit-terran-wraith",
		mask: false,
		y: 0,
		x: 0
	},
	"VikingFighter/HHStarport": {
		name: "Build Deimos Viking",
		hotkey: "V",
		hotkey_NRS: "K",
		hotkey_SC1: "K",
		icon: "btn-unit-collection-vikingfighter-covertops",
		mask: false,
		y: 0,
		x: 1
	},
	"Battlecruiser/HHStarport": {
		name: "Build Sovereign Battlecruiser",
		hotkey: "B",
		icon: "btn-unit-collection-battlecruiser-covertops",
		mask: false,
		y: 0,
		x: 2
	},
	"HHRaven/HHStarport": {
		name: "Build Theia Raven",
		hotkey: "R",
		icon: "btn-unit-collection-raven-covertops",
		mask: false,
		y: 0,
		x: 3
	},
	"HHTechLabStarport/HHStarport": {
		name: "Build Han’s Tech Lab",
		hotkey: "X",
		icon: "btn-building-hornerhan-techlab",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchHHTacticalJumpCharges/StarportTechLab": {
		name: "Research Tactical Jump",
		hotkey: "Q",
		icon: "btn-ability-hornerhan-fleethyperjump",
		mask: false,
		y: 1,
		x: 1
	},
	"TychusHeroCommonAbil1": {
		name: "Tychus Outlaw Common Ability 1",
		hotkey: "Q",
		icon: "btn-ability-hornerhan-wraith-permanentcloak",
		mask: false,
		y: 2,
		x: 0
	},
	"TychusOdinRedButton/TychusOdin": {
		name: "Barrage",
		hotkey: "Q",
		icon: "btn-ability-tychus-odin-barrage",
		mask: false,
		y: 2,
		x: 0
	},
	"TychusOdinNuclearStrike/TychusOdin": {
		name: "Big Red Button",
		hotkey: "Q",
		icon: "btn-ability-tychus-odin-bigredbutton",
		mask: false,
		y: 2,
		x: 0
	},
	"TychusHeroCommonAbil2": {
		name: "Tychus Outlaw Common Ability 2",
		hotkey: "W",
		icon: "btn-ability-hornerhan-wraith-permanentcloak",
		mask: false,
		y: 2,
		x: 1
	},
	"TychusHeroCommonAbil3": {
		name: "Tychus Outlaw Common Ability 3",
		hotkey: "E",
		icon: "btn-ability-hornerhan-wraith-permanentcloak",
		mask: false,
		y: 2,
		x: 2
	},
	"TychusHeroCommonAbil4": {
		name: "Tychus Outlaw Common Ability 4",
		hotkey: "R",
		icon: "btn-ability-hornerhan-wraith-permanentcloak",
		mask: false,
		y: 2,
		x: 3
	},
	"TychusHeroCommonAbil5": {
		name: "Tychus Outlaw Common Ability 5",
		hotkey: "T",
		icon: "btn-ability-hornerhan-wraith-permanentcloak",
		mask: false,
		y: 2,
		x: 4
	},
	"TychusGhostPsychicSnare/TychusGhost": {
		name: "Psi Projector",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-ghost-psiprojector",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusMarauderSuperStim/TychusMarauder": {
		name: "Secret Stash Stimpack",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-marauder-secretstash",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusMedicDefensiveMatrix/TychusMedic": {
		name: "XM-77 Matrix Generator",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-medic-matrixgenerator",
		mask: false,
		y: 1,
		x: 3
	},
	"TychusMedicHeal/TychusMedic": {
		name: "Super Heal",
		hotkey: "X",
		icon: "btn-ability-terran-heal-color",
		mask: false,
		y: 1,
		x: 4
	},
	"TychusReaperEvasionBuff/TychusReaper": {
		name: "Procyon Shade Suit",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-reaper-shadesuit",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusWarhoundHaywireMissiles/TychusWarhound": {
		name: "SA-55 Thunderbolt Missiles",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-warhound-thunderboltmissiles",
		mask: false,
		y: 1,
		x: 0
	},
	"TychusWarhoundTurretHaywireMissiles/TychusWarhoundAutoTurret": {
		name: "SA-55 Thunderbolt Missiles",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-warhound-thunderboltmissiles",
		mask: false,
		y: 1,
		x: 0
	},
	"TychusSCV/TychusCommandCenter": {
		name: "Train SCV",
		hotkey: "S",
		icon: "btn-unit-terran-tychusscv",
		mask: false,
		y: 0,
		x: 0
	},
	"TychusCommandCenter/TychusSCV": {
		name: "Build Command Center",
		hotkey: "C",
		icon: "btn-building-terran-tychuscommandcenter",
		mask: false,
		y: 0,
		x: 0
	},
	"TychusRefinery/TychusSCV": {
		name: "Build Refinery",
		hotkey: "R",
		hotkey_NRS: "I",
		icon: "btn-building-terran-tychusrefinery",
		mask: false,
		y: 0,
		x: 1
	},
	"BuildTychusBar/TychusSCV": {
		name: "Build Joeyray’s Bar",
		hotkey: "B",
		icon: "btn-building-terran-tychusbar",
		mask: false,
		y: 1,
		x: 0
	},
	"TychusEngineeringBay/TychusSCV": {
		name: "Build Engineering Bay",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-building-terran-tychusengineeringbay",
		mask: false,
		y: 1,
		x: 1
	},
	"TychusSCVAutoTurret/TychusSCV": {
		name: "Build Auto-Turret",
		hotkey: "T",
		icon: "btn-building-terran-tychusturret",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusMercCompound/TychusSCV": {
		name: "Build Gunslingers’ Hideout",
		hotkey: "G",
		icon: "btn-building-terran-tychusassaultdepot",
		mask: false,
		y: 2,
		x: 0
	},
	"TychusArmory/TychusSCV": {
		name: "Build Muscle Armory",
		hotkey: "M",
		icon: "btn-building-terran-tychustankdepot",
		mask: false,
		y: 2,
		x: 1
	},
	"TychusGhostAcademy/TychusSCV": {
		name: "Build Fixers’ Safehouse",
		hotkey: "F",
		icon: "btn-building-terran-tychusspecialistdepot",
		mask: false,
		y: 2,
		x: 2
	},
	"BuildTychusMedivacPlatform/TychusSCV": {
		name: "Build Medivac Platform",
		hotkey: "P",
		icon: "btn-building-terran-tychusmedivacplatform",
		mask: false,
		y: 2,
		x: 3
	},
	"TychusACHero/TychusResearchCenter": {
		name: "Tychus Findlay",
		hotkey: "Q",
		icon: "btn-unit-terran-tychuscoop",
		mask: false,
		y: 0,
		x: 0
	},
	"TychusReaper/TychusResearchCenter": {
		name: "Recruit Crooked Sam",
		hotkey: "W",
		icon: "btn-unit-terran-tychusreaper",
		mask: false,
		y: 0,
		x: 1
	},
	"TychusWarhound/TychusResearchCenter": {
		name: "Recruit James “Sirius” Sykes",
		hotkey: "E",
		icon: "btn-unit-terran-tychuswarhound",
		mask: false,
		y: 0,
		x: 2
	},
	"TychusFirebat/TychusResearchCenter": {
		name: "Recruit Miles “Blaze” Lewis",
		hotkey: "A",
		icon: "btn-unit-terran-tychusfirebat",
		mask: false,
		y: 1,
		x: 0
	},
	"TychusHERC/TychusResearchCenter": {
		name: "Recruit Rob “Cannonball” Boswell",
		hotkey: "S",
		icon: "btn-unit-terran-tychusherc",
		mask: false,
		y: 1,
		x: 1
	},
	"TychusMarauder/TychusResearchCenter": {
		name: "Recruit Kevin “Rattlesnake” West",
		hotkey: "D",
		icon: "btn-unit-terran-tychusmarauder",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusGhost/TychusResearchCenter": {
		name: "Recruit Vega",
		hotkey: "Z",
		icon: "btn-unit-terran-tychusghost",
		mask: false,
		y: 2,
		x: 0
	},
	"TychusSpectre/TychusResearchCenter": {
		name: "Recruit Nux",
		hotkey: "X",
		icon: "btn-unit-terran-tychusspectre",
		mask: false,
		y: 2,
		x: 1
	},
	"TychusMedic/TychusResearchCenter": {
		name: "Recruit Lt. Layna Nikara",
		hotkey: "C",
		icon: "btn-unit-terran-tychusmedic",
		mask: false,
		y: 2,
		x: 2
	},
	"TychusOutlawWeaponsLevel1/TychusEngineeringBay": {
		name: "Upgrade Outlaw Weapons",
		hotkey: "E",
		icon: "btn-upgrade-tychus-weapons-level1",
		mask: false,
		y: 0,
		x: 0
	},
	"TychusOutlawArmorLevel1/TychusEngineeringBay": {
		name: "Upgrade Outlaw Armor",
		hotkey: "A",
		icon: "btn-upgrade-tychus-armor-level1",
		mask: false,
		y: 0,
		x: 1
	},
	"TychusSquadAttackSpeed/TychusEngineeringBay": {
		name: "Research ITC-E Triggers",
		hotkey: "S",
		icon: "btn-upgrade-tychus-attackspeed",
		mask: false,
		y: 1,
		x: 0
	},
	"TychusSquadHealth/TychusEngineeringBay": {
		name: "Research Endurance Supplements",
		hotkey: "G",
		icon: "btn-upgrade-tychus-tankhealth",
		mask: false,
		y: 1,
		x: 1
	},
	"TychusSquadDetection/TychusEngineeringBay": {
		name: "Research Flashforce GDM Visor",
		hotkey: "P",
		icon: "btn-upgrade-tychus-detection",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusUpgradeOdinRedButton/TychusEngineeringBay": {
		name: "Research Big Red Button",
		hotkey: "R",
		icon: "btn-ability-tychus-odin-bigredbutton",
		mask: false,
		y: 2,
		x: 0
	},
	"TychusACImplosionGrenadesLearn/TychusMercCompound": {
		name: "Purchase KD9a Implosion Core",
		hotkey: "Q",
		icon: "btn-upgrade-tychus-tychus-implosioncore",
		mask: false,
		y: 0,
		x: 1
	},
	"TychusACRageGrenadesLearn/TychusMercCompound": {
		name: "Purchase Vanadium Shell",
		hotkey: "W",
		icon: "btn-upgrade-tychus-tychus-vanadiumshell",
		mask: false,
		y: 0,
		x: 2
	},
	"TychusACPiercingRoundsLearn/TychusMercCompound": {
		name: "Purchase Kel-Morian Ripper Rounds",
		hotkey: "E",
		icon: "btn-upgrade-tychus-tychus-ripperrounds",
		mask: false,
		y: 0,
		x: 3
	},
	"TychusACBandofBrothersLearn/TychusMercCompound": {
		name: "Purchase SureShot Networked Helmet",
		hotkey: "R",
		icon: "btn-upgrade-tychus-tychus-sureshotnetwork",
		mask: false,
		y: 0,
		x: 4
	},
	"TychusReaperBombDamageLearn/TychusMercCompound": {
		name: "Purchase LarsCorp G7 Charges",
		hotkey: "A",
		icon: "btn-upgrade-tychus-reaper-explosivecharges",
		mask: false,
		y: 1,
		x: 1
	},
	"TychusReaperBombStunLearn/TychusMercCompound": {
		name: "Purchase Moebius Restraint Matrix",
		hotkey: "S",
		icon: "btn-upgrade-tychus-reaper-restraintmatrix",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusReaperEvasionLearn/TychusMercCompound": {
		name: "Purchase Procyon Shade Suit",
		hotkey: "D",
		icon: "btn-upgrade-tychus-reaper-shadesuit",
		mask: false,
		y: 1,
		x: 3
	},
	"TychusReaperBombChargesLearn/TychusMercCompound": {
		name: "Purchase Enhanced Hostilities Kit",
		hotkey: "F",
		icon: "btn-upgrade-tychus-reaper-hostilitieskit",
		mask: false,
		y: 1,
		x: 4
	},
	"TychusWarhoundHaywireMissilesUpgrade/TychusMercCompound": {
		name: "Purchase SA-55 Thunderbolt Missiles",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-warhound-thunderboltmissiles",
		mask: false,
		y: 2,
		x: 1
	},
	"TychusWarhoundFearUpgrade/TychusMercCompound": {
		name: "Purchase Moebius M34 Terror Rounds",
		hotkey: "X",
		icon: "btn-upgrade-tychus-warhound-fearrounds",
		mask: false,
		y: 2,
		x: 2
	},
	"TychusWarhoundDeathExplosionUpgrade/TychusMercCompound": {
		name: "Purchase D99 Detonator",
		hotkey: "C",
		icon: "btn-upgrade-tychus-warhound-detonator",
		mask: false,
		y: 2,
		x: 3
	},
	"TychusWarhoundTurretUpgrade/TychusMercCompound": {
		name: "Purchase Umojan Turret Frame",
		hotkey: "V",
		icon: "btn-upgrade-tychus-warhound-umojanframe",
		mask: false,
		y: 2,
		x: 4
	},
	"TychusFirebatPremiumPetroleumLearn/TychusArmory": {
		name: "Purchase High Capacity Containers",
		hotkey: "Q",
		icon: "btn-upgrade-tychus-firebat-highcapacity",
		mask: false,
		y: 0,
		x: 1
	},
	"TychusFirebatBlueFlameOilLearn/TychusArmory": {
		name: "Purchase Hades Oil",
		hotkey: "W",
		icon: "btn-upgrade-tychus-firebat-hadesoil",
		mask: false,
		y: 0,
		x: 2
	},
	"TychusFirebatIncendiaryPetroleumLearn/TychusArmory": {
		name: "Purchase Wildflame Fuel Additives",
		hotkey: "E",
		icon: "btn-upgrade-tychus-firebat-wildflamefuel",
		mask: false,
		y: 0,
		x: 3
	},
	"TychusFirebatShieldLearn/TychusArmory": {
		name: "Purchase XCMC-670 Combat Suit",
		hotkey: "R",
		icon: "btn-upgrade-tychus-firebat-combatsuit",
		mask: false,
		y: 0,
		x: 4
	},
	"TychusHercGrappleImpacts/TychusArmory": {
		name: "Purchase X-71 Impact Boots",
		hotkey: "A",
		icon: "btn-upgrade-tychus-herc-impactboots",
		mask: false,
		y: 1,
		x: 1
	},
	"TychusHercGrappleArmor/TychusArmory": {
		name: "Purchase Critical Response System",
		hotkey: "S",
		icon: "btn-upgrade-tychus-herc-criticalsystem",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusHercRageLearn/TychusArmory": {
		name: "Purchase Redline Power Cells",
		hotkey: "D",
		icon: "btn-upgrade-tychus-herc-redlinepower",
		mask: false,
		y: 1,
		x: 3
	},
	"TychusHercCrit/TychusArmory": {
		name: "Purchase M.A.L.I.C.E. Ammunition",
		hotkey: "F",
		icon: "btn-upgrade-tychus-herc-malice",
		mask: false,
		y: 1,
		x: 4
	},
	"TychusMarauderHealingWardBuffLearn/TychusArmory": {
		name: "Purchase Umojan Signal Modulator",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-marauder-signalmodulator",
		mask: false,
		y: 2,
		x: 1
	},
	"TychusMarauderHealingWardSpeedBuffLearn/TychusArmory": {
		name: "Purchase Moebius Aggression Blend",
		hotkey: "X",
		icon: "btn-upgrade-tychus-marauder-aggressionblend",
		mask: false,
		y: 2,
		x: 2
	},
	"TychusMarauderSuperStimLearn/TychusArmory": {
		name: "Purchase Secret Stash Stimpack",
		hotkey: "C",
		icon: "btn-upgrade-tychus-marauder-secretstash",
		mask: false,
		y: 2,
		x: 3
	},
	"TychusMarauderAttackSplashLearn/TychusArmory": {
		name: "Purchase Hammer Munitions",
		hotkey: "V",
		icon: "btn-upgrade-tychus-marauder-hammermunitions",
		mask: false,
		y: 2,
		x: 4
	},
	"TychusGhostDominateBuffLearn/TychusGhostAcademy": {
		name: "Purchase Moebius Psionic Motivator",
		hotkey: "Q",
		icon: "btn-upgrade-tychus-ghost-psionicmotivator",
		mask: false,
		y: 0,
		x: 1
	},
	"TychusGhostConfusingDominationLearn/TychusGhostAcademy": {
		name: "Purchase Neural Disruption Device",
		hotkey: "W",
		icon: "btn-upgrade-tychus-ghost-neuraldisruptor",
		mask: false,
		y: 0,
		x: 2
	},
	"TychusGhostPsychicSnareLearn/TychusGhostAcademy": {
		name: "Purchase Psi Projector",
		hotkey: "E",
		icon: "btn-upgrade-tychus-ghost-psiprojector",
		mask: false,
		y: 0,
		x: 3
	},
	"TychusGhostConcentrationHelmetLearn/TychusGhostAcademy": {
		name: "Purchase Type-88 Persuader",
		hotkey: "R",
		icon: "btn-upgrade-tychus-ghost-persuader",
		mask: false,
		y: 0,
		x: 4
	},
	"TychusSpectreSuperUltrasonicPulseLearn/TychusGhostAcademy": {
		name: "Purchase T4 Cloudburst Shells",
		hotkey: "A",
		icon: "btn-upgrade-tychus-spectre-cloudburstshells",
		mask: false,
		y: 1,
		x: 1
	},
	"TychusSpectreVisionSuitLearn/TychusGhostAcademy": {
		name: "Purchase Ultrasonic Boosters",
		hotkey: "S",
		icon: "btn-upgrade-tychus-spectre-ultrasonicboosters",
		mask: false,
		y: 1,
		x: 2
	},
	"TychusSpectreExtendedPulseGunLearn/TychusGhostAcademy": {
		name: "Purchase Crystalline Amplifiers",
		hotkey: "D",
		icon: "btn-upgrade-tychus-spectre-crystalamplifiers",
		mask: false,
		y: 1,
		x: 3
	},
	"TychusSpectreBrillianceAuraLearn/TychusGhostAcademy": {
		name: "Purchase N3 Networking",
		hotkey: "F",
		icon: "btn-upgrade-tychus-spectre-networking",
		mask: false,
		y: 1,
		x: 4
	},
	"TychusMedicHealingSprayUpgrade/TychusGhostAcademy": {
		name: "Purchase Umojan Repair Nanites",
		hotkey: "Z",
		icon: "btn-upgrade-tychus-medic-repairnanites",
		mask: false,
		y: 2,
		x: 1
	},
	"TychusMedicHealUpgrade/TychusGhostAcademy": {
		name: "Purchase Procyon Serum",
		hotkey: "X",
		icon: "btn-upgrade-tychus-medic-procyonserum",
		mask: false,
		y: 2,
		x: 2
	},
	"TychusMedicDoubleHealLearn/TychusGhostAcademy": {
		name: "Purchase Procyon Twin Heal Beam Gauntlet",
		hotkey: "C",
		icon: "btn-upgrade-tychus-medic-twinbeam",
		mask: false,
		y: 2,
		x: 3
	},
	"TychusMedicDefensiveMatrixLearn/TychusGhostAcademy": {
		name: "Purchase XM-77 Matrix Generator",
		hotkey: "V",
		icon: "btn-upgrade-tychus-medic-matrixgenerator",
		mask: false,
		y: 2,
		x: 4
	},
	"TychusMedicTransportUnits/TychusMedivacPlatform": {
		name: "Medivac Pickup",
		hotkey: "Z",
		hotkey_NRS: "I",
		icon: "btn-ability-tychus-medivac",
		mask: false,
		y: 0,
		x: 0
	},
	"TrooperMengskEnlist/SCVMengsk": {
		name: "Report for Combat",
		hotkey: "X",
		icon: "btn-ability-mengsk-trooper-volunteertofight",
		mask: false,
		y: 1,
		x: 4
	},
	"SCVMengskEnlist/TrooperMengsk": {
		name: "Report for Labor",
		hotkey: "Z",
		icon: "btn-ability-mengsk-trooper-volunteertowork",
		mask: false,
		y: 1,
		x: 4
	},
	"CommandCenterMengsk/SCVMengsk": {
		name: "Build Enlistment Center",
		hotkey: "C",
		icon: "btn-building-terran-commandcentermengsk",
		mask: false,
		y: 0,
		x: 0
	},
	"RefineryMengsk/SCVMengsk": {
		name: "Build Refinery",
		hotkey: "R",
		icon: "btn-building-terran-refinerymengsk",
		mask: false,
		y: 0,
		x: 1
	},
	"BunkerMengsk/SCVMengsk": {
		name: "Build Supply Bunker",
		hotkey: "S",
		icon: "btn-building-terran-supplybunkermengsk",
		mask: false,
		y: 0,
		x: 2
	},
	"BunkerMengsk/TrooperMengsk": {
		name: "Build Supply Bunker",
		hotkey: "S",
		icon: "btn-building-terran-supplybunkermengsk",
		mask: false,
		y: 0,
		x: 2
	},
	"BarracksMengsk/SCVMengsk": {
		name: "Build Barracks",
		hotkey: "B",
		icon: "btn-building-terran-barracksmengsk",
		mask: false,
		y: 1,
		x: 0
	},
	"EngineeringBayMengsk/SCVMengsk": {
		name: "Build Engineering Bay",
		hotkey: "E",
		icon: "btn-building-terran-engineeringbaymengsk",
		mask: false,
		y: 1,
		x: 1
	},
	"ArtilleryMengsk/SCVMengsk": {
		name: "Build Earthsplitter Ordnance",
		hotkey: "A",
		icon: "btn-building-terran-artillerymengsk",
		mask: false,
		y: 2,
		x: 0
	},
	"ArtilleryMengsk/TrooperMengsk": {
		name: "Build Earthsplitter Ordnance",
		hotkey: "A",
		icon: "btn-building-terran-artillerymengsk",
		mask: false,
		y: 2,
		x: 0
	},
	"MissileTurretMengsk/SCVMengsk": {
		name: "Build Missile Turret",
		hotkey: "T",
		icon: "btn-building-terran-missileturretmengsk",
		mask: false,
		y: 2,
		x: 1
	},
	"MissileTurretMengsk/TrooperMengsk": {
		name: "Build Missile Turret",
		hotkey: "T",
		icon: "btn-building-terran-missileturretmengsk",
		mask: false,
		y: 2,
		x: 1
	},
	"GhostAcademyMengsk/SCVMengsk": {
		name: "Build Royal Academy",
		hotkey: "G",
		icon: "btn-building-terran-ghostacademymengsk",
		mask: false,
		y: 0,
		x: 0
	},
	"FactoryMengsk/SCVMengsk": {
		name: "Build Factory",
		hotkey: "F",
		icon: "btn-building-terran-factorymengsk",
		mask: false,
		y: 1,
		x: 0
	},
	"ArmoryMengsk/SCVMengsk": {
		name: "Build Armory",
		hotkey: "A",
		icon: "btn-building-terran-armorymengsk",
		mask: false,
		y: 1,
		x: 1
	},
	"StarportMengsk/SCVMengsk": {
		name: "Build Starport",
		hotkey: "S",
		icon: "btn-building-terran-starportmengsk",
		mask: false,
		y: 2,
		x: 0
	},
	"FusionCoreMengsk/SCVMengsk": {
		name: "Build Fusion Core",
		hotkey: "C",
		icon: "btn-building-terran-fusioncoremengsk",
		mask: false,
		y: 2,
		x: 1
	},
	"TrooperMengskBuild/TrooperMengsk": {
		name: "Build Combat Structure",
		hotkey: "B",
		icon: "btn-ability-mengsk-trooper-buildcombatstructure",
		mask: true,
		y: 2,
		x: 0
	},
	"TrooperMengskSpecializeImproved/TrooperMengsk": {
		name: "Equip B-2 High-Cal LMG",
		hotkey: "G",
		icon: "btn-upgrade-mengsk-trooper-plasmarifle",
		mask: false,
		y: 2,
		x: 1
	},
	"TrooperMengskSpecializeFlamethrower/TrooperMengsk": {
		name: "Equip CPO-7 Salamander Flamethrower",
		hotkey: "F",
		icon: "btn-upgrade-mengsk-trooper-flamethrower",
		mask: false,
		y: 2,
		x: 2
	},
	"TrooperMengskSpecializeAA/TrooperMengsk": {
		name: "Equip Hailstorm Launcher",
		hotkey: "N",
		icon: "btn-upgrade-mengsk-trooper-missilelauncher",
		mask: false,
		y: 2,
		x: 3
	},
	"MarauderMengskAttackSpeedBoost/MarauderMengsk": {
		name: "High-Grade Stimpacks",
		hotkey: "T",
		icon: "btn-ability-mengsk-marauder-royalstimpack",
		mask: false,
		y: 2,
		x: 0
	},
	"GhostMengskIrradiate/GhostMengsk": {
		name: "Pyrokinetic Immolation",
		hotkey: "R",
		icon: "btn-ability-mengsk-ghost-pyrokineticimmolation_blue",
		mask: false,
		y: 2,
		x: 0
	},
	"GhostMengskEMP/GhostMengsk": {
		name: "EMP Blast",
		hotkey: "E",
		icon: "btn-ability-mengsk-ghost-staticempblast",
		mask: false,
		y: 2,
		x: 1
	},
	"GhostMengskSuperCloak/GhostMengsk": {
		name: "Labyrinth Cloak",
		hotkey: "Z",
		icon: "btn-ability-mengsk-ghost-supercloak",
		mask: false,
		y: 2,
		x: 2
	},
	"NukeCalldownMengsk/GhostMengsk": {
		name: "Tactical Missile Strike",
		hotkey: "N",
		icon: "btn-ability-mengsk-ghost-tacticalmissilestrike",
		mask: false,
		y: 2,
		x: 3
	},
	"SiegeModeMengsk": {
		name: "Siege Mode",
		hotkey: "E",
		hotkeySet: "TankModes",
		icon: "btn-unit-terran-siegetankmengsksieged",
		mask: false,
		y: 2,
		x: 0
	},
	"UnsiegeMengsk/SiegeTankMengsk": {
		name: "Tank Mode",
		hotkey: "D",
		hotkeySet: "TankModes",
		icon: "btn-unit-terran-siegetankmengsk",
		mask: false,
		y: 2,
		x: 1
	},
	"ThorMengskSiege/ThorMengsk": {
		name: "Overwatch Mode",
		hotkey: "E",
		icon: "btn-unit-terran-thormengsksieged",
		mask: false,
		y: 2,
		x: 0
	},
	"ThorMengskUnsiege/ThorMengsk": {
		name: "Walker Mode",
		hotkey: "D",
		icon: "btn-unit-terran-thormengsk",
		mask: false,
		y: 2,
		x: 1
	},
	"FighterModeMengsk/VikingMengskFighter": {
		name: "Fighter Mode",
		hotkey: "E",
		hotkeySet: "VikingModes",
		icon: "btn-unit-terran-vikingmengskfighter",
		mask: false,
		y: 2,
		x: 0
	},
	"AssaultModeMengsk/VikingMengskFighter": {
		name: "Assault Mode",
		hotkey: "D",
		hotkeySet: "VikingModes",
		icon: "btn-unit-terran-vikingmengskassault",
		mask: false,
		y: 2,
		x: 1
	},
	"HealMengsk/MedivacMengsk": {
		name: "Heal",
		hotkey: "E",
		icon: "btn-ability-terran-heal-color",
		mask: false,
		y: 2,
		x: 0
	},
	"IgniteAfterburnersMengsk/MedivacMengsk": {
		name: "Ignite Afterburners",
		hotkey: "B",
		icon: "btn-ability-mengsk-medivac-igniteafterburners",
		mask: false,
		y: 2,
		x: 1
	},
	"MorphtoRavenMengskSieged/RavenMengsk": {
		name: "Patriot Mode",
		hotkey: "E",
		icon: "btn-ability-mengsk-blimp-propagandamode",
		mask: false,
		y: 2,
		x: 2
	},
	"MorphtoRavenMengsk/RavenMengsk": {
		name: "Cancel Patriot Mode",
		hotkey: "D",
		icon: "btn-ability-mengsk-blimp-movementmode",
		mask: false,
		y: 2,
		x: 3
	},
	"YamatoGunMengsk": {
		name: "Yamato Cannon",
		hotkey: "Y",
		icon: "btn-ability-mengsk-battlecruiser-yamatocannon",
		mask: false,
		y: 2,
		x: 0
	},
	"BattlecruiserMengskHyperjump/BattlecruiserMengsk": {
		name: "Tactical Jump",
		hotkey: "T",
		icon: "btn-ability-terran-warpjump",
		mask: false,
		y: 2,
		x: 1
	},
	"SCVMengsk": {
		name: "Conscript Dominion Laborer",
		hotkey: "S",
		icon: "btn-unit-terran-scvmengsk",
		mask: false,
		y: 0,
		x: 0
	},
	"TrooperMengsk/CommandCenterMengsk": {
		name: "Conscript Dominion Trooper",
		hotkey: "A",
		icon: "btn-unit-terran-troopermengsk",
		mask: false,
		y: 0,
		x: 1
	},
	"SCVMengskEnlistCC/CommandCenterMengsk": {
		name: "Call to Labor",
		hotkey: "Z",
		icon: "btn-ability-mengsk-trooper-volunteertowork",
		mask: false,
		y: 1,
		x: 0
	},
	"TrooperMengskEnlistCC/CommandCenterMengsk": {
		name: "Call to Arms",
		hotkey: "X",
		icon: "btn-ability-mengsk-trooper-volunteertofight",
		mask: false,
		y: 1,
		x: 1
	},
	"SetArtilleryMengskRallyPoint/CommandCenterMengsk": {
		name: "Set Trooper Rally Point",
		hotkey: "Y",
		icon: "btn-ability-terran-setrallypoint",
		mask: true,
		y: 1,
		x: 4
	},
	"MarauderMengsk/BarracksMengsk": {
		name: "Train Aegis Guard",
		hotkey: "D",
		icon: "btn-unit-terran-maraudermengsk",
		mask: false,
		y: 0,
		x: 1
	},
	"GhostMengsk/BarracksMengsk": {
		name: "Train Emperor’s Shadow",
		hotkey: "G",
		icon: "btn-unit-terran-ghostmengsk",
		mask: false,
		y: 0,
		x: 2
	},
	"SCVMengskEnlistCC/BunkerDepotMengsk": {
		name: "Call to Labor",
		hotkey: "Z",
		icon: "btn-ability-mengsk-trooper-volunteertowork",
		mask: false,
		y: 1,
		x: 0
	},
	"TrooperMengskEnlistCC/BunkerDepotMengsk": {
		name: "Call to Arms",
		hotkey: "X",
		icon: "btn-ability-mengsk-trooper-volunteertofight",
		mask: false,
		y: 1,
		x: 1
	},
	"SetArtilleryMengskRallyPoint/BunkerDepotMengsk": {
		name: "Set Supply Bunker Rally Point",
		hotkey: "Y",
		icon: "btn-ability-terran-setrallypoint",
		mask: true,
		y: 1,
		x: 4
	},
	"BunkerDepotMengskLoad": {
		name: "Load",
		hotkey: "L",
		icon: "btn-ability-terran-load",
		mask: true,
		y: 2,
		x: 1
	},
	"ArtilleryMengskUnloadAll": {
		name: "Unload All",
		hotkey: "D",
		icon: "btn-ability-terran-unloadall",
		mask: true,
		y: 2,
		x: 2
	},
	"MengskTrooperWeaponsLevel1/EngineeringBayMengsk": {
		name: "Upgrade Dominion Weapons",
		hotkey: "E",
		icon: "btn-upgrade-mengsk-engineeringbay-dominionweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"MengskTrooperArmorLevel1/EngineeringBayMengsk": {
		name: "Upgrade Dominion Armor",
		hotkey: "A",
		icon: "btn-upgrade-mengsk-engineeringbay-dominionarmorlevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"TrooperMengskDropTrainResearch/EngineeringBayMengsk": {
		name: "Research Orbital Trooper Pods",
		hotkey: "D",
		icon: "btn-upgrade-mengsk-engineeringbay-orbitaldrop",
		mask: false,
		y: 1,
		x: 0
	},
	"StructureArmorMengsk/EngineeringBayMengsk": {
		name: "Research Neosteel Fortified Armor",
		hotkey: "F",
		icon: "btn-upgrade-mengsk-engineeringbay-neosteelfortifiedarmor",
		mask: false,
		y: 1,
		x: 1
	},
	"BunkerDepotMengskRangeResearch/EngineeringBayMengsk": {
		name: "Research Aim-assist Embrasures",
		hotkey: "S",
		icon: "btn-upgrade-mengsk-engineeringbay-improvedbunkersights",
		mask: false,
		y: 1,
		x: 2
	},
	"ArtilleryMengskRangeResearch/EngineeringBayMengsk": {
		name: "Research Hemispheric Accelerants",
		hotkey: "B",
		icon: "btn-upgrade-mengsk-engineeringbay-improvedartilleryrange",
		mask: false,
		y: 1,
		x: 3
	},
	"SetArtilleryMengskRallyPoint/ArtilleryMengsk": {
		name: "Set Earthsplitter Ordnance Rally Point",
		hotkey: "Y",
		icon: "btn-ability-terran-setrallypoint",
		mask: true,
		y: 1,
		x: 4
	},
	"ArtilleryMengskBombardment/ArtilleryMengsk": {
		name: "Bombardment",
		hotkey: "B",
		icon: "btn-ability-mengsk-earthsplitterordnance-earthsplitterbombardment",
		mask: false,
		y: 2,
		x: 0
	},
	"ArtilleryMengskLoad": {
		name: "Load",
		hotkey: "L",
		icon: "btn-ability-terran-load",
		mask: true,
		y: 2,
		x: 1
	},
	"MarauderMengskSlowResearch/GhostAcademyMengsk": {
		name: "Research Incapacitator Shells",
		hotkey: "C",
		icon: "btn-ability-mengsk-marauder-superconcussiveshells",
		mask: false,
		y: 0,
		x: 0
	},
	"GhostMengskGuidedStrikeRessearch/GhostAcademyMengsk": {
		name: "Research Sovereign Tactical Missiles",
		hotkey: "G",
		icon: "btn-upgrade-mengsk-ghostacademy-guidedtacticalstrike",
		mask: false,
		y: 0,
		x: 1
	},
	"NukeMengskArm/GhostAcademyMengsk": {
		name: "Arm Silo with Tactical Missile",
		hotkey: "R",
		icon: "btn-ability-mengsk-ghostacademy-armsilowithtacticalmissile",
		mask: false,
		y: 2,
		x: 0
	},
	"SiegeTankMengsk/FactoryMengsk": {
		name: "Build Shock Division",
		hotkey: "S",
		icon: "btn-unit-terran-siegetankmengsk",
		mask: false,
		y: 0,
		x: 2
	},
	"ThorMengsk/FactoryMengsk": {
		name: "Build Blackhammer",
		hotkey: "T",
		icon: "btn-unit-terran-thormengsk",
		mask: false,
		y: 0,
		x: 4
	},
	"VikingMengskFighter/StarportMengsk": {
		name: "Build Sky Fury",
		hotkey: "V",
		icon: "btn-unit-terran-vikingmengskfighter",
		mask: false,
		y: 0,
		x: 0
	},
	"MedivacMengsk/StarportMengsk": {
		name: "Build Imperial Intercessor",
		hotkey: "D",
		icon: "btn-unit-terran-medivacmengsk",
		mask: false,
		y: 0,
		x: 1
	},
	"RavenMengsk/StarportMengsk": {
		name: "Build Imperial Witness",
		hotkey: "R",
		icon: "btn-unit-terran-blimpmengsk",
		mask: false,
		y: 0,
		x: 2
	},
	"BattlecruiserMengsk/StarportMengsk": {
		name: "Build Pride of Augustgrad",
		hotkey: "B",
		icon: "btn-unit-terran-battlecruisermengsk",
		mask: false,
		y: 1,
		x: 0
	},
	"MedivacMengskSiegeTankAirliftResearch/ArmoryMengsk": {
		name: "Research Armament Stabilizers",
		hotkey: "V",
		icon: "btn-ability-mengsk-siegetank-flyingtankarmament",
		mask: false,
		y: 0,
		x: 0
	},
	"ThorMengskArmorAuraResearch/ArmoryMengsk": {
		name: "Research Bulwark Field",
		hotkey: "C",
		icon: "btn-ability-mengsk-thor-bigboycover",
		mask: false,
		y: 0,
		x: 1
	},
	"MechTransformationSpeedMengsk/ArmoryMengsk": {
		name: "Research Smart Servos",
		hotkey: "S",
		icon: "btn-upgrade-mengsk-armory-smartservos",
		mask: false,
		y: 0,
		x: 2
	},
	"MedivacMengskDoubleHealBeamResearch/FusionCoreMengsk": {
		name: "Research Dual Resuscitators",
		hotkey: "C",
		icon: "btn-ability-mengsk-medivac-doublehealbeam",
		mask: false,
		y: 0,
		x: 0
	},
	"MedivacMengskPermanentCloakResearch/FusionCoreMengsk": {
		name: "Research Scatter Veil",
		hotkey: "E",
		icon: "btn-ability-mengsk-medivac-permanentcloak",
		mask: false,
		y: 0,
		x: 1
	},
	"BlimpMengskTopbarRegenResearch/FusionCoreMengsk": {
		name: "Research Amplified Airwaves",
		hotkey: "R",
		icon: "btn-upgrade-mengsk-blimp-propagandaamplification",
		mask: false,
		y: 0,
		x: 2
	},
	"VikingMengskSpeedResearch/FusionCoreMengsk": {
		name: "Research Aesir Turbines",
		hotkey: "V",
		icon: "btn-ability-mengsk-viking-speed",
		mask: false,
		y: 0,
		x: 3
	},
	"BattlecruiserMengskRangeAuraResearch/FusionCoreMengsk": {
		name: "Research Field-Assist Targeting System",
		hotkey: "F",
		icon: "btn-ability-mengsk-battlecruiser-decksights",
		mask: false,
		y: 0,
		x: 4
	},
	"Drone/Larva": {
		name: "Morph to Drone",
		hotkey: "D",
		hotkey_NRS: "N",
		icon: "btn-unit-zerg-drone",
		mask: false,
		y: 0,
		x: 0
	},
	"Overlord/Larva": {
		name: "Morph to Overlord",
		hotkey: "V",
		hotkey_NRS: "O",
		hotkey_SC1: "O",
		icon: "btn-unit-zerg-overlord",
		mask: false,
		y: 0,
		x: 1
	},
	"Zergling/Larva": {
		name: "Morph to Zergling",
		hotkey: "Z",
		hotkey_NRS: "J",
		icon: "btn-unit-zerg-zergling",
		mask: false,
		y: 0,
		x: 2
	},
	"Roach/Larva": {
		name: "Morph to Roach",
		hotkey: "R",
		hotkey_NRS: "K",
		icon: "btn-unit-zerg-roach",
		mask: false,
		y: 0,
		x: 3
	},
	"Hydralisk/Larva": {
		name: "Morph to Hydralisk",
		hotkey: "H",
		icon: "btn-unit-zerg-hydralisk-lurker",
		mask: false,
		y: 1,
		x: 0
	},
	"Mutalisk/Larva": {
		name: "Morph to Mutalisk",
		hotkey: "T",
		hotkey_NRS: "M",
		hotkey_SC1: "M",
		icon: "btn-unit-zerg-mutalisk",
		mask: false,
		y: 1,
		x: 1
	},
	"Corruptor/Larva": {
		name: "Morph to Corruptor",
		hotkey: "C",
		hotkey_NRS: "P",
		icon: "btn-unit-zerg-corruptor",
		mask: false,
		y: 1,
		x: 2
	},
	"Infestor/Larva": {
		name: "Morph to Infestor",
		hotkey: "F",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-infestor",
		mask: false,
		y: 1,
		x: 3
	},
	"SwarmHostMP/Larva": {
		name: "Morph to Swarm Host",
		hotkey: "A",
		hotkey_NRS: "G",
		icon: "btn-unit-zerg-swarmhost",
		mask: false,
		y: 1,
		x: 4
	},
	"Viper/Larva": {
		name: "Morph to Viper",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-unit-zerg-viper",
		mask: false,
		y: 2,
		x: 0
	},
	"Ultralisk/Larva": {
		name: "Morph to Ultralisk",
		hotkey: "U",
		hotkey_NRS: "T",
		icon: "btn-unit-zerg-ultralisk",
		mask: false,
		y: 2,
		x: 1
	},
	"MorphToOverseer/Overlord": {
		name: "Morph to Overseer",
		hotkey: "V",
		icon: "btn-unit-zerg-overseer",
		mask: false,
		y: 2,
		x: 0
	},
	"GenerateCreep/Overlord": {
		name: "Generate Creep",
		hotkey: "G",
		hotkeySet: "GenerateCreep",
		icon: "btn-ability-zerg-generatecreep-color",
		mask: false,
		y: 2,
		x: 1
	},
	"GenerateCreep/SIOverlord": {
		name: "Generate Creep",
		hotkey: "G",
		hotkeySet: "GenerateCreep",
		icon: "btn-ability-zerg-generatecreep-color",
		mask: false,
		y: 2,
		x: 1
	},
	"StopGenerateCreep": {
		name: "Stop Generate Creep",
		hotkey: "C",
		hotkey_NRS: "T",
		hotkey_SC1: "G",
		hotkeySet: "GenerateCreep",
		icon: "btn-ability-zerg-generatecreepstop-color",
		mask: false,
		y: 2,
		x: 1
	},
	"MorphtoOverlordTransport/Overlord": {
		name: "Mutate Ventral Sacs",
		hotkey: "T",
		icon: "btn-unit-zerg-overlordtransport",
		mask: false,
		y: 2,
		x: 2
	},
	"MorphtoOverseerSiege/Overseer": {
		name: "Oversight",
		hotkey: "W",
		hotkeySet: "OverseerModes",
		icon: "btn-ability-zerg-overlord-oversight",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphtoOverseerNormal/Overseer": {
		name: "Cancel Oversight",
		hotkey: "R",
		hotkeySet: "OverseerModes",
		icon: "btn-ability-zerg-overlord-oversight-off",
		mask: false,
		y: 2,
		x: 1
	},
	"SpawnChangeling/Overseer": {
		name: "Spawn Changeling",
		hotkey: "C",
		hotkey_NRS: "N",
		icon: "btn-unit-zerg-changeling",
		mask: false,
		y: 2,
		x: 2
	},
	"Contaminate/Overseer": {
		name: "Contaminate",
		hotkey: "E",
		hotkey_NRS: "T",
		icon: "btn-ability-zerg-contaminate-color",
		mask: false,
		y: 2,
		x: 3
	},
	"MindBolt/KerriganGhostLab": {
		name: "Kinetic Blast",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-kerrigan-kineticblast",
		mask: false,
		y: 2,
		x: 0
	},
	"PsionicLift/KerriganGhostLab": {
		name: "Crushing Grip",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-ability-kerrigan-crushinggrip",
		mask: false,
		y: 2,
		x: 1
	},
	"MindBolt/K5Kerrigan": {
		name: "Kinetic Blast\nLeaping Strike",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-kerrigan-kineticblast",
		mask: false,
		y: 2,
		x: 0
	},
	"PsionicLift/K5Kerrigan": {
		name: "Crushing Grip\nPsionic Shift",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-ability-kerrigan-crushinggrip",
		mask: false,
		y: 2,
		x: 1
	},
	"WildMutation/K5Kerrigan": {
		name: "Wild Mutation\nSpawn Banelings\nMend",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-ability-kerrigan-wildmutation",
		mask: false,
		y: 2,
		x: 2
	},
	"K5Leviathan/K5Kerrigan": {
		name: "Apocalypse\nSpawn Leviathan\nDrop Pods",
		hotkey: "D",
		hotkey_NRS: "L",
		icon: "btn-ability-kerrigan-apocalypse",
		mask: false,
		y: 2,
		x: 3
	},
	"KerriganVoidCoopEconDrop/K5Kerrigan": {
		name: "Assimilation Aura",
		hotkey: "E",
		icon: "btn-upgrade-kerrigan-assimilationaura",
		mask: false,
		y: 2,
		x: 2
	},
	"KerriganVoidCoopCrushingGripWave/K5Kerrigan": {
		name: "Immobilization Wave",
		hotkey: "D",
		icon: "btn-upgrade-kerrigan-crushinggripwave",
		mask: false,
		y: 2,
		x: 3
	},
	"MindBolt/K5KerriganBurrowed": {
		name: "Kinetic Blast\nLeaping Strike",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-kerrigan-kineticblast",
		mask: false,
		y: 2,
		x: 0
	},
	"PsionicLift/K5KerriganBurrowed": {
		name: "Crushing Grip\nPsionic Shift",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-ability-kerrigan-crushinggrip",
		mask: false,
		y: 2,
		x: 1
	},
	"WildMutation/K5KerriganBurrowed": {
		name: "Wild Mutation\nSpawn Banelings\nMend",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-ability-kerrigan-wildmutation",
		mask: false,
		y: 2,
		x: 2
	},
	"K5Leviathan/K5KerriganBurrowed": {
		name: "Apocalypse\nSpawn Leviathan\nDrop Pods",
		hotkey: "D",
		hotkey_NRS: "L",
		icon: "btn-ability-kerrigan-apocalypse",
		mask: false,
		y: 2,
		x: 3
	},
	"KerriganVoidCoopEconDrop/K5KerriganBurrowed": {
		name: "Assimilation Aura",
		hotkey: "E",
		icon: "btn-upgrade-kerrigan-assimilationaura",
		mask: false,
		y: 2,
		x: 2
	},
	"KerriganVoidCoopCrushingGripWave/K5KerriganBurrowed": {
		name: "Immobilization Wave",
		hotkey: "D",
		icon: "btn-upgrade-kerrigan-crushinggripwave",
		mask: false,
		y: 2,
		x: 3
	},
	"MindBolt/KerriganReviveCocoon": {
		name: "Leaping Strike",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-kerrigan-leapingstrike",
		mask: false,
		y: 2,
		x: 0
	},
	"PsionicLift/KerriganReviveCocoon": {
		name: "Psionic Shift",
		hotkey: "W",
		icon: "btn-ability-kerrigan-psychicshift",
		mask: false,
		y: 2,
		x: 1
	},
	"KerriganVoidCoopEconDrop/KerriganReviveCocoon": {
		name: "Assimilation Aura",
		hotkey: "E",
		icon: "btn-upgrade-kerrigan-assimilationaura",
		mask: false,
		y: 2,
		x: 2
	},
	"KerriganVoidCoopCrushingGripWave/KerriganReviveCocoon": {
		name: "Immobilization Wave",
		hotkey: "D",
		icon: "btn-upgrade-kerrigan-crushinggripwave",
		mask: false,
		y: 2,
		x: 3
	},
	"Hatchery/Drone": {
		name: "Mutate into Hatchery",
		hotkey: "H",
		icon: "btn-building-zerg-hatchery",
		mask: false,
		y: 0,
		x: 0
	},
	"Extractor/Drone": {
		name: "Mutate into Extractor",
		hotkey: "E",
		hotkey_NRS: "K",
		icon: "btn-building-zerg-extractor",
		mask: false,
		y: 0,
		x: 1
	},
	"SpawningPool/Drone": {
		name: "Mutate into Spawning Pool",
		hotkey: "S",
		hotkey_NRS: "P",
		icon: "btn-building-zerg-spawningpool",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolutionChamber/Drone": {
		name: "Mutate into Evolution Chamber",
		hotkey: "V",
		icon: "btn-building-zerg-evolutionchamber",
		mask: false,
		y: 1,
		x: 1
	},
	"SpineCrawler/Drone": {
		name: "Mutate into Spine Crawler",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-building-zerg-spinecrawler",
		mask: false,
		y: 2,
		x: 0
	},
	"SporeCrawler/Drone": {
		name: "Mutate into Spore Crawler",
		hotkey: "A",
		hotkey_NRS: "O",
		hotkey_SC1: "O",
		icon: "btn-building-zerg-sporecrawler",
		mask: false,
		y: 2,
		x: 1
	},
	"HydraliskDen/Drone": {
		name: "Mutate into Hydralisk Den",
		hotkey: "H",
		hotkey_SC1: "D",
		icon: "btn-building-zerg-hydraliskden",
		mask: false,
		y: 0,
		x: 0
	},
	"MutateintoLurkerDen/Drone": {
		name: "Mutate into Lurker Den",
		hotkey: "D",
		hotkey_SC1: "L",
		icon: "btn-building-zerg-lurkerden",
		mask: false,
		y: 0,
		x: 2
	},
	"Spire/Drone": {
		name: "Mutate into Spire",
		hotkey: "S",
		hotkey_NRS: "P",
		icon: "btn-building-zerg-spire",
		mask: false,
		y: 1,
		x: 0
	},
	"NydusNetwork/Drone": {
		name: "Mutate into Nydus Network",
		hotkey: "N",
		icon: "btn-building-zerg-nydusnetwork",
		mask: false,
		y: 1,
		x: 1
	},
	"UltraliskCavern/Drone": {
		name: "Mutate into Ultralisk Cavern",
		hotkey: "U",
		icon: "btn-building-zerg-ultraliskcavern",
		mask: false,
		y: 2,
		x: 0
	},
	"BuildCreepTumor/QueenCoop": {
		name: "Spawn Creep Tumor",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-building-zerg-creeptumor",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphMorphalisk/QueenCoop": {
		name: "Spawn Larvae",
		hotkey: "V",
		hotkey_NRS: "L",
		icon: "btn-unit-zerg-larva",
		mask: false,
		y: 2,
		x: 1
	},
	"Transfusion/QueenCoop": {
		name: "Transfusion",
		hotkey: "T",
		icon: "btn-ability-zerg-transfusion-color",
		mask: false,
		y: 2,
		x: 2
	},
	"QueenBurstHeal/Queen": {
		name: "Rapid Transfusion",
		hotkey: "T",
		hotkey_NRS: "J",
		icon: "btn-ability-zerg-transfusion-color",
		mask: false,
		y: 2,
		x: 1
	},
	"BuildCreepTumorPropagate/CreepTumorBurrowed": {
		name: "Spawn Creep Tumor",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-building-zerg-creeptumor",
		mask: false,
		y: 2,
		x: 0
	},
	"LurkerMP/Hydralisk": {
		name: "Morph to Lurker",
		hotkey: "E",
		icon: "btn-unit-zerg-lurker",
		mask: false,
		y: 2,
		x: 0
	},
	"Lurker/HydraliskLurker": {
		name: "Morph to Lurker",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-unit-zerg-lurker",
		mask: false,
		y: 2,
		x: 0
	},
	"Impaler/HydraliskImpaler": {
		name: "Morph to Impaler",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-unit-zerg-impaler",
		mask: false,
		y: 2,
		x: 0
	},
	"HydraliskFrenzy/Hydralisk": {
		name: "Frenzy",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 2,
		x: 0
	},
	"HydraliskFrenzy/HydraliskLurker": {
		name: "Frenzy",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 2,
		x: 1
	},
	"HydraliskFrenzy/HydraliskImpaler": {
		name: "Frenzy",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 2,
		x: 1
	},
	"BurrowLurkerMP": {
		name: "Burrow",
		hotkey: "D",
		icon: "btn-ability-zerg-burrow-color",
		mask: false,
		y: 2,
		x: 3
	},
	"LurkerBurrowDown": {
		name: "Burrow",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-burrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"LurkerBurrowUp": {
		name: "Unburrow",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-upburrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"ImpalerBurrowDown": {
		name: "Burrow",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-burrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"ImpalerBurrowUp": {
		name: "Unburrow",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-upburrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"CausticSpray/Corruptor": {
		name: "Caustic Spray",
		hotkey: "C",
		icon: "btn-ability-zerg-causticspray",
		mask: false,
		y: 2,
		x: 0
	},
	"BroodLord/Corruptor": {
		name: "Morph to Brood Lord",
		hotkey: "B",
		hotkey_SC1: "G",
		icon: "btn-unit-zerg-broodlord",
		mask: false,
		y: 2,
		x: 1
	},
	"BroodLord/MutaliskBroodlord": {
		name: "Morph to Brood Lord",
		hotkey: "B",
		hotkey_SC1: "G",
		icon: "btn-unit-zerg-broodlord",
		mask: false,
		y: 2,
		x: 0
	},
	"Viper/MutaliskViper": {
		name: "Morph to Viper",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-unit-zerg-viper",
		mask: false,
		y: 2,
		x: 0
	},
	"InfestedTerrans/Infestor": {
		name: "Infested Terran",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-infestedmarine",
		mask: false,
		y: 2,
		x: 0
	},
	"InfestedTerrans/InfestorBurrowed": {
		name: "Infested Terran",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-infestedmarine",
		mask: false,
		y: 2,
		x: 0
	},
	"FungalGrowth/Infestor": {
		name: "Fungal Growth",
		hotkey: "F",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-fungalgrowth-color",
		mask: false,
		y: 2,
		x: 1
	},
	"FungalGrowth/InfestorBurrowed": {
		name: "Fungal Growth",
		hotkey: "F",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-fungalgrowth-color",
		mask: false,
		y: 2,
		x: 1
	},
	"NeuralParasite/Infestor": {
		name: "Neural Parasite",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-ability-zerg-neuralparasite-color",
		mask: false,
		y: 2,
		x: 2
	},
	"NeuralParasite/InfestorBurrowed": {
		name: "Neural Parasite",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-ability-zerg-neuralparasite-color",
		mask: false,
		y: 2,
		x: 2
	},
	"NPSwarm/Infestor": {
		name: "Parasitic Domination",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-ability-zerg-neuralparasite-color",
		mask: false,
		y: 2,
		x: 1
	},
	"InfestorConsumption/Infestor": {
		name: "Consumption",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-consume",
		mask: false,
		y: 2,
		x: 2
	},
	"InfestorConsumption/DefilerMP": {
		name: "Consumption",
		hotkey: "C",
		icon: "btn-ability-zerg-consume",
		mask: false,
		y: 2,
		x: 0
	},
	"DefilerMPDarkSwarm/DefilerMP": {
		name: "Dark Swarm",
		hotkey: "D",
		icon: "btn-ability-zerg-darkswarm",
		mask: false,
		y: 2,
		x: 1
	},
	"DefilerMPPlague/DefilerMP": {
		name: "Plague",
		hotkey: "G",
		icon: "btn-ability-zerg-defilerplague",
		mask: false,
		y: 2,
		x: 2
	},
	"BurrowChargeCampaign/Ultralisk": {
		name: "Burrow Charge",
		hotkey: "C",
		icon: "btn-upgrade-zerg-burrowcharge",
		mask: false,
		y: 2,
		x: 0
	},
	"BurrowChargeCampaignNoxious/HotSNoxious": {
		name: "Burrow Charge",
		hotkey: "C",
		icon: "btn-upgrade-zerg-burrowcharge",
		mask: false,
		y: 2,
		x: 1
	},
	"BurrowChargeCampaign/HotSTorrasque": {
		name: "Burrow Charge",
		hotkey: "C",
		icon: "btn-upgrade-zerg-burrowcharge",
		mask: false,
		y: 2,
		x: 0
	},
	"PoisonNova/HotSNoxious": {
		name: "Toxic Blast",
		hotkey: "W",
		hotkey_NRS: "I",
		hotkey_SC1: "T",
		icon: "btn-ability-zerg-poisonnova",
		mask: false,
		y: 2,
		x: 0
	},
	"Larva": {
		name: "Select Larva",
		hotkey: "S",
		hotkey_NRS: "L",
		icon: "btn-unit-zerg-larva",
		mask: false,
		y: 0,
		x: 0
	},
	"Queen": {
		name: "Birth Queen",
		hotkey: "Q",
		hotkey_NRS: "U",
		hotkey_SC1: "E",
		icon: "btn-unit-zerg-queen",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchBurrow": {
		name: "Evolve Burrow",
		hotkey: "B",
		icon: "btn-ability-zerg-burrow-color",
		mask: false,
		y: 0,
		x: 4
	},
	"RespawnZergling/Hatchery": {
		name: "Zergling Reconstitution",
		hotkey: "Z",
		hotkey_NRS: "J",
		icon: "btn-ability-kerrigan-zerglingreconstitution",
		mask: false,
		y: 0,
		x: 4
	},
	"RespawnZergling/Lair": {
		name: "Zergling Reconstitution",
		hotkey: "Z",
		hotkey_NRS: "J",
		icon: "btn-ability-kerrigan-zerglingreconstitution",
		mask: false,
		y: 0,
		x: 4
	},
	"RespawnZergling/Hive": {
		name: "Zergling Reconstitution",
		hotkey: "Z",
		hotkey_NRS: "J",
		icon: "btn-ability-kerrigan-zerglingreconstitution",
		mask: false,
		y: 0,
		x: 4
	},
	"overlordspeed": {
		name: "Evolve Pneumatized Carapace",
		hotkey: "P",
		icon: "btn-upgrade-zerg-pneumatizedcarapace",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolveVentralSacks": {
		name: "Evolve Ventral Sacs",
		hotkey: "E",
		hotkey_NRS: "C",
		hotkey_SC1: "V",
		icon: "btn-upgrade-zerg-ventralsacs",
		mask: false,
		y: 1,
		x: 1
	},
	"RallyEgg": {
		name: "Set Worker Rally Point",
		hotkey: "G",
		hotkey_SC1: "W",
		icon: "btn-ability-zerg-setworkerrallypoint",
		mask: true,
		y: 1,
		x: 3
	},
	"Lair/Hatchery": {
		name: "Mutate into Lair",
		hotkey: "L",
		hotkey_NRS: "H",
		icon: "btn-building-zerg-lair",
		mask: false,
		y: 2,
		x: 0
	},
	"Hive/Lair": {
		name: "Mutate into Hive",
		hotkey: "H",
		icon: "btn-building-zerg-hive",
		mask: false,
		y: 2,
		x: 0
	},
	"zerglingmovementspeed/SpawningPool": {
		name: "Evolve Metabolic Boost",
		hotkey: "M",
		icon: "btn-upgrade-zerg-metabolicboost",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveHardenedCarapace/SpawningPool": {
		name: "Evolve Hardened Carapace",
		hotkey: "C",
		icon: "btn-upgrade-zerg-hardenedcarapace",
		mask: false,
		y: 0,
		x: 1
	},
	"zerglingattackspeed/SpawningPool": {
		name: "Evolve Adrenal Overload",
		hotkey: "A",
		icon: "btn-upgrade-zerg-adrenalglands",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveZerglingArmorShred/SpawningPool": {
		name: "Evolve Shredding Claws",
		hotkey: "R",
		icon: "btn-upgrade-zergling-armorshredding",
		mask: false,
		y: 0,
		x: 3
	},
	"zergmeleeweapons1/EvolutionChamber": {
		name: "Evolve Melee Attacks",
		hotkey: "M",
		icon: "btn-upgrade-zerg-meleeattacks-level1",
		mask: false,
		y: 0,
		x: 0
	},
	"zergmissileweapons1/EvolutionChamber": {
		name: "Evolve Missile Attacks",
		hotkey: "A",
		icon: "btn-upgrade-zerg-missileattacks-level1",
		mask: false,
		y: 0,
		x: 1
	},
	"zerggroundarmor1/EvolutionChamber": {
		name: "Evolve Ground Carapace",
		hotkey: "C",
		icon: "btn-upgrade-zerg-groundcarapace-level1",
		mask: false,
		y: 0,
		x: 2
	},
	"EvolveKerriganHeroicFortitude/EvolutionChamber": {
		name: "Evolve Heroic Fortitude",
		hotkey: "F",
		icon: "btn-ability-kerrigan-heroicfortitude",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolveK5ChainLightning/EvolutionChamber": {
		name: "Evolve Chain Reaction",
		hotkey: "R",
		icon: "btn-ability-kerrigan-chainreaction",
		mask: false,
		y: 1,
		x: 1
	},
	"EvolveK5Cooldowns/EvolutionChamber": {
		name: "Evolve Ability Efficiency",
		hotkey: "E",
		icon: "btn-ability-kerrigan-abilityefficiency",
		mask: false,
		y: 1,
		x: 2
	},
	"EvolveGroovedSpines/HydraliskDen": {
		name: "Evolve Grooved Spines",
		hotkey: "G",
		icon: "btn-upgrade-zerg-hotsgroovedspines",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveMuscularAugments/HydraliskDen": {
		name: "Evolve Muscular Augments",
		hotkey: "H",
		icon: "btn-upgrade-zerg-evolvemuscularaugments",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveAncillaryCarapace/HydraliskDen": {
		name: "Evolve Ancillary Carapace",
		hotkey: "C",
		icon: "btn-upgrade-zerg-ancillaryarmor",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveFrenzy/HydraliskDen": {
		name: "Evolve Frenzy",
		hotkey: "F",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchLurkerRange/HydraliskDen": {
		name: "Evolve Seismic Spines",
		hotkey: "E",
		icon: "btn-upgrade-kerrigan-seismicspines",
		mask: false,
		y: 0,
		x: 3
	},
	"LurkerDen/HydraliskDen": {
		name: "Mutate into Lurker Den",
		hotkey: "D",
		icon: "btn-building-zerg-lurkerden",
		mask: false,
		y: 2,
		x: 0
	},
	"ImpalerDen/HydraliskDen": {
		name: "Mutate into Impaler Den",
		hotkey: "D",
		icon: "btn-building-zerg-lurkerden",
		mask: false,
		y: 2,
		x: 0
	},
	"EvolveDiggingClaws/LurkerDenMP": {
		name: "Evolve Adaptive Talons",
		hotkey: "D",
		icon: "btn-upgrade-zerg-adaptivetalons",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchLurkerRange/LurkerDenMP": {
		name: "Evolve Seismic Spines",
		hotkey: "S",
		icon: "btn-upgrade-kerrigan-seismicspines",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveAncillaryCarapace/LurkerDen": {
		name: "Evolve Ancillary Carapace",
		hotkey: "C",
		icon: "btn-upgrade-zerg-ancillaryarmor",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveMuscularAugments/LurkerDen": {
		name: "Evolve Muscular Augments",
		hotkey: "A",
		icon: "btn-upgrade-zerg-groovedspines",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveFrenzy/LurkerDen": {
		name: "Evolve Frenzy",
		hotkey: "F",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchLurkerRange/LurkerDen": {
		name: "Evolve Seismic Spines",
		hotkey: "E",
		icon: "btn-upgrade-kerrigan-seismicspines",
		mask: false,
		y: 0,
		x: 3
	},
	"SpineCrawlerRoot/SpineCrawlerUprooted": {
		name: "Root",
		hotkey: "D",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 0
	},
	"SpineCrawlerUproot/SpineCrawler": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 1
	},
	"SporeCrawlerRoot/SporeCrawlerUprooted": {
		name: "Root",
		hotkey: "D",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 0
	},
	"SporeCrawlerUproot/SporeCrawler": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 1
	},
	"zergflyerattack1": {
		name: "Evolve Flyer Attacks",
		hotkey: "A",
		icon: "btn-upgrade-zerg-airattacks-level1",
		mask: false,
		y: 0,
		x: 0
	},
	"zergflyerarmor1": {
		name: "Evolve Flyer Carapace",
		hotkey: "C",
		icon: "btn-upgrade-zerg-flyercarapace-level1",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveMutaliskRapidRegeneration/Spire": {
		name: "Evolve Rapid Regeneration",
		hotkey: "R",
		icon: "btn-upgrade-zerg-rapidregeneration",
		mask: false,
		y: 0,
		x: 2
	},
	"EvolveKerriganViciousGlaive/Spire": {
		name: "Evolve Vicious Glave",
		hotkey: "V",
		icon: "btn-upgrade-zerg-viciousglaive",
		mask: false,
		y: 0,
		x: 3
	},
	"EvolveSeveringGlave/Spire": {
		name: "Evolve Severing Glave",
		hotkey: "S",
		icon: "btn-upgrade-zerg-explosiveglaive",
		mask: false,
		y: 0,
		x: 4
	},
	"GreaterSpire/Spire": {
		name: "Mutate into Greater Spire",
		hotkey: "G",
		icon: "btn-building-zerg-greaterspire",
		mask: false,
		y: 2,
		x: 0
	},
	"GreaterSpireBroodlord/Spire": {
		name: "Mutate into Greater Spire",
		hotkey: "G",
		icon: "btn-building-zerg-greaterspire",
		mask: false,
		y: 2,
		x: 0
	},
	"GreaterSpireViper/Spire": {
		name: "Mutate into Greater Spire",
		hotkey: "G",
		icon: "btn-building-zerg-greaterspire",
		mask: false,
		y: 2,
		x: 0
	},
	"EvolveMutaliskRapidRegeneration/GreaterSpire": {
		name: "Evolve Rapid Regeneration",
		hotkey: "R",
		icon: "btn-upgrade-zerg-rapidregeneration",
		mask: false,
		y: 0,
		x: 2
	},
	"EvolveKerriganViciousGlaive/GreaterSpire": {
		name: "Evolve Vicious Glave",
		hotkey: "V",
		icon: "btn-upgrade-zerg-viciousglaive",
		mask: false,
		y: 0,
		x: 3
	},
	"EvolveSeveringGlave/GreaterSpire": {
		name: "Evolve Severing Glave",
		hotkey: "S",
		icon: "btn-upgrade-zerg-explosiveglaive",
		mask: false,
		y: 0,
		x: 4
	},
	"SummonNydusWorm/NydusNetwork": {
		name: "Summon Nydus Worm",
		hotkey: "N",
		icon: "btn-building-zerg-nydusworm",
		mask: false,
		y: 1,
		x: 0
	},
	"ZagaraVoidCoopNydusWorm/NydusNetwork": {
		name: "Summon Omega Worm",
		hotkey: "R",
		hotkey_SC1: "N",
		icon: "btn-building-zerg-nydusworm",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolveChitinousPlating/UltraliskCavern": {
		name: "Evolve Chitinous Plating",
		hotkey: "C",
		icon: "btn-upgrade-zerg-chitinousplating",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveAnabolicSynthesis2/UltraliskCavern": {
		name: "Evolve Anabolic Synthesis",
		hotkey: "A",
		icon: "btn-upgrade-zerg-anabolicsynthesis",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveBurrowCharge/UltraliskCavern": {
		name: "Evolve Burrow Charge",
		hotkey: "B",
		icon: "btn-upgrade-zerg-burrowcharge",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveTissueAssimilation/UltraliskCavern": {
		name: "Evolve Tissue Assimilation",
		hotkey: "T",
		icon: "btn-upgrade-zerg-tissueassimilation",
		mask: false,
		y: 0,
		x: 2
	},
	"ZagaraVoidCoopBanelingBarrage/ZagaraVoidCoop": {
		name: "Baneling Barrage",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-unit-zerg-baneling",
		mask: false,
		y: 2,
		x: 0
	},
	"ZagaraVoidCoopSpawnHunterKillers/ZagaraVoidCoop": {
		name: "Spawn Hunter Killers",
		hotkey: "W",
		icon: "btn-unit-zerg-hydralisk",
		mask: false,
		y: 2,
		x: 1
	},
	"ZagaraVoidCoopMassFrenzy/ZagaraVoidCoop": {
		name: "Mass Frenzy",
		hotkey: "E",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 2,
		x: 2
	},
	"MassRoachDrop/ZagaraVoidCoop": {
		name: "Infested Drop",
		hotkey: "D",
		icon: "talent-zagara-level02-massroachdrop",
		mask: false,
		y: 2,
		x: 3
	},
	"ZagaraVoidCoopBanelingBarrage/ZagaraVoidCoopBurrowed": {
		name: "Baneling Barrage",
		hotkey: "Q",
		icon: "btn-unit-zerg-baneling",
		mask: false,
		y: 2,
		x: 0
	},
	"ZagaraVoidCoopSpawnHunterKillers/ZagaraVoidCoopBurrowed": {
		name: "Spawn Hunter Killers",
		hotkey: "W",
		icon: "btn-unit-zerg-hydralisk",
		mask: false,
		y: 2,
		x: 1
	},
	"ZagaraVoidCoopMassFrenzy/ZagaraVoidCoopBurrowed": {
		name: "Mass Frenzy",
		hotkey: "E",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 2,
		x: 2
	},
	"MassRoachDrop/ZagaraVoidCoopBurrowed": {
		name: "Infested Drop",
		hotkey: "D",
		icon: "talent-zagara-level02-massroachdrop",
		mask: false,
		y: 2,
		x: 3
	},
	"ZagaraVoidCoopBanelingBarrage/ZagaraReviveCocoon": {
		name: "Baneling Barrage",
		hotkey: "Q",
		icon: "btn-unit-zerg-baneling",
		mask: false,
		y: 2,
		x: 0
	},
	"ZagaraVoidCoopSpawnHunterKillers/ZagaraReviveCocoon": {
		name: "Spawn Hunter Killers",
		hotkey: "W",
		icon: "btn-unit-zerg-hydralisk",
		mask: false,
		y: 2,
		x: 1
	},
	"ZagaraVoidCoopMassFrenzy/ZagaraReviveCocoon": {
		name: "Mass Frenzy",
		hotkey: "E",
		icon: "btn-upgrade-zerg-frenzy",
		mask: false,
		y: 2,
		x: 2
	},
	"MassRoachDrop/ZagaraReviveCocoon": {
		name: "Infested Drop",
		hotkey: "D",
		icon: "talent-zagara-level02-massroachdrop",
		mask: false,
		y: 2,
		x: 3
	},
	"Aberration/Larva": {
		name: "Morph to Aberration",
		hotkey: "B",
		icon: "btn-unit-zerg-aberration",
		mask: false,
		y: 0,
		x: 3
	},
	"BanelingNest/Drone": {
		name: "Mutate into Baneling Nest",
		hotkey: "B",
		icon: "btn-building-zerg-banelingnest",
		mask: false,
		y: 1,
		x: 3
	},
	"ZagaraBileLauncher/Drone": {
		name: "Mutate into Bile Launcher",
		hotkey: "N",
		icon: "btn-building-zerg-sporecannon",
		mask: false,
		y: 2,
		x: 2
	},
	"ScourgeNest/Drone": {
		name: "Mutate into Scourge Nest",
		hotkey: "C",
		icon: "btn-doodad-scourgenests",
		mask: false,
		y: 2,
		x: 1
	},
	"Baneling/Zergling": {
		name: "Morph to Baneling",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-unit-zerg-baneling",
		mask: false,
		y: 2,
		x: 0
	},
	"Baneling/HotSRaptor": {
		name: "Morph to Baneling",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-unit-zerg-baneling",
		mask: false,
		y: 2,
		x: 0
	},
	"Baneling/HotSSwarmling": {
		name: "Morph to Baneling",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-unit-zerg-baneling",
		mask: false,
		y: 2,
		x: 0
	},
	"Explode/Baneling": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Explode/BanelingBurrowed": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EnableBuildingAttack/Baneling": {
		name: "Enable Structure Attack",
		hotkey: "F",
		hotkey_NRS: "G",
		icon: "btn-ability-zerg-attackstructure-color",
		mask: false,
		y: 2,
		x: 1
	},
	"DisableBuildingAttack/Baneling": {
		name: "Disable Structure Attack",
		hotkey: "G",
		hotkey_NRS: "B",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 2
	},
	"Explode/HotSSplitterlingBig": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Explode/HotSSplitterlingBigBurrowed": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Explode/HotSHunter": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Explode/HotSHunterBurrowed": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EnableBuildingAttack/HotSSplitterlingBig": {
		name: "Enable Structure Attack",
		hotkey: "F",
		hotkey_NRS: "G",
		icon: "btn-ability-zerg-attackstructure-color",
		mask: false,
		y: 2,
		x: 1
	},
	"EnableBuildingAttack/HotSSplitterlingMedium": {
		name: "Enable Structure Attack",
		hotkey: "F",
		hotkey_NRS: "G",
		icon: "btn-ability-zerg-attackstructure-color",
		mask: false,
		y: 2,
		x: 1
	},
	"EnableBuildingAttack/HotSHunter": {
		name: "Enable Structure Attack",
		hotkey: "F",
		hotkey_NRS: "G",
		icon: "btn-ability-zerg-attackstructure-color",
		mask: false,
		y: 2,
		x: 1
	},
	"DisableBuildingAttack/HotSSplitterlingBig": {
		name: "Disable Structure Attack",
		hotkey: "G",
		hotkey_NRS: "B",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 2
	},
	"DisableBuildingAttack/HotSSplitterlingMedium": {
		name: "Disable Structure Attack",
		hotkey: "G",
		hotkey_NRS: "B",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 2
	},
	"DisableBuildingAttack/HotSHunter": {
		name: "Disable Structure Attack",
		hotkey: "G",
		hotkey_NRS: "B",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 2
	},
	"DetonateScourge/Scourge": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "D",
		hotkey_SC1: "D",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EnableBuildingAttackScourge/Scourge": {
		name: "Enable Structure Attack",
		hotkey: "F",
		icon: "btn-ability-zerg-attackstructure-color",
		mask: false,
		y: 2,
		x: 1
	},
	"DisableBuildingAttackScourge/Scourge": {
		name: "Disable Structure Attack",
		hotkey: "G",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 2
	},
	"CorruptionAbility/ZagaraCorruptor": {
		name: "Corruption",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-corruption-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EvolveBileLauncherIncreasedRange/SpawningPool": {
		name: "Evolve Artillery Ducts",
		hotkey: "B",
		icon: "btn-upgrade-zagara-increasebilelauncherrange",
		mask: false,
		y: 2,
		x: 0
	},
	"EvolveBileLauncherBombardmentCooldown/SpawningPool": {
		name: "Evolve Rapid Bombardment",
		hotkey: "D",
		icon: "btn-upgrade-zerg-demolition",
		mask: false,
		y: 2,
		x: 1
	},
	"EvolveCentrificalHooks/BanelingNest": {
		name: "Evolve Centrifugal Hooks",
		hotkey: "C",
		icon: "btn-upgrade-zerg-centrifugalhooks",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveBanelingCorrosiveBile/BanelingNest": {
		name: "Evolve Corrosive Acid",
		hotkey: "A",
		icon: "btn-upgrade-zerg-corrosiveacid",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveBanelingRupture/BanelingNest": {
		name: "Evolve Rupture",
		hotkey: "R",
		hotkey_SC1: "U",
		icon: "btn-upgrade-zerg-rupture",
		mask: false,
		y: 0,
		x: 2
	},
	"EvolveBanelingHeal/BanelingNest": {
		name: "Evolve Regenerative Acid",
		hotkey: "E",
		icon: "btn-upgrade-zerg-regenerativebile",
		mask: false,
		y: 0,
		x: 3
	},
	"ZagaraVoidCoopBanelingSpawner/BanelingNest": {
		name: "Birthing Chamber",
		hotkey: "B",
		icon: "talent-zagara-level07-volatilebanelingnest",
		mask: false,
		y: 2,
		x: 0
	},
	"BileLauncherBombardment/BileLauncherZagara": {
		name: "Bombardment",
		hotkey: "B",
		icon: "btn-upgrade-zagara-bilebombardment",
		mask: false,
		y: 2,
		x: 0
	},
	"EvolveScourgeSplashDamage/ScourgeNest": {
		name: "Evolve Virulent Spores",
		hotkey: "D",
		icon: "btn-upgrade-zagara-scourgesplashdamage",
		mask: false,
		y: 0,
		x: 2
	},
	"EvolveScourgeGasCostReduction/ScourgeNest": {
		name: "Evolve Simplified Genome",
		hotkey: "G",
		icon: "btn-upgrade-zagara-scourgegasreduction",
		mask: false,
		y: 0,
		x: 3
	},
	"SICommandCenter/SISCV": {
		name: "Build Infested Command Center",
		hotkey: "C",
		icon: "btn-building-stukov-infestedcommandcenter",
		mask: false,
		y: 0,
		x: 0
	},
	"RoachWarren/Drone": {
		name: "Mutate into Roach Warren",
		hotkey: "R",
		hotkey_NRS: "N",
		icon: "btn-building-zerg-roachwarren",
		mask: false,
		y: 1,
		x: 2
	},
	"InfestationPit/Drone": {
		name: "Mutate into Infestation Pit",
		hotkey: "I",
		icon: "btn-building-zerg-infestationpit",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveToBrutalisk/Queen": {
		name: "Evolve to Brutalisk",
		hotkey: "B",
		icon: "btn-ability-zerg-spawnbrutaliskex3",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToBrutalisk/Roach": {
		name: "Evolve to Brutalisk",
		hotkey: "B",
		icon: "btn-ability-zerg-spawnbrutaliskex3",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToBrutalisk/RoachBurrowed": {
		name: "Evolve to Brutalisk",
		hotkey: "B",
		icon: "btn-ability-zerg-spawnbrutaliskex3",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToBrutalisk/RavagerAbathur": {
		name: "Evolve to Brutalisk",
		hotkey: "B",
		icon: "btn-ability-zerg-spawnbrutaliskex3",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToBrutalisk/SwarmHost": {
		name: "Evolve to Brutalisk",
		hotkey: "B",
		icon: "btn-ability-zerg-spawnbrutaliskex3",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToBrutalisk/SwarmHostBurrowed": {
		name: "Evolve to Brutalisk",
		hotkey: "B",
		icon: "btn-ability-zerg-spawnbrutaliskex3",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToLeviathan/Mutalisk": {
		name: "Evolve to Leviathan",
		hotkey: "L",
		icon: "btn-unit-zerg-leviathan",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToLeviathan/GuardianMP": {
		name: "Evolve to Leviathan",
		hotkey: "L",
		icon: "btn-unit-zerg-leviathan",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToLeviathan/Devourer": {
		name: "Evolve to Leviathan",
		hotkey: "L",
		icon: "btn-unit-zerg-leviathan",
		mask: false,
		y: 2,
		x: 2
	},
	"EvolveToLeviathan/Viper": {
		name: "Evolve to Leviathan",
		hotkey: "L",
		icon: "btn-unit-zerg-leviathan",
		mask: false,
		y: 2,
		x: 4
	},
	"BuildCreepTumor/Queen": {
		name: "Spawn Creep Tumor",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-building-zerg-creeptumor",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphMorphalisk/Queen": {
		name: "Spawn Larvae",
		hotkey: "V",
		hotkey_NRS: "L",
		icon: "btn-unit-zerg-larva",
		mask: false,
		y: 2,
		x: 1
	},
	"Transfusion/Queen": {
		name: "Transfusion",
		hotkey: "T",
		icon: "btn-ability-zerg-transfusion-color",
		mask: false,
		y: 2,
		x: 2
	},
	"Ravager/Roach": {
		name: "Morph to Ravager",
		hotkey: "V",
		icon: "btn-unit-zerg-ravager",
		mask: false,
		y: 2,
		x: 0
	},
	"RavagerCorrosiveBile/Ravager": {
		name: "Corrosive Bile",
		hotkey: "C",
		icon: "btn-ability-zerg-corrosivebile",
		mask: false,
		y: 2,
		x: 0
	},
	"RavagerAbathurCorrosiveBile/RavagerAbathur": {
		name: "Corrosive Bile",
		hotkey: "C",
		icon: "btn-ability-zerg-corrosivebile",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidSwarmHostSpawnLocust/SwarmHostMP": {
		name: "Spawn Locusts",
		hotkey: "C",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidSwarmHostSpawnLocust/SwarmHostBurrowedMP": {
		name: "Spawn Locusts",
		hotkey: "C",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustLaunch/SwarmHost": {
		name: "Spawn Locusts",
		hotkey: "C",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustLaunch/SwarmHostRooted": {
		name: "Spawn Locusts",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustLaunch/SwarmHostBurrowed": {
		name: "Spawn Locusts",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustFlyingLaunch/SwarmHostSplitARooted": {
		name: "Spawn Locusts",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-locustflyer",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustFlyingLaunch/SwarmHostSplitABurrowed": {
		name: "Spawn Locusts",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-locustflyer",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustLaunchCreeper/SwarmHostSplitBRooted": {
		name: "Spawn Locusts",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustLaunchCreeper/SwarmHostSplitBBurrowed": {
		name: "Spawn Locusts",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 2,
		x: 0
	},
	"LocustMPFlyingSwoop/LocustMPFlying": {
		name: "Swoop",
		hotkey: "Z",
		icon: "btn-ability-neutral-ursadonleap",
		mask: false,
		y: 2,
		x: 0
	},
	"SwarmHostDeepBurrow/SwarmHostSplitB": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-deeptunnel",
		mask: false,
		y: 2,
		x: 1
	},
	"SwarmHostDeepBurrow/SwarmHostSplitBRooted": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-deeptunnel",
		mask: false,
		y: 2,
		x: 1
	},
	"SwarmHostDeepBurrow/SwarmHostSplitBBurrowed": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-deeptunnel",
		mask: false,
		y: 2,
		x: 1
	},
	"AbathurDeepTunnel/SwarmHost": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-deeptunnel",
		mask: false,
		y: 2,
		x: 1
	},
	"AbathurDeepTunnel/SwarmHostBurrowed": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-deeptunnel",
		mask: false,
		y: 2,
		x: 1
	},
	"SwarmHostBurrowDown": {
		name: "Burrow",
		hotkey: "D",
		icon: "btn-ability-zerg-burrow-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SwarmHostBurrowUp": {
		name: "Unburrow",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-upburrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"SwarmHostRoot": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-swarmhost_root",
		mask: false,
		y: 2,
		x: 4
	},
	"SwarmHostUproot": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-swarmhost_unroot",
		mask: false,
		y: 2,
		x: 4
	},
	"SwarmHostRootBurrow": {
		name: "Burrow",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-burrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"SwarmHostUprootUnburrow": {
		name: "Unburrow",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-upburrow-color",
		mask: false,
		y: 2,
		x: 4
	},
	"MorphToGuardian/Mutalisk": {
		name: "Morph to Guardian",
		hotkey: "G",
		icon: "btn-unit-zerg-primalguardian",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphtoDevourer/Mutalisk": {
		name: "Morph to Devourer",
		hotkey: "D",
		icon: "btn-unit-zerg-devourerex3",
		mask: false,
		y: 2,
		x: 1
	},
	"CorrosiveAcidDevourer/Devourer": {
		name: "Corrosive Acid",
		hotkey: "D",
		icon: "btn-upgrade-zerg-abathur-devourer-corrosivespray",
		mask: false,
		y: 2,
		x: 0
	},
	"ViperConsume/Viper": {
		name: "Consume",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-consume",
		mask: false,
		y: 2,
		x: 0
	},
	"FaceEmbrace/Viper": {
		name: "Abduct",
		hotkey: "D",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-abduct",
		mask: false,
		y: 2,
		x: 1
	},
	"BlindingCloud/Viper": {
		name: "Blinding Cloud",
		hotkey: "B",
		icon: "btn-ability-zerg-blindingcloud",
		mask: false,
		y: 2,
		x: 2
	},
	"DisablingCloud/Viper": {
		name: "Disabling Cloud",
		hotkey: "B",
		icon: "btn-ability-zerg-blindingcloud",
		mask: false,
		y: 2,
		x: 1
	},
	"ViperConsumption/Viper": {
		name: "Consumption",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-consume",
		mask: false,
		y: 2,
		x: 2
	},
	"ParasiticBomb/Viper": {
		name: "Parasitic Bomb",
		hotkey: "R",
		icon: "btn-ability-zerg-parasiticbomb",
		mask: false,
		y: 2,
		x: 3
	},
	"SymbioteCarapace/Brutalisk": {
		name: "Shell",
		hotkey: "E",
		icon: "btn-upgrade-zerg-groundcarapace-level1",
		mask: false,
		y: 1,
		x: 4
	},
	"BrutaliskDeepTunnel/Brutalisk": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-deeptunnel",
		mask: false,
		y: 2,
		x: 3
	},
	"HotSBioPlasmidDischarge/HotSLeviathan": {
		name: "Bio-Plasmid Discharge",
		hotkey: "Q",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"HotSBioStasis/HotSLeviathan": {
		name: "Bio-Stasis",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-corruption-color",
		mask: false,
		y: 2,
		x: 1
	},
	"PrimalSpawning/Zerus02Chrysalis": {
		name: "Spawn Locusts",
		hotkey: "",
		icon: "btn-unit-zerg-locust",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveGlialRegeneration/RoachWarren": {
		name: "Evolve Glial Reconstitution",
		hotkey: "G",
		icon: "btn-upgrade-zerg-glialreconstitution",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveTunnelingClaws/RoachWarren": {
		name: "Evolve Tunneling Claws",
		hotkey: "T",
		icon: "btn-upgrade-zerg-tunnelingclaws",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveHydriodicBile/RoachWarren": {
		name: "Evolve Hydriodic Bile",
		hotkey: "B",
		icon: "btn-upgrade-zerg-hydriaticacid",
		mask: false,
		y: 0,
		x: 2
	},
	"EvolveAdaptivePlating/RoachWarren": {
		name: "Evolve Adaptive Plating",
		hotkey: "D",
		icon: "btn-upgrade-zerg-adaptivecarapace",
		mask: false,
		y: 0,
		x: 3
	},
	"EvolveCorrosiveBileRadiusIncrease/RoachWarren": {
		name: "Evolve Bloated Bile Ducts",
		hotkey: "C",
		icon: "btn-ability-zerg-abathur-corrosivebilelarge",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolveCorrosiveBileDamageIncrease/RoachWarren": {
		name: "Evolve Potent Bile",
		hotkey: "E",
		icon: "potentbile_coop",
		mask: false,
		y: 1,
		x: 1
	},
	"Transfusion/EvolutionChamber": {
		name: "Evolve Bio-Mechanical Transfusion",
		hotkey: "T",
		icon: "btn-upgrade-zerg-abathur-biomechanicaltransfusion",
		mask: false,
		y: 0,
		x: 3
	},
	"EvolveHatcheryDoubleQueue/EvolutionChamber": {
		name: "Evolve Incubation Chamber",
		hotkey: "I",
		icon: "btn-upgrade-zerg-abathur-incubationchamber",
		mask: false,
		y: 0,
		x: 4
	},
	"EvolveInfestorEnergyUpgrade/InfestationPit": {
		name: "Evolve Pathogen Glands",
		hotkey: "G",
		hotkey_SC1: "M",
		icon: "btn-upgrade-zerg-pathogenglands",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchNeuralParasite/InfestationPit": {
		name: "Evolve Neural Parasite",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-ability-zerg-neuralparasite-color",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveAmorphousArmorcloud/InfestationPit": {
		name: "Evolve Microbial Shroud",
		hotkey: "C",
		icon: "btn-ability-zerg-darkswarm",
		mask: false,
		y: 0,
		x: 2
	},
	"HotSPressurizedGlands/InfestationPit": {
		name: "Evolve Pressurized Glands",
		hotkey: "P",
		icon: "btn-upgrade-zerg-pressurizedglands",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveViperImprovedCastRange/InfestationPit": {
		name: "Virulent Microbes",
		hotkey: "R",
		icon: "btn-upgrade-zerg-abathur-castrange",
		mask: false,
		y: 0,
		x: 1
	},
	"EvolveViciousGlaive/Spire": {
		name: "Evolve Vicious Glave",
		hotkey: "V",
		icon: "btn-upgrade-zerg-viciousglaive",
		mask: false,
		y: 0,
		x: 3
	},
	"EvolveSunderingGlave/Spire": {
		name: "Evolve Sundering Glave",
		hotkey: "S",
		icon: "btn-upgrade-zerg-explosiveglaive",
		mask: false,
		y: 0,
		x: 4
	},
	"EvolveGuardianAttackRangeIncrease/Spire": {
		name: "Evolve Prolonged Dispersion",
		hotkey: "E",
		icon: "btn-upgrade-zerg-abathur-prolongeddispersion",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolveDevourerAoEDamage/Spire": {
		name: "Evolve Corrosive Spray",
		hotkey: "D",
		icon: "btn-upgrade-zerg-abathur-devourer-corrosivespray",
		mask: false,
		y: 1,
		x: 1
	},
	"EvolveViciousGlaive/GreaterSpire": {
		name: "Evolve Vicious Glave",
		hotkey: "V",
		icon: "btn-upgrade-zerg-viciousglaive",
		mask: false,
		y: 0,
		x: 3
	},
	"EvolveSunderingGlave/GreaterSpire": {
		name: "Evolve Sundering Glave",
		hotkey: "S",
		icon: "btn-upgrade-zerg-explosiveglaive",
		mask: false,
		y: 0,
		x: 4
	},
	"EvolveGuardianAttackRangeIncrease/GreaterSpire": {
		name: "Evolve Prolonged Dispersion",
		hotkey: "E",
		icon: "btn-upgrade-zerg-abathur-prolongeddispersion",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolveDevourerAoEDamage/GreaterSpire": {
		name: "Evolve Corrosive Spray",
		hotkey: "D",
		icon: "btn-upgrade-zerg-abathur-devourer-corrosivespray",
		mask: false,
		y: 1,
		x: 1
	},
	"ToxicNestExplode/ToxicNest": {
		name: "Explode",
		hotkey: "X",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"SIRefinery/SISCV": {
		name: "Build Infested Refinery",
		hotkey: "R",
		icon: "btn-building-stukov-infestedrefinery",
		mask: false,
		y: 0,
		x: 1
	},
	"SICivilianStructure/SISCV": {
		name: "Build Infested Colonist Compound",
		hotkey: "V",
		icon: "btn-building-stukov-infestedcolonisthut",
		mask: false,
		y: 0,
		x: 2
	},
	"SIBarracks/SISCV": {
		name: "Build Infested Barracks",
		hotkey: "B",
		icon: "btn-building-stukov-infestedbarracks",
		mask: false,
		y: 1,
		x: 0
	},
	"SIEngineeringBay/SISCV": {
		name: "Build Infested Engineering Bay",
		hotkey: "E",
		icon: "btn-building-stukov-infestedengineeringbay",
		mask: false,
		y: 1,
		x: 1
	},
	"SIInfestedBunker/SISCV": {
		name: "Build Infested Bunker",
		hotkey: "U",
		icon: "btn-building-stukov-infestedbunkerform",
		mask: false,
		y: 2,
		x: 0
	},
	"SIMissileTurret/SISCV": {
		name: "Build Infested Missile Turret",
		hotkey: "T",
		icon: "btn-building-stukov-infestedturret",
		mask: false,
		y: 2,
		x: 1
	},
	"SIFactory/SISCV": {
		name: "Build Infested Factory",
		hotkey: "F",
		hotkey_NRS: "O",
		icon: "btn-building-stukov-infestedfactory",
		mask: false,
		y: 0,
		x: 0
	},
	"SIArmory/SISCV": {
		name: "Build Infested Armory",
		hotkey: "A",
		hotkey_NRS: "M",
		icon: "btn-building-stukov-infestedarmory",
		mask: false,
		y: 1,
		x: 0
	},
	"SIStarport/SISCV": {
		name: "Build Infested Starport",
		hotkey: "S",
		hotkey_NRS: "P",
		icon: "btn-building-stukov-infestedstarport",
		mask: false,
		y: 0,
		x: 1
	},
	"MorphToOverseer/SIOverlord": {
		name: "Morph to Overseer",
		hotkey: "V",
		icon: "btn-unit-zerg-overseer",
		mask: false,
		y: 2,
		x: 0
	},
	"ExplodeVolatileInfested/SIVolatileInfested": {
		name: "Explode",
		hotkey: "X",
		hotkey_NRS: "L",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EnableBuildingAttackVolatileInfested/SIVolatileInfested": {
		name: "Enable Structure Attack",
		hotkey: "F",
		hotkey_NRS: "G",
		icon: "btn-ability-zerg-attackstructure-color",
		mask: false,
		y: 2,
		x: 1
	},
	"DisableBuildingAttackVolatileInfested/SIVolatileInfested": {
		name: "Disable Structure Attack",
		hotkey: "G",
		hotkey_NRS: "B",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 2
	},
	"StukovInfestedDiamondbackSnare/StukovInfestedDiamondBack": {
		name: "Fungal Snare",
		hotkey: "Q",
		icon: "btn-ability-zerg-stukov-ensnare",
		mask: false,
		y: 2,
		x: 0
	},
	"StukovInfestedSiegeTankRoot/StukovInfestedSiegeTank": {
		name: "Root",
		hotkey: "E",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 0
	},
	"StukovInfestedSiegeTankUproot/StukovInfestedSiegeTank": {
		name: "Uproot",
		hotkey: "D",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 1
	},
	"StukovInfestedSiegeTankDeepTunnel/StukovInfestedSiegeTank": {
		name: "Deep Tunnel",
		hotkey: "R",
		icon: "btn-ability-zerg-deeptunnel",
		mask: false,
		y: 2,
		x: 2
	},
	"QueenClassicParasite/QueenClassic": {
		name: "Parasite",
		hotkey: "R",
		icon: "btn-ability-zerg-viper-ocularparasite",
		mask: false,
		y: 2,
		x: 0
	},
	"QueenMPEnsnare/QueenClassic": {
		name: "Ensnare",
		hotkey: "E",
		icon: "btn-ability-zerg-fungalgrowth-color",
		mask: false,
		y: 2,
		x: 1
	},
	"QueenMPSpawnBroodlings/QueenClassic": {
		name: "Spawn Broodlings",
		hotkey: "B",
		icon: "btn-ability-zerg-swarmseeds-color",
		mask: false,
		y: 2,
		x: 2
	},
	"CreepTumor/QueenClassic": {
		name: "Creep Tumor",
		hotkey: "C",
		hotkey_NRS: "N",
		icon: "btn-building-zerg-creeptumor",
		mask: false,
		y: 2,
		x: 3
	},
	"QueenClassicParasite/SIQueen": {
		name: "Ocular Symbiote",
		hotkey: "E",
		icon: "btn-ability-zerg-viper-ocularparasite",
		mask: false,
		y: 2,
		x: 0
	},
	"QueenMPSpawnBroodlings/SIQueen": {
		name: "Spawn Broodlings",
		hotkey: "B",
		icon: "btn-ability-zerg-swarmseeds-color",
		mask: false,
		y: 2,
		x: 1
	},
	"SIQueenFungalGrowth/SIQueen": {
		name: "Fungal Growth",
		hotkey: "F",
		icon: "btn-upgrade-zerg-stukov-researchqueenfungalgrowth",
		mask: false,
		y: 2,
		x: 2
	},
	"SIClusterRockets/StukovApocalisk": {
		name: "Cluster Rockets",
		hotkey: "Q",
		icon: "btn-upgrade-raynor-ripwavemissiles",
		mask: false,
		y: 2,
		x: 0
	},
	"ApocaliskBurrowCharge/StukovApocalisk": {
		name: "Burrow Charge",
		hotkey: "B",
		icon: "btn-upgrade-zerg-burrowcharge",
		mask: false,
		y: 2,
		x: 1
	},
	"SIUproot/SICommandCenter": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIRoot/SICommandCenterFlying": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIUproot/SICivilianStructure": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIRoot/SICivilianStructureFlying": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIUproot/SIBarracks": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIRoot/SIBarracksFlying": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIUproot/SIMissileTurret": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIRoot/SIMissileTurretFlying": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIUproot/SIFactory": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIRoot/SIFactoryFlying": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIUproot/SIStarport": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIRoot/SIStarportFlying": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"SIInfestedBunkerUproot/SIInfestedBunker": {
		name: "Uproot",
		hotkey: "R",
		hotkey_SC1: "E",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 2
	},
	"SIInfestedBunkerRoot/SIInfestedBunkerUprooted": {
		name: "Root",
		hotkey: "R",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 2
	},
	"SIStukovPlaceHordeRally/SICivilianStructure": {
		name: "Deploy Psi Emitter",
		hotkey: "Y",
		hotkey_SC1: "R",
		icon: "btn-ability-zerg-stukov-summonpsiemitter",
		mask: false,
		y: 1,
		x: 4
	},
	"SIStukovPlaceHordeRally/SIBarracks": {
		name: "Deploy Psi Emitter",
		hotkey: "Y",
		hotkey_SC1: "R",
		icon: "btn-ability-zerg-stukov-summonpsiemitter",
		mask: false,
		y: 1,
		x: 4
	},
	"SIStukovPlaceHordeRally/SIInfestedBunker": {
		name: "Deploy Psi Emitter",
		hotkey: "Y",
		hotkey_SC1: "R",
		icon: "btn-ability-zerg-stukov-summonpsiemitter",
		mask: false,
		y: 1,
		x: 4
	},
	"SISCV": {
		name: "Spawn Infested SCV",
		hotkey: "S",
		hotkey_NRS: "J",
		icon: "btn-unit-zerg-infestedscv",
		mask: false,
		y: 0,
		x: 0
	},
	"SIOverlord/SICommandCenter": {
		name: "Spawn Overlord",
		hotkey: "V",
		icon: "btn-unit-zerg-overlord",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchHeavyInfestation/SICommandCenter": {
		name: "Research Aggressive Incubation",
		hotkey: "G",
		icon: "btn-ability-zerg-stukov-infeststructureupgrade",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchSIBarracksTrainInfestedCivilianLevel2/SICivilianStructure": {
		name: "Evolve Infestation",
		hotkey: "E",
		icon: "btn-ability-stukov-infestedcivilianstructurelv1",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchSIBarracksTrainInfestedCivilianLevel3/SICivilianStructure": {
		name: "Evolve Infestation",
		hotkey: "E",
		icon: "btn-ability-stukov-infestedcivilianstructurelv2",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchSIBarracksTrainInfestedCivilianLevel4/SICivilianStructure": {
		name: "Evolve Infestation",
		hotkey: "E",
		icon: "btn-ability-stukov-infestedcivilianstructurelv3",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveStukovInfestedInfestedCivilianLeap/SICivilianStructure": {
		name: "Research Anaerobic Enhancement",
		hotkey: "A",
		icon: "btn-upgrade-zerg-stukov-infestedciviliansleap",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolveStukovInfestedCivilianSpawnBroodlingsOnDeath/SICivilianStructure": {
		name: "Evolve Broodling Gestation",
		hotkey: "B",
		icon: "btn-upgrade-zerg-stukov-infestedspawnbroodling",
		mask: false,
		y: 1,
		x: 1
	},
	"SIInfestedCivilian/SICivilianStructure": {
		name: "Spawn Infested Civilian",
		hotkey: "D",
		icon: "btn-unit-zerg-infestedcolonist",
		mask: false,
		y: 2,
		x: 0
	},
	"SIInfestedCivilian/SICivilianStructureFlying": {
		name: "Spawn Infested Civilian",
		hotkey: "D",
		icon: "btn-unit-zerg-infestedcolonist",
		mask: false,
		y: 2,
		x: 0
	},
	"SIInfestedMarine/SIBarracks": {
		name: "Spawn Infested Marine",
		hotkey: "A",
		icon: "btn-unit-zerg-infestedmarine",
		mask: false,
		y: 0,
		x: 0
	},
	"SITechLabBarracks/SIBarracks": {
		name: "Build Infested Tech Lab",
		hotkey: "X",
		hotkey_SC1: "Z",
		icon: "btn-building-stukov-infestedtechlab",
		mask: false,
		y: 2,
		x: 0
	},
	"EvolveSIMarineTrooperImprovedRange/SIBarracksTechLab": {
		name: "Evolve Retinal Augmentation",
		hotkey: "R",
		icon: "btn-upgrade-zerg-stukov-infestedmarinerangeupgrade",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolvePlaguedMunitions/SIBarracksTechLab": {
		name: "Evolve Plagued Munitions",
		hotkey: "G",
		icon: "btn-ability-stukov-plaugedmunitions",
		mask: false,
		y: 0,
		x: 1
	},
	"SIInfestedBunkerSpawnInfestedMarine/SIInfestedBunker": {
		name: "Spawn Infested Trooper",
		hotkey: "E",
		hotkey_SC1: "M",
		icon: "btn-unit-zerg-infestedmarine",
		mask: false,
		y: 0,
		x: 0
	},
	"TerranInfantryWeaponsLevel1/SIEngineeringBay": {
		name: "Upgrade Infantry Weapons",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkey_SC1: "W",
		icon: "btn-upgrade-terran-infantryweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"TerranInfantryArmorLevel1/SIEngineeringBay": {
		name: "Upgrade Infantry Armor",
		hotkey: "A",
		icon: "btn-upgrade-terran-infantryarmorlevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchInfestedBunkerLifeRegen/SIEngineeringBay": {
		name: "Research Regenerative Plating",
		hotkey: "R",
		icon: "btn-upgrade-zerg-stukov-bunkerformliferegen",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchInfestedBunkerArmor/SIEngineeringBay": {
		name: "Evolve Calcified Armor",
		hotkey: "C",
		icon: "btn-upgrade-zerg-stukov-infestedbunkermorelife",
		mask: false,
		y: 2,
		x: 1
	},
	"SIDiamondBack/SIFactory": {
		name: "Spawn Infested Diamondback",
		hotkey: "D",
		icon: "btn-unit-zerg-infesteddiamondback",
		mask: false,
		y: 0,
		x: 0
	},
	"SISiegeTank/SIFactory": {
		name: "Spawn Infested Siege Tank",
		hotkey: "S",
		hotkey_NRS: "I",
		hotkey_SC1: "T",
		icon: "btn-unit-zerg-infestedsiegetank",
		mask: false,
		y: 0,
		x: 1
	},
	"SITechLabFactory/SIFactory": {
		name: "Build Infested Tech Lab",
		hotkey: "X",
		hotkey_SC1: "Z",
		icon: "btn-building-stukov-infestedtechlab",
		mask: false,
		y: 2,
		x: 0
	},
	"EvolveSIDiamondbackImprovedEnsnare/SIFactoryTechLab": {
		name: "Research Saturated Cultures",
		hotkey: "S",
		icon: "btn-ability-zerg-stukov-ensnare",
		mask: false,
		y: 0,
		x: 0
	},
	"EvolveSIDiamondbackSnailTrail/SIFactoryTechLab": {
		name: "Evolve Caustic Mucus",
		hotkey: "C",
		icon: "btn-upgrade-zerg-stukov-diamondbacksnailtrail",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchAutoCreateInfestedCivilianAmmo/SIFactoryTechLab": {
		name: "Research Automated Mitosis",
		hotkey: "A",
		icon: "btn-upgrade-zerg-stukov-siegetankammoregen",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchInfestedSiegeTankArmoredDamage/SIFactoryTechLab": {
		name: "Evolve Acidic Enzymes",
		hotkey: "E",
		icon: "btn-upgrade-zerg-stukov-siegetankbonusdamage",
		mask: false,
		y: 0,
		x: 3
	},
	"TerranVehicleAndShipWeaponsLevel1/SIArmory": {
		name: "Upgrade Vehicle and Ship Weapons",
		hotkey: "E",
		hotkey_NRS: "A",
		hotkey_SC1: "W",
		icon: "btn-upgrade-terran-vehicleweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"TerranVehicleAndShipPlatingLevel1/SIArmory": {
		name: "Upgrade Vehicle and Ship Armor",
		hotkey: "V",
		hotkey_SC1: "P",
		icon: "btn-upgrade-terran-vehicleplatinglevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"SILiberator/SIStarport": {
		name: "Spawn Infested Liberator",
		hotkey: "N",
		hotkey_NRS: "E",
		icon: "btn-unit-zerg-infestedliberator",
		mask: false,
		y: 0,
		x: 0
	},
	"SIBanshee/SIStarport": {
		name: "Spawn Infested Banshee",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-unit-zerg-infestedbanshee",
		mask: false,
		y: 0,
		x: 1
	},
	"SIQueen": {
		name: "Spawn Brood Queen",
		hotkey: "U",
		hotkey_NRS: "Q",
		hotkey_SC1: "Q",
		icon: "btn-unit-zerg-classicqueen",
		mask: false,
		y: 0,
		x: 2
	},
	"SITechLabStarport/SIStarport": {
		name: "Build Infested Tech Lab",
		hotkey: "X",
		hotkey_SC1: "Z",
		icon: "btn-building-stukov-infestedtechlab",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchSILiberatorImprovedAoeAttack/SIStarportTechLab": {
		name: "Evolve Viral Contamination",
		hotkey: "V",
		icon: "btn-upgrade-zerg-stukov-infestedliberatoraoe",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchSILiberatorBecometheSwarm/SIStarportTechLab": {
		name: "Research Cloud Dispersal",
		hotkey: "C",
		icon: "btn-upgrade-zerg-stukov-infestedliberatorswarmcloud",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchStukovInfestedBansheeBurrowRegeneration/SIStarportTechLab": {
		name: "Evolve Rapid Hibernation",
		hotkey: "R",
		hotkey_SC1: "R",
		icon: "btn-upgrade-zerg-stukov-bansheeburrowregeneration",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchStukovInfestedBansheeInfestedLife/SIStarportTechLab": {
		name: "Research Braced Exoskeleton",
		hotkey: "B",
		hotkey_SC1: "L",
		icon: "btn-upgrade-zerg-stukov-bansheemorelife",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchSIQueenFungalGrowth/SIStarportTechLab": {
		name: "Evolve Fungal Growth",
		hotkey: "F",
		icon: "btn-upgrade-zerg-stukov-researchqueenfungalgrowth",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchSIQueenEnergy/SIStarportTechLab": {
		name: "Research Enhanced Mitochondria",
		hotkey: "E",
		icon: "btn-upgrade-zerg-stukov-queenenergyregen",
		mask: false,
		y: 1,
		x: 1
	},
	"DehakaLeapStomp/DehakaCoop": {
		name: "Leap",
		hotkey: "Q",
		icon: "btn-ability-zerg-dehaka-leapattack",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaIntimidatingRoar/DehakaCoop": {
		name: "Intimidating Roar",
		hotkey: "W",
		icon: "btn-ability-zerg-dehaka-intimidatingroar",
		mask: false,
		y: 2,
		x: 1
	},
	"DehakaConsume/DehakaCoop": {
		name: "Devour",
		hotkey: "E",
		icon: "btn-ability-zerg-dehaka-consume",
		mask: false,
		y: 2,
		x: 2
	},
	"MammothBreath/DehakaCoop": {
		name: "Scorching Breath",
		hotkey: "R",
		icon: "btn-ability-zerg-dehaka-godzillabreath",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaDeepTunnel/DehakaCoop": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-dehaka-deeptunnelunlocked",
		mask: false,
		y: 2,
		x: 4
	},
	"DehakaLearnAbilities/DehakaCoop": {
		name: "Evolve Mutations",
		hotkey: "T",
		icon: "btn-ability-zerg-dehaka-levelup",
		mask: false,
		y: 1,
		x: 4
	},
	"LearnDehakaMendingAura/DehakaCoop": {
		name: "Evolve Primal Regeneration",
		hotkey: "Z",
		icon: "btn-ability-zerg-dehaka-healingaura",
		mask: false,
		y: 1,
		x: 0
	},
	"LearnDehakaDetector/DehakaCoop": {
		name: "Evolve Keen Senses",
		hotkey: "X",
		icon: "btn-ability-dehaka-detector",
		mask: false,
		y: 1,
		x: 1
	},
	"LearnDehakaArmorUpgrade/DehakaCoop": {
		name: "Evolve Chitinous Plating",
		hotkey: "C",
		icon: "btn-upgrade-dehaka-groundcarapace-level3",
		mask: false,
		y: 1,
		x: 2
	},
	"DehakaAirAttackUpgrade/DehakaCoop": {
		name: "Evolve Deadly Reach",
		hotkey: "V",
		icon: "btn-ability-zerg-dehaka-attackair",
		mask: false,
		y: 1,
		x: 3
	},
	"LearnDehakaLeapStomp/DehakaCoop": {
		name: "Evolve Leap",
		hotkey: "Q",
		icon: "btn-ability-zerg-dehaka-leapattack",
		mask: false,
		y: 2,
		x: 0
	},
	"LearnDehakaIntimidatingRoar/DehakaCoop": {
		name: "Evolve Intimidating Roar",
		hotkey: "W",
		icon: "btn-ability-zerg-dehaka-intimidatingroar",
		mask: false,
		y: 2,
		x: 1
	},
	"LearnDehakaConsume/DehakaCoop": {
		name: "Evolve Devour",
		hotkey: "E",
		icon: "btn-ability-zerg-dehaka-consume",
		mask: false,
		y: 2,
		x: 2
	},
	"LearnDehakaMammothBreath/DehakaCoop": {
		name: "Evolve Scorching Breath",
		hotkey: "R",
		icon: "btn-ability-zerg-dehaka-godzillabreath",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaBuild/DehakaDrone": {
		name: "Summon Structures",
		hotkey: "B",
		icon: "btn-ability-zerg-basicmutation",
		mask: true,
		y: 2,
		x: 0
	},
	"DehakaHatchery/DehakaDrone": {
		name: "Summon Primal Hive",
		hotkey: "H",
		icon: "btn-building-dehaka-primalhatchery",
		mask: false,
		y: 0,
		x: 0
	},
	"DehakaBarracks/DehakaDrone": {
		name: "Summon Primal Warden",
		hotkey: "B",
		icon: "btn-building-dehaka-primalbarracks",
		mask: false,
		y: 0,
		x: 1
	},
	"DehakaGlevigStructure/DehakaDrone": {
		name: "Summon Glevig’s Den",
		hotkey: "A",
		icon: "btn-building-dehaka-glevignest",
		mask: false,
		y: 1,
		x: 0
	},
	"DehakaMurvarStructure/DehakaDrone": {
		name: "Summon Murvar’s Den",
		hotkey: "S",
		icon: "btn-building-dehaka-murvarnest",
		mask: false,
		y: 1,
		x: 1
	},
	"DehakaDakrunStructure/DehakaDrone": {
		name: "Summon Dakrun’s Den",
		hotkey: "D",
		icon: "btn-building-dehaka-dakrunnest",
		mask: false,
		y: 1,
		x: 2
	},
	"DehakaNydusDestroyer/DehakaDrone": {
		name: "Summon Primal Wurm",
		hotkey: "Z",
		icon: "btn-building-dehaka-primalwurm",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaRavasaurMerge/DehakaZerglingLevel2": {
		name: "Primal Combat",
		hotkey: "V",
		icon: "btn-unit-collection-primal-ravasaur",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaRoachLevel2Merge/DehakaRoachLevel2": {
		name: "Primal Combat",
		hotkey: "V",
		icon: "btn-unit-collection-primal-roachupgrade",
		mask: false,
		y: 2,
		x: 2
	},
	"DehakaRoachGuardianMerge/DehakaRoachLevel2": {
		name: "Primal Combat",
		hotkey: "G",
		icon: "btn-unit-collection-primal-guardian",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaGuardianMineCharge/DehakaGuardian": {
		name: "Explosive Spores",
		hotkey: "D",
		icon: "btn-ability-zerg-dehaka-guardian-explosivespores",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaHydraliskToMutalisk/DehakaHydraliskLevel2": {
		name: "Primal Combat",
		hotkey: "T",
		icon: "btn-unit-collection-primal-mutalisk",
		mask: false,
		y: 2,
		x: 2
	},
	"DehakaHydraliskImpalerMerge/DehakaHydraliskLevel2": {
		name: "Primal Combat",
		hotkey: "V",
		icon: "btn-unit-collection-primal-lurker",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaSpawnLocusts/DehakaSwarmHost": {
		name: "Spawn Primal Locusts",
		hotkey: "C",
		icon: "btn-unit-collection-primal-creeperhostspawn",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaSpawnLocusts/DehakaSwarmHostBurrowed": {
		name: "Spawn Primal Locusts",
		hotkey: "C",
		icon: "btn-unit-collection-primal-creeperhostspawn",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaSpawnLocustsBomb/DehakaPrimalSwarmHost": {
		name: "Spawn Explosive Creeper",
		hotkey: "C",
		icon: "btn-unit-collection-primal-swarmhostspawn",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaSpawnLocustsBomb/DehakaPrimalSwarmHostBurrowed": {
		name: "Spawn Explosive Creeper",
		hotkey: "C",
		icon: "btn-unit-collection-primal-swarmhostspawn",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaSwarmHostMerge/DehakaSwarmHost": {
		name: "Primal Combat",
		hotkey: "V",
		icon: "btn-unit-collection-primal-swarmhost",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaUltraliskCrashingCharge/DehakaUltraliskLevel2": {
		name: "Brutal Charge",
		hotkey: "Q",
		icon: "btn-ability-zerg-dehaka-ultralisk-brutalcharge",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaUltraliskLevel2Merge/DehakaUltraliskLevel2": {
		name: "Primal Combat",
		hotkey: "V",
		icon: "btn-unit-collection-primal-tyrannozor",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaTyrannozorFanOfKnives/DehakaUltraliskLevel3": {
		name: "Barrage of Spikes",
		hotkey: "Q",
		icon: "btn-ability-zerg-dehaka-tyrannozor-barrageofspikes",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaDrone/DehakaHatchery": {
		name: "Spawn Primal Drone",
		hotkey: "D",
		icon: "btn-unit-collection-primal-drone",
		mask: false,
		y: 0,
		x: 0
	},
	"BuildDehakaExtractor/DehakaHatchery": {
		name: "Mutate Extractor",
		hotkey: "E",
		icon: "btn-building-dehaka-extractor",
		mask: false,
		y: 1,
		x: 0
	},
	"DehakaLearnPrimalWeaponsLevel1/DehakaHatchery": {
		name: "Evolve Primal Attacks",
		hotkey: "A",
		icon: "btn-upgrade-dehaka-bothattacks-level1",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaLearnPrimalArmorLevel1/DehakaHatchery": {
		name: "Evolve Primal Carapace",
		hotkey: "C",
		icon: "btn-upgrade-dehaka-groundcarapace-level1",
		mask: false,
		y: 2,
		x: 1
	},
	"PrimalBuildingRoot/DehakaHatcheryUprooted": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-dehaka-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"PrimalBuildingUproot/DehakaHatchery": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-dehaka-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"PrimalBuildingRoot/DehakaBarracksUprooted": {
		name: "Root",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-dehaka-uproot-color",
		mask: false,
		y: 2,
		x: 3
	},
	"PrimalBuildingUproot/DehakaBarracks": {
		name: "Uproot",
		hotkey: "R",
		hotkey_NRS: "U",
		hotkey_SC1: "U",
		icon: "btn-ability-zerg-dehaka-root-color",
		mask: false,
		y: 2,
		x: 3
	},
	"DehakaZergling/DehakaBarracks": {
		name: "Spawn Primal Zergling",
		hotkey: "Z",
		icon: "btn-unit-collection-primal-zergling",
		mask: false,
		y: 0,
		x: 0
	},
	"DehakaRoach/DehakaBarracks": {
		name: "Spawn Primal Roach",
		hotkey: "C",
		icon: "btn-unit-collection-primal-roach",
		mask: false,
		y: 0,
		x: 1
	},
	"DehakaHydralisk/DehakaBarracks": {
		name: "Spawn Primal Hydralisk",
		hotkey: "H",
		icon: "btn-unit-collection-primal-hydralisk",
		mask: false,
		y: 0,
		x: 2
	},
	"DehakaSwarmHost/DehakaBarracks": {
		name: "Spawn Primal Host",
		hotkey: "W",
		icon: "btn-unit-collection-primal-creeperhost",
		mask: false,
		y: 1,
		x: 0
	},
	"DehakaUltralisk/DehakaBarracks": {
		name: "Spawn Primal Ultralisk",
		hotkey: "U",
		hotkey_NRS: "A",
		hotkey_SC1: "A",
		icon: "btn-unit-collection-primal-ultralisk",
		mask: false,
		y: 1,
		x: 1
	},
	"ConsumeDrone/DehakaCoopReviveCocoon": {
		name: "Devour Drone",
		hotkey: "E",
		icon: "btn-ability-zerg-dehaka-consume",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchDehakaRavasaurVSArmor/DehakaGlevigStructure": {
		name: "Evolve Dissolving Acid",
		hotkey: "Q",
		icon: "btn-ability-zerg-dehaka-ravasaur-dissolvingacid",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchDehakaRavasaurRange/DehakaGlevigStructure": {
		name: "Evolve Enlarged Parotid Glands",
		hotkey: "W",
		icon: "btn-ability-zerg-dehaka-ravasaur-englargedparotidglands",
		mask: false,
		y: 0,
		x: 1
	},
	"DehakaRoachMoveSpeed/DehakaGlevigStructure": {
		name: "Evolve Glial Reconstitution",
		hotkey: "E",
		icon: "btn-ability-zerg-dehaka-roach-glialreconstruction",
		mask: false,
		y: 0,
		x: 2
	},
	"DehakaGlevigRoachFireBreath/DehakaGlevigStructure": {
		name: "Evolve Concentrated Fire",
		hotkey: "R",
		icon: "btn-ability-zerg-fireroach-increasefiredamage",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchDehakaHydraliskSpeed/DehakaGlevigStructure": {
		name: "Evolve Muscular Augments",
		hotkey: "A",
		icon: "btn-ability-zerg-dehaka-hydralisk-muscularaugments",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchDehakaImpalerTenderize/DehakaGlevigStructure": {
		name: "Evolve Tenderize",
		hotkey: "S",
		icon: "btn-ability-zerg-dehaka-impaler-tenderize",
		mask: false,
		y: 1,
		x: 1
	},
	"ResearchSlicingGlave/DehakaMurvarStructure": {
		name: "Evolve Slicing Glave",
		hotkey: "Q",
		icon: "btn-ability-dehaka-airbonusdamage",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchDehakaMutaliskDamageReduction/DehakaMurvarStructure": {
		name: "Evolve Shifting Carapace",
		hotkey: "W",
		icon: "btn-ability-dehaka-damagereductionwhilemoving",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchDehakaMutaliskRespawnOnDeath/DehakaMurvarStructure": {
		name: "Evolve Primal Reconstitution",
		hotkey: "E",
		icon: "btn-ability-zerg-dehaka-mutalisk-primalreconstitution",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchDehakaGuardianExplosiveBomb/DehakaMurvarStructure": {
		name: "Evolve Explosive Spores",
		hotkey: "R",
		icon: "btn-ability-zerg-dehaka-guardian-explosivespores",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchDehakaGuardianFury/DehakaMurvarStructure": {
		name: "Evolve Primordial Fury",
		hotkey: "T",
		icon: "btn-ability-zerg-dehaka-guardian-primordialfury",
		mask: false,
		y: 0,
		x: 4
	},
	"DehakaMurvarCreeperAir/DehakaMurvarStructure": {
		name: "Evolve Aerial Burst Sacs",
		hotkey: "A",
		icon: "btn-ability-zerg-dehaka-creeperhost-spawncreepers",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchDehakaUltraliskCrashingCharge/DehakaDakrunStructure": {
		name: "Evolve Brutal Charge",
		hotkey: "Q",
		icon: "btn-ability-zerg-dehaka-ultralisk-brutalcharge",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchDehakaUltraliskRegen/DehakaDakrunStructure": {
		name: "Evolve Healing Adaptation",
		hotkey: "W",
		icon: "btn-ability-zerg-dehaka-ultralisk-healingadaptation",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchDehakaUltraliskBash/DehakaDakrunStructure": {
		name: "Evolve Impaling Strike",
		hotkey: "E",
		icon: "btn-ability-zerg-dehaka-ultralisk-impalingstrike",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchDehakaTyrannozorFanOfKnives/DehakaDakrunStructure": {
		name: "Evolve Barrage of Spikes",
		hotkey: "R",
		icon: "btn-ability-zerg-dehaka-tyrannozor-barrageofspikes",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchDehakaTyrannozorArmorAura/DehakaDakrunStructure": {
		name: "Evolve Tyrant’s Protection",
		hotkey: "T",
		icon: "btn-ability-zerg-dehaka-tyrannozor-tyrantprotection",
		mask: false,
		y: 0,
		x: 4
	},
	"NydusDestroyerBeam/DehakaNydusDestroyer": {
		name: "Bile Stream",
		hotkey: "Q",
		icon: "btn-ability-dehaka-explosiveshot",
		mask: false,
		y: 2,
		x: 0
	},
	"NydusDestroyerDeepTunnel/DehakaNydusDestroyer": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-dehaka-deeptunnelunlocked",
		mask: false,
		y: 2,
		x: 4
	},
	"DehakaNydusDestroyerTimedNoFoodBeam/DehakaNydusDestroyerTimedNoFood": {
		name: "Bile Stream",
		hotkey: "Q",
		icon: "btn-ability-dehaka-explosiveshot",
		mask: false,
		y: 2,
		x: 0
	},
	"GreaterNydusDestroyerDeepTunnel/DehakaNydusDestroyerTimedNoFood": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-dehaka-deeptunnelunlocked",
		mask: false,
		y: 2,
		x: 4
	},
	"GlevigFirebreath/DehakaGlevig": {
		name: "Incendiary Acid",
		hotkey: "Q",
		icon: "btn-ability-zerg-yagdra-firewave",
		mask: false,
		y: 2,
		x: 0
	},
	"GlevigTunnel/DehakaGlevig": {
		name: "Deep Tunnel",
		hotkey: "D",
		icon: "btn-ability-zerg-dehaka-deeptunnelunlocked",
		mask: false,
		y: 2,
		x: 4
	},
	"CoopMurvarSpawnCreepers/DehakaMurvar": {
		name: "Spawn Swarm",
		hotkey: "Q",
		icon: "btn-ability-zerg-slivan-spawncreepers",
		mask: false,
		y: 2,
		x: 0
	},
	"MurvarPukeCoop/DehakaMurvar": {
		name: "Oppressive Stench",
		hotkey: "W",
		icon: "btn-ability-zerg-slivan-disablingcloud",
		mask: false,
		y: 2,
		x: 1
	},
	"DakrunCrashingCharge/DehakaDakrun": {
		name: "Brutal Charge",
		hotkey: "Q",
		icon: "btn-ability-zerg-kraith-chargingcrash",
		mask: false,
		y: 2,
		x: 0
	},
	"GaryStetmannOrb/GaryStetmann": {
		name: "E-Gorb",
		hotkey: "T",
		icon: "btn-ability-stetmann-garytravelingdamageorb",
		mask: false,
		y: 2,
		x: 0
	},
	"PowerTowerOverchargeStetmannSpeed/GaryStetmann": {
		name: "Stetellite Overcharge",
		hotkey: "C",
		icon: "btn-ability-stetmann-garystetelliteovercharge-speed",
		mask: false,
		y: 2,
		x: 1
	},
	"GaryStetmannRecall/GaryStetmann": {
		name: "Semi-Stable Mass Transportation",
		hotkey: "R",
		icon: "btn-ability-stetmann-garymassteleport",
		mask: false,
		y: 2,
		x: 2
	},
	"MorphToSuperGaryStetmann/GaryStetmann": {
		name: "Super Gary Transformation Sequence",
		hotkey: "U",
		icon: "btn-unit-stetmann-supergary",
		mask: false,
		y: 2,
		x: 3
	},
	"CancelSuperGaryStetmannMorph": {
		name: "Cancel",
		hotkey: "Escape",
		icon: "btn-command-cancel",
		mask: true,
		y: 2,
		x: 4
	},
	"GaryStetmannOrb/SuperGaryStetmann": {
		name: "E-Gorb",
		hotkey: "T",
		icon: "btn-ability-stetmann-garytravelingdamageorb",
		mask: false,
		y: 2,
		x: 0
	},
	"PowerTowerOverchargeStetmannSpeed/SuperGaryStetmann": {
		name: "Stetellite Overcharge",
		hotkey: "C",
		icon: "btn-ability-stetmann-garystetelliteovercharge-speed",
		mask: false,
		y: 2,
		x: 1
	},
	"GaryStetmannRecall/SuperGaryStetmann": {
		name: "Semi-Stable Mass Transportation",
		hotkey: "R",
		icon: "btn-ability-stetmann-garymassteleport",
		mask: false,
		y: 2,
		x: 2
	},
	"PowerFieldSuperGaryStetmannSpeed/SuperGaryStetmann": {
		name: "Gary-zone",
		hotkey: "E",
		icon: "btn-ability-stetmann-garypersonalstetzone-speed",
		mask: false,
		y: 2,
		x: 3
	},
	"DroneStetmann/LarvaStetmann": {
		name: "Morph to Mecha Drone",
		hotkey: "D",
		icon: "btn-unit-collection-drone-mecha",
		mask: false,
		y: 0,
		x: 0
	},
	"OverlordStetmann/LarvaStetmann": {
		name: "Morph to Mecha Overlord",
		hotkey: "V",
		icon: "btn-unit-collection-overlord-mecha",
		mask: false,
		y: 0,
		x: 1
	},
	"ZerglingStetmann/LarvaStetmann": {
		name: "Morph to Mecha Zergling",
		hotkey: "Z",
		icon: "btn-unit-collection-zergling-mecha",
		mask: false,
		y: 0,
		x: 2
	},
	"HydraliskStetmann/LarvaStetmann": {
		name: "Morph to Mecha Hydralisk",
		hotkey: "H",
		icon: "btn-unit-collection-hydralisk-mecha",
		mask: false,
		y: 1,
		x: 0
	},
	"CorruptorStetmann/LarvaStetmann": {
		name: "Morph to Mecha Corruptor",
		hotkey: "A",
		icon: "btn-unit-collection-corruptor-mecha",
		mask: false,
		y: 1,
		x: 2
	},
	"InfestorStetmann/LarvaStetmann": {
		name: "Morph to Mecha Infestor",
		hotkey: "F",
		icon: "btn-unit-collection-infestor-mecha",
		mask: false,
		y: 1,
		x: 3
	},
	"UltraliskStetmann/LarvaStetmann": {
		name: "Morph to Mecha Ultralisk",
		hotkey: "U",
		icon: "btn-unit-collection-ultralisk-mecha",
		mask: false,
		y: 2,
		x: 1
	},
	"HatcheryStetmann/DroneStetmann": {
		name: "Mutate into Mecha Hatchery",
		hotkey: "H",
		icon: "btn-building-zerg-hatchery-mecha",
		mask: false,
		y: 0,
		x: 0
	},
	"ExtractorStetmann/DroneStetmann": {
		name: "Mutate into Mecha Extractor",
		hotkey: "E",
		icon: "btn-building-zerg-extractor-mecha",
		mask: false,
		y: 0,
		x: 1
	},
	"SpawningPoolStetmann/DroneStetmann": {
		name: "Mutate into Mecha Spawning Pool",
		hotkey: "S",
		icon: "btn-building-zerg-spawningpool-mecha",
		mask: false,
		y: 1,
		x: 0
	},
	"EvolutionChamberStetmann/DroneStetmann": {
		name: "Mutate into Mecha Evolution Chamber",
		hotkey: "V",
		icon: "btn-building-zerg-evolutionchamber-mecha",
		mask: false,
		y: 1,
		x: 1
	},
	"BanelingNestStetmann/DroneStetmann": {
		name: "Mutate into Mecha Baneling Nest",
		hotkey: "B",
		icon: "btn-building-zerg-banelingnest-mecha",
		mask: false,
		y: 1,
		x: 2
	},
	"SpineCrawlerStetmann/DroneStetmann": {
		name: "Mutate into Mecha Spine Crawler",
		hotkey: "C",
		icon: "btn-building-zerg-spinecrawler-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"SporeCrawlerStetmann/DroneStetmann": {
		name: "Mutate into Mecha Spore Crawler",
		hotkey: "A",
		icon: "btn-building-zerg-sporecrawler-mecha",
		mask: false,
		y: 2,
		x: 1
	},
	"HydraliskDenStetmann/DroneStetmann": {
		name: "Mutate into Mecha Hydralisk Den",
		hotkey: "H",
		icon: "btn-building-zerg-hydraliskden-mecha",
		mask: false,
		y: 0,
		x: 0
	},
	"InfestationPitStetmann/DroneStetmann": {
		name: "Mutate into Mecha Infestation Pit",
		hotkey: "I",
		icon: "btn-building-zerg-infestationpit-mecha",
		mask: false,
		y: 0,
		x: 1
	},
	"SpireStetmann/DroneStetmann": {
		name: "Mutate into Mecha Spire",
		hotkey: "S",
		icon: "btn-building-zerg-spire-mecha",
		mask: false,
		y: 1,
		x: 0
	},
	"UltraliskCavernStetmann/DroneStetmann": {
		name: "Mutate into Mecha Ultralisk Cavern",
		hotkey: "U",
		icon: "btn-building-zerg-ultraliskcavern-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphToOverseerStetmann/OverlordStetmann": {
		name: "Morph to Mecha Overseer",
		hotkey: "V",
		icon: "btn-unit-collection-overseer-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphtoOverseerSiegeStetmann/OverseerStetmann": {
		name: "Oversight",
		hotkey: "W",
		hotkeySet: "OverseerModes",
		icon: "btn-ability-zerg-overlord-oversight",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphtoOverseerNormalStetmann/OverseerStetmann": {
		name: "Cancel Oversight",
		hotkey: "R",
		hotkeySet: "OverseerModes",
		icon: "btn-ability-zerg-overlord-oversight-off",
		mask: false,
		y: 2,
		x: 1
	},
	"BanelingStetmann/ZerglingStetmann": {
		name: "Morph to Mecha Baneling",
		hotkey: "E",
		icon: "btn-unit-collection-baneling-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"ExplodeStetmann/BanelingStetmann": {
		name: "Explode",
		hotkey: "X",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ExplodeStetmann/BanelingStetmannBurrowed": {
		name: "Explode",
		hotkey: "X",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EnableBuildingAttack/BanelingStetmann": {
		name: "Enable Structure Attack",
		hotkey: "F",
		icon: "btn-ability-zerg-attackstructure-color",
		mask: false,
		y: 2,
		x: 1
	},
	"DisableBuildingAttack/BanelingStetmann": {
		name: "Disable Structure Attack",
		hotkey: "G",
		icon: "btn-ability-zerg-explode-color",
		mask: false,
		y: 2,
		x: 1
	},
	"BanelingStetmannMovementSpeed/BanelingStetmann": {
		name: "Anti-Centripetal Rocket Servos",
		hotkey: "C",
		icon: "btn-upgrade-stetmann-mechacentrifugalhooks",
		mask: false,
		y: 2,
		x: 2
	},
	"RavagerStetmannCorrosiveBile/RavagerStetmann": {
		name: "Environmentally Unfriendly Eruption",
		hotkey: "C",
		icon: "btn-ability-zerg-corrosivebile",
		mask: false,
		y: 2,
		x: 0
	},
	"HydraliskStetmannMissilePowerOn": {
		name: "Juiced Up Payload: On",
		hotkey: "F",
		hotkeySet: "HoldFire",
		icon: "btn-ability-stetmann-hydraliskmissilepoweron",
		mask: false,
		y: 2,
		x: 0
	},
	"HydraliskStetmannMissilePowerOff/HydraliskStetmann": {
		name: "Juiced Up Payload: Off",
		hotkey: "G",
		hotkeySet: "HoldFire",
		icon: "btn-ability-stetmann-hydraliskmissilepoweroff",
		mask: false,
		y: 2,
		x: 1
	},
	"LurkerStetmann/HydraliskStetmann": {
		name: "Morph to Mecha Lurker",
		hotkey: "E",
		icon: "btn-unit-collection-lurker-mecha",
		mask: false,
		y: 2,
		x: 2
	},
	"LurkerStetmannTunnelingBurst/LurkerStetmann": {
		name: "Tunnel of TERROR Algorithm",
		hotkey: "B",
		icon: "btn-ability-stetmann-lurkertunnelingburst",
		mask: false,
		y: 2,
		x: 0
	},
	"LurkerStetmannChannelingSpines/LurkerStetmann": {
		name: "Focused Strike Algorithm",
		hotkey: "C",
		icon: "btn-ability-stetmann-lurkerchannelingspines",
		mask: false,
		y: 2,
		x: 1
	},
	"LurkerStetmannTunnelingBurst/LurkerStetmannBurrowed": {
		name: "Tunnel of TERROR Algorithm",
		hotkey: "B",
		icon: "btn-ability-stetmann-lurkertunnelingburst",
		mask: false,
		y: 2,
		x: 0
	},
	"LurkerStetmannChannelingSpines/LurkerStetmannBurrowed": {
		name: "Focused Strike Algorithm",
		hotkey: "C",
		icon: "btn-ability-stetmann-lurkerchannelingspines",
		mask: false,
		y: 2,
		x: 1
	},
	"CorruptorStetmannMissilePods/CorruptorStetmann": {
		name: "Cluster Busters",
		hotkey: "E",
		icon: "btn-ability-stetmann-corruptormissilebarrage",
		mask: false,
		y: 2,
		x: 0
	},
	"CausticSprayStetmann/CorruptorStetmann": {
		name: "Terraclean Solvent",
		hotkey: "V",
		icon: "btn-ability-stetmann-corruptorcausticspray",
		mask: false,
		y: 2,
		x: 1
	},
	"BroodLordStetmann/CorruptorStetmann": {
		name: "Morph to Mecha Battlecarrier Lord",
		hotkey: "B",
		icon: "btn-unit-collection-broodlord-mecha",
		mask: false,
		y: 2,
		x: 2
	},
	"BroodLordStetmannBroodlings/BroodLordStetmann": {
		name: "Ready Mecha Broodling",
		hotkey: "B",
		icon: "btn-unit-collection-symbiote-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"BroodLordStetmannBombers/BroodLordStetmann": {
		name: "Build Mecha Locusceptor",
		hotkey: "I",
		icon: "btn-unit-collection-creeperhostspawnflyer-mecha",
		mask: false,
		y: 2,
		x: 1
	},
	"BroodLordStetmannYamatoCannon": {
		name: "Stetmato Cannon",
		hotkey: "Y",
		icon: "btn-ability-stetmann-battlecarrierlordmechayamatocannon",
		mask: false,
		y: 2,
		x: 2
	},
	"InfestorStetmannEggLaunch/InfestorStetmann": {
		name: "Roaches Away!",
		hotkey: "T",
		icon: "btn-ability-stetmann-infestorrainofroaches",
		mask: false,
		y: 2,
		x: 0
	},
	"InfestorStetmannHealingTentacle/InfestorStetmann": {
		name: "UMI-C Charging Protocol",
		hotkey: "E",
		icon: "btn-ability-stetmann-infestorrecharge",
		mask: false,
		y: 2,
		x: 1
	},
	"InfestorStetmannInfestBuilding/InfestorStetmann": {
		name: "Deconstructive Roach-nites",
		hotkey: "D",
		icon: "btn-ability-stetmann-infestorbuildinginfestation",
		mask: false,
		y: 2,
		x: 2
	},
	"InfestorStetmannEggLaunch/InfestorStetmannBurrowed": {
		name: "Roaches Away!",
		hotkey: "T",
		icon: "btn-ability-stetmann-infestorrainofroaches",
		mask: false,
		y: 2,
		x: 0
	},
	"InfestorStetmannHealingTentacle/InfestorStetmannBurrowed": {
		name: "UMI-C Charging Protocol",
		hotkey: "E",
		icon: "btn-ability-stetmann-infestorrecharge",
		mask: false,
		y: 2,
		x: 1
	},
	"InfestorStetmannInfestBuilding/InfestorStetmannBurrowed": {
		name: "Deconstructive Roach-nites",
		hotkey: "D",
		icon: "btn-ability-stetmann-infestorbuildinginfestation",
		mask: false,
		y: 2,
		x: 2
	},
	"UltraliskStetmannBurrowCharge/UltraliskStetmann": {
		name: "Vectored Burrow Charge",
		hotkey: "B",
		icon: "btn-ability-stetmann-mechaburrowcharge",
		mask: false,
		y: 2,
		x: 0
	},
	"UltraliskStetmannMechanicalLifeLeech/UltraliskStetmann": {
		name: "Mecha Mooch Module",
		hotkey: "E",
		icon: "btn-ability-stetmann-ultraliskmechanicalassimilation",
		mask: false,
		y: 2,
		x: 1
	},
	"FASTOverloadStetmann/PowerTowerStetmann": {
		name: "F.A.S.T. Overload",
		hotkey: "V",
		icon: "btn-ability-stetmann-stetelliteoverloadspeed",
		mask: false,
		y: 0,
		x: 0
	},
	"HUGSOverloadStetmann/PowerTowerStetmann": {
		name: "H.U.G.S. Overload",
		hotkey: "V",
		icon: "btn-ability-stetmann-stetelliteoverloadhealth",
		mask: false,
		y: 0,
		x: 0
	},
	"JUICEOverloadStetmann/PowerTowerStetmann": {
		name: "J.U.I.C.E. Overload",
		hotkey: "V",
		icon: "btn-ability-stetmann-stetelliteoverloadenergy",
		mask: false,
		y: 0,
		x: 0
	},
	"LarvaStetmann": {
		name: "Select Mecha Larva",
		hotkey: "S",
		icon: "btn-unit-zerg-larva-mecha",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchOverlordStetmannSpeed": {
		name: "Research Pneumatized Fuselage",
		hotkey: "P",
		hotkey_NRS: "C",
		icon: "btn-upgrade-stetmann-mechapneumatizedcarapace",
		mask: false,
		y: 1,
		x: 0
	},
	"ResearchOverlordStetmannVentralSacks": {
		name: "Research Ventral Pods",
		hotkey: "E",
		icon: "btn-upgrade-stetmann-mechaventralsacs",
		mask: false,
		y: 1,
		x: 1
	},
	"RallyEggStetmann": {
		name: "Set Worker Rally Point",
		hotkey: "G",
		icon: "btn-ability-zerg-setworkerrallypoint",
		mask: true,
		y: 1,
		x: 3
	},
	"LairStetmann/HatcheryStetmann": {
		name: "Mutate into Mecha Lair",
		hotkey: "L",
		icon: "btn-building-zerg-lair-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"HiveStetmann/LairStetmann": {
		name: "Mutate into Mecha Hive",
		hotkey: "H",
		icon: "btn-building-zerg-hive-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchZerglingStetmannMovementSpeed/SpawningPoolStetmann": {
		name: "Research Metal-bolic Boost",
		hotkey: "M",
		icon: "btn-upgrade-stetmann-mechametabolicboost",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchZerglingStetmannHardenedShield/SpawningPoolStetmann": {
		name: "Research Hardened Egonergy Shield",
		hotkey: "H",
		icon: "btn-upgrade-stetmann-zerglinghardenedshield",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchZerglingStetmannAttackSpeed/SpawningPoolStetmann": {
		name: "Research Synthetic Adrenal Pumps",
		hotkey: "A",
		icon: "btn-upgrade-stetmann-mechaadrenalglands",
		mask: false,
		y: 0,
		x: 2
	},
	"ZerglingStetmannRespawn/SpawningPoolStetmann": {
		name: "Recycle Mecha Zergling",
		hotkey: "B",
		icon: "btn-ability-stetmann-zerglingrespawn",
		mask: false,
		y: 2,
		x: 0
	},
	"ZergMeleeWeaponsStetmann1/EvolutionChamberStetmann": {
		name: "Research Mecha Melee Attacks",
		hotkey: "M",
		icon: "btn-upgrade-stetmann-mechameleeattacks-level1",
		mask: false,
		y: 0,
		x: 0
	},
	"ZergMissileWeaponsStetmann1/EvolutionChamberStetmann": {
		name: "Research Mecha Missile Attacks",
		hotkey: "A",
		icon: "btn-upgrade-stetmann-mechamissileattacks-level1",
		mask: false,
		y: 0,
		x: 1
	},
	"ZergGroundArmorStetmann1/EvolutionChamberStetmann": {
		name: "Research Mecha Ground Plating",
		hotkey: "C",
		icon: "btn-upgrade-stetmann-mechagroundplating-level1",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchBanelingStetmannMovementSpeed/BanelingNestStetmann": {
		name: "Research Anti-Centripetal Rocket Servos",
		hotkey: "C",
		icon: "btn-upgrade-stetmann-mechacentrifugalhooks",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchBanelingStetmannExtraDamage/BanelingNestStetmann": {
		name: "Research Egonergy Enhanced Explosives",
		hotkey: "D",
		icon: "btn-upgrade-stetmann-banelingextradamage",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchBanelingStetmannManaShieldBonus/BanelingNestStetmann": {
		name: "Research Egonergy Efficient Barrier",
		hotkey: "B",
		icon: "btn-upgrade-stetmann-banelingmanashieldefficiency",
		mask: false,
		y: 0,
		x: 2
	},
	"SpineCrawlerRootStetmann/SpineCrawlerUprootedStetmann": {
		name: "Root",
		hotkey: "D",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 0
	},
	"SpineCrawlerUprootStetmann/SpineCrawlerStetmann": {
		name: "Uproot",
		hotkey: "R",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 0
	},
	"SporeCrawlerRootStetmann/SporeCrawlerUprootedStetmann": {
		name: "Root",
		hotkey: "D",
		icon: "btn-ability-zerg-root-color",
		mask: false,
		y: 2,
		x: 0
	},
	"SporeCrawlerUprootStetmann/SporeCrawlerStetmann": {
		name: "Uproot",
		hotkey: "R",
		icon: "btn-ability-zerg-uproot-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchHydraliskStetmannMovementSpeed/HydraliskDenStetmann": {
		name: "Research Hydra-lic Augments",
		hotkey: "A",
		icon: "btn-upgrade-stetmann-mechamuscularaugments",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchHydraliskStetmannDamage/HydraliskDenStetmann": {
		name: "Research Erudition Missile Launchers",
		hotkey: "C",
		icon: "btn-upgrade-stetmann-mechahydraliskmissiledamage",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchHydraliskStetmannRange/HydraliskDenStetmann": {
		name: "Research Tyr-Class Targeting System",
		hotkey: "F",
		icon: "btn-upgrade-stetmann-mechahydraliskmissilerange",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchLurkerStetmannTunnelingBurstRange/HydraliskDenStetmann": {
		name: "Research Extended Tunnel of TERROR Algorithm",
		hotkey: "T",
		icon: "btn-upgrade-stetmann-lurkertunnelingburstrange",
		mask: false,
		y: 0,
		x: 3
	},
	"ReserachLurkerStetmannChannelingSpines/HydraliskDenStetmann": {
		name: "Research Focused Strike Algorithm",
		hotkey: "S",
		icon: "btn-ability-stetmann-lurkerchannelingspines",
		mask: false,
		y: 0,
		x: 4
	},
	"LurkerDenStetmann/HydraliskDenStetmann": {
		name: "Mutate into Mecha Lurker Den",
		hotkey: "D",
		icon: "btn-building-zerg-lurkerden-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"HydraliskStetmannRespawn/HydraliskDenStetmann": {
		name: "Recycle Mecha Hydralisk",
		hotkey: "B",
		icon: "btn-ability-stetmann-hydraliskrespawn",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchHydraliskStetmannMovementSpeed/LurkerDenStetmann": {
		name: "Research Hydra-lic Augments",
		hotkey: "A",
		icon: "btn-upgrade-stetmann-mechamuscularaugments",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchHydraliskStetmannDamage/LurkerDenStetmann": {
		name: "Research Erudition Missile Launchers",
		hotkey: "C",
		icon: "btn-upgrade-stetmann-mechahydraliskmissiledamage",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchHydraliskStetmannRange/LurkerDenStetmann": {
		name: "Research Tyr-Class Targeting System",
		hotkey: "F",
		icon: "btn-upgrade-stetmann-mechahydraliskmissilerange",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchLurkerStetmannTunnelingBurstRange/LurkerDenStetmann": {
		name: "Research Extended Tunnel of TERROR Algorithm",
		hotkey: "T",
		icon: "btn-upgrade-stetmann-lurkertunnelingburstrange",
		mask: false,
		y: 0,
		x: 3
	},
	"ReserachLurkerStetmannChannelingSpines/LurkerDenStetmann": {
		name: "Research Focused Strike Algorithm",
		hotkey: "S",
		icon: "btn-ability-stetmann-lurkerchannelingspines",
		mask: false,
		y: 0,
		x: 4
	},
	"HydraliskStetmannRespawn/LurkerDenStetmann": {
		name: "Recycle Mecha Hydralisk",
		hotkey: "B",
		icon: "btn-ability-stetmann-hydraliskrespawn",
		mask: false,
		y: 2,
		x: 1
	},
	"InfestorStetmannRecharge/InfestationPitStetmann": {
		name: "Research UMI-C Charging Protocol",
		hotkey: "P",
		icon: "btn-ability-stetmann-infestorrecharge",
		mask: false,
		y: 0,
		x: 0
	},
	"InfestorStetmannBonusRavager/InfestationPitStetmann": {
		name: "Research BONUS Ravager!",
		hotkey: "R",
		icon: "btn-upgrade-stetmann-infestorbonusravager",
		mask: false,
		y: 0,
		x: 1
	},
	"InfestorStetmannRespawn/InfestationPitStetmann": {
		name: "Recycle Mecha Infestor",
		hotkey: "B",
		icon: "btn-ability-stetmann-infestorrespawn",
		mask: false,
		y: 2,
		x: 0
	},
	"ZergFlyerAttackStetmann1": {
		name: "Research Mecha Flyer Attacks",
		hotkey: "A",
		icon: "btn-upgrade-stetmann-mechaflyerattacks-level1",
		mask: false,
		y: 0,
		x: 0
	},
	"ZergFlyerArmorStetmann1": {
		name: "Research Mecha Flyer Plating",
		hotkey: "C",
		icon: "btn-upgrade-stetmann-mechaflyerplating-level1",
		mask: false,
		y: 0,
		x: 1
	},
	"CorruptorStetmannBiggerAoE/SpireStetmann": {
		name: "Research Wide Area Cluster Busters",
		hotkey: "R",
		icon: "btn-upgrade-stetmann-corruptormissileaoe",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchCorruptorCausticSprayStetmann/SpireStetmann": {
		name: "Research Terraclean Solvent",
		hotkey: "V",
		icon: "btn-ability-stetmann-corruptorcausticspray",
		mask: false,
		y: 0,
		x: 3
	},
	"BroodLordStetmannBombersLearn/SpireStetmann": {
		name: "Research Locusceptor Bay",
		hotkey: "S",
		icon: "btn-upgrade-stetmann-battlecarrierlordflyinglocusts",
		mask: false,
		y: 0,
		x: 4
	},
	"BroodLordStetmannYamato/SpireStetmann": {
		name: "Research Stetmato Cannon",
		hotkey: "E",
		icon: "btn-ability-stetmann-battlecarrierlordmechayamatocannon",
		mask: false,
		y: 1,
		x: 0
	},
	"GreaterSpireStetmann/SpireStetmann": {
		name: "Mutate into Mecha Greater Spire",
		hotkey: "G",
		icon: "btn-building-zerg-greaterspire-mecha",
		mask: false,
		y: 2,
		x: 0
	},
	"CorruptorStetmannRespawn/SpireStetmann": {
		name: "Recycle Mecha Corruptor",
		hotkey: "B",
		icon: "btn-ability-stetmann-corruptorrespawn",
		mask: false,
		y: 2,
		x: 1
	},
	"CorruptorStetmannBiggerAoE/GreaterSpireStetmann": {
		name: "Research Wide Area Cluster Busters",
		hotkey: "R",
		icon: "btn-upgrade-stetmann-corruptormissileaoe",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchCorruptorCausticSprayStetmann/GreaterSpireStetmann": {
		name: "Research Terraclean Solvent",
		hotkey: "V",
		icon: "btn-ability-stetmann-corruptorcausticspray",
		mask: false,
		y: 0,
		x: 3
	},
	"BroodLordStetmannBombersLearn/GreaterSpireStetmann": {
		name: "Research Locusceptor Bay",
		hotkey: "S",
		icon: "btn-upgrade-stetmann-battlecarrierlordflyinglocusts",
		mask: false,
		y: 0,
		x: 4
	},
	"BroodLordStetmannYamato/GreaterSpireStetmann": {
		name: "Research Stetmato Cannon",
		hotkey: "E",
		icon: "btn-ability-stetmann-battlecarrierlordmechayamatocannon",
		mask: false,
		y: 1,
		x: 0
	},
	"CorruptorStetmannRespawn/GreaterSpireStetmann": {
		name: "Recycle Mecha Corruptor",
		hotkey: "B",
		icon: "btn-ability-stetmann-corruptorrespawn",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchUltraliskStetmannBurrowChargeMechanicalStun/UltraliskCavernStetmann": {
		name: "Research Electrostatic Surprise!",
		hotkey: "C",
		icon: "btn-upgrade-stetmann-ultraliskburrowchargestun",
		mask: false,
		y: 0,
		x: 0
	},
	"ReserachUltraliskStetmannMechanicalLifeLeech/UltraliskCavernStetmann": {
		name: "Research Mecha Mooch Module",
		hotkey: "E",
		icon: "btn-ability-stetmann-ultraliskmechanicalassimilation",
		mask: false,
		y: 0,
		x: 1
	},
	"ReserachUltraliskStetmannArmor/UltraliskCavernStetmann": {
		name: "Research Chitanium Plating",
		hotkey: "H",
		icon: "btn-upgrade-stetmann-mechachitinousplating",
		mask: false,
		y: 0,
		x: 2
	},
	"UltraliskStetmannRespawn/UltraliskCavernStetmann": {
		name: "Recycle Mecha Ultralisk",
		hotkey: "U",
		icon: "btn-ability-stetmann-ultraliskrespawn",
		mask: false,
		y: 2,
		x: 0
	},
	"Nexus/Probe": {
		name: "Warp In Nexus",
		hotkey: "N",
		icon: "btn-building-protoss-nexus",
		mask: false,
		y: 0,
		x: 0
	},
	"Assimilator/Probe": {
		name: "Warp In Assimilator",
		hotkey: "A",
		hotkey_NRS: "I",
		icon: "btn-building-protoss-assimilator",
		mask: false,
		y: 0,
		x: 1
	},
	"Pylon/Probe": {
		name: "Warp In Pylon",
		hotkey: "E",
		hotkey_NRS: "P",
		hotkey_SC1: "P",
		icon: "btn-building-protoss-pylon",
		mask: false,
		y: 0,
		x: 2
	},
	"Gateway/Probe": {
		name: "Warp In Gateway",
		hotkey: "G",
		icon: "btn-building-protoss-gateway",
		mask: false,
		y: 1,
		x: 0
	},
	"Forge/Probe": {
		name: "Warp In Forge",
		hotkey: "F",
		hotkey_NRS: "O",
		icon: "btn-building-protoss-forge",
		mask: false,
		y: 1,
		x: 1
	},
	"ShieldBattery/Probe": {
		name: "Warp In Shield Battery",
		hotkey: "B",
		icon: "btn-building-protoss-shieldbattery",
		mask: false,
		y: 2,
		x: 2
	},
	"CyberneticsCore/Probe": {
		name: "Warp In Cybernetics Core",
		hotkey: "Y",
		icon: "btn-building-protoss-cyberneticscore",
		mask: false,
		y: 2,
		x: 0
	},
	"PhotonCannon/Probe": {
		name: "Warp In Photon Cannon",
		hotkey: "C",
		hotkey_NRS: "H",
		icon: "btn-building-protoss-photoncannon",
		mask: false,
		y: 2,
		x: 1
	},
	"KhaydarinMonolith/Probe": {
		name: "Warp In Khaydarin Monolith",
		hotkey: "D",
		icon: "btn-unit-protoss-khaydarinmonolith",
		mask: false,
		y: 2,
		x: 2
	},
	"TwilightCouncil/Probe": {
		name: "Warp In Twilight Council",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-building-protoss-twilightcouncil",
		mask: false,
		y: 0,
		x: 0
	},
	"Stargate/Probe": {
		name: "Warp In Stargate",
		hotkey: "S",
		hotkey_NRS: "G",
		icon: "btn-building-protoss-stargate",
		mask: false,
		y: 0,
		x: 1
	},
	"RoboticsFacility/Probe": {
		name: "Warp In Robotics Facility",
		hotkey: "R",
		hotkey_NRS: "O",
		icon: "btn-building-protoss-roboticsfacility",
		mask: false,
		y: 0,
		x: 2
	},
	"TemplarArchive/Probe": {
		name: "Warp In Templar Archives",
		hotkey: "T",
		hotkey_NRS: "P",
		icon: "btn-building-protoss-templararchives",
		mask: false,
		y: 1,
		x: 0
	},
	"FleetBeacon/Probe": {
		name: "Warp In Fleet Beacon",
		hotkey: "F",
		hotkey_NRS: "L",
		icon: "btn-building-protoss-fleetbeacon",
		mask: false,
		y: 1,
		x: 1
	},
	"RoboticsBay/Probe": {
		name: "Warp In Robotics Bay",
		hotkey: "B",
		icon: "btn-building-protoss-roboticssupportbay",
		mask: false,
		y: 1,
		x: 2
	},
	"DarkShrine/Probe": {
		name: "Warp In Dark Shrine",
		hotkey: "D",
		hotkey_NRS: "K",
		icon: "btn-building-protoss-darkshrine",
		mask: false,
		y: 2,
		x: 0
	},
	"Charge/Zealot": {
		name: "Charge",
		hotkey: "C",
		hotkey_NRS: "G",
		icon: "btn-ability-protoss-charge-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Charge/ZealotAiur": {
		name: "Charge",
		hotkey: "C",
		hotkey_NRS: "G",
		icon: "btn-ability-protoss-charge-color",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidZealotWhirlwind/ZealotAiur": {
		name: "Whirlwind",
		hotkey: "E",
		icon: "btn-ability-protoss-whirlwind",
		mask: false,
		y: 2,
		x: 1
	},
	"AdeptPhaseShift/Adept": {
		name: "Psionic Transfer",
		hotkey: "F",
		icon: "btn-ability-protoss-psionictransfer",
		mask: false,
		y: 2,
		x: 0
	},
	"Feedback/HighTemplar": {
		name: "Feedback",
		hotkey: "F",
		hotkey_NRS: "L",
		icon: "btn-ability-protoss-feedback-color",
		mask: false,
		y: 2,
		x: 0
	},
	"PsiStorm/HighTemplar": {
		name: "Psionic Storm",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-psistorm-color",
		mask: false,
		y: 2,
		x: 1
	},
	"AWrp": {
		name: "Archon Warp",
		hotkey: "C",
		hotkey_NRS: "N",
		icon: "btn-unit-protoss-archon",
		mask: false,
		y: 2,
		x: 3
	},
	"Feedback/Archon": {
		name: "Feedback",
		hotkey: "F",
		hotkey_NRS: "L",
		icon: "btn-ability-protoss-feedback-color",
		mask: false,
		y: 2,
		x: 0
	},
	"PsiStorm/Archon": {
		name: "Psionic Storm",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-psistorm-color",
		mask: false,
		y: 2,
		x: 1
	},
	"ImmortalOverload/Immortal": {
		name: "Barrier",
		hotkey: "B",
		icon: "btn-ability-protoss-invulnerabilityshield",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphtoObserverSiege/Observer": {
		name: "Surveillance Mode",
		hotkey: "E",
		hotkeySet: "ObserverModes",
		icon: "btn-unit-protoss-observer-surveillance",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphtoObserver/Observer": {
		name: "Observer Mode",
		hotkey: "T",
		hotkeySet: "ObserverModes",
		icon: "btn-unit-protoss-observer",
		mask: false,
		y: 2,
		x: 1
	},
	"ReaverScarabs/Reaver": {
		name: "Create Scarab",
		hotkey: "C",
		icon: "btn-ability-protoss-scarabshot",
		mask: false,
		y: 2,
		x: 0
	},
	"GravitonBeam/Phoenix": {
		name: "Graviton Beam",
		hotkey: "G",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-gravitonbeam-color",
		mask: false,
		y: 2,
		x: 0
	},
	"GravitonBeam/Urun": {
		name: "Graviton Beam",
		hotkey: "G",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-gravitonbeam-color",
		mask: false,
		y: 2,
		x: 0
	},
	"LightningBomb/Tempest": {
		name: "Disintegration",
		hotkey: "D",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-protoss-disintegration",
		mask: false,
		y: 2,
		x: 0
	},
	"ArbiterMPStasisField/ArbiterMP": {
		name: "Stasis Field",
		hotkey: "F",
		icon: "btn-ability-protoss-stasisfield",
		mask: false,
		y: 2,
		x: 0
	},
	"ArbiterMPRecall/ArbiterMP": {
		name: "Recall",
		hotkey: "R",
		hotkey_SC1: "T",
		icon: "btn-ability-protoss-recall",
		mask: false,
		y: 2,
		x: 1
	},
	"MorphToMothership/MothershipCore": {
		name: "Upgrade to Mothership",
		hotkey: "U",
		hotkey_NRS: "A",
		icon: "btn-unit-protoss-mothership",
		mask: false,
		y: 1,
		x: 0
	},
	"MothershipCoreWeapon/MothershipCore": {
		name: "Photon Overcharge",
		hotkey: "F",
		hotkey_NRS: "G",
		icon: "btn-ability-protoss-purify",
		mask: false,
		y: 2,
		x: 0
	},
	"MothershipCoreMassRecall/MothershipCore": {
		name: "Mass Recall",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-protoss-massrecall",
		mask: false,
		y: 2,
		x: 1
	},
	"TemporalField/MothershipCore": {
		name: "Time Warp",
		hotkey: "T",
		hotkey_NRS: "C",
		hotkey_SC1: "C",
		icon: "btn-ability-protoss-timewarp",
		mask: false,
		y: 2,
		x: 2
	},
	"MassRecall/Mothership": {
		name: "Mass Recall",
		hotkey: "R",
		hotkey_NRS: "L",
		icon: "btn-ability-protoss-wormholetransit-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Vortex/Mothership": {
		name: "Vortex",
		hotkey: "V",
		icon: "btn-ability-protoss-blackhole-color",
		mask: false,
		y: 2,
		x: 1
	},
	"TemporalField/Mothership": {
		name: "Time Warp",
		hotkey: "T",
		hotkey_NRS: "Y",
		hotkey_SC1: "Y",
		icon: "btn-ability-protoss-timewarp-red",
		mask: false,
		y: 2,
		x: 1
	},
	"MassRecall/Artanis": {
		name: "Mass Recall",
		hotkey: "R",
		hotkey_NRS: "L",
		icon: "btn-ability-protoss-wormholetransit-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Vortex/Artanis": {
		name: "Vortex",
		hotkey: "V",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-blackhole-color",
		mask: false,
		y: 2,
		x: 1
	},
	"Probe/Nexus": {
		name: "Warp In Probe",
		hotkey: "E",
		hotkey_NRS: "P",
		hotkey_SC1: "P",
		icon: "btn-unit-protoss-probe",
		mask: false,
		y: 0,
		x: 0
	},
	"Mothership/Nexus": {
		name: "Warp In Mothership",
		hotkey: "M",
		icon: "btn-unit-protoss-mothership",
		mask: false,
		y: 0,
		x: 1
	},
	"TimeWarp/Nexus": {
		name: "Chrono Boost",
		hotkey: "C",
		icon: "btn-ability-protoss-protoncharge-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ChronoBoostEnergyCost/Nexus": {
		name: "Chrono Boost",
		hotkey: "C",
		icon: "btn-ability-protoss-protoncharge-color",
		mask: false,
		y: 2,
		x: 0
	},
	"NexusMassRecall/Nexus": {
		name: "Strategic Recall",
		hotkey: "R",
		hotkey_SC1: "A",
		icon: "btn-ability-protoss-massrecall",
		mask: false,
		y: 2,
		x: 1
	},
	"Zealot": {
		name: "Warp In Zealot",
		hotkey: "Z",
		hotkey_NRS: "O",
		icon: "btn-unit-protoss-zealot",
		mask: false,
		y: 0,
		x: 0
	},
	"Sentry": {
		name: "Warp In Sentry",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-unit-protoss-sentry",
		mask: false,
		y: 0,
		x: 1
	},
	"Stalker": {
		name: "Warp In Stalker",
		hotkey: "S",
		hotkey_NRS: "L",
		hotkey_SC1: "D",
		icon: "btn-unit-protoss-stalker",
		mask: false,
		y: 0,
		x: 2
	},
	"HighTemplar": {
		name: "Warp In High Templar",
		hotkey: "T",
		hotkey_NRS: "H",
		icon: "btn-unit-protoss-hightemplar",
		mask: false,
		y: 1,
		x: 0
	},
	"DarkTemplar": {
		name: "Warp In Dark Templar",
		hotkey: "D",
		hotkey_NRS: "K",
		hotkey_SC1: "K",
		icon: "btn-unit-protoss-darktemplar",
		mask: false,
		y: 1,
		x: 1
	},
	"WarpInAdept/Gateway": {
		name: "Warp In Adept",
		hotkey: "H",
		hotkey_NRS: "D",
		icon: "btn-unit-protoss-adept",
		mask: false,
		y: 0,
		x: 3
	},
	"WarpInAdept/WarpGate": {
		name: "Warp In Adept",
		hotkey: "H",
		hotkey_NRS: "D",
		icon: "btn-unit-protoss-adept",
		mask: false,
		y: 0,
		x: 3
	},
	"DarkArchon/Gateway": {
		name: "Warp In Dark Archon",
		hotkey: "A",
		hotkey_NRS: "J",
		icon: "btn-unit-protoss-darkarchon",
		mask: false,
		y: 1,
		x: 2
	},
	"DarkArchon/WarpGate": {
		name: "Warp In Dark Archon",
		hotkey: "A",
		hotkey_NRS: "J",
		icon: "btn-unit-protoss-darkarchon",
		mask: false,
		y: 1,
		x: 2
	},
	"UpgradeToWarpGate/Gateway": {
		name: "Transform to Warp Gate",
		hotkey: "G",
		icon: "btn-building-protoss-warpgate",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphBackToGateway/WarpGate": {
		name: "Transform to Gateway",
		hotkey: "M",
		hotkey_NRS: "A",
		icon: "btn-building-protoss-gateway",
		mask: false,
		y: 2,
		x: 1
	},
	"ProtossGroundWeaponsLevel1/Forge": {
		name: "Upgrade Ground Weapons",
		hotkey: "G",
		hotkey_SC1: "W",
		icon: "btn-upgrade-protoss-groundweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"ProtossGroundArmorLevel1/Forge": {
		name: "Upgrade Ground Armor",
		hotkey: "A",
		icon: "btn-upgrade-protoss-groundarmorlevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"ProtossShieldsLevel1/Forge": {
		name: "Upgrade Shields",
		hotkey: "S",
		icon: "btn-upgrade-protoss-shieldslevel1",
		mask: false,
		y: 0,
		x: 2
	},
	"ProtossAirWeaponsLevel1/CyberneticsCore": {
		name: "Upgrade Air Weapons",
		hotkey: "E",
		hotkey_NRS: "P",
		hotkey_SC1: "W",
		icon: "btn-upgrade-protoss-airweaponslevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"ProtossAirArmorLevel1/CyberneticsCore": {
		name: "Upgrade Air Armor",
		hotkey: "A",
		icon: "btn-upgrade-protoss-airarmorlevel1",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchWarpGate/CyberneticsCore": {
		name: "Research Warp Gate",
		hotkey: "G",
		icon: "btn-building-protoss-warpgate",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchCharge/TwilightCouncil": {
		name: "Research Charge",
		hotkey: "C",
		hotkey_SC1: "L",
		icon: "btn-ability-protoss-charge-color",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchStalkerTeleport/TwilightCouncil": {
		name: "Research Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blink-color",
		mask: false,
		y: 0,
		x: 1
	},
	"AdeptResearchPiercingUpgrade/TwilightCouncil": {
		name: "Research Resonating Glaives",
		hotkey: "A",
		icon: "btn-upgrade-protoss-resonatingglaives-orange",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchDragoonRange/TwilightCouncil": {
		name: "Research Singularity Charge",
		hotkey: "B",
		hotkey_NRS: "R",
		hotkey_SC1: "R",
		icon: "btn-upgrade-artanis-singularitycharge",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchWhirlwind/TwilightCouncil": {
		name: "Research Whirlwind",
		hotkey: "D",
		icon: "btn-ability-protoss-whirlwind",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchDragoonChassis/TwilightCouncil": {
		name: "Research Trillic Compression Systems",
		hotkey: "E",
		icon: "btn-ability-protoss-dragoonchassis",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchPsiStorm/TemplarArchive": {
		name: "Research Psionic Storm",
		hotkey: "T",
		hotkey_NRS: "I",
		hotkey_SC1: "P",
		icon: "btn-ability-protoss-psistorm-color",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchHighTemplarEnergyUpgrade/TemplarArchive": {
		name: "Research Khaydarin Amulet",
		hotkey: "K",
		icon: "btn-upgrade-protoss-khaydarinamulet",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchHealingPsionicStorm/TemplarArchive": {
		name: "Research Plasma Surge",
		hotkey: "H",
		icon: "btn-upgrade-artanis-healingpsionicstorm",
		mask: false,
		y: 0,
		x: 2
	},
	"Immortal/RoboticsFacility": {
		name: "Warp In Immortal",
		hotkey: "I",
		icon: "btn-unit-protoss-immortal",
		mask: false,
		y: 0,
		x: 2
	},
	"Colossus/RoboticsFacility": {
		name: "Warp In Colossus",
		hotkey: "C",
		hotkey_NRS: "L",
		hotkey_SC1: "V",
		icon: "btn-unit-protoss-colossus",
		mask: false,
		y: 0,
		x: 3
	},
	"Observer/RoboticsFacility": {
		name: "Warp In Observer",
		hotkey: "B",
		hotkey_NRS: "O",
		hotkey_SC1: "O",
		icon: "btn-unit-protoss-observer",
		mask: false,
		y: 0,
		x: 0
	},
	"WarpPrism/RoboticsFacility": {
		name: "Warp In Warp Prism",
		hotkey: "A",
		hotkey_NRS: "P",
		hotkey_SC1: "S",
		icon: "btn-unit-protoss-warpprism",
		mask: false,
		y: 0,
		x: 1
	},
	"UpgradeToRoboticsFacilityWarp/RoboticsFacility": {
		name: "Transform to Warp Robotics Facility",
		hotkey: "G",
		icon: "btn-building-protoss-roboticswarpfacility",
		mask: false,
		y: 2,
		x: 0
	},
	"Immortal/RoboticsFacilityWarp": {
		name: "Warp In Immortal",
		hotkey: "I",
		icon: "btn-unit-protoss-immortal",
		mask: false,
		y: 0,
		x: 0
	},
	"Colossus/RoboticsFacilityWarp": {
		name: "Warp In Colossus",
		hotkey: "C",
		hotkey_NRS: "L",
		hotkey_SC1: "V",
		icon: "btn-unit-protoss-colossus",
		mask: false,
		y: 0,
		x: 1
	},
	"Observer/RoboticsFacilityWarp": {
		name: "Warp In Observer",
		hotkey: "B",
		hotkey_NRS: "O",
		hotkey_SC1: "O",
		icon: "btn-unit-protoss-observer",
		mask: false,
		y: 0,
		x: 2
	},
	"MorphBackToRoboticsFacility/RoboticsFacilityWarp": {
		name: "Transform to Robotics Facility",
		hotkey: "M",
		icon: "btn-building-protoss-roboticsfacility",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchGraviticBooster/RoboticsBay": {
		name: "Research Gravitic Boosters",
		hotkey: "B",
		hotkey_SC1: "G",
		icon: "btn-upgrade-protoss-graviticbooster",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchGraviticDrive/RoboticsBay": {
		name: "Research Gravitic Drive",
		hotkey: "G",
		hotkey_SC1: "D",
		icon: "btn-upgrade-protoss-graviticdrive",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchExtendedThermalLance/RoboticsBay": {
		name: "Research Extended Thermal Lance",
		hotkey: "E",
		hotkey_NRS: "T",
		hotkey_SC1: "T",
		icon: "btn-upgrade-protoss-extendedthermallance",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchReaverIncreasedScarabCount/RoboticsBay": {
		name: "Research Scarab Housing",
		hotkey: "C",
		icon: "btn-ability-protoss-scarabshot",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay": {
		name: "Research Solarite Payload",
		hotkey: "A",
		icon: "btn-upgrade-artanis-scarabsplashradius",
		mask: false,
		y: 0,
		x: 3
	},
	"Phoenix/Stargate": {
		name: "Warp In Phoenix",
		hotkey: "X",
		hotkey_NRS: "P",
		hotkey_SC1: "E",
		icon: "btn-unit-protoss-phoenix",
		mask: false,
		y: 0,
		x: 0
	},
	"VoidRay/Stargate": {
		name: "Warp In Void Ray",
		hotkey: "V",
		hotkey_NRS: "O",
		hotkey_SC1: "O",
		icon: "btn-unit-protoss-warpray",
		mask: false,
		y: 0,
		x: 2
	},
	"Tempest/Stargate": {
		name: "Warp In Tempest",
		hotkey: "T",
		hotkey_NRS: "U",
		icon: "btn-unit-protoss-tempest",
		mask: false,
		y: 0,
		x: 3
	},
	"Carrier/Stargate": {
		name: "Warp In Carrier",
		hotkey: "C",
		hotkey_NRS: "I",
		icon: "btn-unit-protoss-carrier",
		mask: false,
		y: 0,
		x: 4
	},
	"UpgradeToStargateWarp/Stargate": {
		name: "Transform to Warp Stargate",
		hotkey: "G",
		icon: "btn-building-protoss-starwarpgate",
		mask: false,
		y: 2,
		x: 0
	},
	"Phoenix/StargateWarp": {
		name: "Warp In Phoenix",
		hotkey: "X",
		hotkey_NRS: "P",
		hotkey_SC1: "E",
		icon: "btn-unit-protoss-phoenix",
		mask: false,
		y: 0,
		x: 0
	},
	"VoidRay/StargateWarp": {
		name: "Warp In Void Ray",
		hotkey: "V",
		hotkey_NRS: "O",
		hotkey_SC1: "O",
		icon: "btn-unit-protoss-warpray",
		mask: false,
		y: 0,
		x: 1
	},
	"Carrier/StargateWarp": {
		name: "Warp In Carrier",
		hotkey: "C",
		icon: "btn-unit-protoss-carrier",
		mask: false,
		y: 0,
		x: 2
	},
	"MorphBackToStargate/StargateWarp": {
		name: "Transform to Stargate",
		hotkey: "M",
		icon: "btn-building-protoss-stargate",
		mask: false,
		y: 2,
		x: 1
	},
	"AnionPulseCrystals/FleetBeacon": {
		name: "Research Anion Pulse-Crystals",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-upgrade-protoss-phoenixrange",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchVoidRaySpeedUpgrade/FleetBeacon": {
		name: "Research Flux Vanes",
		hotkey: "F",
		hotkey_SC1: "G",
		icon: "btn-upgrade-protoss-fluxvanes",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchDoubleGravitonBeam/FleetBeacon": {
		name: "Research Double Graviton Beam",
		hotkey: "G",
		hotkey_NRS: "D",
		hotkey_SC1: "D",
		icon: "btn-ability-protoss-dualgravitonbeam",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchTempestDisintegration/FleetBeacon": {
		name: "Research Disintegration",
		hotkey: "D",
		hotkey_NRS: "I",
		hotkey_SC1: "I",
		icon: "btn-ability-protoss-disintegration",
		mask: false,
		y: 0,
		x: 2
	},
	"VoidZealotShadowCharge/ZealotShakuras": {
		name: "Shadow Charge",
		hotkey: "C",
		icon: "btn-ability-protoss-shadowcharge",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidZealotShadowChargeStun/ZealotShakuras": {
		name: "Darkcoil",
		hotkey: "Z",
		icon: "btn-upgrade-vorazun-shadowstun",
		mask: false,
		y: 2,
		x: 1
	},
	"ForceField/Sentry": {
		name: "Force Field",
		hotkey: "F",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-forcefield-color",
		mask: false,
		y: 2,
		x: 0
	},
	"GuardianShield/Sentry": {
		name: "Guardian Shield",
		hotkey: "G",
		icon: "btn-ability-protoss-shieldbattery-color",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidSentryShieldRepair/Sentry": {
		name: "Shield Recharge",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-shieldrecharge",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidSentryShieldRepairDouble/SentryAiur": {
		name: "Shield Recharge",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-shieldrecharge",
		mask: false,
		y: 2,
		x: 0
	},
	"GuardianShield/SentryAiur": {
		name: "Guardian Shield",
		hotkey: "G",
		icon: "btn-ability-protoss-shieldbattery-color",
		mask: false,
		y: 2,
		x: 1
	},
	"Hallucination/Sentry": {
		name: "Hallucination",
		hotkey: "C",
		hotkey_NRS: "L",
		icon: "btn-ability-protoss-hallucination-color",
		mask: false,
		y: 2,
		x: 2
	},
	"ProbeHallucination/Sentry": {
		name: "Summon 4 Probe Hallucinations",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "P",
		icon: "btn-unit-protoss-probe",
		mask: false,
		y: 0,
		x: 0
	},
	"ZealotHallucination/Sentry": {
		name: "Summon 2 Zealot Hallucinations",
		hotkey: "Z",
		hotkey_NRS: "O",
		icon: "btn-unit-protoss-zealot",
		mask: false,
		y: 0,
		x: 1
	},
	"AdeptHallucination/Sentry": {
		name: "Summon 2 Adept Hallucinations",
		hotkey: "H",
		hotkey_NRS: "T",
		icon: "btn-unit-protoss-adept",
		mask: false,
		y: 0,
		x: 2
	},
	"StalkerHallucination/Sentry": {
		name: "Summon 2 Stalker Hallucinations",
		hotkey: "S",
		hotkey_NRS: "L",
		hotkey_SC1: "D",
		icon: "btn-unit-protoss-stalker",
		mask: false,
		y: 0,
		x: 3
	},
	"ImmortalHallucination/Sentry": {
		name: "Summon Immortal Hallucination",
		hotkey: "I",
		icon: "btn-unit-protoss-immortal",
		mask: false,
		y: 0,
		x: 4
	},
	"HighTemplarHallucination/Sentry": {
		name: "Summon 2 High Templar Hallucinations",
		hotkey: "T",
		hotkey_NRS: "H",
		icon: "btn-unit-protoss-hightemplar",
		mask: false,
		y: 1,
		x: 0
	},
	"ArchonHallucination/Sentry": {
		name: "Summon Archon Hallucination",
		hotkey: "N",
		hotkey_SC1: "R",
		icon: "btn-unit-protoss-archon",
		mask: false,
		y: 1,
		x: 1
	},
	"VoidRayHallucination/Sentry": {
		name: "Summon Void Ray Hallucination",
		hotkey: "V",
		hotkey_SC1: "O",
		icon: "btn-unit-protoss-warpray",
		mask: false,
		y: 1,
		x: 2
	},
	"PhoenixHallucination/Sentry": {
		name: "Summon Phoenix Hallucination",
		hotkey: "X",
		hotkey_NRS: "P",
		hotkey_SC1: "S",
		icon: "btn-unit-protoss-phoenix",
		mask: false,
		y: 1,
		x: 3
	},
	"WarpPrismHallucination/Sentry": {
		name: "Summon Warp Prism Hallucination",
		hotkey: "R",
		hotkey_SC1: "M",
		icon: "btn-unit-protoss-warpprism",
		mask: false,
		y: 2,
		x: 0
	},
	"OracleHallucination/Sentry": {
		name: "Summon Oracle Hallucination",
		hotkey: "L",
		hotkey_NRS: "A",
		icon: "btn-unit-protoss-oracle",
		mask: false,
		y: 2,
		x: 1
	},
	"ColossusHallucination/Sentry": {
		name: "Summon Colossus Hallucination",
		hotkey: "C",
		hotkey_NRS: "K",
		hotkey_SC1: "V",
		icon: "btn-unit-protoss-colossus",
		mask: false,
		y: 2,
		x: 2
	},
	"DisruptorHallucination/Sentry": {
		name: "Summon Disruptor Hallucination",
		hotkey: "D",
		hotkey_SC1: "U",
		icon: "btn-unit-protoss-disruptor",
		mask: false,
		y: 2,
		x: 3
	},
	"Blink/Stalker": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blink-color",
		mask: false,
		y: 2,
		x: 0
	},
	"StalkerBlinkMultiple/StalkerPurifier": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blinkcharges",
		mask: false,
		y: 2,
		x: 0
	},
	"StalkerBlinkShieldRestoreBase/StalkerShakuras": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blink-color",
		mask: false,
		y: 2,
		x: 0
	},
	"DarkTemplarBlink/DarkTemplar": {
		name: "Shadow Stride",
		hotkey: "B",
		icon: "btn-ability-protoss-stealth-blink",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidDarkTemplarShadowFury/DarkTemplarShakuras": {
		name: "Shadow Fury",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-shadowfury",
		mask: false,
		y: 2,
		x: 0
	},
	"DarkTemplarShadowDash/DarkTemplarShakuras": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-shadowdash",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidStasis/DarkTemplarTaldarim": {
		name: "Void Stasis",
		hotkey: "V",
		icon: "btn-ability-protoss-voidstasis",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidStasis/DarkTemplarShakuras": {
		name: "Void Stasis",
		hotkey: "V",
		icon: "btn-ability-protoss-voidstasis",
		mask: false,
		y: 2,
		x: 2
	},
	"VoidShadowGuardShadowFury/VorazunShadowGuard": {
		name: "Shadow Fury",
		hotkey: "E",
		icon: "btn-ability-protoss-shadowfury",
		mask: false,
		y: 2,
		x: 0
	},
	"ShadowGuardBlink/VorazunShadowGuard": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-shadowdash",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidStasis/VorazunShadowGuard": {
		name: "Void Stasis",
		hotkey: "V",
		icon: "btn-ability-protoss-voidstasis",
		mask: false,
		y: 2,
		x: 2
	},
	"DarkArchonConfusion/DarkArchon": {
		name: "Confusion",
		hotkey: "F",
		icon: "btn-ability-protoss-confusion",
		mask: false,
		y: 2,
		x: 0
	},
	"DarkArchonMindControl/DarkArchon": {
		name: "Mind Control",
		hotkey: "R",
		hotkey_SC1: "Y",
		icon: "btn-ability-protoss-mindcontrol",
		mask: false,
		y: 2,
		x: 1
	},
	"ImmortalShakurasShadowCannon/ImmortalShakuras": {
		name: "Shadow Cannon",
		hotkey: "C",
		icon: "btn-ability-protoss-shadowcannon",
		mask: false,
		y: 2,
		x: 0
	},
	"CorsairMPDisruptionWeb/CorsairMP": {
		name: "Disruption Web",
		hotkey: "D",
		icon: "btn-ability-protoss-disruptionweb",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidRaySwarmDamageBoost/VoidRay": {
		name: "Prismatic Alignment",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-protoss-voidrayprismaticalignment",
		mask: false,
		y: 2,
		x: 0
	},
	"OracleRevelation/Oracle": {
		name: "Revelation",
		hotkey: "R",
		hotkey_NRS: "U",
		icon: "btn-ability-protoss-preordain",
		mask: false,
		y: 2,
		x: 0
	},
	"OracleBuildStasisTrap/Oracle": {
		name: "Stasis Ward",
		hotkey: "T",
		icon: "btn-ability-protoss-oracle-stasisward",
		mask: false,
		y: 2,
		x: 1
	},
	"OracleWeaponOn/Oracle": {
		name: "Activate Pulsar Beam",
		hotkey: "C",
		hotkey_NRS: "J",
		hotkey_SC1: "J",
		hotkeySet: "PulsarBeam",
		icon: "btn-ability-protoss-oraclepulsarcannonon",
		mask: false,
		y: 2,
		x: 2
	},
	"OracleWeaponOff/Oracle": {
		name: "Deactivate Pulsar Beam",
		hotkey: "D",
		hotkey_NRS: "N",
		hotkey_SC1: "N",
		hotkeySet: "PulsarBeam",
		icon: "btn-ability-protoss-oraclepulsarcannonoff",
		mask: false,
		y: 2,
		x: 3
	},
	"DarkPylonRecall/DarkPylon": {
		name: "Recall",
		hotkey: "R",
		icon: "btn-upgrade-vorazun-darkpylonrecall",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchDarkTemplarBlink/DarkShrine": {
		name: "Research Shadow Stride",
		hotkey: "B",
		icon: "btn-ability-protoss-stealth-blink",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchShadowFury/DarkShrine": {
		name: "Research Shadow Fury",
		hotkey: "S",
		icon: "btn-ability-protoss-shadowfury",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchShadowDash/DarkShrine": {
		name: "Research Blink",
		hotkey: "D",
		icon: "btn-ability-protoss-shadowdash",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchVoidStasis/DarkShrine": {
		name: "Research Void Stasis",
		hotkey: "V",
		icon: "btn-ability-protoss-voidstasis",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchDarkArchonFullStartingEnergy/DarkShrine": {
		name: "Research Argus Crystal",
		hotkey: "E",
		icon: "btn-ability-protoss-energize",
		mask: false,
		y: 0,
		x: 3
	},
	"ResearchDarkArchonMindControl/DarkShrine": {
		name: "Research Mind Control",
		hotkey: "C",
		icon: "btn-ability-protoss-mindcontrol",
		mask: false,
		y: 0,
		x: 4
	},
	"Oracle/Stargate": {
		name: "Warp In Oracle",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "L",
		icon: "btn-unit-protoss-oracle",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchOracleStasisWardUpgrade/FleetBeacon": {
		name: "Research Stasis Calibration",
		hotkey: "A",
		icon: "btn-ability-protoss-oracle-stasiscalibration",
		mask: false,
		y: 0,
		x: 3
	},
	"Charge/ZealotPurifier": {
		name: "Charge",
		hotkey: "C",
		hotkey_NRS: "G",
		icon: "btn-ability-protoss-charge-color",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidSentryChronoBeam/SentryPurifier": {
		name: "Chrono Beam",
		hotkey: "C",
		icon: "btn-ability-protoss-chronobeam",
		mask: false,
		y: 2,
		x: 0
	},
	"EnergizerReclamation/SentryPurifier": {
		name: "Reclamation",
		hotkey: "R",
		hotkey_SC1: "L",
		icon: "btn-ability-protoss-reclamation",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidSentryPhasingMode/SentryPurifier": {
		name: "Phasing Mode",
		hotkey: "E",
		hotkeySet: "KaraxSentryModes",
		icon: "btn-ability-protoss-energizerphasingmode",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidSentryMobileMode/SentryPurifier": {
		name: "Mobile Mode",
		hotkey: "T",
		hotkeySet: "KaraxSentryModes",
		icon: "btn-ability-protoss-energizermobilemode",
		mask: false,
		y: 2,
		x: 2
	},
	"Interceptor/Carrier": {
		name: "Build Interceptor",
		hotkey: "I",
		icon: "btn-unit-protoss-interceptor",
		mask: false,
		y: 2,
		x: 0
	},
	"Interceptor/Selendis": {
		name: "Build Interceptor",
		hotkey: "I",
		icon: "btn-unit-protoss-interceptor",
		mask: false,
		y: 2,
		x: 0
	},
	"RepairDrones/Carrier": {
		name: "Repair Drones",
		hotkey: "E",
		icon: "btn-ability-protoss-carrierrepairdrones",
		mask: false,
		y: 2,
		x: 1
	},
	"ImmortalShakurasShadowCannon/Immortal": {
		name: "Shadow Cannon",
		hotkey: "C",
		icon: "btn-ability-protoss-shadowcannon",
		mask: false,
		y: 2,
		x: 1
	},
	"GravitonBeam/PhoenixPurifier": {
		name: "Graviton Beam",
		hotkey: "G",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-gravitonbeam-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ShieldBatteryRecharge/ShieldBattery": {
		name: "Restore",
		hotkey: "R",
		icon: "btn-ability-protoss-shieldbattery-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ShieldBatteryStructureBarrier/ShieldBattery": {
		name: "Fortification Barrier",
		hotkey: "B",
		icon: "btn-upgrade-karax-fortificationbarrier",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchKaraxTurretRange/Forge": {
		name: "Research Enhanced Targeting",
		hotkey: "R",
		icon: "btn-upgrade-karax-turretrange",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchKaraxTurretAttackSpeed/Forge": {
		name: "Research Optimized Ordnance",
		hotkey: "E",
		icon: "btn-upgrade-karax-turretattackspeed",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchStructureBarrier/Forge": {
		name: "Research Fortification Barrier",
		hotkey: "B",
		icon: "btn-upgrade-karax-fortificationbarrier",
		mask: false,
		y: 2,
		x: 2
	},
	"ResearchSolarEfficiencyLevel1/SolarForge": {
		name: "Research Solar Efficiency",
		hotkey: "E",
		icon: "btn-upgrade-karax-solarefficiencylevel1",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchSolarEfficiencyLevel2/SolarForge": {
		name: "Research Solar Efficiency",
		hotkey: "E",
		icon: "btn-upgrade-karax-solarefficiencylevel2",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchSolarEfficiencyLevel3/SolarForge": {
		name: "Research Solar Efficiency",
		hotkey: "E",
		icon: "btn-upgrade-karax-solarefficiencylevel3",
		mask: false,
		y: 0,
		x: 0
	},
	"ResearchSOARepairBeamExtraTarget/SolarForge": {
		name: "Research Advanced Repair Systems",
		hotkey: "R",
		icon: "btn-upgrade-karax-reconstructionbeamextratarget",
		mask: false,
		y: 0,
		x: 1
	},
	"ResearchSOAOrbitalStrikeUpgrade/SolarForge": {
		name: "Research Phase Detonation",
		hotkey: "B",
		icon: "btn-upgrade-karax-orbitalassault_stun",
		mask: false,
		y: 0,
		x: 2
	},
	"ResearchSOASolarLanceUpgrade/SolarForge": {
		name: "Research Solar Flare",
		hotkey: "A",
		icon: "btn-upgrade-karax_solarlance",
		mask: false,
		y: 0,
		x: 3
	},
	"BrokenSolarForge/SolarForge": {
		name: "Repair",
		hotkey: "R",
		icon: "btn-building-protoss-solarforge",
		mask: false,
		y: 0,
		x: 0
	},
	"AlarakDeadlyCharge": {
		name: "Deadly Charge",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-deadlycharge",
		mask: false,
		y: 2,
		x: 0
	},
	"AlarakKnockback": {
		name: "Destruction Wave",
		hotkey: "E",
		hotkey_SC1: "D",
		icon: "btn-ability-protoss-destructionwave",
		mask: false,
		y: 2,
		x: 2
	},
	"AlarakEmpower": {
		name: "Empower Me",
		hotkey: "R",
		hotkey_SC1: "F",
		icon: "btn-upgrade-protoss-alarak-empowermeslaves",
		mask: false,
		y: 2,
		x: 3
	},
	"TargetLock/Monitor": {
		name: "Target Lock",
		hotkey: "T",
		icon: "btn-ability-protoss-targetlock",
		mask: false,
		y: 2,
		x: 0
	},
	"SentryTaldarimForceField/Monitor": {
		name: "Force Field",
		hotkey: "F",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-forcefield-red",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidHighTemplarPsiOrb/HighTemplarTaldarim": {
		name: "Psionic Orb",
		hotkey: "T",
		icon: "btn-ability-protoss-psionicorb",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidHighTemplarMindBlast/HighTemplarTaldarim": {
		name: "Mind Blast",
		hotkey: "F",
		icon: "btn-ability-protoss-mindblast",
		mask: false,
		y: 2,
		x: 1
	},
	"AscendantSacrifice/HighTemplarTaldarim": {
		name: "Sacrifice",
		hotkey: "R",
		hotkey_SC1: "Y",
		icon: "btn-ability-protoss-sacrifice",
		mask: false,
		y: 2,
		x: 2
	},
	"PhasingMode/WarpPrism": {
		name: "Phasing Mode",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkeySet: "WarpPrismModes",
		icon: "btn-unit-protoss-warpprismstationary",
		mask: false,
		y: 2,
		x: 0
	},
	"TransportMode/WarpPrism": {
		name: "Transport Mode",
		hotkey: "T",
		hotkey_NRS: "N",
		hotkeySet: "WarpPrismModes",
		icon: "btn-unit-protoss-warpprism",
		mask: false,
		y: 2,
		x: 1
	},
	"ACAlarakPhasingMode/WarpPrismTaldarim": {
		name: "Phasing Mode",
		hotkey: "E",
		hotkey_NRS: "I",
		hotkeySet: "AlarakWarpPrismModes",
		icon: "btn-unit-protoss-alarak-taldarim-warpprismstationary",
		mask: false,
		y: 2,
		x: 0
	},
	"ACAlarakTransportMode/WarpPrismTaldarim": {
		name: "Transport Mode",
		hotkey: "T",
		hotkey_NRS: "N",
		hotkeySet: "AlarakWarpPrismModes",
		icon: "btn-unit-protoss-alarak-taldarim-warpprism",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidSentryBlackHole/SOAMothershipv4": {
		name: "Black Hole",
		hotkey: "E",
		icon: "btn-ability-protoss-blackhole-redcolor",
		mask: false,
		y: 2,
		x: 0
	},
	"SOAMothershipLineAttack/SOAMothershipv4": {
		name: "Thermal Lance",
		hotkey: "R",
		icon: "btn-ability-protoss-thermallance",
		mask: false,
		y: 2,
		x: 1
	},
	"SOAMothershipBlink/SOAMothershipv4": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blink-color",
		mask: false,
		y: 2,
		x: 2
	},
	"AlarakMothershipMassTeleport/SOAMothershipv4": {
		name: "Mass Teleport",
		hotkey: "T",
		icon: "btn-ability-alarak-massteleport",
		mask: false,
		y: 2,
		x: 1
	},
	"ResearchAlarakTargetLockBuff/CyberneticsCore": {
		name: "Research Detect Weakness",
		hotkey: "T",
		icon: "btn-upgrade-protoss-alarak-havoctargetlockbuffed",
		mask: false,
		y: 0,
		x: 2
	},
	"FenixThunderousChargeCoop/FenixCoop": {
		name: "Thunderous Charge",
		hotkey: "Q",
		icon: "btn-ability-protoss-thunderouscharge",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixWhirlwind/FenixCoop": {
		name: "Whirlwind",
		hotkey: "E",
		hotkey_NRS: "R",
		hotkey_SC1: "Y",
		icon: "btn-ability-protoss-whirlwindfenix",
		mask: false,
		y: 2,
		x: 2
	},
	"VoidShieldCapacitor/FenixCoop": {
		name: "Shield Capacitor",
		hotkey: "R",
		hotkey_NRS: "T",
		hotkey_SC1: "T",
		icon: "btn-ability-protoss-shieldcapacitor",
		mask: false,
		y: 2,
		x: 3
	},
	"FenixDragoonChargedBuster/FenixDragoon": {
		name: "Solar Cannon",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-upgrade-protoss-fenix-dragoongroundattack",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixDragoonAirBomb/FenixDragoon": {
		name: "Solarite Flare",
		hotkey: "E",
		icon: "btn-upgrade-protoss-fenix-dragoonsolariteflare",
		mask: false,
		y: 2,
		x: 2
	},
	"FenixDragoonArsenalOvercharge/FenixDragoon": {
		name: "Arsenal Overcharge",
		hotkey: "R",
		hotkey_SC1: "T",
		icon: "btn-upgrade-protoss-fenix-dragoonovercharge",
		mask: false,
		y: 2,
		x: 3
	},
	"FenixArbiterStasisField/FenixArbiter": {
		name: "Stasis Field",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-upgrade-protoss-fenix-stasisfield",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixArbiterCloakField/FenixArbiter": {
		name: "Cloaking Field",
		hotkey: "E",
		icon: "btn-ability-protoss-cloakfield-color",
		mask: false,
		y: 2,
		x: 2
	},
	"ArbiterMPRecall/FenixArbiter": {
		name: "Recall",
		hotkey: "R",
		hotkey_SC1: "T",
		icon: "btn-ability-protoss-recall",
		mask: false,
		y: 2,
		x: 3
	},
	"FenixSentryGuardianZone/SentryFenix": {
		name: "Protective Field",
		hotkey: "G",
		icon: "btn-upgrade-protoss-purifier-sentry-optimizedemitters",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidSentryPhasingMode/SentryFenix": {
		name: "Phasing Mode",
		hotkey: "E",
		hotkeySet: "FenixSentryModes",
		icon: "btn-unit-collection-purifier-sentrypylon",
		mask: false,
		y: 2,
		x: 2
	},
	"VoidSentryMobileMode/SentryFenix": {
		name: "Mobile Mode",
		hotkey: "T",
		hotkeySet: "FenixSentryModes",
		icon: "btn-unit-collection-purifier-sentry",
		mask: false,
		y: 2,
		x: 3
	},
	"PurificationNovaTargeted/Disruptor": {
		name: "Purification Nova",
		hotkey: "V",
		icon: "btn-ability-protoss-purificationnova",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixPurificationNova/Disruptor": {
		name: "Purification Nova",
		hotkey: "V",
		icon: "btn-ability-protoss-purificationnova",
		mask: false,
		y: 2,
		x: 0
	},
	"WarpinDisruptor/RoboticsFacility": {
		name: "Warp In Disruptor",
		hotkey: "D",
		hotkey_NRS: "R",
		hotkey_SC1: "U",
		icon: "btn-unit-protoss-disruptor",
		mask: false,
		y: 0,
		x: 4
	},
	"FenixImmortalResearchDetonationShot/RoboticsBay": {
		name: "Research Gravimetric Overload",
		hotkey: "S",
		icon: "btn-upgrade-protoss-fenix-immortalchampionchargeexplode",
		mask: false,
		y: 2,
		x: 0
	},
	"ResearchFenixWarbringerColossusPowerShot/RoboticsBay": {
		name: "Research Purification Blast",
		hotkey: "R",
		icon: "btn-upgrade-protoss-fenix-purificationblast",
		mask: false,
		y: 2,
		x: 1
	},
	"FenixProbiusProbe00/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-00",
		mask: false,
		y: 0,
		x: 0
	},
	"FenixProbiusProbe01/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-01",
		mask: false,
		y: 0,
		x: 1
	},
	"FenixProbiusProbe02/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-02",
		mask: false,
		y: 0,
		x: 2
	},
	"FenixProbiusProbe03/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-03",
		mask: false,
		y: 0,
		x: 3
	},
	"FenixProbiusProbe04/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-04",
		mask: false,
		y: 0,
		x: 4
	},
	"FenixProbiusProbe10/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-10",
		mask: false,
		y: 1,
		x: 0
	},
	"FenixProbiusProbe11/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-11",
		mask: false,
		y: 1,
		x: 1
	},
	"FenixProbiusProbe12/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-12",
		mask: false,
		y: 1,
		x: 2
	},
	"FenixProbiusProbe13/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-13",
		mask: false,
		y: 1,
		x: 3
	},
	"FenixProbiusProbe14/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-14",
		mask: false,
		y: 1,
		x: 4
	},
	"FenixProbiusProbe20/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-20",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixProbiusProbe21/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-21",
		mask: false,
		y: 2,
		x: 1
	},
	"FenixProbiusProbe22/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-22",
		mask: false,
		y: 2,
		x: 2
	},
	"FenixProbiusProbe23/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-23",
		mask: false,
		y: 2,
		x: 3
	},
	"FenixProbiusProbe24/FenixProbiusProbe": {
		name: "",
		hotkey: "",
		icon: "probius-24",
		mask: false,
		y: 2,
		x: 4
	},
	"FenixKaldalisZealotCharge/FenixKaldalisZealot": {
		name: "Engage",
		hotkey: "C",
		icon: "btn-upgrade-protoss-fenix-zealotchampionengage",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixTalisAdeptBounceShot/FenixTalisAdept": {
		name: "Richochet Glaive",
		hotkey: "E",
		icon: "btn-upgrade-protoss-fenix-adept-recochetglaive",
		mask: false,
		y: 2,
		x: 1
	},
	"ImmortalOverload/FenixTaldarinImmortal": {
		name: "Barrier",
		hotkey: "B",
		hotkey_NRS: "V",
		hotkey_SC1: "V",
		icon: "btn-ability-protoss-invulnerabilityshield",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixWarbringerColossusPowerShot/FenixWarbringerColossus": {
		name: "Purification Blast",
		hotkey: "R",
		hotkey_SC1: "W",
		icon: "btn-upgrade-protoss-fenix-purificationblast",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixMojoMissiles/FenixMojoScout": {
		name: "Suppression Procedure",
		hotkey: "C",
		icon: "btn-upgrade-protoss-fenix-scoutchampionaoemissiles",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixClolarionInterceptor/FenixClolarionCarrier": {
		name: "Build Interceptor",
		hotkey: "I",
		icon: "btn-unit-collection-purifier-interceptor",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixClolarionBomberDummy/FenixClolarionCarrier": {
		name: "Build Interdictor",
		hotkey: "B",
		icon: "btn-unit-collection-purifier-bomber",
		mask: false,
		y: 2,
		x: 1
	},
	"FenixKaldalisZealotDownloadUpgrade": {
		name: "Download Kaldalis’ A.I. Personality",
		hotkey: "Z",
		icon: "btn-unit-protoss-champion-zealot-purifier",
		mask: false,
		y: 0,
		x: 0
	},
	"FenixTalisAdeptDownloadUpgrade": {
		name: "Download Talis’ A.I. Personality",
		hotkey: "S",
		icon: "btn-unit-protoss-champion-adept-purifier",
		mask: false,
		y: 0,
		x: 1
	},
	"FenixTaldarinImmortalDownloadUpgrade": {
		name: "Download Taldarin’s A.I. Personality",
		hotkey: "I",
		icon: "btn-unit-protoss-champion-immortal-purifier",
		mask: false,
		y: 1,
		x: 0
	},
	"FenixWarbringerColossusDownloadUpgrade": {
		name: "Download Warbringer’s A.I. Personality",
		hotkey: "C",
		icon: "btn-unit-protoss-champion-colossus-purifier",
		mask: false,
		y: 1,
		x: 1
	},
	"FenixMojoScoutDownloadUpgrade": {
		name: "Download Mojo’s A.I. Personality",
		hotkey: "X",
		icon: "btn-unit-protoss-champion-scout-purifier",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixClolarionCarrierDownloadUpgrade": {
		name: "Download Clolarion’s A.I. Personality",
		hotkey: "V",
		icon: "btn-unit-protoss-champion-carrier-purifier",
		mask: false,
		y: 2,
		x: 1
	},
	"BrokenFenixAltarOfPsiStorms/FenixAltarOfPsiStorms": {
		name: "Repair",
		hotkey: "R",
		icon: "btn-unit-protoss-fenix-purifier-conclave",
		mask: false,
		y: 0,
		x: 0
	},
	"DownloadBackupPart1/CybrosEscortDownloader": {
		name: "Download Garudion\nDownload Ashredar",
		hotkey: "Q",
		icon: "btn-ability-purifier-download0",
		mask: false,
		y: 0,
		x: 0
	},
	"DownloadBackupPart2/CybrosEscortDownloader": {
		name: "Download Cipion\nDownload Damius",
		hotkey: "E",
		icon: "btn-ability-purifier-download1",
		mask: false,
		y: 0,
		x: 1
	},
	"DownloadBackupPart3/CybrosEscortDownloader": {
		name: "Download Olaeria\nDownload Aldrion",
		hotkey: "R",
		icon: "btn-ability-purifier-download2",
		mask: false,
		y: 0,
		x: 2
	},
	"ZeratulBlink/Zeratul": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blink-zeratul",
		mask: true,
		y: 2,
		x: 0
	},
	"ZeratulStun/Zeratul": {
		name: "Void Prison",
		hotkey: "V",
		hotkey_NRS: "I",
		icon: "btn-ability-protoss-voidprison",
		mask: true,
		y: 2,
		x: 1
	},
	"ZeratulBlink/PrologueZeratul": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blink-zeratul",
		mask: true,
		y: 2,
		x: 0
	},
	"PrologueVoidArmor/PrologueZeratul": {
		name: "Void Armor",
		hotkey: "V",
		icon: "btn-ability-protoss-voidarmor",
		mask: false,
		y: 2,
		x: 1
	},
	"ShadowBlade/PrologueZeratul": {
		name: "Shadow Strike",
		hotkey: "E",
		icon: "btn-ability-protoss-shadowblade",
		mask: false,
		y: 2,
		x: 2
	},
	"ZeratulBlink/ZeratulCoop": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-stealth-blink",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulSummonVoidSeeker/ZeratulCoop": {
		name: "Summon Void Seeker",
		hotkey: "T",
		icon: "btn-ability-zeratul-hero-summonvoidseeker",
		mask: false,
		y: 2,
		x: 1
	},
	"ZeratulShadowCleave/ZeratulCoop": {
		name: "Shadow Cleave",
		hotkey: "E",
		icon: "btn-ability-zeratul-hero-shadowcleave",
		mask: false,
		y: 2,
		x: 2
	},
	"ProphecyVision/ZeratulCoop": {
		name: "Prophetic Vision",
		hotkey: "R",
		icon: "btn-ability-zeratul-hero-propheticvision",
		mask: false,
		y: 2,
		x: 3
	},
	"Blink/ZeratulStalker": {
		name: "Predictive Blink",
		hotkey: "B",
		icon: "btn-ability-zeratul-stalker-predectiveblink",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidSentryShieldRepair/ZeratulSentry": {
		name: "Shield Recharge",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-shieldrecharge",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulReflectionShield/ZeratulSentry": {
		name: "Reflection Shield",
		hotkey: "G",
		icon: "btn-ability-zeratul-sentry-reflectionshield",
		mask: false,
		y: 2,
		x: 1
	},
	"Blink/ZeratulDarkTemplar": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-zeratul-darktemplar-blink",
		mask: false,
		y: 2,
		x: 0
	},
	"ImmortalOverload/ZeratulImmortal": {
		name: "Barrier",
		hotkey: "B",
		icon: "btn-ability-protoss-invulnerabilityshield",
		mask: false,
		y: 2,
		x: 0
	},
	"MorphtoObserverSiege/ZeratulObserver": {
		name: "Surveillance Mode",
		hotkey: "E",
		hotkeySet: "ObserverModes",
		icon: "btn-unit-protoss-zeratulobserver-surveillance",
		mask: false,
		y: 2,
		x: 2
	},
	"MorphtoObserver/ZeratulObserver": {
		name: "Observer Mode",
		hotkey: "T",
		hotkeySet: "ObserverModes",
		icon: "btn-unit-protoss-zeratulobserver",
		mask: false,
		y: 2,
		x: 3
	},
	"ZeratulPurificationNovaTargeted/ZeratulDisruptor": {
		name: "Purification Nova",
		hotkey: "V",
		icon: "btn-ability-zeratul-disruptor-purificationnova",
		mask: false,
		y: 2,
		x: 0
	},
	"TransportMode/ZeratulWarpPrismPhasing": {
		name: "Flight Mode",
		hotkey: "T",
		icon: "btn-unit-protoss-zeratulwarpprism",
		mask: false,
		y: 1,
		x: 0
	},
	"PhasingMode/ZeratulWarpPrism": {
		name: "Wormhole Mode",
		hotkey: "E",
		icon: "btn-unit-protoss-zeratulwarpprismstation",
		mask: false,
		y: 1,
		x: 1
	},
	"ZeratulWarpPrismSelectVoidRift": {
		name: "Select Wormhole Exit",
		hotkey: "Q",
		icon: "btn-ability-zeratul-warpprism-transferlink",
		mask: false,
		y: 1,
		x: 2
	},
	"WarpPrismLoad": {
		name: "Load",
		hotkey: "L",
		icon: "btn-ability-terran-load",
		mask: true,
		y: 1,
		x: 3
	},
	"ZeratulWarpPrismUnload/ZeratulWarpPrismPhasing": {
		name: "Unload",
		hotkey: "D",
		icon: "btn-ability-terran-unloadall",
		mask: true,
		y: 1,
		x: 4
	},
	"ZeratulWarpPrismAutoUnloadOn/ZeratulWarpPrismPhasing": {
		name: "Auto-Unload On",
		hotkey: "C",
		icon: "btn-ability-zeratul-warpprism-autounloadon",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulWarpPrismAutoUnloadOff/ZeratulWarpPrismPhasing": {
		name: "Auto-Unload Off",
		hotkey: "F",
		icon: "btn-ability-zeratul-warpprism-autounloadoff",
		mask: false,
		y: 2,
		x: 1
	},
	"Assimilator/Nexus": {
		name: "Warp In Ancient Assimilator",
		hotkey: "A",
		icon: "btn-building-protoss-zeratulassimilator",
		mask: false,
		y: 0,
		x: 1
	},
	"StalkerZeratul/ZeratulGateway": {
		name: "Warp In Xel’Naga Ambusher",
		hotkey: "S",
		hotkey_NRS: "L",
		hotkey_SC1: "D",
		icon: "btn-unit-protoss-zeratulstalker",
		mask: false,
		y: 0,
		x: 0
	},
	"SentryZeratul/ZeratulGateway": {
		name: "Warp In Xel’Naga Shieldguard",
		hotkey: "E",
		hotkey_NRS: "N",
		icon: "btn-unit-protoss-zeratulsentry",
		mask: false,
		y: 0,
		x: 1
	},
	"DarkTemplarZeratul/ZeratulGateway": {
		name: "Warp In Void Templar",
		hotkey: "D",
		hotkey_NRS: "K",
		hotkey_SC1: "K",
		icon: "btn-unit-protoss-zeratuldarktemplar",
		mask: false,
		y: 0,
		x: 2
	},
	"ZeratulPhaseCannonProjectionPassive/ZeratulPhotonCannon": {
		name: "Shade Projection",
		hotkey: "E",
		icon: "btn-ability-zeratul-photoncannon-shadeprojection",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulStructureBarrier/ZeratulPhotonCannon": {
		name: "Shade Barrier",
		hotkey: "B",
		icon: "btn-ability-zeratul-photoncannon-shadebarrier",
		mask: false,
		y: 2,
		x: 1
	},
	"ZeratulKhaydarinMonolithWarp/ZeratulKhaydarinMonolith": {
		name: "Shade Projection",
		hotkey: "E",
		icon: "btn-ability-zeratul-xelnagastasisturret-shadeprojection",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulStructureBarrier/ZeratulKhaydarinMonolith": {
		name: "Shade Barrier",
		hotkey: "B",
		icon: "btn-ability-zeratul-photoncannon-shadebarrier",
		mask: false,
		y: 2,
		x: 1
	},
	"ImmortalZeratul/ZeratulRoboticsFacility": {
		name: "Warp In Xel’Naga Enforcer",
		hotkey: "I",
		icon: "btn-unit-protoss-zeratulimmortal",
		mask: false,
		y: 0,
		x: 0
	},
	"ZeratulWarpinDisruptor/ZeratulRoboticsFacility": {
		name: "Warp In Xel’Naga Abrogator",
		hotkey: "D",
		icon: "btn-unit-protoss-zeratuldisruptor",
		mask: false,
		y: 0,
		x: 1
	},
	"WarpInZeratulWarpPrism/ZeratulRoboticsFacility": {
		name: "Warp In Xel’Naga Void Array",
		hotkey: "V",
		hotkey_NRS: "R",
		hotkey_SC1: "U",
		icon: "btn-unit-protoss-zeratulwarpprism",
		mask: false,
		y: 0,
		x: 2
	},
	"ZeratulObserver/ZeratulRoboticsFacility": {
		name: "Warp In Xel’Naga Watcher",
		hotkey: "B",
		icon: "btn-unit-protoss-zeratulobserver",
		mask: false,
		y: 0,
		x: 3
	},
	"ZeratulMapWideStasis/ZeratulACArtifact": {
		name: "Stasis Beam",
		hotkey: "",
		icon: "btn-ability-zeratul-topbar-stasisbeam",
		mask: false,
		y: 0,
		x: 0
	},
	"Charge/ZeratulSummonZealot": {
		name: "Charge",
		hotkey: "C",
		hotkey_NRS: "G",
		icon: "btn-ability-protoss-charge-color",
		mask: false,
		y: 2,
		x: 0
	},
	"VoidZealotWhirlwind/ZeratulSummonZealot": {
		name: "Whirlwind",
		hotkey: "E",
		icon: "btn-ability-protoss-whirlwind",
		mask: false,
		y: 2,
		x: 1
	},
	"Feedback/ZeratulSummonKarass": {
		name: "Feedback",
		hotkey: "F",
		hotkey_NRS: "L",
		icon: "btn-ability-protoss-feedback-color",
		mask: false,
		y: 2,
		x: 1
	},
	"PsiStormTelbrus/ZeratulSummonKarass": {
		name: "Psionic Storm",
		hotkey: "T",
		icon: "btn-ability-protoss-psistorm-color",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulDarkArchonMindControl/ZeratulDarkArchon": {
		name: "Mind Control",
		hotkey: "R",
		icon: "btn-ability-protoss-mindcontrol",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulDarkArchonMaelstrom/ZeratulDarkArchon": {
		name: "Maelstrom",
		hotkey: "E",
		icon: "btn-ability-zeratul-darkarchon-maelstrom",
		mask: false,
		y: 2,
		x: 1
	},
	"ZeratulDarkArchonMindControl/ZeratulHeroDarkArchon": {
		name: "Mind Control",
		hotkey: "R",
		icon: "btn-ability-protoss-mindcontrol",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulDarkArchonMaelstrom/ZeratulHeroDarkArchon": {
		name: "Maelstrom",
		hotkey: "E",
		icon: "btn-ability-zeratul-darkarchon-maelstrom",
		mask: false,
		y: 2,
		x: 1
	},
	"EntropicBlast/ZeratulXelNagaConstructCyan": {
		name: "Summon Charged Crystals",
		hotkey: "Q",
		icon: "btn-ability-zeratul-avatarofform-entropicblast",
		mask: false,
		y: 2,
		x: 0
	},
	"ZeratulXelNagaConstructPsiStorm/ZeratulXelNagaConstructCyan": {
		name: "Psionic Gale",
		hotkey: "T",
		icon: "btn-ability-zeratul-avatarofform-psionicgale",
		mask: false,
		y: 2,
		x: 1
	},
	"ZeratulXelNagaConstructPsiBlast/ZeratulXelNagaConstructCyan": {
		name: "Psionic Blast",
		hotkey: "B",
		icon: "btn-ability-zeratul-avatarofform-psionicblast",
		mask: false,
		y: 2,
		x: 2
	},
	"ZeratulXelNagaConstructDevolve/ZeratulXelNagaConstruct": {
		name: "Devolution Wave",
		hotkey: "Z",
		icon: "btn-ability-zeratul-avatarofessence-devolutionwave",
		mask: false,
		y: 2,
		x: 0
	},
	"PlantC4Charge/Raynor": {
		name: "Plant Breaching Charge",
		hotkey: "D",
		hotkey_NRS: "B",
		icon: "btn-ability-terran-d8charge",
		mask: true,
		y: 2,
		x: 0
	},
	"TossGrenade/Raynor": {
		name: "Grenade",
		hotkey: "T",
		hotkey_NRS: "G",
		icon: "btn-ability-terran-raynortossgrenade",
		mask: true,
		y: 2,
		x: 1
	},
	"ExperimentalPlasmaGun/Raynor": {
		name: "Experimental Plasma Gun",
		hotkey: "G",
		hotkey_NRS: "L",
		icon: "btn-ability-terran-raynorplasmagun",
		mask: true,
		y: 2,
		x: 2
	},
	"TheMorosDevice/Raynor": {
		name: "Chrono Rift Device",
		hotkey: "R",
		hotkey_NRS: "N",
		icon: "btn-ability-terran-chronoriftdevice",
		mask: true,
		y: 2,
		x: 3
	},
	"RaynorSnipe/RaynorCommando": {
		name: "Penetrator Round",
		hotkey: "T",
		icon: "btn-ability-terran-penetratorround",
		mask: true,
		y: 2,
		x: 0
	},
	"TossGrenadeTychus/TychusCommando": {
		name: "Toss Shredder Grenade",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-tychustossgrenade",
		mask: true,
		y: 2,
		x: 0
	},
	"DutchPlaceTurret/Swann": {
		name: "Place Flaming Betty",
		hotkey: "T",
		hotkey_NRS: "I",
		icon: "btn-building-terran-autoturret",
		mask: false,
		y: 2,
		x: 0
	},
	"BonesHeal/Stetmann": {
		name: "Heal",
		hotkey: "E",
		hotkey_NRS: "X",
		icon: "btn-ability-terran-heal-color",
		mask: false,
		y: 2,
		x: 0
	},
	"NovaSnipe/Nova": {
		name: "Snipe",
		hotkey: "R",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-snipe-color",
		mask: false,
		y: 2,
		x: 0
	},
	"Domination/Nova": {
		name: "Domination",
		hotkey: "D",
		hotkey_NRS: "T",
		icon: "btn-ability-terran-domination",
		mask: true,
		y: 2,
		x: 1
	},
	"ReleaseMinion/Nova": {
		name: "Release Minion",
		hotkey: "E",
		hotkey_NRS: "Y",
		icon: "btn-command-cancel",
		mask: true,
		y: 2,
		x: 2
	},
	"HeroNukeCalldown/Nova": {
		name: "Tac Nuke Strike",
		hotkey: "N",
		icon: "btn-ability-terran-nuclearstrike-color",
		mask: false,
		y: 2,
		x: 3
	},
	"MindBlast/Tosh": {
		name: "Mindblast",
		hotkey: "B",
		icon: "btn-ability-terran-tosh-mindblast",
		mask: true,
		y: 2,
		x: 0
	},
	"VoodooShield/Tosh": {
		name: "Psi Shield",
		hotkey: "D",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-defensivematrix",
		mask: true,
		y: 2,
		x: 1
	},
	"Consumption/Tosh": {
		name: "Consumption",
		hotkey: "C",
		hotkey_NRS: "U",
		icon: "btn-ability-terran-tosh-consumption",
		mask: true,
		y: 2,
		x: 2
	},
	"HeroNukeCalldown/Tosh": {
		name: "Tac Nuke Strike",
		hotkey: "N",
		icon: "btn-ability-terran-nuclearstrike-color",
		mask: false,
		y: 2,
		x: 3
	},
	"OdinBarrage/Odin": {
		name: "Barrage",
		hotkey: "B",
		icon: "btn-ability-terran-bombardmentstrike-color",
		mask: false,
		y: 2,
		x: 0
	},
	"OdinNukeCalldown/Odin": {
		name: "Nuclear Strike",
		hotkey: "N",
		icon: "btn-ability-terran-nuclearstrike-color",
		mask: false,
		y: 2,
		x: 1
	},
	"NovaStoneTargetEMP/NovaStoneHeroic": {
		name: "Target EMP",
		hotkey: "Y",
		icon: "btn-ability-protoss-targetlock",
		mask: false,
		y: 1,
		x: 1
	},
	"Snipe/NovaStoneHeroic": {
		name: "Sniper Round",
		hotkey: "R",
		hotkey_NRS: "I",
		icon: "btn-ability-terran-snipe-color",
		mask: false,
		y: 2,
		x: 0
	},
	"EMP/NovaStoneHeroic": {
		name: "EMP Round",
		hotkey: "E",
		hotkey_NRS: "U",
		icon: "btn-ability-terran-emp-color",
		mask: false,
		y: 2,
		x: 1
	},
	"NovaStoneDefensiveMatrix/NovaStoneHeroic": {
		name: "Defensive Matrix",
		hotkey: "D",
		icon: "btn-upgrade-swann-defensivematrix",
		mask: false,
		y: 2,
		x: 2
	},
	"NovaArmorBlinkSuitBlinkStone/NovaStoneHeroic": {
		name: "Blink",
		hotkey: "B",
		icon: "btn-ability-protoss-blinkcharges",
		mask: false,
		y: 2,
		x: 3
	},
	"SuperStimpackStone": {
		name: "Stim Infusion",
		hotkey: "W",
		icon: "btn-upgrade-nova-equipment-superstimppack",
		mask: false,
		y: 2,
		x: 4
	},
	"TrainHERC/HERCCompound": {
		name: "Train HERC",
		hotkey: "H",
		icon: "btn-unit-terran-herc",
		mask: false,
		y: 0,
		x: 0
	},
	"GiantYetiLeap/GiantYeti": {
		name: "Leap",
		hotkey: "Q",
		hotkey_NRS: "U",
		icon: "btn-ability-neutral-ursadonleap",
		mask: false,
		y: 2,
		x: 0
	},
	"Consume/GiantYeti": {
		name: "Consume Host",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-consume",
		mask: false,
		y: 2,
		x: 1
	},
	"Consume/Lyote": {
		name: "Consume Host",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-consume",
		mask: false,
		y: 2,
		x: 1
	},
	"ParasiticInvasion/LarvalQueen": {
		name: "Parasitic Invasion",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-zerg-parasiticinvasion",
		mask: false,
		y: 2,
		x: 0
	},
	"SwarmQueenParasiticInvasion/SwarmQueen": {
		name: "Parasitic Invasion",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-zerg-parasiticinvasion",
		mask: false,
		y: 2,
		x: 0
	},
	"SwarmQueenParasiticInvasion/LargeSwarmQueen": {
		name: "Parasitic Invasion",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-zerg-parasiticinvasion",
		mask: false,
		y: 2,
		x: 0
	},
	"SwarmQueenParasiticInvasion/HugeSwarmQueen": {
		name: "Parasitic Invasion",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-zerg-parasiticinvasion",
		mask: false,
		y: 2,
		x: 0
	},
	"GrowSwarmQueen/LarvalQueen": {
		name: "Grow",
		hotkey: "G",
		icon: "btn-unit-zerg-queen",
		mask: false,
		y: 2,
		x: 1
	},
	"GrowLargeQueen/SwarmQueen": {
		name: "Grow",
		hotkey: "G",
		icon: "btn-unit-zerg-queen",
		mask: false,
		y: 2,
		x: 2
	},
	"GrowHugeQueen/LargeSwarmQueen": {
		name: "Grow",
		hotkey: "G",
		icon: "btn-unit-zerg-queen",
		mask: false,
		y: 2,
		x: 3
	},
	"SwarmQueenZergling/SwarmQueen": {
		name: "Birth Zergling",
		hotkey: "W",
		icon: "btn-unit-zerg-zergling",
		mask: false,
		y: 2,
		x: 1
	},
	"SwarmQueenZergling/LargeSwarmQueen": {
		name: "Birth Zergling",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-zergling",
		mask: false,
		y: 2,
		x: 1
	},
	"SwarmQueenZergling/HugeSwarmQueen": {
		name: "Birth Zergling",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-zergling",
		mask: false,
		y: 2,
		x: 1
	},
	"SwarmQueenRoach/LargeSwarmQueen": {
		name: "Birth Roach",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-unit-zerg-roach",
		mask: false,
		y: 2,
		x: 2
	},
	"SwarmQueenRoach/HugeSwarmQueen": {
		name: "Birth Roach",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-unit-zerg-roach",
		mask: false,
		y: 2,
		x: 2
	},
	"SwarmQueenHydralisk/HugeSwarmQueen": {
		name: "Birth Hydralisk",
		hotkey: "D",
		hotkey_NRS: "L",
		icon: "btn-unit-zerg-hydralisk",
		mask: false,
		y: 2,
		x: 3
	},
	"DevastatingShot/InfestedStukov": {
		name: "Corrosive Blast",
		hotkey: "Q",
		hotkey_NRS: "U",
		icon: "btn-ability-zerg-corrosiveblast",
		mask: false,
		y: 2,
		x: 0
	},
	"StukovInfestedTerrans/InfestedStukov": {
		name: "Spawn Infested Terrans",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-unit-zerg-infestedmarine",
		mask: false,
		y: 2,
		x: 1
	},
	"Drag/Dehaka": {
		name: "Drag",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-zerg-drag",
		mask: false,
		y: 2,
		x: 0
	},
	"DehakaMirrorImage/Dehaka": {
		name: "Generate Spawns",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-ability-zerg-dehakaspawn",
		mask: false,
		y: 2,
		x: 1
	},
	"DehakaHeal/Dehaka": {
		name: "Mend",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-ability-zerg-transfusion-color",
		mask: false,
		y: 2,
		x: 2
	},
	"Drag/DehakaMirrorImage": {
		name: "Drag",
		hotkey: "Q",
		hotkey_NRS: "J",
		icon: "btn-ability-zerg-drag",
		mask: false,
		y: 2,
		x: 0
	},
	"SJHyperionBlink/SJHyperion": {
		name: "Jump",
		hotkey: "Q",
		hotkey_NRS: "U",
		icon: "btn-ability-terran-warpjump",
		mask: false,
		y: 2,
		x: 0
	},
	"SJHyperionFighters/SJHyperion": {
		name: "Fighter Strike",
		hotkey: "W",
		hotkey_NRS: "I",
		icon: "btn-unit-terran-tacfighter",
		mask: false,
		y: 2,
		x: 1
	},
	"SJHyperionYamato/SJHyperion": {
		name: "Yamato",
		hotkey: "E",
		hotkey_NRS: "B",
		icon: "btn-ability-terran-yamatogun-color",
		mask: false,
		y: 2,
		x: 2
	},
	"SJHyperionLightningStorm/SJHyperion": {
		name: "Electric Field",
		hotkey: "R",
		hotkey_NRS: "L",
		icon: "btn-ability-terran-electricfield",
		mask: false,
		y: 2,
		x: 3
	},
	"SJHyperionFightersRecall/SJHyperion": {
		name: "Recall Fighters",
		hotkey: "X",
		hotkey_NRS: "J",
		icon: "btn-command-cancel",
		mask: true,
		y: 1,
		x: 1
	},
	"ArtanisLightningDash/ArtanisVoid": {
		name: "Lightning Dash",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-lightningdash",
		mask: false,
		y: 2,
		x: 0
	},
	"ArtanisAstralWind/ArtanisVoid": {
		name: "Astral Wind",
		hotkey: "E",
		hotkey_NRS: "B",
		hotkey_SC1: "B",
		icon: "btn-ability-protoss-astralwind",
		mask: false,
		y: 2,
		x: 2
	},
	"VorazunBlink/VorazunChampion": {
		name: "Shadow Dash",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-upgrade-vorazun-shadowdash",
		mask: false,
		y: 2,
		x: 0
	},
	"MohandarOmnislash/VorazunChampion": {
		name: "Shadow Fury",
		hotkey: "E",
		hotkey_NRS: "U",
		icon: "btn-ability-protoss-shadowfury",
		mask: false,
		y: 2,
		x: 2
	},
	"AlarakKnockback/AlarakChampion": {
		name: "Destruction Wave",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-destructionwave",
		mask: false,
		y: 2,
		x: 0
	},
	"AlarakDeadlyCharge/AlarakChampion": {
		name: "Deadly Charge",
		hotkey: "E",
		icon: "btn-ability-protoss-deadlycharge",
		mask: false,
		y: 2,
		x: 2
	},
	"Reclamation/KaraxChampion": {
		name: "Reclamation",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-protoss-reclamation",
		mask: false,
		y: 2,
		x: 0
	},
	"PhaseCannon/KaraxChampion": {
		name: "Phase Cannon",
		hotkey: "E",
		icon: "btn-ability-protoss-phasecannon",
		mask: false,
		y: 2,
		x: 2
	},
	"FenixSOACharge/FenixChampion": {
		name: "Thunderous Charge",
		hotkey: "Q",
		hotkey_NRS: "C",
		hotkey_SC1: "C",
		icon: "btn-ability-protoss-thunderouscharge",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixSOACharge/FenixSOA": {
		name: "Thunderous Charge",
		hotkey: "Q",
		hotkey_NRS: "C",
		hotkey_SC1: "C",
		icon: "btn-ability-protoss-thunderouscharge",
		mask: false,
		y: 2,
		x: 0
	},
	"FenixWhirlwind/FenixChampion": {
		name: "Whirlwind",
		hotkey: "E",
		hotkey_NRS: "R",
		hotkey_SC1: "Y",
		icon: "btn-ability-protoss-whirlwindfenix",
		mask: false,
		y: 2,
		x: 1
	},
	"FenixWhirlwind/FenixSOA": {
		name: "Whirlwind",
		hotkey: "E",
		hotkey_NRS: "R",
		hotkey_SC1: "Y",
		icon: "btn-ability-protoss-whirlwindfenix",
		mask: false,
		y: 2,
		x: 1
	},
	"VoidShieldCapacitor/FenixChampion": {
		name: "Shield Capacitor",
		hotkey: "R",
		hotkey_NRS: "V",
		hotkey_SC1: "V",
		icon: "btn-ability-protoss-shieldcapacitor",
		mask: false,
		y: 2,
		x: 2
	},
	"KerriganVoidKineticBlast/KerriganVoidUlnar02": {
		name: "Kinetic Blast",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-kerrigan-kineticblast",
		mask: false,
		y: 2,
		x: 0
	},
	"KerriganVoidSpawnBanelings/KerriganVoidUlnar02": {
		name: "Spawn Banelings",
		hotkey: "E",
		icon: "abilityicon_spawnbanelings_square",
		mask: false,
		y: 2,
		x: 2
	},
	"KerriganVoidApocalypse/KerriganVoidUlnar02": {
		name: "Apocalypse",
		hotkey: "D",
		hotkey_SC1: "Y",
		icon: "btn-ability-kerrigan-apocalypse",
		mask: false,
		y: 2,
		x: 3
	},
	"CelestialBeam/KerriganEpilogue02": {
		name: "Celestial Beam",
		hotkey: "C",
		icon: "btn-ability-zerg-quantumray",
		mask: false,
		y: 2,
		x: 0
	},
	"KerriganEpilogue03QuantumRay/KerriganEpilogue03": {
		name: "Quantum Ray",
		hotkey: "Q",
		hotkey_SC1: "W",
		icon: "btn-ability-zerg-quantumray",
		mask: false,
		y: 2,
		x: 0
	},
	"KerriganEpilogue03Heal/KerriganEpilogue03": {
		name: "Celestial Radiance",
		hotkey: "C",
		icon: "btn-ability-zerg-transfusion-color",
		mask: false,
		y: 2,
		x: 1
	},
	"KerriganEpilogue03CreepTeleport/KerriganEpilogue03": {
		name: "Creep Teleport",
		hotkey: "T",
		icon: "btn-ability-zerg-creepteleport",
		mask: false,
		y: 2,
		x: 2
	},
	"KerriganEpilogue03Extinction/KerriganEpilogue03": {
		name: "Extinction",
		hotkey: "E",
		icon: "btn-ability-zerg-extinction",
		mask: false,
		y: 2,
		x: 3
	}
};

data.overrides={
	"WingsOfLiberty": {
		"GhostAcademy/SCV": {
			name: "Build Ghost Academy\nBuild Shadow Ops"
		},
		"Marauder/Barracks": {
			hotkey_SC1: "D",
			x: 1
		},
		"Reaper/Barracks": {
			x: 2
		},
		"SpiderMineReplenish/Vulture": {
			icon: "btn-techupgrade-terran-replenishablemagazine",
			mask: true
		},
		"NanoRepair/ScienceVessel": {
			icon: "btn-ability-terran-heal-color"
		},
		"Irradiate/ScienceVessel": {
			icon: "btn-ability-terran-irradiate",
			mask: true
		},
		"TechLabBarracks/Barracks": {
			x: 1
		},
		"Reactor/Barracks": {
			x: 2
		},
		"Hellion/Factory": {
			hotkey_SC1: "H"
		},
		"SiegeTank/Factory": {
			x: 1
		},
		"Thor/Factory": {
			hotkey_SC1: "O",
			y: 0,
			x: 2
		},
		"TechLabFactory/Factory": {
			x: 1
		},
		"Reactor/Factory": {
			x: 2
		},
		"VikingFighter/Starport": {
			hotkey_SC1: "K"
		},
		"Raven/Starport": {
			name: "Build Raven\nBuild Science Vessel",
			x: 2
		},
		"Banshee/Starport": {
			x: 3
		},
		"Battlecruiser/Starport": {
			y: 0,
			x: 4
		},
		"TechLabStarport/Starport": {
			x: 1
		},
		"Reactor/Starport": {
			x: 2
		}
	},
	"NovaCovertOps": {
		"SCV": {
			icon: "btn-unit-terran-scvblackops"
		},
		"CommandCenter/SCV": {
			icon: "btn-building-nova-commandcenter"
		},
		"SupplyDepot/SCV": {
			icon: "btn-building-nova-supplydepot"
		},
		"Refinery/SCV": {
			icon: "btn-building-nova-refinery"
		},
		"Barracks/SCV": {
			icon: "btn-building-nova-barracks"
		},
		"Bunker/SCV": {
			icon: "btn-building-nova-bunker"
		},
		"EngineeringBay/SCV": {
			icon: "btn-building-nova-engineeringbay"
		},
		"MissileTurret/SCV": {
			icon: "btn-building-nova-missileturret"
		},
		"GhostAcademy/SCV": {
			icon: "btn-building-nova-ghostacademy"
		},
		"Factory/SCV": {
			icon: "btn-unit-terran-factoryblackops"
		},
		"Armory/SCV": {
			icon: "btn-unit-terran-armoryblackops"
		},
		"Starport/SCV": {
			icon: "btn-building-nova-starport"
		},
		"FusionCore/SCV": {
			icon: "btn-building-nova-fusioncore"
		},
		"Scan/OrbitalCommand": {
			x: 0
		},
		"Raise/SupplyDepotLowered": {
			icon: "btn-building-nova-supplydepot"
		},
		"Marine/Barracks": {
			icon: "btn-unit-terran-marineblackops"
		},
		"Reaper/Barracks": {
			icon: "btn-unit-terran-reaperblackops"
		},
		"Marauder/Barracks": {
			hotkey_SC1: "D",
			icon: "btn-unit-terran-marauderblackops"
		},
		"TechLabBarracks/Barracks": {
			icon: "btn-building-nova-techlab"
		},
		"Reactor/Barracks": {
			icon: "btn-unit-terran-reactorblackops"
		},
		"HellionTank/Factory": {
			icon: "btn-unit-terran-hellbatblackops",
			y: 0
		},
		"Goliath/Factory": {
			icon: "btn-unit-terran-goliathblackops",
			y: 0,
			x: 2
		},
		"SiegeTank/Factory": {
			icon: "btn-unit-terran-siegetankblackops-tank",
			x: 1
		},
		"TechLabFactory/Factory": {
			icon: "btn-building-nova-techlab"
		},
		"Reactor/Factory": {
			icon: "btn-unit-terran-reactorblackops"
		},
		"Liberator/Starport": {
			icon: "btn-unit-terran-liberatorblackops",
			x: 1
		},
		"Banshee/Starport": {
			icon: "btn-unit-terran-bansheeblackops",
			x: 0
		},
		"Raven/Starport": {
			icon: "btn-unit-terran-ravenblackops",
			x: 2
		},
		"Battlecruiser/Starport": {
			icon: "btn-unit-terran-blackops-battlecruiser",
			y: 0,
			x: 3
		},
		"TechLabStarport/Starport": {
			icon: "btn-building-nova-techlab"
		},
		"Reactor/Starport": {
			icon: "btn-unit-terran-reactorblackops"
		},
		"Stim": {
			name: "Super Stimpack",
			hotkey_NRS: "I",
			icon: "btn-upgrade-nova-equipment-superstimppack"
		},
		"CloakOnBanshee": {
			x: 2
		},
		"CloakOff": {
			x: 3
		},
		"MorphToHellion/Hellion": {
			icon: "btn-unit-terran-hellionblackops"
		},
		"MorphToHellionTank/Hellion": {
			icon: "btn-unit-terran-hellbatblackops"
		},
		"SiegeMode": {
			icon: "btn-unit-terran-siegetankblackops-sieged"
		},
		"Unsiege": {
			icon: "btn-unit-terran-siegetankblackops-tank"
		},
		"LiberatorAGMode/Liberator": {
			hotkey: "E",
			icon: "btn-unit-terran-liberator-agmodeblackops"
		},
		"LiberatorAAMode/Liberator": {
			hotkey: "F",
			hotkey_NRS: "D",
			hotkey_SC1: "D",
			icon: "btn-unit-terran-liberatorblackops"
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		}
	},
	"Raynor": {
		"CloakOnBanshee": {
			hotkey_NRS: "C"
		},
		"Bunker/SCV": {
			icon: "btn-building-terran-bunkershriketurret"
		},
		"OrbitalCommand/CommandCenter": {
			x: 4
		},
		"Scan/OrbitalCommand": {
			x: 1
		},
		"Marauder/Barracks": {
			hotkey_SC1: "D",
			x: 1
		},
		"Firebat/Barracks": {
			y: 0,
			x: 2
		},
		"Medic/Barracks": {
			y: 0,
			x: 3
		},
		"Stimpack/BarracksTechLab": {
			name: "Research Stabilizer Medpacks",
			icon: "btn-upgrade-raynor-stabilizermedpacks"
		},
		"UpgradeBuildingArmorLevel1/EngineeringBay": {
			name: "Upgrade Structure Armor"
		},
		"HellionTank/Factory": {
			name: "Build Vulture",
			icon: "btn-unit-terran-vulture",
			y: 0
		},
		"SiegeTank/Factory": {
			x: 1
		},
		"ResearchHighCapacityBarrels/FactoryTechLab": {
			name: "Research Replenishable Magazine",
			icon: "btn-upgrade-raynor-replenishablemagazine"
		},
		"ResearchHellbatHellArmor/FactoryTechLab": {
			name: "Research Cerberus Mines",
			icon: "btn-upgrade-raynor-cerberusmines"
		},
		"ResearchRegenerativeBioSteel/Armory": {
			name: "Research Afterburners",
			icon: "btn-upgrade-terran-medivacemergencythrusters"
		},
		"Banshee/Starport": {
			x: 1
		},
		"Battlecruiser/Starport": {
			y: 0,
			x: 2
		},
		"ResearchBansheeCloak/StarportTechLab": {
			x: 0
		}
	},
	"Swann": {
		"Bunker/SCV": {
			name: "Build Perdition Turret",
			icon: "btn-unit-terran-perditionturret"
		},
		"MissileTurret/SCV": {
			icon: "btn-building-terran-missileturrettitaniumhousing"
		},
		"250mmStrikeCannons/Thor": {
			name: "330mm Barrage Cannon"
		},
		"Hellion/Factory": {
			hotkey_SC1: "E",
			y: 1
		},
		"HellionTank/Factory": {
			y: 0
		},
		"SiegeTank/Factory": {
			x: 2
		},
		"BuildCyclone/Factory": {
			x: 3
		},
		"Thor/Factory": {
			hotkey_SC1: "O",
			y: 0,
			x: 4
		},
		"ResearchNeosteelFrame/EngineeringBay": {
			name: "Research Hi-Sec Auto Tracking",
			icon: "btn-upgrade-terran-hisecautotracking"
		},
		"UpgradeBuildingArmorLevel1/EngineeringBay": {
			name: "Upgrade Structure Armor"
		},
		"Goliath/Factory": {
			y: 0,
			x: 1
		},
		"TechLabFactory/Factory": {
			name: "Build Tech Reactor",
			icon: "btn-building-terran-techreactor"
		},
		"TechLabStarport/Starport": {
			name: "Build Tech Reactor",
			icon: "btn-building-terran-techreactor"
		},
		"Wraith/Starport": {
			hotkey: "T",
			hotkey_SC1: "W",
			y: 0,
		},
		"BuildHercules/Starport": {
			y: 0
		}
	},
	"Nova": {
		"SCV": {
			icon: "btn-unit-terran-scvblackops"
		},
		"CommandCenter/SCV": {
			icon: "btn-building-nova-commandcenter"
		},
		"Refinery/SCV": {
			name: "Build Automated Refinery",
			icon: "btn-building-nova-refineryautomated"
		},
		"Barracks/SCV": {
			icon: "btn-building-nova-barracks"
		},
		"Bunker/SCV": {
			name: "Build Railgun Turret",
			hotkey: "G",
			icon: "btn-unit-terran-autoturretblackops"
		},
		"EngineeringBay/SCV": {
			icon: "btn-building-nova-engineeringbay"
		},
		"MissileTurret/SCV": {
			icon: "btn-building-nova-missileturret"
		},
		"GhostAcademy/SCV": {
			icon: "btn-building-nova-ghostacademy"
		},
		"Factory/SCV": {
			icon: "btn-unit-terran-factoryblackops"
		},
		"Armory/SCV": {
			icon: "btn-unit-terran-armoryblackops"
		},
		"Starport/SCV": {
			icon: "btn-building-nova-starport"
		},
		"Marine/Barracks": {
			name: "Deploy Elite Marines",
			icon: "btn-unit-terran-marineblackops"
		},
		"Marauder/Barracks": {
			name: "Deploy Marauder Commandos",
			icon: "btn-unit-terran-marauderblackops",
			x: 1
		},
		"Firebat/Barracks": {
			name: "Deploy Spec Ops Ghosts",
			hotkey: "G",
			icon: "btn-unit-terran-blackops-femaleghost",
			y: 0,
			x: 2
		},
		"TechLabBarracks/Barracks": {
			icon: "btn-building-nova-techlab"
		},
		"ResearchShieldWall/BarracksTechLab": {
			name: "Research Laser Targeting System",
			icon: "btn-upgrade-terran-lazertargetingsystem"
		},
		"Stimpack/BarracksTechLab": {
			name: "Research Super Stimpack",
			icon: "btn-upgrade-nova-equipment-superstimppack"
		},
		"ResearchPunisherGrenades/BarracksTechLab": {
			name: "Research Suppression Shells",
			icon: "btn-ability-terran-superconcussive"
		},
		"ResearchIncineratorGauntlets/BarracksTechLab": {
			name: "Research EMP Rounds",
			icon: "btn-ability-terran-emp-color"
		},
		"ResearchJuggernautPlating/BarracksTechLab": {
			name: "Research Triple Tap",
			icon: "btn-upgrade-terran-nova-snipetripletap"
		},
		"UpgradeBuildingArmorLevel1/EngineeringBay": {
			name: "Upgrade Structure Armor"
		},
		"HellionTank/Factory": {
			name: "Deploy Hellbat Rangers",
			icon: "btn-unit-terran-hellbatblackops",
			y: 0
		},
		"Goliath/Factory": {
			name: "Deploy Strike Goliaths",
			icon: "btn-unit-terran-goliathblackops",
			y: 0,
			x: 1
		},
		"SiegeTank/Factory": {
			name: "Deploy Heavy Siege Tanks",
			icon: "btn-unit-terran-siegetankblackops-tank",
			x: 2
		},
		"TechLabFactory/Factory": {
			icon: "btn-building-nova-techlab"
		},
		"ResearchHellbatHellArmor/FactoryTechLab": {
			name: "Research Jump Jet Assault",
			icon: "btn-upgrade-terran-jumpjets"
		},
		"ResearchImprovedSiegeMode/FactoryTechLab": {
			name: "Research Ares-Class Targeting System",
			icon: "btn-upgrade-swann-aresclasstargetingsystem"
		},
		"Liberator/Starport": {
			name: "Deploy Raid Liberators",
			icon: "btn-unit-terran-liberatorblackops",
			x: 0
		},
		"Banshee/Starport": {
			name: "Deploy Covert Banshees",
			icon: "btn-unit-terran-bansheeblackops",
			x: 1
		},
		"Raven/Starport": {
			name: "Deploy Raven Type-II",
			icon: "btn-unit-terran-ravenblackops",
			x: 2
		},
		"TechLabStarport/Starport": {
			icon: "btn-building-nova-techlab"
		},
		"ResearchBansheeCloak/StarportTechLab": {
			name: "Research Advanced Cloaking Field",
			x: 0
		},
		"ResearchShockwaveMissileBattery/StarportTechLab": {
			name: "Research Rocket Barrage",
			icon: "btn-upgrade-terran-nova-bansheemissilestrik"
		},
		"ResearchPhobosClassWeaponsSystem/StarportTechLab": {
			name: "Research Raid Artillery",
			icon: "btn-upgrade-terran-nova-terrandefendermodestructureattack"
		},
		"ResearchRipwaveMissiles/StarportTechLab": {
			name: "Research Smart Servos",
			icon: "btn-upgrade-terran-transformationservos"
		},
		"ResearchRipwaveMissiles/StarportTechReactor": {
			name: "Research Defensive Matrix",
			hotkey: "R",
			icon: "btn-upgrade-swann-defensivematrix",
			mask: false,
			y: 0,
			x: 3
		}
	},
	"Han": {
		"SCV": {
			icon: "btn-unit-collection-scv-junker"
		},
		"Lower/SupplyDepot": {
			icon: "btn-building-hornerhan-supplypodburrowed"
		},
		"Raise/SupplyDepotLowered": {
			icon: "btn-building-hornerhan-supplypod"
		},
		"FighterMode": {
			icon: "btn-unit-collection-vikingfighter-junker",
			x: 2
		},
		"AssaultMode": {
			icon: "btn-unit-collection-vikingassault-junker",
			x: 3
		},
		"TerranVehicleAndShipWeaponsLevel1/Armory": {
			name: "Upgrade Weapons",
			icon: "btn-ability-hornerhan-mechbioweaponupgrades-a"
		},
		"TerranVehicleAndShipPlatingLevel1/Armory": {
			name: "Upgrade Armor",
			icon: "btn-ability-hornerhan-mechbioarmorupgrades-a"
		},
		"ResearchBattlecruiserSpecializations/FusionCore": {
			name: "Research Overcharged Reactor",
			icon: "btn-ability-hornerhan-battlecruiser-yamato"
		},
		"ResearchBansheeCloak/StarportTechLab": {
			name: "Research Unregistered Cloaking System",
			icon: "btn-ability-hornerhan-wraith-permanentcloak",
			x: 0
		},
		"ResearchShockwaveMissileBattery/StarportTechLab": {
			name: "Research Trigger Override",
			icon: "btn-ability-hornerhan-wraith-attackspeed"
		},
		"ResearchPhobosClassWeaponsSystem/StarportTechLab": {
			name: "Research W.I.L.D. Missiles",
			icon: "btn-ability-hornerhan-viking-missileupgrade"
		},
		"ResearchRipwaveMissiles/StarportTechLab": {
			name: "Research Shredder Rounds",
			icon: "btn-ability-hornerhan-viking-piercingattacks"
		},
		"ResearchMedivacCloakedHealBeam/StarportTechLab": {
			name: "Research Multi-Threaded Sensors",
			icon: "btn-ability-hornerhan-raven-analyzetargetmultilock"
		}
	},
	"Zerg": {
		"GatherProt": {
			icon: "btn-ability-zerg-gather"
		},
		"Spray": {
			x: 2
		},
		"BunkerLoad": {
			x: 2
		},
		"BunkerUnloadAll": {
			x: 3
		}
	},
	"HeartOfTheSwarm": {
		"GatherProt": {
			icon: "btn-ability-zerg-gather"
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		},
		"BurrowLurkerMP": {
			hotkey: "R",
			hotkey_NRS: "U",
			x: 4
		},
		"Roach/Larva": {
			y: 1,
			x: 0
		},
		"Hydralisk/Larva": {
			x: 1
		},
		"Infestor/Larva": {
			x: 2
		},
		"Ultralisk/Larva": {
			y: 1,
			x: 3
		},
		"Mutalisk/Larva": {
			y: 2,
			x: 0
		},
		"FungalGrowth/Infestor": {
			x: 0
		},
		"FaceEmbrace/Viper": {
			x: 0
		},
		"SpineCrawlerRoot/SpineCrawlerUprooted": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U"
		},
		"SpineCrawlerUproot/SpineCrawler": {
			x: 0
		},
		"SporeCrawlerRoot/SporeCrawlerUprooted": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U"
		},
		"SporeCrawlerUproot/SporeCrawler": {
			x: 0
		},
		"Marauder/Barracks": {
			hotkey_SC1: "D",
			x: 1
		},
		"Reaper/Barracks": {
			x: 2
		},
		"Firebat/Barracks": {
			y: 0,
			x: 3
		},
		"Medic/Barracks": {
			hotkey_NRS: "I",
			y: 0,
			x: 4
		},
		"Ghost/Barracks": {
			y: 1,
			x: 0
		},
		"Spectre/Barracks": {
			hotkey: "S",
			hotkey_SC1: "P",
			y: 1,
			x: 1
		},
		"HireKelmorianMiners/Barracks": {
			hotkey_NRS: "W"
		},
		"HireDevilDogs/Barracks": {
			hotkey_NRS: "A"
		},
		"MercReaper/Barracks": {
			hotkey_NRS: "V"
		},
		"MercMedic/Barracks": {
			hotkey_NRS: "S"
		},
		"TechLabBarracks/Barracks": {
			x: 1
		},
		"Reactor/Barracks": {
			x: 2
		},
		"Hellion/Factory": {
			hotkey_SC1: "H",
		},
		"Goliath/Factory": {
			y: 0,
			x: 1
		},
		"WarHound/Factory": {
			hotkey_NRS: "U",
			hotkey_SC1: "O",
			x: 1
		},
		"SiegeTank/Factory": {
			x: 2
		},
		"Predator/Factory": {
			x: 2
		},
		"Diamondback/Factory": {
			y: 0,
			x: 3
		},
		"Thor/Factory": {
			hotkey_SC1: "O",
			y: 0,
			x: 4
		},
		"MicroBot/Factory": {
			hotkey_NRS: "B",
			y: 1,
			x: 1
		},
		"TechLabFactory/Factory": {
			x: 1
		},
		"Reactor/Factory": {
			x: 2
		},
		"VikingFighter/Starport": {
			hotkey_SC1: "K"
		},
		"Banshee/Starport": {
			x: 1
		},
		"Medivac/Starport": {
			x: 2
		},
		"Wraith/Starport": {
			hotkey: "W",
			hotkey_NRS: "T",
			y: 0,
			x: 2
		},
		"Battlecruiser/Starport": {
			y: 0,
			x: 3
		},
		"Raven/Starport": {
			x: 4
		},
		"BuildHercules/Starport": {
			y: 0,
			x: 0
		},
		"BuildScienceVessel/Starport": {
			hotkey: "R",
			x: 1
		},
		"HireHelsAngels/Starport": {
			hotkey_NRS: "J"
		},
		"TechLabStarport/Starport": {
			x: 1
		},
		"Reactor/Starport": {
			x: 2
		}
	},
	"Kerrigan": {
		"GatherProt": {
			icon: "btn-ability-zerg-gather"
		},
		"BunkerLoad": {
			x: 2
		},
		"BunkerUnloadAll": {
			x: 3
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		},
		"BurrowLurkerMP": {
			hotkey: "R",
			hotkey_NRS: "U",
			x: 4
		},
		"MindBolt/K5Kerrigan": {
			name: "Leaping Strike",
			icon: "btn-ability-kerrigan-leapingstrike"
		},
		"PsionicLift/K5Kerrigan": {
			name: "Psionic Shift",
			hotkey_NRS: "W",
			icon: "btn-ability-kerrigan-psychicshift"
		},
		"MindBolt/K5KerriganBurrowed": {
			name: "Leaping Strike",
			icon: "btn-ability-kerrigan-leapingstrike"
		},
		"PsionicLift/K5KerriganBurrowed": {
			name: "Psionic Shift",
			hotkey_NRS: "W",
			icon: "btn-ability-kerrigan-psychicshift"
		},
		"Zergling/Larva": {
			icon: "btn-unit-zerg-zergling-raptor"
		},
		"Hydralisk/Larva": {
			icon: "btn-unit-zerg-hydralisk-lurker",
			x: 1
		},
		"Mutalisk/Larva": {
			icon: "btn-unit-zerg-mutalisk-broodlord",
			y: 2,
			x: 0
		},
		"Ultralisk/Larva": {
			icon: "btn-unit-zerg-ultralisk-torrasque",
			y: 1,
			x: 3
		},
		"NydusNetwork/Drone": {
			name: "Mutate into Omega Network"
		},
		"HydraliskFrenzy/Hydralisk": {
			x: 1
		},
		"zerglingattackspeed/SpawningPool": {
			x: 2
		},
		"SpineCrawlerRoot/SpineCrawlerUprooted": {
			hotkey: "R",
			hotkey_SC1: "U"
		},
		"SpineCrawlerUproot/SpineCrawler": {
			x: 0
		},
		"SporeCrawlerRoot/SporeCrawlerUprooted": {
			hotkey: "R",
			hotkey_SC1: "U"
		},
		"SporeCrawlerUproot/SporeCrawler": {
			x: 0
		},
		"EvolveMuscularAugments/HydraliskDen": {
			hotkey: "A",
			icon: "btn-upgrade-zerg-groovedspines",
			x: 0
		},
		"EvolveGuardianAttackRangeIncrease/Spire": {
			name: "Evolve Porous Cartilage",
			icon: "btn-upgrade-kerrigan-broodlordspeed"
		},
		"EvolveGuardianAttackRangeIncrease/GreaterSpire": {
			name: "Evolve Porous Cartilage",
			icon: "btn-upgrade-kerrigan-broodlordspeed"
		}
	},
	"Zagara": {
		"GatherProt": {
			icon: "btn-ability-zerg-gather"
		},
		"BunkerLoad": {
			x: 2
		},
		"BunkerUnloadAll": {
			x: 3
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		},
		"Drone/Larva": {
			icon: "btn-unit-zerg-zagara-webby-twindrone"
		},
		"Overlord/Larva": {
			icon: "btn-unit-collection-webby-overlord"
		},
		"Zergling/Larva": {
			icon: "btn-unit-collection-webby-zergling"
		},
		"Roach/Larva": {
			name: "Morph to Scourge",
			icon: "btn-unit-zerg-scourge",
			y: 1,
			x: 0
		},
		"SwarmHostMP/Larva": {
			name: "Morph to Corruptor",
			icon: "btn-unit-collection-webby-corruptor",
			x: 1
		},
		"BanelingNest/Drone": {
			x: 2
		},
		"Baneling/Zergling": {
			icon: "btn-unit-collection-webby-baneling"
		},
		"Queen": {
			icon: "btn-unit-collection-webby-queen"
		},
		"EvolveK5ChainLightning/EvolutionChamber": {
			name: "Evolve Medusa Blades",
			icon: "btn-upgrade-zerg-hotsgroovedspines"
		},
		"EvolveK5Cooldowns/EvolutionChamber": {
			name: "Evolve Protective Cover",
			icon: "btn-upgrade-zagara-aberrationarmorcover"
		},
		"zerglingattackspeed/SpawningPool": {
			x: 2
		},
		"SpineCrawlerRoot/SpineCrawlerUprooted": {
			hotkey: "R",
			hotkey_SC1: "U"
		},
		"SpineCrawlerUproot/SpineCrawler": {
			x: 0
		},
		"SporeCrawlerRoot/SporeCrawlerUprooted": {
			hotkey: "R",
			hotkey_SC1: "U"
		},
		"SporeCrawlerUproot/SporeCrawler": {
			x: 0
		}
	},
	"Abathur": {
		"GatherProt": {
			icon: "btn-ability-zerg-gather"
		},
		"BunkerLoad": {
			x: 2
		},
		"BunkerUnloadAll": {
			x: 3
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		},
		"Roach/Larva": {
			icon: "btn-unit-zerg-roach-vile",
			y: 1,
			x: 0
		},
		"Hydralisk/Larva": {
			name: "Morph to Swarm Host",
			icon: "btn-unit-zerg-swarmhost",
			x: 1
		},
		"Mutalisk/Larva": {
			y: 2,
			x: 0
		},
		"Viper/Larva": {
			x: 1
		},
		"Queen": {
			name: "Birth Swarm Queen",
			icon: "btn-unit-zerg-broodqueen"
		},
		"Transfusion/Queen": {
			name: "Rapid Transfusion",
			x: 1
		},
		"FaceEmbrace/Viper": {
			x: 0
		},
		"SpineCrawlerRoot/SpineCrawlerUprooted": {
			hotkey: "R",
			hotkey_SC1: "U"
		},
		"SpineCrawlerUproot/SpineCrawler": {
			x: 0
		},
		"SporeCrawlerRoot/SporeCrawlerUprooted": {
			hotkey: "R",
			hotkey_SC1: "U"
		},
		"SporeCrawlerUproot/SporeCrawler": {
			x: 0
		},
		"EvolveInfestorEnergyUpgrade/InfestationPit": {
			name: "Evolve Deep Tunnel",
			icon: "btn-ability-zerg-deeptunnel",
			x: 2
		},
		"ResearchNeuralParasite/InfestationPit": {
			name: "Paralytic Barbs",
			icon: "btn-upgrade-zerg-abathur-abduct",
			x: 3
		},
		"ZagaraVoidCoopNydusWorm/NydusNetwork": {
			name: "Summon Nydus Worm"
		}
	},
	"Stukov": {
		"BunkerLoad": {
			x: 0
		},
		"BunkerUnloadAll": {
			x: 1
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		},
		"CloakOnBanshee": {
			hotkey_NRS: "C"
		},
		"overlordspeed": {
			x: 1
		}
	},
	"Dehaka": {
		"GatherProt": {
			icon: "btn-ability-zerg-gather"
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		},
		"SwarmHostBurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			x: 4
		}
	},
	"Stetmann": {
		"GatherProt": {
			icon: "btn-ability-zerg-gather"
		},
		"BunkerLoad": {
			x: 2
		},
		"BunkerUnloadAll": {
			x: 3
		},
		"BurrowDown": {
			hotkey: "R",
			hotkey_NRS: "U",
			hotkey_SC1: "U",
			x: 4
		}
	},
	"Protoss": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"BunkerLoad": {
			x: 2
		},
		"BunkerUnloadAll": {
			x: 3
		}
	},
	"LegacyOfTheVoid": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"ShieldBattery/Probe": {
			y: 1
		},
		"TemplarArchive/Probe": {
			y: 0
		},
		"DarkShrine/Probe": {
			y: 1
		},
		"ForceField/Sentry": {
			x: 2
		},
		"VoidDarkTemplarShadowFury/DarkTemplarShakuras": {
			hotkey_SC1: "W"
		},
		"ImmortalOverload/Immortal": {
			hotkey_NRS: "V",
			hotkey_SC1: "V"
		},
		"ShieldBatteryRecharge/ShieldBattery": {
			hotkey_NRS: "U",
			hotkey_SC1: "U"
		},
		"Zealot": {
			name: "Warp In Zealot\nWarp In Centurion\nWarp In Sentinel",
			icon: "btn-unit-protoss-zealot-aiur"
		},
		"Sentry": {
			name: "Warp In Sentry\nWarp In Energizer\nWarp In Havoc"
		},
		"Stalker": {
			name: "Warp In Stalker\nWarp In Dragoon\nWarp In Adept"
		},
		"HighTemplar": {
			name: "Warp In High Templar\nWarp In Dark Archon\nWarp In Ascendant",
			icon: "btn-unit-protoss-hightemplarnocord"
		},
		"DarkTemplar": {
			name: "Warp In Dark Templar\nWarp In Avenger\nWarp In Blood Hunter",
		},
		"Immortal/RoboticsFacility": {
			name: "Warp In Immortal\nWarp In Annihilator\nWarp In Vanguard",
			x: 0
		},
		"Colossus/RoboticsFacility": {
			name: "Warp In Colossus\nWarp In Reaver\nWarp In Wrathwalker",
			x: 1
		},
		"Immortal/RoboticsFacilityWarp": {
			name: "Warp In Immortal\nWarp In Annihilator\nWarp In Vanguard"
		},
		"Colossus/RoboticsFacilityWarp": {
			name: "Warp In Colossus\nWarp In Reaver\nWarp In Wrathwalker"
		},
		"Phoenix/Stargate": {
			name: "Warp In Phoenix\nWarp In Corsair\nWarp In Mirage"
		},
		"VoidRay/Stargate": {
			name: "Warp In Void Ray\nWarp In Destroyer\nWarp In Arbiter",
			x: 1
		},
		"Carrier/Stargate": {
			name: "Warp In Carrier\nWarp In Tempest\nWarp In Mothership",
			x: 2
		},
		"Phoenix/StargateWarp": {
			name: "Warp In Phoenix\nWarp In Corsair\nWarp In Mirage"
		},
		"VoidRay/StargateWarp": {
			name: "Warp In Void Ray\nWarp In Destroyer\nWarp In Arbiter"
		},
		"Carrier/StargateWarp": {
			name: "Warp In Carrier\nWarp In Tempest\nWarp In Mothership"
		}
	},
	"Artanis": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"Zealot": {
			icon: "btn-unit-protoss-zealot-aiur"
		},
		"Stalker": {
			name: "Warp In Dragoon",
			icon: "btn-unit-protoss-dragoon-void"
		},
		"HighTemplar": {
			icon: "btn-unit-protoss-hightemplarnocord"
		},
		"MorphtoObserverSiege/Observer": {
			x: 2
		},
		"MorphtoObserver/Observer": {
			x: 3
		},
		"Immortal/RoboticsFacility": {
			x: 0
		},
		"Observer/RoboticsFacility": {
			x: 2
		},
		"Colossus/RoboticsFacility": {
			name: "Warp In Reaver",
			icon: "btn-unit-protoss-reaver",
			x: 1
		},
		"Colossus/RoboticsFacilityWarp": {
			name: "Warp In Reaver",
			icon: "btn-unit-protoss-reaver"
		},
		"ResearchExtendedThermalLance/RoboticsBay": {
			name: "Research Improved Barrier",
			icon: "btn-ability-protoss-barrier-upgraded",
			x: 1
		},
		"VoidRay/Stargate": {
			name: "Warp In Tempest",
			icon: "btn-unit-protoss-tempest",
			x: 1
		},
		"VoidRay/StargateWarp": {
			name: "Warp In Tempest",
			icon: "btn-unit-protoss-tempest"
		}
	},
	"Vorazun": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"VoidDarkTemplarShadowFury/DarkTemplarShakuras": {
			hotkey: "E"
		},
		"OracleBuildStasisTrap/Oracle": {
			x: 2
		},
		"OracleWeaponOn/Oracle": {
			x: 0
		},
		"OracleWeaponOff/Oracle": {
			x: 1
		},
		"Zealot": {
			name: "Warp In Centurion",
			icon: "btn-unit-protoss-zealot-nerazim"
		},
		"ResearchCharge/TwilightCouncil": {
			name: "Research Shadow Charge",
			icon: "btn-ability-protoss-shadowcharge"
		},
		"ResearchDragoonRange/TwilightCouncil": {
			name: "Research Blink",
			icon: "btn-ability-protoss-blink-color"
		},
		"ResearchWhirlwind/TwilightCouncil": {
			name: "Research Darkcoil",
			icon: "btn-upgrade-vorazun-shadowstun"
		},
		"ResearchDragoonChassis/TwilightCouncil": {
			name: "Research Phase Reactor",
			icon: "btn-ability-protoss-blinkshieldrestore"
		},
		"Phoenix/Stargate": {
			name: "Warp In Corsair",
			icon: "btn-unit-protoss-corsair"
		},
		"VoidRay/Stargate": {
			icon: "btn-unit-protoss-voidray-nerazim",
			x: 1
		},
		"Oracle/Stargate": {
			x: 2
		},
		"AnionPulseCrystals/FleetBeacon": {
			name: "Research Disruption Web",
			icon: "btn-ability-protoss-disruptionweb"
		},
		"ResearchDoubleGravitonBeam/FleetBeacon": {
			name: "Research Stealth Drive",
			icon: "btn-upgrade-vorazun-corsairpermanentlycloaked"
		},
		"ResearchTempestDisintegration/FleetBeacon": {
			name: "Research Prismatic Alignment",
			icon: "btn-ability-protoss-voidrayprismaticalignment"
		}
	},
	"Karax": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"ShieldBattery/Probe": {
			y: 1
		},
		"KhaydarinMonolith/Probe": {
			icon: "btn-building-protoss-khaydarinmonolithaiur"
		},
		"Zealot": {
			name: "Warp In Sentinel",
			icon: "btn-unit-protoss-zealot-purifier"
		},
		"Sentry": {
			name: "Warp In Energizer",
			icon: "btn-unit-protoss-sentry-purifier"
		},
		"VoidSentryPhasingMode/SentryPurifier": {
			x: 2
		},
		"VoidSentryMobileMode/SentryPurifier": {
			x: 3
		},
		"MorphtoObserverSiege/Observer": {
			x: 2
		},
		"MorphtoObserver/Observer": {
			x: 3
		},
		"ShieldBatteryRecharge/ShieldBattery": {
			hotkey_NRS: "U",
			hotkey_SC1: "U"
		},
		"ResearchDragoonRange/TwilightCouncil": {
			name: "Research Reconstruction",
			icon: "btn-ability-protoss-reconstruction"
		},
		"ResearchWhirlwind/TwilightCouncil": {
			name: "Research Rapid Recharging",
			icon: "btn-upgrade-karax-energyregen200"
		},
		"ResearchDragoonChassis/TwilightCouncil": {
			name: "Research Reclamation",
			icon: "btn-ability-protoss-reclamation"
		},
		"Immortal/RoboticsFacility": {
			x: 0
		},
		"Colossus/RoboticsFacility": {
			icon: "btn-unit-protoss-colossus-purifier",
			x: 1
		},
		"Observer/RoboticsFacility": {
			x: 2
		},
		"ResearchExtendedThermalLance/RoboticsBay": {
			x: 1
		},
		"ResearchReaverIncreasedScarabCount/RoboticsBay": {
			name: "Research Fire Beam",
			icon: "btn-ability-protoss-firebeam"
		},
		"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay": {
			name: "Research Shadow Cannon",
			icon: "btn-ability-protoss-shadowcannon"
		},
		"Phoenix/Stargate": {
			name: "Warp In Mirage",
			icon: "btn-unit-protoss-phoenix-purifier"
		},
		"VoidRay/Stargate": {
			name: "Warp In Carrier",
			icon: "btn-unit-protoss-carrierhero",
			x: 1
		},
		"ResearchDoubleGravitonBeam/FleetBeacon": {
			name: "Research Phasing Armor",
			icon: "btn-ability-protoss-phasingarmor"
		},
		"ResearchTempestDisintegration/FleetBeacon": {
			name: "Research Repair Drones",
			icon: "btn-ability-protoss-carrierrepairdrones"
		}
	},
	"Alarak": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"BunkerLoad": {
			x: 2
		},
		"BunkerUnloadAll": {
			x: 3
		},
		"Nexus/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-nexus"
		},
		"Assimilator/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-assimilator"
		},
		"Pylon/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-pylon"
		},
		"Gateway/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-gateway"
		},
		"Forge/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-forge"
		},
		"CyberneticsCore/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-cyberneticscore"
		},
		"PhotonCannon/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-photoncannon"
		},
		"TwilightCouncil/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-twilightcouncil"
		},
		"RoboticsFacility/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-roboticsfacility"
		},
		"TemplarArchive/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-templararchives"
		},
		"RoboticsBay/Probe": {
			icon: "btn-unit-protoss-alarak-taldarim-roboticssupportbay"
		},
		"Blink/Stalker": {
			name: "Phase Blink"
		},
		"AscendantSacrifice/HighTemplarTaldarim": {
			hotkey: "C"
		},
		"Probe/Nexus": {
			icon: "btn-unit-protoss-alarak-taldarim-probe"
		},
		"Zealot": {
			name: "Warp In Supplicant",
			icon: "btn-unit-protoss-alarak-taldarim-supplicant"
		},
		"Sentry": {
			name: "Warp In Havoc",
			icon: "btn-unit-protoss-alarak-taldarim-sentry"
		},
		"Stalker": {
			name: "Warp In Slayer",
			icon: "btn-unit-protoss-alarak-taldarim-stalker"
		},
		"HighTemplar": {
			name: "Warp In Ascendant",
			icon: "btn-unit-protoss-alarak-taldarim-hightemplar"
		},
		"UpgradeToWarpGate/Gateway": {
			icon: "btn-unit-protoss-alarak-taldarim-warpgate"
		},
		"MorphBackToGateway/WarpGate": {
			icon: "btn-unit-protoss-alarak-taldarim-gateway"
		},
		"ProtossGroundWeaponsLevel1/Forge": {
			name: "Upgrade Protoss Weapons"
		},
		"ProtossGroundArmorLevel1/Forge": {
			name: "Upgrade Protoss Armor"
		},
		"ResearchKaraxTurretRange/Forge": {
			name: "Research Imposing Presence",
			icon: "btn-upgrade-protoss-alarak-stunnonheroicenemies"
		},
		"ResearchKaraxTurretAttackSpeed/Forge": {
			name: "Research Telekinesis",
			icon: "btn-upgrade-protoss-alarak-waveknockbackdistanceincreased"
		},
		"ProtossAirWeaponsLevel1/CyberneticsCore": {
			name: "Research Cloaking Module",
			icon: "btn-upgrade-protoss-alarak-permanentcloak"
		},
		"ProtossAirArmorLevel1/CyberneticsCore": {
			name: "Research Bloodshard Resonance",
			icon: "btn-upgrade-protoss-alarak-rangeincrease"
		},
		"ResearchWarpGate/CyberneticsCore": {
			icon: "btn-unit-protoss-alarak-taldarim-warpgate"
		},
		"ResearchCharge/TwilightCouncil": {
			name: "Research Blood Shields",
			icon: "btn-upgrade-protoss-alarak-supplicantarmor"
		},
		"ResearchDragoonRange/TwilightCouncil": {
			name: "Research Phase Blink",
			icon: "btn-ability-protoss-blink-color"
		},
		"ResearchWhirlwind/TwilightCouncil": {
			name: "Research Soul Augmentation",
			icon: "btn-upgrade-protoss-alarak-supplicantextrashields"
		},
		"ResearchDragoonChassis/TwilightCouncil": {
			name: "Research Phasing Armor",
			icon: "btn-upgrade-protoss-alarak-stalkerphasingarmor"
		},
		"ResearchPsiStorm/TemplarArchive": {
			name: "Research Mind Blast",
			icon: "btn-ability-protoss-mindblast"
		},
		"ResearchHighTemplarEnergyUpgrade/TemplarArchive": {
			name: "Research Chaotic Attunement",
			icon: "btn-upgrade-protoss-alarak-ascendant'spsiorbtravelsfurther"
		},
		"ResearchHealingPsionicStorm/TemplarArchive": {
			name: "Research Power Overwhelming",
			icon: "btn-upgrade-protoss-alarak-ascendantspermanentlybetter"
		},
		"Immortal/RoboticsFacility": {
			name: "Warp In Vanguard",
			icon: "btn-unit-protoss-alarak-taldarim-immortal",
			x: 0
		},
		"Colossus/RoboticsFacility": {
			name: "Warp In Wrathwalker",
			icon: "btn-unit-protoss-alarak-taldarim-colossus",
			x: 1
		},
		"WarpinDisruptor/RoboticsFacility": {
			name: "Warp In War Prism",
			icon: "btn-unit-protoss-alarak-taldarim-warpprism",
			hotkey: "V",
			hotkey_SC1: "U",
			x: 3
		},
		"ResearchGraviticBooster/RoboticsBay": {
			name: "Research Fusion Mortars",
			icon: "btn-upgrade-protoss-vanguard-increasedarmordamage"
		},
		"ResearchExtendedThermalLance/RoboticsBay": {
			name: "Research Matter Dispersion",
			icon: "btn-upgrade-protoss-vanguard-aoeradiusincreased",
			x: 1
		},
		"ResearchReaverIncreasedScarabCount/RoboticsBay": {
			name: "Research Aerial Tracking",
			icon: "btn-upgrade-protoss-wrathwalker-cantargetairunits"
		},
		"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay": {
			name: "Research Rapid Power Cycling",
			icon: "btn-upgrade-protoss-wrathwalker-chargetimeimproved"
		},
		"SOAMothershipLineAttack/SOAMothershipv4": {
			hotkey: "E",
			hotkey_NRS: "V",
			hotkey_SC1: "V",
			x: 0
		}
	},
	"Fenix": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"Nexus/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-nexus"
		},
		"Assimilator/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-assimilator"
		},
		"Pylon/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-pylon"
		},
		"Gateway/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-gateway"
		},
		"Forge/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-forge"
		},
		"CyberneticsCore/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-cyberneticscore"
		},
		"PhotonCannon/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-photoncannon"
		},
		"TwilightCouncil/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-twilightcouncil"
		},
		"Stargate/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-stargate"
		},
		"RoboticsFacility/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-roboticsfacility"
		},
		"FleetBeacon/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-fleetbeacon"
		},
		"RoboticsBay/Probe": {
			icon: "btn-unit-protoss-fenix-purifier-roboticssupportbay"
		},
		"Interceptor/Carrier": {
			icon: "btn-unit-collection-purifier-interceptor"
		},
		"MorphtoObserverSiege/Observer": {
			icon: "btn-unit-collection-purifier-observer",
			x: 2
		},
		"MorphtoObserver/Observer": {
			icon: "btn-unit-collection-purifier-observer",
			x: 3
		},
		"Probe/Nexus": {
			icon: "btn-unit-collection-purifier-probe"
		},
		"Zealot": {
			name: "Warp In Legionnaire",
			icon: "btn-unit-collection-purifier-zealot"
		},
		"Sentry": {
			name: "Warp In Conservator",
			icon: "btn-unit-collection-purifier-sentry"
		},
		"Stalker": {
			name: "Warp In Adept",
			icon: "btn-unit-collection-purifier-adept"
		},
		"UpgradeToWarpGate/Gateway": {
			icon: "btn-unit-protoss-fenix-purifier-warpgate"
		},
		"MorphBackToGateway/WarpGate": {
			icon: "btn-unit-protoss-fenix-purifier-gateway"
		},
		"ResearchKaraxTurretRange/Forge": {
			name: "Research Purifier Armaments",
			icon: "btn-upgrade-protoss-fenix-fenixweapondamage"
		},
		"ResearchKaraxTurretAttackSpeed/Forge": {
			name: "Research Observation Protocol",
			icon: "btn-upgrade-protoss-fenix-arbiterchampiondetectionresearch"
		},
		"ResearchStructureBarrier/Forge": {
			name: "A Strong Heart",
			icon: "btn-progression-protoss-fenix-1-zealotsuit"
		},
		"ResearchAlarakTargetLockBuff/CyberneticsCore": {
			name: "Research Optimized Emitters",
			icon: "btn-upgrade-protoss-purifier-sentry-optimizedemittersresearch"
		},
		"ResearchWarpGate/CyberneticsCore": {
			icon: "btn-unit-protoss-fenix-purifier-warpgate"
		},
		"ResearchDragoonRange/TwilightCouncil": {
			name: "Research Psionic Projection",
			icon: "btn-upgrade-protoss-fenix-adeptchampionshadespawn"
		},
		"ResearchWhirlwind/TwilightCouncil": {
			name: "Research Empowered Blades",
			icon: "btn-upgrade-protoss-fenix-zealotcleave"
		},
		"ResearchDragoonChassis/TwilightCouncil": {
			name: "Research Debilitation System",
			icon: "btn-upgrade-protoss-fenix-adept-recochetglaiveupgraded"
		},
		"Immortal/RoboticsFacility": {
			icon: "btn-unit-collection-purifier-immortal",
			x: 0
		},
		"Colossus/RoboticsFacility": {
			icon: "btn-unit-collection-purifier-colossus",
			x: 1
		},
		"Observer/RoboticsFacility": {
			icon: "btn-unit-collection-purifier-observer",
			x: 2
		},
		"WarpinDisruptor/RoboticsFacility": {
			icon: "btn-unit-collection-purifier-disruptor",
			hotkey: "V",
			hotkey_SC1: "U",
			x: 3
		},
		"ResearchExtendedThermalLance/RoboticsBay": {
			x: 1
		},
		"ResearchReaverIncreasedScarabCount/RoboticsBay": {
			name: "Research Cloaking Module",
			icon: "btn-upgrade-protoss-fenix-disruptorpermanentcloak"
		},
		"ResearchReaverIncreasedScarabSplashRadius/RoboticsBay": {
			name: "Research Purification Echo",
			icon: "btn-upgrade-protoss-fenix-disruptorpurificationecho"
		},
		"Phoenix/Stargate": {
			name: "Warp In Scout",
			icon: "btn-unit-protoss-scout-purifier"
		},
		"VoidRay/Stargate": {
			name: "Warp In Carrier",
			icon: "btn-unit-collection-purifier-carrier",
			x: 1
		},
		"AnionPulseCrystals/FleetBeacon": {
			name: "Research Combat Sensor Array",
			icon: "btn-upgrade-protoss-fenix-scoutchampionrange"
		},
		"ResearchDoubleGravitonBeam/FleetBeacon": {
			name: "Research Graviton Catapult",
			icon: "btn-upgrade-protoss-gravitoncatapult"
		},
		"ResearchTempestDisintegration/FleetBeacon": {
			name: "Research Suppression Procedure",
			icon: "btn-upgrade-protoss-fenix-scoutchampionaoemissiles"
		},
		"ResearchOracleStasisWardUpgrade/FleetBeacon": {
			name: "Research Interdictors",
			icon: "btn-upgrade-protoss-fenix-bomberresearch"
		}
	},
	"Zeratul": {
		"GatherProt": {
			icon: "btn-ability-protoss-gather"
		},
		"Nexus/Probe": {
			name: "Warp In Ancient Nexus",
			icon: "btn-building-protoss-zeratulnexus"
		},
		"Gateway/Probe": {
			name: "Warp In Xel’Naga Passageway",
			icon: "btn-building-protoss-zeratulgateway"
		},
		"CyberneticsCore/Probe": {
			name: "Warp In Core Forge",
			icon: "btn-building-protoss-zeratulcyberneticscore"
		},
		"PhotonCannon/Probe": {
			name: "Warp In Tesseract Cannon",
			icon: "btn-building-protoss-zeratulphotoncannon"
		},
		"RoboticsFacility/Probe": {
			name: "Warp In Constructs Facility",
			icon: "btn-building-protoss-zeratulroboticsfacility"
		},
		"RoboticsBay/Probe": {
			name: "Warp In Constructs Bay",
			icon: "btn-building-protoss-zeratulroboticssupportbay"
		},
		"DarkShrine/Probe": {
			name: "Warp In Void Shrine",
			icon: "btn-building-protoss-zeratuldarkshrine"
		},
		"MorphtoObserver/Observer": {
			icon: "btn-building-protoss-zeratulobserver"
		},
		"MorphtoObserverSiege/Observer": {
			icon: "btn-building-protoss-zeratulobserver-surveillance"
		},
		"Probe/Nexus": {
			name: "Warp In Xel’Naga Precursor",
			icon: "btn-unit-protoss-zeratulprobe"
		}
	}
};