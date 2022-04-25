import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

function BottomPanel(props) {
    const singleData = props.singleData
    const navigation = useNavigation()

    function selectUser() {
        navigation.navigate('Home', {
            avatar: singleData.avatar,
            first_name: singleData.first_name,
            last_name: singleData.last_name,
            email: singleData.email
        })
    }

    return (
        <View style={styles.bottomPanel}>
            <Image
                style={styles.logo}
                source={{ uri: singleData.avatar }}
            />
            <Text style={styles.userName}>{singleData.first_name} {singleData.last_name}</Text>
            <TouchableOpacity
                style={styles.touch}
                onPress={selectUser}
            >
                <Text style={styles.textTouch}>Select</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomPanel

const styles = StyleSheet.create({
    bottomPanel: {
        width: "100%",
        height: 275,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: "#FFFFFF",
        alignSelf: "center"
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        borderRadius: 100,
        marginVertical: 30
    },
    userName: {
        fontSize: 24,
        height: 36,
        fontWeight: "bold",
        alignSelf: "center"
    },
    touch: {
        margin: 10,
        width: 300,
        height: 40,
        padding: 8,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: "#2B637B",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    textTouch: {
        color: "white"
    }
})