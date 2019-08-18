import '../../styles/libs/sweet-alert2/sweetalert2.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import CmsDialog from '../../custom-elements/cms-dialogs/cms-dialog';

const mapStateToProps = state => {
    return {
        message_box_open: state.global.message_box_open,
        message_box_type: state.global.message_box_type,
        message_box_title: state.global.message_box_title,
        message_box_message: state.global.message_box_message,
        message_box_button_type: state.global.message_box_button_type,
        message_box_functions: state.global.message_box_functions,
        message_box_options: state.global.message_box_options
    };
};
const mapDispatchToProps = dispatch => {
    return {
        openMessageBox: _data => dispatch(rootAction.global.openMessageBox(_data))
    };
};

const GetImageComponent = function(pMessageBoxType) {
    let image = null;
    switch (+pMessageBoxType) {
        case CONSTANTS.MESSAGE_BOX_TYPE.ERROR:
            image = (
                <div className="swal2-icon swal2-error swal2-animate-error-icon">
                    <span className="swal2-x-mark">
                        <span className="swal2-x-mark-line-left" />
                        <span className="swal2-x-mark-line-right" />
                    </span>
                </div>
            );
            break;
        case CONSTANTS.MESSAGE_BOX_TYPE.WARNING:
            image = <div className="swal2-icon swal2-warning swal2-animate-warning-icon" />;
            break;
        case CONSTANTS.MESSAGE_BOX_TYPE.INFO:
            image = <div className="swal2-icon swal2-info swal2-animate-info-icon" />;
            break;
        case CONSTANTS.MESSAGE_BOX_TYPE.QUESTION:
            image = <div className="swal2-icon swal2-question swal2-animate-question-icon" />;
            break;
        case CONSTANTS.MESSAGE_BOX_TYPE.SUCCESS:
            image = (
                <div className="swal2-icon swal2-success swal2-animate-success-icon">
                    <div className="swal2-success-circular-line-left" />
                    <span className="swal2-success-line-tip" />
                    <span className="swal2-success-line-long" />
                    <div className="swal2-success-ring" />
                    <div className="swal2-success-fix" />
                    <div className="swal2-success-circular-line-right" />
                </div>
            );
            break;
        default:
            break;
    }
    return image;
};

class MessageBoxConnected extends React.Component {
    constructor(props) {
        super(props);
        this.image = GetImageComponent();
    }
    // life cycle

    componentWillReceiveProps(newProps) {
        const oldProps = this.props;
        if (oldProps.message_box_type !== newProps.message_box_type) {
            this.image = GetImageComponent(newProps.message_box_type);
        }
    }

    // events
    cancelBtn = () => {
        const { message_box_functions } = this.props;
        if (message_box_functions.cancelBtn !== undefined) {
            message_box_functions.cancelBtn();
        }
        this.CloseDialog();
    };

    okBtn = () => {
        const { message_box_functions } = this.props;
        if (message_box_functions.okBtn !== undefined) {
            message_box_functions.okBtn();
        }
        this.CloseDialog();
    };

    // functions
    CloseDialog() {
        const { openMessageBox } = this.props;
        openMessageBox({ open: false });
    }

    GetButtonsComponent() {
        const {message_box_options, message_box_button_type} = this.props;
        const options = message_box_options;
        const button_type = message_box_button_type;
        const buttons_text = options.buttons_text === undefined ? {} : options.buttons_text;
        const okBtnText = buttons_text.okBtn === undefined ? 'Ok' : buttons_text.okBtn;
        const cancelBtnText = buttons_text.cancelBtn === undefined ? 'Cancel' : buttons_text.cancelBtn;

        let renderButtons = (
            <div className="swal2-actions">
                <button onClick={this.okBtn.bind(this)} type="button" className="swal2-styled swal2-confirm">
                    {okBtnText}
                </button>
                <button onClick={this.cancelBtn.bind(this)} type="button" className="swal2-styled swal2-cancel">
                    {cancelBtnText}
                </button>
            </div>
        );
        if (button_type === CONSTANTS.MESSAGE_BOX_BUTTON_TYPE.ONE_BUTTON) {
            renderButtons = (
                <div className="swal2-actions">
                    <button onClick={this.okBtn.bind(this)} type="button" className="swal2-styled swal2-confirm">
                        {okBtnText}
                    </button>
                </div>
            );
        }

        return renderButtons;
    }

    render() {
        const {message_box_open, message_box_title, message_box_message} = this.props;
        const renderButtons = this.GetButtonsComponent();

        return (
            <CmsDialog className="message-box" open={message_box_open}>
                <div className="swal2-popup swal2-modal swal2-show">
                    <div className="swal2-header">
                        {this.image}
                        <h2 className="swal2-title">{message_box_title}</h2>
                    </div>
                    <div className="swal2-content">
                        <div className="swal2-message">{message_box_message}</div>
                    </div>
                    {renderButtons}
                </div>
            </CmsDialog>
        );
    }
}

MessageBoxConnected.propTypes = {
    message_box_open: PropTypes.bool,
    message_box_type: PropTypes.number,
    message_box_title: PropTypes.string,
    message_box_message: PropTypes.string,
    message_box_button_type: PropTypes.number,
    message_box_functions: PropTypes.instanceOf(Object),
    message_box_options: PropTypes.instanceOf(Object),
    openMessageBox: PropTypes.func
};
MessageBoxConnected.defaultProps = {
    message_box_open: false,
    message_box_type: CONSTANTS.MESSAGE_BOX_TYPE.SUCCESS,
    message_box_title: '',
    message_box_message: '',
    message_box_button_type: CONSTANTS.MESSAGE_BOX_BUTTON_TYPE.ONE_BUTTON,
    message_box_functions: {},
    message_box_options: {},
    openMessageBox: () => {}
};

const MessageBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoxConnected);
export default withRouter(MessageBox);
