<script lang='ts'>
  import {colors} from '../stores/theme-store';
  import NavSelect from './nav-select.svelte';
</script>

<header>
  <nav>
    <div>
      <button 
        style=
          '
            border: 2px solid {$colors.darkText};
            background: {$colors.neutralText};
            color: {$colors.lightText};
          '
      >
        <a href='/' style='text-decoration: none; color: inherit;'>
          HOME
        </a>
      </button>
      <NavSelect title={'theme'} routeList={['dark', 'light', 'neutral']} />
      <NavSelect title={'sort'} routeList={['selection', 'insertion']} />
    </div>
    <svg style='background: {$colors.secondary.base};'>
      <circle cx='12' cy='12' r='8' fill={$colors.primary.base} />
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

