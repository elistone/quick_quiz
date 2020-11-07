<template>
  <div class="spinner">
    <span class="ball-1"></span>
    <span class="ball-2"></span>
    <span class="ball-3"></span>
    <span class="ball-4"></span>
    <span class="ball-5"></span>
    <span class="ball-6"></span>
    <span class="ball-7"></span>
    <span class="ball-8"></span>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  components: {},
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
$colors:
  #2196F3,
  #03A9F4,
  #00BCD4,
  #009688,
  #4CAF50,
  #8BC34A,
  #CDDC39,
  #FFEB3B;

.spinner {
  position: relative;
  height: 60px;
  width: 60px;
  margin: 10px auto;
}

[class^="ball-"] {
  position: absolute;
  display: block;
  left: 30px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  transition: all 0.5s;
  animation: circleRotate 4s both infinite;
  transform-origin: 0 250% 0;
}

@keyframes circleRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1440deg);
  }
}

@for $i from 1 through 8 {
  .ball-#{$i} {
    z-index: -#{$i};
    background-color: nth($colors, $i);
    animation-timing-function: cubic-bezier(0.5, 0.3 * $i, 0.9, 0.9);
  }
}
</style>
