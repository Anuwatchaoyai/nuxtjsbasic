<template>
  <div>
    <SinglePost :post="singlePost" />
  </div>
</template>
<script>
import SinglePost from "@/components/posts/SinglePost";
import axios from "axios";
export default {
  components: {
    SinglePost,
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-tutorail.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then((res) => {
        return {
          singlePost: {
            ...res.data,
            id: context.params.id,
          },
        };
      })
      .catch((e) => context.error(e));
  },
};
</script>