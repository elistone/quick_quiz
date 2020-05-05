import Vue from 'vue';
import Vuex from 'vuex';
import { version } from '../../package.json';
import c from '../consts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: '',
    darkMode: false,
    constants: c,
    quiz: {
      gameId: '',
    },
    options: {
      goWide: {
        enabled: false,
        number: 2,
      },
      evilMode: {
        enabled: false,
        number: -10,
      },
    },
    player: {
      name: '',
      locked: false,
      answer: [],
      question: {
        type: c.questionType.NONE,
        text: '',
      },
    },
    host: {
      questions: [],
      question: {
        type: c.questionType.NONE,
        answer: '',
        text: '',
      },
    },
  },
  mutations: {
    // tries to load the state from localstorage
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        const store = JSON.parse(localStorage.getItem('store'));
        if (store.version === version) {
          this.replaceState(
            Object.assign(state, store),
          );
        } else {
          state.version = version;
        }
      } else {
        state.version = version;
      }
    },
    setDarkMode(state, mode) {
      state.darkMode = mode;
    },
    setLockedPlayerLockedState(state, isLocked) {
      state.player.locked = isLocked;
    },
    setPlayerAnswer(state, answer) {
      state.player.answer.push(answer);
    },
    setHostAnswer(state, answer) {
      state.host.question.answer = answer;
    },
  },
  actions: {
    playerAnswer({ commit, state }, answer) {
      const goWide = state.options.goWide.enabled;
      const goWideCount = state.options.goWide.number;
      let answersCount = state.player.answer.length;

      if (state.player.question.type !== state.constants.questionType.BUZZER) {
        // update answers
        if (answersCount < 1) {
          commit('setPlayerAnswer', answer);
          answersCount += 1;
        } else if (goWide && answersCount < goWideCount) {
          commit('setPlayerAnswer', answer);
          answersCount += 1;
        }

        // lock the questions if everything correct
        if (!goWide && answersCount >= 1) {
          commit('setLockedPlayerLockedState', true);
        } else if (goWide && answersCount >= goWideCount) {
          commit('setLockedPlayerLockedState', true);
        }
      }
    },
  },
  modules: {},
});
