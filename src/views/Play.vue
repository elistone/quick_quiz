<template>
    <layout-mobile :hideNav="true" class="play" :use-flexbox="gameTime">
      <JumbotronWrapper :use-flexbox="gameTime">
        <questions v-if="gameTime"/>
        <how-to-play v-if="!gameTime"/>
      </JumbotronWrapper>
    </layout-mobile>
</template>

<script>
import Questions from '@/components/Questions.vue';
import LayoutMobile from '@/layouts/LayoutMobile.vue';
import HowToPlay from '@/components/HowToPlay.vue';
import JumbotronWrapper from '@/layouts/components/JumbotronWrapper.vue';

export default {
  name: 'Home',
  components: {
    JumbotronWrapper,
    HowToPlay,
    LayoutMobile,
    Questions,
  },
  data() {
    return {
      gameTime: false,
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
