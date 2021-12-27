<script lang='ts'>
  import {colors} from '../stores/theme-store';

  export let title: string;
  export let routeList: string[];
  let persistOpen = false;
</script>

<div class='dropdown'>
  <button
    style='
      --border: {$colors.darkText};
      --background: {$colors.neutralText};
      --color: {$colors.lightText};
    '
  >
    SELECT {title.toUpperCase()} |
    <span class='arrow' on:click={() => (persistOpen = !persistOpen)}>></span>
  </button>
  <div
    class='{!persistOpen ? 'dropdown-content' : 'dropdown-content persist'}'
    style='
      --border: {$colors.darkText};
      --background: {$colors.neutralText};
      --color: {$colors.lightText};
    '
  >
  {#each routeList as route}
    <a
      href='/{title}/{route}'
      style='--background: {$colors.darkText}'
    >
      {route.toUpperCase()} {title.toUpperCase()}
    </a>
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
    cursor: pointer;
  }
  .arrow {
    display: inline-block;
    transform: rotate(90deg);
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
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

