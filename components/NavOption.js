import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import color from '../res/color'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
const optionList = [
    {
        id: "12345",
        title: "Get a Ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen"
    },
    {
        id: "485785",
        title: "Order Food",
        image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
        screen: "EatsScreen"
    }
]

const NavOption = () => {

    const navigation = useNavigation()

    const { origin } = useSelector(state => state.nav)

    return (
        <View>

            <FlatList
                keyExtractor={(item) => item.id}
                data={optionList}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity style={tw`bg-gray-200 pt-4 pl-5 pr-3 m-2 pb-8 w-40 `}
                        onPress={() => navigation.navigate(item.screen)}
                        
                        disabled={origin ? false : true}
                    >
                        <View style={tw`${!origin && 'opacity-20'}`}>
                            <Image style={{ width: 120, height: 120, resizeMode: 'contain' }} source={{
                                uri: `${item.image}`
                            }} />
                            <Text style={tw`mb-3 font-bold text-lg`}>{item.title}</Text>

                            <Icon
                                style={tw`bg-black rounded-full w-10 p-2`}
                                type="antdesign"
                                name='arrowright'
                                color={`${color.white}`} />
                        </View>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

export default NavOption
