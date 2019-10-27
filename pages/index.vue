<template>
  <div class="container">
    <h1>Steve Test NUXT blog {{ renderMode }}</h1>
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
    }),
    renderMode () {
      return this.$store.state.blog.render_mode
    }
  },
  async fetch ({ store, process }) {
    const api = new PostsAPI()
    await api.getPosts().then(
      (posts) => {
        store.commit('blog/populatePosts', { posts, render_mode: process })
      }
    )
  }
}
</script>

<style>
</style>
