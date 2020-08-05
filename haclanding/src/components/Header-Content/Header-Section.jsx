import React from "react";
import style from "./HeaderSection.module.css"
import logo from "../../assets/img/logo/logo11.png"
import Max from "../../assets/img/max_photo.png"
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
                    <div className={style.Info}>
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
                    <div>
                        <div>
                            <img src={Max} alt=""/>
                        </div>
                        <div>
                            <img src={Max} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;