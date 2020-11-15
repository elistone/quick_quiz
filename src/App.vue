<template>
  <div id="app" :class="[browserClass,isIosClass]">
    <layout-mode>
      <router-view/>
    </layout-mode>
  </div>
</template>
<script>
import LayoutMode from './layouts/LayoutMode.vue';

export default {
  name: 'App',
  components: { LayoutMode },
  props: {},
  data() {
    return {
      isDark: false,
    };
  },
  computed: {
    browserClass() {
      return `browser-${this.$browserDetect.meta.name.toLowerCase()}`;
    },
    isIosClass() {
      const isIos = this.$browserDetect.isIOS;
      return `ios-${isIos ? 'yes' : 'no'}`;
    },
  },
  methods: {},
};
</script>

<style lang="scss">

</style>
