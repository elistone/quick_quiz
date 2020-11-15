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
      locked: false,
      question: {
        type: c.questionType.NONE,
        text: '',
      },
      imageAudio: {
        incoming: false,
        show: false,
        url: '',
      },
      state: c.states.HOW_TO_PLAY,
    },
    options: {
      goWide: {
        enabled: false,
        number: 2,
      },
      evilMode: {
        enabled: false,
      },
    },
    player: {
      name: '',
      answer: [],
      selected_buzzer: '',
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
    setQuizLockedState(state, isLocked) {
      state.quiz.locked = isLocked;
    },
    setQuizState(state, quizState) {
      state.quiz.state = quizState;
    },
    setQuizQuestionType(state, type) {
      state.quiz.question.type = type;
    },
    setQuizQuestionText(state, text) {
      state.quiz.question.text = text;
    },
    setPlayerAnswer(state, answer) {
      state.player.answer.push(answer);
    },
  },
  actions: {
    playerAnswer({ commit, state }, answer) {
      const goWide = state.options.goWide.enabled;
      const goWideCount = state.options.goWide.number;
      let answersCount = state.player.answer.length;

      if (state.quiz.question.type !== state.constants.questionType.BUZZER) {
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
          commit('setQuizLockedState', true);
        } else if (goWide && answersCount >= goWideCount) {
          commit('setQuizLockedState', true);
        }
      }
    },
  },
  modules: {},
});
