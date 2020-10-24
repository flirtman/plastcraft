import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Products = lazy(() => import('./Products'));
const Process = lazy(() => import('./Process'));
const Contact = lazy(() => import('./Contact'));

const App = (props) => (
    <Router>
        <Suspense fallback={
            <div id="loading-screen">Loading...</div>
        }>
            <Switch>

                <Route exact path={`/`} component={Home}/>
                <Route path={`/projects`} component={Projects}/>
                <Route path={`/products`} component={Products}/>
                <Route path={`/process`} component={Process}/>
                <Route path={`/about`} component={About}/>
                <Route path={`/contact`} component={Contact}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
