<script lang='ts'>
  import {theme} from '../theme';
  import ThemeSelect from './theme-select.svelte';

  const dark = theme.global.text.dark;
  const light = theme.global.text.light;
  const neutral = theme.global.text.neutral;
</script>

<header>
  <nav>
    <button
      style='
        --border: {dark};
        --background: {neutral};
        --color: {light};
      '
    >
    <a href='/' style='text-decoration: none; color: inherit;'>HOME</a>
    </button>
    <ThemeSelect />
  </nav>
</header>

<style>
  header {
    margin: 8px;
    margin-bottom: 16px;
  }
  nav {
    display: flex;
    flex-flow: row wrap;
  }
  button {
    border-radius: 8px;
    padding: 4px;
    margin: 4px;
    border: 2px solid var(--border);
    background: var(--background);
    color: var(--color);
    cursor: pointer;
  }
</style>

