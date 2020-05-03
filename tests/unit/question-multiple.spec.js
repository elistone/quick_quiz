import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { mount } from '@vue/test-utils';
import QuestionMultiple from '@/components/questions/QuestionMultiple.vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let wrapper;

beforeEach(() => {
  wrapper = mount(QuestionMultiple);
});

describe('QuestionMultiple', () => {
  it('has options for all the required buttons', () => {
    const options = [
      ['A', 'B'],
      ['C', 'D'],
      ['E', 'F'],
    ];
    expect(wrapper.vm.options).toEqual(options);
  });

  it('can find all the button options', () => {
    let button;
    const options = ['A', 'B', 'C', 'D', 'E', 'F'];

    options.forEach((val) => {
      button = wrapper.find({ ref: `btn${val}` });
      expect(button.exists()).toBe(true);
    });
  });

  it('does not allow pressing buttons if locked', async () => {
    expect(wrapper.vm.locked).toBe(false);
    wrapper.setProps({ locked: true });
    expect(wrapper.vm.locked).toBe(true);


    let button;
    const options = ['A', 'B', 'C', 'D', 'E', 'F'];

    // wait next tick due to set props
    await wrapper.vm.$nextTick();

    options.forEach((val) => {
      button = wrapper.find({ ref: `btn${val}` });
      button.trigger('click');
      expect(button.is('[disabled]')).toBe(true);
    });
  });
});
