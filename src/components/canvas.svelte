<script lang='ts'>
  import VerticalBar from './vertical-bar.svelte';
  import {colors} from '../stores/theme-store';
  import {selectionSort} from '../utils/sort/selection-sort';

  const testValues = Array.from({length: 44}, () => Math.floor(Math.random() * (100 - 2) + 2));
  const sortedValues = selectionSort(testValues);
</script>

<div class='canvas' style='background: {$colors.secondary.base}'>
  {#each testValues as element, i}
    <VerticalBar  value={element} index={i}/>
  {/each}
</div>

<style>
.canvas {
  width: 100%;
  height: 880px;
  display: flex;
  align-items: flex-end;
}
</style>

