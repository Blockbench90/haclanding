import React from "react";
import style from "./HeaderSection.module.css"
import logo from "../../assets/img/logo/logo11.png"
import Max from "../../assets/img/max_photo.png"
import {ButtonPhone} from "../../common/Butoon/Button";

const HeaderSection = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.HeaderTitle}>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <div className={style.Title}>
                            <b>Hacker-Inside</b>
                        </div>

                        <div className={style.Btn}>
                        {/*<ButtonPhone title={"Консультация"} phone={"tel:+1234567890"}/>*/}
                        </div>
                    </div>
                </div>
                <div className={style.Content}>
                    <div className={style.Info}>
                        <div>
                            <h1>Ремонт компьютеров</h1>
                            <p>в Запорожье</p>
                        </div>
                        <div>
                        <span>В наших силах выполнить ремонт любой сложности.
                        Но это далеко не главное наше преимущество, это только факт.</span>
                        </div>

                        {/*<div className={style.Btn}>*/}
                        {/*    <ButtonPhone title={"Консультация"} phone={"tel:+1234567890"}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={style.PhotoInfo}>
                        <div>
                            <img src={Max} alt=""/>
                            <ButtonPhone title={"Максим"}/>
                        </div>
                        <div>
                            <img src={Max} alt=""/>
                            <ButtonPhone title={"Юрасик"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;