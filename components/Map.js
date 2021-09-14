import React, { useEffect, useRef } from 'react'
import { View, Text, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_API_KEY } from "@env"
const Map = () => {

    const { origin, destination } = useSelector(state => state.nav)


    console.log(origin, destination);

    const mapRef = useRef(null)


    useEffect(() => {
        cameraOnScreen()
    }, [origin, destination])




    const cameraOnScreen = () => {
        console.log("call");
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        })
    }

    return (

        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"

            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >

            {
                origin && destination && (
                    <MapViewDirections
                        lineDashPattern={[0]}
                        origin={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                        }}
                        destination={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }}
                        apikey={GOOGLE_MAP_API_KEY}
                        strokeColor="black"
                        strokeWidth={5}
                        onError={(errorMessage) => {
                            console.log(errorMessage);
                        }}

                        onReady={result => {
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)

                            cameraOnScreen()
                            // this.mapView.fitToCoordinates(result.coordinates, {
                            //     edgePadding: {
                            //         right: (width / 20),
                            //         bottom: (height / 20),
                            //         left: (width / 20),
                            //         top: (height / 20),
                            //     }
                            // });
                        }}
                    />
                )
            }

            {
                origin?.location && (
                    <Marker
                        key="1215"
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng,
                        }}
                        title="Pick Up Locaion"
                        description={origin.description}
                        identifier="origin"
                    />
                )
            }



            {
                destination?.location && (
                    <Marker
                        key="87765"
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng,
                        }}
                        title="destination Locaion"
                        description={destination.description}
                        identifier="destination"
                    >
                        {/* <Image source={{uri:"https://www.clipartmax.com/png/small/338-3388064_computer-icons-marker-pen-location-map-highlighter-location-marker-icon-png.png"}} style={{height: 35, width:35,resizeMode:'contain' }} /> */}
                        <Image source={require('../assets/marker.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                    </Marker>
                )
            }




        </MapView>

    )
}

export default Map
