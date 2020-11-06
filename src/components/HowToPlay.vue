<template>
  <div>
    <h2 class="text-center">How to play</h2>
    <VueSlickCarousel :arrows="false" :autoplay="true" :autoplaySpeed="5000">
      <div class="slide-data">
        <h3>Title</h3>
        <div class="slide-data-image" :style="{'background-image':'url(https://via.placeholder.com/600)'}"></div>
        <p>Image</p>
      </div>
      <div class="slide-data">
        <h3>Title</h3>
        <div class="slide-data-image" :style="{'background-image':'url(https://via.placeholder.com/600)'}"></div>
        <p>Image</p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'HowToPlay',
  components: { VueSlickCarousel },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slick-slider {
  margin-top: 2rem;
}
.slide-data {
  h3 {

  }
  .slide-data-image {
    margin: 1.5rem auto 0;
    padding-top: 75%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  p {
    margin-top: 1.5rem;
  }
}
</style>
