import ACTION_TYPES from "../../scripts/apps/action-types";

const initialState = new function () {
}

const global_reducer = (state = initialState, action) => {
    let newState = window.$.extend({}, state );
    switch (action.type) {
        case ACTION_TYPES.GLOBAL.SET_STATE:
            if (action.data != undefined) {
                let keys = Object.keys(action.data);
                keys.map(k => {
                    newState[k] = action.data[k];
                });
            }
            return newState;
         default:
             return state;
     }
};
export default global_reducer;