<template>
  <b-container fluid>
    <Header />
    <PostList :posts="loadData" />
  </b-container>
</template>
<script>
import Header from "@/components/posts/Header";
import PostList from "@/components/posts/PostList";
export default {
  layout: "coreLayout",
  components: {
    Header,
    PostList,
  },
  computed: {
    loadData() {
      return this.$store.getters.getAllPosts;
    },
  },
};
</script>