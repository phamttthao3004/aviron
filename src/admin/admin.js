import React from 'react';
import { connect } from 'react-redux';
import rootAction from './actions/action';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import App from './app';

class AdminApp extends React.Component {
    constructor() {
        super();
    }

    //life cycle
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    //functions

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={window.ROOT_FILE + '/'} component={App} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default AdminApp;