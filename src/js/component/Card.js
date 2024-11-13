import React from "react";

const Card = ({ title, description, imgURL }) => {
    return (

        <div className="card my-2" style={{ width: "20rem", overflow: "hidden", height: "380px" }}>
            <img src={imgURL} className="card-img-top" alt="..." />

            <div className="card-body p-2">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                
        </div>
        <div className="card-footer">
                    <a href="#" className="btn btn-primary">Pincha Aqui</a>
            </div>
        </div >


    )
}
export default Card; 