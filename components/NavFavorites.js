import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import Entypo from '@expo/vector-icons/Entypo';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'La Jolla, California, USA',
  },
  {
    id: '234',
    icon: 'briefcase',
    location: 'Work',
    destination: 'San Diego, California, USA',
  },
  // {
  //   id: '345',
  //   icon: 'briefcase',
  //   location: 'Booty Call',
  //   destination: 'The Street, San Francisco, CA, USA',
  // },
  // {
  //   id: '456',
  //   icon: 'briefcase',
  //   location: 'Girls House',
  //   destination: 'San Diego, California, USA',
  // },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View 
          className='bg-gray-200 h-0.5'
        />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <View className="mr-4 rounded-full bg-gray-300 p-3">
            <Icon color="white" name={item.icon} size={18} type="ionicon" />
          </View>
            <View>
              <Text className="font-semibold text-lg">{item.location}</Text>
              <Text className='text-gray-500'>{item.destination}</Text>
            </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
