import React from 'react'
// import { CardGroup } from 'react-bootstrap'
import MenuItem from './MenuItem'

// Dummy prop of menu items
const menuItemsProp = [
    {
        "id": 1,
        "name": "Hawaiian",
        "description": "Macon - Pineapple",
        "price": 1200,
        "image": "hawaiian.jpg"
    },
    {
        "id": 2,
        "name": "Boewors",
        "description": "100% Beef Mince - Fresh Tomato - Fresh Onion",
        "price": 1205,
        "image": "boewors.jpg"
    },
    {
        "id": 3,
        "name": "BBQ Steak",
        "description": "Marinated BBQ Steak",
        "price": 1210,
        "image": "bbq-steak.jpg"
    },
    {
        "id": 4,
        "name": "Regina",
        "description": "Sandwich Beef - Mushroom",
        "price": 1200,
        "image": "regina.jpg"
    }
]

const MenuItems = ({menuItems = menuItemsProp}) => {
    console.log(menuItemsProp)
    const renderMenuItems = menuItemsProp.map((menuItem) => {
        return <MenuItem key={menuItem.id} menuItem = {menuItem}></MenuItem>
    })
    return (
        <div className="menu-items">
        {renderMenuItems}
        </div>
    );
}

export default MenuItems