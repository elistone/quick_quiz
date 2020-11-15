<template>
    <layout-desktop class="host">
      <Dashboard />
    </layout-desktop>
</template>

<script>
import Dashboard from '@/components/host/Dashboard.vue';
import LayoutDesktop from '../layouts/LayoutDesktop.vue';

export default {
  name: 'Host',
  components: {
    Dashboard,
    LayoutDesktop,
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
