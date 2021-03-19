import { shallowMount } from "@vue/test-utils"
import app from "../../src/App.vue"

test("Hello", () => {
  // render the component
  const wrapper = shallowMount(app)

  // assert the error has gone away
  expect(wrapper.exists()).toBe(true)
})
