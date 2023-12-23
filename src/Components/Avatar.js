import React from 'react';
import "./CssFile/Card.css"
const Avatar = ({ name, status }) => {

    const Starting = name.substring(0, 2).toUpperCase();

    function CircleColor(Starting) {

        const hash = Starting.split('').reduce((A, C) => C.charCodeAt(0) + A, 0);
        const colors = ['#2a9339' , '#c16f28' , '#858601' , '#5783eb'];
        console.log(hash);
        return colors[hash % (4)];
    }

    const Avatar_Color = CircleColor(Starting);


    return (
        <div className="avatar">
            <div style={{ backgroundColor: Avatar_Color }} className="avatar-circle">
                <span className="avatar-initials">{Starting}</span>
            </div>
            <div className={`status-badge ${status}`}></div>
        </div>
    );
};

export default Avatar;