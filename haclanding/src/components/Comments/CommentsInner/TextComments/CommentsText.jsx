import React from "react";
import s from "./CommentsText.module.css";
import kid from "../../../../assets/img/users/kid.png"
import jungWoman from "../../../../assets/img/users/jungWoman.png"
import Chell from "../../../../assets/img/users/Chell.png"
import Chuwiha from "../../../../assets/img/users/Chuwiha.png"
import BadGay from "../../../../assets/img/users/BadGay.png"
import BadWoman from "../../../../assets/img/users/BadWoman.png"
import Oma from "../../../../assets/img/users/Oma.png"
import Opa from "../../../../assets/img/users/Opa.png"
import {sendComment} from "../../../redux/comments-reducer";
import {connect} from "react-redux";

const PostWoman = (props) => {
    return (
        <div className={s.PostWrapper}>
            <div className={s.PostContainer}>
                <div className={s.UserDescription}>
                    <b>Fioleta Johansob</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laborum nostrum quaerat! Ad
                        dicta enim explicabo facere, illum molestiae nam quis quos tenetur voluptates. Aperiam dignissimos
                        quis reiciendis soluta velit.</p>
                </div>
                <div className={s.UserPhoto}>
                    <img src={Oma} alt=""/>
                </div>
            </div>
        </div>
    )
}
const PostMan = (props) => {
    return (
        <div className={s.PostWrapper}>
            <div className={s.PostContainer}>
                <div className={s.UserPhoto}>
                    <img src={Opa} alt=""/>
                </div>
                <div className={s.UserDescription}>
                    <b>`${props.name} ${props.lastName}`</b>
                    <p>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

const CommentsText = (props) => {
    debugger;
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <PostMan name={props.comments.name} lastName={props.comments.lastName} comment={props.comments.comment}/>
                <PostWoman/>
                <PostMan/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments
})

export default connect(mapStateToProps, {sendComment})(CommentsText);

