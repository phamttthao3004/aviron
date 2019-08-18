import { combineReducers } from 'redux';
import globalReducer from './globals/global.reducer';
import headerReducer from './headers/header.reducer';
import profileReducer from './profiles/profile.reducer';
import equipmentReducer from './equipments/equipment.reducer';
import productReducer from './products/product.reducer';

const rootReducer = combineReducers({
    global: globalReducer,
    header: headerReducer,
    profile: profileReducer,
    equipment: equipmentReducer,
    product: productReducer
});
export default rootReducer;
