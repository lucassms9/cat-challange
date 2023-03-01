import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './components/CustomTabBar';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
