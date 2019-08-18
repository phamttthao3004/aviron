import globalAction from './globals/global.action';
import headerAction from './headers/header.action';
import profileAction from './profiles/profile.action';
import equipmentAction from './equipments/equipment.action';
import productAction from './products/product.action';

const rootAction = new (function() {
    this.global = globalAction;
    this.header = headerAction;
    this.profile = profileAction;
    this.equipment = equipmentAction;
    this.product = productAction;
})();

export default rootAction;
