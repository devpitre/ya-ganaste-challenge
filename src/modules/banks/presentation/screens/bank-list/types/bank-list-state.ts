import { Bank } from "../../../../domain/entities/bank-entity";

type BankListState = {
  banks: Bank[];
  isLoading: boolean;
  error: string | null;
};

export type { BankListState };
