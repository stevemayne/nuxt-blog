export const state = () => ({
  currentPost: {},
  posts: []
})

export const getters = {
  postsToGenerate: (state) => {
    return state.posts
  },
  getCurrentPost (state) {
    return state.currentPost
  },
  getPost (state) {
    return (id) => {
      const matching = state.posts.filter(post => (post.id.toString() === id.toString()))
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
    state.posts = posts
  },
  populatePost (state, post) {
    for (let i = 0; i < state.posts.length; i++) {
      if (state.posts[i].id === post.id) {
        state.posts.splice(i, 1)
        break
      }
    }
    state.posts.push(post)
  }
}
