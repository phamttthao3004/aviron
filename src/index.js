import React from 'react';
import ReactDOM from 'react-dom';
import UserApp from './user/user';
import AdminApp from './admin/admin';

class Main extends React.Component {
    constructor() {
        super();
        this.main = null;
        // this.CheckRole();
    }

    componentDidMount() {}

    // functions
    Init = () => {};

    CheckRole() {
        const user_info = window.GetLocalStorage('USER_INFO');
        if (user_info === undefined) {
            window.ClearAllLocalStorage();
            window.location.href = '/login.html';
        } else {
            this.main = <AdminApp />;
            if (user_info.role === window.CONSTANTS.USER.ROLE.NORMAL_USER) {
                this.main = <UserApp />;
            }
        }
    }

    render() {
        return <UserApp />;
    }
}

// ========================================
if (module.hot) {
    module.hot.accept();
}
ReactDOM.render(<Main />, document.getElementById('root'));
