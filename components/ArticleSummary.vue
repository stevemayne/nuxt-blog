<template>
  <div class="card post-card">
    <nuxt-link :to="{name: 'articles-slug', params: {'slug': post.slug}}">
      <img class="card-img-top" :src="post.feature_image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">
          {{ post.title }}
        </h5>
        <p class="card-text">
          {{ post.excerpt | truncate(70, '...') }}
        </p>
        <p class="card-text">
          <span v-for="tag in post.tags" :key="tag.id">
            <small class="text-muted">{{ tag.name }}</small>
          </span>
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  filters: {
    truncate (text, length, suffix) {
      return text.substring(0, length) + suffix
    }
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.post-card a {
  color: black;
}

.post-card a:hover {
  text-decoration: none;
}
</style>
