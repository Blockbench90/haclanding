import React, {useState} from "react";
import s from "./Support.module.css";
import windows from "../../assets/img/contentImg/Windows.png";
import linux from "../../assets/img/contentImg/Linux.png";
import macos from "../../assets/img/contentImg/MacOS.png";
import android from "../../assets/img/contentImg/Android.png";
import ios from "../../assets/img/contentImg/iOS.png";
import avg from "../../assets/img/contentImg/antivirus/360.png";
import avast from "../../assets/img/contentImg/antivirus/avast.png";
import beer from "../../assets/img/contentImg/antivirus/beer.png";
import drweb from "../../assets/img/contentImg/antivirus/Dr.web.png";
import eset from "../../assets/img/contentImg/antivirus/eset.png";
import kasper from "../../assets/img/contentImg/antivirus/Kasper.png";
import mack from "../../assets/img/contentImg/antivirus/Mack.png";
import panda from "../../assets/img/contentImg/antivirus/panda.png";
import proprams from "../../assets/img/contentImg/antivirus/Programs.png";
import Button from "../../common/Butoon/Button";
import Modal from "../Modal/Modal";
import Parallax from "../Parallax/Parallax";


const Support = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        return setModal(false)
    }
    return (
        <div className={s.Wrapper}>
            <Parallax/>
           <div className={s.Container}>
               {modal && <Modal toggle={toggle} title="Поздравляю! Вы ВЫИГРАЛИ!!!!!!" size="50%"
                                textWin="Спасибо, я пешком постою."/>}
               <div className={s.Content}>
                   <div className={s.Title}>
                       <h3>Работаем со всеми самыми распространенными операционными системами</h3>
                   </div>
                   <div className={s.Gallery}>
                       <div>
                           <img src={windows} alt=""/>
                       </div>
                       <div>
                           <img src={linux} alt=""/>
                       </div>
                       <div>
                           <img src={macos} alt=""/>
                       </div>
                       <div>
                           <img src={android} alt=""/>
                       </div>
                       <div>
                           <img src={ios} alt=""/>
                       </div>
                   </div>
                   <div className={s.Antivirus}>
                       <div className={s.Antivirus}>
                           <div className={s.TitleAnt}>
                                <div>
                                    <h4>Установка антивируса</h4>
                                </div>
                           </div>
                           <div className={s.ImgAnt} onClick={()=> setModal(true)}>
                               <div>
                                   <img src={avg} alt=""/>
                               </div>
                               <div>
                                   <img src={avast} alt=""/>
                               </div>
                               <div className={s.Beer}>
                                   <img src={beer} alt=""/>
                               </div>
                               <div>
                                   <img src={drweb} alt=""/>
                               </div>
                               <div>
                                   <img src={eset} alt=""/>
                               </div>
                               <div className={s.Kasper}>
                                   <img src={kasper} alt=""/>
                               </div>
                               <div>
                                   <img src={mack} alt=""/>
                               </div>
                               <div>
                                   <img src={panda} alt=""/>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={s.Programms}>
                       <div className={s.ProgramsWrapper}>
                           <div className={s.TitleAnt}>
                               <div>
                                   <h4>Програмное сопровождение</h4>
                               </div>
                           </div>
                           <div className={s.ImgPrograms}>
                               <div>
                                   <img src={proprams} alt=""/>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={s.BackButton}>
                       <Button title="Вернуться" to="/"/>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default Support;