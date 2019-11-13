import GhostContentAPI from '@tryghost/content-api'

export class PostsAPI {
  constructor () {
    this.api = new GhostContentAPI({
      url: process.env.GHOST_URI,
      key: process.env.GHOST_KEY,
      version: 'v3'
    })
  }

  async getPostBySlug (slug) {
    const result = await this.api.posts.read({ slug }, { formats: ['html'] })
    return result
  }

  async getPosts () {
    const result = await this.api.posts.browse({ limit: 10, include: 'tags,authors' })
      .then((posts) => {
        return posts
      })
      .catch((message) => {
      })
    return result
  }

  async routes () {
    const dynamicRoutes = await this.getPosts()
      .then((res) => {
        return res.map((post) => {
          return {
            route: '/articles/' + post.slug,
            payload: post
          }
        })
      })
    return dynamicRoutes
  }
}
