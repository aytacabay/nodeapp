import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home/Home'

import NodeList from './NoteList/NoteList'



const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Not Al"
            drawerPosition='left'
            drawerStyle={{ backgroundColor: '#FFA384', width: '50%' }}
            drawerContentOptions={{
                activeTintColor: 'black',
                labelStyle: {
                    fontSize: 16,
                    color: '#EBE8E7'
                }
            }}
            drawerType='slide'
        >
            <Drawer.Screen name="Not Al" component={Home} />
            <Drawer.Screen name="Notlari Listele" component={NodeList} />
        </Drawer.Navigator>
    );
}