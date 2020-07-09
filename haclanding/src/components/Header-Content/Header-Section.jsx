import React from "react";
import style from "./HeaderSection.module.css"
import logo from "../../assets/copy/img/Png/Msi.png"
import Button from "../../common/Butoon/Button";

const HeaderSection = () => {
        return (
            <div className={style.Wrapper}>
                  <div className={style.Container}>
                      <h1 className={style.HeaderTitle}>
                          <img src={logo} alt=""/>
                          Hacker-Inside
                      </h1>
                      <div className={style.Content}>
                          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur
                              consequuntur explicabo facere illo iusto magni molestias nisi officiis praesentium quia
                              quos rerum sapiente, sequi ut vel vitae voluptatum.
                          </div>
                          <div>A dolore doloremque eius iusto optio quo vel? Aliquam autem deleniti doloribus expedita,
                              illo laboriosam perspiciatis praesentium provident quod saepe veniam, voluptate
                              voluptatum. Aliquid, blanditiis consequuntur dolorem perspiciatis repudiandae totam.
                          </div>
                          <div>A ab architecto asperiores autem commodi dignissimos doloribus enim esse ex fugiat illum
                              iure iusto, maxime neque, non odio perspiciatis praesentium quaerat quasi, quia quidem
                              reiciendis sequi totam veritatis vitae!
                          </div>
                          <div>A ab aliquid amet aspernatur culpa delectus dolor earum eligendi ex facere harum illo, in
                              iusto libero, minus nesciunt nobis officia possimus quod sed temporibus totam ullam velit
                              voluptate voluptates.
                          </div>
                          <div className={style.Btn}>
                              <Button title={"Консультация"}/>
                          </div>
                      </div>
                  </div>
            </div>
        )
}

export default HeaderSection;