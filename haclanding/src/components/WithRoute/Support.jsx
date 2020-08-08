import React from "react";
import s from "./Support.module.css";
import Button from "../../common/Butoon/Button";

const Support = (props) => {
    return (
        <div className={s.Wrapper}>
            Здесь будет информация о ремонте и прочей чепухе
            <div>
                <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Support;