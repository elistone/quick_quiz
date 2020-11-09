<template>
  <div class="toggle open">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         x="0px" y="0px"
         viewBox="0 0 56.7 57" enable-background="new 0 0 56.7 57" xml:space="preserve">
  <path
    class="retract"
    fill="none"
    stroke="#f1f1f1"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    d="M36,6.3c5.7,2.1,10.2,6.2,12.9,11.1"/>
      <path
        fill="none"
        stroke="#f1f1f1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        d="M48.9,17.4c3.1,5.8,3.9,12.9,1.4,19.7c-4.6,12.4-18.4,
        18.8-30.8,14.3S0.7,33,5.2,20.5S23.6,1.7,36,6.3"/>
      <polyline class="tick" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="10" points="
    20.3,25.4 28.6,33.9 46.7,8.3 "/>
  </svg>
  </div>
</template>

<script>
export default {
  name: 'Tick',
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
$timing: 1.5s;
$easing: cubic-bezier(0.190, 1.000, 0.220, 1.000);

svg {
  display: block;
  margin: 0 auto;
}

.toggle {
  cursor: pointer;
  background: rgb(238,86,38);
  padding: 1em;
  border-radius: 100%;
  display: table;
  width: 70px;
  transition: background 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955);
  margin: 10px auto;
  z-index: 10000;
}

.toggle.open {
  background: rgb(74,228,191);
}

.tick {
  stroke-dasharray: 44;
  stroke-dashoffset: 44;
}

.open .retract {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: retract $timing $easing forwards 1;
}

.open .tick {
  animation: dash $timing $easing forwards 1;
}

@keyframes dash {
  from {
    stroke-dashoffset: 44;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes retract {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 20;
  }
}
</style>
