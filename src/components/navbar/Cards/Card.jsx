import React from 'react'
import "./Card.css"

function Card(props) {
    return (


        <div className="card" style={{ width: "10rem" }}>
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h6 className="card-title">{props.heading}</h6>
                <p className="card-text">{props.details}</p>
                <a href="#" className="btn btn-primary btni">Learn More</a>
            </div>
        </div>

    )
}

export default Card