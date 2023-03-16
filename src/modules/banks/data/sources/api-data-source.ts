import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Bank } from "../../domain/entities/bank-entity";

class ApiBank {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
    });
  }

  async getBanks(): Promise<AxiosResponse<Bank[]>> {
    return this.api.get<Bank[]>("/banks");
  }
}

export default ApiBank;
