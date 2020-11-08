<template>
  <layout-mobile class="join">
    <JumbotronWrapper>
      <h2>Join a game</h2>
      <join-form />

      <template v-slot:footer>
        <b-row class="buttons">
          <b-col>
            <b-button class="btn-block" variant="danger" :to="{ name: 'Home' }">Back</b-button>
          </b-col>
          <b-col>
          </b-col>
        </b-row>
      </template>
    </JumbotronWrapper>
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import JumbotronWrapper from '@/layouts/components/JumbotronWrapper.vue';
import LayoutMobile from '../layouts/LayoutMobile.vue';
import JoinForm from '../components/forms/JoinForm.vue';

export default {
  name: 'Home',
  components: {
    JumbotronWrapper,
    JoinForm,
    LayoutMobile,
  },
};
</script>
