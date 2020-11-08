<template>
  <layout-mobile :hideNav="true" class="buzzer">
    <JumbotronWrapper>
      <song-selector />
    </JumbotronWrapper>
  </layout-mobile>
</template>

<script>
// @ is an alias to /src
import JumbotronWrapper from '@/layouts/components/JumbotronWrapper.vue';
import LayoutMobile from '../layouts/LayoutMobile.vue';
import SongSelector from '../components/buzzer/SongSelector.vue';

export default {
  name: 'Buzzer',
  components: {
    JumbotronWrapper,
    SongSelector,
    LayoutMobile,
  },
};
</script>
