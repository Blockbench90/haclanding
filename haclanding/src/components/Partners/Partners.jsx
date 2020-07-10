import React from "react";
import s from "./Partners.module.css"
import Button from "../../common/Butoon/Button";


const Content = (props) => {
    return (
        <div>
            <div className={s.ContentBlock}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

const Partners = (props) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.ContentInner}>
                    <div className={s.TopContent}>
                        <div className={s.TopLeftBlock}>
                            <Content title={"Наши Top LeftBlock партнеры"}
                                     content={"Мы работаем с многими оптовыми продавцами," +
                                     "поэтому выгодно покупать у нас"}/>
                        </div>
                        <div className={s.TopRightBlock}>
                            <Content title={"Наши Top RightBlock партнеры"}
                                     content={"Мы работаем с многими оптовыми продавцами," +
                                     "поэтому выгодно покупать у нас"}/>
                        </div>
                    </div>
                    <div className={s.BottomContent}>
                            <div className={s.BotLeftBlock}>
                                <Content title={"Наши But LeftBlock преимущества"}
                                         content={"Мы работаем с многими оптовыми продавцами," +
                                         "поэтому выгодно покупать у нас"}/>
                            </div>
                            <div className={s.BotRightBlock}>
                                <Content title={"Наши But RightBlock преимущества"}
                                         content={"Мы работаем с многими оптовыми продавцами," +
                                         "поэтому выгодно покупать у нас"}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partners;