import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../../components/nav/NavOptions";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../slices/navSlice";

export default Home = () => {

  const dispatch= useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details=null)=>{
           dispatch(setOrigin({
            location:details.geometry.location,
            description: data.description
           }))
           dispatch(setDestination(null))
            console.log('detalhes ai viu', details )
          }}

          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "pt-BR",
          }}
          placeholder="Para onde deseja ir?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

// modelo de uso para usar os styles
{
  /* <SafeAreaView>
<Text style={[tw `text-red-500 p-10`, styles.text]}>Home</Text>
<Text style={[tw `text-red-500 p-10`, {
  color:'red',
},
]}>Home</Text>
</SafeAreaView> */
}
