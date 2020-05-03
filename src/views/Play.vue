<template>
    <layout-mobile class="player">
      <questions/>
    </layout-mobile>
</template>

<script>
import Questions from '@/components/Questions.vue';
import LayoutMobile from '@/layouts/LayoutMobile.vue';

export default {
  name: 'Home',
  components: {
    LayoutMobile,
    Questions,
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
