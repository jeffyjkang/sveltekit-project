import {writable, derived} from 'svelte/store';
import {browser} from '$app/env';
import {Theme} from '../theme';

export type StoredThemeType = 'dark' | 'light' | 'neutral'

const persistedTheme = browser ? localStorage.getItem('theme') : null;

export const storedTheme = writable(persistedTheme ? persistedTheme : 'neutral')

export const colors = derived(
  storedTheme,
  $storedTheme => (
  {
    error: Theme.global.error,
    info: Theme.global.info,
    warning: Theme.global.warning,
    darkText: Theme.global.text.dark,
    lightText: Theme.global.text.light,
    neutralText: Theme.global.text.neutral,
    primary: Theme[$storedTheme].primary,
    secondary: Theme[$storedTheme].secondary
  })
)

if(browser) {
  storedTheme.subscribe(value => {
    localStorage.setItem('theme', value)
  })
}

