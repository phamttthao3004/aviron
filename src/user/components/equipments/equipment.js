import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import EquipmentUI from './equipment.ui';
import EquipmentOverview from './equipment-overviews/equipment-overview';
import EquipmentAnalysis from './equipment-analysis/equipment-analysis';

const mapStateToProps = state => {
    return {
        current_tab: state.equipment.current_tab
    };
};

const mapDispatchToProps = dispatch => {
    return {
        headerSetState: _data => dispatch(rootAction.header.setState(_data))
    };
};

class EquipmentConnected extends React.Component {
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
        this.headerSetState({ current_page: CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT });
    };

    // events
    clickElement = tabId => {
        const { history } = this.props;
        switch (tabId) {
            case CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_OVERVIEW:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.EQUIPMENT_OVERVIEW });
                break;
            case CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.EQUIPMENT_ANALYSIS:
                history.push({ pathname: CONSTANTS.NAVIGATION_URL.EQUIPMENT_ANALYSIS });
                break;
            default:
                break;
        }
    };

    render() {
        const { current_tab } = this.props;
        return (
            <div id="equipment-page">
                <div className="sub-head-tab">
                    <EquipmentUI currentTab={current_tab} clickElement={this.clickElement} />
                    <Route path={CONSTANTS.NAVIGATION_URL.EQUIPMENT_OVERVIEW} component={EquipmentOverview} />
                    <Route path={CONSTANTS.NAVIGATION_URL.EQUIPMENT_ANALYSIS} component={EquipmentAnalysis} />
                </div>
            </div>
        );
    }
}

EquipmentConnected.propTypes = {
    headerSetState: PropTypes.func,
    current_tab: PropTypes.number,
    history: PropTypes.instanceOf(Object)
};
EquipmentConnected.defaultProps = {
    headerSetState: () => {},
    current_tab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.NONE,
    history: {}
};

const Equipment = connect(
    mapStateToProps,
    mapDispatchToProps
)(EquipmentConnected);
export default withRouter(Equipment);
