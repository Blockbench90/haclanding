import React from "react";
import s from "./HeaderContent.module.css"
import HeaderSection from "./Header-Section";
import BackgroundVideo from "../../common/BackgroundVideo/BackgroundVideo";

const HeaderContent = (props) => {
    return <div className={s.HeaderContent}>
        <div className={s.HeaderTop}>
            <HeaderSection/>
        </div>
        <div className={s.Video}>
            <BackgroundVideo/>
        </div>
    </div>
}
export default HeaderContent;
