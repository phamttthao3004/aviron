import ACTION_TYPES from '../action-types';

const headerAction = new (function() {
    this.setState = _data => {
        return { type: ACTION_TYPES.HEADER.SET_STATE, data: _data };
    };
})();
export default headerAction;
