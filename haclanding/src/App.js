import React from 'react';
import './App.css';
import 'normalize.css';
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import PartnersSlider from "./components/Slist/PartnersSlider";
import Partners from "./components/Partners/Partners";
import CommentsInner from "./components/Comments/CommentsInner/CommentsInner";
import HeaderContent from "./components/Header-Content/HeaderContent";
import MapContent from "./components/MapSection/MapContent";




const App = () => {
    return (
        <div className="App-Wrapper">
            <div className="Container">
                <section className="Header" id="section1">
                    <Header/>
                    <HeaderContent/>
                </section>
                <section className="AboutUs" id="section2">
                    <AboutUs/>
                </section>
                <section className="Partners" id="section3">
                    <div className="PartnersContent">
                        <Partners/>
                    </div>
                    <div className="PartnersSlider">
                        <PartnersSlider/>
                    </div>
                </section>
                <section className="Comments" id="section4">
                    <CommentsInner/>
                </section>
                <section className="Map" id="section5">
                    <MapContent/>
                </section>
                {/*<section>*/}
                {/*    <Preloader/>*/}
                {/*</section>*/}
            </div>
        </div>
    );
}
export default App;
