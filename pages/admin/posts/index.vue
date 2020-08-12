<template>
  <div>
    <PostList isAdmin :posts="loadData" />
    <b-button @click="postsAll">Load...</b-button>
  </div>
</template>
<script>
import PostList from "@/components/posts/PostList";
import axios from "axios";
export default {
  layout: "coreLayout",
  components: {
    PostList,
  },
  data() {
    return {
      loadData: [],
    };
  },
  methods: {
    async postsAll() {
      await axios
        .get("https://nuxt-tutorail.firebaseio.com/posts.json")
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>