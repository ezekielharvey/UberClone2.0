import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const data = [
  {
    id: '123',
    title: 'Get a Ride',
    image: 'https://tinyurl.com/3brej7bx',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order Food',
    image: 'https://tinyurl.com/4mb2uf5y',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  return (
    <FlatList 
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'>
          <View>
            <Image 
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{
                uri: item.image,
              }}
            />
            <Text className='mt-2 text-lg font-semibold '>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
