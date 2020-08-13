<template>
  <div>
    <PostList isAdmin :posts="loadData" />
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
  asyncData(conetext) {
    return axios
      .get("https://nuxt-tutorail.firebaseio.com/posts.json")
      .then((res) => {
        const data = [];
        for (const key in res.data) {
          data.push({ ...res.data[key], id: key });
        }
        return {
          loadData: data,
        };
      });
  },
  // methods: {
  //   async postsAll() {
  //     await this.getData().then((result) => {
  //       console.log(result);
  //     });
  //   },
  //   getData() {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         const data = axios
  //           .get("https://nuxt-tutorail.firebaseio.com/posts.json")
  //           .then((res) => {
  //             return res;
  //             // console.log(res);
  //           });
  //         resolve(data);
  //       }, 40000);
  //     });
  //   },
  // },
};
</script>