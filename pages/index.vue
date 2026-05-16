<script setup>
const { data: pages } = await useAsyncData('pages', () =>
  queryContent('pages').where({ status: 'published' }).find()
)
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('blog').where({ status: 'published' }).sort({ publishedAt: -1 }).find()
)
</script>
<template>
  <main>
    <h1>Jasonjozwiak.com</h1>
    <section v-if="posts?.length">
      <h2>Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </section>
    <section v-if="pages?.length">
      <h2>Pages</h2>
      <ul>
        <li v-for="page in pages" :key="page._path">
          <NuxtLink :to="page._path">{{ page.title }}</NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
