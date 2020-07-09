import React from "react";
import style from "./Header.module.css"
import logo from "../../assets/copy/img/Png/Msi.png"
import Button from "../../common/Butoon/Button";

class Header extends React.Component {
    render() {
        return (
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <div className={style.Header}>
                        <header className={style.HeaderInner}>
                            <div className={style.Logo}>
                                <a href="#">
                                    <img src={logo} alt=""/>
                                </a>
                            </div>
                            <nav className={style.NavigationMenu}>
                                <div className={style.Nav}>
                                    <a href="#">Ремонт</a>
                                </div>
                                <div className={style.NavButton}>
                                    <a href="#">Покупка</a>
                                </div>
                                <div className={style.NavButton}>
                                    <a href="#">Галерея</a>
                                </div>
                                <div className={style.NavButton}>
                                    <a href="#">О нас</a>
                                </div>
                            </nav>
                            <div className={style.Button}>
                                <Button title={"Консультация"}/>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;