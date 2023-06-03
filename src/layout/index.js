import React from 'react';
import { AppPrivateRoute } from '../config';
import Header from './header';
import SideBar from './sidebar';

const Layout = () => {
    return (
        <div className='template-areas'>
            <SideBar />
            <div className='w-100'>
                <Header />
                <div className='bg-cms p-4'>
                    <AppPrivateRoute />
                </div>
            </div>
        </div>
    )
}

export default Layout