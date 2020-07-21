import React from "react";
import s from "./CommentsInput.module.css"
import {Input, Textarea} from "../../common/comments/CommentsProps";
import Button from "../../common/Butoon/Button";


const CommentsInput = (props) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.Input}>
                    <div className={s.InputInner}>
                        <Input placeholder={"Введите ваше имя"}/>
                    </div>
                    <div className={s.InputInner}>
                        <Input placeholder={"Введите ваше фамилию"}/>
                    </div>
                    <div className={s.InputInner}>
                        <Input placeholder={"Возраст"}/>
                        <span>*Возраст нужен, чтобы подобрать подходящую аватарку</span>
                    </div>
                    <div className={s.TextareaInner}>
                        <Textarea placeholder={"Оставьте ваш отзыв"}/>
                    </div>
                    <div className={s.ButtonInner}>
                    <Button title={"Отправить"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentsInput;