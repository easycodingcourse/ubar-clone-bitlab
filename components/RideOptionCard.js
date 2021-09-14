import { useNavigation } from '@react-navigation/core'
import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'

const RideOptionCard = () => {


    const [selectedItem, setSelectedItem] = useState(null)

    const data = [
        {
            id: "Uber-X-1234",
            title: "Uber-X",
            multiplier: 1,
            image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"
        },
        {
            id: "Uber-XL-458",
            title: "Uber XL",
            multiplier: 1.2,
            image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png"
        },
        {
            id: "Uber-LUX-847",
            title: "Uber LUX",
            multiplier: 1.75,
            image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png"
        }

    ]

    const navigation = useNavigation()
    return (
        <View style={tw`bg-white flex-grow`}>


            <View >
                <Text style={tw`text-center text-xl py-3 text-black font-semibold `}>Select a Ride</Text>
                <TouchableOpacity
                    style={tw`absolute top-3 left-3`}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="chevron-left"
                        type="heroicons"
                        color="black"
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={tw`flex-row items-center px-10 justify-between ${selectedItem?.id===item.id?'bg-gray-200':'bg-white'}`}
                    onPress={()=>setSelectedItem(item)}
                    >
                        <Image source={{ uri: `${item.image}` }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                        <View style={tw`-ml-10`}>
                            <Text style={tw`text-xl font-semibold`}> {item.title}</Text>
                            <Text>{`Travel Time ..`}</Text>
                        </View>
                        <Text style={tw`text-xl`}>{`500tk`}</Text>
                    </TouchableOpacity>
                )}
            />



        </View>
    )
}

export default RideOptionCard


