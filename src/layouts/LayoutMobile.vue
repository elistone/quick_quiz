<template>
  <div class="mobile-layout">
    <main class="mobile-layout-main"><slot/></main>
  </div>
</template>

<script>
export default {
  name: 'LayoutMobile',
  components: {},
  props: {
    hideNav: {
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
.mobile-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  > * {
    padding: 10px;
  }

  .mobile-layout-main {
    flex-grow: 1;
    display: flex;
  }
}
.ios-yes{
  .mobile-layout {
    min-height: 85vh;
  }
}
</style>
