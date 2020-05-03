<template>
  <layout-mobile class="home">
    <join-form />
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import LayoutMobile from '../layouts/LayoutMobile.vue';
import JoinForm from '../components/forms/JoinForm.vue';

export default {
  name: 'Home',
  components: {
    JoinForm,
    LayoutMobile,
  },
};
</script>
