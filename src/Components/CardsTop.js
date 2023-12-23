import React from "react";
import "./CssFile/cardHeader.css";
import { AiOutlinePlus } from 'react-icons/ai';
import { BiClinic, BiDotsHorizontalRounded } from 'react-icons/bi'; /// 0 - priority
import { TbAlertSquareFilled } from 'react-icons/tb'; /// urgent..
import { MdNetworkWifi1Bar, MdNetworkWifi2Bar, MdNetworkWifi } from 'react-icons/md'; /// low medium high
import { BiCircle, BiCircleThreeQuarter, BiErrorCircle } from 'react-icons/bi'; /// todo , inprocess , backlog
import Avatar from "./Avatar";
import { FcCancel } from "react-icons/fc"; /// cancel...
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5"; /// done...



function CardsTop({ groupedBy, title, data }) {


    if (groupedBy === "Priority") {

        let title_name = "";
        let icon = <BiDotsHorizontalRounded />;
        if (title == 0) { title_name = "No Priority"; }
        else if (title == 4) { title_name = "Urgent"; icon = <TbAlertSquareFilled /> }
        else if (title == 3) { title_name = "High"; icon = <MdNetworkWifi /> }
        else if (title == 2) { title_name = "Medium"; icon = <MdNetworkWifi2Bar /> }
        else if (title == 1) { title_name = "Low"; icon = <MdNetworkWifi1Bar /> }


        return (
            <div className="c-1">
                <div className="c-1-1">
                    {icon}
                    <p style={{ "margin": "0 5% 0 5%"  , "color" : "#5d5f64;"}}>{title_name}</p>
                    <p>{data.length}</p>
                </div>

                <div className="c-1-2">
                    <AiOutlinePlus />
                    <BiDotsHorizontalRounded />
                </div>
            </div>
        )
    };

    if (groupedBy === "User") {
        console.log(data);

        return (
            <div className="c-1">
                <div className="c-1-1">
                    <Avatar
                        name={title}
                        status={data[0].userDetail.available === true ? "online" : "offline"} />
                    <p style={{ "margin": "0 5% 0 5%"  , "color" : "#5d5f64;"}}>{title}</p>
                    <p>{data.length}</p>
                </div>

                <div className="c-1-2">
                    <AiOutlinePlus />
                    <BiDotsHorizontalRounded />
                </div>
            </div>
        )
    };




    let icon = <BiCircle />
    if (title == "In progress") {
        icon = <BiCircleThreeQuarter />
    }
    else if (title == "Backlog") {
        icon = <BiErrorCircle />
    }
    else if(title == "Done"){
        icon = <IoCheckmarkDoneCircleSharp />
    }
    else if(title == "Cancelled"){
        icon = <FcCancel />
    }
    console.log(data);
    return (
        <div className="c-1">
            <div className="c-1-1">
                {icon}
                <p style={{ "margin": "0 5% 0 5%"  , "color" : "#5d5f64;"}} >{title}</p>
                <p>{data.length}</p>
            </div>

            <div className="c-1-2">
                <AiOutlinePlus />
                <BiDotsHorizontalRounded />
            </div>
        </div>
    )
};

export default CardsTop;