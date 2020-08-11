import React from "react";
import s from "./HeaderContent.module.css"
import HeaderSection from "./Header-Section";
import BackgroundVideo from "../../common/BackgroundVideo/BackgroundVideo";

const HeaderContent = (props) => {
    return (
        <div>
            <div className={s.HeaderTop}>
                <HeaderSection/>
            </div>
            <div>
                <BackgroundVideo/>
            </div>
        </div>
    )
}
export default HeaderContent;
