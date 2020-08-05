import React from "react";
import style from "./HeaderSection.module.css"
import logo from "../../assets/img/Logo6.png"
import {ButtonPhone} from "../../common/Butoon/Button";

const HeaderSection = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <b className={style.HeaderTitle}>
                    <img src={logo} alt=""/>
                    Hacker-Inside
                </b>
                <div className={style.Content}>
                    <div>
                        <h1>Ремонт компьютеров</h1>
                        <p>в Запорожье</p>
                    </div>
                    <div>
                        <span>В наших силах выполнить ремонт любой сложности.
                        Но это далеко не главное наше преимущество, это только факт. Наше преимущество в том, что мы не дерем людей как липку,
                        отнюдь, мы рубим правду матку, и только вам выберать, оставться наряженной елкой, или остаться обдертой липой</span>
                    </div>
                    <div className={style.Btn}>
                        <ButtonPhone title={"Консультация"} phone={"tel:+1234567890"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;