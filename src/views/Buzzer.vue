<template>
  <layout-mobile :hideNav="true" class="buzzer">
    <song-selector />
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import LayoutMobile from '../layouts/LayoutMobile.vue';
import SongSelector from '../components/buzzer/SongSelector.vue';

export default {
  name: 'Buzzer',
  components: {
    SongSelector,
    LayoutMobile,
  },
};
</script>
