import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>You've never seen dungeon running like this!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/Char1.jpg"
                        text="Explore the hidden waterfall deep inside
                        the Amazon Jungle"
                        label="Battle"
                        path='/services'
                        />
                         <CardItem 
                        src="images/Char2.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Loot"
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/Char3.jpg"
                        text="Explore the hidden waterfall deep inside
                        the Amazon Jungle"
                        label="Trade"
                        path='/services'
                        />
                         <CardItem 
                        src="images/Char4.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Profit"
                        path='/services'
                        />
                         <CardItem 
                        src="images/Char5.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Repeat"
                        path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
