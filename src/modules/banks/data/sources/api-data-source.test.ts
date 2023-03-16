import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Bank } from "../../domain/entities/bank-entity";
import ApiBank from "./api-data-source";

const mockBanks: Bank[] = [
  {
    age: 10,
    url: "http://test.com",
    bankName: "Bank test",
    description: "Bank description",
  },
];

const baseURL = "http://test.com";

describe("Api Data Source", () => {
  test("should call api banks", async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet(`${baseURL}/banks`).reply(200, mockBanks);

    const apiDataSource = new ApiBank(baseURL);
    const response = await apiDataSource.getBanks();

    expect(response.data).toEqual(mockBanks);
    mockAxios.reset();
  });
});
