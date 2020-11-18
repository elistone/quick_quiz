<template>
  <div id="full-page-wrapper" class="container-fluid">
    <div class="row mb-5">
      <nav-bar :home-url="homeUrl" :show-back-button="showBackButton"/>
    </div>
    <b-container :fluid="isFluid" style="margin-bottom: 8rem;">
      <div class="row">
        <div class="col-sm-12 bg-faded">
          <slot/>
        </div>
      </div>
    </b-container>
    <Footer v-if="showFooter"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'LayoutDesktop',
  components: { NavBar, Footer },
  props: {
    showFooter: {
      type: Boolean,
      default: false,
    },
    isFluid: {
      type: Boolean,
      default: false,
    },
    homeUrl: {
      type: String,
      default: 'Host',
    },
    showBackButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .flex-fill {
    flex: 1 1 auto;
  }
</style>
