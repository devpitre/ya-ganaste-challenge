import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiBankRepository } from "../../data/repositories/api-bank-repository";
import { LocalBankRepository } from "../../data/repositories/local-bank-repository";
import { Bank } from "../entities/bank-entity";
import GetApiBank from "./get-api-banks";
import GetLocalBanks from "./get-local-banks";

class GetBanks {
  private localRepository: LocalBankRepository;
  private apiRepository: ApiBankRepository;
  private getApiBank: GetApiBank;
  private getLocalBank: GetLocalBanks;
  private keyItem: string;

  constructor() {
    this.localRepository = new LocalBankRepository();
    this.getLocalBank = new GetLocalBanks(this.localRepository);

    this.apiRepository = new ApiBankRepository();
    this.getApiBank = new GetApiBank(this.apiRepository);

    this.keyItem = "isFirstLoad";
  }

  private async saveData(banks: Bank[]) {
    await AsyncStorage.setItem("banks", JSON.stringify(banks));
  }

  private async getDataApi() {
    const banks = await this.getApiBank.getBanks();
    await this.saveData(banks);
    return banks;
  }

  public async getData(): Promise<Bank[]> {
    const isFirstLoad = await AsyncStorage.getItem(this.keyItem);

    if (!isFirstLoad) {
      return this.getDataApi();
    } else {
      const banks = await this.getLocalBank.getBanks();

      if (!banks.length) {
        return this.getDataApi();
      }
      return banks;
    }
  }
}

export default GetBanks;
