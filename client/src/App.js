import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
// Redux
// Redux and react is separate, we use react-redux combine together
import { connect, Provider } from 'react-redux';
import store from "./store";
// import inside
import Navbar from "./components/layout/Topbar";
import Dashboard from "./components/dashboard/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";


if (localStorage.token) {
    setAuthToken(localStorage.token)
}

function App() {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

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
