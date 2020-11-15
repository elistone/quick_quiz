<template>
  <div :class="['mobile-layout',useFlexboxClass]">
    <main class="mobile-layout-main">
      <slot/>
    </main>
    <footer v-if="showFooter">
      <small>Version: v{{ version }}</small>
    </footer>
  </div>
</template>

<script>
import { version } from '../../package.json';


export default {
  name: 'LayoutMobile',
  components: {},
  props: {
    hideNav: {
      type: Boolean,
      default: false,
    },
    useFlexbox: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      version,
    };
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
.mobile-layout {
  min-height: 100vh;

  > * {
    padding: 10px;
  }
}

.ios-yes {
  .mobile-layout {
    min-height: 85vh;
  }
}

.use-flexbox {
  &.mobile-layout {
    display: flex;
    flex-direction: column;

    .mobile-layout-main {
      flex-grow: 1;
      display: flex;
    }
  }
  footer {
    text-align: center;
    padding: 0.5rem 0;
  }
}
</style>
