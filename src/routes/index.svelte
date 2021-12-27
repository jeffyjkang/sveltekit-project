<script lang='ts'>
  import {Theme} from '../theme';

  const dark = Theme.global.text.dark;
  const light = Theme.global.text.light;
  const neutral = Theme.global.text.neutral;
</script>

<div class='app-container'>
  <h1 
    style='
      --color:{dark};
      --background:{light};
      --border:{neutral};
    '
  >
    Home Page
  </h1>
</div>

<style>
  .app-container {
    display: flex;
    flex-flow: row wrap;
  }
  h1 {
    margin: 8px;
    padding: 8px;
    border: 2px solid var(--border);
    color: var(--color);
    background: var(--background);
  }
</style>

