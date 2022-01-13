<script lang='ts'>
import {colors} from '../../stores/theme-store';
import VerticalBarActions from './actions/vertical-bar-actions.svelte';
export let title: string;
</script>

<div class='container'>
  <h2 style='color: {$colors.neutralText};'>{title}</h2>
  <VerticalBarActions />
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

