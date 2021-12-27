<script lang='ts'>
export let value: number;
export let index: number;
import {color} from '../stores/theme-store';
</script>

<div class='bar-container'>
  <div
    class='bar-graphic'
    style='
      --height: {value * 8}px;
      background: {$color.primary}
    '    
  >
    <span style='color: {$color.secondary}'>{value}</span>
  </div>
  <div
    class='index'
    style='color: {$color.primary};'
  >
    {index}
  </div>
  <div
    class='arrow'
    style='color: {$color.primary};'
  >
    ^
  </div>
</div>

<style>
.bar-container {
  margin: 0 2px;
}
.bar-graphic {
  height: var(--height);
  width: 16px;
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.index {
  font-size: 8px;
  text-align: center;
  padding-top: 4px;
}
.arrow {
  font-size: 8px;
  text-align: center;
  padding-top: 4px;
}
</style>
