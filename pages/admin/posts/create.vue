<template>
  <div>
    <AdminForm @sendData="onSubmitted" />
  </div>
</template>
<script>
import AdminForm from "@/components/admin/AdminForm";
import axios from "axios";
export default {
  components: {
    AdminForm,
  },
  methods: {
    onSubmitted(postData) {
      axios
        .post("https://nuxt-tutorail.firebaseio.com/posts.json", postData)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>