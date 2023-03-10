import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoaderScreen from './Screens/LoadingScreen';
import ShowDataScreen from './Screens/DataScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loader" component={LoaderScreen} />
        <Stack.Screen name="Data" component={ShowDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
