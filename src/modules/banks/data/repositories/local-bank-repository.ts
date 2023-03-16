import { Bank } from "../../domain/entities/bank-entity";
import { BankApi } from "../../domain/interfaces/bank-api-interface";
import LocalApiBank from "../sources/local-data-source";

export class LocalBankRepository implements BankApi {
  private api: LocalApiBank;

  constructor() {
    this.api = new LocalApiBank();
  }

  public async getBanks(): Promise<Bank[]> {
    const response = await this.api.getBanks();

    if (!response) return [];

    const banks = JSON.parse(response) as Bank[];
    return banks;
  }
}
