import React from 'react';

const Segment = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default Segment