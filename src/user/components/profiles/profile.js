import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import ProfileOverview from './profile-overviews/profile-overview';
import ProfileWorkout from './profile-workouts/profile-workout';
import ProfileAchievement from './profile-achievements/profile-achievement';
import ProfileBasicInfo from './profile-basic-infos/profile-basic-info';
import ProfileUI from './profile.ui';

const mapStateToProps = state => {
    return {
        current_tab: state.profile.current_tab
    };
};
const mapDispatchToProps = dispatch => {
    return {
        headerSetState: _data => dispatch(rootAction.header.setState(_data))
    };
};

class ProfileConnected extends React.Component {
    constructor(props) {
        super(props);
        const { headerSetState } = this.props;
        this.headerSetState = headerSetState;
    }

    // life cycle
    componentDidMount() {
        this.Init();
    }

    componentWillUnmount() {}

    // functions
    Init = () => {
        this.headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.PROFILE });
    };

    // events
    clickElement = tabId => {
        const { history } = this.props;
        switch (tabId) {
            case CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_OVERVIEW:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.PROFILE_OVERVIEW });
                break;
            case CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_WORKOUT:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.PROFILE_WORKOUT });
                break;
            case CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_ACHIEVEMENT:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.PROFILE_ACHIEVEMENT });
                break;
            case CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_BASICINFO:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.PROFILE_BASICINFO });
                break;
            default:
                break;
        }
    };

    render() {
        const { current_tab } = this.props;
        return (
            <div id="profile-page">
                <div className="sub-head-tab">
                    <ProfileUI currentTab={current_tab} clickElement={this.clickElement} />
                    <Route path={CONSTANTS.NAVIGATION_URL.PROFILE_OVERVIEW} component={ProfileOverview} />
                    <Route path={CONSTANTS.NAVIGATION_URL.PROFILE_WORKOUT} component={ProfileWorkout} />
                    <Route path={CONSTANTS.NAVIGATION_URL.PROFILE_ACHIEVEMENT} component={ProfileAchievement} />
                    <Route path={CONSTANTS.NAVIGATION_URL.PROFILE_BASICINFO} component={ProfileBasicInfo} />
                </div>
            </div>
        );
    }
}

ProfileConnected.propTypes = {
    headerSetState: PropTypes.func,
    current_tab: PropTypes.number,
    history: PropTypes.instanceOf(Object)
};
ProfileConnected.defaultProps = {
    headerSetState: () => {},
    current_tab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.NONE,
    history: {}
};

const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileConnected);
export default withRouter(Profile);
