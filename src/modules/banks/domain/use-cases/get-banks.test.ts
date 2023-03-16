import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { baseURL } from "../../data/repositories/api-bank-repository";
import { Bank } from "../entities/bank-entity";
import GetBanks from "./get-banks";

describe("Get Banks From API", () => {
  const mockBanks: Bank[] = [
    {
      age: 10,
      url: "http://test.com",
      bankName: "Bank test",
      description: "Bank description",
    },
  ];

  beforeEach(async () => {
    await AsyncStorage.clear();
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet(`${baseURL}/banks`).reply(200, mockBanks);
  });

  test("should get banks from api", async () => {
    const getBanksUseCase = new GetBanks();

    const banks = await getBanksUseCase.getData();
    expect(banks).toEqual(mockBanks);
  });
});

describe("Get Banks from Local", () => {
  const mockBanks: Bank[] = [
    {
      age: 10,
      url: "http://test.com",
      bankName: "Bank test local",
      description: "Bank description",
    },
  ];

  beforeEach(async () => {
    await AsyncStorage.setItem("isFirstLoad", "true");
    await AsyncStorage.setItem("banks", JSON.stringify(mockBanks));
  });

  test("should get banks from api", async () => {
    const getBanksUseCase = new GetBanks();

    const banks = await getBanksUseCase.getData();
    expect(banks).toEqual(mockBanks);
  });
});
