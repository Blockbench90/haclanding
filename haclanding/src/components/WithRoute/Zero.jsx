import React from "react";
import s from "./Zero.module.css";
import Button from "../../common/Butoon/Button";

const Zero = (props) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.Content}>
                    <div>
                    <span>Не всем дано быть опытными пользователями современной техники,
                        так что переживать тут не о чем.  Этот раздел создан именно для
                        такой категории людей. Перед тем как звонить нам, сделайте несколько
                        рекомендаций. В 90% случаев простые шаги помогают исправить большинство
                        проблем.</span>
                    </div>
                    <div>
                        <b>Перезагрузите ваше устройство.</b>
                    </div>
                    <div>
                    <span>Выключите, подождите 5 минут, и включите снова.
                        Если ваше устройство питается от сети, после выключения,
                        вытяните вилку из розетки и также подождите 5 минут.
                        Если это не помогло, смело набирайте нас.</span>
                    </div>
                    <div><b>Возник вопрос, первым делом спросите у Google.</b></div>
                    <div>
                    <span>Не стоит сразу же звонить нам, первым делом введите ваш вопрос в поисковое
                        поле и прочтите хотя-бы первых пять ответов и только потом,
                        если не удалось решить проблему, звоните нам.</span>
                    </div>
                    <div><b>Вопрос: У меня не включается, сколько стоит ремонт? </b></div>
                    <div><b>Априори не имеет ответа. Это как спросить у прохожего во Франции,
                        по чем соль в Украине, на китайском языке.</b></div>
                </div>
            </div>
            <div className={s.Button}>
                <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Zero;