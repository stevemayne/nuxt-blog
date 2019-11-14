<template>
  <div class="container">
    <h1>Steve Test Static Blog {{ renderMode }}</h1>
    <div class="card-columns">
      <blog-article v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import ArticleSummary from '../components/ArticleSummary.vue'
import { PostsAPI } from '../api/posts_api'

export default {
  components: {
    'blog-article': ArticleSummary
  },
  computed: {
    renderMode () {
      return this.$store.state.blog.render_mode
    }
  },
  async asyncData ({ store, process }) {
    const api = new PostsAPI()
    const result = await api.getPosts().then(
      (posts) => {
        const postindex = posts.map(post => ({
          'title': post.title,
          'id': post.id,
          'slug': post.slug,
          'excerpt': post.excerpt,
          'feature_image': post.feature_image,
          'tags': post.tags
        }))
        return { posts: postindex }
      }
    )
    return result
  }
}
</script>

<style>
</style>
