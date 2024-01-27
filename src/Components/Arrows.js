import React from 'react';
import '.Styles/arrow.css';

export const Left = props => {
    //ExperienCard'dan gelen props'ları aldık: 
    const { style, onClick } = props; 

    return(
        <div
        className='slick-arrow-left'
        style={{...style, display: 'block'}}
        onClick={onclick}
        >
            <i className='fas fa-arrow-left left-arrow'/>
        </div>
    )

}

export const Right = props => {

    //ExperienCard'dan gelen props'ları aldık: 
    const { style, onClick } = props; 

    return (
        <div
        className='slick-arrow-right'
        style={{...style, display: 'block'}}
        onClick={onClick}
        >
            <i className='fas fa-arrow-right right-arrow'/>
        </div>
    )

}