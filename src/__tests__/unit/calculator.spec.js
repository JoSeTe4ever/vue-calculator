import { shallowMount } from "@vue/test-utils";
import Calculator from './../../components/Calculator.vue';

describe("Calculator.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "0 C +/- % / 7 8 9 X 4 5 6 - 1 2 3 + 0 . =";
    const wrapper = shallowMount(Calculator, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});