<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p v-html="post.html"></p>
  </div>
</template>

<script>
import { PostsAPI } from '~/api/posts_api'

export default {
  data () {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    post () {
      return this.$store.getters['blog/getPostBySlug'](this.slug)
    }
  },
  async fetch ({ params, store, error, payload }) {
    if (payload) {
      store.commit('blog/populatePost', payload)
    } else if (params.slug) {
      const post = store.getters['blog/getPostBySlug'](params.slug)
      if (post === undefined) {
        const api = new PostsAPI()
        await api.getPostBySlug(params.slug).then(
          (result) => {
            store.commit('blog/populatePost', result)
          }
        )
      }
    }
  }
}
</script>
