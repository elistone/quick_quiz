<template>
  <layout-mobile class="join">
    <JumbotronWrapper>
      <h2>Join a game</h2>
      <join-form :game-id="gameCode" :name="name" :auto-setup="autoSetup" :host="true"/>
      <template v-slot:footer>
        <b-row class="buttons">
          <b-col>
            <b-button class="btn-block" variant="danger" :to="{ name: 'Home' }">Back</b-button>
          </b-col>
          <b-col>
            <b-button
              class="btn-block"
              variant="primary"
              v-on:click="submitPressed">Connect
            </b-button>
          </b-col>
        </b-row>
      </template>
    </JumbotronWrapper>
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import JumbotronWrapper from '@/layouts/components/JumbotronWrapper.vue';
import Utils from '@/utils/utils';
import LayoutMobile from '../layouts/LayoutMobile.vue';
import JoinForm from '../components/forms/JoinForm.vue';

export default {
  name: 'Join',
  components: {
    JumbotronWrapper,
    JoinForm,
    LayoutMobile,
  },
  data() {
    return {
      gameCode: '',
      name: '',
      autoSetup: false,
    };
  },
  created() {
    const data = Utils.getHashData();
    if (data.length > 4) {
      this.$aes.setKey(process.env.VUE_APP_CRYPT_KEY);
      const decrypted = this.$aes.decrypt(data);
      const details = JSON.parse(decrypted);
      this.gameCode = details.gameCode || '';
      this.name = details.name || '';
      this.autoSetup = !!(details.name && details.gameCode);
      this.host = true;
      setTimeout(() => {
        this.submitPressed();
      }, 100);
    } else if (data.length === 4) {
      this.gameCode = data;
      this.autoSetup = true;
    }
  },
  methods: {
    submitPressed() {
      this.$root.$emit('join_quiz_button_pressed');
    },
  },
};
</script>
