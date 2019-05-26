import React from "react";
import { shallow } from "enzyme";
import CarouselButton from "../CarouselButton";

describe("CarouselButton", () => {
  const text = "button text here";
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
  });

  it("renders a button", () => {
    expect(wrapper.type()).toBe("button");
  });

  it("allows children", () => {
    expect(wrapper.prop("children")).toBe(text);
  });

  it("passes through other props to the <button>", () => {
    const onClick = () => {};
    const className = "my-favorite-carousel-button";
    const dataAction = "prev";
    wrapper.setProps({ onClick, className, "data-action": dataAction });
    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
    expect(wrapper.prop("data-action")).toBe(dataAction);
  });
});
