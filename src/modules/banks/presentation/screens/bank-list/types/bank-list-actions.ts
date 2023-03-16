import { Bank } from "../../../../domain/entities/bank-entity";

type BankListActions =
  | { type: "IS_LOADING" }
  | { type: "SET_BANKS"; payload: Bank[] }
  | { type: "IS_ERROR"; payload: string | null };

export type { BankListActions };
