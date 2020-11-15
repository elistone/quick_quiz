<template>
  <div>
    <div class="timer-container sticky-top mb-2">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="timer-spinner-holder">
              <div class="timer-spinner-wrapper">
                <b-spinner class="timer-spinner"
                           :label="current + 'seconds'"
                           :variant="colours"
                           :type="running ? 'border' : 'grow'">
                </b-spinner>
                <span class="timer-numbers text-black">{{ current }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="timer-container fixed-bottom">
      <b-progress class="timer" :max="start">
        <b-progress-bar
          class="timer-bar"
          :value="current"
          :variant="colours"
          :striped="running"
          :animated="running"/>
      </b-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  components: {},
  props: {
    start: {
      type: Number,
      default: 99,
    },
    current: {
      type: Number,
      default: 99,
    },
    running: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    /**
     * calculate the percentage handling any errors
     */
    percentage() {
      let { start, current } = this;

      if (start <= 0) {
        start = 1;
      }

      if (current < 0) {
        current = 0;
      }

      if (current > start) {
        current = start;
      }

      return (current / start) * 100;
    },

    /**
     * The colours for the timer
     * @returns {string}
     */
    colours() {
      if (!this.running) {
        return 'light';
      }
      if (this.percentage > 66) {
        return 'success';
      }
      if (this.percentage > 33) {
        return 'warning';
      }
      return 'danger';
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.timer-container {
  /*min-height: 50px;*/
}

.timer {
  height: 0.35rem !important;
  border-radius: 0 !important;
}

.timer-spinner-holder {
  margin-bottom: 0.5rem;

  .timer-spinner-wrapper {
    min-height: 39px;
    position: relative;

    .timer-spinner {
      width: 2.2rem;
      height: 2.2rem;
    }

    .timer-numbers {
      font-size: 14px;
      display: block;
      position: absolute;
      top: 6px;
      text-align: center;
      width: 100%;
    }

    @media only screen and (min-width: 768px) {
      margin-top: -3px;
      min-height: 51px;
      .timer-spinner {
        width: 3rem;
        height: 3rem;
      }
      .timer-numbers {
        font-size: 23px;
      }
    }
  }
}
</style>
