import React from "react";
import video from "../../assets/img/Hack_vid.mp4";
import s from "./BackgroundVideo.module.css"

class BackgroundVideo extends React.Component{
    render() {
        return (
            <div className={s.VideoInner}>
                <div>
                   <video /*autoPlay={true} loop={true} muted={true}*/ id="background-video" className={s.Video}>
                        <source src={video} type="video/mp4"/>
                        <source src={video} type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        )
    }
}
export default BackgroundVideo;