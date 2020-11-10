<template>
  <div class="audio-image-loader">
    <div class="loaded-container"
         :class="[loaded ? 'loaded' : 'loading', show ? 'show-content' : '']">
      <div class="image-container"
           :style="{ 'background-image':'url('+image+')'}"/>
      <b-alert class="alert-message" :show="!show" :variant="alertStatus">
        <span class="alert-title">Incoming {{ type }}!</span>
        <span class="loading" v-if="!loaded">Loading...</span>
        <span class="loaded" v-if="loaded">Loaded!</span>
        <Spinner v-if="!loaded"/>
        <Tick v-if="loaded"/>
        <span class="wait-message" v-if="loaded">(waiting for everyone else)</span>
      </b-alert>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/animated/Spinner.vue';
import Tick from '@/components/animated/Tick.vue';

export default {
  name: 'audio-image-loader',
  components: { Tick, Spinner },
  props: {},
  data() {
    return {
      type: 'Image',
      loaded: false,
      show: false,
      image: '',
      imageUrl: '',
    };
  },
  mounted() {
    this.loadImage();
  },
  computed: {
    alertStatus() {
      return this.loaded ? 'success' : 'info';
    },
  },
  methods: {
    loadImage() {
      this.imageUrl = 'https://wallpaperaccess.com/full/469892.jpg';
      this.image = '';
      const that = this;
      const highResImage = new Image();
      // eslint-disable-next-line func-names
      highResImage.onload = function () {
        that.image = that.imageUrl;
        that.loaded = true;
      };
      highResImage.src = this.imageUrl;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alert-message {
  width: 86%;
  max-width: 500px;
  text-align: center;

  .alert-title {
    display: block;
    font-size: 1.5rem;
  }

  .wait-message {
    font-size: 0.75rem;
  }
}

.audio-image-loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.loaded-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
}

.image-container {
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 10px;
  position: absolute;
  top: -9999px;
  width: 100px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 2s, visibility 2s;
}

.show-content {
  .image-container {
    width: 500px;
    position: static;
    top: auto;
    opacity: 1;
    visibility: visible;
  }
  .alert-message {
    display: none;
  }
}
</style>
