<script lang='ts'>
  import { goto } from '$app/navigation';
  import { theme } from '../theme';
  const dark = theme.global.text.dark;
  const light = theme.global.text.light;
  const neutral = theme.global.text.neutral;
  
  const navigate = (type: string) => {
    goto(`/themes/${type}`)
  }
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
    {#each ['base', 'neon', 'pastel'] as type}
      <button
        on:click|preventDefault = {() => navigate(type)}
        style='
          --border: {dark};
          --background: {neutral};
          --color: {light};
        '
      >
        {type.toUpperCase()} COLORS
      </button>
    {/each}
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

