import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';

const mapDispatchToProps = dispatch => {
    return {
        headerSetState: _data => dispatch(rootAction.header.setState(_data))
    };
};

class NotFoundPageConnected extends React.Component {
    componentDidMount() {
        this.Init();
    }

    componentWillUnmount() {}

    // events

    // functions
    Init() {
        const { headerSetState } = this.props;
        headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.NONE });
    }

    render() {
        return (
            <div id="not-found-page">
                <img alt="Not found page" className="background-image" src="/images/user/not-found-page.jpg" />
            </div>
        );
    }
}

NotFoundPageConnected.propTypes = {
    headerSetState: PropTypes.func
};
NotFoundPageConnected.defaultProps = {
    headerSetState: () => {}
};

const NotFoundPage = connect(
    null,
    mapDispatchToProps
)(NotFoundPageConnected);
export default NotFoundPage;
