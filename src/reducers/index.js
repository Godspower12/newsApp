import  {combineReducers} from 'redux';
import NewsReducer from './newsReducer';
import likeReducer from './newsReducer';
import isLiked from './newsReducer';


const rootReducer = combineReducers(
    {
        news : NewsReducer,
        likes: likeReducer,
        isLiked: isLiked, 
    }
)

export default rootReducer;