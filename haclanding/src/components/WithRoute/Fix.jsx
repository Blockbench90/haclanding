import React from "react";
import s from "./WithRoute.module.css";
import Button from "../../common/Butoon/Button";


const Fix = (props) => {
    return (
        <div className={s.Wrapper}>

            <div>
        <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Fix;