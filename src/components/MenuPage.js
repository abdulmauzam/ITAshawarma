import React from 'react';

import { MenuTabBar } from './MenuTabBar';
import { MenuList } from './MenuList';
import { MenuCartBar } from './MenuCartBar';
import fries from "../images/fries,burgers.jpg"
import { Card } from '@material-ui/core';
import {Modals} from "./Modal"
import "./menu.css";

var cardStyle ={
    backgroundImage:"url("+ fries+")"
}
export const MenuPage = () => {
    
    return (
        <>
        <Card style={cardStyle} className="bimage"> 
        <MenuCartBar/>
        </Card>
        
              <MenuTabBar/>
                 
             <Modals/>
        </>
    )
}
