import React from 'react';
import './index.css';

function Card(props){
    return(
    <div className='cards'>
        <div className='card'>
            <img src={props.imgsrc} alt ="imdfk" className="card_image"/>
            <div className="card_info">
                <span className="card_catagory">world class game </span>
                <h3 className="card_title">{props.gname} </h3>
                <a href = {props.link} target="_blank">
                <button> Learn More </button>
                </a>




            </div>
        </div>
    </div>
    )
}



export default Card;