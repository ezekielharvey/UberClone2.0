import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Ezekiel</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{ key: GOOGLE_MAPS_APIKEY }}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  desciption: data.description,
                })
              );

              navigation.navigate('RideOptionsCard');
            }}
          />
          <View className='mb-5'>
            <NavFavorites />
          </View>
        </View>
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-12 border-t border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          className="flex-row bg-black w-24 px-4 py-3 rounded-full justify-between"
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row bg-white w-24 px-4 py-3 rounded-full justify-between">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-black text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

export default NavigateCard;
