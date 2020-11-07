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
    height: 52px !important;
    width: 52px !important;
    font-size: 20px !important;
    display: inline-block;
  }

  @media only screen and (min-width: 375px) {
    .btn-letter {
      height: 65px !important;
      width: 65px !important;
      font-size: 25px !important;
    }
  }

  @media only screen and (min-width: 425px) {
    .btn-letter {
      height: 78px !important;
      width: 78px !important;
      font-size: 30px !important;
    }
  }

  @media only screen and (min-width: 768px) {
    .btn-letter {
      height: 120px !important;
      width: 120px !important;
      font-size: 50px !important;
    }
  }

  .col {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
</style>
