<template>
  <div class="dashboard">
    <b-row class="buttons">
      <b-col md="2">
        <Sidebar />
      </b-col>
      <b-col md="6">
        <Statistics :game-code="gameCode" :players="players" :leader="leader"/>
        <DashboardQuestions />
      </b-col>
      <b-col md="4">
        <MobileView :game-code="gameCode" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Sidebar from '@/components/host/components/Sidebar.vue';
import Statistics from '@/components/host/components/Statistics.vue';
import MobileView from '@/components/host/components/MobileView.vue';
import DashboardQuestions from '@/components/host/components/DashboardQuestions.vue';

export default {
  name: 'Dashboard',
  components: {
    DashboardQuestions, MobileView, Statistics, Sidebar,
  },
  data() {
    return {
      players: 0,
      leader: 'Unknown',
    };
  },
  mounted() {

  },
  computed: {
    gameCode() {
      return this.$store.state.quiz.gameId;
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
