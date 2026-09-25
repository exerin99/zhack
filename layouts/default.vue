<script setup="ts">
useSeoMeta({
  ogImage: '/cover.png',
  twitterTitle: 'ZHack',
  twitterDescription: 'Автоматическое, быстрое и удобное выполнение карточек для Uchi.ru',
  twitterImage: '/cover.png',
  twitterCard: 'app',
  description: 'Автоматическое, быстрое и удобное выполнение карточек для Uchi.ru',
  ogTitle: 'ZHack',
  ogDescription: 'Автоматическое, быстрое и удобное выполнение карточек для Uchi.ru',
  ogUrl: ''
})

useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  title: 'ZHack',
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ],
  meta: [
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'article:author',
      content: `ZHack`
    },
    {
        name: 'theme-color',
        content: '#0A0A0A'
    }
]
})
</script>

<template>
    <ZHeader/>
    <slot/>
    <ZFooter/>
</template>