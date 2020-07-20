import React from "react";
import s from "./MapContent.module.css"
import {ButtonToUp} from "../../common/Butoon/Button";
import {animateScroll as scroll} from "react-scroll";


const MapContent = (props) => {
    const toUp = () => {
        scroll.scrollToTop();
    };
    return <div className={s.Wrapper}>
        <div className={s.Container}>
            <div>
                <span>Найти нас очень просто</span>
            </div>
            <div>
                <span>Можно позвонить или перейти в карту</span>
            </div>
            <div>
                <a href="tel:+1234567890">+3 8 099 321 65 65</a>
            </div>
            <div>
                <a href="tel:+1234567890">+3 8 099 321 65 65</a>
            </div>
            <div>
                <a href="tel:+1234567890">+3 8 099 321 65 65</a>
            </div>
            <div>
                <a href="https://www.google.com.ua/maps/@47.782484,35.1840032,18.75z?hl=ru" target="_blank">
                    Посмотреть нас на карте</a>
            </div>
        </div>
        <div className={s.ButtonUp}>
            <ButtonToUp handleClick={toUp}/>
        </div>
    </div>
}
export default MapContent;