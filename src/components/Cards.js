import React from 'react';
import CardItem from './CardItem';
import './Cards.css' ;
function Cards() {
    return (
      <div className='cards'>
           <h1>Destinations Of Our Goal</h1>
           <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem src='images/c_programing.jpg' text='C_Programing'path='/services'/>
              <CardItem src='images/c++_programming.jpg'text='C++_Programming' path='/services'/>
              <CardItem src='images/Python_Training.jpg'text='Python_Training'path='/services'/>
              </ul>
        </div>
           </div>
           </div>
  );
}

export default Cards;