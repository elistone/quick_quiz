import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { mount } from '@vue/test-utils';
import QuestionNumbers from '@/components/questions/QuestionNumbers.vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let wrapper;

beforeEach(() => {
  wrapper = mount(QuestionNumbers);
});

describe('QuestionNumbers', () => {
  it('has options for all the required buttons', () => {
    const options = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['C', '0', 'enter'],
    ];
    expect(wrapper.vm.options).toEqual(options);
  });

  it('does not allow pressing buttons if locked', async () => {
    expect(wrapper.vm.locked).toBe(false);
    wrapper.setProps({ locked: true });
    expect(wrapper.vm.locked).toBe(true);


    let button;
    const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', 'enter'];

    // wait next tick due to set props
    await wrapper.vm.$nextTick();

    options.forEach((val) => {
      button = wrapper.find({ ref: `btn${val}` });
      expect(button.is('[disabled]')).toBe(true);
    });
  });

  it('allows you press a number that get\'s added the answer list', () => {
    expect(wrapper.vm.selected).toEqual([]);

    let button;
    const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    options.forEach((val) => {
      button = wrapper.find({ ref: `btn${val}` });
      button.trigger('click');
      expect(wrapper.vm.selected).toContain(val);
    });
  });

  it('allows pressing the "c" button to remove a number', () => {
    let button;
    const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    wrapper.vm.selected = options;
    expect(wrapper.vm.selected).toEqual(options);

    const rOptions = options.slice().reverse();

    rOptions.forEach((val) => {
      button = wrapper.find({ ref: 'btnC' });
      button.trigger('click');
      expect(wrapper.vm.selected).not.toContain(val);
    });
  });

  it('only allows 10 numbers to be entered', async () => {
    let button;
    const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    wrapper.vm.selected = options;
    expect(wrapper.vm.selected).toEqual(options);

    // check that all buttons are available
    options.forEach((val) => {
      button = wrapper.find({ ref: `btn${val}` });
      expect(button.is('[disabled]')).not.toBe(true);
    });

    // add an extra button press
    options.push('1');

    // wait next tick due to set props
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.selected).toEqual(options);
    options.forEach((val) => {
      button = wrapper.find({ ref: `btn${val}` });
      expect(button.is('[disabled]')).toBe(true);
    });
  });
});
