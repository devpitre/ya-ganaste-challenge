import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalApiBank {
  async getBanks() {
    return AsyncStorage.getItem("banks");
  }
}

export default LocalApiBank;
