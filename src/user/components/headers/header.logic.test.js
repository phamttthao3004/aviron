import GetNavigationParam from './header.logic';
import CONSTANTS from '../../scripts/apps/constants';

describe('Test GetNavigationParam function', () => {
    it('pageID is undefined', () => {
        const pageId = undefined;
        const result = { pathname: CONSTANTS.NAVIGATION_URL.NOT_FOUND };
        expect(GetNavigationParam(pageId)).toMatchObject(result);
    });

    it('pageID is CONSTANTS.SIDEBAR_PAGEID.PROFILE', () => {
        const pageId = CONSTANTS.SIDEBAR_PAGEID.PROFILE;
        const result = { pathname: CONSTANTS.NAVIGATION_URL.PROFILE_OVERVIEW };
        expect(GetNavigationParam(pageId)).toMatchObject(result);
    });

    it('pageID is CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT', () => {
        const pageId = CONSTANTS.SIDEBAR_PAGEID.EQUIPMENT;
        const result = { pathname: CONSTANTS.NAVIGATION_URL.EQUIPMENT_OVERVIEW };
        expect(GetNavigationParam(pageId)).toMatchObject(result);
    });

    it('pageID is CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION', () => {
        const pageId = CONSTANTS.SIDEBAR_PAGEID.SUBSCRIPTION;
        const result = { pathname: CONSTANTS.NAVIGATION_URL.SUBSCRIPTION };
        expect(GetNavigationParam(pageId)).toMatchObject(result);
    });

    it('pageID is CONSTANTS.SIDEBAR_PAGEID.RECEIPT', () => {
        const pageId = CONSTANTS.SIDEBAR_PAGEID.RECEIPT;
        const result = { pathname: CONSTANTS.NAVIGATION_URL.RECEIPT };
        expect(GetNavigationParam(pageId)).toMatchObject(result);
    });

    it('pageID is CONSTANTS.SIDEBAR_PAGEID.PRODUCT', () => {
        const pageId = CONSTANTS.SIDEBAR_PAGEID.PRODUCT;
        const result = { pathname: CONSTANTS.NAVIGATION_URL.PRODUCT_IMPACT };
        expect(GetNavigationParam(pageId)).toMatchObject(result);
    });

    it('pageID is CONSTANTS.SIDEBAR_PAGEID.CHECKOUT', () => {
        const pageId = CONSTANTS.SIDEBAR_PAGEID.CHECKOUT;
        const result = { pathname: CONSTANTS.NAVIGATION_URL.CHECKOUT_INFORMATION };
        expect(GetNavigationParam(pageId)).toMatchObject(result);
    });
});
