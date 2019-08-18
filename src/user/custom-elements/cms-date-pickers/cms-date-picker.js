import React from 'react';
import PropTypes from 'prop-types';

class CmsDatePicker extends React.Component {
    constructor(props) {
        super(props);
        const { name, onChange, placeholder, format } = this.props;
        this.name = name;
        this.onChange = onChange;
        this.placeholder = placeholder;
        if (this.placeholder === '') {
            this.placeholder = 'MM/DD/YYYY';
        }
        this.format = format;
        this.identifier = `cms-date-picker-${window.GetRandomInt(99999)}`;
    }

    componentDidMount() {
        this.Init();
    }

    componentWillReceiveProps(newProps) {
        const oldProps = this.props;
        if (newProps.value !== oldProps.value) {
            window.$(`.${this.identifier}`).datepicker('update', newProps.value);
        }
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    // events
    handleOnChange = event => {
        this.onChange(event);
    };

    handleCloseDatePicker = () => {
        window.$(`.${this.identifier}`).datepicker('hide');
    };

    // functions
    Init() {
        this.SetFormatDatePicker();
    }

    AddButtonClose() {
        let div = document.createElement('div');
        div = window.$(`<tr><th colspan="7" style="display: table-cell;" class="${this.identifier}btnClose">CLOSE</th></tr>`);
        div.click(() => {
            this.handleCloseDatePicker();
        });
        const element = document.getElementsByClassName(`${this.identifier}btnClose`);
        if (element.length === 0) {
            window.$('.datepicker-days .table-condensed > tfoot:last-child').append(div);
        }
    }

    SetFormatDatePicker() {
        const { value } = this.props;
        const identifierElement = window.$(`.${this.identifier}`);
        identifierElement.datepicker({
            format: this.format,
            disableTouchKeyboard: false,
            autoclose: true,
            showOnFocus: false
        });
        identifierElement.datepicker().on('changeDate', e => {
            this.handleOnChange(e);
        });
        identifierElement.datepicker('update', value);
        identifierElement.datepicker().on('show', () => {
            this.AddButtonClose();
        });
    }

    render() {
        return (
            <div className={`input-group date cms-date-picker ${this.identifier}`}>
                <input type="text" className="form-control" name={this.name} placeholder={this.placeholder} />
                <div className="input-group-addon">
                    <span className="icon-calendar-1" />
                </div>
            </div>
        );
    }
}
CmsDatePicker.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};
CmsDatePicker.defaultProps = {
    name: '',
    placeholder: '',
    format: 'mm/dd/yyyy',
    onChange: () => {},
    value: ''
};

export default CmsDatePicker;
