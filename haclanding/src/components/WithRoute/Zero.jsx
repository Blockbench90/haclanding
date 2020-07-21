import React from "react";
import s from "./WithRoute.module.css";
import Button from "../../common/Butoon/Button";

const Zero = (props) => {
    return (
        <div className={s.Wrapper}>
            Здесь будет информация о ремонте и прочей чепухе
            <div>
                <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Zero;