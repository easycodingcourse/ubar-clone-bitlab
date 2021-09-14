import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const FavPlaces = () => {

    const optionList = [
        {
            id: 12345,
            icon: "home",
            title: "Home",
            location: "GEC More, Chattogram, Bangladesh"
        }, {
            id: 55747,
            icon: "briefcase",
            title: "Work",
            location: "Agrabad, Chattogram, Bangladesh"
        },

    ]


    const itemView = ({ item }) => {

        return (
            <TouchableOpacity style={tw`flex-row p-5 rounded`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    type="ionicon"
                    color="white"
                    name={item.icon}
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{item.title}</Text>
                    <Text style={tw`text-gray-500`}>{item.location}</Text>
                </View>
            </TouchableOpacity>
        )
    }



    return (


        <FlatList
            data={optionList}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-300 h-1`, { height: .5 }]}></View>
            )}
            renderItem={itemView}

        />


    )
}

export default FavPlaces

const styles = StyleSheet.create({})
