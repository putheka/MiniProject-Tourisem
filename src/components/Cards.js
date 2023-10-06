import React from 'react';
import '../style/Cards.css';
import CardItem from '../components/CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Best Places to Visit in Asia!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://imgs.search.brave.com/Lss0Fs7SBvOsRV4nXcPv_TejIDPCZaJ3P5ycuk0E9G8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzc5Ny8xNDYv/NDIxL2xhbmRzY2Fw/ZS1ib3JhLWJvcmEt/d2FsbHBhcGVyLXBy/ZXZpZXcuanBn'
              text='Maldives'
              label='Travel With JongDer'
              path='/Maldiv'
            />
            <CardItem
              src='https://imgs.search.brave.com/ZCBXBDfwfMtLiu1wWW2kevj3kqUtAndx7kKa4yw7uEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS84OC81/Mi9qNGhVbEouanBn'
              text='Tokyo'
              label='Travel With JongDer'
              path='/ToyKo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://imgs.search.brave.com/fcGHVqeaO8C86rEbbTw4Uo4SY5F4YzTTkRXh5Y_VjAs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzk3NC83NTkv/ODIwL3NlYS1ncmVl/bnMtaXNsYW5kcy10/cm9waWNzLXdhbGxw/YXBlci1wcmV2aWV3/LmpwZw'
              text='Phuket'
              label='Travel With JongDer'
              path='/services'
            />
            <CardItem
              src='https://imgs.search.brave.com/qLDUqVWSSoZy0Aabyekv1qkEM8An8D6kangYaVhStFY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsYW5kZGVz/dGluYXRpb25zLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMS9CZWF1dGlm/dWwtcGxhY2VzLWlu/LUNhbWJvZGlhLmpw/Zw'
              text='Siem Reap '
              label='Travel With JongDer'
              path='/products'
            />
            <CardItem
              src='https://imgs.search.brave.com/9yXHjbk0oWGFMxGtNgJtcYX_5LjPCZdpwXYMxD9YKJk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQwMzcx/MjcuanBn'
              text='Guilin and Lijiang River National Park'
              label='Travel With JongDer'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
