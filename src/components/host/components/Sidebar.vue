<template>
  <div class="spinner">
    <b-nav vertical class="w-25">
      <b-nav-item class="bg-secondary" active>
        <b-icon-question-circle/>
        Questions
      </b-nav-item>
      <b-nav-item class="bg-secondary">
        <b-icon-bar-chart />
        Scoreboard
      </b-nav-item>
      <b-nav-item class="bg-secondary">Another Link</b-nav-item>
      <b-nav-item class="bg-secondary" disabled>Disabled</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  .nav-item {
    text-align: center;
    margin: 0.5rem 0;
    min-height: 4.5rem;
    border-radius: calc(0.25rem - 1px);

    svg {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    a {
      color: white;

      &:hover, &:active, &:focus {
        color: #adb5bd;
      }
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
