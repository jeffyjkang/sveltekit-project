import {writable} from 'svelte/store';
import {browser} from '$app/env';
import {theme} from '../theme';

const storedColors = browser ? JSON.parse(localStorage.getItem('colors')) : null;

export const color = writable(
  {
    error: !storedColors ? theme.global.error.base : storedColors.error,
    info: !storedColors ? theme.global.info.base : storedColors.info,
    warning: !storedColors ? theme.global.warning.base : storedColors.warning,
    darkText: theme.global.text.dark,
    lightText: theme.global.text.light,
    neutralText: theme.global.text.neutral,
    primary: !storedColors ? theme.neutral.primary.base : storedColors.primary,
    secondary: !storedColors ? theme.neutral.secondary.base : storedColors.secondary
  }  
)

if(browser) {
  color.subscribe(value => {
    localStorage.setItem('color', JSON.stringify(value))
  })
}

