import { LocalBankRepository } from "../../data/repositories/local-bank-repository";
import { Bank } from "../entities/bank-entity";

class GetLocalBanks {
  constructor(private repository: LocalBankRepository) {}

  public async getBanks(): Promise<Bank[]> {
    return this.repository.getBanks();
  }
}

export default GetLocalBanks;
