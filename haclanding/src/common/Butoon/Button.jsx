import React from "react";
import s from "./Button.module.css";
import down from "../../assets/img/ToDown.png";
import up from "../../assets/img/ToUp.png";


const Button = (props) => {
    return (
        <div className={s.wrapper}>
            <a href={props.phone || "#"}><div className={s.title}>
                <span>{props.title}</span>
            </div>
            </a>
        </div>
    )
}
export default Button;

export const ButtonToDown = (props) => {
    return (
        <div className={s.ToWrapper}>
            <div className={s.ToContainer}>
                <img src={down} alt="Down"/>
            </div>
        </div>
    )
}
export const ButtonToUp = (props) => {
    return (
        <div className={s.ToWrapper}>
            <div className={s.ToContainer}>
                <img src={up} alt="Up" onClick={props.handleClick}/>
            </div>
        </div>
    )
}