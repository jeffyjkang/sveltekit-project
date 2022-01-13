<script lang='ts'>
import {colors} from '../../../stores/theme-store';
</script>

<div class='button-group'>
  {#each ['START', 'STOP', 'RESET'] as choice}
    <button
      style='
        color: {$colors.darkText};
        background: {$colors.lightText};
        border: 2px solid {$colors.neutralText};
      '
    >
      {choice}
    </button>
  {/each}
</div>

<style>
.button-group {
  display: flex;
  align-items: center;
}
button {
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

