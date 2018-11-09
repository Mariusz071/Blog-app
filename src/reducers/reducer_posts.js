import { FETCH_POSTS, FETCH_SINGLE_POST, DELETE_POST } from "../actions";
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");

        case FETCH_SINGLE_POST:
            const post = action.payload.data;
            //key interpolation = id is set as a key of the object
            return { ...state, [action.payload.data.id]: action.payload.data };

        case DELETE_POST:
            //Checking state object - if it has key of post id remove it and return new object
            return _.omit(state, action.payload);

        default:
            return state;
    }
}