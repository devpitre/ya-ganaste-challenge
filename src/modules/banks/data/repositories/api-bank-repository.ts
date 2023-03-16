import { Bank } from "../../domain/entities/bank-entity";
import { BankApi } from "../../domain/interfaces/bank-api-interface";
import ApiBank from "../sources/api-data-source";

export const baseURL = "https://dev.obtenmas.com/catom/api/challenge";

export class ApiBankRepository implements BankApi {
  private api: ApiBank;

  constructor() {
    this.api = new ApiBank(baseURL);
  }

  public async getBanks(): Promise<Bank[]> {
    const { data } = await this.api.getBanks();
    return data;
  }
}
