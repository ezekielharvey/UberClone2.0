import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1">
        <StatusBar style="auto" />
        <HomeScreen />
      </View>
    </Provider>
  );
}
