import React, { Fragment } from "react";
import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation, route }) {
    const email = route.params.email
    let userName
    if (!email) {
        userName = route.params.name
    } else {
        userName = route.params.first_name + " " + route.params.last_name
    }

    function toWebsite() {
        navigation.navigate('Website')
    }

    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <Text style={styles.textName}>{userName}</Text>

            <View style={styles.main}>
                {
                    email ?
                        <Image
                            style={styles.logo}
                            source={{ uri: route.params.avatar }}
                        /> :
                        <Image
                            style={styles.logo}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
                        />
                }
                {
                    (!email) ?
                        <Text>Select a user to show the profile</Text> :
                        <Fragment>
                            <Text style={styles.userName}>{userName}</Text>
                            <Text style={styles.email}>{email}</Text>
                            <TouchableOpacity onPress={toWebsite}>
                                <Text style={styles.textToWebsite}>Website</Text>
                            </TouchableOpacity>
                        </Fragment>
                }
            </View>
            <View
                style={styles.buttonDetail}
            >
                <Button
                    style={{ borderRadius: 100 }}
                    title="Choose a User"
                    onPress={() => navigation.navigate('Users')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    main: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    textName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    logo: {
        width: 164,
        height: 164,
        alignSelf: "center",
        borderRadius: 100,
        marginVertical: 40
    },
    userName: {
        fontSize: 24,
        height: 36,
        fontWeight: "bold"
    },
    email: {
        fontSize: 18,
        height: 36,
    },
    buttonDetail: {
        color: "red",
        position: "absolute",
        bottom: 0,
        width: "100%",
        marginVertical: 16,
        marginHorizontal: 16
    },
    textToWebsite: {
        color: "#2B637B",
        textDecorationLine: "underline"
    }
})