import React from "react";
import video from "../../assets/img/Hack_vid.mp4";
import s from "./BackgroundVideo.module.css"

const BackgroundVideo = (props) => {
    return (
        <div className={s.VideoInner}>
            <div>
                <video  /* autoPlay loop*/ id="background-video" className={s.Video}>
                    <source src={video} type="video/mp4"/>
                    {/*<source src={video} type="video/ogg"/>*/}
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
export default BackgroundVideo;