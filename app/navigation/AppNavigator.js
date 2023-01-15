import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import BooksScreen from "../screens/BooksScreen";
import SearchScreen from "../screens/SearchScreen";
import AddBookScreen from "../screens/AddBookScreen";
import MenuScreen from "../screens/MenuScreen";
import NewBookButton from "./NewBookButton";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BooksScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddBook"
        component={AddBookScreen}
        options={(navigation) => ({
          tabBarButton: () => (
            <NewBookButton onPress={() => navigation.navigate("AddBook")} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
