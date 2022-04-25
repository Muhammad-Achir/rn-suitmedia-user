import { Constant } from "./constActions";

export function setUserComponentTrue(payload) {
    return { type: Constant.SET_USER_COMPONENT_TRUE, payload }
}

export function setUserComponentFalse(payload) {
    return { type: Constant.SET_USER_COMPONENT_FALSE, payload }
}

function setUserData(payload) {
    return { type: Constant.SET_DATA, payload }
}

export function fetchUser(next) {
    if (!next) {
        next = 1
    }

    return function (dispatch) {
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
                    // setData([...data, ...result.data])
                    // setIsLoading(false)
                    dispatch(setUserData(result.data))
                    console.log("in fetch" + result.data)
                } else {
                    // setEndPages(true)
                }
                console.log("fetch")
            })
            .catch(err => {
                throw new Error('There is something wrong')
            })
    }
}