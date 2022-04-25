import { Marker } from "react-native-maps"

function Pintpoint(props) {

    const min = {
        latitude: -5.140948090729739,
        longitude: 119.41440386417358
    }

    const max = {
        latitude: - 5.2181735749918445,
        longitude: 119.59823833028676
    }

    function randLatitude() {
        return min.latitude + Math.random() * (max.latitude - min.latitude)
    }
    function randLongitude() {
        return min.longitude + Math.random() * (max.longitude - min.longitude)
    }

    function selectPintpoint() {
        props.selectPintpoint(props.data.id)
    }

    return (
        <Marker
            coordinate={{
                latitude: randLatitude(),
                longitude: randLongitude()
            }}
            onPress={selectPintpoint}
        >

        </Marker>
    )
}

export default Pintpoint