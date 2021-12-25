<script lang='ts'>
export let value: number;
import {color} from '../stores/theme-store';
</script>

<div class='bar-container'>
  <div
    class='bar-graphic'
    style='
      --height: {value * 10}px;
      background: {$color.primary}
    '    
  >
  </div>
</div>

<style>
.bar-container {
  margin: 0 4px;
}
.bar-graphic {
  height: var(--height);
  width: 8px;
}
</style>
