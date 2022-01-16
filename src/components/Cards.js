import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout these EPIC Destination</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className='cards_items'>
                        <CardItem
                            src='images/img-2.jpg'
                            alt='Travel Image'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            alt='Travel Image'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem
                            src='images/img-3.jpg'
                            alt='Travel Image'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-6.jpg'
                            alt='Travel Image'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            alt='Travel Image'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
