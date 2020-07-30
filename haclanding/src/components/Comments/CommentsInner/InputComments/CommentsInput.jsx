import React from "react";
import s from "./CommentsInput.module.css"
import {Field, reduxForm} from "redux-form";
import {sendComment} from "../../../redux/comments-reducer";


const CommentsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.Input}>
            <div className={s.InputInner}>
                <div className={s.InputWrapper}>
                    <Field component="input" name={"name"} placeholder="Введите ваше имя"/>
                </div>
            </div>
            <div className={s.InputInner}>
                <div className={s.InputWrapper}>
                    <Field component="input" name="lastName" placeholder="Введите ваше фамилию"/>
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
                    <Field component="textarea" name={"comment"} placeholder={"Оставьте ваш отзыв"}/>
                </div>
            </div>
            <div className={s.wrapperButton}>
                <button type="submit">Отправить</button>
            </div>
        </form>
    )
};

let CommentsReduxForm = reduxForm({form: "test"})(CommentsForm)

const CommentsInput = (props) => {
    let onSubmit = (formData) => {
        debugger;
        sendComment(formData)
    }
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <CommentsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default CommentsInput;