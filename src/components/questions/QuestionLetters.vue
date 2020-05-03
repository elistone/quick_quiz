<template>
  <div>
    <b-row v-for="(group, id) in options" :key="id" class="letter-holder">
      <b-col v-for="char in group" :key="char" class="text-center">
        <b-button :disabled="locked || isSelected(char)"
                  @click="sendAnswer(char)"
                  :variant="isSelected(char) ? 'danger' : 'primary'"
                  :ref="'btn'+char"
                  class="btn-block btn-letter">
          {{char}}
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
const options = [
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L'],
  ['M', 'N', 'O', 'P'],
  ['R', 'S', 'T', 'U'],
  ['QV', 'W', 'Y', 'XZ'],
];

export default {
  name: 'QuestionLetters',
  props: {
    locked: {
      type: Boolean,
      default: false,
    },
    setAnswer: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options,
    };
  },
  methods: {
    sendAnswer(val) {
      if (!this.locked) {
        this.$emit('answer', val);
      }
    },
    isSelected(val) {
      return this.setAnswer.includes(val);
    },
  },
};
</script>

<style scoped lang="scss">
  .btn-letter {
    margin-bottom: 10px;
    height: 52px;
    width: 52px;
    font-size: 20px;
    display: inline-block;
  }

  @media only screen and (min-width: 375px) {
    .btn-letter {
      height: 66px;
      width: 66px;
      font-size: 25px;
    }
  }

  @media only screen and (min-width: 425px) {
    .btn-letter {
      height: 78px;
      width: 78px;
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 768px) {
    .btn-letter {
      height: 120px;
      width: 120px;
      font-size: 50px;
    }
  }

  .col {
    padding-right: 10px;
    padding-left: 10px;
  }
</style>
