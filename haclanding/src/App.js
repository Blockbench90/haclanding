import React from 'react';
import './App.css';
import 'normalize.css';
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import PartnersSlider from "./components/Slist/PartnersSlider";
import Partners from "./components/Partners/Partners";
import HeaderContent from "./components/Header-Content/HeaderContent";
import {Route, Switch} from "react-router-dom";
import Fix from "./components/WithRoute/Fix";
import Replacement from "./components/WithRoute/Replacement";
import Assembly from "./components/WithRoute/Assembly";
import Support from "./components/WithRoute/Support";
import Master from "./components/WithRoute/Master";
import Zero from "./components/WithRoute/Zero";
import CommentsInner from "./components/Comments/CommentsInner/CommentsInner";
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
                    <Switch>
                        <Route path='/' exact component={() => <AboutUs/>}/>

                        <Route path='/fix' render={() => <Fix/>}/>
                        <Route path='/replacement' render={() => <Replacement/>}/>
                        <Route path='/support' render={() => <Support/>}/>
                        <Route path='/assembly' render={() => <Assembly/>}/>
                        <Route path='/master' render={() => <Master/>}/>
                        <Route path='/zero' render={() => <Zero/>}/>
                    </Switch>
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
            </div>
        </div>
    );
}
export default App;
