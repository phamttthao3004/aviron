import React from 'react';
import PropTypes from 'prop-types';
import CmsTable from '../../../custom-elements/cms-tables/cms-table';
import CmsTooltip from '../../../custom-elements/cms-tooltips/cms-tooltip';

const EquipmentOverviewTableUI = ({ data, setOpenEdit, onChange, onSearch }) => {
    return (
        <CmsTable className="container" data={data} onChange={onChange} onSearch={onSearch}>
            <div className="cms-table-content">
                <table className="table aviron-table action-table call-data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Machine id</th>
                            <th>Equipment name</th>
                            <th>Model</th>
                            <th>Last online</th>
                            <th>App version</th>
                            <th>OS version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(t => {
                            return t.show ? (
                                <tr key={t.index}>
                                    <td>{t.index}</td>
                                    <td>
                                        <p>{t.machine_id}</p>
                                    </td>
                                    <td>
                                        <CmsTooltip title={t.equipment_name} placement="top">
                                            <strong className="text-bolder ">{t.equipment_name}</strong>
                                        </CmsTooltip>
                                    </td>
                                    <td>{t.model}</td>
                                    <td>
                                        {/* <strong className="text-uppercase text-success">{t.last_online}</strong> */}
                                        <p>{t.last_online}</p>
                                    </td>
                                    <td>{t.app_version}</td>
                                    <td className="position-relative">
                                        <div className="cell-action-block">
                                            <span>{t.os_version}</span>
                                            <div className="btn-group-table-action ">
                                                <button
                                                    className="btn pointer"
                                                    onClick={() => {
                                                        setOpenEdit(t);
                                                    }}
                                                    type="button"
                                                    name="button"
                                                >
                                                    <i className="icon-pencil-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : null;
                        })}
                    </tbody>
                </table>
            </div>
        </CmsTable>
    );
};
EquipmentOverviewTableUI.propTypes = {
    data: PropTypes.instanceOf(Array),
    setOpenEdit: PropTypes.func,
    onSearch: PropTypes.func,
    onChange: PropTypes.func
};
EquipmentOverviewTableUI.defaultProps = {
    data: [],
    setOpenEdit: () => {},
    onSearch: () => {},
    onChange: () => {}
};
export default EquipmentOverviewTableUI;
