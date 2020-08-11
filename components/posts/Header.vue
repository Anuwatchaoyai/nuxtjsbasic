<template>
  <div>
    <b-carousel id="slider" controls indicators>
      <div v-for="slide in items" :key="slide.cpation">
        <b-carousel-slide :caption="slide.caption" :text="slide.text" :img-src="slide.image"></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          caption: "A",
          image: require("@/assets/images/p1.jpg"),
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
          caption: "B",
          image: require("@/assets/images/p2.jpg"),
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
          caption: "C",
          image: require("@/assets/images/p3.jpg"),
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
      ],
    };
  },
};
</script>