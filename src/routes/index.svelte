<script>
  import { onMount } from "svelte";
  import Article from "../components/Article";
  import Loading from "../components/Loading.svelte";

  let articles = [];

  onMount(async () => {
    const res = await fetch(`https://dev.to/api/articles?username=jpblancodb`);
    articles = await res.json();
  });
</script>

{#each articles as article}
  <Article
    title={article.title}
    description={article.description}
    date={article.readable_publish_date}
    tags={article.tag_list}
    url={article.canonical_url}
    comments={article.comments_count}
    likes={article.positive_reactions_count} />
{/each}
