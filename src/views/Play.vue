<template>
  <layout-mobile :hideNav="true" class="play" :use-flexbox="useFlexbox">
    <JumbotronWrapper :use-flexbox="useFlexbox">
      <questions v-if="currentGameState === gameStates.SHOW_QUESTION"/>
      <how-to-play v-if="currentGameState === gameStates.HOW_TO_PLAY"/>
      <scoreboard v-if="currentGameState === gameStates.SCOREBOARD"/>

      <template v-slot:footer>
        <b-row class="buttons" v-if="currentGameState === gameStates.HOW_TO_PLAY">
          <b-col>
            <b-button
              class="btn-block"
              variant="success"
              v-on:click="iKnowHowToPlay">I know how to play
            </b-button>
          </b-col>
        </b-row>
      </template>
    </JumbotronWrapper>
  </layout-mobile>
</template>

<script>
import Questions from '@/components/Questions.vue';
import LayoutMobile from '@/layouts/LayoutMobile.vue';
import HowToPlay from '@/components/HowToPlay.vue';
import JumbotronWrapper from '@/layouts/components/JumbotronWrapper.vue';
import Scoreboard from '@/components/Scoreboard.vue';

export default {
  name: 'Play',
  components: {
    Scoreboard,
    JumbotronWrapper,
    HowToPlay,
    LayoutMobile,
    Questions,
  },
  data() {
    return {};
  },
  computed: {
    gameStates() {
      return this.$store.state.constants.states;
    },
    currentGameState() {
      return this.$store.state.quiz.state;
    },
    useFlexbox() {
      return this.currentGameState !== this.gameStates.HOW_TO_PLAY;
    },
  },
  mounted() {
  },
  methods: {
    iKnowHowToPlay() {
      this.$store.commit('setQuizState', this.gameStates.SHOW_QUESTION);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
