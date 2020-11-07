<template>
  <layout-mobile class="home">
    <div class="jumbotron home-container text-center">
      <Logo/>
      <p class="lead">Play online quizzes today!</p>
      <b-row class="buttons">
        <b-col>
          <b-button variant="primary" class="btn-block" :to="{ name: 'Join' }">Join Quiz</b-button>
        </b-col>
        <b-col>
          <b-button variant="success" class="btn-block" :to="{ name: 'Host' }">Host Quiz</b-button>
        </b-col>
      </b-row>
    </div>
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/animated/Logo.vue';
import LayoutMobile from '../layouts/LayoutMobile.vue';

export default {
  name: 'Home',
  components: {
    Logo,
    LayoutMobile,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-container {
  flex: 1;
  display: flex;
  flex-direction: column;

  &.jumbotron {
    margin-bottom: 0;
  }

  > .lead {
    flex: 1;
  }
}
</style>
