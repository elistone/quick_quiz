<template>
  <div class="statistics">
    <b-card-group deck>
      <DashboardCard title="Game Code">
        {{ gameCode }}
        <b-button class="btn-sm" variant="success" v-on:click="copyGameCode">
          <b-icon-clipboard/>
        </b-button>
      </DashboardCard>
      <DashboardCard title="Players">{{ players }}</DashboardCard>
      <DashboardCard title="Leader">{{ leader }}</DashboardCard>
      <DashboardCard title="Time">{{ currentTime }}</DashboardCard>
    </b-card-group>
  </div>
</template>

<script>
import DashboardCard from '@/components/host/components/DashboardCard.vue';
import Utils from '@/utils/utils';

export default {
  name: 'Statistics',
  components: { DashboardCard },
  props: {
    gameCode: {
      type: String,
      default: '',
    },
    players: {
      type: Number,
      default: 0,
    },
    leader: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentTime: '00:00:00',
    };
  },
  created() {
    setInterval(this.getCurrentTime, 500);
  },
  computed: {},
  methods: {
    getCurrentTime() {
      const today = new Date();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      if (hours < 10) {
        hours = `0${hours}`;
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      this.currentTime = `${hours}:${minutes}:${seconds}`;
    },
    copyGameCode() {
      const host = Utils.getCurrentUrl();
      const url = `${host}/join#${this.gameCode}`;
      this.$clipboard(url);
      this.$bvToast.toast(`Quick url for "${this.gameCode}", copied to clipboard.`, {
        title: 'Copied to clipboard!',
        toaster: 'b-toaster-top-right',
        variant: 'info',
        solid: true,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
