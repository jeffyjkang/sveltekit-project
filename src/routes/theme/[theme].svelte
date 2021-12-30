<script lang='ts'>
  import {Theme} from '../../theme';
  import type {StoredThemeType} from '../../stores/theme-store';
  import {storedTheme} from '../../stores/theme-store';
  import {page} from '$app/stores';

  const setTheme = (selectedTheme: StoredThemeType) => {
    storedTheme.update((currentTheme) => currentTheme = selectedTheme);
  }
</script>

<button
  on:click|preventDefault={()=>setTheme($page.params.theme)}
  style='
    background: {Theme.global.text.light};
    border-color: {Theme.global.text.neutral};
  '
>
  {#each ['base', 'neon', 'pastel'] as type}    
    <h1
      style='
        --color: {Theme[$page.params.theme][`primary`][type]};
        --background: {Theme[$page.params.theme][`secondary`][type]};
      '
    >
      {type} scheme
    </h1>
  {/each}
</button>

<style>
  button {
    margin: 8px;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
  }
  h1 {
    margin: 8px;
    padding: 8px;
    border-radius: 4px;
    color: var(--color);
    background: var(--background);
  }
</style>

