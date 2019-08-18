import './fonts/fontello/css/fontello.css';
import './styles/libs/bootstrap.css';
import './styles/libs/app.css';
import './styles/less/style.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import App from './app';
import CONSTANTS from './scripts/apps/constants';

class UserApp extends React.Component {
    // life cycle
    componentDidMount() { }

    componentWillUnmount() {}

    // functions

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={CONSTANTS.NAVIGATION_URL.HOME} component={App} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default UserApp;
