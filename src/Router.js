import React from 'react';
import { SafeAreaView, View, Text, FlatList, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import Products from './pages/Products/Product';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Loading from './components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Router = () => {
  const userSession = useSelector(state => state.user)
  const isloading = useSelector(state => state.isAuthloading)
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: "Shopping Mall",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "white" },
                headerTintColor: "white",
                headerRight: () =>
                  <Icon
                    name="logout"
                    size={30}
                    color="white"
                    onPress={() => dispatch({ type: "REMOVE_USER" })}
                  />
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={Detail}
              options={{
                title: "Detay",
                headerStyle: { backgroundColor: "#64b5f6" },
                headerTitleStyle: { color: "white" },
                headerTintColor: "white"
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Router;


