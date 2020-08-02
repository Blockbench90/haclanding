const ADD_COMMENT = "ADD-COMMENT"


let initialState = {
    comments: [
        {id:1,
            name: "Fiona",
            lastName: "Shrekova",
            time: null,
            age: 20,
            comment: "Была у вас, не понравилось",
        sex: "female"},
        {id:2,
            name: "Carlos",
            lastName: "Solis",
            time: null,
            age: 30,
            comment: "Чешу яйца топором",
            sex: "male"},
        {id:3,
            name: "Surcis",
            lastName: "Aloha",
            time: null,
            age: 30,
            comment: "(Телефон в пользовании пол дня, со временем буду дополнять отзыв). На данный момент у нас самсунг j700 и xiaomi redmi note 8. Я буду писать сугубо свое мнение об m21, без ваших процесоров, ядер и прочего) так же параллельно сравню с redmi note 8 pro, так как был три дня в исспользовании и я его сдала.\n" +
                "Вообщем, экран крутой, яркий. В руке лежит удобно, магия или нет, но в сравнении с ноут 8-рука от самсунга не устает. Звук громкий, но не громче чем у прошки. Хороший, хотя если слушать на максимуме, я бы не зказала что он идеально чистый(в сравнении с моим стареньким j700). Опять же, это личное мое мнение. Не знаю почему, я не профи, но без включенных программ и пустым от программ телефоном, память оп в 4 гига уже на 2 с копейками забита...\n" +
                "Выкладываю сюда фото сравнения с xiaomi redmi note 8. Забегу наперед..я не считаю что тут очень крутая камера..она хороша, но как по мне-у redmi note 8 pro она получше в контрастности и при увеличении картинки. Забегу еще раз, прошку клацала и во время фотографирования выскакивали полосы..именно поэтому поменяла про на самсунг. Я не фанатик определенных брендов, но это мой 6 самсунг и первое знакомство со сяоми было провальным.",
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