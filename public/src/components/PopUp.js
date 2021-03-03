import React, {useState} from 'react';
import '../assets/PopUp.css';
import close from '../assets/images/icon_close.svg'
import icon_time from '../assets/images/icon_time.svg';
import icon_plate from '../assets/images/icon_plate.svg';
import icon_star from '../assets/images/icon_star.svg';


export const PopUp = (props) => {
    return(props.data.triggered) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-title-div'>
                    <h3 className='popup-title'>{props.data.title}</h3>
                   <span onClick={()=>props.setTriger({})}> <img className='close' src={close} alt="" /></span>
                </div>
                <div className='popup-container'>
                <div className='popup-left'>
                    <div className='popup-img'></div>
                    <div className='popup-cat'>
                        <h5 className='cat-title'>Best Served For</h5>
                        <div className='green-cat'><p className='cat-p'>{props.data.category}</p></div>
                    </div>
                    <div className='popup-desc'>
                        <p>{props.data.description}</p>
                    </div>
                    <div className='popup-icons'>
                    <span><img src={icon_time} alt="" /></span><span className="time">{props.data.prep_time}</span>
                            <span><img src={icon_plate} alt="" /></span><span className="plate">{props.data.num_people}</span>
                            <span><img src={icon_star} alt="" /></span><span className="star">{props.data.starCount}</span>
                    </div>
                </div>
                <div className='popup-right'>
                    <h5 className='cat-title'>Recipe Details</h5>
                    <p className='full-recipe'> {props.data.recipe}</p>
                </div>
                </div>
                {props.childredn}
            </div>
        </div>
    ) : "";
}

export default PopUp;