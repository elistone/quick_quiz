<template>
  <footer class="bg-dark fixed-bottom p-2">
    <hr/>
    <b-row class="d-flex justify-content-center text-center">
      <p>
        <small>Made with ❤ By <a href="https://github.com/elistone">Eli Stone</a></small>
        <br>
        <small>
          During a little bit of a
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">🔒down</a> • Version: v{{version}}
        </small>
      </p>
    </b-row>
  </footer>
</template>

<script>
import { version } from '../../../package.json';

export default {
  name: 'Footer',
  components: {},
  props: {},
  data() {
    return {
      version,
    };
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
