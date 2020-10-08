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
      this.$store.dispatch("addPost", postData).then(() => {
        this.$route.push("/admin/posts");
      });
    },
  },
};
</script>