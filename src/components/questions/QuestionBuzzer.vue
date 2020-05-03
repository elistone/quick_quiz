<template>
  <div>
    <b-button variant="primary"
              class="btn-block btn-full-height"
              ref="btnPress"
              @click="sendAnswer">Press me</b-button>
  </div>
</template>

<script>
export default {
  name: 'QuestionBuzzer',
  props: {
    locked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    sendAnswer() {
      if (!this.locked) {
        this.$emit('answer', 'buzzer');
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .btn-full-height{
    height: 100vh;
    max-height: 350px;
  }
</style>
