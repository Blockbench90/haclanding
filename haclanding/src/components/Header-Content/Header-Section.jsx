import React, {useState} from "react";
import style from "./HeaderSection.module.css"
import logo from "../../assets/img/logo/logo11.png"
import Modal from "../Modal/Modal";


const HeaderSection = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        return setModal(false)
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                {modal && <Modal toggle={toggle} title="Поздравляю! Вы ВЫИГРАЛИ!!!!!!" size="20%"
                                 textWin="Ларису Ивановну хочу"/>}
                <div className={style.HeaderTitle}>
                    <div onClick={()=> setModal(true)}>
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <div className={style.Title}>
                            <b>Hacker-Inside</b>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;