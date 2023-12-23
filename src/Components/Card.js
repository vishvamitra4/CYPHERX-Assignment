import React from "react";
import "./CssFile/Card.css";
import Avatar from "./Avatar";
import { BsFillCircleFill } from 'react-icons/bs';
import { BiClinic, BiDotsHorizontalRounded } from 'react-icons/bi'; /// 0 - proority
import { TbAlertSquareFilled } from 'react-icons/tb'; /// urgent..
import { MdNetworkWifi1Bar, MdNetworkWifi2Bar, MdNetworkWifi } from 'react-icons/md'; /// low medium high
import { BiCircle, BiCircleThreeQuarter, BiErrorCircle } from 'react-icons/bi'; /// todo , inprocess , backlog
import { FcCancel } from "react-icons/fc"; /// cancel...
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5"; /// done...






function Card({ groupedBy, id, title, name, status, available, tag, priority }) {


    //// handling status icon in cards...
    let statusIconId = "NotDisplay";
    if (groupedBy === "User" || groupedBy === "Priority") {
        statusIconId = "Display";
    };
    let icon = <BiCircle />
    if (status == "In progress") {
        icon = <BiCircleThreeQuarter />
    }
    else if (status == "Backlog") {
        icon = <BiErrorCircle />
    }
    else if(status == "Done"){
        icon = <IoCheckmarkDoneCircleSharp />
    }
    else if(status == "Cancelled"){
        icon = <FcCancel />
    }


    //// handling avatar....
    let avatarIconId = "NotDisplay";
    if (groupedBy === "Priority" || groupedBy === "Status") {
        avatarIconId = "Display";
    }


    //// handling priority icon..
    let priorityIconID = "NotDisplay";
    if (groupedBy === "User" || groupedBy === "Status") {
        priorityIconID = "Display";
    }
    let prio_icon = <BiDotsHorizontalRounded />; /// 0 priority
    if (priority == 1) { prio_icon = <MdNetworkWifi1Bar /> } /// low priority
    else if (priority == 2) { prio_icon = <MdNetworkWifi2Bar /> } /// medium priority
    else if (priority == 3) { prio_icon = <MdNetworkWifi /> } /// high priority
    else if (priority == 4) { prio_icon = <TbAlertSquareFilled /> } /// urgent priority




    return (

        <div className="card">
            <div className="col1">
                <div className="row-1">
                    <p>{id}</p>
                </div>
                <div className="row-2">
                    <p><span id={statusIconId} className="icon">{icon}</span>{title}</p>
                </div>
                <div className="row-3">
                    <p><span id={priorityIconID} className="icon icon1">{prio_icon}</span>
                        <span className="icon1"><span className="icon"><BsFillCircleFill /></span>{(tag.length > 0 ? tag[0] : "")}</span>
                    </p>
                </div>
            </div>

            <div id={avatarIconId} className="col2">
                <Avatar
                    name={name}
                    status={available === true ? "online" : "offline"} />
            </div>


        </div>
    )
}

export default Card;