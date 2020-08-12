import React from "react";
import s from "./CommentsText.module.css";
import kid from "../../../../assets/img/users/kid.png";
import jungWoman from "../../../../assets/img/users/jungWoman.png";
import Chell from "../../../../assets/img/users/Chell.png";
import Chuwiha from "../../../../assets/img/users/Chuwiha.png";
import BadGay from "../../../../assets/img/users/BadGay.png";
import BadWoman from "../../../../assets/img/users/BadWoman.png";
import Oma from "../../../../assets/img/users/Oma.png";
import Opa from "../../../../assets/img/users/Opa.png";
import TiRex from "../../../../assets/img/users/TiRex.png";
import Baby from "../../../../assets/img/users/Baby.png";
import {connect} from "react-redux";

const PostWoman = ({name,comment,age,time, lastName}) => {
    return (
        <div className={s.PostWrapper}>
            <div className={s.PostContainer}>
                <div className={s.UserDescription}>
                    <b>{name} {lastName}</b>
                    <p>{comment}</p>
                </div>
                <div className={s.UserPhoto}>
                    <img src={age <= 0 ? Baby : age <= 14 ? jungWoman : age <=20 ? Chuwiha : age <= 35 ? BadWoman : age <= 100 ? Oma : TiRex} alt=""/>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    )
}

const PostMan = ({name,comment,age,time, lastName}) => {
    return (
        <div className={s.PostWrapper}>
            <div className={s.PostContainer}>
                <div className={s.UserPhoto}>
                    <img src={age <= 0 ? Baby : age <= 14 ? kid : age <=20 ? Chell : age <= 35 ? BadGay : age <= 100 ? Opa : TiRex} alt=""/>
                    <span>{time}</span>
                </div>
                <div className={s.UserDescription}>
                    <b>{name} {lastName}</b>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}

const CommentsText = (props) => {
    let post = [...props.comments].reverse().map(p => p.sex === "male" ?
        <PostMan name={p.name} age={p.age} lastName={p.lastName} comment={p.comment} key={p.name} time={p.time}/>
        : <PostWoman name={p.name} age={p.age} lastName={p.lastName} comment={p.comment} key={p.name} time={p.time}/>)

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

