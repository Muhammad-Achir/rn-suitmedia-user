import { Constant } from '../constActions';

const data = []
function userDataReducer(state = data, action) {
    switch (action.type) {
        case Constant.SET_DATA:
            return action.payload;
        default:
            console.log('def')
            return state;
    }
}

export default userDataReducer;