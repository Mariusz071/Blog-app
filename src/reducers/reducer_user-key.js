import { GET_KEY } from "../actions";


const userKeyReducer = (key = null, action) => {
    if (action.type === GET_KEY) {
        return action.payload;
    }
    return key;
};

export default userKeyReducer