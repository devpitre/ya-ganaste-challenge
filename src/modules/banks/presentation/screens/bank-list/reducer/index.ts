import { BankListActions } from "../types/bank-list-actions";
import { BankListState } from "../types/bank-list-state";

function bankListReducer(
  state: BankListState,
  action: BankListActions
): BankListState {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
        error: null,
        banks: [],
      };
    case "SET_BANKS":
      return {
        ...state,
        banks: action.payload,
        error: null,
        isLoading: false,
      };
    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        banks: [],
      };
  }
}

export default bankListReducer;
