import React from 'react';
import PropTypes from 'prop-types';

const entries = new (function() {
    return [5, 10, 25, 50, 100];
})();
const modeTable = new (function() {
    this.edit = 'edit';
    this.view = 'view';
})();

const GetTotalCondition = function(x) {
    return !x.not_in_searching;
};

class CmsTable extends React.Component {
    constructor(props) {
        super(props);
        const { mode } = this.props;
        this.state = new (function() {
            this.entry = 5;
            this.current_page = 1;
            this.total = 0;
            this.from = -1;
            this.to = 0;
            this.mode = mode;
            this.disabled_prev = true;
            this.disabled_next = true;
        })();
        this.keyUpSearchTimeout = undefined;
        this.is_update_inside = false;
    }

    componentDidMount() {
        this.Init();
    }

    componentWillReceiveProps(newProps) {
        const { entry, current_page } = this.state;
        const { data } = newProps;
        if (!this.is_update_inside) {
            this.HandleDataWhenChanges(data, entry, current_page);
        } else {
            this.is_update_inside = false;
        }
    }

    componentWillUnmount() {}

    // events
    handleChange(event) {
        const { name, value } = event.target;
        const { current_page } = this.state;
        this.setState({ [name]: value });
        if (name === 'entry') {
            const { data } = this.props;
            this.HandleDataWhenChanges(data, value, current_page);
        }
    }

    clickPrevious() {
        const { disabled_prev, current_page, entry } = this.state;
        if (!disabled_prev) {
            const currentPage = current_page > 0 ? current_page - 1 : current_page;
            const { data } = this.props;
            this.HandleDataWhenChanges(data, entry, currentPage);
            this.setState({ current_page: currentPage });
        }
    }

    clickNext() {
        const { disabled_next, current_page, entry } = this.state;
        if (!disabled_next) {
            const currentPage = current_page + 1;
            const { data } = this.props;
            this.HandleDataWhenChanges(data, entry, currentPage);
            this.setState({ current_page: currentPage });
        }
    }

    keyUpSearch(event) {
        clearTimeout(this.keyUpSearchTimeout);
        const { value } = event.target;
        const { onSearch } = this.props;
        const func = () => {
            onSearch(value);
        };
        this.keyUpSearchTimeout = setTimeout(func, 500);
    }

    // functions
    Init() {
        this.InitIndex();
        this.InitInfo();
    }

    InitIndex() {
        const { entry, current_page } = this.state;
        const { data } = this.props;
        this.HandleDataWhenChanges(data, entry, current_page);
    }

    InitInfo() {
        let realTotal = 0;
        let { from, to, disabled_next } = this.state;
        const { entry, mode } = this.state;
        const { data, total } = this.props;

        if (mode === modeTable.edit) {
            realTotal = data.length;
        } else {
            realTotal = total;
        }
        if (realTotal > 0) {
            from = 0;
            if (realTotal > entry) {
                to = entry;
                disabled_next = false;
            } else {
                to = realTotal;
            }
        }
        this.setState({
            total: realTotal,
            from,
            to,
            disabled_next
        });
    }

    HandleDataWhenChanges(pData = [], entryNumber, currentPage) {
        let data = pData;
        const { onChange } = this.props;
        const { length } = data.filter(GetTotalCondition);
        let from = 0;
        let to = 0;
        let disabled_prev = false;
        let disabled_next = false;
        let current_page = currentPage;
        const entry = +entryNumber;

        data = data.map(t => {
            const item = Object.assign({}, t);
            item.show = false;
            item.index = undefined;
            return item;
        });

        if (length > 0) {
            from = (current_page - 1) * entry;
            if (from >= length) {
                from = 0;
                current_page = 1;
            }

            to = from + entry;
            if (to >= length) {
                to = length;
                disabled_next = true;
            }
            if (from <= 0) {
                disabled_prev = true;
            }
            const realData = data.filter(GetTotalCondition);
            for (let i = from; i < to; i += 1) {
                const item = realData[i];
                item.index = i + 1;
                item.show = true;
            }
        } else {
            from = -1;
            to = 0;
            disabled_prev = true;
            disabled_next = true;
            current_page = 1;
        }
        this.setState({
            from,
            to,
            disabled_prev,
            disabled_next,
            current_page,
            total: length
        });
        onChange(data);
        this.is_update_inside = true;
    }

    render() {
        const { entry, from, to, total, disabled_prev, disabled_next } = this.state;
        const { className, children } = this.props;
        return (
            <div className={`cms-table-container ${className}`}>
                <div className="container cms-table-header">
                    <div className="col-sm-6 col-xs-12 header-left">
                        <label htmlFor="cms-table-entry-id" className="row-per-page-text">
                            Show
                            <select id="cms-table-entry-id" className="row-per-page-select" onChange={this.handleChange.bind(this)} value={entry} name="entry">
                                {entries.map(t => {
                                    return <option value={t}>{t}</option>;
                                })}
                            </select>{' '}
                            entries
                        </label>
                    </div>
                    <div className="col-sm-6 col-xs-12 header-right">
                        <label htmlFor="cms-table-search-input" className="search-text">
                            Search:
                            <input id="cms-table-search-input" onKeyUp={this.keyUpSearch.bind(this)} type="search" className="search-input" placeholder="" />
                        </label>
                    </div>
                </div>
                {children}
                <div className="cms-table-footer">
                    <div className="col-sm-6 col-xs-12 footer-left">
                        <span className="text">
                            Showing {from + 1} to {to} of {total} entries
                        </span>
                    </div>
                    <div className="col-sm-6 col-xs-12 footer-right">
                        <button type="button" onClick={this.clickPrevious.bind(this)} className={`paginate_button${disabled_prev ? ' disabled' : ''}`}>
                            Previous
                        </button>
                        {/* <span><a className="paginate_page">...</a></span>
                        <span><a className="paginate_page">3</a></span>
                        <span><a className="paginate_page current">4</a></span>
                        <span><a className="paginate_page">5</a></span>
                        <span><a className="paginate_page">...</a></span> */}
                        <button type="button" onClick={this.clickNext.bind(this)} className={`paginate_button${disabled_next ? ' disabled' : ''}`}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

CmsTable.propTypes = {
    mode: PropTypes.string,
    onSearch: PropTypes.func,
    data: PropTypes.instanceOf(Array),
    total: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.element
};
CmsTable.defaultProps = {
    mode: modeTable.edit,
    onSearch: () => {},
    data: [],
    total: 0,
    onChange: () => {},
    className: '',
    children: <div />
};

export default CmsTable;
