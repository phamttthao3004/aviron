import {
    GetInfoForPopoverWhenPlacement_Top,
    GetInfoForPopoverWhenPlacement_Bottom,
    GetInfoForPopoverWhenPlacement_Right,
    GetInfoForPopoverWhenPlacement_RightTop,
    GetInfoForPopoverWhenPlacement_RightBottom,
    GetInfoForPopoverWhenPlacement_Left,
    GetInfoForPopoverWhenPlacement_LeftTop,
    GetInfoForPopoverWhenPlacement_LeftBottom,
    RoundTopLeft,
    PLACEMENTS,
    GetInfoForPopover,
    TopIsLessZero,
    TopIsMoreHeight,
    LeftIsLessZero,
    LeftIsMoreWidth,
    ResizePosition
} from './cms-popover.logic';

describe('Test cms-popover.logic', () => {
    it('PLACEMENTS', () => {
        const result = new (function() {
            this.TOP = 'top';
            this.BOTTOM = 'bottom';
            this.LEFT = 'left';
            this.LEFT_TOP = 'left-top';
            this.LEFT_BOTTOM = 'left-bottom';
            this.RIGHT = 'right';
            this.RIGHT_TOP = 'right-top';
            this.RIGHT_BOTTOM = 'right-bottom';
        })();
        expect(PLACEMENTS).toMatchObject(result);
    });

    it('RoundTopLeft function -- param={top: undefined, left: undefined, class: "test"}', () => {
        const param = {
            top: undefined,
            left: undefined,
            class: 'test'
        };
        const result = { top: 0, left: 0, class: 'test' };
        expect(RoundTopLeft(param)).toMatchObject(result);
    });

    it('RoundTopLeft function -- param={top: 1.6, left: 4.4, class: "test"}', () => {
        const param = {
            top: 1.6,
            left: 4.4,
            class: 'test'
        };
        const result = { top: 2, left: 4, class: 'test' };
        expect(RoundTopLeft(param)).toMatchObject(result);
    });

    it('TopIsLessZero function -- param={placement: TOP, marginTop: 15}', () => {
        const param = {
            placement: PLACEMENTS.TOP,
            marginTop: 15
        };
        expect(TopIsLessZero(param)).toBe(param.marginTop);
    });

    it('TopIsLessZero function -- param={placement: LEFT_TOP, marginTop: 15}', () => {
        const param = {
            placement: PLACEMENTS.LEFT_TOP,
            marginTop: 15
        };
        expect(TopIsLessZero(param)).toBe(param.marginTop);
    });

    it('TopIsLessZero function -- param={placement: RIGHT_TOP, marginTop: 15}', () => {
        const param = {
            placement: PLACEMENTS.RIGHT_TOP,
            marginTop: 15
        };
        expect(TopIsLessZero(param)).toBe(param.marginTop);
    });

    it('TopIsLessZero function -- param={placement: undefined, marginTop: 15}', () => {
        const param = {
            placement: undefined,
            marginTop: 15
        };
        expect(TopIsLessZero(param)).toBe(0);
    });

    it('TopIsMoreHeight function -- param={placement: undefined}', () => {
        const param = {
            placement: undefined,
            marginTop: 15,
            innerHeight: 700, 
            heightPopover: 300
        };
        expect(TopIsMoreHeight(param)).toBe(400);
    });
    
    it('TopIsMoreHeight function -- param={placement: BOTTOM}', () => {
        const param = {
            placement: PLACEMENTS.BOTTOM,
            marginTop: 15,
            innerHeight: 700, 
            heightPopover: 300
        };
        expect(TopIsMoreHeight(param)).toBe(385);
    });

    it('TopIsMoreHeight function -- param={placement: LEFT_BOTTOM}', () => {
        const param = {
            placement: PLACEMENTS.LEFT_BOTTOM,
            marginTop: 15,
            innerHeight: 700, 
            heightPopover: 300
        };
        expect(TopIsMoreHeight(param)).toBe(385);
    });

    it('TopIsMoreHeight function -- param={placement: RIGHT_BOTTOM}', () => {
        const param = {
            placement: PLACEMENTS.RIGHT_BOTTOM,
            marginTop: 15,
            innerHeight: 700, 
            heightPopover: 300
        };
        expect(TopIsMoreHeight(param)).toBe(385);
    });

    it('LeftIsLessZero function -- param={placement: LEFT}', () => {
        const param = {
            placement: PLACEMENTS.LEFT,
            marginLeft: 15
        };
        expect(LeftIsLessZero(param)).toBe(param.marginLeft);
    });

    it('LeftIsLessZero function -- param={placement: LEFT_TOP}', () => {
        const param = {
            placement: PLACEMENTS.LEFT_TOP,
            marginLeft: 15
        };
        expect(LeftIsLessZero(param)).toBe(param.marginLeft);
    });

    it('LeftIsLessZero function -- param={placement: LEFT_BOTTOM}', () => {
        const param = {
            placement: PLACEMENTS.LEFT_BOTTOM,
            marginLeft: 15
        };
        expect(LeftIsLessZero(param)).toBe(param.marginLeft);
    });

    it('LeftIsLessZero function -- param={placement: undefined}', () => {
        const param = {
            placement: undefined,
            marginLeft: 15
        };
        expect(LeftIsLessZero(param)).toBe(0);
    });

    it('LeftIsMoreWidth function -- param={placement: RIGHT}', () => {
        const param = {
            placement: PLACEMENTS.RIGHT,
            marginLeft: 15,
            innerWidth: 700, 
            widthPopover: 300
        };
        expect(LeftIsMoreWidth(param)).toBe(385);
    });

    it('LeftIsMoreWidth function -- param={placement: RIGHT_TOP}', () => {
        const param = {
            placement: PLACEMENTS.RIGHT_TOP,
            marginLeft: 15,
            innerWidth: 700, 
            widthPopover: 300
        };
        expect(LeftIsMoreWidth(param)).toBe(385);
    });

    it('LeftIsMoreWidth function -- param={placement: RIGHT_BOTTOM}', () => {
        const param = {
            placement: PLACEMENTS.RIGHT_BOTTOM,
            marginLeft: 15,
            innerWidth: 700, 
            widthPopover: 300
        };
        expect(LeftIsMoreWidth(param)).toBe(385);
    });

    it('LeftIsMoreWidth function -- param={placement: undefined}', () => {
        const param = {
            placement: undefined,
            marginLeft: 15,
            innerWidth: 700, 
            widthPopover: 300
        };
        expect(LeftIsMoreWidth(param)).toBe(400);
    });

    it('ResizePosition function -- case 1: Top is less zero and Left is less zero and placement=LEFT_TOP', () => {
        const pResult = {
            top: -1,
            left: -1
        }
        const pOption = {
            placement: PLACEMENTS.LEFT_TOP, 
            heightPopover: 500, 
            widthPopover: 300, 
            marginLeft: 15, 
            marginTop: 15,
            innerHeight: 1900, 
            innerWidth: 900
        };

        const result = {
            top: pOption.marginTop,
            left: pOption.marginLeft
        };
        expect(ResizePosition(pResult, pOption)).toMatchObject(result);
    });

    it('ResizePosition function -- case 1: Top is more height and Left is more width and placement=RIGHT_BOTTOM', () => {
        const pResult = {
            top: 1500,
            left: 800
        }
        const pOption = {
            placement: PLACEMENTS.RIGHT_BOTTOM, 
            heightPopover: 500, 
            widthPopover: 300, 
            marginLeft: 15, 
            marginTop: 15,
            innerHeight: 1900, 
            innerWidth: 900
        };

        const result = {
            top: 1385,
            left: 585
        };
        expect(ResizePosition(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Top function -- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 500,
            top: 300
        };
        const heightPopover = 200;
        const widthAnchorEl = 100;
        const widthPopover = 500;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            heightPopover,
            widthAnchorEl,
            widthPopover,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 100, 
            left: 300, 
            class: 'cms-popover-top' 
        };
        expect(GetInfoForPopoverWhenPlacement_Top(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Top function -- Case 2: Top is less zero and Left is less zero', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 100,
            top: 300
        };
        const heightPopover = 400;
        const widthAnchorEl = 100;
        const widthPopover = 500;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            heightPopover,
            widthAnchorEl,
            widthPopover,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 15, 
            left: 0, 
            class: 'cms-popover-top' 
        };
        expect(GetInfoForPopoverWhenPlacement_Top(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Top function -- Case 3: Left is more width', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 850,
            top: 1700
        };
        const heightPopover = 400;
        const widthAnchorEl = 100;
        const widthPopover = 500;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            heightPopover,
            widthAnchorEl,
            widthPopover,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 1300, 
            left: 400, 
            class: 'cms-popover-top' 
        };
        expect(GetInfoForPopoverWhenPlacement_Top(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Bottom function --- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 500,
            top: 300
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 350, 
            left: 300, 
            class: 'cms-popover-bottom' 
        };
        expect(GetInfoForPopoverWhenPlacement_Bottom(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Bottom function --- Case 2: Left is less zero', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 0,
            top: 300
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 350, 
            left: 0, 
            class: 'cms-popover-bottom' 
        };
        expect(GetInfoForPopoverWhenPlacement_Bottom(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Bottom function --- Case 3: Left is more width and Top is more height', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 900,
            top: 1500
        };
        const heightPopover = 500;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 1385, 
            left: 400, 
            class: 'cms-popover-bottom' 
        };
        expect(GetInfoForPopoverWhenPlacement_Bottom(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Right function --- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 300,
            top: 300
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 225, 
            left: 400, 
            class: 'cms-popover-right' 
        };
        expect(GetInfoForPopoverWhenPlacement_Right(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Right function --- Case 2: Top is less zero', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 300,
            top: 0
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 0, 
            left: 400, 
            class: 'cms-popover-right' 
        };
        expect(GetInfoForPopoverWhenPlacement_Right(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Right function --- Case 3: Left is more width and Top is more height', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 900,
            top: 1900
        };
        const heightPopover = 400;
        const widthPopover = 500;
        const heightAnchorEl = 200;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 1500, 
            left: 385, 
            class: 'cms-popover-right' 
        };
        expect(GetInfoForPopoverWhenPlacement_Right(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_RightTop function --- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 300,
            top: 300
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 100, 
            left: 400, 
            class: 'cms-popover-right-top' 
        };
        expect(GetInfoForPopoverWhenPlacement_RightTop(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_RightTop function --- Case 2: Top is less zero and Left is more width', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 950,
            top: 0
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 15, 
            left: 385, 
            class: 'cms-popover-right-top' 
        };
        expect(GetInfoForPopoverWhenPlacement_RightTop(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_RightBottom function --- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 300,
            top: 300
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 350, 
            left: 400, 
            class: 'cms-popover-right-bottom' 
        };
        expect(GetInfoForPopoverWhenPlacement_RightBottom(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_RightBottom function --- Case 2: Top is more height and Left is more width', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 950,
            top: 1850
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 50;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 1685, 
            left: 385, 
            class: 'cms-popover-right-bottom' 
        };
        expect(GetInfoForPopoverWhenPlacement_RightBottom(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Left function --- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 800,
            top: 800
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 750, 
            left: 300, 
            class: 'cms-popover-left' 
        };
        expect(GetInfoForPopoverWhenPlacement_Left(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Left function --- Case 2: Top is less zero and Left is less zero', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 0,
            top: 0
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 0, 
            left: 15, 
            class: 'cms-popover-left' 
        };
        expect(GetInfoForPopoverWhenPlacement_Left(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_Left function --- Case 3: Top is more height', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 800,
            top: 1900
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 1700, 
            left: 300, 
            class: 'cms-popover-left' 
        };
        expect(GetInfoForPopoverWhenPlacement_Left(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_LeftTop function --- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 800,
            top: 800
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 600, 
            left: 300, 
            class: 'cms-popover-left-top' 
        };
        expect(GetInfoForPopoverWhenPlacement_LeftTop(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_LeftTop function --- Case 2: Top is less zero and Left is less zero', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 0,
            top: 0
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 15, 
            left: 15, 
            class: 'cms-popover-left-top' 
        };
        expect(GetInfoForPopoverWhenPlacement_LeftTop(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_LeftBottom function --- Case 1: happy case', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 800,
            top: 800
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 900, 
            left: 300, 
            class: 'cms-popover-left-bottom' 
        };
        expect(GetInfoForPopoverWhenPlacement_LeftBottom(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopoverWhenPlacement_LeftBottom function --- Case 2: Top is more height and Left is less zero', () => {
        const pResult = {
            top: 0,
            left: 0,
            class: 'test'
        };
        const pos = {
            left: 0,
            top: 1900
        };
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 1685, 
            left: 15, 
            class: 'cms-popover-left-bottom' 
        };
        expect(GetInfoForPopoverWhenPlacement_LeftBottom(pResult, pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 1: placement=undefined', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = undefined;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 0, 
            left: 0, 
            class: '' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 2: placement=TOP', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = PLACEMENTS.TOP;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 600, 
            left: 400, 
            class: 'cms-popover-top' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 3: placement=RIGHT', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = PLACEMENTS.RIGHT;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 750, 
            left: 385, 
            class: 'cms-popover-right' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 4: placement=RIGHT_TOP', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = PLACEMENTS.RIGHT_TOP;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 600, 
            left: 385, 
            class: 'cms-popover-right-top' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 5: placement=RIGHT_BOTTOM', () => {
        const pos = {
            left: 300,
            top: 300
        };
        const placement = PLACEMENTS.RIGHT_BOTTOM;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 400, 
            left: 400, 
            class: 'cms-popover-right-bottom' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 6: placement=BOTTOM', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = PLACEMENTS.BOTTOM;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 900, 
            left: 400, 
            class: 'cms-popover-bottom' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 7: placement=LEFT', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = PLACEMENTS.LEFT;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 750, 
            left: 300, 
            class: 'cms-popover-left' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 8: placement=LEFT_TOP', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = PLACEMENTS.LEFT_TOP;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 600, 
            left: 300, 
            class: 'cms-popover-left-top' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });

    it('GetInfoForPopover function --- Case 9: placement=LEFT_BOTTOM', () => {
        const pos = {
            left: 800,
            top: 800
        };
        const placement = PLACEMENTS.LEFT_BOTTOM;
        const heightPopover = 200;
        const widthPopover = 500;
        const heightAnchorEl = 100;
        const widthAnchorEl = 100;
        const innerHeight = 1900;
        const innerWidth = 900;
        const pOption = {
            placement,
            pos,
            widthPopover,
            heightPopover,
            heightAnchorEl,
            widthAnchorEl,
            innerHeight,
            innerWidth
        };
        const result = { 
            top: 900, 
            left: 300, 
            class: 'cms-popover-left-bottom' 
        };
        expect(GetInfoForPopover(pOption)).toMatchObject(result);
    });
});
