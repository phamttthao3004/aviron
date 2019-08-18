import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const isReact16 = ReactDOM.createPortal !== undefined;

const GetCreatePortal = isReact16 ? ReactDOM.createPortal : ReactDOM.unstable_renderSubtreeIntoContainer;

class CmsDialog extends React.Component {
    constructor(props) {
        super(props);
        const { open } = this.props;
        this.identifier = `cms-dialog-identifier-${window.GetRandomInt(99999)}`;
        this.disable_scroll = 'disable-scroll';
        this.element = undefined;
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
                this.OpenDialog();
            } else {
                this.CloseDialog();
            }
        }
    }

    componentWillUnmount() {}

    // events

    // functions
    Init() {
        const { open } = this.props;
        if (open) {
            this.OpenDialog();
        }
    }

    OpenDialog() {
        this.CloseDialog();
        // disable scrollbar
        window.$('body').addClass(this.disable_scroll);
        document.body.addEventListener('touchmove', this.preventDefault, { passive: false });
    }

    CloseDialog() {
        // enable scrollbar
        window.$('body').removeClass(this.disable_scroll);
        document.body.removeEventListener('touchmove', this.preventDefault);
    }

    render() {
        const { open, children, className } = this.props;
        if (!open) {
            return null;
        }

        const main = (
            <div id={this.identifier} className={`cms-dialog-container ${className}`}>
                <div className="cms-dialog-mask" />
                {children}
            </div>
        );
        return GetCreatePortal(main, document.body);
    }
}

CmsDialog.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.element,
    className: PropTypes.string
};
CmsDialog.defaultProps = {
    open: false,
    children: <div />,
    className: ''
};
export default CmsDialog;
