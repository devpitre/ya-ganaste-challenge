import React from "react";
import { BankListState } from "./types/bank-list-state";
import BankListScreen from ".";
import { screen, render } from "@testing-library/react-native";
import { Bank } from "../../../domain/entities/bank-entity";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useReducer: jest.fn(),
}));

describe("Bank List Screen", () => {
  test("should show isLoading message", () => {
    const initialState: BankListState = {
      isLoading: true,
      banks: [],
      error: null,
    };
    (React.useReducer as jest.Mock).mockReturnValue([initialState, jest.fn()]);
    render(<BankListScreen />);
    expect(screen.getByText(/loading/i)).toBeTruthy();
  });

  test("should show error message", () => {
    const initialState: BankListState = {
      isLoading: false,
      banks: [],
      error: "error message",
    };
    (React.useReducer as jest.Mock).mockReturnValue([initialState, jest.fn()]);
    render(<BankListScreen />);
    expect(screen.getByText(/error message/i)).toBeTruthy();
  });

  test("should show list banks", () => {
    const mockBanks: Bank[] = [
      {
        age: 10,
        url: "http://test.com",
        bankName: "Bank test",
        description: "Bank description",
      },
    ];

    const initialState: BankListState = {
      isLoading: false,
      banks: mockBanks,
      error: null,
    };
    (React.useReducer as jest.Mock).mockReturnValue([initialState, jest.fn()]);
    render(<BankListScreen />);
    expect(screen.getByText(/bank test/i)).toBeTruthy();
  });
});
