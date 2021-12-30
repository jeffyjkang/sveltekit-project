<script lang='ts'>
  import {colors} from '../../stores/theme-store';
  
  export let value: number;
  export let index: number;
  export let pointer1: number;
  export let pointer2: number;
  export let swapIndex: number;

</script>

<div class='bar-container'>
  <div
    class='bar-graphic'
    style='
      --height: {value * 8}px;
      background: {index < pointer1 ? $colors.primary.pastel : $colors.primary.base}
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
    style='
      color: {
        (pointer1 === index || pointer2 === index) ? 
        $colors.primary.base : 
        (swapIndex === index) ? 
        $colors.lightText : 
        $colors.secondary.base
      };
    '
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

