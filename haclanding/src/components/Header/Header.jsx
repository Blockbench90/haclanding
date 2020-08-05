import React from "react";
import style from "./Header.module.css"
import logo from "../../assets/img/logo/logo11.png"
import {ButtonPhone} from "../../common/Butoon/Button";
import {Link, animateScroll as scroll} from "react-scroll";

class Header extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <div className={style.Header}>
                        <header className={style.HeaderInner}>
                            <div className={style.Logo}>
                                    <img src={logo}
                                         alt="Logo"
                                         onClick={this.scrollToTop}/>
                            </div>
                            <nav className={style.NavigationMenu}>
                                <div className={style.Nav}>
                                    <Link to="section1"
                                          spy={true}
                                          smooth={true}
                                          duration={1000}>Главная</Link>
                                </div>
                                <div className={style.Services}>
                                    <Link to="section2"
                                          spy={true}
                                          smooth={true}
                                          duration={1000}>Услуги</Link>
                                </div>
                                <div className={style.Partners}>
                                    <Link  to="section3"
                                           spy={true}
                                           smooth={true}
                                           duration={1000}>Партнеры</Link>
                                </div>
                                <div className={style.NavButton}>
                                    <Link  to="section4"
                                           spy={true}
                                           smooth={true}
                                           duration={1000}>Отзывы</Link>
                                </div>
                                <div className={style.NavButton}>
                                    <Link  to="section5"
                                           spy={true}
                                           smooth={true}
                                           duration={1000}>Контакты</Link>
                                </div>
                            </nav>
                            <div className={style.Button}>
                                <ButtonPhone title={"Консультация"} phone={"tel:+1234567890"}/>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;