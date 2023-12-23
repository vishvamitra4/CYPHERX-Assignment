import React from "react";
import "./CssFile/Layout.css";
import Card from "./Card";
import CardsTop from "./CardsTop";


function Layout3({ data }) {

    const Element = Object.entries(data).map(item => {
        const name = item[0];
        const name_data = item[1];
        return (
            <div className="container-1">
                <CardsTop
                    groupedBy={"User"}
                    title={name}
                    data={name_data} />
                {name_data.map((item) => {
                    return (
                        <div style={{ "marginBottom": "10px" }} className="container-1-1">
                            <Card
                                groupedBy={"User"}
                                id={item.id}
                                title={item.title}
                                name={item.userDetail.name}
                                status={item.status}
                                available={item.userDetail.available}
                                tag={item.tag}
                                priority = {item.priority}/>
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

export default Layout3;