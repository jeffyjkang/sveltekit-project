<script lang='ts'>
import {createEventDispatcher} from 'svelte';
import {colors} from '../../stores/theme-store';
import VerticalBarActions from './actions/vertical-bar-actions.svelte';
export let title: string;

const dispatch = createEventDispatcher();
const handleToCanvas  = (e) => 
  dispatch('verticalBarAction', {
    action: e.detail.action
  });

</script>

<div class='container'>
  <h2 style='color: {$colors.neutralText};'>{title}</h2>
  <VerticalBarActions on:verticalBarAction={handleToCanvas} />
</div>

<style>
.container {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}
h2 {
  margin: 0 4px;
}
</style>

