<script setup lang="ts">
import { useDebounceFn, onStartTyping } from '@vueuse/core'
import { usePostsStore } from "../stores";
import { storeToRefs } from "pinia";
import { ref } from 'vue';
import router from '../router';
const store = usePostsStore();
const { getAllPosts } = storeToRefs(store); 
const { fetchPosts } = store;
fetchPosts();
const searchTerm = ref<any>('');
const searchBox = ref<any>('');

const search = useDebounceFn(() => {
  store.$patch((state) => {
    state.term = searchTerm;
  });
}, 500)

function goToPost(id:number) {
  router.push({ name: 'Post', params: { id } })
}
onStartTyping(() => {
      if (!searchBox.value.active)
      searchBox.value.focus()
    })

</script>

<template>
  <div class="page-layout">
  <div class="search-box">
    <input class="searchbar" type="text" placeholder="Search.." @input="search" ref="searchBox" v-model="searchTerm">
    <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="search icon" class="button"/>
  </div>
  <div class="posts"> 

    <div v-for="post in getAllPosts" class="post-box" @click="goToPost(post.id)">
      <div> Title : {{post.title}} </div>
      <div> Body : {{post.body}} </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.page-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
}
.search-box {
  display: flex;
  width: 30vw;
  height: 50px;
  flex-direction: row;
  border: 1px solid #000;
  align-items: center;
  border-radius: 10px;
  position: fixed;
  background-color: #fff;
}
.searchbar {
  display: block;
  width: 95%;
  height: 50px;
  float: left;
  padding: 5px;
}

img {
  float: right;
  height: 30px;
  width: 30px;
  margin-right: 15px;
}
.posts {
  display: flex;
  width: 50vw;
  min-height: 50px;
  flex-direction: column;
  margin-top: 50px ;
}
.post-box {
  display: flex;
  border: 1px solid #000;
  width: 50vw;
  flex-direction: column;
  margin: 10px;
}
div {
    display: block;
  }
</style>
