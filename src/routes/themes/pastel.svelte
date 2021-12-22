<script lang='ts'>
  import { theme } from '../../theme';
  const darkPrimaryPastel = theme.dark.primary.pastel;
  const darkSecondaryPastel = theme.dark.secondary.pastel;
  const lightPrimaryPastel = theme.light.primary.pastel;
  const lightSecondaryPastel = theme.light.secondary.pastel;
  const neutralPrimaryPastel = theme.neutral.primary.pastel;
  const neutralSecondaryPastel = theme.neutral.secondary.pastel; 
</script>

<div class='theme-container'>
  <h1
    style='
      --color:{darkPrimaryPastel};
      --background:{darkSecondaryPastel};
    '
  >
    Dark Theme
  </h1><h1
    style='
      --color:{lightPrimaryPastel};
      --background:{lightSecondaryPastel};
    '
  >
    Light Theme
  </h1><h1
    style='
    --color:{neutralPrimaryPastel};
      --background:{neutralSecondaryPastel};
    '
  >
    Neutral Theme
  </h1>

</div>

<style>
  .theme-container {
    display: flex;
    flex-flow: row wrap;
  }
  h1 {
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    color: var(--color);
    background: var(--background);
  }
</style>

