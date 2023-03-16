import { Bank } from "../entities/bank-entity";

export interface BankApi {
  getBanks(): Promise<Bank[]>;
}
