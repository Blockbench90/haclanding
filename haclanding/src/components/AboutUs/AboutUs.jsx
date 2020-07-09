import React from "react";
import s from "./AboutUs.module.css"
import support from "../../assets/copy/img/remont.jpg"
import Button from "../../common/Butoon/Button";

const Post = (props) => {
    return (
        <div className={s.PostInner}>
            <div><h2>{props.title}</h2>
                {/*<img src={props.images} alt=""/>*/}
                <p>{props.content}</p>
                {/*<span className={s.PostSpan}>{props.span}</span>*/}
            </div>
            <div className={s.PostBtn}>
                <Button title={"Позвонить"}/>
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
                            <div className={s.Inner}>
                                <Post title={"Ремонт любой сложности"}
                                      images={support}
                                      content={"Будь у вас синий экран или перестала работать зарядка,\n" +
                                      "                    мы отпемонтируем все."}
                                      span={"Для консультации, нажмите кнопку \"Позвонить\""}/>
                            </div>
                        </div>
                        <div className={s.RightBlock}>
                            <Post title={"Ремонт любой сложности"}
                                  images={support}
                                  content={"Будь у вас синий экран или перестала работать зарядка,\n" +
                                  "                    мы отпемонтируем все."}
                                  span={"Для консультации, нажмите кнопку \"Позвонить\""}/>
                        </div>
                    </div>
                    <div className={s.CenterContent}>
                        <div className={s.LeftBlock}>
                            <Post title={"Ремонт любой сложности"}
                                  images={support}
                                  content={"Будь у вас синий экран или перестала работать зарядка,\n" +
                                  "                    мы отпемонтируем все."}
                                  span={"Для консультации, нажмите кнопку \"Позвонить\""}/>
                        </div>
                        <div className={s.RightBlock}>
                            <Post title={"Ремонт любой сложности"}
                                  images={support}
                                  content={"Будь у вас синий экран или перестала работать зарядка,\n" +
                                  "                    мы отпемонтируем все."}
                                  span={"Для консультации, нажмите кнопку \"Позвонить\""}/>
                        </div>
                    </div>
                    <div className={s.ButtonContent}>
                        <div className={s.LeftBlock}>
                            <Post title={"Ремонт любой сложности"}
                                  images={support}
                                  content={"Будь у вас синий экран или перестала работать зарядка,\n" +
                                  "                    мы отпемонтируем все."}
                                  span={"Для консультации, нажмите кнопку \"Позвонить\""}/>
                        </div>
                        <div className={s.RightBlock}>
                            <Post title={"Ремонт любой сложности"}
                                  images={support}
                                  content={"Будь у вас синий экран или перестала работать зарядка,\n" +
                                  "                    мы отпемонтируем все."}
                                  span={"Для консультации, нажмите кнопку \"Позвонить\""}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;