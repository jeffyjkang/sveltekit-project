<script lang='ts'>
  import { theme } from '../../theme';
  const darkPrimaryNeon = theme.dark.primary.neon;
  const darkSecondaryNeon = theme.dark.secondary.neon;
  const lightPrimaryNeon = theme.light.primary.neon;
  const lightSecondaryNeon = theme.light.secondary.neon;
  const neutralPrimaryNeon = theme.neutral.primary.neon;
  const neutralSecondaryNeon = theme.neutral.secondary.neon; 
</script>

<div class='theme-container'>
  <h1
    style='
      --color:{darkPrimaryNeon};
      --background:{darkSecondaryNeon};
    '
  >
    Dark Theme
  </h1><h1
    style='
      --color:{lightPrimaryNeon};
      --background:{lightSecondaryNeon};
    '
  >
    Light Theme
  </h1><h1
    style='
    --color:{neutralPrimaryNeon};
      --background:{neutralSecondaryNeon};
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

