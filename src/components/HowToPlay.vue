<template>
  <div>
    <h2 class="text-center">How to play</h2>
    <VueSlickCarousel :arrows="true">
      <div class="slide-data">
        <h3>Title</h3>
        <img src="https://via.placeholder.com/200" />
        <p>Image</p>
      </div>
      <div class="slide-data">
        <h3>Title</h3>
        <img src="https://via.placeholder.com/200" />
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
  img {
    margin: 0 auto;
    margin-top: 1.5rem;
    min-height: 200px;
  }
  p {
    margin-top: 1.5rem;
  }
}
</style>
