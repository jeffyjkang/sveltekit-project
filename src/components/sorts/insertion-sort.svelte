<script lang='ts'>
  import {onDestroy} from 'svelte';
  import {flip} from 'svelte/animate';
  import VerticalBar from './vertical-bar.svelte';
  import {generateArray} from '../../utils/generate/generateArray';
  import {insertionSortGenerator} from '../../utils/sort/insertionSort';

  export let actionValue: string | undefined;
  $: actionValue
  let pause = true;
  $: pause

  let randomArraySet = [... new Set(generateArray())];
  let p1: number;
  let p2: number;
  let pS: number;

  let generator = insertionSortGenerator(randomArraySet);

  const generatorIntervalCB = () => {
    if (actionValue === 'START') {
      pause = false;
      if (!pause) {
        const {value, done} = generator.next();
        if (!done) {
          randomArraySet = value.arr
          p1 = Number(value._i);
          p2 = Number(value._j);
          pS = Number(value._k);
        }
        else {
          clearInterval(interval);
        }
      }
    }
    if (actionValue === 'STOP') {
      pause = true;
    }
    if (actionValue === 'RESET') {
      pause = true;
      randomArraySet = [... new Set(generateArray())];
      p1 = undefined;
      p2 = undefined;
      pS = undefined;
      generator = insertionSortGenerator(randomArraySet);
      clearInterval(interval);
      interval = setInterval(generatorIntervalCB, 250)
      actionValue = 'STOP'
    }
  }

  let interval = setInterval(generatorIntervalCB, 250);

  onDestroy(() => {
    clearInterval(interval);
  })
</script>

{#each randomArraySet as element, i (element)}
  <div animate:flip='{{duration: 250}}'>
    <VerticalBar value={element} index={i} pointer1={p1} pointer2={p2} swapIndex={pS} />
  </div>
{/each}

