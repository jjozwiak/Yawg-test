<script setup>
const { data: posts } = await useAsyncData('blog-list', () =>
  queryContent('blog').where({ status: 'published' }).sort({ publishedAt: -1 }).find()
)
</script>
<template>
  <main>
    <h1>Blog</h1>
    <ul v-if="posts?.length">
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
    <p v-else>No posts yet.</p>
  </main>
</template>
