import { shallowMount } from "@vue/test-utils";
import Quotes from "../Quotes.vue";

describe("Quotes.vue", () => {
  test("shows overlay for single quote", () => {
    const wrapper = shallowMount(Quotes, {
      propsData: { quoteId: 1 },
    });
    expect(wrapper.find("div.overlay")).toBeDefined();
  });
});
