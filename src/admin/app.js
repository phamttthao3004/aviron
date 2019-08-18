import React from 'react';
import { connect } from 'react-redux';
import rootAction from './actions/action';
import CONSTANTS from './scripts/apps/constants';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
}

class AppConnected extends React.Component {
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
            <div className='main'>
                admin app
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);
export default App;