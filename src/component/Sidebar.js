import React from 'react';

const SideBar = ({ open, close }) => {
    return (
        <aside id="aside-nav" className={open ? `d-flex` : "d-none"}>
            <div className="side-nav-bar">
                <div className="title-bar d-flex justify-content-between">
                    <strong className="title-icon">BCR</strong>
                    <span onClick={close} id="close-aside" className=" icon-times"><i className="fa fa-times"></i></span>
                </div>
                <ul className="side-nav-bar-list ">
                    <li>Our Services</li>
                    <li>Why Us</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </aside>
    )
}
export default SideBar