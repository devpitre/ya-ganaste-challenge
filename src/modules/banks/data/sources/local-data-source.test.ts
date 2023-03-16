import AsyncStorage from "@react-native-async-storage/async-storage";
import { Bank } from "../../domain/entities/bank-entity";
import LocalApiBank from "./local-data-source";

const mockBanks: Bank[] = [
  {
    age: 10,
    url: "http://test.com",
    bankName: "Bank test",
    description: "Bank description",
  },
];

describe("Local Data Source", () => {
  beforeEach(async () => {
    await AsyncStorage.setItem("banks", JSON.stringify(mockBanks));
  });

  test("should get banks", async () => {
    const localDataSource = new LocalApiBank();
    const banks = await localDataSource.getBanks();

    expect(JSON.parse(banks!)).toEqual(mockBanks);
  });
});
