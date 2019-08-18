import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import ChallengeParameter, { TYPES } from '../../shared/challenge-parameter';
import CmsDatePicker from '../../../custom-elements/cms-date-pickers/cms-date-picker';
import CONSTANTS from '../../../scripts/apps/constants';

const EquipmentAnalysisUI = ({ data, onChange, state, onSearchRange }) => {
    const { from_date = '', to_date = '' } = state;
    const chartSettings = {
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: '',
                    fill: true,
                    data: data.data,
                    backgroundColor: ['#CD1E35'],
                    pointBackgroundColor: '#CD1E35',
                    pointHoverRadius: 0,
                    pointHitRadius: 10,
                    pointRadius: 0
                }
            ]
        },
        options: {
            elements: {
                line: {
                    tension: 0
                }
            },
            responsive: true
        }
    };
    return (
        <div className="equipment-analysis-col-right">
            <div className="date-range form-inline">
                <div className="form-group">
                    <span className="label-range">Date range</span>
                </div>
                <div className="form-group">
                    <div className="form-control-wrapper ">
                        <CmsDatePicker value={from_date} name="from_date" placeholder="From date" onChange={onChange} formart={CONSTANTS.FORMAT_DATE} />
                    </div>
                </div>
                <div className="form-group center">
                    <span className="label-range">-</span>
                </div>

                <div className="form-group">
                    <div className="form-control-wrapper">
                        <CmsDatePicker value={to_date} name="to_date" placeholder="To date" onChange={onChange} formart={CONSTANTS.FORMAT_DATE} />
                    </div>
                </div>

                <div className="form-group">
                    <button type="button" className="btn btn-primary btn-square" onClick={onSearchRange}>
                        {' '}
                        <i className=" icon-search" />{' '}
                    </button>
                </div>
            </div>
            <div className="result-exercise">
                <ChallengeParameter value={642} title="Workouts" />
                <ChallengeParameter value={37} title="Output (KJ)" />
                <ChallengeParameter value={1500} title="Calories" />
                <ChallengeParameter value={85500} title="Time (Hour:Min)" type={TYPES.TIME} />
                <ChallengeParameter value={1467} title="Meters" />
                <ChallengeParameter value={98} title="Strokes" />
            </div>
            <ul>
                <li className="pointer active">
                    <span>Workouts</span>
                </li>
                <li className="pointer">
                    <span>Time</span>
                </li>
                <li className="pointer">
                    <span>Output</span>
                </li>
                <li className="pointer">
                    <span>Meters</span>
                </li>
                <li className="pointer">
                    <span>Calories</span>
                </li>
                <li className="pointer">
                    <span>Strokes</span>
                </li>
            </ul>
            <div className="container-chart">
                <Line data={chartSettings.data} options={chartSettings.options} />
            </div>
        </div>
    );
};
EquipmentAnalysisUI.propTypes = {
    data: PropTypes.instanceOf(Object),
    onChange: PropTypes.func,
    state: PropTypes.instanceOf(Object),
    onSearchRange: PropTypes.func
};
EquipmentAnalysisUI.defaultProps = {
    data: [],
    onChange: () => {},
    state: {},
    onSearchRange: () => {}
};
export default EquipmentAnalysisUI;
