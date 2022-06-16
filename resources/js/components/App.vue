<template>
    <div>
        <Header />
        <main>
            <div class="container">
                <PostsList />
            </div>
        </main>
    </div>
</template>

<script>
import Header from "./Header.vue";
import PostsList from "./posts/PostsList.vue";
export default {
    name: "App",
    components: {
        Header,
        PostsList,
    },
};
</script>
