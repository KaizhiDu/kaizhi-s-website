import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
// Redux
// Redux and react is separate, we use react-redux combine together
import { Provider } from 'react-redux';
import store from './store';
// import inside
import Navbar from "./components/layout/Topbar";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Navbar/>
                    <Container>
                        <Switch>
                            <Route exact path='/' component={Dashboard}/>
                        </Switch>
                    </Container>
                </Fragment>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
