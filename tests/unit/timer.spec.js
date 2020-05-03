import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { mount } from '@vue/test-utils';
import Timer from '@/components/Timer.vue';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

describe('Timer', () => {
  const wrapper = mount(Timer);

  it('is possible to set the total time', () => {
    const start = 20;
    wrapper.setProps({ start });
    expect(wrapper.vm.start).toBe(start);
  });

  it('is possible to set the current time', () => {
    const current = 4;
    wrapper.setProps({ current });
    expect(wrapper.vm.current).toBe(current);
  });

  it('is possible to flag the timer as running', () => {
    const running = true;
    wrapper.setProps({ running });
    expect(wrapper.vm.running).toBe(running);
  });

  it('calculates the time percentage correctly', () => {
    wrapper.setProps({ start: 15, current: 15 });
    expect(wrapper.vm.percentage).toBe(100);

    wrapper.setProps({ start: 15, current: 9 });
    expect(wrapper.vm.percentage).toBe(60);

    wrapper.setProps({ start: 15, current: 3 });
    expect(wrapper.vm.percentage).toBe(20);

    wrapper.setProps({ start: 15, current: 0 });
    expect(wrapper.vm.percentage).toBe(0);

    wrapper.setProps({ start: 15, current: -14 });
    expect(wrapper.vm.percentage).toBe(0);

    wrapper.setProps({ start: 0, current: 15 });
    expect(wrapper.vm.percentage).toBe(100);
  });

  it('sets the timer colour correctly', () => {
    wrapper.setProps({ start: 15, current: 15 });
    expect(wrapper.vm.colours).toBe('success');

    wrapper.setProps({ start: 15, current: 9 });
    expect(wrapper.vm.colours).toBe('warning');

    wrapper.setProps({ start: 15, current: 3 });
    expect(wrapper.vm.colours).toBe('danger');

    wrapper.setProps({ start: 15, current: 0 });
    expect(wrapper.vm.colours).toBe('danger');

    wrapper.setProps({ start: 15, current: -14 });
    expect(wrapper.vm.colours).toBe('danger');

    wrapper.setProps({ start: 0, current: 15 });
    expect(wrapper.vm.colours).toBe('success');
  });
});
