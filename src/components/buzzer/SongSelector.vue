<template>
  <div>
    <b-row class="buttons mb-3">
      <b-col>
      </b-col>
      <b-col>
        <b-button variant="primary"
                  class="float-right btn-block"
                  :to="{ name: 'Play' }"
                  :disabled="!selected">Next
        </b-button>
      </b-col>
    </b-row>
    <b-list-group>
      <song-item
        v-for="m in sortedMusic"
        :id="m.id"
        :file="m.file"
        :key="m.id"
        :is-playing="playing === m.id"
        :is-selected="selected === m.id"
        :is-loading="playing === m.id && loading"
        :is-disabled="isAlreadyPicked(m.id)"
        :seek="timer.seek"
        :duration="timer.duration"
        @play="playSong"
        @stop="stopSong"
        @selected="selectedSong">{{ m.title }}
      </song-item>
    </b-list-group>
    <b-row class="buttons mt-3">
      <b-col>
      </b-col>
      <b-col>
        <b-button variant="primary"
                  class="float-right btn-block"
                  :to="{ name: 'Play' }"
                  :disabled="!selected">Next
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Howl } from 'howler';
import MusicList from '../../assets/json/buzzers.json';
import SongItem from './SongItem.vue';

export default {
  name: 'SongSelector',
  components: { SongItem },
  data() {
    return {
      music: MusicList,
      loading: false,
      playing: '',
      selected: '',
      picked: ['2'],
      holwer: null,
      timer: {
        t: null,
        duration: 100,
        seek: 0,
      },
    };
  },
  computed: {
    sortedMusic() {
      const { music } = this.music;
      const sorted = music.sort((p1, p2) => {
        const modifier = 1;
        // if (this.sortDirection === 'desc') modifier = -1;
        if (p1.title < p2.title) return -1 * modifier;
        if (p1.title > p2.title) return 1 * modifier;
        return 0;
      });
      return sorted;
    },
  },
  methods: {
    playSong(file, id) {
      this.stopSong();
      const path = this.getMusicPath() + file;
      this.createHowl(path);
      this.howler.play();
      this.playing = id;
      this.startSeekDurationTimer();
    },

    stopSong() {
      if (this.howler) {
        this.howler.stop();
        this.howler.unload();
        this.stopSeekDurationTimer();
      }
      this.howler = null;
      this.playing = '';
      this.loading = false;
    },

    selectedSong(id) {
      this.selected = id;
      this.$emit('selected', this.selected);
    },

    createHowl(file) {
      const that = this;
      that.loading = true;
      that.howler = new Howl({
        src: [file],
        onend() {
          that.stopSong();
        },
        onload() {
          that.loading = false;
        },
      });
    },

    isAlreadyPicked(id) {
      return this.picked.includes(id);
    },

    startSeekDurationTimer() {
      const that = this;
      that.timer.t = setInterval(() => {
        that.timer.seek = that.howler.seek();
        that.timer.duration = that.howler.duration();
      }, 100);
    },

    stopSeekDurationTimer() {
      this.timer.t = clearInterval(this.timer.t);
      this.timer.t = null;
      this.timer.seek = 0;
      this.timer.duration = 100;
    },

    getMusicPath() {
      return './audio/buzzers/';
    },
  },

  mounted() {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-group {
  margin-left: -15px;
  margin-right: -15px;
  margin-top: 20px;
}
</style>
