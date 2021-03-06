/*global ENV:true*/
import React, {lazy, Suspense} from "react"
import {Switch, Route, withRouter} from "react-router-dom"
import Loading from "./Loading/Loading"
const NotFound = lazy(() => import ( "./NotFound/NotFound"))
const AboutPage = lazy(() => import("./AboutPage/AboutPage"))
const LandingPage = lazy(() => import("./LandingPage/LandingPage"))
const GeneratorPage = lazy(() => import("./GeneratorPage/GeneratorPage"))

export default class Routes extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Suspense fallback={<Loading/>}>
                <Switch>
                    <Route exact path='/scopify' component={() =>  <LandingPage />} />
                    <Route exact path='/scopify/about' component={() =>  <AboutPage />} />

                    <Route exact path='/scopify/settings' component={() =>  <GeneratorPage />} />
                    <Route path='/scopify/step:num' component={withRouter(GeneratorPage)} />
                    <Route component={() => <NotFound />} />
                </Switch>
            </Suspense>
        )
    }
}
