import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber X',
    multiplier: 1,
    image: 'https://tinyurl.com/2p8njz87',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://tinyurl.com/37r96pvh',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://tinyurl.com/243334jh',
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NavigateCard');
          }}
          className="absolute top-3 left-5 p-3 rounded-full z-50"
        >
          <Icon name="chevron-left" type="font-awesome" size={16} />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row items-center justify-between px-10 ${
              item.id === selected?.id && 'bg-gray-200'
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />

            <View className="-ml-6">
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'USD',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && 'bg-gray-400'} rounded-lg`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
