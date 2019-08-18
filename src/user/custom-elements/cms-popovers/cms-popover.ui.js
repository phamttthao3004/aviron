import React from 'react';
import ReactDOM from 'react-dom';

const isReact16 = ReactDOM.createPortal !== undefined;

const GetCreatePortal = isReact16 ? ReactDOM.createPortal : ReactDOM.unstable_renderSubtreeIntoContainer;

const CmsPopoverUI = props => {
    const { open, children, className, identifierContainer, identifier } = props;
    if (!open) {
        return null;
    }

    const main = (
        <div id={identifierContainer} className={`cms-popover-container ${className}`}>
            <div className="cms-popover-mask" />
            <div id={identifier} className="cms-popover-content">
                {children}
            </div>
        </div>
    );
    return GetCreatePortal(main, document.body);
};

export default CmsPopoverUI;
