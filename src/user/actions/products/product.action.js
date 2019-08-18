import ACTION_TYPES from '../action-types';

const productAction = new (function() {
    this.setState = _data => {
        return { type: ACTION_TYPES.PRODUCT.SET_STATE, data: _data };
    };
})();
export default productAction;
