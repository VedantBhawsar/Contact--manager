import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
    const { id, name, email, mobno} = props.contact;
    const clickHandler = props.clickHander;
    console.log(clickHandler)

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <div>{mobno}</div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => clickHandler(id)}
            ></i>
        </div>
    );
};

export default ContactCard;