const GLOBAL_TYPE = function() {
    this.SET_STATE = 'GLOBAL_SET_STATE';
    this.OPEN_MESSAGE_BOX = 'GLOBAL_OPEN_MESSAGE_BOX';
};
const HEADER_TYPE = function() {
    this.SET_STATE = 'HEADER_SET_STATE';
};
const PROFILE_TYPE = function() {
    this.SET_STATE = 'PROFILE_SET_STATE';
};
const EQUIPMENT_TYPE = function() {
    this.SET_STATE = 'EQUIPMENT_SET_STATE';
};
const PRODUCT_TYPE = function() {
    this.SET_STATE = 'PRODUCT_SET_STATE';
};
const ACTION_TYPES = new (function() {
    this.GLOBAL = new GLOBAL_TYPE();
    this.HEADER = new HEADER_TYPE();
    this.PROFILE = new PROFILE_TYPE();
    this.EQUIPMENT = new EQUIPMENT_TYPE();
    this.PRODUCT = new PRODUCT_TYPE();
})();

export default ACTION_TYPES;
