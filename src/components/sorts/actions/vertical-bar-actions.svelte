<script lang='ts'>
import {createEventDispatcher} from 'svelte';
import {colors} from '../../../stores/theme-store';

const dispatch = createEventDispatcher();

const handleToToolBar = (action: string) => 
  dispatch('verticalBarAction', {
    action: action
  });  

</script>

<div class='button-group'>
  {#each ['START', 'STOP', 'RESET'] as choice}
    <button
      on:click={()=>(handleToToolBar(choice))}
      style='
        color: {$colors.darkText};
        background: {$colors.lightText};
        border: 2px solid {$colors.neutralText};
      '
    >
      {choice}
    </button>
  {/each}
</div>

<style>
.button-group {
  display: flex;
  align-items: center;
}
button {
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

