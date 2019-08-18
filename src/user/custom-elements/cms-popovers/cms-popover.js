import React from 'react';
import PropTypes from 'prop-types';
import { PLACEMENTS, GetInfoForPopover } from './cms-popover.logic';
import CmsPopoverUI from './cms-popover.ui';

class CmsPopover extends React.Component {
    constructor(props) {
        super(props);
        const { open } = this.props;
        this.identifier = `cms-popover-identifier-${window.GetRandomInt(99999)}`;
        this.identifier_container = `cms-popover-container-identifier-${window.GetRandomInt(99999)}`;
        this.disable_scroll_class = 'disable-scroll';
        this.element = undefined;
        this.anchor_element = undefined;
        this.current_open = open;
        this.preventDefault = function(e) {
            e.preventDefault();
        };
    }

    componentDidMount() {
        this.Init();
    }

    componentWillReceiveProps() {}

    componentDidUpdate() {
        const { open } = this.props;
        if (this.current_open !== open) {
            this.current_open = open;
            if (this.current_open) {
                this.OpenPopover();
            } else {
                this.ClosePopover();
            }
        }
    }

    componentWillUnmount() {
        this.ClosePopover();
    }

    // functions
    Init = () => {
        this.InitPopover();
        const { open } = this.props;
        if (open) {
            this.OpenPopover();
        }
    };

    InitPopover = () => {
        const { anchorId } = this.props;
        this.anchor_element = window.$(`#${anchorId}`);
    };

    OpenPopover = () => {
        this.ClosePopover();

        this.element = window.$(`#${this.identifier}`);

        this.DisableScrollBar();

        this.SetClickOutsideEvent();

        this.SetInfoForPopover();
    };

    SetInfoForPopover = () => {
        const { placement } = this.props;
        const { pos, widthPopover, heightPopover, widthAnchorEl, heightAnchorEl } = this.GetSizeSets();
        const { innerHeight, innerWidth } = window;
        const info = GetInfoForPopover({ placement, pos, widthPopover, heightPopover, widthAnchorEl, heightAnchorEl, innerHeight, innerWidth });
        this.element.css('transform', `translate3d(${info.left}px, ${info.top}px, 0px)`);
        this.element.addClass(info.class);
    };

    SetClickOutsideEvent = () => {
        document.getElementById(`${this.identifier_container}`).addEventListener('click', this.HandleClickOutside.bind(this, this.identifier));
    };

    DisableScrollBar = () => {
        window.$('body').addClass(this.disable_scroll_class);
        document.body.addEventListener('touchmove', this.preventDefault, { passive: false });
    };

    ClosePopover = () => {
        this.EnableScrollBar();
    };

    EnableScrollBar = () => {
        window.$('body').removeClass(this.disable_scroll_class);
        document.body.removeEventListener('touchmove', this.preventDefault);
    };

    GetSizeSets = () => {
        const pos = this.anchor_element.offset();
        const widthPopover = this.element.innerWidth();
        const heightPopover = this.element.innerHeight();
        const widthAnchorEl = this.anchor_element.innerWidth();
        const heightAnchorEl = this.anchor_element.innerHeight();
        return {
            pos,
            widthPopover,
            heightPopover,
            widthAnchorEl,
            heightAnchorEl
        };
    };

    HandleClickOutside = (identifier, event) => {
        const { onClose, clickOutsideToClose } = this.props;
        if (clickOutsideToClose) {
            const { length } = window.$(event.target).closest(`#${identifier}`);
            if (length === 0) {
                // click outside
                onClose();
            }
        }
    };

    // events

    render() {
        const { open, children, className } = this.props;
        const { identifier_container, identifier } = this;
        const identifierContainer = identifier_container;
        const props = { identifierContainer, identifier, open, children, className };

        return <CmsPopoverUI {...props} />;
    }
}

CmsPopover.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.element,
    className: PropTypes.string,
    anchorId: PropTypes.string,
    placement: PropTypes.string,
    onClose: PropTypes.func,
    clickOutsideToClose: PropTypes.bool
};
CmsPopover.defaultProps = {
    open: false,
    children: <div />,
    className: '',
    anchorId: '',
    placement: PLACEMENTS.TOP,
    onClose: () => {},
    clickOutsideToClose: true
};
export { PLACEMENTS };
export default CmsPopover;
