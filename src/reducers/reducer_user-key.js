import { GET_KEY } from "../actions";
import { userName } from '../actions/';

const userKey = (key = userName, action) => {
    if (action.type === GET_KEY) {
        return action.payload;
    }
    return key;
};

export default userKey