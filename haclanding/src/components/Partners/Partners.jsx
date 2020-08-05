import React from "react";
import s from "./Partners.module.css"


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
                            <Content title={"Собрать ПК"}
                                     content={"Мы работаем с многими оптовыми продавцами," +
                                     "и нажедными поставщиками"}/>
                        </div>
                        <div className={s.TopRightBlock}>
                            <Content title={"Заправка картриджей"}
                                     content={"Возможна как оптовая, так и разовая заправка"}/>
                        </div>
                    </div>
                    <div className={s.BottomContent}>
                            <div className={s.BotLeftBlock}>
                                <Content title={"Новое, по оптовой цене"}
                                         content={"У нас вы найдете самые низкие цены, будь то телефон или двигатель самолета"}/>
                            </div>
                            <div className={s.BotRightBlock}>
                                <Content title={"Честный ремонт"}
                                         content={"Гарантия на ремонт, а если вдруг, исправим за свой счет"}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partners;