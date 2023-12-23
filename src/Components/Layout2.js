import React from "react";
import "./CssFile/Layout.css";
import Card from "./Card";
import CardsTop from "./CardsTop";


function Layout2({ data }) {

    const Element = Object.entries(data).map(item => {
        const status = item[0];
        const status_data = item[1];
        return (
            <div style={{ "margin": "0 8px" }} className="container-1">
                <CardsTop
                    groupedBy={"Status"}
                    title={status}
                    data={status_data} />
                {status_data.map((item) => {
                    return (
                        <div style={{ "marginBottom": "10px" }} className="container-1-1">
                            <Card
                                groupedBy={"Status"}
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
        <div style={{ "justifyContent": "start" }} className="container">
            {Element}
            <div style={{ "margin": "0 8px" }} className="container-1">
                <CardsTop
                    groupedBy={"Status"}
                    title={"Done"}
                    data={[]} />
            </div>
            <div style={{ "margin": "0 8px" }} className="container-1">
                <CardsTop
                    groupedBy={"Status"}
                    title={"Cancelled"}
                    data={[]} />
            </div>
            
        </div>
    )
}

export default Layout2;