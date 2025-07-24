import React from 'react';

import { Wagmi } from './Wagmi';

const Wrapper = ({ children }) => {
    return (
        <>
            <Wagmi>
                {children}
            </Wagmi>
        </>
    );
};

export default Wrapper;