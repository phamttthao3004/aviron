import React from 'react';
import PropTypes from 'prop-types';

class CmsTooltip extends React.Component {
    constructor(props) {
        super(props);
        this.identifier = `cms-tooltip-identifier-${window.GetRandomInt(99999)}`;
        this.element = undefined;
        this.tooltip = undefined;
        this.placements = new (function() {
            this.top = 'top';
            this.bottom = 'bottom';
            this.left = 'left';
            this.right = 'right';
        })();
    }

    // life cycle
    componentDidMount() {
        this.Init();
    }

    componentWillUnmount() {}

    // functions
    Init = () => {
        this.InitTooltip();
    };

    InitTooltip = () => {
        this.element = window.$(`.${this.identifier}`);
        this.element.on('mouseover', this.HandleMouseOver.bind(this));
        this.element.on('mouseout', this.HandleMouseOut.bind(this));
    };

    HandleMouseOver = () => {
        const { title } = this.props;
        this.tooltip = window.$(`<div class="cms-tooltip-container">${title}</div>`);
        window.$('body').append(this.tooltip);
        const info = this.GetInfoForTooltip();
        this.tooltip.css('transform', `translate3d(${info.left}px, ${info.top}px, 0px)`);
        this.tooltip.addClass(info.class);
    };

    HandleMouseOut = () => {
        this.tooltip.remove();
    };

    GetInfoForTooltip = () => {
        const { placement } = this.props;
        const pos = this.element.offset();
        const widthTooltip = this.tooltip.innerWidth();
        const heightTooltip = this.tooltip.innerHeight();
        const widthElement = this.element.innerWidth();
        const heightElement = this.element.innerHeight();
        let result = { top: 0, left: 0, class: '' };
        switch (placement) {
            case this.placements.top: {
                result = this.GetInfoForTooltipWhenPlacementTop(result, { pos, heightTooltip, widthElement, widthTooltip });
                break;
            }
            case this.placements.bottom: {
                result = this.GetInfoForTooltipWhenPlacementBottom(result, { pos, widthElement, widthTooltip, heightElement });
                break;
            }
            case this.placements.right: {
                result = this.GetInfoForTooltipWhenPlacementRight(result, { pos, heightElement, heightTooltip, widthElement });
                break;
            }
            case this.placements.left: {
                result = this.GetInfoForTooltipWhenPlacementLeft(result, { pos, heightElement, heightTooltip, widthTooltip });
                break;
            }
            default:
                break;
        }
        result = this.RoundTopLeft(result);

        return result;
    };

    GetInfoForTooltipWhenPlacementTop = (pResult, pOption) => {
        const result = Object.assign({}, pResult);
        const { pos, heightTooltip, widthElement, widthTooltip } = pOption;
        result.class = 'cms-tooltip-top';
        result.top = pos.top - heightTooltip;
        result.left = pos.left + widthElement / 2 - widthTooltip / 2;
        result.left = result.left < 0 ? 0 : result.left;
        return result;
    };

    GetInfoForTooltipWhenPlacementBottom = (pResult, pOption) => {
        const result = Object.assign({}, pResult);
        const { pos, widthElement, widthTooltip, heightElement } = pOption;
        result.class = 'cms-tooltip-bottom';
        result.left = pos.left + widthElement / 2 - widthTooltip / 2;
        result.left = result.left < 0 ? 0 : result.left;
        result.top = pos.top + heightElement;
        return result;
    };

    GetInfoForTooltipWhenPlacementRight = (pResult, pOption) => {
        const result = Object.assign({}, pResult);
        const { pos, heightElement, heightTooltip, widthElement } = pOption;
        result.class = 'cms-tooltip-right';
        result.top = pos.top + heightElement / 2 - heightTooltip / 2;
        result.left = pos.left + widthElement;
        return result;
    };

    GetInfoForTooltipWhenPlacementLeft = (pResult, pOption) => {
        const result = Object.assign({}, pResult);
        const { pos, heightElement, heightTooltip, widthTooltip } = pOption;
        result.class = 'cms-tooltip-left';
        result.top = pos.top + heightElement / 2 - heightTooltip / 2;
        result.left = pos.left - widthTooltip;
        return result;
    };

    RoundTopLeft = pResult => {
        const result = Object.assign({}, pResult);
        result.top = Math.round(result.top);
        result.left = Math.round(result.left);
        return result;
    };

    // events

    render() {
        const { children } = this.props;
        return React.cloneElement(children, { className: `${this.identifier} ${children.props.className}` });
    }
}
CmsTooltip.propTypes = {
    title: PropTypes.string,
    placement: PropTypes.string,
    children: PropTypes.element
};
CmsTooltip.defaultProps = {
    title: '',
    placement: '',
    children: <div />
};

export default CmsTooltip;
