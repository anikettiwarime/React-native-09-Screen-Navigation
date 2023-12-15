import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'This is home screen',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'This is details screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
