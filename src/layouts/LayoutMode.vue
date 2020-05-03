<template>
  <div class="layout-mode" v-cloak>
    <slot/>
  </div>
</template>

<script>
const darkTheme = () => import('@/assets/scss/custom_dark.scss');
const lightTheme = () => import('@/assets/scss/custom_light.scss');

export default {
  name: 'LayoutMode',
  components: {},
  props: {},
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

</style>
