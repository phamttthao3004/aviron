import ACTION_TYPES from '../action-types';

const globalAction = new (function() {
    this.setState = _data => {
        return { type: ACTION_TYPES.GLOBAL.SET_STATE, data: _data };
    };
    this.openMessageBox = _data => {
        return { type: ACTION_TYPES.GLOBAL.OPEN_MESSAGE_BOX, data: _data };
    };
})();
export default globalAction;
