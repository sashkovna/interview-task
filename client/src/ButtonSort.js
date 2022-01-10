import React from 'react';

const ButtonSort = ({children, ...props}) => {
    return (
            <button {...props} className="header_p">
                {children}
            </button>
    );
};

export default ButtonSort;