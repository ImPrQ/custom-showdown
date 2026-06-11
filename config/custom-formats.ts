export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "Custom Modes",
	},
	{
		name: "[Gen 9] Custom Gamemode",
		desc: `A base custom gamemode using our generated mod scaffolding.`,
		mod: 'customgamemode',
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG'],
	},
];
