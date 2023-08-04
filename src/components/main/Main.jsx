import React from 'react'
import CarteleraGrid from '../carteleraGrid/CarteleraGrid';
import './Main.scss';

function Main() {
  return (
    <>
        <div className='main'>
          <h1>En Cartelera</h1>
          <CarteleraGrid/>
        </div>
    </>
  )
}

export default Main;