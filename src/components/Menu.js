import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import MenuItems from './MenuItems'


const Menu = () => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/pizzas')
    .then((r) => r.json())
    .then((pizzas) => {
      setMenuItems((menuItems) => pizzas)
    })
  }, [])

  return (
    <>
      <NavigationBar active='Menu'></NavigationBar>
      <h1 className='mt-4 text-center'>Our Menu</h1>
      <div className='instructions'>
          <p className="text-muted">
            All our pizzas are made with love and prepared with fresh ingredients sourced from local Kenyan businesses everyday.
          </p>
        </div>
      <MenuItems menuItems={menuItems}></MenuItems>
    </>
  )
}

export default Menu