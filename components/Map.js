import BottomPanel from './BottomPanel'

import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps'
import Pintpoint from './Pintpoint';

export default function Map(props) {

    const data = props.data
    const [singleData, setSingleData] = useState({})

    const [isPointSelected, setIsPointSelected] = useState(false)

    var currentPosition = {
        latitude: -5.176377453043119,
        longitude: 119.50775389697328,
    }

    function selectPintpoint(id) {
        setIsPointSelected(true)
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == id) {
                setSingleData(data[index])
            }
        }
        console.log(singleData)
    }

    function parentPosition() {
        setIsPointSelected(false)
    }

    return (
        <View style={styles.fill}>
            <MapView
                style={styles.fill}
                initialRegion={{
                    latitude: currentPosition.latitude,
                    longitude: currentPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={parentPosition}
            >
                {
                    data.map((d, index) => (
                        <Pintpoint
                            key={index}
                            data={d}
                            selectPintpoint={selectPintpoint}
                        />
                    ))
                }
            </MapView>
            {
                isPointSelected ?
                    <BottomPanel singleData={singleData} /> :
                    null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1
    }
})