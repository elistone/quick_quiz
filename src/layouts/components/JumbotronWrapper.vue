<template>
  <div :class="['jumbotron', 'jumbotron-wrapper',useFlexboxClass]">
    <main>
      <slot/>
    </main>
    <footer>
      <slot name="footer"/>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'JumbotronWrapper',
  components: {},
  props: {
    useFlexbox: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    useFlexboxClass() {
      return this.useFlexbox ? 'use-flexbox' : '';
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jumbotron-wrapper {

  &.jumbotron {
    max-width: 1024px;
    margin: 0 auto;
  }

  > main {
    flex: 999;
  }

}

.use-flexbox {
  &.jumbotron-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;

    > footer {
      flex: 1;
    }
  }
}
</style>
