<script lang='ts'>
  import Nav from '../components/nav.svelte'
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

