<template>
  <div class="mobile-view">
    <b-card border-variant="info"
            header="Mobile preview"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">
      <iframe
        :src="generatedIframeSrc"
        title="Mobile view of the application"
        class="mobile-iframe"/>
    </b-card>
  </div>
</template>

<script>
import Utils from '@/utils/utils';

export default {
  name: 'MobileView',
  components: {},
  props: {
    gameCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  created() {
  },
  computed: {
    generatedIframeSrc() {
      this.$aes.setKey(process.env.VUE_APP_CRYPT_KEY);
      const data = {
        gameCode: this.gameCode,
        name: 'host',
        autologin: true,
      };
      const encrypted = this.$aes.encrypt(JSON.stringify(data));
      const host = Utils.getCurrentUrl();
      return `${host}/join#${encrypted}`;
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile-view {
  margin: 0 auto;
  text-align: center;

  .mobile-iframe {
    width: 80%;
    height: 640px;
    border: 0;
  }
}
</style>
