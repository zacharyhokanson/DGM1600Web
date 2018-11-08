export const monsters = [
  {
	"index": 1,
	"name": "Aboleth",
	"size": "Large",
	"type": "aberration",
	"subtype": "",
	"alignment": "lawful evil",
	"armor_class": 17,
	"hit_points": 135,
	"hit_dice": "18d10",
	"speed": "10 ft., swim 40 ft.",
	"strength": 21,
	"dexterity": 9,
	"constitution": 15,
	"intelligence": 18,
	"wisdom": 15,
	"constitution_save": 6,
	"intelligence_save": 8,
	"wisdom_save": 6,
	"history": 12,
	"perception": 10,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "",
	"condition_immunities": "",
	"senses": "darkvision 120 ft., passive Perception 20",
	"languages": "Deep Speech, telepathy 120 ft.",
	"challenge_rating": 10,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The aboleth can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Mucous Cloud",
		"desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
		"attack_bonus": 0
	}, {
		"name": "Probing Telepathy",
		"desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The aboleth makes three tentacle attacks.",
		"attack_bonus": 0
	}, {
		"name": "Tentacle",
		"desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
		"attack_bonus": 9,
		"damage_dice": "2d6",
		"damage_bonus": 5
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
		"attack_bonus": 9,
		"damage_dice": "3d6",
		"damage_bonus": 5
	}, {
		"name": "Enslave (3/day)",
		"desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The aboleth makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Swipe",
		"desc": "The aboleth makes one tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Psychic Drain (Costs 2 Actions)",
		"desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/1"
}, {
	"index": 2,
	"name": "Acolyte",
	"size": "Medium",
	"type": "humanoid",
	"subtype": "any race",
	"alignment": "any alignment",
	"armor_class": 10,
	"hit_points": 9,
	"hit_dice": "2d8",
	"speed": "30 ft.",
	"strength": 10,
	"dexterity": 10,
	"constitution": 10,
	"intelligence": 10,
	"wisdom": 14,
	"charisma": 11,
	"medicine": 4,
	"religion": 2,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "",
	"condition_immunities": "",
	"senses": "passive Perception 12",
	"languages": "any one language (usually Common)",
	"challenge_rating": 0.25,
	"special_abilities": [{
		"name": "Spellcasting",
		"desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\n• Cantrips (at will): light, sacred flame, thaumaturgy\n• 1st level (3 slots): bless, cure wounds, sanctuary",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Club",
		"desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
		"attack_bonus": 2,
		"damage_dice": "1d4"
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/2"
}, {
	"index": 3,
	"name": "Adult Black Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic evil",
	"armor_class": 19,
	"hit_points": 195,
	"hit_dice": "17d12",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 23,
	"dexterity": 14,
	"constitution": 21,
	"intelligence": 14,
	"wisdom": 13,
	"charisma": 17,
	"dexterity_save": 7,
	"constitution_save": 10,
	"wisdom_save": 6,
	"charisma_save": 8,
	"perception": 11,
	"stealth": 7,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "acid",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
	"languages": "Common, Draconic",
	"challenge_rating": 14,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
		"attack_bonus": 11,
		"damage_dice": "2d10 + 1d8",
		"damage_bonus": 6
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
		"attack_bonus": 11,
		"damage_dice": "2d6",
		"damage_bonus": 6
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
		"attack_bonus": 11,
		"damage_dice": "2d8",
		"damage_bonus": 6
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Acid Breath (Recharge 5-6)",
		"desc": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "12d8"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/3"
}, {
	"index": 4,
	"name": "Adult Blue Dracolich",
	"size": "Huge",
	"type": "undead",
	"subtype": "",
	"alignment": "lawful evil",
	"armor_class": 19,
	"hit_points": 225,
	"hit_dice": "18d12",
	"speed": "40 ft., burrow 30 ft., fly 80 ft.",
	"strength": 25,
	"dexterity": 10,
	"constitution": 23,
	"intelligence": 16,
	"wisdom": 15,
	"charisma": 19,
	"perception": 12,
	"damage_vulnerabilities": "",
	"damage_resistances": "necrotic",
	"damage_immunities": "lightning, poison",
	"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
	"languages": "Common, Draconic",
	"challenge_rating": 17,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dracolich fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}, {
		"name": "Magic Resistance",
		"desc": "The dracolich has advantage on saving throws against spells and other magical effects.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
		"attack_bonus": 12,
		"damage_dice": "2d10 + 1d10",
		"damage_bonus": 7
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
		"attack_bonus": 12,
		"damage_dice": "2d6",
		"damage_bonus": 7
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
		"attack_bonus": 12,
		"damage_dice": "2d8",
		"damage_bonus": 7
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Lightning Breath (Recharge 5-6)",
		"desc": "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "12d10"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dracolich makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dracolich makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dracolich beats its tattered wings. Each creature within 10 ft. of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/4"
}, {
	"index": 5,
	"name": "Adult Blue Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful evil",
	"armor_class": 19,
	"hit_points": 225,
	"hit_dice": "18d12",
	"speed": "40 ft., burrow 30 ft., fly 80 ft.",
	"strength": 25,
	"dexterity": 10,
	"constitution": 23,
	"intelligence": 16,
	"wisdom": 15,
	"charisma": 19,
	"dexterity_save": 5,
	"constitution_save": 11,
	"wisdom_save": 7,
	"charisma_save": 9,
	"perception": 12,
	"stealth": 5,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "lightning",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
	"languages": "Common, Draconic",
	"challenge_rating": 16,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
		"attack_bonus": 12,
		"damage_dice": "2d10 + 1d10",
		"damage_bonus": 7
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
		"attack_bonus": 12,
		"damage_dice": "2d6",
		"damage_bonus": 7
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
		"attack_bonus": 12,
		"damage_dice": "2d8",
		"damage_bonus": 7
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Lightning Breath (Recharge 5-6)",
		"desc": "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "12d10"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/5"
}, {
	"index": 6,
	"name": "Adult Brass Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic good",
	"armor_class": 18,
	"hit_points": 172,
	"hit_dice": "15d12",
	"speed": "40 ft., burrow 40 ft., fly 80 ft.",
	"strength": 23,
	"dexterity": 10,
	"constitution": 21,
	"intelligence": 14,
	"wisdom": 13,
	"charisma": 17,
	"dexterity_save": 5,
	"constitution_save": 10,
	"wisdom_save": 6,
	"charisma_save": 8,
	"history": 7,
	"perception": 11,
	"persuasion": 8,
	"stealth": 5,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "fire",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
	"languages": "Common, Draconic",
	"challenge_rating": 13,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +11 to hit, reach,.0 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
		"attack_bonus": 11,
		"damage_dice": "2d10",
		"damage_bonus": 6
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
		"attack_bonus": 11,
		"damage_dice": "2d6",
		"damage_bonus": 6
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
		"attack_bonus": 11,
		"damage_dice": "2d8",
		"damage_bonus": 6
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
		"attack_bonus": 0,
		"damage_dice": "13d6"
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/6"
}, {
	"index": 7,
	"name": "Adult Bronze Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful good",
	"armor_class": 19,
	"hit_points": 212,
	"hit_dice": "17d12",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 25,
	"dexterity": 10,
	"constitution": 23,
	"intelligence": 16,
	"wisdom": 15,
	"charisma": 19,
	"dexterity_save": 5,
	"constitution_save": 11,
	"wisdom_save": 7,
	"charisma_save": 9,
	"insight": 7,
	"perception": 12,
	"stealth": 5,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "lightning",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
	"languages": "Common, Draconic",
	"challenge_rating": 15,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage.",
		"attack_bonus": 12,
		"damage_dice": "2d10",
		"damage_bonus": 7
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
		"attack_bonus": 12,
		"damage_dice": "2d6",
		"damage_bonus": 7
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
		"attack_bonus": 12,
		"damage_dice": "2d8",
		"damage_bonus": 7
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
		"attack_bonus": 0,
		"damage_dice": "12d10"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/7"
}, {
	"index": 8,
	"name": "Adult Copper Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic good",
	"armor_class": 18,
	"hit_points": 184,
	"hit_dice": "16d12",
	"speed": "40 ft., climb 40 ft., fly 80 ft.",
	"strength": 23,
	"dexterity": 12,
	"constitution": 21,
	"intelligence": 18,
	"wisdom": 15,
	"charisma": 17,
	"dexterity_save": 6,
	"constitution_save": 10,
	"wisdom_save": 7,
	"charisma_save": 8,
	"deception": 8,
	"perception": 12,
	"stealth": 6,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "acid",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
	"languages": "Common, Draconic",
	"challenge_rating": 14,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
		"attack_bonus": 11,
		"damage_dice": "2d10",
		"damage_bonus": 6
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
		"attack_bonus": 11,
		"damage_dice": "2d6",
		"damage_bonus": 6
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
		"attack_bonus": 11,
		"damage_dice": "2d8",
		"damage_bonus": 6
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
		"attack_bonus": 0,
		"damage_dice": "12d8"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/8"
}, {
	"index": 9,
	"name": "Adult Gold Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful good",
	"armor_class": 19,
	"hit_points": 256,
	"hit_dice": "19d12",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 27,
	"dexterity": 14,
	"constitution": 25,
	"intelligence": 16,
	"wisdom": 15,
	"charisma": 24,
	"dexterity_save": 8,
	"constitution_save": 13,
	"wisdom_save": 8,
	"charisma_save": 13,
	"insight": 8,
	"perception": 14,
	"persuasion": 13,
	"stealth": 8,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "fire",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24",
	"languages": "Common, Draconic",
	"challenge_rating": 17,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
		"attack_bonus": 14,
		"damage_dice": "2d10",
		"damage_bonus": 8
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
		"attack_bonus": 14,
		"damage_dice": "2d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 14,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		"attack_bonus": 0,
		"damage_dice": "12d10"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/9"
}, {
	"index": 10,
	"name": "Adult Green Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful evil",
	"armor_class": 19,
	"hit_points": 207,
	"hit_dice": "18d12",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 23,
	"dexterity": 12,
	"constitution": 21,
	"intelligence": 18,
	"wisdom": 15,
	"charisma": 17,
	"dexterity_save": 6,
	"constitution_save": 10,
	"wisdom_save": 7,
	"charisma_save": 8,
	"deception": 8,
	"insight": 7,
	"perception": 12,
	"persuasion": 8,
	"stealth": 6,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "poison",
	"condition_immunities": "poisoned",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
	"languages": "Common, Draconic",
	"challenge_rating": 15,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage.",
		"attack_bonus": 11,
		"damage_dice": "2d10 + 2d6",
		"damage_bonus": 6
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
		"attack_bonus": 11,
		"damage_dice": "2d6",
		"damage_bonus": 6
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
		"attack_bonus": 11,
		"damage_dice": "2d8",
		"damage_bonus": 6
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
		"attack_bonus": 0
	}, {
		"name": "Poison Breath (Recharge 5-6)",
		"desc": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "16d6"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/10"
}, {
	"index": 11,
	"name": "Adult Red Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic evil",
	"armor_class": 19,
	"hit_points": 256,
	"hit_dice": "19d12",
	"speed": "40 ft., climb 40 ft., fly 80 ft.",
	"strength": 27,
	"dexterity": 10,
	"constitution": 25,
	"intelligence": 16,
	"wisdom": 13,
	"charisma": 21,
	"dexterity_save": 6,
	"constitution_save": 13,
	"wisdom_save": 7,
	"charisma_save": 11,
	"perception": 13,
	"stealth": 6,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "fire",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23",
	"languages": "Common, Draconic",
	"challenge_rating": 17,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.",
		"attack_bonus": 14,
		"damage_dice": "2d10 + 2d6",
		"damage_bonus": 8
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
		"attack_bonus": 14,
		"damage_dice": "2d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 14,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Fire Breath (Recharge 5-6)",
		"desc": "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "18d6"
	}, {
		"name": "Lair Actions",
		"desc": "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: the dragon can't use the same effect two rounds in a row:\n• Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.\n• A tremor shakes the lair in a 60-foot-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.\n• Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.",
		"attack_bonus": 0,
		"damage_dice": "6d6"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/11"
}, {
	"index": 12,
	"name": "Adult Silver Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful good",
	"armor_class": 19,
	"hit_points": 243,
	"hit_dice": "18d12",
	"speed": "40 ft., fly 80 ft.",
	"strength": 27,
	"dexterity": 10,
	"constitution": 25,
	"intelligence": 16,
	"wisdom": 13,
	"charisma": 21,
	"dexterity_save": 5,
	"constitution_save": 12,
	"wisdom_save": 6,
	"charisma_save": 10,
	"arcana": 8,
	"history": 8,
	"perception": 11,
	"stealth": 5,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "cold",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
	"languages": "Common, Draconic",
	"challenge_rating": 16,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
		"attack_bonus": 13,
		"damage_dice": "2d10",
		"damage_bonus": 8
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
		"attack_bonus": 13,
		"damage_dice": "2d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 13,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		"attack_bonus": 0,
		"damage_dice": "13d8"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/12"
}, {
	"index": 13,
	"name": "Adult White Dragon",
	"size": "Huge",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic evil",
	"armor_class": 18,
	"hit_points": 200,
	"hit_dice": "16d12",
	"speed": "40 ft., burrow 30 ft., fly 80 ft., swim 40 ft.",
	"strength": 22,
	"dexterity": 10,
	"constitution": 22,
	"intelligence": 8,
	"wisdom": 12,
	"charisma": 12,
	"dexterity_save": 5,
	"constitution_save": 11,
	"wisdom_save": 6,
	"charisma_save": 6,
	"perception": 11,
	"stealth": 5,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "cold",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
	"languages": "Common, Draconic",
	"challenge_rating": 13,
	"special_abilities": [{
		"name": "Ice Walk",
		"desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.",
		"attack_bonus": 11,
		"damage_dice": "2d10 + 1d8",
		"damage_bonus": 6
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
		"attack_bonus": 11,
		"damage_dice": "2d6",
		"damage_bonus": 6
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
		"attack_bonus": 11,
		"damage_dice": "2d8",
		"damage_bonus": 6
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Cold Breath (Recharge 5-6)",
		"desc": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "12d8"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/13"
}, {
	"index": 14,
	"name": "Air Elemental",
	"size": "Large",
	"type": "elemental",
	"subtype": "",
	"alignment": "neutral",
	"armor_class": 15,
	"hit_points": 90,
	"hit_dice": "12d10",
	"speed": "fly 90 ft. (hover)",
	"strength": 14,
	"dexterity": 20,
	"constitution": 14,
	"intelligence": 6,
	"wisdom": 10,
	"charisma": 6,
	"damage_vulnerabilities": "",
	"damage_resistances": "lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	"damage_immunities": "poison",
	"condition_immunities": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	"senses": "darkvision 60 ft., passive Perception 10",
	"languages": "Auran",
	"challenge_rating": 5,
	"special_abilities": [{
		"name": "Air Form",
		"desc": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The elemental makes two slam attacks.",
		"attack_bonus": 0
	}, {
		"name": "Slam",
		"desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
		"attack_bonus": 8,
		"damage_dice": "2d8",
		"damage_bonus": 5
	}, {
		"name": "Whirlwind (Recharge 4-6)",
		"desc": "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/14"
}, {
	"index": 15,
	"name": "Ancient Black Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic evil",
	"armor_class": 22,
	"hit_points": 367,
	"hit_dice": "21d20",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 27,
	"dexterity": 14,
	"constitution": 25,
	"intelligence": 16,
	"wisdom": 15,
	"charisma": 19,
	"dexterity_save": 9,
	"constitution_save": 14,
	"wisdom_save": 9,
	"charisma_save": 11,
	"perception": 16,
	"stealth": 9,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "acid",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
	"languages": "Common, Draconic",
	"challenge_rating": 21,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.",
		"attack_bonus": 15,
		"damage_dice": "2d10 + 2d8",
		"damage_bonus": 8
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
		"attack_bonus": 15,
		"damage_dice": "2d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 15,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Acid Breath (Recharge 5-6)",
		"desc": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/15"
}, {
	"index": 16,
	"name": "Ancient Blue Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful evil",
	"armor_class": 22,
	"hit_points": 481,
	"hit_dice": "26d20",
	"speed": "40 ft., burrow 40 ft., fly 80 ft.",
	"strength": 29,
	"dexterity": 10,
	"constitution": 27,
	"intelligence": 18,
	"wisdom": 17,
	"charisma": 21,
	"dexterity_save": 7,
	"constitution_save": 15,
	"wisdom_save": 10,
	"charisma_save": 12,
	"perception": 17,
	"stealth": 7,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "lightning",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
	"languages": "Common, Draconic",
	"challenge_rating": 23,
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
		"attack_bonus": 16,
		"damage_dice": "2d10 + 2d10",
		"damage_bonus": 9
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
		"attack_bonus": 16,
		"damage_dice": "2d6",
		"damage_bonus": 9
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
		"attack_bonus": 16,
		"damage_dice": "2d8",
		"damage_bonus": 9
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Lightning Breath (Recharge 5-6)",
		"desc": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "16d10"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/16"
}, {
	"index": 17,
	"name": "Ancient Brass Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic good",
	"armor_class": 20,
	"hit_points": 297,
	"hit_dice": "17d20",
	"speed": "40 ft., burrow 40 ft., fly 80 ft.",
	"strength": 27,
	"dexterity": 10,
	"constitution": 25,
	"intelligence": 16,
	"wisdom": 15,
	"charisma": 19,
	"dexterity_save": 6,
	"constitution_save": 13,
	"wisdom_save": 8,
	"charisma_save": 10,
	"history": 9,
	"perception": 14,
	"persuasion": 10,
	"stealth": 6,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "fire",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24",
	"languages": "Common, Draconic",
	"challenge_rating": 20,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
		"attack_bonus": 14,
		"damage_dice": "2d10",
		"damage_bonus": 8
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
		"attack_bonus": 14,
		"damage_dice": "2d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 14,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
		"attack_bonus": 0,
		"damage_dice": "16d6"
	}, {
		"name": "Change Shape",
		"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/17"
}, {
	"index": 18,
	"name": "Ancient Bronze Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful good",
	"armor_class": 22,
	"hit_points": 444,
	"hit_dice": "24d20",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 29,
	"dexterity": 10,
	"constitution": 27,
	"intelligence": 18,
	"wisdom": 17,
	"charisma": 21,
	"dexterity_save": 7,
	"constitution_save": 15,
	"wisdom_save": 10,
	"charisma_save": 12,
	"insight": 10,
	"perception": 17,
	"stealth": 7,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "lightning",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
	"languages": "Common, Draconic",
	"challenge_rating": 22,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage.",
		"attack_bonus": 16,
		"damage_dice": "2d10",
		"damage_bonus": 9
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
		"attack_bonus": 16,
		"damage_dice": "1d6",
		"damage_bonus": 9
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
		"attack_bonus": 0,
		"damage_dice": "2d8",
		"damage_bonus": 9
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
		"attack_bonus": 0,
		"damage_dice": "16d10"
	}, {
		"name": "Change Shape",
		"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/18"
}, {
	"index": 19,
	"name": "Ancient Copper Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic good",
	"armor_class": 21,
	"hit_points": 350,
	"hit_dice": "20d20",
	"speed": "40 ft., climb 40 ft., fly 80 ft.",
	"strength": 27,
	"dexterity": 12,
	"constitution": 25,
	"intelligence": 20,
	"wisdom": 17,
	"charisma": 19,
	"dexterity_save": 8,
	"constitution_save": 14,
	"wisdom_save": 10,
	"charisma_save": 11,
	"deception": 11,
	"perception": 17,
	"stealth": 8,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "acid",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
	"languages": "Common, Draconic",
	"challenge_rating": 21,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
		"attack_bonus": 15,
		"damage_dice": "2d10",
		"damage_bonus": 8
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
		"attack_bonus": 15,
		"damage_dice": "2d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 15,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
		"attack_bonus": 0,
		"damage_dice": "14d8"
	}, {
		"name": "Change Shape",
		"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/19"
}, {
	"index": 20,
	"name": "Ancient Gold Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful good",
	"armor_class": 22,
	"hit_points": 546,
	"hit_dice": "28d20",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 30,
	"dexterity": 14,
	"constitution": 29,
	"intelligence": 18,
	"wisdom": 17,
	"charisma": 28,
	"dexterity_save": 9,
	"constitution_save": 16,
	"wisdom_save": 10,
	"charisma_save": 16,
	"insight": 10,
	"perception": 17,
	"persuasion": 16,
	"stealth": 9,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "fire",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
	"languages": "Common, Draconic",
	"challenge_rating": 24,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
		"attack_bonus": 17,
		"damage_dice": "2d10",
		"damage_bonus": 10
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
		"attack_bonus": 17,
		"damage_dice": "2d6",
		"damage_bonus": 10
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
		"attack_bonus": 17,
		"damage_dice": "2d8",
		"damage_bonus": 10
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		"attack_bonus": 0,
		"damage_dice": "13d10"
	}, {
		"name": "Change Shape",
		"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/20"
}, {
	"index": 21,
	"name": "Ancient Green Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful evil",
	"armor_class": 21,
	"hit_points": 385,
	"hit_dice": "22d20",
	"speed": "40 ft., fly 80 ft., swim 40 ft.",
	"strength": 27,
	"dexterity": 12,
	"constitution": 25,
	"intelligence": 20,
	"wisdom": 17,
	"charisma": 19,
	"dexterity_save": 8,
	"constitution_save": 14,
	"wisdom_save": 10,
	"charisma_save": 11,
	"deception": 11,
	"insight": 10,
	"perception": 17,
	"persuasion": 11,
	"stealth": 8,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "poison",
	"condition_immunities": "poisoned",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
	"languages": "Common, Draconic",
	"challenge_rating": 22,
	"special_abilities": [{
		"name": "Amphibious",
		"desc": "The dragon can breathe air and water.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.",
		"attack_bonus": 15,
		"damage_dice": "2d10 + 3d6",
		"damage_bonus": 9
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage.",
		"attack_bonus": 15,
		"damage_dice": "4d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 16,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Poison Breath (Recharge 5-6)",
		"desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "22d6"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/21"
}, {
	"index": 22,
	"name": "Ancient Red Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic evil",
	"armor_class": 22,
	"hit_points": 546,
	"hit_dice": "28d20",
	"speed": "40 ft., climb 40 ft., fly 80 ft.",
	"strength": 30,
	"dexterity": 10,
	"constitution": 29,
	"intelligence": 18,
	"wisdom": 15,
	"charisma": 23,
	"dexterity_save": 7,
	"constitution_save": 16,
	"wisdom_save": 9,
	"charisma_save": 13,
	"perception": 16,
	"stealth": 7,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "fire",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
	"languages": "Common, Draconic",
	"challenge_rating": 24,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
		"attack_bonus": 17,
		"damage_dice": "2d10 + 4d6",
		"damage_bonus": 10
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
		"attack_bonus": 17,
		"damage_dice": "2d6",
		"damage_bonus": 10
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
		"attack_bonus": 17,
		"damage_dice": "2d8",
		"damage_bonus": 10
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Fire Breath (Recharge 5-6)",
		"desc": "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "26d6"
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/22"
}, {
	"index": 23,
	"name": "Ancient Silver Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "lawful good",
	"armor_class": 22,
	"hit_points": 487,
	"hit_dice": "25d20",
	"speed": "40 ft., fly 80 ft.",
	"strength": 30,
	"dexterity": 10,
	"constitution": 29,
	"intelligence": 18,
	"wisdom": 15,
	"charisma": 23,
	"dexterity_save": 7,
	"constitution_save": 16,
	"wisdom_save": 9,
	"charisma_save": 13,
	"arcana": 11,
	"history": 11,
	"perception": 16,
	"stealth": 7,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "cold",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
	"languages": "Common, Draconic",
	"challenge_rating": 23,
	"special_abilities": [{
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
		"attack_bonus": 17,
		"damage_dice": "2d10",
		"damage_bonus": 10
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
		"attack_bonus": 17,
		"damage_dice": "2d6",
		"damage_bonus": 10
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
		"attack_bonus": 17,
		"damage_dice": "2d8",
		"damage_bonus": 10
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
		"attack_bonus": 0
	}, {
		"name": "Breath Weapons (Recharge 5-6)",
		"desc": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		"attack_bonus": 0,
		"damage_dice": "15d8"
	}, {
		"name": "Change Shape",
		"desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Detect",
		"desc": "The dragon makes a Wisdom (Perception) check.",
		"attack_bonus": 0
	}, {
		"name": "Tail Attack",
		"desc": "The dragon makes a tail attack.",
		"attack_bonus": 0
	}, {
		"name": "Wing Attack (Costs 2 Actions)",
		"desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/23"
}, {
	"index": 24,
	"name": "Ancient White Dragon",
	"size": "Gargantuan",
	"type": "dragon",
	"subtype": "",
	"alignment": "chaotic evil",
	"armor_class": 20,
	"hit_points": 333,
	"hit_dice": "18d20",
	"speed": "40 ft., burrow 40 ft., fly 80 ft., swim 40 ft.",
	"strength": 26,
	"dexterity": 10,
	"constitution": 26,
	"intelligence": 10,
	"wisdom": 13,
	"charisma": 14,
	"dexterity_save": 6,
	"constitution_save": 14,
	"wisdom_save": 7,
	"charisma_save": 8,
	"perception": 13,
	"stealth": 6,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "cold",
	"condition_immunities": "",
	"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23",
	"languages": "Common, Draconic",
	"challenge_rating": 20,
	"special_abilities": [{
		"name": "Ice Walk",
		"desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
		"attack_bonus": 0
	}, {
		"name": "Legendary Resistance (3/Day)",
		"desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
		"attack_bonus": 0
	}, {
		"name": "Bite",
		"desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage.",
		"attack_bonus": 14,
		"damage_dice": "2d10 + 2d8",
		"damage_bonus": 8
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
		"attack_bonus": 14,
		"damage_dice": "2d6",
		"damage_bonus": 8
	}, {
		"name": "Tail",
		"desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
		"attack_bonus": 14,
		"damage_dice": "2d8",
		"damage_bonus": 8
	}, {
		"name": "Frightful Presence",
		"desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
		"attack_bonus": 0
	}, {
		"name": "Cold Breath (Recharge 5-6)",
		"desc": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one.",
		"attack_bonus": 0,
		"damage_dice": "16d8"
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/24"
}, {
	"index": 25,
	"name": "Androsphinx",
	"size": "Large",
	"type": "monstrosity",
	"subtype": "",
	"alignment": "lawful neutral",
	"armor_class": 17,
	"hit_points": 199,
	"hit_dice": "19d10",
	"speed": "40 ft., fly 60 ft.",
	"strength": 22,
	"dexterity": 10,
	"constitution": 20,
	"intelligence": 16,
	"wisdom": 18,
	"charisma": 23,
	"dexterity_save": 6,
	"constitution_save": 11,
	"intelligence_save": 9,
	"wisdom_save": 10,
	"arcana": 9,
	"perception": 10,
	"religion": 15,
	"damage_vulnerabilities": "",
	"damage_resistances": "",
	"damage_immunities": "psychic; bludgeoning, piercing, and slashing from nonmagical weapons",
	"condition_immunities": "charmed, frightened",
	"senses": "truesight 120 ft., passive Perception 20",
	"languages": "Common, Sphinx",
	"challenge_rating": 17,
	"special_abilities": [{
		"name": "Inscrutable",
		"desc": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
		"attack_bonus": 0
	}, {
		"name": "Magic Weapons",
		"desc": "The sphinx's weapon attacks are magical.",
		"attack_bonus": 0
	}, {
		"name": "Spellcasting",
		"desc": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:\n\n• Cantrips (at will): sacred flame, spare the dying, thaumaturgy\n• 1st level (4 slots): command, detect evil and good, detect magic\n• 2nd level (3 slots): lesser restoration, zone of truth\n• 3rd level (3 slots): dispel magic, tongues\n• 4th level (3 slots): banishment, freedom of movement\n• 5th level (2 slots): flame strike, greater restoration\n• 6th level (1 slot): heroes' feast",
		"attack_bonus": 0
	}],
	"actions": [{
		"name": "Multiattack",
		"desc": "The sphinx makes two claw attacks.",
		"attack_bonus": 0
	}, {
		"name": "Claw",
		"desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.",
		"attack_bonus": 12,
		"damage_dice": "2d10",
		"damage_bonus": 6
	}, {
		"name": "Roar (3/Day)",
		"desc": "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.\n\nFirst Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nSecond Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nThird Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.",
		"attack_bonus": 0
	}],
	"legendary_actions": [{
		"name": "Claw Attack",
		"desc": "The sphinx makes one claw attack.",
		"attack_bonus": 0
	}, {
		"name": "Teleport (Costs 2 Actions)",
		"desc": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
		"attack_bonus": 0
	}, {
		"name": "Cast a Spell (Costs 3 Actions)",
		"desc": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
		"attack_bonus": 0
	}],
	"url": "http://www.dnd5eapi.co/api/monsters/25"
}
]