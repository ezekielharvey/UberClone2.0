import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

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
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View className={`${!origin && 'opacity-20'}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{
                uri: item.image,
              }}
            />
            <Text className="mt-2 text-lg font-semibold ">{item.title}</Text>
            <View className="p-2 bg-black rounded-full w-10 mt-4">
              <Icon name="arrowright" color="white" type="antdesign" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
