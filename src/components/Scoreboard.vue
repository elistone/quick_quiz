<template>
  <div class="scoreboard">
    <h2>Scoreboard</h2>
    <b-table borderless :items="scoreboardSorted" :fields="fields"/>
  </div>
</template>

<script>

export default {
  /* eslint no-underscore-dangle: 0 */
  /* eslint no-param-reassign: "error" */
  name: 'scoreboard',
  components: {},
  data() {
    return {
      userId: 2,
      fields: ['pos', 'team_name', 'score'],
      items: [
        { id: 1, team_name: 'Dickerson', score: 91 },
        { id: 2, team_name: 'Larsen', score: 81 },
        { id: 3, team_name: 'Geneva', score: 71 },
        { id: 4, team_name: 'Jami', score: 61 },
        { id: 5, team_name: 'Dickerson', score: 21 },
        { id: 6, team_name: 'Larsen', score: 21 },
        { id: 7, team_name: 'Geneva', score: 21 },
        { id: 8, team_name: 'Jami', score: 21 },
        { id: 9, team_name: 'Dickerson', score: 11 },
        { id: 10, team_name: 'Larsen', score: 100 },
        { id: 11, team_name: 'Geneva', score: 60 },
        { id: 12, team_name: 'Jami', score: 80 },
        { id: 13, team_name: 'Dickerson', score: 70 },
        { id: 14, team_name: 'Larsen', score: 60 },
        { id: 15, team_name: 'Geneva', score: 50 },
        { id: 16, team_name: 'Jami', score: 40 },
        { id: 17, team_name: 'Dickerson', score: 30 },
        { id: 18, team_name: 'Larsen', score: 20 },
        { id: 19, team_name: 'Geneva', score: 10 },
        { id: 20, team_name: 'Jami', score: 5 },
        { id: 21, team_name: 'Dickerson', score: 4 },
        { id: 22, team_name: 'Larsen', score: 3 },
        { id: 23, team_name: 'Geneva', score: 3 },
        { id: 24, team_name: 'Jami', score: 1 },
      ],
    };
  },
  computed: {
    scoreboardSorted() {
      let loop = 0;
      let pos = 0;
      const that = this;
      const teams = that.items;

      function ordinalSuffixOf(i) {
        const j = i % 10;
        const k = i % 100;

        if (j === 1 && k !== 11) {
          return `${i}st`;
        }
        if (j === 2 && k !== 12) {
          return `${i}nd`;
        }
        if (j === 3 && k !== 13) {
          return `${i}rd`;
        }
        return `${i}th`;
      }

      teams.sort((a, b) => {
        if (b.score > a.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });

      let incrementValue = 1;
      teams.forEach((team) => {
        const lastId = loop - 1;
        if (team.id === that.userId) {
          team._rowVariant = 'is-current-user';
        }
        if (lastId >= 0 && teams[lastId].score === team.score) {
          // don't increment
          incrementValue += 1;
        } else {
          pos += incrementValue;
          incrementValue = 1;
        }
        // eslint-disable-next-line no-param-reassign
        team.pos = ordinalSuffixOf(pos);
        loop += 1;
      });
      return teams;
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$num: 50; // this is how many table columns we have
$base-color: #C3FF68;

@while $num > 0 {
  $angle: $num*2000/100;
  $this-color: adjust-hue($base-color, $angle);

  .table tbody tr:nth-of-type(#{$num}) {
    background: lighten($this-color, 10);
    border: 1px solid darken($this-color, 10);
    color: darken($this-color, 50);
  }

  .table tbody tr.table-is-current-user {
    background: linear-gradient(270deg, #FFFFFF, lighten($this-color, 10));
    background-size: 800% 800%;
  }

  $num: $num - 1;
}

.table tbody tr.table-is-current-user {
  border-color: white;
  -webkit-animation: AnimationName 1s ease infinite;
  -moz-animation: AnimationName 1s ease infinite;
  animation: AnimationName 1s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}
</style>
