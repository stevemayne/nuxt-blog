export const state = () => ({
  currentPost: {},
  posts: [],
  render_mode: ''
})

export const getters = {
  postsToGenerate: (state) => {
    return state.posts
  },
  getCurrentPost (state) {
    return state.currentPost
  },
  getPostBySlug (state) {
    return (slug) => {
      const matching = state.posts.filter(post => (post.slug.toString() === slug.toString()))
      if (matching.length > 0) {
        return matching[0]
      }
    }
  }
}

export const mutations = {
  setCurrentPost (state, currentPost) {
    state.currentPost = currentPost
  },
  populatePosts (state, posts) {
    state.render_mode = posts.render_mode
    state.posts = posts.posts
  },
  populatePost (state, post) {
    for (let i = 0; i < state.posts.length; i++) {
      if (state.posts[i].slug === post.slug) {
        state.posts.splice(i, 1)
        break
      }
    }
    state.posts.push(post)
  }
}
