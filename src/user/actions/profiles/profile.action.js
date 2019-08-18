import ACTION_TYPES from '../action-types';

const profileAction = new (function() {
    this.setState = _data => {
        return { type: ACTION_TYPES.PROFILE.SET_STATE, data: _data };
    };
})();
export default profileAction;
