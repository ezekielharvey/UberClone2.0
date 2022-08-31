import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import MapScreen from './screens/MapScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="MapScreen" component={MapScreen} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
