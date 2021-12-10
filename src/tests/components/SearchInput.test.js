import React from "react";
import { shallow } from "enzyme";
import { SearchInput } from "../../components/SearchInput";

test("should render SearchInput correctly", () => {
  const wrapper = shallow(<SearchInput />);
  expect(wrapper).toMatchSnapshot();
});

test("should set input state on input change", () => {
  const value = "Munich";
  const wrapper = shallow(<SearchInput />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("city")).toBe(value);
});
