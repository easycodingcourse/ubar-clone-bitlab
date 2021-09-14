import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { setDestination } from '../redux/slices/navSlice'
import {GOOGLE_MAP_API_KEY} from "@env"
import FavPlaces from './FavPlaces'

const NavigateCard = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <View style={tw`bg-white flex-1`}>
            <Text style={tw`text-center text-xl py-3`}>Select a Distination Location</Text>
            <View>
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

                        dispatch(setDestination({
                            location: detiails.geometry.location,
                            description: data.description
                        }))

                        navigation.navigate("RideOptionCard")
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
            </View>

            <FavPlaces/>
        </View>
    )
}

export default NavigateCard
