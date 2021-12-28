<script lang='ts'>
  import {colors} from '../stores/theme-store';
  
  export let value: number;
  export let index: number;
</script>

<div class='bar-container'>
  <div
    class='bar-graphic'
    style='
      --height: {value * 8}px;
      background: {$colors.primary.base}
    '
  >
    <span style='color: {$colors.secondary.base}'>{value}</span>
  </div>
  <div
    class='index'
    style='color: {$colors.primary.base};'
  >
    {index}
  </div>
  <div
    class='arrow'
    style='color: {$colors.primary.base};'
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

