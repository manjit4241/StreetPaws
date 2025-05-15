import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import { InjuredScreen, RescueScreen, DangerScreen } from '../screens/PlaceholderScreens';
import { useTheme } from '../theme/ThemeContext';

const Stack = createStackNavigator();

// Remove the NavigationContainer wrapper
const AppNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
        // Add transition animation
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 300 } },
          close: { animation: 'timing', config: { duration: 300 } },
        },
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Injured" component={InjuredScreen} />
      <Stack.Screen name="Rescue" component={RescueScreen} />
      <Stack.Screen name="Danger" component={DangerScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;