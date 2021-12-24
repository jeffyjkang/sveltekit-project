<script lang='ts'>
  import {theme} from '../../theme';
  import {page} from '$app/stores';
</script>

<div class='theme-container'>
  {#each ['dark', 'light', 'neutral'] as mode}
    <h1
      style='
        --color: {theme[mode][`primary`][$page.params.type]};
        --background: {theme[mode][`secondary`][$page.params.type]};
      '
    >
      {mode} theme
    </h1>
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

