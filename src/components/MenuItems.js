import React from 'react'
import MenuItem from './MenuItem'


const MenuItems = ({ menuItems }) => {
    const renderMenuItems = menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.id} menuItem = {menuItem}></MenuItem>
    })
    return (
        <div className="menu-items">
            {renderMenuItems}
        </div>
    );
}

export default MenuItems