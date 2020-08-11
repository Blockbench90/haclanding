import React, {useState} from "react";
import App from "./App";
import Preloader from "./common/Preloader/Preloader";

const HacLanding = (props) => {
    const [isFetch, setIsFetch] = useState(true);
    setTimeout(() => {
        setIsFetch(false)
    }, 4000)
    return (<div>
        <div className="PreloaderUnderWindow">
            {isFetch && <Preloader/>}
        </div>
        <App/>
    </div>)
}
export default HacLanding;