import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview'

export default function Website({ navigation }) {
    const SUITMEDIA = 'https://suitmedia.com/   '
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '100%' }}>
                <WebView
                    source={{ uri: SUITMEDIA }}
                    onLoad={console.log('Loaded')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: "center",
        justifyContent: "center"
    }
})