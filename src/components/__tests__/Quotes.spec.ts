import { shallowMount } from "@vue/test-utils";
import Quotes from "../Quotes.vue";

describe("Quotes.vue", () => {
  const overlay = { name: "v-overlay" };
  test("shows overlay for single quote", () => {
    const wrapper = shallowMount(Quotes, {
      propsData: { quoteId: 1 },
    });

    expect(wrapper.findComponent(overlay).exists()).toBe(true);
  });

  test("shows no overlay all quotes", () => {
    const wrapper = shallowMount(Quotes, {
      propsData: { quoteId: null },
    });
    expect(wrapper.findComponent(overlay).exists()).toBe(false);
  });
});
