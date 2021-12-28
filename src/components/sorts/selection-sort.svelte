<script lang='ts'>
  import {onMount} from 'svelte'
  import {flip} from 'svelte/animate';
  import VerticalBar from '../vertical-bar.svelte';
  import {selectionSortGenerator} from '../../utils/sort/selectionSort';
  import {generateArray} from '../../utils/generate/generateArray';
  let testValues = [... new Set(generateArray())];
  let p1: number;
  let p2: number;
  let pS: number | undefined;
  onMount(() => {
    const generator = selectionSortGenerator(testValues);
    const interval = setInterval(() => {
      const {value, done} = generator.next();
      
      testValues = value.arr
      p1 = Number(value._i);
      p2 = Number(value._j);
      pS = Number(value._k);
      
      if (done) {
        clearInterval(interval);
      }
    }, 100);
  });
</script>

{#each testValues as element, i (element)}
  <div animate:flip="{{duration: 250}}">
    <VerticalBar value={element} index={i} pointer1={p1} pointer2={p2} swapIndex={pS}/>
  </div>
{/each}

