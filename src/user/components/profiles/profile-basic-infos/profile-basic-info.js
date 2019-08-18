import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import rootAction from '../../../actions/action';
import CONSTANTS from '../../../scripts/apps/constants';
import ProfileBasicInfoUI from './profile-basic-info.ui';
import GLOBAL_FUNCTIONS from '../../../scripts/apps/global-functions';

const ProfileBasicInfo = () => {
    const dispatch = useDispatch();
    const profileSetState = _data => dispatch(rootAction.profile.setState(_data));
    const countries = CONSTANTS.COUNTRIES.map(item => {
        return { value: item.id, label: item.name };
    });
    const heightUnits = new (function() {
        return [
            {
                id: CONSTANTS.PROFILE_PAGE.HEIGHT_UNITS.IN,
                name: 'IN'
            },
            {
                id: CONSTANTS.PROFILE_PAGE.HEIGHT_UNITS.METERS,
                name: 'METERS'
            }
        ];
    })();
    const weightUnits = new (function() {
        return [
            {
                id: CONSTANTS.PROFILE_PAGE.WEIGHT_UNITS.LBS,
                name: 'LBS'
            },
            {
                id: CONSTANTS.PROFILE_PAGE.WEIGHT_UNITS.KGS,
                name: 'KGS'
            }
        ];
    })();
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        selected_country: undefined,
        email: '',
        birthday: undefined,
        gender: undefined,
        height_unit: undefined,
        weight_unit: undefined,
        height: 0,
        weight: 0
    });

    // functions
    const GetData = () => {
        const api = window.APIService.Init();
        const successFunc = result => {
            const data = result.responseJSON;
            // const _state = data;
            // _state.first_name = data.firstName == null ? undefined : data.firstName;
            // _state.last_name = data.lastName == null ? undefined : data.lastName;
            const country = data.country == null ? undefined : data.country;
            // _state.email = data.email;
            // _state.birthday = new Date(data.birthday);
            // _state.gender = data.gender == null ? undefined : data.gender;
            // _state.height_unit_selected = data.heightUnit == null ? undefined : data.heightUnit;
            // _state.weight_unit_selected = data.weightUnit == null ? undefined : data.weightUnit;
            const selected_country = countries.find(item => item.value === country);
            // _state.avatar = data.avatar === null ? CONSTANTS.PROFILE_PAGE.SRC_NO_AVATAR : data.avatar;
            // this.setState(_state);
            setState(
                GLOBAL_FUNCTIONS.SetObject(state, {
                    first_name: data.firstName === null ? undefined : data.firstName,
                    last_name: data.lastName == null ? undefined : data.lastName,
                    selected_country,
                    email: data.email,
                    birthday: new Date(data.birthday),
                    gender: data.gender === null ? undefined : data.gender,
                    height_unit: data.heightUnit === null ? undefined : data.heightUnit,
                    weight_unit: data.weightUnit == null ? undefined : data.weightUnit,
                    height: data.height,
                    weight: data.weight
                })
            );
        };
        const errorFunc = () => {
            // this.props.openMessageBox({
            //     open: true,
            //     type: CONSTANTS.MESSAGE_BOX_TYPE.ERROR,
            //     button_type: CONSTANTS.MESSAGE_BOX_BUTTON_TYPE.ONE_BUTTON,
            //     title: MESSAGE_TEXT.LoadDataUnsuccessfully,
            //     functions: {}
            // });
        };
        api.callRequest('me', 'get', undefined, successFunc, errorFunc);
    };
    const Init = () => {
        profileSetState({ current_tab: CONSTANTS.PROFILE_PAGE.CURRENT_TAB.PROFILE_BASICINFO });
        GetData();
    };

    // hooks
    useEffect(() => {
        Init();
        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const propsUI = {
        state,
        countries,
        weightUnits,
        heightUnits
    };
    return <ProfileBasicInfoUI {...propsUI} />;
};
export default ProfileBasicInfo;
