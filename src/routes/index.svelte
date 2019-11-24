<style>
  a {
    text-decoration: none;
  }
  .card {
    padding: 20px;
    margin-bottom: 10px;
    border: 2px solid #bababa;
    box-shadow: 3px 3px 0px #bababa;
  }
  .tags {
    margin: 10px 0;
  }
  .tag {
    border-radius: 100px;
    background-color: #eaeaea;
    padding: 2px 8px;
    margin-right: 10px;
  }

  @media (max-width: 640px) {
    .tag {
      margin-right: 5px;
      font-size: 0.6rem;
    }
  }
  .article-engagement {
    margin-right: 20px;
  }
  .article-engagement img {
    height: 20px;
    min-width: 26px;
    vertical-align: -5px;
  }
  .flex-container {
    display: flex;
  }
</style>

<a href="/">
  <div class="card">
    Nov 24
    <h1>Create a blog with Svelte and DEV.to API</h1>

    <div class="tags">
      <span class="tag">#svelte</span>
      <span class="tag">#javascript</span>
      <span class="tag">#tutorial</span>
      <span class="tag">#blog</span>
    </div>

    <p>How to create a blog using dev.to API and svelte</p>

    <div class="flex-container">
      <div class="article-engagement">
        <img
          alt="Reactions"
          src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png" />
        <span>10</span>
      </div>

      <div class="article-engagement">
        <img
          alt="Comments"
          src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/comments-bubble-9958d41b969a1620c614347d5ad3f270ab49582c1d9f82b617a6b4156d05dda0.png" />
        <span>3</span>
      </div>

    </div>
  </div>
</a>
