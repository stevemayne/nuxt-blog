<template>
  <div class="card">
    <img class="card-img-top" :src="post.feature_image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">
        <nuxt-link :to="{name: 'articles-slug', params: {'slug': post.slug}}">
          {{ post.title }}
        </nuxt-link>
      </h5>
      <p class="card-text">{{ post.excerpt | truncate(70, '...') }}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    truncate (text, length, suffix) {
      return text.substring(0, length) + suffix
    }
  }
}
</script>

<style scoped>
</style>
