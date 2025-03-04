import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-full lg:max-w-screen-xl md:max-w-screen-xl mx-auto px-4 lg:px-6'>
            {children}
        </div>
    );
};

export default Container;