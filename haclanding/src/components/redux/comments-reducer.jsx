const ADD_COMMENT = "ADD-COMMENT"


let initialState = {
    comments: [
        {id:1,
            name: "Максим",
            lastName: "Hacker-Inside",
            time: null,
            age: 30,
            comment: "Если у вас появилось желание оставить отзыв, ну что-же, милости просим и зарание весьма благодарны",
        sex: "male"}
    ]
}
const commentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            let time = new Date().toLocaleDateString();
            let age = action.newComment.age
            let aNewComment = {
                id: Number(age),
                name: action.newComment.name,
                lastName: action.newComment.lastName,
                age: action.newComment.age,
                comment: action.newComment.comment,
                sex: action.newComment.sex,
                time,
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