<template>
  <div>
    <ul>
      <nuxt-link :to="{name: 'articles-slug', params: {'slug': post.id}}">
        <li>{{ post.id }} - {{ post.title }}</li>
      </nuxt-link>
    </ul>
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
