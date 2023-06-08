<script setup></script>

<template>
    <main id="entries">
        <ContentList v-slot="{ list }">
            <div class="p-article" v-for="article in list" :key="article._path">
                <NuxtLink :to="'/post/' + article.slug.toLowerCase()">
                    <div class="p-article__thumbnail">
                        <img :src="article.thumbnail" alt="" />
                    </div>
                    <div class="p-article__entry">
                        <h2>{{ article.title }}</h2>
                        <p>{{ article.description }}</p>
                    </div>
                </NuxtLink>
            </div>
        </ContentList>
    </main>
</template>
