<script setup lang="ts">
import { usePostsStore } from "../stores";
import { storeToRefs } from "pinia";

const props = defineProps({
  id: String
})

const store = usePostsStore();
const { getPost } = storeToRefs(store);
const { fetchPostById } = store;
fetchPostById(`${props.id}`);
</script>

<template>
 <h1>
    Post {{ id}} {{getPost}}
 </h1>
</template>

<style scoped>

</style>
