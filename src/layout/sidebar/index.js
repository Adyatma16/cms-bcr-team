import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <Sidebar backgroundColor='white' className='sidebar-nav'>
            <div className='cms-logo mx-4 my-2'>
                CMS
            </div>
            <Menu>
                <SubMenu label="Dashboard">
                    <MenuItem onClick={() => navigate('/home')}> Dashboard </MenuItem>
                </SubMenu>
                <SubMenu label="Cars">
                    <MenuItem onClick={() => navigate('/car-list')}> List Cars </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}

export default SideBar