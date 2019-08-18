import ACTION_TYPES from '../../actions/action-types';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_FUNCTIONS from '../../scripts/apps/global-functions';

const initialState = {
    current_tab: CONSTANTS.EQUIPMENT_PAGE.CURRENT_TAB.NONE
};

const SetState = function(state, action) {
    return GLOBAL_FUNCTIONS.SetObject(state, action.data);
};

const productReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case ACTION_TYPES.PRODUCT.SET_STATE:
            return SetState(state, action);
        default:
            return state;
    }
};
export default productReducer;
