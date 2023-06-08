<script setup lang="ts"></script>

<template>
    <main id="entries">
        <ContentList v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <NuxtLink :to="'/post/' + article.title.toLowerCase()"> 記事へ </NuxtLink>
            </div>
        </ContentList>
    </main>
</template>
