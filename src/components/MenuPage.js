import React from 'react'
import { MenuCard } from './MenuCard';
import { MenuTabBar } from './MenuTabBar';
import { MenuList } from './MenuList';
import { MenuCartBar } from './MenuCartBar';
import fries from "../images/fries,burgers.jpg"
import { Card } from '@material-ui/core';

import "./menu.css";
var cardStyle ={
    backgroundImage:"url("+ fries+")"
}
export const MenuPage = () => {
    return (
        <div>
        <Card style={cardStyle} className="bimage"> 
        <MenuCartBar/>
        </Card>
        
              <MenuTabBar/>
              <MenuList/>     
              <MenuCard/>
        </div>
    )
}
