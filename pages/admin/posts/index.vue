<template>
  <div>
    <PostList isAdmin :posts="loadData" />
  </div>
</template>
<script>
import PostList from "@/components/posts/PostList";
export default {
  layout: "coreLayout",
  components: {
    PostList,
  },
  data() {
    return {
      loadData: [
        {
          id: "1",
          title: "เที่ยวบ้านช้าง",
          content:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: "https://picsum.photos/600/300/?image=25",
        },
        {
          id: "2",
          title: "เที่ยวบ้านลิง",
          content:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: "https://picsum.photos/600/300/?image=35",
        },
        {
          id: "3",
          title: "เที่ยวบ้านหนู",
          content:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: "https://picsum.photos/600/300/?image=44",
        },
        {
          id: "4",
          title: "เที่ยวทะเล",
          content:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: "https://picsum.photos/600/300/?image=10",
        },
        {
          id: "5",
          title: "เที่ยวภูเขา",
          content:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: "https://picsum.photos/600/300/?image=23",
        },
        {
          id: "6",
          title: "เที่ยวน้ำตก",
          content:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: "https://picsum.photos/600/300/?image=55",
        },
      ],
    };
  },
};
</script>