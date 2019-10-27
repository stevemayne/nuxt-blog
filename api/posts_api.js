import axios from 'axios'

export class PostsAPI {
  constructor () {
    this.base_url = 'https://jsonplaceholder.typicode.com/'
  }

  async getPost (id) {
    const url = this.base_url + 'posts/' + id.toString()
    const post = await axios.get(url)
      .then((res) => {
        return res.data
      }, (error) => {
        throw new Error(error.message)
      })
    return post
  }

  async getPosts () {
    const url = this.base_url + 'posts'
    const data = await axios.get(url)
      .then((res) => {
        return res.data
      },
      (error) => {
        throw new Error(error.message)
      })
    return data
  }

  async routes () {
    const dynamicRoutes = await this.getPosts()
      .then((res) => {
        return res.map((post) => {
          return {
            route: '/articles/' + post.id,
            payload: post
          }
        })
      })
    return dynamicRoutes
  }
}
