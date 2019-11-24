<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<h1>{status}</h1>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>{error.message}</figcaption>
</figure>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
