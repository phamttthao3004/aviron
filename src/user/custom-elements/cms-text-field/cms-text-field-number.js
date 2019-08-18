import React from 'react';
import PropTypes from 'prop-types';

export const NUMBER_TYPES = new (function() {
    this.INTEGER = 0;
    this.FLOAT = 1;
})();

class I3TextFieldNumber extends React.Component {
    constructor(props) {
        super(props);
        this.InitInfo();
    }

    componentWillReceiveProps(newProps) {
        const oldProps = this.props;
        if (newProps.i3Type !== oldProps.i3Type) {
            this.SetType(newProps);
        }
        if (newProps.i3Min !== oldProps.i3Min) {
            this.SetMin(newProps);
        }
        if (newProps.i3Max !== oldProps.i3Max) {
            this.SetMax(newProps);
        }
        if (newProps.i3DefaultValue !== oldProps.i3DefaultValue) {
            this.SetDefaultValue(newProps);
        }
        if (newProps.i3AllowEmpty !== oldProps.i3AllowEmpty) {
            this.SetAllowEmpty(newProps);
        }
    }

    handleKeyPress(event) {
        const result =
            (event.charCode >= 48 && event.charCode <= 57) ||
            event.charCode === 0 || // press backspace
            (event.charCode === 45 && this.min < 0) || // '-' character
            (event.ctrlKey && event.charCode === 99) || // ctrl+C
            (event.ctrlKey && event.charCode === 118) || // ctrl+V
            (this.numberType === NUMBER_TYPES.FLOAT && event.charCode === 46); // '.' character for float type
        if (!result) {
            event.preventDefault();
        }
    }

    handleChange(event) {
        const val = event.target.value;
        const { onChange } = this.props;
        onChange(val, { name: event.target.name });
    }

    handleBlur(event) {
        let val = event.target.value;
        const str = val.trim();
        const x = +val;
        if (this.allowEmpty && str.length === 0) {
            return;
        }
        if (str.length === 0 || Number.isNaN(x) || (this.numberType === NUMBER_TYPES.INTEGER && !Number.isInteger(x))) {
            if (this.defaultValue !== undefined) {
                val = this.defaultValue;
            } else {
                val = this.min;
            }
        } else {
            val = x;
            if (val < this.min) {
                if (this.defaultValue !== undefined) {
                    val = this.defaultValue;
                } else {
                    val = this.min;
                }
            } else if (val > this.max) {
                if (this.defaultValue !== undefined) {
                    val = this.defaultValue;
                } else {
                    val = this.max;
                }
            }
        }
        const { onChange } = this.props;
        const { onBlur } = this.props;
        onChange(val, { name: event.target.name });
        onBlur(val, { name: event.target.name });
    }

    // functions
    InitInfo() {
        this.SetType(this.props);
        this.SetMin(this.props);
        this.SetMax(this.props);
        this.SetDefaultValue(this.props);
        this.SetAllowEmpty(this.props);
    }

    SetType(props) {
        this.numberType = NUMBER_TYPES.INTEGER;
        if (props.i3Type !== undefined) {
            this.numberType = props.i3Type;
        }
    }

    SetMin(props) {
        this.min = props.i3Min === undefined ? 0 : +props.i3Min;
    }

    SetMax(props) {
        this.max = props.i3Max === undefined ? Number.MAX_VALUE : +props.i3Max;
    }

    SetDefaultValue(props) {
        this.defaultValue = props.i3DefaultValue === undefined ? undefined : props.i3DefaultValue;
    }

    SetAllowEmpty(props) {
        this.allowEmpty = props.i3AllowEmpty === undefined ? false : props.i3AllowEmpty;
    }

    render() {
        const { props } = this;
        return (
            <input
                className={props.className}
                disabled={props.disabled}
                id={props.id}
                label={props.label}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                type={props.type}
                value={props.value}
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
                onBlur={this.handleBlur.bind(this)}
            />
        );
    }
}
I3TextFieldNumber.propTypes = {
    i3Type: PropTypes.number,
    i3Min: PropTypes.number,
    i3Max: PropTypes.number,
    i3DefaultValue: PropTypes.number,
    i3AllowEmpty: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string
};
I3TextFieldNumber.defaultProps = {
    i3Type: 0,
    i3Min: 0,
    i3Max: 0,
    i3DefaultValue: undefined,
    i3AllowEmpty: false,
    onChange: () => {},
    onBlur: () => {},
    className: '',
    disabled: false,
    id: '',
    label: '',
    name: '',
    placeholder: '',
    required: false,
    type: 'text',
    value: undefined
};
export default I3TextFieldNumber;
