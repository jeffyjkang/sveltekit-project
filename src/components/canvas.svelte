<script lang='ts'>
  import VerticalBar from './vertical-bar.svelte';
  import {color} from '../stores/theme-store';

  const testValues = [4, 16, 12, 35, 10];
</script>

<div class='canvas' style='background: {$color.secondary}'>
  {#each testValues as element}
    <VerticalBar  value={element}/>
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

