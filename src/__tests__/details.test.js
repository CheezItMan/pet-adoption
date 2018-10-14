import React from "react";
import { create } from "react-test-renderer";
import Details from "../components/details";

test("snapshot", () => {
  const component = create(<Details />);

  expect(component.toJSON()).toMatchSnapshot();
});

test("shows model when toggleModel is called", () => {
  const component = create(<Details search={() => {}} />);

  const instance = component.getInstance();

  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
