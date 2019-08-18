import React from 'react';
import PropTypes from 'prop-types';
import CmsDialog from '../../../custom-elements/cms-dialogs/cms-dialog';

const SubscriptionCancelDialogUI = ({ state, setOpenCancel }) => {
    const { open_cancel, item = {} } = state;
    return (
        <CmsDialog open={open_cancel} className="dialog-add-edit-group">
            <div className="cms-dialog-content">
                <div className="cms-dialog-title">
                    <span>CANCEL SUBSCRIPTION</span>
                </div>
                <div className="cms-dialog-main">
                    <div className="modal-body edit-group-container">
                        <p>Type &quot;CANCEL&quot; to confirm</p>
                        <input type="text" className="form-control" placeholder="" value={item.desc} />
                    </div>
                </div>
                <div className="cms-dialog-footer">
                    <button
                        className="btn btn-default"
                        onClick={() => {
                            setOpenCancel(item);
                        }}
                        type="button"
                        name="button"
                    >
                        Cancel
                    </button>
                    <button disabled={item.desc === '' || item.desc === undefined} className="btn btn-primary" type="button" name="button">
                        I want to cancel subscription
                    </button>
                </div>
            </div>
        </CmsDialog>
    );
};
SubscriptionCancelDialogUI.propTypes = {
    state: PropTypes.instanceOf(Object),
    setOpenCancel: PropTypes.func
};
SubscriptionCancelDialogUI.defaultProps = {
    state: {},
    setOpenCancel: () => {}
};
export default SubscriptionCancelDialogUI;
