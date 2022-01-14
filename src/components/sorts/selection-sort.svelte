<script lang='ts'>
  import {onDestroy} from 'svelte'
  import {flip} from 'svelte/animate';
  import VerticalBar from './vertical-bar.svelte';
  import {generateArray} from '../../utils/generate/generateArray';
  import {selectionSortGenerator} from '../../utils/sort/selectionSort';

  export let actionValue: string | undefined;
  $: actionValue
  let pause = true;
  $: pause

  let testValues = [... new Set(generateArray())];
  let p1: number;
  let p2: number;
  let pS: number | undefined;
  let generator = selectionSortGenerator(testValues);

  const generatorIntervalCB= () => {
    if (actionValue === 'START') {
      pause = false;
      if (!pause) {
        const {value, done} = generator.next();
        if (!done) {
          testValues = value.arr
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
      testValues = [... new Set(generateArray())];
      p1 = undefined;
      p2 = undefined;
      pS = undefined;
      generator = selectionSortGenerator(testValues);
      clearInterval(interval);
      interval = setInterval(generatorIntervalCB, 100)
      actionValue = 'STOP'
    }
  }

  let interval = setInterval(generatorIntervalCB, 100);

  onDestroy(() => {
    clearInterval(interval);
  })

</script>

{#each testValues as element, i (element)}
  <div animate:flip="{{duration: 250}}">
    <VerticalBar value={element} index={i} pointer1={p1} pointer2={p2} swapIndex={pS}/>
  </div>
{/each}

