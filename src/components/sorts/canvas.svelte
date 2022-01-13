<script lang='ts'>
  import {page} from '$app/stores';
  import {colors} from '../../stores/theme-store';
  import Toolbar from './tool-bar.svelte';
  import SelectionSort from './selection-sort.svelte';
  import InsertionSort from './insertion-sort.svelte';
  import BubbleSort from './bubble-sort.svelte';

  const title = `${$page.params.sort.toUpperCase()} SORT`;
</script>

<div class='canvas' style='background: {$colors.secondary.base};'>
  <Toolbar title={title} />
  <div class='container'>
    {#if $page.params.sort === 'selection'}
      <SelectionSort />
    {/if}
    {#if $page.params.sort === 'insertion'}
      <InsertionSort />
    {/if}
    {#if $page.params.sort === 'bubble'}
      <BubbleSort />
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
  justify-content: space-between;
  padding: 8px;
}
.container {
  display: flex;
  align-items: flex-end;
}
</style>

