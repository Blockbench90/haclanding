import React from "react";
import s from "./MapContent.module.css";
import kyivstar from "../../assets/img/kyivstar.png";
import map from "../../assets/img/MapIcon.png";
import instagram from "../../assets/img/insta.png";
import telegram from "../../assets/img/tetegram.png";
import viber from "../../assets/img/viber.png";
import Max from "../../assets/img/max_photo.png";
import {ButtonPhone} from "../../common/Butoon/Button";
import Anonimys from "../../assets/img/Yura_photo.png";


const MapContent = (props) => {
    return <div className={s.Wrapper}>
        <div className={s.Container}>
            <div>
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
                <div className={s.Society}>
                    <div>
                        <a href="https://www.instagram.com/maxim.zpua/">
                            <img src={instagram} alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/Hacersinside">
                            <img src={telegram} alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="viber://chat?number=+380964237550">
                            <img src={viber} alt=""/>
                        </a>
                    </div>
                    <div className={s.MapBox}>
                        <div>
                            <img src={map} alt=""/>
                        </div>
                        <div><a
                            href="https://www.google.com/maps/place/Hackers+inside/@47.7832345,35.1818275,17z/data=!3m1!4b1!4m5!3m4!1s0x40dc5ef9062555f9:0xa5d2e3fac23e0551!8m2!3d47.7832345!4d35.1840162">
                            Посмотреть на карте</a></div>
                    </div>
                </div>
                <div className={s.PhotoInfo}>
                    <div className={s.MaxBoxImg}>
                        <img src={Max} alt=""/>
                        <div className={s.Btn}>
                            <ButtonPhone title={"Максим"} phone={"tel:+1234567890"}/>
                        </div>
                        <div className={s.BtnMedia}>
                            <ButtonPhone title={"Макс"} phone={"tel:+1234567890"}/>
                        </div>

                    </div>
                    <div>
                        <img src={Anonimys} alt=""/>
                        <div className={s.BtnUra}>
                            <ButtonPhone title={"Юра"} phone={"tel:+1234567890"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default MapContent;