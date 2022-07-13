import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { SignIn } from './src/screens/SignIn';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword } from './src/screens/ForgotPassword';
import { Register } from './src/screens/Register';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
