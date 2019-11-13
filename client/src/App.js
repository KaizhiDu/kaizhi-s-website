import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Redux
// Redux and react is separate, we use react-redux combine together
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    This is APP
                </Fragment>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
