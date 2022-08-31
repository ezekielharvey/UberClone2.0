import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
          }}
        />
        <GooglePlacesAutocomplete
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                desciption: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
