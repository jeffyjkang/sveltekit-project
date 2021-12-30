<script lang='ts'>
  import Nav from '../components/navigation/nav.svelte'
</script>

<main>
  <Nav />
  <slot/>
</main>

<style>
  main {
    max-width: 880px;
    margin: auto;
  }
</style>

