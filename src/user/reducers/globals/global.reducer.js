import ACTION_TYPES from '../../actions/action-types';
import GLOBAL_FUNCTIONS from '../../scripts/apps/global-functions';

const initialState = new (function() {
    this.is_initiated_page = false;

    // user info
    this.user_id = '';
    this.user_email = '';
    this.user_first_name = '';
    this.user_last_name = '';
    this.user_role = '';
    this.user_avatar = '';

    // message box
    this.message_box_open = false;
    this.message_box_type = undefined;
    this.message_box_title = '';
    this.message_box_message = '';
    this.message_box_button_type = '';
    this.message_box_functions = undefined;
    this.message_box_options = undefined;
})();

const SetState = function(state, action) {
    return GLOBAL_FUNCTIONS.SetObject(state, action.data);
};

const OpenMessageBox = function(state, action) {
    const newState = Object.assign({}, state);
    const { data = {} } = action;
    const { open = true, type, title, message, button_type, functions, options } = data;

    newState.message_box_open = open;
    if (type !== undefined) {
        newState.message_box_type = type;
    }
    if (title !== undefined) {
        newState.message_box_title = title;
    }
    if (message !== undefined) {
        newState.message_box_message = message;
    }
    if (button_type !== undefined) {
        newState.message_box_button_type = button_type;
    }
    if (functions !== undefined) {
        newState.message_box_functions = functions;
    }
    if (options !== undefined) {
        newState.message_box_options = options;
    }
    return newState;
};

const globalReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case ACTION_TYPES.GLOBAL.SET_STATE:
            return SetState(state, action);
        case ACTION_TYPES.GLOBAL.OPEN_MESSAGE_BOX:
            return OpenMessageBox(state, action);
        default:
            return state;
    }
};
export default globalReducer;
