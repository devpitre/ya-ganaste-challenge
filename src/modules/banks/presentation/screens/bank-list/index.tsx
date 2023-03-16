import { AxiosError } from "axios";
import React, { useEffect, useReducer } from "react";
import Error from "../../../../../components/Error";
import Loading from "../../../../../components/Loading";
import GetBanks from "../../../domain/use-cases/get-banks";
import BankList from "./components/BankList";
import bankListReducer from "./reducer";
import { BankListState } from "./types/bank-list-state";

const initialState: BankListState = {
  isLoading: false,
  banks: [],
  error: null,
};

export default function BankListScreen() {
  const [state, dispatch] = useReducer(bankListReducer, initialState);
  const getBankUseCase = new GetBanks();

  useEffect(() => {
    (async () => {
      dispatch({ type: "IS_LOADING" });
      try {
        const banks = await getBankUseCase.getData();
        dispatch({ type: "SET_BANKS", payload: banks });
      } catch (error) {
        const axiosError = error as AxiosError;
        dispatch({ type: "IS_ERROR", payload: axiosError.message });
      }
    })();
  }, []);

  if (state.isLoading) return <Loading />;

  if (state.error) return <Error error={state.error} />;

  return <BankList banks={state.banks} />;
}
