<template>
  <div class="host-quiz">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Host a quiz">
            <b-card-text>
              <span class="text">Looking to host your own quiz? With quiznow.io you can!</span>
              <span class="buttons">
              <b-button
                variant="success"
                class="btn-block" :to="{ name: 'HostDashboard' }">Start now
              </b-button>
              <b-button
                variant="primary"
                class="btn-block" disabled>Reconnect
              </b-button>
                </span>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'HostAQuiz',
  components: { },
  data() {
    return {
    };
  },
  mounted() {

  },
  computed: {
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.card-body {
  height: 100%;
}
.buttons {
  margin-top: 2rem;
  display: block;
}
</style>
