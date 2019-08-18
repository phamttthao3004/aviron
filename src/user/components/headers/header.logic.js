import CONSTANTS from '../../scripts/apps/constants';

const GetNavigationParam = pageId => {
    let param = {};
    switch (pageId) {
        case CONSTANTS.SIDEBAR_PAGEID.PROFILE:
            param = { pathname: CONSTANTS.NAVIGATION_URL.PROFILE_OVERVIEW };
            break;
        case CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT:
            param = { pathname: CONSTANTS.NAVIGATION_URL.EQUIPMENT_OVERVIEW };
            break;
        case CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION:
            param = { pathname: CONSTANTS.NAVIGATION_URL.SUBSCRIPTION };
            break;
        case CONSTANTS.SIDEBAR_PAGEID.RECEIPT:
            param = { pathname: CONSTANTS.NAVIGATION_URL.RECEIPT };
            break;
        case CONSTANTS.SIDEBAR_PAGEID.PRODUCT:
            param = { pathname: CONSTANTS.NAVIGATION_URL.PRODUCT_IMPACT };
            break;
        case CONSTANTS.SIDEBAR_PAGEID.CHECKOUT:
            param = { pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_INFORMATION };
            break;
        default:
            param = { pathname: CONSTANTS.NAVIGATION_URL.NOT_FOUND };
            break;
    }
    return param;
};
export default GetNavigationParam;
