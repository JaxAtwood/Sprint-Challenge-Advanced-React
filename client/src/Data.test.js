import React from "react"
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Data from "./components/Data";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Data text="thing" />); 
    expect(asFragment()).toMatchSnapshot();
});

it("inserts text in div", () => {
    const { getByTestId, getByText} = render(<Data />);

    expect(getByTestId('divtag')).toHaveTextContent("thing");
    expect(getByText("thing")).toHaveClass('fancy-div');
});
