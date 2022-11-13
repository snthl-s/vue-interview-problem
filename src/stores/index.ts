import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '../services'


interface State {
  postList: PostInfo[]
  post: PostInfo | null
  term: string | ''
}

export const usePostsStore = defineStore('posts', {
  state: (): State => {
    return {
      postList: [] as Array <PostInfo>,
      post: null,
      term: ''
    }
  },
  getters: {
    postListCount: (state) => state.postList.length,
    getPost: (state) => state.post,
    getPostsById: (state) => {
      return (id: number) => state.postList.find((post) => post.id === id)
    },
    getAllPosts: (state) => {
      return  state.postList.filter((post:PostInfo)=> post.title.includes(state.term) || post.body.includes(state.term) || !state.term );
    },
  },
  actions: {
    async fetchPostById(id: string) {
      console.log('Started Fetching');
      try {
        this.post = await api.get(id)
        console.log('postList', this.post);
      } catch (error) {
        console.log('error', error);
        // let the form component display the error
        return error
      }
    },
    async fetchPosts() {
      try {
        this.postList = await api.get('')
        console.log('postList', this.postList);
      } catch (error) {
        console.log('error', error);
        // let the form component display the error
        return error
      }
    },
  }
})

interface PostInfo {
  id: number
  title: string
  body: string
}