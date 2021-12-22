<script lang='ts'>
  import { theme } from '../theme';
  const dark = theme.global.text.dark;
  const light = theme.global.text.light;
  const neutral = theme.global.text.neutral;
</script>

<header>
  <nav>
    <a
      href='/'
      style='
        --border: {dark};
        --background: {neutral};
        --color: {light};
      '
    >
      Home
    </a>
    <a
      href='/themes/base'
      style='
        --border: {dark};
        --background: {neutral};
        --color: {light};
      '
    >
      Base Theme
    </a>
    <a
      href='/themes/neon'
      style='
        --border: {dark};
        --background: {neutral};
        --color: {light};
      '
    >
      Neon Theme
    </a>
    <a
      href='/themes/pastel'
      style='
        --border: {dark};
        --background: {neutral};
        --color: {light};
      '
    >
      Pastel Theme
    </a>
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
  a {
    text-decoration: none;
    border-radius: 8px;
    padding: 4px;
    margin: 4px;
    border: 2px solid var(--border);
    background: var(--background);
    color: var(--color);
  }
</style>

