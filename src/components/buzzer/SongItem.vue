<template>
  <b-list-group-item
    :variant="selectStyle"
    class="song-item"
    @click="togglePlayPause"
    :disabled="isDisabled"
    button>
    <div class="d-md-flex justify-content-between align-items-center">
      <p class="text-truncate m-0">
        <slot></slot>
      </p>

      <div class="mt-2 d-flex justify-content-between align-items-center" style="min-width: 100px">
        <b-badge class="status-icon ml-md-3" variant="primary" pill>
          <b-icon v-if="!isLoading" :icon="badgeIcon"></b-icon>
          <b-spinner
            v-if="isLoading"
            style="width: 1rem; height: 1rem;"
            type="grow"
            label="Spinning"></b-spinner>
        </b-badge>
        <b-button
          @click="selectedPressed"
          class="select-btn btn-sm ml-3"
          :variant="selectBtnStyle"
          :disabled="isDisabled">
          <b-icon :icon="buttonIcon"></b-icon>
        </b-button>
      </div>
    </div>
    <b-progress :value="seekValue" :max="durationValue" class="song-progress"
                :class="{'song-progress-hidden':!isPlaying}"></b-progress>
  </b-list-group-item>
</template>

<script>

export default {
  name: 'SongItem',
  props: {
    id: {
      type: String,
      default: '',
    },
    file: {
      type: String,
      default: '',
    },
    seek: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 100,
    },
    isPlaying: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    badgeIcon() {
      return this.isPlaying ? 'pause-fill' : 'play-fill';
    },
    buttonIcon() {
      return this.isDisabled ? 'x' : 'check';
    },
    selectStyle() {
      return this.isSelected ? 'success' : 'default';
    },
    selectBtnStyle() {
      if (this.isDisabled) {
        return 'danger';
      }
      return this.isSelected ? 'default' : 'info';
    },
    seekValue() {
      return this.isPlaying ? this.seek : 0;
    },
    durationValue() {
      return this.isPlaying ? this.duration : 100;
    },
  },
  methods: {
    togglePlayPause() {
      const state = this.isPlaying ? 'stop' : 'play';
      this.$emit(state, this.file, this.id);
    },
    selectedPressed(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      const selected = this.isSelected ? '' : this.id;
      this.$emit('selected', selected);
    },
  },

  mounted() {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song-item.disabled .status-icon {
    opacity: 0.65;
  }

  .status-icon {
    height: 30px;
    width: 34px;
    text-align: center !important;
    line-height: 23px !important;
    border-radius: 0.2rem !important;
  }

  .select-btn {
    height: 30px;
    width: 34px;
    line-height: 23px !important;
    text-align: center !important;
  }

  .song-progress {
    margin: 5px -20px -12px;
    height: 4px !important;
    border-radius: 0 !important;
  }

  .song-progress.song-progress-hidden {
    visibility: hidden;
  }
</style>
