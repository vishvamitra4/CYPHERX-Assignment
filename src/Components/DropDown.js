import React, { useEffect, useState } from "react";
import "./CssFile/DropDown.css";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import Layout from "./Layout.js";

function Dropdown() {



    const [Dropped, isDropped] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(localStorage.getItem("selectedGroup") || "User");
    const [selectedOrdering, setSelectedOrdering] = useState(localStorage.getItem("selectedOrdering") || "Priority");



    useEffect(() => {
        localStorage.setItem("selectedGroup", selectedGroup);
        localStorage.setItem("selectedOrdering", selectedOrdering);
    }, [selectedGroup, selectedOrdering]);



    const toggleDropdown = () => {
        isDropped(!Dropped);
    };




    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };



    const handleOrderingChange = (event) => {
        setSelectedOrdering(event.target.value);
    };



    return (
        <div>
            {/* this is our header... */}
            <div className="header">
                <div className="dropdown">
                    <button className="dropdown-button" onClick={toggleDropdown}>
                        <RxHamburgerMenu />
                        <span className="display">Display</span>
                        <RiArrowDropDownLine />
                    </button>
                    {Dropped && (
                        <div className="dropdown-content">
                            <div className="select-group">
                                <label>Grouping</label>
                                <select value={selectedGroup} onChange={handleGroupChange}>
                                    <option value="User">User</option>
                                    <option value="Priority">Priority</option>
                                    <option value="Status">Status</option>
                                </select>
                            </div>
                            <div className="select-ordering">
                                <label>Ordering</label>
                                <select id="order" value={selectedOrdering} onChange={handleOrderingChange}>
                                    <option value="Priority">Priority</option>
                                    <option value="Title">Title</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>
                <div style={{"color" : "black"}}>Created By <a href = "https://vishvamitraportfolio.netlify.app/" target="_blank">@Vishvamitra</a></div>
            </div>

            
            {/* this is our main layout... */}
            <Layout
                selectedGroup={selectedGroup}
                selectedOrdering={selectedOrdering}
            />
        </div>
    );
}

export default Dropdown;
