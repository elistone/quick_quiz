<template>
  <div>
    <div class="the-player-badge">
      <PlayerBadge :name="form.name"/>
    </div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-game-id"
        label="Game ID"
        label-for="game-id"
        description="Four letter game ID.">
        <b-form-input
          v-uppercase
          id="game-id"
          v-model="form.gameid"
          type="text"
          required
          placeholder="Game ID"
          autocomplete="off"
          :maxlength="validation.gameid.maxlength"
          pattern='^[a-zA-Z]+$'
          :disabled="autoSetup"
        />
      </b-form-group>

      <b-form-group
        id="input-name"
        label="Name"
        label-for="name"
        description="This will be your team/player name. Only letters and numbers are allowed.">
        <b-input-group :append="maxLengthValue">
          <b-form-input
            id="name"
            v-model="form.name"
            required
            placeholder="Enter your team name"
            :maxlength="validation.name.maxlength"
            autocomplete="off"
            pattern='^[a-zA-Z0-9\s]+$'
          />
        </b-input-group>
      </b-form-group>

      <b-button
        ref="joinFormSubmit"
        class="btn-block d-none"
        type="submit"
        variant="primary">Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
import PlayerBadge from '@/components/other/PlayerBadge.vue';

export default {
  name: 'JoinForm',
  components: { PlayerBadge },
  props: {
    gameId: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    host: {
      type: Boolean,
      default: false,
    },
    autoSetup: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        gameid: '',
        name: '',
      },
      validation: {
        name: {
          maxlength: 25,
        },
        gameid: {
          maxlength: 4,
        },
      },
    };
  },
  created() {
    this.$nextTick(function () {
      if (typeof this.gameId !== 'undefined' && this.gameId !== '') {
        this.form.gameid = this.gameId;
      }
      if (typeof this.name !== 'undefined' && this.name !== '') {
        this.form.name = this.name;
      }
    });
  },
  computed: {
    maxLengthValue() {
      return `${this.validation.name.maxlength - this.form.name.length}`;
    },
  },
  mounted() {
    this.$root.$on('join_quiz_button_pressed', () => {
      this.triggerSubmit();
    });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push({ name: 'Buzzer' });
    },
    triggerSubmit() {
      this.$refs.joinFormSubmit.click();
    },
  },
  directives: {
    uppercase: {
      bind(el) {
        el.addEventListener('keyup', () => {
          // eslint-disable-next-line no-param-reassign
          el.value = el.value.toUpperCase();
        });
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-block {
  flex: 1;
}

.the-player-badge {
  text-align: center;
  margin: 1rem auto;
}
</style>
