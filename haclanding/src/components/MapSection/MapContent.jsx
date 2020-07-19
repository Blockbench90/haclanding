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
                <h2>Найти нас очень просто</h2>
            </div>
            <div>
                <h3>Можно позвонить или перейти в карту</h3>
            </div>
            <div><span>+3 8 099 321 65 65</span></div>
            <div><span>+3 8 099 321 65 65</span></div>
            <div><span>+3 8 099 321 65 65</span></div>
        </div>
        <div className={s.ButtonUp}>
            <ButtonToUp handleClick={toUp}/>
        </div>
    </div>
}
export default MapContent;