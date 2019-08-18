import React from 'react';
import PropTypes from 'prop-types';
import CmsDialog from '../../../custom-elements/cms-dialogs/cms-dialog';

const SubscriptionAddDialogUI = ({ state, setOpenAdd }) => {
    const { open_add, item = {} } = state;
    return (
        <CmsDialog open={open_add} className="dialog-add-edit-group">
            <div className="cms-dialog-content">
                <div className="cms-dialog-title">
                    <span>ADD MACHINE</span>
                </div>
                <div className="cms-dialog-main">
                    <div className="modal-body edit-group-container">
                        <p>MACHINE ID</p>
                        <input type="text" className="form-control" placeholder="" value={item.machine_id} />
                    </div>
                </div>
                <div className="cms-dialog-footer">
                    <button
                        className="btn btn-default"
                        onClick={() => {
                            setOpenAdd(item);
                        }}
                        type="button"
                        name="button"
                    >
                        Cancel
                    </button>
                    <button disabled={item.machine_id === ''} className="btn btn-primary" type="button" name="button">
                        Add
                    </button>
                </div>
            </div>
        </CmsDialog>
    );
};
SubscriptionAddDialogUI.propTypes = {
    state: PropTypes.instanceOf(Object),
    setOpenAdd: PropTypes.func
};
SubscriptionAddDialogUI.defaultProps = {
    state: {},
    setOpenAdd: () => {}
};
export default SubscriptionAddDialogUI;
