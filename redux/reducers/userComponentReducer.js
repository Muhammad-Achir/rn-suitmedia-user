import { Constant } from '../constActions';

const check = true
function userComponentReducer(state = check, action) {
    switch (action.type) {
        case Constant.SET_USER_COMPONENT_TRUE:
            return true;
        case Constant.SET_USER_COMPONENT_FALSE:
            return false;
        default:
            console.log('def')
            return state;
    }
}

export default userComponentReducer;