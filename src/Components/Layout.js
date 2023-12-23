import React, { useEffect, useState } from "react";
import Layout1 from "./Layout1";
import "./CssFile/Layout.css";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";

function Layout({ selectedGroup, selectedOrdering }) {


    const [tickets, setTickets] = useState(null); /// here we get tickets data...
    const [users, setUsers] = useState(null); /// here we get users Data...
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function groupDataByCategory(data, category) {
        let updatedData = {};
        if (category === "Priority") {
            data.forEach((item) => {
                if (updatedData[item.priority]) {
                    updatedData[item.priority].push(item);
                } else {
                    updatedData[item.priority] = [item];
                }
            });
        } else if (category === "Status") {
            data.forEach((item) => {
                if (updatedData[item.status]) {
                    updatedData[item.status].push(item);
                } else {
                    updatedData[item.status] = [item];
                }
            });

        } else if (category === "User") {
            data.forEach((item) => {
                if (updatedData[item.userDetail.name]) {
                    updatedData[item.userDetail.name].push(item);
                } else {
                    updatedData[item.userDetail.name] = [item];
                }
            });
        }


        ///// sorting the updated data WRT selectedordering..
        if (selectedOrdering === "Priority") {
            for (const item in updatedData) {
                updatedData[item].sort((_1, _2) => _1.priority - _2.priority);
            }
        }else{
            for (const item in updatedData) {
                updatedData[item].sort((_1, _2) => _1.title.localeCompare(_2.title));
            }
        }

        return updatedData;
    }





    useEffect(() => {
        async function fetch_Data() {
            try {
                const res = await fetch(
                    "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
                );
                if (!res.ok) {
                    throw new Error("Network Not Responded!");
                }
                const jsonData = await res.json();
                setTickets(jsonData.tickets);
                setUsers(jsonData.users);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetch_Data();
    }, [])

    if (loading) {
        return <div>Loading....</div>
    }
    if (error) {
        return <div>{error.message}</div>
    };

    //// this is the function to merge the users detail and its corresponding tickets detail..
    const mergedData = {
        data: tickets.map((ticket) => ({
            ...ticket,
            userDetail: users.find((user) => user.id === ticket.userId),
        }))
    };
    const groupedData = groupDataByCategory(mergedData.data, selectedGroup);

    

    return (
        <div>
            {groupedData && (
                <div className="layout">
                    {selectedGroup === "Priority" && <Layout1 data = {groupedData}/>}
                    {selectedGroup === "Status" && <Layout2 data = {groupedData}/>}
                    {selectedGroup === "User" && <Layout3 data = {groupedData}/>}
                </div>
            )}
        </div>
    )

}


export default Layout;