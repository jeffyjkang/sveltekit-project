<script lang='ts'>
  import {onMount} from 'svelte'
  import {flip} from 'svelte/animate';
  import VerticalBar from '../vertical-bar.svelte';
  import {selectionSort} from '../../utils/sort/selectionSort';
  import {generateArray} from '../../utils/generate/generateArray';
  let testValues = [... new Set(generateArray())];
  onMount(() => {
    setTimeout(() => {
      testValues = selectionSort(testValues);
    }, 500);
  });
</script>

{#each testValues as element, i (element)}
  <div animate:flip>
    <VerticalBar value={element} index={i}/>
  </div>
{/each}

