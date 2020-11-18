<template>
  <layout-mobile :hideNav="true" class="buzzer">
    <JumbotronWrapper>
      <h2>Buzzer sound</h2>
      <song-selector/>
    </JumbotronWrapper>
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import JumbotronWrapper from '@/layouts/components/JumbotronWrapper.vue';
import LayoutMobile from '../layouts/LayoutMobile.vue';
import SongSelector from '../components/buzzer/SongSelector.vue';

export default {
  name: 'Buzzer',
  components: {
    JumbotronWrapper,
    SongSelector,
    LayoutMobile,
  },
  computed: {
    isHost() {
      return this.$store.state.player.hostPreview;
    },
  },
  created() {
    if (this.isHost) {
      this.$store.commit('setQuizState', this.$store.state.constants.states.SHOW_QUESTION);
      this.$router.push({ name: 'Play' });
    }
  },
};
</script>
