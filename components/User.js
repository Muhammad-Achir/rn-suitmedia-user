import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function User({ data }) {
    const navigation = useNavigation()

    function userDetail() {
        navigation.navigate('Home', {
            avatar: data.avatar,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        })
    }

    return (
        <TouchableOpacity
            onPress={userDetail}
            style={styles.container}
        >
            <Image
                style={styles.avatar}
                source={{ uri: data.avatar }}
            ></Image>
            <View style={styles.desc}>
                <Text style={styles.name}>{data.id} {data.first_name} {data.last_name}</Text>
                <Text style={styles.email}>{data.email}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 38,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        padding: 15
    },
    avatar: {
        width: 49,
        height: 49,
        borderRadius: 100
    },
    desc: {
        flexDirection: "column",
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        height: 24
    },
    email: {
        fontSize: 10,
        height: 15
    }
})