<script lang='ts'>
  import {color} from '../stores/theme-store';
  import ThemeSelect from './theme-select.svelte';
</script>

<header>
  <nav>
    <div>
      <button 
        style=
          '
            border: 2px solid {$color.darkText};
            background: {$color.neutralText};
            color: {$color.lightText};
          '
      >
        <a href='/' style='text-decoration: none; color: inherit;'>
          HOME
        </a>
      </button>
      <ThemeSelect />
      <a href='/test'>test</a>
    </div>
    <svg style='background: {$color.secondary};'>
      <circle cx='12' cy='12' r='8' fill={$color.primary} />
    </svg>
  </nav>
</header>

<style>
  header {
    margin: 8px;
    margin-bottom: 16px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
  }
  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  svg {
    height: 24px;
    width: 24px;
    border-radius: 8px;
  }
  button {
    border-radius: 8px;
    padding: 4px;
    margin: 4px;
    cursor: pointer;
  }
</style>

