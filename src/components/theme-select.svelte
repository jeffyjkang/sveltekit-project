<script lang='ts'>
  import {theme} from '../theme';

  const dark = theme.global.text.dark;
  const light = theme.global.text.light;
  const neutral = theme.global.text.neutral;
  let persistOpen = false;
</script>

<div class='dropdown'>
  <button
    style='
      --border: {dark};
      --background: {neutral};
      --color: {light};
    '
  >
    SELECT THEME |
    <span class='arrow' on:click={()=>(persistOpen = !persistOpen)}>></span>
  </button>
  <div
      class='{!persistOpen ? 'dropdown-content' : 'dropdown-content persist'}'
    style='
      --border: {dark};
      --background: {neutral};
      --color: {light};
    '
  >
    {#each ['base', 'neon', 'pastel'] as type}
      <a href='/themes/{type}' style='text-decoration: none; color: inherit; --background: {dark}'>{type.toUpperCase()} COLORS</a>
    {/each}
  </div>
</div>

<style>
  button {
    border-radius: 8px;
    padding: 4px;
    margin: 4px;
    border: 2px solid var(--border);
    background: var(--background);
    color: var(--color);
    cursor: points;
  }
  .arrow {
    display: inline-block;
    transform: rotate(90deg);
    cursor: pointer;
  }
  a:hover {
    background: var(--background);
  }
  .dropdown-content {
    display: none;
    padding: 4px;
    margin-left: 4px;
    border-radius: 8px;
    background: var(--background);
    color: var(--color);
    border: 2px solid var(--border);
  }
  .dropdown:hover .dropdown-content {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .persist {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
</style>

