import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    //const {service}=props
    const{id,name,price,description,img}=service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <h5>Price: {price}</h5>
            <p className='px-3'>{description}</p>
            <Link to={`booking/${id}`}>

            <button className='btn btn-primary'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;