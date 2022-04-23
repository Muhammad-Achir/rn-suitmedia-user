import { useState } from "react";
import { ImageBackground, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

export default function Login({ navigation }) {

    const [user, setUser] = useState({
        name: '',
        palindrome: ''
    })

    function checkPalindrome() {
        if (user.palindrome) {
            const text = user.palindrome.toLowerCase()
            for (var i = 0; i < text.length / 2; i++) {
                if (text.charAt(i) !== text.charAt(text.length - 1 - i)) {
                    return alert(text + " is not palindrome");
                }
            }
            return alert(text + " is palindrome");
        } else {
            return alert("Please enter text before!" + userComponent);
        }
    }

    function next() {
        navigation.navigate('Home', {
            name: user.name,
            email: ""
        })
    }

    return (
        <ImageBackground
            style={styles.background}
            source={{ uri: 'https://cdn.pixabay.com/photo/2018/10/14/13/01/ruin-3746423_960_720.jpg' }}
        >
            <View>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
                />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={(text) => setUser((currentState) => ({
                            ...currentState, name: text
                        }))}
                        value={user.name}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Palindrome"
                        onChangeText={
                            (text) => setUser(
                                (currentState) => ({
                                    ...currentState, palindrome: text
                                })
                            )
                        }
                        value={user.palindrome}
                    />
                </View>
                <View style={styles.action}>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={checkPalindrome}
                    >
                        <Text style={styles.textTouch}>CHECK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={next}
                    >
                        <Text style={styles.textTouch}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    logo: {
        width: 116,
        height: 116,
        alignSelf: "center",
        borderRadius: 100
    },
    inputView: {
        marginTop: 40
    },
    input: {
        margin: 10,
        width: 270,
        height: 40,
        padding: 8,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    action: {
        marginTop: 20
    },
    touch: {
        margin: 10,
        width: 270,
        height: 40,
        padding: 8,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: "#2B637B",
        alignItems: "center",
        justifyContent: "center"
    },
    textTouch: {
        color: "white"
    }
})