<template>
  <div class="dashboard">
    <b-row class="buttons">
      <b-col cols="2">
        <b-nav vertical class="w-25">
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </b-col>
      <b-col>
        <b-card-group deck>
          <DashboardCard title="Game Code">{{ gameCode }}</DashboardCard>
          <DashboardCard title="Players">{{ players }}</DashboardCard>
          <DashboardCard title="Leader">{{ leader }}</DashboardCard>
          <DashboardCard title="Time">{{ currentTime }}</DashboardCard>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DashboardCard from '@/components/other/DashboardCard.vue';

export default {
  name: 'Dashboard',
  components: { DashboardCard },
  data() {
    return {
      gameCode: 'HFGX',
      players: '0',
      leader: 'Unknown',
      currentTime: '22:37:21',
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
