import React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
const Header = () => {
    return (
        <header className='header-nav'>
            <Button className='btn-collapse' size='sm' outline>
                <i className='fa fa-bars'></i>
            </Button>
            <UncontrolledDropdown className='d-flex align-items-center'>
                <DropdownToggle nav>
                    Jhon Doe
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => {
                        localStorage.removeItem("ACCESS_TOKEN")
                        window.location.replace('/')
                    }}>Logout</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </header>
    )
}

export default Header