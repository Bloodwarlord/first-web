import React from 'react';
import './index.css';

function Card(props){
    return(
    <div className='cards'>
        <div className='card'>
            <img src={props.imgsrc} alt ="imdfk" className='card_img'/>
            <div className='card_info'>
                <span className='card_catagory'>world class game </span>
                <h3 className='card_title'>{props.gname} </h3>
                <a href = {props.link} target='_blank'>
                <button> Play Now </button>
                </a>




            </div>
        </div>
    </div>
    )
}



export default Card;