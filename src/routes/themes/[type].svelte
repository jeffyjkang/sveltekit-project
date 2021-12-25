<script lang='ts'>
  import {theme} from '../../theme';
  import {color} from '../../stores/theme-store';
  import {page} from '$app/stores';

  const setTheme = (mode: string) => {
    const selectedColors = {
      darkText: theme.global.text.dark,
      lightText: theme.global.text.light,
      neutralText: theme.global.text.neutral,
      error: theme.global.error[$page.params.type],
      info: theme.global.info[$page.params.type],
      warning: theme.global.warning[$page.params.type],
      primary: theme[mode]['primary'][$page.params.type],
      secondary: theme[mode]['secondary'][$page.params.type]
    }
    color.update(storeColors => storeColors = selectedColors);
  }
</script>

<div class='theme-container'>
  {#each ['dark', 'light', 'neutral'] as mode}
    <button on:click|preventDefault={()=>setTheme(mode)}>
    <h1
      style='
        --color: {theme[mode][`primary`][$page.params.type]};
        --background: {theme[mode][`secondary`][$page.params.type]};
      '
    >
      {mode} theme
    </h1>
    </button>
  {/each}
</div>

<style>
  .theme-container {
    display: flex;
    flex-flow: row wrap;
  }
  h1 {
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    color: var(--color);
    background: var(--background);
  }
</style>

