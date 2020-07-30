const ADD_COMMENT = "ADD-COMMENT"


let initialState = {
    comments: [
        {id:1, name: "Fiona", lastName: "Shrekova", age: 20, comment: "Была у вас, не понравилось"}
    ]
}
const commentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            debugger;
            // let id = state.comments.id
            return {
                ...state, comments: [...state.comments,
                    {name: action.newComment.name,
                        lastName: action.newComment.lastName,
                        comment: action.newComment.comment }]
            }
        }
        default:
            return state;
    }
}

export const sendComment = (newComment) => ({type: ADD_COMMENT, newComment})
export default commentsReducer;