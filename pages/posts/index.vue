<template>
  <b-container fluid>
    <Header />
    <b-container>
      <b-row class="py-5">
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
import Header from "@/components/posts/Header";
import PostContent from "@/components/posts/PostContent";
export default {
  layout: "coreLayout",
  components: {
    Header,
    PostContent,
  },
};
</script>