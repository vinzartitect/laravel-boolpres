<template>
    <div>
        <!-- loader -->
        <Loader v-if="isLoading" />

        <div v-if="posts.length">
            <!-- inseriamo il componente della pagination -->
            <Pagination :pagination="pagination" />

            <div class="card text-center" v-for="post in posts" :key="post.id">
                <div class="card-header">
                    {{ post.title }} - Category: {{ post.category.label }}
                </div>
                <div class="card-body">
                    <p class="card-title">
                        <span
                            v-for="tag in post.tags"
                            :key="tag.id"
                            class="badge"
                            :style="`background-color: ${tag.color}`"
                            >{{ tag.label }}</span
                        >
                    </p>
                    <p class="card-text">{{ post.content }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">2 days ago</div>
            </div>
        </div>
        <p v-else>Non ci sono post</p>
    </div>
</template>

<script>
import axios from "axios";
import Loader from "../Loader.vue";
import Pagination from "../Pagination.vue";
export default {
    name: "PostsList",
    components: {
        Loader,
        Pagination,
    },
    data() {
        return {
            posts: [],
            pagination: {},
            isLoading: true,
        };
    },
    methods: {
        getPosts() {
            axios
                .get("http://127.0.0.1:8000/api/posts")
                .then((res) => {
                    // console.log( res.data.posts.data );

                    // destrutturizzazione
                    const { data, current_page, last_page } = res.data.posts;

                    // console.log(data);
                    // console.log(current_page);
                    // console.log(last_page);

                    this.posts = data;

                    // struttura chiavi valori
                    this.pagination = {
                        lastPage: last_page,
                        currentPage: current_page,
                    };
                })
                .then(() => {
                    console.log("terminato il caricamento dei posts");
                    this.isLoading = false;
                });
        },
    },
    mounted() {
        this.getPosts();
    },
};
</script>

<style scoped></style>
