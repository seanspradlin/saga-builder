import { type CharacterBuild } from '$lib/character-build';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export interface Local {
	builds: CharacterBuild[];
}

let val: Local = { builds: [] };
if (browser) {
	const storedValue = localStorage.getItem('build');
	if (storedValue) {
		val = JSON.parse(storedValue);
	}
}
export const local = writable(val);

local.subscribe((val) => {
	if (browser) {
		const json = JSON.stringify(val);
		localStorage.setItem('build', json);
	}
});
