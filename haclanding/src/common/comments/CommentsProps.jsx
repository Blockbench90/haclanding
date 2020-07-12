import React from "react";
import s from "./CommentsProps.module.css"
export const Input = (props) => {
    return (
        <div className={s.InputWrapper}>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}
export const Textarea = (props) => {
    return (
        <div className={s.TextareaWrapper}>
            <textarea id="" cols="30" rows="10" placeholder={props.placeholder}/>
        </div>
    )
}