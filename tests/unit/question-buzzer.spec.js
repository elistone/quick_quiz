import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { mount } from '@vue/test-utils';
import QuestionBuzzer from '@/components/questions/QuestionBuzzer.vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let wrapper;

beforeEach(() => {
  wrapper = mount(QuestionBuzzer);
});

describe('QuestionBuzzer', () => {
  it('is possible to press the main button', () => {
    const button = wrapper.find({ ref: 'btnPress' });
    expect(button.exists()).toBe(true);
  });
});
