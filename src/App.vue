<template>
  <div id="app">
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
  computed: {},
  methods: {},
};
</script>

<style lang="scss"></style>
