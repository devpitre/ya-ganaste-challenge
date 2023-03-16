import * as React from "react";
import { render, screen } from "@testing-library/react-native";
import Error from "./Error";

describe("Error Component", () => {
  test("should render Component", () => {
    render(<Error error="error message" />);
    const message = screen.getByText(/error message/i);
    expect(message).toBeTruthy();
  });
});
