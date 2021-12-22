<script lang='ts'>
  import { theme } from '../../theme';
  const darkPrimaryBase = theme.dark.primary.base;
  const darkSecondaryBase = theme.dark.secondary.base;
  const lightPrimaryBase = theme.light.primary.base;
  const lightSecondaryBase = theme.light.secondary.base;
  const neutralPrimaryBase = theme.neutral.primary.base;
  const neutralSecondaryBase = theme.neutral.secondary.base; 
</script>

<div class='theme-container'>
  <h1
    style='
      --color:{darkPrimaryBase};
      --background:{darkSecondaryBase};
    '
  >
    Dark Theme
  </h1><h1
    style='
      --color:{lightPrimaryBase};
      --background:{lightSecondaryBase};
    '
  >
    Light Theme
  </h1><h1
    style='
      --color:{neutralPrimaryBase};
      --background:{neutralSecondaryBase};
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

