<template>
  <div class="layout-mode" v-cloak>
    <transition :name="transitionName" mode="out-in">
      <slot/>
    </transition>
  </div>
</template>

<script>
const darkTheme = () => import('@/assets/scss/custom_dark.scss');
const lightTheme = () => import('@/assets/scss/custom_light.scss');

export default {
  name: 'LayoutMode',
  components: {},
  props: {
    transitionName: {
      type: String,
      default: 'none',
    },
  },
  data() {
    return {
      hidden: true,
    };
  },
  computed: {
    darkMode: {
      set(mode) {
        this.$store.commit('setDarkMode', mode);
      },
      get() {
        return this.$store.state.darkMode;
      },
    },
  },
  watch: {
    darkMode() {
      this.setBodyClass();
    },
  },
  methods: {
    loadThemes() {
      darkTheme();
      lightTheme();
      this.setBodyClass();
    },
    setBodyClass() {
      const el = document.body;
      const darkMode = 'layout-mode-dark';
      const lightMode = 'layout-mode-light';

      if (this.darkMode) {
        el.classList.add(darkMode);
        el.classList.remove(lightMode);
      } else {
        el.classList.add(lightMode);
        el.classList.remove(darkMode);
      }
    },
  },
  mounted() {
    this.loadThemes();
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.25s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
