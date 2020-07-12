import React from 'react';
import './App.css';
import 'normalize.css';
import Header from "./components/Header/Header";
import HeaderSection from "./components/Header-Content/Header-Section";
import BackgroundVideo from "./common/BackgroundVideo/BackgroundVideo";
import AboutUs from "./components/AboutUs/AboutUs";
import PartnersSlider from "./components/Slist/PartnersSlider";
import Partners from "./components/Partners/Partners";
import Comments from "./components/Comments/Comments";





const App = () => {
    return (
        <div className="App-Wrapper">
            <div className="Container">
                <section className="Header">
                    <div className="Header-Content">
                        <div className="Header-Top">
                            <Header/>
                            <HeaderSection/>
                        </div>
                        <div className="Video">
                            <BackgroundVideo/>
                        </div>
                    </div>
                </section>
                <section className="AboutUs">
                    <AboutUs/>
                </section>
                <section className="Partners">
                    <div className="PartnersContent">
                        <Partners/>
                    </div>
                    <div className="PartnersSlider">
                        <PartnersSlider/>
                    </div>
                </section>
                <section className="Comments">
                    <div className="CommentsWrapper">
                        <Comments/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
