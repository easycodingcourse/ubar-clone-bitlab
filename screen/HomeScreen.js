import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TextInput, Image, FlatList } from 'react-native'
import color from '../res/color'
import tw from 'tailwind-react-native-classnames'
import NavOption from '../components/NavOption'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../redux/slices/navSlice'
import FavPlaces from '../components/FavPlaces'

const HomeScreen = () => {

    const dispatch = useDispatch()




    return (
        <View >

            <SafeAreaView style={tw`p-5 pt-8 bg-white h-full`} >
                <Image
                    style={{
                        height: 50,
                        width: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder={"Where From?"}
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    onPress={(data, detiails = null) => {

                        dispatch(setOrigin({
                            location: detiails.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    query={{
                        key: GOOGLE_MAP_API_KEY,
                        language: 'en'
                    }}
                    enablePoweredByContainer={false}
                    minLength={2}
                    fetchDetails={true}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />

                <NavOption />
                <FavPlaces/>


               
            </SafeAreaView>
        </View>

    )
}

export default HomeScreen


const styles = StyleSheet.create({
    textColor: {
        color: "#32c2c2"
    }
})
