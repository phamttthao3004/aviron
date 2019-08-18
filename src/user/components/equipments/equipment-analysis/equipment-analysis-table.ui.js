import React from 'react';
import PropTypes from 'prop-types';
// import CmsTable from '../../../custom-elements/cms-tables/cms-table';
import CmsTooltip from '../../../custom-elements/cms-tooltips/cms-tooltip';

const EquipmentAnalysisTableUI = ({ stateTable, onSearch, selectAll, onSelect, onChangeInput }) => {
    const { data = [], value_input } = stateTable;
    return (
        <div className="equipment-analysis-col-left">
            <div className="form-inline">
                <div className="input-group input-search-container">
                    <input type="text" className="form-control" value={value_input} onChange={onChangeInput} placeholder="Search" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={onSearch}>
                            {' '}
                            <span className="glyphicon glyphicon-search" aria-hidden="true" />
                        </button>
                    </span>
                </div>
            </div>
            <label htmlFor="select-all">
                <input type="checkbox" id="select-all" onClick={selectAll} />
                <span>All</span>
            </label>
            {/* <CmsTable data={data} onChange={onChange} onSearch={onSearch}> */}
            <div className="cms-table-content">
                <table className="table aviron-table action-table call-data-table">
                    <tbody>
                        {data.map((t, index) => {
                            return t.show ? (
                                <tr key={t.machine_id}>
                                    <td style={{ width: '55px' }}>
                                        <label htmlFor={`select${index + 1}`}>
                                            <input type="checkbox" checked={t.selected} name={`${t.id}`} onClick={onSelect} id={`select${index + 1}`} />
                                        </label>
                                    </td>
                                    <td>
                                        <label htmlFor={`select${index + 1}`}>
                                            <CmsTooltip title={t.name} placement="top">
                                                <strong className="text-bolder ">{t.name}</strong>
                                            </CmsTooltip>
                                            <p>Machine ID: {t.machine_id}</p>
                                        </label>
                                    </td>
                                </tr>
                            ) : null;
                        })}
                    </tbody>
                </table>
            </div>
            {/* </CmsTable> */}
        </div>
    );
};
EquipmentAnalysisTableUI.propTypes = {
    stateTable: PropTypes.instanceOf(Array),
    onSearch: PropTypes.func,
    onChangeInput: PropTypes.func,
    selectAll: PropTypes.func,
    onSelect: PropTypes.func
};
EquipmentAnalysisTableUI.defaultProps = {
    stateTable: [],
    onSearch: () => {},
    onChangeInput: () => {},
    selectAll: () => {},
    onSelect: () => {}
};
export default EquipmentAnalysisTableUI;
