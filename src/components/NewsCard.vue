<template>
  <div class="news-data">
    <div class="news-image">
      <img v-bind:alt="news.urlToImage" v-bind:src="news.urlToImage" />
    </div>
    <div class="news-text">
      <h2 class="news-title">{{ news.title }}</h2>
      <hr />
      <p class="news-info" style="margin: 0; padding: 0">
        {{ news.description }}
      </p>
      <span class="news-url"
        ><a v-bind:href="news.url" target="_blank"
          >Leer noticia completa >></a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["news"],
};
</script>

<style scoped>
</style>
