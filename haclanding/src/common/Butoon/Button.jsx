import React from "react";
import s from "./Button.module.css"

const Button = (props) => {
    return (
        <div className={s.wrapper}>
            <a href="#"><div className={s.title}>
                <span>{props.title}</span>
            </div>
            </a>
        </div>
    )
}
export default Button;