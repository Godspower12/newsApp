const likeReducer = (state = Math.floor(Math.random() * 100) , action) => {
    switch(action.type) {
        case 'GET_LIKES' : 
        return {
            ...state
        }

        default :
        return {...state}
    }
};
export default likeReducer;
