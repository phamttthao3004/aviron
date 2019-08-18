import React from 'react';
import PropTypes from 'prop-types';
import CmsTable from '../../custom-elements/cms-tables/cms-table';

const ReceiptUI = ({ data, onChange, onSearch, setOpenView }) => {
    return (
        <div id="receipt-page">
            <div className="container">
                <div className="row">
                    <CmsTable data={data} onChange={onChange} onSearch={onSearch}>
                        <div className="cms-table-content">
                            <table className="table aviron-table action-table call-data-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order date</th>
                                        <th>Order number</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(t => {
                                        return t.show ? (
                                            <tr key={t.index}>
                                                <td>{t.index}</td>
                                                <td>{t.order_date}</td>
                                                <td>{t.order_number}</td>
                                                <td>{t.price}</td>
                                                <td>{t.status}</td>
                                                <td className="position-relative">
                                                    <div className="cell-action-block">
                                                        <span>{t.os_version}</span>
                                                        <div className="btn-group-table-action ">
                                                            <button
                                                                className="btn pointer"
                                                                onClick={() => {
                                                                    setOpenView(t);
                                                                }}
                                                                type="button"
                                                                name="button"
                                                            >
                                                                <span>View</span>
                                                                <i className="icon-right-open-big" />
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
                </div>
            </div>
        </div>
    );
};
ReceiptUI.propTypes = {
    data: PropTypes.instanceOf(Object),
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    setOpenView: PropTypes.func
};
ReceiptUI.defaultProps = {
    data: {},
    onSearch: () => {},
    onChange: () => {},
    setOpenView: () => {}
};
export default ReceiptUI;
