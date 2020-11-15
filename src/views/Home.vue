<template>
  <layout-mobile :show-footer="true" class="home">
    <JumbotronWrapper>
      <Logo/>
      <p class="lead text-center">
        <span class="text-play">Play</span>&nbsp;
        <span class="text-quizzes">quizzes</span>&nbsp;
        <span class="text-online">online</span>&nbsp;
        <span class="text-now">now!</span>
      </p>

      <template v-slot:footer>
        <b-row class="buttons">
          <b-col>
            <b-button
              variant="success"
              class="btn-block"
              :to="{ name: 'Host' }">Host Quiz
            </b-button>
          </b-col>
          <b-col>
            <b-button
              variant="primary"
              class="btn-block"
              :to="{ name: 'Join' }">Join Quiz
            </b-button>
          </b-col>
        </b-row>
      </template>
    </JumbotronWrapper>
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/animated/Logo.vue';
import JumbotronWrapper from '@/layouts/components/JumbotronWrapper.vue';
import LayoutMobile from '../layouts/LayoutMobile.vue';

export default {
  name: 'Home',
  components: {
    JumbotronWrapper,
    Logo,
    LayoutMobile,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
