import React from "react";
import s from "./AboutUs.module.css"
import Button from "../../common/Butoon/Button";

const Post = (props) => {
    return (
        <div className={s.PostInner}>
            <div><h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className={s.PostBtn}>
                <Button title={"Подробнее..."} route={props.route}/>
            </div>
        </div>
    )
}


const AboutUs = (props) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Content}>
                <div className={s.ContentInner}>
                    <div className={s.TopContent}>
                        <div className={s.LeftBlock}>
                            <div className={s.tLbInner}>
                                <Post title={"Ремонт"}
                                      content={"Компьютер,ноутбук,планшет,телефонт"
                                      /*+ ",монитор,телевизор,принтер,акустика."*/}
                                route="/fix" />
                            </div>
                        </div>
                        <div className={s.RightBlock}>
                            <div className={s.tRbInner}>
                            <Post title={"Обслуживание"}
                                  content={"Ваш Пк нуждается в замене термопасты"}
                                  route="/replacement"/>
                            </div>
                        </div>
                    </div>
                    <div className={s.CenterContent}>
                        <div className={s.LeftBlock}>
                            <div className={s.cLbInner}>
                                <Post title={"Программы"}
                                      content={"Переустановить Винду, обновить PornoHub"}
                                      route="/support"/>
                            </div>
                        </div>
                        <div className={s.RightBlock}>
                            <div className={s.cRbInner}>
                                <Post title={"Сборка ПК"}
                                      content={"Соберем даже коллайдер, если надо"}
                                route="/assembly"/>
                            </div>
                        </div>
                    </div>
                    <div className={s.ButtonContent}>
                        <div className={s.LeftBlock}>
                            <div className={s.bLbInner}>
                                <Post title={"Вызов мастера"}
                                      content={"Вызов макстера на дом в офис,на дачу=),все равно!"}
                                route="/master"/>
                            </div>
                        </div>
                        <div className={s.RightBlock}>
                            <div className={s.bRbInner}>
                                <Post title={"Я пользователь"}
                                      content={"я плохо разбираюсь в комьютерах,мне нужна помощь подскажите посоветуйте что лучше"}
                                route="/zero"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;