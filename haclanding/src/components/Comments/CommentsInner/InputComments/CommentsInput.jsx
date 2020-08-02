import React from "react";
import s from "./CommentsInput.module.css"
import {Field, reduxForm, reset} from "redux-form";
import {sendComment} from "../../../redux/comments-reducer";
import {connect} from "react-redux";


const CommentsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.Input}>
            <div className={s.InputInner}>
                <div className={s.InputWrapper}>
                    <Field component="input" name="name" placeholder="Введите ваше имя"/>
                </div>
            </div>
            <div className={s.InputInner}>
                <div className={s.InputWrapper}>
                    <Field component="input" name="lastName" placeholder="Введите вашу фамилию"/>
                </div>
            </div>
            <div className={s.InputInner}>
                <div className={s.Sex}>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male" />
                        {' '}
                        Мужчина или
                        {' '}
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female" />
                        {' '}
                        Женщина
                    </label>
                </div>
            </div>
            <div className={s.InputInner}>
                <div className={s.InputWrapper}>
                    <Field component="input" name="age" placeholder="Возраст"/>
                </div>
                <span>*Возраст нужен, чтобы подобрать подходящую аватарку</span>
            </div>
            <div className={s.TextareaInner}>
                <div className={s.TextareaWrapper}>
                    <Field component="textarea" name="comment" placeholder={"Оставьте ваш отзыв"}/>
                </div>
            </div>
            <div className={s.wrapperButton}>
                <button type="submit">Отправить</button>
            </div>
        </form>
    )
};

let CommentsReduxForm = reduxForm({form: "comments"})(CommentsForm)

const CommentsInput = (props) => {
    let onSubmit = (formData, dispatch) => {
        console.log(formData);
        props.sendComment(formData);
        dispatch(reset("comments"))
    }
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <CommentsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments
})

export default connect(mapStateToProps, {sendComment})(CommentsInput);