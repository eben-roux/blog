<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Book from './Book.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
    <div class="antialiased dark:bg-slate-900">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <nav class="flex justify-between items-center py-10 font-bold">
                <a class="text-xl" href="/" aria-label="The Vue Point">
                    <img class="inline-block mr-2 w-10 h-10 rounded-full" alt="logo"
                        src="https://www.gravatar.com/avatar/b7e03f86009c412446cfa81cbe5c000009ffb67ec7585806aee387294e27d023?s=80&d=identicon" />
                    <span class="hidden md:inline dark:text-white">Eben Roux</span>
                </a>
                <div class="text-sm text-gray-500 dark:text-white leading-5 flex items-center">
                    <a class="hover:text-gray-700 dark:hover:text-gray-200" href="/books/hard-edges" rel="noopener">Hard
                        Edges</a>
                    <span class="mr-2 ml-2">·</span>
                    <a class="hover:text-gray-700 dark:hover:text-gray-200" href="https://www.pendel.co.za/"
                        target="_blank" rel="noopener">Shuttle</a>
                    <span class="mr-2 ml-2">·</span>
                    <a class="hover:text-gray-700 dark:hover:text-gray-200" href="/Eben Roux - Resume.pdf"
                        target="_blank" rel="noopener">Resume</a>
                    <span class="mr-2 ml-2">·</span>
                    <a class="hover:text-gray-700 dark:hover:text-gray-200" href="https://discord.gg/QypKQP4ABq"
                        target="_blank" rel="noopener">
                        <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 146">
                            <title>Discord</title>
                            <path
                                d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
                                fill-rule="nonzero"></path>
                        </svg> </a>
                    <span class="mr-2"></span>
                    <a class="hover:text-gray-700 dark:hover:text-gray-200" href="https://github.com/eben-roux/blog"
                        target="_blank" rel="noopener">
                        <svg class="inline fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <title>GitHub</title>
                            <path
                                d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0">
                            </path>
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
        <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Home v-if="frontmatter.index" />
            <NotFound v-else-if="page.isNotFound" />
            <Book v-else-if="frontmatter.layout === 'book'" />
            <Article v-else />
        </main>
    </div>
</template>
