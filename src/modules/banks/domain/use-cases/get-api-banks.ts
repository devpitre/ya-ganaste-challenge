import { ApiBankRepository } from "../../data/repositories/api-bank-repository";
import { Bank } from "../entities/bank-entity";

class GetApiBank {
  constructor(private repostory: ApiBankRepository) {}

  public async getBanks(): Promise<Bank[]> {
    return this.repostory.getBanks();
  }
}

export default GetApiBank;
