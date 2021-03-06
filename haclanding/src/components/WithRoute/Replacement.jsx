import React, {useState} from "react";
import s from "./Replacement.module.css";
import Button from "../../common/Butoon/Button";
import Rep from "../../assets/img/contentImg/Rep.png"
import Rep1 from "../../assets/img/contentImg/Rep1.png"
import Rep2 from "../../assets/img/contentImg/Rep2.png"
import Rep3 from "../../assets/img/contentImg/Rep3.png"
import Modal from "../Modal/Modal";
import Parallax from "../Parallax/Parallax";

const Replacement = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        return setModal(false)
    }
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Container}>
                <div className={s.Content}>
                    {modal && <Modal toggle={toggle} title="Поздравляю! Вы ВЫИГРАЛИ!!!!!!" size="30%"
                                     textWin="Пан атаман, кони стоят пьяные, хлопцы запряженные."/>}
                                     <span>Ошибочно считать, что переустановка операционной системы, решает все проблемы</span>
                    <p><strong>Каждый компьютер, ноутбук или тот же принтер, нуждается в обслуживании</strong> точно так же, как и
                        машина. Да, компьютер потребляет электричество, а не бензин, но масло все же менять обязательно.
                        Случалось ли такое, что компьютер после небольшой нагрузки выключался. Ни с того, ни с сего, без
                        спросу и разрешения, просто бац и потух? Или он начинает замедляться, замедляться, замедляться, и
                        вот он уже включается 5 минут, вкладки в браузере загружаются по пол часа, вы грешите на плохой
                        интернет, перезагружаете роутер, а эффекта ноль? Или шум вентиляторов начинает давить на уши,
                        словно вы стоите возле мощной, гудящей вытяжки?
                        Все возможно, и даже больше, до боли нам знакомо. Ошибочно считать, что компьютер должен просто
                        работать и ухаживать за ним нету смысла. Мы уже проводили аналогию с автомобилем, но если
                        говорить по факту, сухо и без преувеличений, то для того, чтобы Ваш верный конь, не бегал, а
                        летал, требуется регулярная чистка забившихся от пыли вентиляторов, замена термопасты на
                        процессоре, видеокарте, раз в год переустановка операционной системы и многое другое.
                        В большинстве своем, перечисленные процедуры не требуют большого ума, и вы в силах сами
                        проделывать это дома, но есть одно НО! Во-первых, это трудозатратный процесс, отбирает кучу сил
                        и времени, особенно по неопытности, и чреват катастрофическими последствиями, если вдруг
                        дрогнула рука. Выбор за вами, поиграть в «Очумелые ручки», или поручить эту затею тем, кто
                        проделывает это по сотню раз на дню, и у кого рука точно не дрогнет.
                    </p>
                </div>
                <div className={s.Gallery}>
                    <div onClick={()=> setModal(true)}>
                        <img src={Rep} alt=""/>
                    </div>
                    <div>
                        <img src={Rep1} alt=""/>
                    </div>
                    <div>
                        <img src={Rep2} alt=""/>
                    </div>
                    <div>
                        <img src={Rep3} alt=""/>
                    </div>
                </div>
                <div className={s.BackButton}>
                    <Button title="Вернуться" to="/"/>
                </div>
            </div>
        </div>
    )
}
export default Replacement;