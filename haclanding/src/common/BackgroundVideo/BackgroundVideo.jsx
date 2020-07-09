import React from "react";
import video from "../../assets/img/Эпизод 01.mp4";
import s from "./BackgroundVideo.module.css"

const BackgroundVideo = (props) => {
    return (
        <div className={s.Video}>
            <video  /* autoPlay loop*/ id="background-video" className="Video" >
                <source src={video} type="video/mp4"/>
                <source src={video} type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
export default BackgroundVideo;