import ACTION_TYPES from "../../scripts/apps/action-types";

const global_action = new function () {
    return {
        setState: (_data) => {
            return { type: ACTION_TYPES.GLOBAL.SET_STATE, data: _data }
        }
    }
}
export default global_action;