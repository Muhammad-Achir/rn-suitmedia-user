import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native"
import User from "../components/User"
import Map from "./Map"

export default function Users({ route }, props) {
    console.log(props.isListUser)
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [endPages, setEndPages] = useState(false)
    const [isUserComponent, setIsUserComponent] = useState(true)

    function fetchData() {
        setIsLoading(true)
        fetch('https://reqres.in/api/users?page=' + currentPage + '&per_page=10')
            .then(response => {
                if (response) {
                    return response.json()
                } else {
                    return new Error('There is wrong at fetch')
                }
            })
            .then(result => {
                if (result.data[0]) {
                    setData([...data, ...result.data])
                    setIsLoading(false)
                    console.log("in fetch" + result.data)
                } else {
                    setEndPages(true)
                }
                console.log("fetch")
            })
            .catch(err => {
                throw new Error('There is something wrong')
            })
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])

    function renderLoader() {
        return (
            isLoading ?
                <View style={styles.loaderStyle}>
                    {endPages ?
                        <Text style={{ alignSelf: "center" }}>All Datas has been showed</Text> :
                        <ActivityIndicator size="large" color="#aaa" />
                    }
                </View> :
                null
        )
    }

    function loadMore() {
        setCurrentPage(currentPage + 1)
        console.log(currentPage)
    }

    return (
        isUserComponent ?
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <User data={item} />
                )}
                ListFooterComponent={renderLoader}
                onEndReached={loadMore}
                onEndReachedThreshold={0}
            /> :
            <Map />

    )
}

const styles = StyleSheet.create({
    loaderStyle: {
        marginVertical: 16,
    }
})