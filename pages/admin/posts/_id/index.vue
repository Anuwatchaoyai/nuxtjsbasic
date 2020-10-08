<template>
  <div>
    <AdminForm @sendData="onSubmitted" :post="singlePost" />
  </div>
</template>
<script>
import AdminForm from "@/components/admin/AdminForm";
import axios from "axios";
export default {
  components: {
    AdminForm,
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
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("editPost", postData).then(() => {
        this.$router.push("/admin/");
      });
    },
  },
};
</script>