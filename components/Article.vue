<template>
  <div>
    <h2>Article: {{ post.title }}</h2>
    <nuxt-link :to="{name: 'articles-slug', params: {'slug': post.id}}">
      {{ post.id }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
