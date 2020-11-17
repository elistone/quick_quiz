<template>
  <div class="dashboard">
    <b-row class="buttons">
      <b-col md="2">
        <Sidebar />
      </b-col>
      <b-col md="10">
        <Statistics :game-code="gameCode" :players="players" :leader="leader"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Sidebar from '@/components/host/components/Sidebar.vue';
import Statistics from '@/components/host/components/Statistics.vue';

export default {
  name: 'Dashboard',
  components: { Statistics, Sidebar },
  data() {
    return {
      gameCode: 'HFGX',
      players: 0,
      leader: 'Unknown',
    };
  },
  mounted() {

  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
