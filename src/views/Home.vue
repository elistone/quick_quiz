<template>
  <layout-mobile class="home">
    <b-jumbotron class="text-center" header="Quiz Now" lead="Play online quizzes today!">
      <b-row>
        <b-col>
          <b-button variant="primary" class="btn-block" :to="{ name: 'Join' }">Join Quiz</b-button>
        </b-col>
        <b-col>
          <b-button variant="success" class="btn-block" :to="{ name: 'Host' }">Host Quiz</b-button>
        </b-col>
      </b-row>
    </b-jumbotron>
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import LayoutMobile from '../layouts/LayoutMobile.vue';

export default {
  name: 'Home',
  components: {
    LayoutMobile,
  },
};
</script>
