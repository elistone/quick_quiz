<template>
  <b-card
    border-variant="info"
    :header="title"
    header-bg-variant="info"
    header-text-variant="white"
    align="center"
  >
    <b-card-text><slot/></b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'DashboardCard',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
  },
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
<style lang="scss">

</style>
