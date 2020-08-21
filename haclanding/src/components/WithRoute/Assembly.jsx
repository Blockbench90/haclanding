import React, {useState} from "react";
import s from "./Assembly.module.css";
import Button from "../../common/Butoon/Button";
import assembly from "../../assets/img/Abaut/fix-section.png";
import assembly2 from "../../assets/img/Abaut/fix-section2.png";
import Modal from "../Modal/Modal";
import Parallax from "../Parallax/Parallax";

export const PostToLeftSide = ({content, title}) => {
    return (
        <div className={s.PostToLeftSideWrapper}>
            <div className={s.Content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}
export const PostToRightSide = ({content, title}) => {
    return (
        <div className={s.PostToRightSideWrapper}>
            <div className={s.Content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

const Assembly = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        return setModal(false)
    }
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Container}>
                {modal && <Modal toggle={toggle} title="Поздравляю! Вы ВЫИГРАЛИ!!!!!!" size="50%"
                                 textWin="Мне бы такую работу, чтобы поменьше работы."/>}
                <div className={s.Assembly}>
                    <div className={s.Block}>

                        <PostToLeftSide title="Собрать новый ПК" content="
                    Мы можем собрать для Вас новый компьютер,
                     исходя из ваших желаний, предпочтений и,
                      естественно, кошелька. Весь процесс сборки чем-то схож с заказом вина в ресторане,
                       где мы выполняем роль учтивого и всезнающего сомелье с единственным отличием!
                        Мы не будем пытаться продать самую дорогую бутылку, мы приложим весь опыт и знания,
                         чтобы подобрать оптимальный вариант, специально под Вас. Далее последует процесс «готовки»:
                          непосредственно сборка, установка нужного софта (программ), тесты, доставка (если потребуется), и как минимум три года гарантии."/>

                        <PostToLeftSide image={assembly} title="Модернизировать старый ПК" content="Можно не прибегать к сборке нового компьютера,
                     если старый еще борозды не портит, а всего-навсего требует небольшого усовершенствования.
                      Зачем покупать новый, если блок питания сбоит. Меняем его, опять-таки, только из всеобщего согласия и нашего опыта,
                     и наслаждаемся дальнейшей работой."/>

                    </div>
                    <div>
                        <img src={assembly} alt=""/>
                    </div>
                </div>
                <div className={s.Modernization}>
                    <div className={s.Block}>

                        <PostToRightSide title="Помощь в продаже старого ПК"
                                         content="Не беда, и на этот вопрос у нас ответ имеется.
                                      Мы ценим и с огромным уважением относимся ко всем нашим клиентам,
                                       поэтому поможем с реализацией старого. Вместе примем решение о цене,
                                        выставим на витрину, и в случае продажи, что бывает в 99% случаев,
                                         возвращаем честно заработанные Вами деньги. Зачем оно нам надо? Можете вы спросить.
                                          Но все очень просто. Довольный клиент, всегда посоветует нас своим друзьям."/>

                        <PostToRightSide image={assembly2} title="Эксклюзивные комплектующие"
                                         content="Во все времена, во все дефициты, дефолты, кризисы,
                                      мы всегда выполняли просьбы наших клиентов. За долгие годы,
                                       мы проверили и отфильтровали сотни поставщиков, набили тысячи шишек,
                                        но благодаря именно шишкам, мы нашли тех, кто сделает невозможное и по
                                         самой низкой цене. Хотите видеокарту, которая еще долго не зайдет на наш рынок,
                                          или она есть в интернет-магазинах, но по баснословной цене, не беда. Дайте нам возможность
                                           проявить себя, и вы не пожалеете. Любая деталь, любое комплектующие, от болтика до корпуса,
                                            от термопасты до IPS матрицы, от скотча до блока питания, нам все под силу, и без огромных переплат."/>

                    </div>
                    <div onClick={() => setModal(true)}>
                        <img src={assembly2} alt=""/>
                    </div>
                </div>
            </div>
            <div className={s.BackButton}>
                <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Assembly;