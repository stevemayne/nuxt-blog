<template>
  <div class="container post">
    <h1>
      <nuxt-link :to="{name: 'index'}">
        Steve Test Static Blog
      </nuxt-link>
    </h1>
    <div class="col-12">
      <img :src="post.feature_image">
      <h1>{{ post.title }}</h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
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
      const data = await api.getPostBySlug(params.slug).then(
        (result) => {
          return {
            post: result
          }
        }
      )
      return data
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
