<template>
  <div class="container post">
    <div class="col-12">
      <img :src="post.feature_image">
      <h1>{{ post.title }}</h1>
      <p v-html="post.html" />
    </div>
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
  async asyncData ({ params, payload }) {
    if (payload) {
      return { post: payload }
    } else if (params.slug) {
      const api = new PostsAPI()
      const result = await api.getPostBySlug(params.slug).then(
        (result) => {
          return {
            post: result
          }
        }
      )
      return result
    }
  }
}
</script>

<style scoped>
.post img {
  width: 100%;
  height: auto;
}
</style>
