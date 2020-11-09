<template>
  <div class="questions">
    <timer v-if="questionSelectedType !== questionType.NONE" />
    <div class="question-wrapper" v-if="questionSelectedType !== questionType.NONE">
      <question-letters
        @answer="submitAnswer"
        :locked="isLocked"
        :setAnswer="answer"
        v-if="questionSelectedType === questionType.LETTERS"
      />
      <question-numbers
        @answer="submitAnswer"
        :locked="isLocked"
        :setAnswer="answer"
        v-if="questionSelectedType === questionType.NUMBERS"
      />
      <question-multiple
        @answer="submitAnswer"
        :locked="isLocked"
        :setAnswer="answer"
        v-if="questionSelectedType === questionType.MULTIPLE"
      />
      <question-buzzer
        @answer="submitAnswer"
        :locked="isLocked"
        v-if="questionSelectedType === questionType.BUZZER"
      />
      <AudioImageLoader />
    </div>
    <div class="center" v-if="questionSelectedType === questionType.NONE">
      <b-alert :show="questionSelectedType === questionType.NONE">
        Waiting for question...
        <spinner />
      </b-alert>
    </div>
  </div>
</template>

<script>
import Timer from '@/components/Timer.vue';
import QuestionLetters from '@/components/questions/QuestionLetters.vue';
import QuestionNumbers from '@/components/questions/QuestionNumbers.vue';
import QuestionMultiple from '@/components/questions/QuestionMultiple.vue';
import Spinner from '@/components/animated/Spinner.vue';
import AudioImageLoader from '@/components/other/AudioImageLoader.vue';
import QuestionBuzzer from './questions/QuestionBuzzer.vue';

export default {
  name: 'Questions',
  components: {
    AudioImageLoader,
    Spinner,
    Timer,
    QuestionBuzzer,
    QuestionMultiple,
    QuestionNumbers,
    QuestionLetters,
  },
  computed: {
    questionSelectedType() {
      return this.$store.state.player.question.type;
    },
    questionType() {
      return this.$store.state.constants.questionType;
    },
    isLocked() {
      return this.$store.state.player.locked;
    },
    answer: {
      set(answer) {
        this.$store.dispatch('playerAnswer', answer);
      },
      get() {
        return this.$store.state.player.answer;
      },
    },
  },
  methods: {
    submitAnswer(val) {
      // console.log('submit answer');
      this.answer = val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .question-wrapper{
    max-width: 768px;
    margin: 0 auto;
  }

  .center {
    position: relative;
    height: 250px;
    .alert {
      text-align: center;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
</style>
