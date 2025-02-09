import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-full lg:max-w-screen-xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;