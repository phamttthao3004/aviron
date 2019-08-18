import React from 'react';
import PropTypes from 'prop-types';
import CmsDialog from '../../../custom-elements/cms-dialogs/cms-dialog';

const EquipmentOverviewDialogUI = ({ state, setOpenEdit }) => {
    const { open_edit, item_equipment = {} } = state;
    const { equipment_name = '' } = item_equipment;
    return (
        <CmsDialog open={open_edit} className="dialog-add-edit-group">
            <div className="cms-dialog-content">
                <div className="cms-dialog-title">
                    <span>EDIT</span>
                </div>
                <div className="cms-dialog-main">
                    <div className="modal-body edit-group-container">
                        <p>EQUIPMENT NAME</p>
                        <input type="text" className="form-control" placeholder="Equipment name" value={equipment_name} />
                    </div>
                </div>
                <div className="cms-dialog-footer">
                    <button
                        className="btn btn-default"
                        onClick={() => {
                            setOpenEdit(item_equipment);
                        }}
                        type="button"
                        name="button"
                    >
                        Cancel
                    </button>
                    <button className="btn btn-primary" type="button" name="button">
                        Add
                    </button>
                </div>
            </div>
        </CmsDialog>
    );
};
EquipmentOverviewDialogUI.propTypes = {
    state: PropTypes.instanceOf(Object),
    setOpenEdit: PropTypes.func
};
EquipmentOverviewDialogUI.defaultProps = {
    state: {},
    setOpenEdit: () => {}
};
export default EquipmentOverviewDialogUI;
