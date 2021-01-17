import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Routes } from './routes'

import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'

import './App.scss'

const App = () => {
    return (
        <Suspense fallback={
            'preloader'
        }>
            <Router>
                <div className="app">
                    <Header/>
                    <Switch>
                        <Route exact path={Routes.index}>
                            <Home component="football"/>
                        </Route>
                        <Route exact path={Routes.page.footballIndex}>
                            <Home component="football"/>
                        </Route>
                        <Route path={Routes.page.football}>
                            <Home component="football"/>
                        </Route>
                        <Route exact path={Routes.page.hockeyIndex}>
                            <Home component="hockey"/>
                        </Route>
                        <Route path={Routes.page.hockey}>
                            <Home component="hockey"/>
                        </Route>
                        <Route exact path={Routes.page.tennisIndex}>
                            <Home component="tennis"/>
                        </Route>
                        <Route path={Routes.page.tennis}>
                            <Home component="tennis"/>
                        </Route>
                        <Route exact path={Routes.page.basketballIndex}>
                            <Home component="basketball"/>
                        </Route>
                        <Route path={Routes.page.basketball}>
                            <Home component="basketball"/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </Suspense>
    )
}

export default App
