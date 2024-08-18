/**
 * Sourced from the Saga Fandom Wiki
 * https://saga.fandom.com/wiki/List_of_SaGa_Scarlet_Grace_techs
 */

export interface Tech {
	id: string;
	name: string;
	description: string;
	cost: number;
	target: string;
	attributes: string[];
	ranged: boolean;
	conditionals: string[];
	effect: string;
	skill: string[];
}

export const greatsword: Tech[] = [
	{
		id: 'smash',
		name: 'Smash',
		description: 'Smash a target from above, provoking it.',
		cost: 2,
		target: 'Single',
		attributes: ['Slash', 'Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'deflect',
		name: 'Deflect',
		description: 'Protect an ally against attacks. Greatly increases block chance.',
		cost: 2,
		target: 'Single',
		attributes: [],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Guardscale',
		skill: ['dex', 'mob']
	},
	{
		id: 'blizzard',
		name: 'Blizzard',
		description:
			'Conjure a stifling blizzard, creating blades of ice to slash and freeze a target.',
		cost: 2,
		target: 'Single',
		attributes: ['Slash', 'Ice'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'dex']
	},
	{
		id: 'flowing-slash',
		name: 'Flowing Slash',
		description: 'Gracefully slash a target, decreasing its attack power.',
		cost: 3,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'Attack',
		skill: ['str', 'dex']
	},
	{
		id: 'downswing',
		name: 'Downswing',
		description: 'Raise your greatsword high in the air and bring it to bear on your target.',
		cost: 4,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'optical-slash',
		name: 'Optical Slash',
		description:
			'Has a chance to nullify the first attack that targets you and unleash a counterattack.',
		cost: 4,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'None',
		skill: ['dex']
	},
	{
		id: 'lunar-blade',
		name: 'Lunar Blade',
		description: 'Lunge nimbly at your foe with the moon at your back.',
		cost: 4,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'dex']
	},
	{
		id: 'gravedigger',
		name: 'Gravedigger',
		description: 'Ranged attack. Emit a ground-based wave to assault a target.',
		cost: 5,
		target: 'Single',
		attributes: ['Slash'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'headwind-rush',
		name: 'Headwind Rush',
		description: 'Barrel toward a foe, delaying it.',
		cost: 5,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Delay'],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'vandalize',
		name: 'Vandalize',
		description: 'Sunder a target in twain.',
		cost: 6,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'shadow-reversal',
		name: 'Shadow Reversal',
		description: 'Interrupt a slashing attack, occasionally stunning the target.',
		cost: 6,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Stun',
		skill: ['dex']
	},
	{
		id: 'eclipse',
		name: 'Eclipse',
		description: 'Unleash a powerful blow. Increases your block chance until you act.',
		cost: 6,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Attackingguard'],
		effect: 'None',
		skill: ['str', 'dex']
	},
	{
		id: 'wheel-swing',
		name: 'Wheel Swing',
		description: 'Area attack. Swing your blade in an arc to create winds that buffet foes.',
		cost: 7,
		target: 'All',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'scattered-petals',
		name: 'Scattered Petals',
		description:
			'Attack with the elegance of a skilled duelist. Increases your block chance until you act.',
		cost: 7,
		target: 'Single',
		attributes: ['Slash', 'Ice'],
		ranged: false,
		conditionals: ['Attackingguard'],
		effect: 'None',
		skill: ['str', 'dex']
	},
	{
		id: 'waning-moon',
		name: 'Waning Moon',
		description: 'Strike your target and provoke them. Somewhat easy to block or evade.',
		cost: 8,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Guardchange'],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'hailstorm',
		name: 'Hailstorm',
		description:
			'Weapon-specific tech. Area attack. Conjure forth a snowstorm to engulf your foes.',
		cost: 8,
		target: 'All',
		attributes: ['Ice'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['int', 'acu']
	}
];

export const sword: Tech[] = [
	{
		id: 'sonic-slash',
		name: 'Sonic Slash',
		description: 'Swiftly lash out against a target.',
		cost: 1,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'rampart',
		name: 'Rampart',
		description: 'Protect an ally against attacks. Increases block chance.',
		cost: 1,
		target: 'Single',
		attributes: [],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Guardscale',
		skill: ['dex', 'mob']
	},
	{
		id: 'brusque-slice',
		name: 'Brusque Slice',
		description: 'Slice an enemy in perhaps the rudest way possible. Has a minor delay effect.',
		cost: 2,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Bump'],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'sonic-blade',
		name: 'Sonic Blade',
		description: 'Ranged attack. Send forth a vacuum of energy toward a target.',
		cost: 3,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'demilune',
		name: 'Demilune',
		description: 'Swing your blade in a half-moon pattern with a blinding flash of light.',
		cost: 3,
		target: 'Single',
		attributes: ['Slash', 'Lightning'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['dex']
	},
	{
		id: 'rising-nova',
		name: 'Rising Nova',
		description: 'Scorch your foes with a merciless blast as you lift them from the ground.',
		cost: 4,
		target: 'Single',
		attributes: ['Blunt', 'Fire'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'heaven-and-earth',
		name: 'Heaven and Earth',
		description:
			'Cleave a target from above, then slice again upon reaching the earth. Occasionally stuns the target.',
		cost: 5,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Stun',
		skill: ['str']
	},
	{
		id: 'apathy',
		name: 'Apathy',
		description:
			'Has a chance to nullify the first attack that targets you and unleash a counterattack.',
		cost: 5,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'None',
		skill: ['dex', 'mob']
	},
	{
		id: 'triple-thrust',
		name: 'Triple Thrust',
		description: 'Swiftly pierce a target thrice.',
		cost: 6,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'thousand-blades',
		name: 'Thousand Blades',
		description:
			'Interrupt a piercing attack with an area-wide slice that occasionally stuns foes.',
		cost: 6,
		target: 'All',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Stun',
		skill: ['str']
	},
	{
		id: 'halting-blade',
		name: 'Halting Blade',
		description:
			'Deal a mighty blow that increases in power the more damage the attacker has suffered that round.',
		cost: 7,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Damagedbonus'],
		effect: 'None',
		skill: ['str', 'acu']
	},
	{
		id: 'multi-way',
		name: 'Multi-Way',
		description:
			'Ravage foes from all directions. Occasionally deals an inordinate amount of damage.',
		cost: 8,
		target: 'Single',
		attributes: ['Slash', 'Pierce'],
		ranged: false,
		conditionals: ['Gambleattack'],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'rosario-impale',
		name: 'Rosario Impale',
		description:
			'Area attack. Carve a holy symbol into the ground. Effective against demons and undead.',
		cost: 8,
		target: 'All',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Effective Against Undead',
		skill: ['str']
	},
	{
		id: 'divide',
		name: 'Divide',
		description:
			"Weapon-specific tech. Strike an enemy's weak spot, occasionally causing sudden death.",
		cost: 7,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Death',
		skill: ['int']
	}
];

export const twinSwords: Tech[] = [
	{
		id: 'dual-cross-cut',
		name: 'Dual Cross Cut',
		description:
			'Dual-wield attack. Slash with both weapons in a cross-like pattern. Effective against demons and undead.',
		cost: 4,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'Effective Against Undead',
		skill: ['str', 'dex']
	},
	{
		id: 'dual-whirlwind',
		name: 'Dual Whirlwind',
		description: 'Dual-wield attack. Perform a dizzying array of slashes against random targets.',
		cost: 5,
		target: 'All (R)',
		attributes: ['Slash'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'dex']
	},
	{
		id: 'dual-torrent',
		name: 'Dual Torrent',
		description: 'Dual-wield attack. Interrupt a slashing attack with punishing force.',
		cost: 9,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		effect: 'None',
		conditionals: ['Interrupt', 'Slash'],
		skill: ['str', 'dex']
	}
];

export const shortSword: Tech[] = [
	{
		id: 'quick-thrust',
		name: 'Quick Thrust',
		description: 'A swift forward thrust.',
		cost: 1,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['dex', 'mob']
	},
	{
		id: 'mesmerize',
		name: 'Mesmerize',
		description: 'Twirl your sword to sometimes put a target to sleep. Deals no damage.',
		cost: 2,
		target: 'Single',
		attributes: [],
		ranged: false,
		conditionals: [],
		effect: 'Sleep',
		skill: ['dex']
	},
	{
		id: 'lightspeed',
		name: 'Lightspeed',
		description: 'Interrupt a piercing attack, dealing damage and increasing your speed.',
		cost: 2,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Stab',
		skill: ['dex', 'mob']
	},
	{
		id: 'matador',
		name: 'Matador',
		description: 'Interrupt a blunt attack, dealing damage and greatly delaying the target.',
		cost: 3,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Strike',
		skill: ['bump', 'dex']
	},
	{
		id: 'apid-venom',
		name: 'Apid Venom',
		description: 'Lace your shortsword with bee venom and thrust it at the target.',
		cost: 3,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Poison',
		skill: ['dex']
	},
	{
		id: 'crystalline-carve',
		name: 'Crystalline Carve',
		description:
			'Chill your target with an icy salvo, resetting provoke and sometimes removing frenzy status.',
		cost: 4,
		target: 'Single',
		attributes: ['Pierce', 'Ice'],
		ranged: false,
		conditionals: [],
		effect: 'Ragecancel',
		skill: ['dex']
	},
	{
		id: 'shocking-rush',
		name: 'Shocking Rush',
		description:
			'Shock your target, making them quiver and shake, and occasionally paralyzing them.',
		cost: 4,
		target: 'Single',
		attributes: ['Pierce', 'Lightning'],
		ranged: false,
		conditionals: [],
		effect: 'Paralysis',
		skill: ['dex']
	},
	{
		id: 'piercing-lightning',
		name: 'Piercing Lightning',
		description: 'Ranged attack. Emit a bolt of lightning to pierce your foe.',
		cost: 5,
		target: 'Single',
		attributes: ['Pierce', 'Lightning'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['dex', 'mob']
	},
	{
		id: 'golden-note',
		name: 'Golden Note',
		description:
			'Make your blade sing in triumph, dealing damage and sometimes distracting a chanting target.',
		cost: 6,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Distract',
		skill: ['dex']
	},
	{
		id: 'eulogy',
		name: 'Eulogy',
		description: "Carve the target's last rites into them, occasionally causing sudden death.",
		cost: 6,
		target: 'Single',
		attributes: ['Slash', 'Fire'],
		ranged: false,
		conditionals: [],
		effect: 'Death',
		skill: ['dex']
	},
	{
		id: 'southern-cross',
		name: 'Southern Cross',
		description: 'Etch a cross-like pattern into the target. Effective against demons and undead.',
		cost: 7,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Effective Against Undead',
		skill: ['dex']
	},
	{
		id: 'floral-extravaganza',
		name: 'Floral Extravaganza',
		description:
			'Weapon-specific tech. Assault a target with a frenzy of petals, rarely causing sudden death.',
		cost: 8,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Death',
		skill: ['dex']
	}
];

export const spear: Tech[] = [
	{
		id: 'pierce',
		name: 'Pierce',
		description: 'Swiftly thrust your spear directly forward.',
		cost: 1,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'acu']
	},
	{
		id: 'split-cranium',
		name: 'Split Cranium',
		description: "Crash your spear down directly on a target's skull, decreasing its focus.",
		cost: 2,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: ['Magic'],
		effect: 'None',
		skill: ['str', 'acu']
	},
	{
		id: 'shelter',
		name: 'Shelter',
		description: 'Protect an ally against attacks. Greatly increases block chance.',
		cost: 2,
		target: 'Single',
		attributes: [],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Guardscale',
		skill: ['dex', 'mob']
	},
	{
		id: 'sweep',
		name: 'sweep',
		description: 'Swing your spear in a crescent pattern, occasionally stunning the target.',
		cost: 3,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Stun',
		skill: ['str']
	},
	{
		id: 'reaper',
		name: 'Reaper',
		description: 'Area attack. Attack all foes in one grand stroke.',
		cost: 3,
		target: 'All',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['dex']
	},
	{
		id: 'aim',
		name: 'Aim',
		description: 'Ready a precise attack to ensure it strikes true. Difficult to block or evade.',
		cost: 4,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Guardchange',
		skill: ['str', 'acu']
	},
	{
		id: 'mizuchi',
		name: 'Mizuchi',
		description: 'Ranged attack. Sometimes poisons the target.',
		cost: 4,
		target: 'Single',
		attributes: ['Pierce', 'Ice'],
		ranged: true,
		conditionals: [],
		effect: 'Poison',
		skill: ['int', 'acu']
	},
	{
		id: 'spiral-charge',
		name: 'Spiral Charge',
		description: 'Rush forward and skewer a foe. Somewhat easy to block or evade.',
		cost: 5,
		target: 'Single',
		attributes: ['Pierce', 'Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Guardchange',
		skill: ['str', 'acu']
	},
	{
		id: 'divine-lancer',
		name: 'Divine Lancer',
		description:
			'Ram a target until it is on the brink between life and death, decreasing its defense.',
		cost: 5,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'Defense',
		skill: ['str', 'acu']
	},
	{
		id: 'arm-of-light',
		name: 'Arm of Light',
		description:
			'Ranged attack. Use your spear as a conduit to send forth a wave of light that pierces a target.',
		cost: 6,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['int', 'acu']
	},
	{
		id: 'windmill',
		name: 'Windmill',
		description:
			'Has a chance to nullify the first attack that targets you and unleash a counterattack.',
		cost: 6,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'None',
		skill: ['dex']
	},
	{
		id: 'triumvirate',
		name: 'Triumvirate',
		description: 'Assault your enemy thrice, occasionally stunning it.',
		cost: 7,
		target: 'Single',
		attributes: ['Pierce', 'Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Stun',
		skill: ['str', 'acu']
	},
	{
		id: 'swooping-dragon',
		name: 'Swooping Dragon',
		description: 'Weapon-specific tech. Nimbly lunge forward with the fierceness of a dragon.',
		cost: 8,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['int', 'acu']
	}
];

export const axe: Tech[] = [
	{
		id: 'treecleaver',
		name: 'Treecleaver',
		description: 'Swing downward like a lumberjack splitting a log. Effective against plantoids.',
		cost: 2,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'Effective Against Plant',
		skill: ['str']
	},
	{
		id: 'smash',
		name: 'Smash',
		description: 'Smash a target from above, provoking it.',
		cost: 3,
		target: 'Single',
		attributes: ['Slash', 'Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'maim',
		name: 'Maim',
		description: "Lunge forward at a target's legs, decreasing its speed.",
		cost: 4,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Quickness'],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'vertical-smash',
		name: 'Vertical Smash',
		description: "Crunch a target's armor, decreasing its defense.",
		cost: 4,
		target: 'Single',
		attributes: ['Slash', 'Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Defense',
		skill: ['str']
	},
	{
		id: 'dimensional-break',
		name: 'Dimensional Break',
		description: 'Area attack. Sever foes connection to this world, rarely causing sudden death.',
		cost: 5,
		target: 'All',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'Death',
		skill: ['str', 'int']
	},
	{
		id: 'power-disruptor',
		name: 'Power Disruptor',
		description: "Aim directly for a target's means of offense, decreasing its attack.",
		cost: 5,
		target: 'Single',
		attributes: ['Slash', 'Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Attack Down',
		skill: ['str']
	},
	{
		id: 'hyper-hammer',
		name: 'Hyper Hammer',
		description: 'Send a target flying with a fierce blow, greatly delaying it.',
		cost: 6,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Delay',
		skill: ['str']
	},
	{
		id: 'unbridled-frenzy',
		name: 'Unbridled Frenzy',
		description: 'Unleash multiple attacks on random targets. Effective against plantoids.',
		cost: 6,
		target: 'All (R)',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Effective Against Plant',
		skill: ['str']
	},
	{
		id: 'hell-s-fury',
		name: "Hell's Fury",
		description: 'Interrupt a blunt attack, dealing damage in retribution.',
		cost: 7,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Interrupt', 'Strike'],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'reverse-delta',
		name: 'Reverse Delta',
		description: 'Perform a triangular fusillade of attacks. Difficult to block or evade.',
		cost: 7,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: ['Guardchange'],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'morning-glory',
		name: 'Morning Glory',
		description:
			"Attack with such force that even the clouds themselves scatter, decreasing a target's focus.",
		cost: 8,
		target: 'Single',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'Focus Down',
		skill: ['str']
	},
	{
		id: 'malefic-eclipse',
		name: 'Malefic Eclipse',
		description:
			'Weapon-specific tech. Area attack. Unleash the power of fate sealed within the axe, sometimes causing sudden death.',
		cost: 9,
		target: 'All',
		attributes: ['Slash'],
		ranged: false,
		conditionals: [],
		effect: 'Death',
		skill: ['str', 'int']
	}
];

export const club: Tech[] = [
	{
		id: 'roundhouse',
		name: 'Roundhouse',
		description:
			"Attack with vigor and break a target's concentration, occasionally distracting it.",
		cost: 1,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Distract',
		skill: ['str']
	},
	{
		id: 'block',
		name: 'Block',
		description: 'Protect an ally against attacks. Increases block chance.',
		cost: 1,
		target: 'Single',
		attributes: [],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'Guardscale',
		skill: ['dex', 'mob']
	},
	{
		id: 'enkindle',
		name: 'Enkindle',
		description: 'Deliver a passionate, fiery blow that increases your attack power.',
		cost: 2,
		target: 'Single',
		attributes: ['Blunt', 'Fire'],
		ranged: false,
		conditionals: [],
		effect: 'Attack Up',
		skill: ['str', 'int']
	},
	{
		id: 'bonecrusher',
		name: 'Bonecrusher',
		description: "Grind a target's bones to dust and decrease its attack power.",
		cost: 3,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Attack Down',
		skill: ['str']
	},
	{
		id: 'seismic-strike',
		name: 'Seismic Strike',
		description:
			'Interrupt a nonflying target with an area attack of your own, occasionally paralyzing foes.',
		cost: 3,
		target: 'All',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: ['Interrupt', 'Strike'],
		effect: 'Paralysis',
		skill: ['str']
	},
	{
		id: 'shiversmash',
		name: 'Shiversmash',
		description: 'Punish a target with a bludgeon of frigid ice and increase your defense.',
		cost: 4,
		target: 'Single',
		attributes: ['Blunt', 'Ice'],
		ranged: false,
		conditionals: [],
		effect: 'Defense Up',
		skill: ['str', 'int']
	},
	{
		id: 'gale-strike',
		name: 'Gale Strike',
		description:
			'Interrupt a piercing attack, dealing damage, increasing your speed, and delaying the target.',
		cost: 5,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: ['Interrupt', 'Bump'],
		effect: 'None',
		skill: ['mob']
	},
	{
		id: 'rock-splitter',
		name: 'Rock Splitter',
		description:
			'Pummel a foe with unparalleled fury, decreasing its defense and increasing your attack power.',
		cost: 5,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Defense Down, Attack Up',
		skill: ['str']
	},
	{
		id: 'grand-slam',
		name: 'Grand Slam',
		description: 'Area attack. Dominate the battlefield, damaging all foes.',
		cost: 6,
		target: 'All',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'nutcracker',
		name: 'Nutcracker',
		description: 'Strike a target with overwhelming rage, decreasing its defense.',
		cost: 7,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Defense Down',
		skill: ['str']
	},
	{
		id: 'maniac-blossom',
		name: 'Maniac Blossom',
		description: "Interrupt a target's slashing attack and deal grievous wounds.",
		cost: 8,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: ['Interrupt', 'Slash'],
		effect: 'None',
		skill: ['str']
	},
	{
		id: 'graceful-swing',
		name: 'Graceful Swing',
		description:
			'Weapon-specific tech. Swing with all your might, resetting provoke and removing frenzy status.',
		cost: 6,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: true,
		conditionals: [],
		effect: 'Ragecancel',
		skill: ['str']
	}
];

export const bow: Tech[] = [
	{
		id: 'aimed-shot',
		name: 'Aimed Shot',
		description: 'Ranged attack. Shoot an arrow that is very likely to hit.',
		cost: 2,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['dex', 'acu']
	},
	{
		id: 'shadow-weave',
		name: 'Shadow Weave',
		description: 'Ranged attack. Deals no damage but can sometimes paralyze a foe.',
		cost: 3,
		target: 'Single',
		attributes: [],
		ranged: true,
		conditionals: [],
		effect: 'Paralysis',
		skill: ['dex', 'acu']
	},
	{
		id: 'quick-nock',
		name: 'Quick Nock',
		description: 'Ranged attack. A swift shot that pierces foes.',
		cost: 4,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['dex', 'mob']
	},
	{
		id: 'rapid-volley',
		name: 'Rapid Volley',
		description: 'Unleash a volley of low-accuracy shots at random targets.',
		cost: 4,
		target: 'All (R)',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['acu']
	},
	{
		id: 'incendiary-arrow',
		name: 'Incendiary Arrow',
		description: 'Ranged attack. Shoot forth an arrow of blistering heat that provokes the target.',
		cost: 5,
		target: 'Single',
		attributes: ['Pierce', 'Fire'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['int', 'acu']
	},
	{
		id: 'id-break',
		name: 'Id Break',
		description: 'Ranged attack. Damages and sometimes confuses a target, disrupting its actions.',
		cost: 6,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'Confusion',
		skill: ['dex', 'acu']
	},
	{
		id: 'plasma-shot',
		name: 'Plasma Shot',
		description:
			'Ranged attack. Send forth a blinding beam of light that occasionally paralyzes the target.',
		cost: 6,
		target: 'Single',
		attributes: ['Pierce', 'Lightning'],
		ranged: true,
		conditionals: [],
		effect: 'Paralysis',
		skill: ['int', 'acu']
	},
	{
		id: 'falling-phoenix',
		name: 'Falling Phoenix',
		description:
			'Ranged attack. Rake the target with blades of wind. Effective against winged foes.',
		cost: 7,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'Effective Against Flying',
		skill: ['str', 'acu']
	},
	{
		id: 'rain-of-arrows',
		name: 'Rain of Arrows',
		description: 'Area attack. Damage foes with arrows that rain from the sky.',
		cost: 7,
		target: 'All',
		attributes: ['Pierce'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['dex', 'acu']
	},
	{
		id: 'heart-seeker',
		name: 'Heart Seeker',
		description: 'Ranged attack. Aim directly for the target vitals, sometimes frenzying it.',
		cost: 8,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'Rage',
		skill: ['int', 'acu']
	},
	{
		id: 'millionaire',
		name: 'Millionaire',
		description: 'Rapidly shoot at various targets indiscriminately.',
		cost: 9,
		target: 'All (R)',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'None',
		skill: ['dex', 'acu']
	},
	{
		id: 'deathshot',
		name: 'Deathshot',
		description:
			'Weapon-specific tech. Ranged attack. Loose an arrow that does more damage the more frenzied the attacker is.',
		cost: 8,
		target: 'Single',
		attributes: ['Pierce'],
		ranged: true,
		conditionals: [],
		effect: 'Frenzy',
		skill: ['dex', 'mob']
	}
];

export const martialArts: Tech[] = [
	{
		id: 'punch',
		name: 'Punch',
		description: 'Punch forward in the most basic manner possible.',
		cost: 1,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'tumble',
		name: 'Tumble',
		description: 'Twist the air around a foe to send it flying, occasionally stunning it.',
		cost: 2,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Stun',
		skill: ['dex', 'end']
	},
	{
		id: 'chop',
		name: 'Chop',
		description: 'Strike a foe with an unerring blow, provoking it.',
		cost: 2,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'dex']
	},
	{
		id: 'slide',
		name: 'Slide',
		description: "Slide forward along the ground aiming for a target's legs, decreasing its speed.",
		cost: 3,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Speed Down',
		skill: ['str', 'mob']
	},
	{
		id: 'jolt-counter',
		name: 'Jolt Counter',
		description:
			'Has a chance to nullify the first attack that targets you and unleash a counterattack.',
		cost: 3,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'None',
		skill: ['dex']
	},
	{
		id: 'thunder-kick',
		name: 'Thunder Kick',
		description: 'Thrust your legs forward with shocking force, delaying the target.',
		cost: 4,
		target: 'Single',
		attributes: ['Blunt', 'Lightning'],
		ranged: false,
		conditionals: [],
		effect: 'Delay',
		skill: ['str', 'mob']
	},
	{
		id: 'submission',
		name: 'Submission',
		description: 'Make a foe kneel before you in agony, decreasing its attack.',
		cost: 4,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Attack Down',
		skill: ['dex', 'end']
	},
	{
		id: 'raksha',
		name: 'Raksha',
		description: 'Unleash a demonic frenzy, provoking the target.',
		cost: 5,
		target: 'Single',
		attributes: ['Blunt', 'Fire'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'niagara-buster',
		name: 'Niagara Buster',
		description:
			'Lift an enemy above your head before smashing them to the ground. Effective against aquatic foes.',
		cost: 6,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Effective Against Aquatic',
		skill: ['dex', 'end']
	},
	{
		id: 'triple-dragon',
		name: 'Triple Dragon',
		description: 'Let loose the energy of a triumvirate of dragons.',
		cost: 7,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	},
	{
		id: 'retribution',
		name: 'Retribution',
		description:
			'Has a chance to nullify the first attack that targets you and unleash a counterattack.',
		cost: 8,
		target: 'Single',
		attributes: ['Blunt', 'Slash'],
		ranged: false,
		conditionals: ['Interrupt'],
		effect: 'None',
		skill: ['dex', 'str']
	},
	{
		id: 'rising-sun',
		name: 'Rising Sun',
		description:
			'Assault your foe with an attribute-free attack that increases your own attack power.',
		cost: 8,
		target: 'Single',
		attributes: [],
		ranged: false,
		conditionals: [],
		effect: 'None',
		skill: ['str', 'mob']
	}
];

export const staff: Tech[] = [
	{
		id: 'focusing-strike',
		name: 'Focusing Strike',
		description: 'Beat a target with your staff, increasing your focus.',
		cost: 1,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Focus Up',
		skill: ['str', 'acu']
	},
	{
		id: 'shattered-dreams',
		name: 'Shattered Dreams',
		description: 'Mercilessly batter a target, sometimes confusing it.',
		cost: 6,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Confusion',
		skill: ['str', 'acu']
	},
	{
		id: 'cruncher',
		name: 'Cruncher',
		description: 'Damage a foe, occasionally distracting it.',
		cost: 7,
		target: 'Single',
		attributes: ['Blunt'],
		ranged: false,
		conditionals: [],
		effect: 'Distract',
		skill: ['str', 'acu']
	}
];

export type ExtendedTech = Tech & { type: string };
export const techs: { [key: string]: ExtendedTech } = {};
greatsword.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'greatsword' };
});
sword.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'sword' };
});
twinSwords.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'twinSwords' };
});
shortSword.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'shortSword' };
});
spear.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'spear' };
});
axe.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'axe' };
});
club.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'club' };
});
bow.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'bow' };
});
martialArts.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'martialArts' };
});
staff.forEach((tech) => {
	techs[tech.id] = { ...tech, type: 'staff' };
});
