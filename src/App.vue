<template>
  <div id="app" :class="[browserClass,isIosClass]">
    <layout-mode :transition-name="transitionName">
      <router-view/>
    </layout-mode>
  </div>
</template>
<script>
import LayoutMode from './layouts/LayoutMode.vue';

const DEFAULT_TRANSITION = 'none';

export default {
  name: 'App',
  components: { LayoutMode },
  props: {},
  data() {
    return {
      isDark: false,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      if (transitionName === 'slide') {
        const toPath = to.path === '/' ? '' : to.path;
        const fromPath = from.path === '/' ? '' : from.path;
        const toDepth = toPath.split('/').length;
        const fromDepth = fromPath.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
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
