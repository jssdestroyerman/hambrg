import { writable } from 'svelte/store';

export const menuState = writable({
	first: false, // open menu
	second: false, // close menu
	third: false // reload the menu -> key block
});
