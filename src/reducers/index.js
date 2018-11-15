import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import userKeyReducer from './reducer_user-key';



const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
    key: userKeyReducer
});

export default rootReducer;
