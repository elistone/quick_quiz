<template>
  <b-card
    border-variant="dark"
    header-text-variant="white"
    align="center"
    class="dashboard-questions"
  >
    <b-card-text>
      <h3>Questions</h3>
      <p class="lead">No questions loaded</p>
      <b-row class="buttons">
        <b-col>
          <b-button
            class="btn-block"
            variant="success">Load Questions
          </b-button>
        </b-col>
        <b-col>
          <b-button
            class="btn-block"
            variant="primary">Create Questions
          </b-button>
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'DashboardQuestions',
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {

  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard-questions {
  margin-top: 2rem;
  height: 36.6rem;
}
.buttons {
  margin-top: 50%;
  .btn {
    height: 6rem;
    font-size: 1.5rem;
  }
}
</style>
