import React from "react";
import s from "./CommentsInput.module.css"
import {Field, reduxForm, reset} from "redux-form";
import {sendComment} from "../../../redux/comments-reducer";
import {connect} from "react-redux";
import {maxLength, minLength, number} from "../../../../common/validators/validators";
import {Input, Textarea} from "../../../../common/comments/CommentsProps";




const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength15 = maxLength(15);
const maxLength25 = maxLength(25);
const minLength2 = minLength(2);
// const number = number()

const CommentsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.Input}>
            <div className={s.InputInner}>
                <div className={s.InputWrapper }>
                    <Field component={Input} name="name" placeholder="Введите ваше имя" validate={[required, maxLength15, minLength2]}/>
                </div>
            </div>
            <div className={s.InputInner}>
                <div className={s.InputWrapper}>
                    <Field component={Input} name="lastName" placeholder="Введите вашу фамилию" validate={[required, maxLength25, minLength2]}/>
                </div>
            </div>
            <div className={s.InputInner}>
                <div className={s.Sex}>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male"/>
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
                    <Field component={Input} name="age" placeholder="Возраст" validate={[required, number]}/>
                </div>
                <span>*Возраст нужен, чтобы подобрать подходящую аватарку</span>
            </div>
            <div className={s.TextareaInner}>
                <div className={s.TextareaWrapper}>
                    <Field component={Textarea} name="comment" placeholder={"Оставьте ваш отзыв"} validate={[required, minLength2]}/>
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