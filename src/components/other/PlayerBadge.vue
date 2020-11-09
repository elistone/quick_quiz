<template>
  <div class="player-badge center large" :style="{backgroundColor: backgroundColour}">
    <span>{{ playerName }}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerBadge',
  components: {},
  props: {
    name: {
      type: String,
      default: '?',
    },
  },
  data() {
    return {};
  },
  computed: {
    getName() {
      return this.name !== '' ? this.name.trim() : '?';
    },
    backgroundColour() {
      const str = this.getName;
      let hash = 0;
      for (let i = 0; i < str.length; i += 1) {
        // eslint-disable-next-line no-bitwise
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let colour = '#';
      for (let i = 0; i < 3; i += 1) {
        // eslint-disable-next-line no-bitwise
        const value = (hash >> (i * 8)) & 0xFF;
        colour += (`00${value.toString(16)}`).substr(-2);
      }
      return colour;
    },
    playerName() {
      const name = this.getName;
      const names = name.split(' ');
      let initials = names[0].substring(0, 1);

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1);
      } else if (name.length > 1) {
        initials += name[name.length - 1].substring(0, 1);
      }

      return initials.toUpperCase();
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player-badge {
  border-color: white;
  border-style: solid;
  border-radius: 100rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: background-color 1000ms linear;

  &.center {
    margin: 0 auto;
  }

  &.large {
    border-width: 0.25rem;
    width: 7rem;
    height: 7rem;
    font-size: 2.5rem;
  }
}
</style>
