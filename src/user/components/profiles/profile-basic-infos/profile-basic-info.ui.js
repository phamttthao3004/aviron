import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import CmsDatePicker from '../../../custom-elements/cms-date-pickers/cms-date-picker';
import I3TextFieldNumber, { NUMBER_TYPES } from '../../../custom-elements/cms-text-field/cms-text-field-number';
import CONSTANTS from '../../../scripts/apps/constants';

const ProfileBasicInfoUI = ({ state, countries, weightUnits, heightUnits }) => {
    const { first_name, last_name, selected_country, email, birthday, gender, height_unit, weight_unit, height, weight } = state;
    const intervalMax = CONSTANTS.PROFILE_PAGE.TRIGGER_INTERVAL.MAX;
    const intervalMin = CONSTANTS.PROFILE_PAGE.TRIGGER_INTERVAL.MIN;

    return (
        <div id="profile-basic-info-page">
            <section className="margin-top-40">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <span className="col-sm-3 col-xs-12 control-label">First name</span>
                                    <div className="col-sm-9 col-xs-12">
                                        <input type="text" className="form-control input-md" placeholder="First name" value={first_name} name="first_name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-sm-3 control-label">Last name</span>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control input-md" placeholder="Last name" value={last_name} name="last_name" />
                                    </div>
                                </div>
                                <div className="form-group container-select-country">
                                    <span className="col-sm-3 control-label">Country</span>
                                    <div className="col-sm-9">
                                        <Select
                                            className="game-select"
                                            name="selected_countries"
                                            isClearable
                                            value={selected_country}
                                            options={countries}
                                            formatGroupLabel={{ lineHeight: '1' }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-sm-3 control-label">Email</span>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control input-md" defaultValue={email} placeholder="Email" name="email" readOnly />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-sm-3 control-label">Date of birth</span>
                                    <div className="col-sm-9">
                                        <CmsDatePicker name="birthday" value={birthday} formart={CONSTANTS.FORMAT_DATE} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-sm-3 control-label">Gender</span>
                                    <div className="col-sm-9">
                                        <div className="radio radio-primary radio-inline">
                                            <span htmlFor="radio1">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="radio1"
                                                    checked={CONSTANTS.PROFILE_PAGE.GENDER.MALE === gender}
                                                    value={CONSTANTS.PROFILE_PAGE.GENDER.MALE}
                                                />
                                                Female
                                            </span>
                                        </div>
                                        <div className="radio radio-primary radio-inline">
                                            <span htmlFor="radio2">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="radio2"
                                                    checked={CONSTANTS.PROFILE_PAGE.GENDER.FEMALE === gender}
                                                    value={CONSTANTS.PROFILE_PAGE.GENDER.FEMALE}
                                                />
                                                Male
                                            </span>
                                        </div>
                                        <div className="radio radio-primary radio-inline">
                                            <span htmlFor="radio3">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="radio3"
                                                    checked={CONSTANTS.PROFILE_PAGE.GENDER.OTHER === gender}
                                                    value={CONSTANTS.PROFILE_PAGE.GENDER.OTHER}
                                                />
                                                Other
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-sm-3 control-label">Height</span>
                                    <div className="col-sm-9">
                                        <div className="number-picker-label">
                                            <I3TextFieldNumber
                                                className="form-control light"
                                                type="text"
                                                i3Type={NUMBER_TYPES.FLOAT}
                                                name="height"
                                                value={height}
                                                i3Min={intervalMin}
                                                i3Max={intervalMax}
                                            />
                                            <select className="form-control light" value={height_unit}>
                                                {heightUnits.map(item => {
                                                    return (
                                                        <option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-sm-3 control-label">Weight</span>
                                    <div className="col-sm-9">
                                        <div className="number-picker-label">
                                            <I3TextFieldNumber
                                                className="form-control light"
                                                type="text"
                                                value={weight}
                                                i3Type={NUMBER_TYPES.FLOAT}
                                                i3Min={intervalMin}
                                                i3Max={intervalMax}
                                                name="weight"
                                            />
                                            <select className="form-control light" value={weight_unit}>
                                                {weightUnits.map(item => {
                                                    return (
                                                        <option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group margin-top-40  margin-bottom-50">
                                    <div className="col-sm-12 text-right">
                                        <button type="button" className="btn btn-primary btn-md" onClick={() => {}}>
                                            <i className="icon-save" />
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group margin-top-40  margin-bottom-50">
                                    <div>
                                        <div className=" col-sm-12  text-right">
                                            <div className="col-sm-3" />
                                            <div className="col-sm-9 container-advanced">
                                                <strong data-toggle="modal" data-target="#change-password" data-backdrop="static" data-keyboard="false">
                                                    <p role="presentation" className="text-primary cursor-pointer" onClick={() => {}}>
                                                        <i className="icon-key" />
                                                        Change password
                                                    </p>
                                                </strong>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 container-advanced text-right">
                                            <div className="col-sm-3" />
                                            <div className="col-sm-9 container-advanced">
                                                <strong data-toggle="modal" data-target="#change-password" data-backdrop="static" data-keyboard="false">
                                                    <p role="presentation" className="text-primary cursor-pointer" onClick={() => {}}>
                                                        <i className="icon-mail" />
                                                        Change email
                                                    </p>
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

ProfileBasicInfoUI.propTypes = {
    state: PropTypes.instanceOf(Object),
    countries: PropTypes.instanceOf(Array),
    heightUnits: PropTypes.instanceOf(Array),
    weightUnits: PropTypes.instanceOf(Array)
};
ProfileBasicInfoUI.defaultProps = {
    state: {},
    countries: [],
    heightUnits: [],
    weightUnits: []
};

export default ProfileBasicInfoUI;
