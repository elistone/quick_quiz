<template>
  <div class="animated-logo">
    <svg viewBox="0 0 600 190">
      <!-- Symbol-->
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em">Quiz Now</text>
      </symbol>
      <!-- Duplicate symbols-->
      <use class="text" xlink:href="#s-text"></use>
      <use class="text" xlink:href="#s-text"></use>
      <use class="text" xlink:href="#s-text"></use>
      <use class="text" xlink:href="#s-text"></use>
      <use class="text" xlink:href="#s-text"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Logo',
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
$colors: #F2385A, #F5A503, #E9F1DF, #56D9CD, #3AA1BF;
$max: length($colors);
$dash: 70;
$dash-gap: 10;
$dash-space: $dash * ($max - 1) + $dash-gap * $max;
$time: 6s;
$time-step: $time/$max;

/* Main styles */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

.animated-logo{
  font: 6.5em/1 Open Sans, Impact;
  text-transform: uppercase;
  margin: 0;
  margin-top: -2rem;
}

.text {
  fill: none;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-dasharray: $dash $dash-space;
  stroke-dashoffset: 0;
  -webkit-animation: stroke $time infinite linear;
  animation: stroke $time infinite linear;

  @for $item from 1 through $max {
    &:nth-child(#{$max}n + #{$item}) {
      $color: nth($colors, $item);
      stroke: $color;
      -webkit-animation-delay: -($time-step * $item);
      animation-delay: -($time-step * $item);
    }
  }
}

@-webkit-keyframes stroke {
  100% {
    stroke-dashoffset: -($dash + $dash-gap) * $max;
  }
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -($dash + $dash-gap) * $max;
  }
}
</style>
