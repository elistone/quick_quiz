<template>
    <layout-mobile :hideNav="true" :autoplay="true" :centerMode="true" class="play">
      <how-to-play v-if="!gameTime"/>
      <questions v-if="gameTime"/>
    </layout-mobile>
</template>

<script>
import Questions from '@/components/Questions.vue';
import LayoutMobile from '@/layouts/LayoutMobile.vue';
import HowToPlay from '@/components/HowToPlay.vue';

export default {
  name: 'Home',
  components: {
    HowToPlay,
    LayoutMobile,
    Questions,
  },
  data() {
    return {
      gameTime: true,
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
