import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Es6 from "./src/pages/Es6";

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Es6">
        <Tab.Screen name="Es6" component={Es6} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
