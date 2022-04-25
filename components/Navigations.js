import Home from '../screens/Home';
import Login from '../screens/Login';
import Users from '../screens/Users';
import Website from '../screens/Website.js';

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { setUserComponentTrue, setUserComponentFalse } from '../redux/actions';

const Stack = createNativeStackNavigator()

function Navigations() {

    const userComponent = useSelector((state) => state.userComponentReducer)
    const dispatch = useDispatch()

    function changeListToUser() {
        dispatch(setUserComponentTrue(userComponent))
    }

    function changeListToMap() {
        dispatch(setUserComponentFalse(userComponent))
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Login}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home}
                />
                {
                    userComponent ?
                        <Stack.Screen
                            name="Users" component={Users}
                            options={{
                                headerRight: () => (
                                    <Fontisto name="map-marker-alt" size={24} color="black"
                                        onPress={changeListToMap}
                                    />
                                ),
                            }}
                        /> :
                        <Stack.Screen
                            name="Users" component={Users}
                            options={{
                                headerRight: () => (
                                    <FontAwesome5 name="list-ul" size={24} color="black"
                                        onPress={changeListToUser}
                                    />
                                ),
                            }}
                        />
                }

                <Stack.Screen name="Website" component={Website} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigations