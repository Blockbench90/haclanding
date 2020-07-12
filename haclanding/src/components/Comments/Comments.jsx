import React from "react";
import s from "./CommentsArray.module.css"
import {Input, Textarea} from "../../common/comments/CommentsProps";
import Button from "../../common/Butoon/Button";


const Comments = (props) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.Input}>
                    <Input placeholder={"Введите ваше имя"}/>
                    <Input placeholder={"Введите ваше фамилию"}/>
                    <Textarea placeholder={"Оставьте ваш отзыв"}/>
                    <Button title={"Отправить"}/>
                </div>
            </div>
        </div>
    )
}
export default Comments;