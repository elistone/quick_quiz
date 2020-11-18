<template>
    <layout-desktop class="host" :show-footer="true" :show-back-button="true">
      <HostAQuiz/>
    </layout-desktop>
</template>

<script>
import HostAQuiz from '@/components/host/HostAQuiz.vue';
import LayoutDesktop from '../layouts/LayoutDesktop.vue';

export default {
  name: 'Host',
  components: {
    HostAQuiz,
    LayoutDesktop,
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
