import bankListReducer from ".";
import { Bank } from "../../../../domain/entities/bank-entity";
import { BankListActions } from "../types/bank-list-actions";
import { BankListState } from "../types/bank-list-state";

const initialState: BankListState = {
  banks: [],
  error: null,
  isLoading: false,
};

const mockBanks: Bank[] = [
  {
    age: 10,
    url: "http://test.com",
    bankName: "Bank test",
    description: "Bank description",
  },
];

describe("Bank List Reducer", () => {
  test("should return state when action is IS_LOADING", () => {
    const action: BankListActions = {
      type: "IS_LOADING",
    };
    const state = bankListReducer(initialState, action);
    expect(state).toEqual({ ...initialState, isLoading: true });
  });

  test("should return state when action is SET_BANKS", () => {
    const action: BankListActions = {
      type: "SET_BANKS",
      payload: mockBanks,
    };
    const state = bankListReducer(initialState, action);
    expect(state).toEqual({ ...initialState, banks: mockBanks });
  });

  test("should return state when action is IS_ERROR", () => {
    const action: BankListActions = {
      type: "IS_ERROR",
      payload: "Test Error",
    };
    const state = bankListReducer(initialState, action);
    expect(state).toEqual({ ...initialState, error: "Test Error" });
  });
});
