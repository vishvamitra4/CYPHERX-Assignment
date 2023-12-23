import React from "react";
import "./CssFile/Layout.css";
import Card from "./Card";
import CardsTop from "./CardsTop";


function Layout1({ data }) {

    const Element = Object.entries(data).map(item => {
        const prio = item[0];
        const prio_data = item[1];
        return (
            <div className="container-1">
                <CardsTop
                    groupedBy={"Priority"}
                    title={prio}
                    data={prio_data} />
                {prio_data.map((item) => {
                    return (
                        <div style={{ "marginBottom": "10px" }} className="container-1-1">
                            <Card
                                groupedBy={"Priority"}
                                id={item.id}
                                title={item.title}
                                name={item.userDetail.name}
                                status={item.status}
                                available={item.userDetail.available}
                                tag={item.tag}
                                priority={item.priority} />
                        </div>
                    )
                })}
            </div>
        )
    })
    return (
        <div className="container">
            {Element}
        </div>
    )
}

export default Layout1;