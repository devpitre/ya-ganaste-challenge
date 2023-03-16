import * as React from "react";
import { render, screen } from "@testing-library/react-native";
import Loading from "./Loading";

describe("Error Component", () => {
  test("should render Component", () => {
    render(<Loading />);
    const message = screen.getByText(/loading/i);
    expect(message).toBeTruthy();
  });
});
