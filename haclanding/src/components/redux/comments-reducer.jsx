const ADD_COMMENT = "ADD-COMMENT"


let initialState = {
    comments: [
        {id:1,
            name: "Fiona",
            lastName: "Shrekova",
            age: 20,
            comment: "Была у вас, не понравилось",
        sex: "female"},
        {id:2,
            name: "Carlos",
            lastName: "Solis",
            age: 30,
            comment: "Чешу яйца топором",
            sex: "male"}
    ]
}
const commentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            debugger;
            let aNewComment = {
                id: action.newComment.lastName,
                name: action.newComment.name,
                lastName: action.newComment.lastName,
                age: action.newComment.age,
                comment: action.newComment.comment,
                sex: action.newComment.sex
            }
            return {
                ...state, comments: [...state.comments, aNewComment]
            }
        }
        default:
            return state;
    }
}

export const sendComment = (newComment) => ({type: ADD_COMMENT, newComment})

export default commentsReducer;