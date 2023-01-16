import { createStackNavigator } from "@react-navigation/stack";
import BookDetailsScreen from "../screens/BookDetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{ headerShown: false }}
      component={HomeScreen}
    />
    <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
