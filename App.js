
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Enterence from "./src/screens/Enterence"
import Login from "./src/screens/Login"
import Register from "./src/screens/Register"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: false }}
        initialRouteName="Entrance"
      >
    
        <Stack.Screen name="Enterence" component={Enterence} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "lightblue",
    padding: 20,
    paddingHorizontal: 40,
    fontSize: 24,
    borderRadius: 10,
    fontStyle: "italic",
  },
});
