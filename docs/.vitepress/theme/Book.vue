<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter: data } = useData()
</script>

<template>
    <article class="xl:divide-y xl:divide-gray-200 dark:xl:divide-slate-200/5">
      <header class="pt-6 xl:pb-10 space-y-1 text-center">
        <h1
          class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
        >
          {{ data.title }}
        </h1>
        <h2 v-if="data.subtitle" class="text-xl leading-9 font-extrabold text-gray-700 dark:text-gray-500 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            {{ data.subtitle }}
        </h2>
      </header>
  
      <div
        class="divide-y xl:divide-y-0 divide-gray-200 dark:divide-slate-200/5 xl:grid xl:grid-cols-4 xl:gap-x-10 pb-16 xl:pb-20"
        style="grid-template-rows: auto 1fr"
      >
        <div
          class="divide-y divide-gray-200 dark:divide-slate-200/5 xl:pb-0 xl:col-span-3 xl:row-span-2"
        >
          <Content class="prose dark:prose-invert max-w-none pt-10 pb-8" />
        </div>
  
        <footer
          class="text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-slate-200/5 xl:col-start-1 xl:row-start-2"
        >
          <div class="pt-8">
            <a class="link" href="/">← Back to the blog</a>
          </div>
        </footer>
      </div>
    </article>
  </template>
  