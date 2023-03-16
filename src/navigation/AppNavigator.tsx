import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BankListScreen from "../modules/banks/presentation/screens/bank-list";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "#eaf2f8" } }}
    >
      <Stack.Screen
        name="BankListScreen"
        component={BankListScreen}
        options={{
          title: "Bancos",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Inter" },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
