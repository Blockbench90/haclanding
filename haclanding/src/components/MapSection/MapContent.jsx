import React from "react";
import s from "./MapContent.module.css"
import {ButtonToUp} from "../../common/Butoon/Button";
import {animateScroll as scroll} from "react-scroll";
import kyivstar from "../../assets/img/kyivstar.png"
import map from "../../assets/img/MapIcon.png"
import instagram from "../../assets/img/insta.png"



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
            <div className={s.PhoneBox}>
                <div>
                    <img src={kyivstar} alt=""/>
                </div>
                <div>
                    <a href="tel:+1234567890">+3 8 099 321 65 65</a>
                </div>
            </div>
            <div className={s.PhoneBox}>
                <div>
                    <img src={kyivstar} alt=""/>
                </div>
                <div>
                    <a href="tel:+1234567890">+3 8 099 321 65 65</a>
                </div>
            </div>
            <div className={s.PhoneBox}>
                <div>
                    <img src={kyivstar} alt=""/>
                </div>
                <div>
                    <a href="tel:+1234567890">+3 8 099 321 65 65</a>
                </div>
            </div>
            <div className={s.PhoneBox}>
                <div>
                    <img src={instagram} alt=""/>
                </div>
                <div>
                    <a href="https://www.instagram.com/maxim.zpua/">maxim.zp.ua</a>
                </div>
            </div>
            <div className={s.MapBox}>
                <div>
                    <img src={map} alt=""/>
                </div>
                <div><a href="https://www.google.com/maps/place/Hackers+inside/@47.7832345,35.1818275,17z/data=!3m1!4b1!4m5!3m4!1s0x40dc5ef9062555f9:0xa5d2e3fac23e0551!8m2!3d47.7832345!4d35.1840162" target="_blank">
                    Посмотреть нас на карте</a></div>
            </div>
        </div>

    </div>
}
export default MapContent;