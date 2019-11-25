import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
// Redux
// Redux and react is separate, we use react-redux combine together
import { Provider } from 'react-redux';
import store from "./store";
// import inside
import Navbar from "./components/layout/Topbar";
import Dashboard from "./components/dashboard/Dashboard";
import Notes from "./components/note/Notes";
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import Photo from "./components/photo/Photo";
import NoteById from "./components/note/Note";
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
                            <Route exact path='/profile' component={Profile}/>
                            <Route exact path='/note' component={Notes}/>
                            <Route exact path='/note/:id' component={NoteById}/>
                            <Route exact path='/project' component={Project}/>
                            <Route exact path='/photo' component={Photo}/>
                        </Switch>
                    </Container>
                </Fragment>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
