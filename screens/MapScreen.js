import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'


const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('HomeScreen')}
        className='bg-gray-100 absolute top-12 left-6 z-50 p-3 rounded-full shadow-lg'>
        <Icon name='menu' />
      </TouchableOpacity>
      <View className='h-1/2'>
        <Map />
      </View>
      <View className='h-1/2'>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='NavigateCard' component={NavigateCard} />
          <Stack.Screen name='RideOptionsCard' component={RideOptionsCard} />
        </Stack.Navigator>      
      </View>
    </View>
  )
}

export default MapScreen