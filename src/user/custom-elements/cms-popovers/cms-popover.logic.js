const PLACEMENTS = new (function() {
    this.TOP = 'top';
    this.BOTTOM = 'bottom';
    this.LEFT = 'left';
    this.LEFT_TOP = 'left-top';
    this.LEFT_BOTTOM = 'left-bottom';
    this.RIGHT = 'right';
    this.RIGHT_TOP = 'right-top';
    this.RIGHT_BOTTOM = 'right-bottom';
})();

const RoundTopLeft = pResult => {
    const result = Object.assign({}, pResult);
    let { top, left } = result;
    top = Math.round(top);
    left = Math.round(left);

    result.top = Number.isNaN(top) ? 0 : top;
    result.left = Number.isNaN(left) ? 0 : left;
    return result;
};

const TopIsLessZero = param => {
    const { placement, marginTop } = param;
    let top = 0;
    switch (placement) {
        case PLACEMENTS.TOP:
        case PLACEMENTS.LEFT_TOP:
        case PLACEMENTS.RIGHT_TOP:
            top = marginTop;
            break;
        default:
            break;
    }
    return top;
};

const TopIsMoreHeight = param => {
    const { placement, marginTop, innerHeight, heightPopover } = param;
    let top = innerHeight - heightPopover;
    switch (placement) {
        case PLACEMENTS.BOTTOM:
        case PLACEMENTS.LEFT_BOTTOM:
        case PLACEMENTS.RIGHT_BOTTOM:
            top -= marginTop;
            break;
        default:
            break;
    }
    return top;
};

const LeftIsLessZero = param => {
    const { placement, marginLeft } = param;
    let left = 0;
    switch (placement) {
        case PLACEMENTS.LEFT:
        case PLACEMENTS.LEFT_TOP:
        case PLACEMENTS.LEFT_BOTTOM:
            left = marginLeft;
            break;
        default:
            break;
    }
    return left;
};

const LeftIsMoreWidth = param => {
    const { placement, marginLeft, innerWidth, widthPopover } = param;
    let left = innerWidth - widthPopover;
    switch (placement) {
        case PLACEMENTS.RIGHT:
        case PLACEMENTS.RIGHT_TOP:
        case PLACEMENTS.RIGHT_BOTTOM:
            left -= marginLeft;
            break;
        default:
            break;
    }
    return left;
};

const ResizePosition = (pResult = { top: 0, left: 0 }, pOption) => {
    const { heightPopover = 0, widthPopover = 0, placement = PLACEMENTS.TOP, marginLeft = 15, marginTop = 15, innerHeight = 0, innerWidth = 0 } = pOption;
    const result = Object.assign({}, pResult);
    if (result.top < 0) {
        result.top = TopIsLessZero({ placement, marginTop });
    } else if (result.top + heightPopover > innerHeight) {
        result.top = TopIsMoreHeight({ placement, marginTop, innerHeight, heightPopover });
    }
    if (result.left < 0) {
        result.left = LeftIsLessZero({ placement, marginLeft });
    } else if (result.left + widthPopover > innerWidth) {
        result.left = LeftIsMoreWidth({ placement, marginLeft, innerWidth, widthPopover });
    }
    return result;
};

const GetInfoForPopoverWhenPlacement_Top = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightPopover = 0, widthAnchorEl = 0, widthPopover = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-top';
    result.top = pos.top - heightPopover;
    result.left = pos.left + widthAnchorEl / 2 - widthPopover / 2;
    const placement = PLACEMENTS.TOP;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopoverWhenPlacement_Bottom = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightPopover = 0, widthPopover = 0, widthAnchorEl = 0, heightAnchorEl = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-bottom';
    result.left = pos.left + widthAnchorEl / 2 - widthPopover / 2;
    result.top = pos.top + heightAnchorEl;
    const placement = PLACEMENTS.BOTTOM;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopoverWhenPlacement_Right = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightPopover = 0, widthPopover = 0, heightAnchorEl = 0, widthAnchorEl = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-right';
    result.top = pos.top + heightAnchorEl / 2 - heightPopover / 2;
    result.left = pos.left + widthAnchorEl;
    const placement = PLACEMENTS.RIGHT;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopoverWhenPlacement_RightTop = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightPopover = 0, widthPopover = 0, widthAnchorEl = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-right-top';
    result.top = pos.top - heightPopover;
    result.left = pos.left + widthAnchorEl;
    const placement = PLACEMENTS.RIGHT_TOP;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopoverWhenPlacement_RightBottom = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightPopover = 0, widthPopover = 0, heightAnchorEl = 0, widthAnchorEl = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-right-bottom';
    result.top = pos.top + heightAnchorEl;
    result.left = pos.left + widthAnchorEl;
    const placement = PLACEMENTS.RIGHT_BOTTOM;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopoverWhenPlacement_Left = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightAnchorEl = 0, heightPopover = 0, widthPopover = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-left';
    result.top = pos.top + heightAnchorEl / 2 - heightPopover / 2;
    result.left = pos.left - widthPopover;
    const placement = PLACEMENTS.LEFT;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopoverWhenPlacement_LeftTop = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightPopover = 0, widthPopover = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-left-top';
    result.top = pos.top - heightPopover;
    result.left = pos.left - widthPopover;
    const placement = PLACEMENTS.LEFT_TOP;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopoverWhenPlacement_LeftBottom = (pResult, pOption) => {
    let result = Object.assign({}, pResult);
    const { pos = { top: 0, left: 0 }, heightPopover = 0, widthPopover = 0, heightAnchorEl = 0, innerHeight = 0, innerWidth = 0 } = pOption;
    result.class = 'cms-popover-left-bottom';
    result.top = pos.top + heightAnchorEl;
    result.left = pos.left - widthPopover;
    const placement = PLACEMENTS.LEFT_BOTTOM;
    result = ResizePosition(result, { widthPopover, heightPopover, placement, innerHeight, innerWidth });
    return result;
};

const GetInfoForPopover = pOption => {
    const { placement, pos, widthPopover, heightPopover, widthAnchorEl, heightAnchorEl, innerHeight, innerWidth } = pOption;
    let result = { top: 0, left: 0, class: '' };
    const option = { pos, heightPopover, widthPopover, heightAnchorEl, widthAnchorEl, innerHeight, innerWidth };
    switch (placement) {
        case PLACEMENTS.TOP: {
            result = GetInfoForPopoverWhenPlacement_Top(result, option);
            break;
        }
        case PLACEMENTS.BOTTOM: {
            result = GetInfoForPopoverWhenPlacement_Bottom(result, option);
            break;
        }
        case PLACEMENTS.RIGHT: {
            result = GetInfoForPopoverWhenPlacement_Right(result, option);
            break;
        }
        case PLACEMENTS.RIGHT_TOP: {
            result = GetInfoForPopoverWhenPlacement_RightTop(result, option);
            break;
        }
        case PLACEMENTS.RIGHT_BOTTOM: {
            result = GetInfoForPopoverWhenPlacement_RightBottom(result, option);
            break;
        }
        case PLACEMENTS.LEFT: {
            result = GetInfoForPopoverWhenPlacement_Left(result, option);
            break;
        }
        case PLACEMENTS.LEFT_TOP: {
            result = GetInfoForPopoverWhenPlacement_LeftTop(result, option);
            break;
        }
        case PLACEMENTS.LEFT_BOTTOM: {
            result = GetInfoForPopoverWhenPlacement_LeftBottom(result, option);
            break;
        }
        default:
            break;
    }
    result = RoundTopLeft(result);

    return result;
};

export {
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
};
