import React from "react";
import s from "./CommentsInner.module.css"
import CommentsText from "../CommentsText";
import CommentsInput from "../CommentsInput";


const CommentsInner = (props) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.CommentsInput}>
                    <CommentsInput/>
                </div>
                <div className={s.CommentsText}>
                    <CommentsText/>
                </div>

            </div>
        </div>
    )
}
export default CommentsInner;