<script lang='ts'>
  import {colors} from '../stores/theme-store';
</script>

<div class='app-container'>
  <h1 
    style='
      --color:{$colors.darkText};
      --background:{$colors.lightText};
      --border:{$colors.neutralText};
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

