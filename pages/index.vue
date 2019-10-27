<template>
  <div class="container">
    <h1>Steve Test NUXT blog</h1>
    <blog-article v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Article from '../components/Article.vue'
import { PostsAPI } from '../api/posts_api'

export default {
  components: {
    'blog-article': Article
  },
  computed: {
    ...mapGetters({
      posts: 'blog/postsToGenerate'
    })
  },
  async fetch ({ params, store, error }) {
    const api = new PostsAPI()
    await api.getPosts().then(
      (result) => {
        store.commit('blog/populatePosts', result)
      }
    )
  }
}
</script>

<style>
</style>
