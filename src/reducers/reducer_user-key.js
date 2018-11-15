import { GET_KEY } from "../actions";
import { userName } from '../actions/';

const userKeyReducer = (key = userName, action) => {
    if (action.type === GET_KEY) {
        console.log('siaalalal');
        return action.payload;
    }
    return key;
};

export default userKeyReducer