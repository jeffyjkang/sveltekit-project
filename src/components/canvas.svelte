<script lang='ts'>
  import {page} from '$app/stores';
  import {colors} from '../stores/theme-store';
  import SelectionSort from './sorts/selection-sort.svelte';
  import InsertionSort from './sorts/insertion-sort.svelte';
</script>

<div class='canvas' style='background: {$colors.secondary.base};'>
  <h2 style='color: {$colors.neutralText};'>{$page.params.sort.toUpperCase()} SORT</h2>
  <div class='container'>
    {#if $page.params.sort === 'selection'}
      <SelectionSort />
    {/if}
    {#if $page.params.sort === 'insertion'}
      <InsertionSort />
    {/if}
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
h2 {
  margin: 16px;
}
.container {
  display: flex;
  align-items: flex-end;
}
</style>

