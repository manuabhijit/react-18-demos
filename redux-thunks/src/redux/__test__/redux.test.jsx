import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState } from "../boilerplate/reducer";
import ReduxComponent from "../redux";


describe("Test: Redux component screenshot", () => {
  const middleWares = [thunk];
  const mockStore = configureStore(middleWares);

  it("should render correctly", () => {
    const store = mockStore(initialState);
    const { container } = render(
      <Provider store={store}>
        <ReduxComponent />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
