<template>
  <b-navbar style="width: 100%;" toggleable type="dark" variant="dark">
    <b-navbar-brand :to="{ name: 'Home' }">Quiz Now</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="x"></b-icon>
        <b-icon v-else icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'Host'}">Host a game?</b-nav-item>
        <b-nav-item href="#" @click="toggleDarkMode">{{darkModeText}}</b-nav-item>
        <b-nav-item><small>Version: v{{version}}</small></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { version } from '../../../package.json';

export default {
  name: 'NavBar',
  components: {},
  props: {},
  data() {
    return {
      version,
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
    darkModeText() {
      return this.darkMode ? 'Dark mode off' : 'Dark mode on';
    },
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
