<template>
    <layout-desktop class="host" :show-footer="true" :show-back-button="true">
      <b-row class="host-blocks">
        <b-col>
            <HostAQuizBlock />
        </b-col>
        <b-col>
            <CreateQuestionsBlock />
        </b-col>
      </b-row>
    </layout-desktop>
</template>

<script>
import HostAQuizBlock from '@/components/host/components/HostAQuizBlock.vue';
import CreateQuestionsBlock from '@/components/host/components/CreateQuestionsBlock.vue';
import LayoutDesktop from '../layouts/LayoutDesktop.vue';

export default {
  name: 'Host',
  components: {
    CreateQuestionsBlock,
    HostAQuizBlock,
    LayoutDesktop,
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
