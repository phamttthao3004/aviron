import ACTION_TYPES from '../../actions/action-types';
import GLOBAL_FUNCTIONS from '../../scripts/apps/global-functions';

const initialState = {
    current_page: 0
};

const SetState = function(state, action) {
    return GLOBAL_FUNCTIONS.SetObject(state, action.data);
};

const headerReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case ACTION_TYPES.HEADER.SET_STATE:
            return SetState(state, action);
        default:
            return state;
    }
};
export default headerReducer;
