<script lang='ts'>
  import {colors} from '../stores/theme-store';
</script>

<div class='home-container'>
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
  .home-container {
    display: flex;
  }
  h1 {
    margin: 8px;
    padding: 8px;
    border-radius: 4px;
    border: 2px solid var(--border);
    color: var(--color);
    background: var(--background);
  }
</style>

