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
import TiRex from "../../../../assets/img/users/TiRex.png"
import Baby from "../../../../assets/img/users/Baby.png"
import {connect} from "react-redux";

const PostWoman = (props) => {
    return (
        <div className={s.PostWrapper}>
            <div className={s.PostContainer}>
                <div className={s.UserDescription}>
                    <b>{props.name} {props.lastName}</b>
                    <p>{props.comment}</p>
                    <span>{props.time}</span>
                </div>
                <div className={s.UserPhoto}>
                    <img src={props.age <= 0 ? Baby : props.age <= 14 ? jungWoman : props.age <=20 ? Chuwiha : props.age <= 35 ? BadWoman : props.age <= 100 ? Oma : TiRex} alt=""/>

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
                    <img src={props.age <= 0 ? Baby : props.age <= 14 ? kid : props.age <=20 ? Chell : props.age <= 35 ? BadGay : props.age <= 100 ? Opa : TiRex} alt=""/>
                </div>
                <span>{props.time}</span>
                <div className={s.UserDescription}>
                    <b>{props.name} {props.lastName}</b>
                    <p>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

const CommentsText = (props) => {
    debugger;
    let post = [...props.comments].reverse().map(p => p.sex === "male" ?
        <PostMan name={p.name} age={p.age} lastName={p.lastName} comment={p.comment} key={p.lastName} time={p.time}/>
        : <PostWoman name={p.name} age={p.age} lastName={p.lastName} comment={p.comment} key={p.lastName} time={p.time}/>)

    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                {post}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments
})

export default connect(mapStateToProps, {})(CommentsText);

