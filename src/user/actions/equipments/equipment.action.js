import ACTION_TYPES from '../action-types';

const equipmentAction = new (function() {
    this.setState = _data => {
        return { type: ACTION_TYPES.EQUIPMENT.SET_STATE, data: _data };
    };
})();
export default equipmentAction;
