const isLiked = (state = false, action) => {
    switch(action.type) {
        case 'ISLIKED' : 
        return {
            ...state
        }

        default :
        return {...state}
    }
} 
export default isLiked;