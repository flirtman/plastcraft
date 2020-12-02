import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const WeSell = lazy(() => import('./WeSell'));
const WeBuy = lazy(() => import('./WeBuy'));
const Process = lazy(() => import('./Process'));
const Contact = lazy(() => import('./Contact'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));

const App = (props) => (
    <Router>
        <Suspense fallback={
            <div id="loading-screen">Loading...</div>
        }>
            <Switch>
                <Route exact path={`/`} component={Home}/>
                <Route path={`/projects`} component={Projects}/>
                <Route path={`/we-sell`} component={WeSell}/>
                <Route path={`/we-buy`} component={WeBuy}/>
                <Route path={`/process`} component={Process}/>
                <Route path={`/about`} component={About}/>
                <Route path={`/contact`} component={Contact}/>
                <Route path={`/privacy-policy`} component={PrivacyPolicy}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
