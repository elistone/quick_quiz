<template>
  <div class="mt-n4">
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
          maxlength="4"
          pattern='^[a-zA-Z]+$'
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
            :maxlength="name.maxlength"
            autocomplete="off"
            pattern='^[a-zA-Z0-9\s]+$'
          />
        </b-input-group>
      </b-form-group>

      <b-button class="btn-block" type="submit" variant="primary">Join Quiz</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'JoinForm',
  components: {},
  props: {},
  data() {
    return {
      form: {
        gameid: '',
        name: '',
      },
      name: {
        maxlength: 25,
      },
    };
  },
  computed: {
    maxLengthValue() {
      return `${this.name.maxlength - this.form.name.length}`;
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push({ name: 'Buzzer' });
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
</style>
