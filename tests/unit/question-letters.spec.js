import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { mount } from '@vue/test-utils';
import QuestionLetters from '@/components/questions/QuestionLetters.vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let wrapper;

beforeEach(() => {
  wrapper = mount(QuestionLetters);
});

describe('QuestionLetters', () => {
  it('has options for all the required buttons', () => {
    const options = [
      ['A', 'B', 'C', 'D'],
      ['E', 'F', 'G', 'H'],
      ['I', 'J', 'K', 'L'],
      ['M', 'N', 'O', 'P'],
      ['R', 'S', 'T', 'U'],
      ['QV', 'W', 'Y', 'XZ'],
    ];
    expect(wrapper.vm.options).toEqual(options);
  });

  it('can find all the button options', () => {
    let button;
    const options = ['A', 'B', 'C', 'D',
      'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P',
      'R', 'S', 'T', 'U',
      'QV', 'W', 'Y', 'XZ',
    ];

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
    const options = ['A', 'B', 'C', 'D',
      'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P',
      'R', 'S', 'T', 'U',
      'QV', 'W', 'Y', 'XZ',
    ];

    // wait next tick due to set props
    await wrapper.vm.$nextTick();

    options.forEach((val) => {
      button = wrapper.find({ ref: `btn${val}` });
      button.trigger('click');
      expect(button.is('[disabled]')).toBe(true);
    });
  });

  it('allows only 1 options to be selected by default', async () => {
    expect(wrapper.vm.locked).toBe(false);

    // const buttonA = wrapper.find({ ref: 'btnA' });
    // const buttonB = wrapper.find({ ref: 'btnB' });

    // buttonA.trigger('click');
    // await wrapper.vm.$nextTick();
    // expect(store.commit).toHaveBeenCalledOnce();
    // expect(buttonA.is('[disabled]')).toBe(false);

    // expect(wrapper.vm.locked).toBe(true);
    //
    // buttonB.trigger('click');
    // await wrapper.vm.$nextTick();
    // expect(buttonB.is('[disabled]')).toBe(true);
  });

  it('allows only 2 options to be selected when gowide is enabled', () => {

  });
});
