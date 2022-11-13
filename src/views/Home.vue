<script setup lang="ts">
import SearchPost from '../components/SearchPost.vue';
</script>

<template>
   <div class="post-layout">
    <search-post></search-post>
    </div>
</template>

<style scoped>

.post-layout {
  display: flex;
  position: absolute;
  top: 20px;
  left:0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  
}
</style>
