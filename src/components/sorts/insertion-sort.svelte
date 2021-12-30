<script lang='ts'>
  import {onMount} from 'svelte';
  import {flip} from 'svelte/animate';
  import VerticalBar from './vertical-bar.svelte';
  import {generateArray} from '../../utils/generate/generateArray';
  import {insertionSortGenerator} from '../../utils/sort/insertionSort';

  let testValues = [... new Set(generateArray())];
  let p1: number;
  let p2: number;
  let pS: number;

  onMount(() => {
    const generator = insertionSortGenerator(testValues);
    const interval = setInterval(() => {
      const {value, done} = generator.next();
      testValues = value.arr;
      p1 = Number(value._i);
      p2 = Number(value._j);
      pS = Number(value._k);
      
      if (done) {
        clearInterval(interval);
      }
    }, 250)
  });
</script>

{#each testValues as element, i (element)}
  <div animate:flip='{{duration: 250}}'>
    <VerticalBar value={element} index={i} pointer1={p1} pointer2={p2} swapIndex={pS} />
  </div>
{/each}

