<template>
  <div>
    <b-row>
      <b-col>
        <div class="screen text-truncate">{{numbersValue}}</div>
      </b-col>
    </b-row>
    <b-row v-for="(group,id) in options" :key="id" class="letter-holder">
      <b-col v-for="char in group" :key="char" class="text-center">
        <b-button
          :disabled="isLocked(char)"
          @click="isPressed(char)"
          :ref="'btn'+char"
          :variant="styleButtons(char)"
          class="btn-block btn-letter">
          {{char}}
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Utils from '../../utils/utils';

const options = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['C', '0', 'enter'],
];

export default {
  name: 'QuestionNumbers',
  props: {
    locked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      options,
      selected: [],
      numLimit: 10,
    };
  },
  computed: {
    numbersValue() {
      return this.selected.join('');
    },
    canEnterNumbers() {
      if (this.numLimit < 0) {
        return true;
      }

      return this.selected.length < this.numLimit;
    },
  },
  methods: {
    sendAnswer() {
      if (!this.locked) {
        this.$emit('answer', this.numbersValue);
      }
    },
    isPressed(val) {
      if (!this.locked) {
        if (val === 'C') {
          this.selected.pop();
        } else if (val === 'enter') {
          this.sendAnswer();
        } else {
          this.selected.push(val);
        }
      }
    },
    isLocked(val) {
      let locked = false;
      if (this.locked) {
        locked = true;
      }

      if (!locked && Utils.isNumber(val)) {
        locked = !this.canEnterNumbers;
      }

      return locked;
    },
    styleButtons(val) {
      if (val === 'C') {
        return 'danger';
      }
      if (val === 'enter') {
        return 'info';
      }
      return 'primary';
    },
  },
};
</script>

<style scoped lang="scss">
  .screen {
    border-radius: 0.25rem;
    background-color: darkgray;
    color: white;
    padding: 20px 35px;
    margin-bottom: 20px;
    text-align: right;
    font-size: 30px;
    height: 80px;
    @media only screen and (min-width: 425px) {
      .screen {
        padding: 25px 50px;
        font-size: 35px;
      }
    }
    @media only screen and (min-width: 768px) {
      height: 120px;
      padding: 30px 50px;
      font-size: 40px;
    }
  }

  .btn-letter {
    margin-bottom: 10px;
    height: 75px;
    width: 75px;
    font-size: 20px;
    display: inline-block;
    @media only screen and (min-width: 375px) {
      height: 90px;
      width: 90px;
      font-size: 25px;
    }
    @media only screen and (min-width: 425px) {
      height: 110px;
      width: 110px;
      font-size: 30px;
    }
    @media only screen and (min-width: 768px) {
      height: 140px;
      width: 140px;
      font-size: 50px;
    }
  }

  .col {
    padding-right: 10px;
    padding-left: 10px;
  }
</style>
