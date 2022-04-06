import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards2() {
    return (
        <div className='cards'>
            <h1>Công thức tại đây</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem
                    src='/images/img-5.webp'
                    text='Long Island Iced Tea'
                    lable='Cocktail'
                    path='/phache'
                    />
                     <CardItem
                    src='/images/img-6.jpg'
                    text='Cosmopolitan'
                    lable='Cocktail'
                    path='/phache'
                    />
                   
                
                </ul>
                <ul className='cards__item'>
                    <CardItem
                    src='/images/img-7.jpg'
                    text='Margarita'
                    lable='Cocktail'
                    path='/phache'
                    />
                     <CardItem
                    src='/images/img-8.jpg'
                    text='Jagerbomb'
                    lable='Cocktail'
                    path='/phache'
                    />
                    <CardItem
                    src='/images/img-10.png'
                    text='Porto Valdouro Ruby Port'
                    lable='Rượu'
                    path='/phache'
                    />


                
                </ul>
                <ul className='cards__item'>
                    <CardItem
                    src='/images/img-9.jpg'
                    text='Gin & tonic'
                    lable='Cocktail'
                    path='/phache'
                    />
                    <CardItem
                    src='/images/img-12.jpg'
                    text='Rum Bacardi'
                    lable='Rượu'
                    path='/phache'
                    />
                </ul>
            </div>
        </div>

            
        </div>
    )
}

export default Cards2
