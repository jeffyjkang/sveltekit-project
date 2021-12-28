<script lang='ts'>
  import {page} from '$app/stores';
  import {colors} from '../stores/theme-store';
  import SelectionSort from './sorts/selection-sort.svelte';
</script>

<div class='canvas' style='background: {$colors.secondary.base};'>
  <h1 style='color: {$colors.neutralText};'>{$page.params.sort.toUpperCase()} SORT</h1>
  <div class='container'>
    <SelectionSort />
  </div>
</div>

<style>
.canvas {
  width: 100%;
  height: 880px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  justify-content: space-between 
}
h1 {
  margin: 16px;
}
.container {
  display: flex;
  align-items: flex-end;
}
</style>

