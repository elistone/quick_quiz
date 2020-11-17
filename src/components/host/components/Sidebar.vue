<template>
  <div class="spinner">
    <b-nav vertical class="w-25">
      <b-nav-item active>
        <b-icon-question-circle />
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
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

</style>
