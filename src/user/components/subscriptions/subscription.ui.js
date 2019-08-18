import React from 'react';
import PropTypes from 'prop-types';
import CmsTable from '../../custom-elements/cms-tables/cms-table';
import CmsTooltip from '../../custom-elements/cms-tooltips/cms-tooltip';
import CONSTANTS from '../../scripts/apps/constants';
import SubscriptionAddDialogUI from './subscription-add-dialogs/subscription-add-dialog.ui';
import SubscriptionCancelDialogUI from './subscription-cancel-dialogs/subscription-cancel-dialog.ui';

const SubscriptionUI = ({ data, state, onChange, onSearch, setOpenAdd, setOpenCancel }) => {
    return (
        <div id="subscription-page">
            <div className="container">
                <div className="row">
                    <div className="warning">
                        <div>
                            <i className="icon-ic_warning_24px" />
                            <span>Transaction expired: over 10 munites for transaction</span>
                        </div>
                    </div>
                    <CmsTable data={data} onChange={onChange} onSearch={onSearch}>
                        <div className="cms-table-content">
                            <table className="table aviron-table action-table call-data-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Aviron key</th>
                                        <th>Subscription type</th>
                                        <th>Machine name</th>
                                        <th>Machine id</th>
                                        <th>Activated</th>
                                        <th>Status</th>
                                        <th>Next/Last bill date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(t => {
                                        return t.show ? (
                                            <tr key={t.index}>
                                                <td>{t.index}</td>
                                                <td>{t.aviron_key}</td>
                                                <td>{t.subscription_type}</td>
                                                <td>
                                                    {t.machine_name ? (
                                                        <CmsTooltip title={t.machine_name} placement="top">
                                                            <strong className="text-bolder ">{t.machine_name}</strong>
                                                        </CmsTooltip>
                                                    ) : (
                                                        '---'
                                                    )}
                                                </td>
                                                <td>
                                                    <p>
                                                        {t.machine_id || (
                                                            <button
                                                                className="btn pointer"
                                                                onClick={() => {
                                                                    setOpenAdd(t);
                                                                }}
                                                                type="button"
                                                                name="button"
                                                            >
                                                                <span>ADD</span>
                                                            </button>
                                                        )}
                                                    </p>
                                                </td>
                                                <td>
                                                    {/* <strong className="text-uppercase text-success">{t.last_online}</strong> */}
                                                    <p>{t.activated || '---'}</p>
                                                </td>
                                                <td>{t.status}</td>
                                                <td>{t.bill_date || '---'}</td>
                                                <td className="position-relative">
                                                    <div className="cell-action-block">
                                                        <span>{t.os_version}</span>
                                                        <div className="btn-group-table-action ">
                                                            {t.status.toLowerCase() === CONSTANTS.STATUS_TYPE.ACTIVE ? (
                                                                <button
                                                                    className="btn pointer"
                                                                    onClick={() => {
                                                                        setOpenCancel(t);
                                                                    }}
                                                                    type="button"
                                                                    name="button"
                                                                >
                                                                    <span>Cancel</span>
                                                                </button>
                                                            ) : null}
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
                    <SubscriptionAddDialogUI {...{ state, setOpenAdd }} />
                    <SubscriptionCancelDialogUI {...{ state, setOpenCancel }} />
                </div>
            </div>
        </div>
    );
};

SubscriptionUI.propTypes = {
    data: PropTypes.instanceOf(Array),
    state: PropTypes.instanceOf(Object),
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    setOpenAdd: PropTypes.func,
    setOpenCancel: PropTypes.func
};
SubscriptionUI.defaultProps = {
    data: [],
    state: {},
    onSearch: () => {},
    onChange: () => {},
    setOpenAdd: () => {},
    setOpenCancel: () => {}
};
export default SubscriptionUI;
