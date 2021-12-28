<script lang='ts'>
  import {Theme} from '../../theme';
  import {storedTheme} from '../../stores/theme-store';
  import {page} from '$app/stores';

  const setTheme = (selectedTheme: string) => {
    storedTheme.update(currentTheme => currentTheme = selectedTheme);
  }
</script>

<button
  on:click|preventDefault={()=>setTheme($page.params.theme)}
  style='
    background: {Theme.global.text.light};
    border-color: {Theme.global.text.neutral};
    border-radius: 4px;
    margin: 0 8px;
    cursor: pointer;
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
  h1 {
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    color: var(--color);
    background: var(--background);
  }
</style>

