import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation'

import { Context as StylingContext } from '../Context/StylingContext'

const ChangeColor = () => {

    //State------------------------------------------------------

    //Context----------------------------------------------------
    const { state: { ListOfFontColors }, changeFontColor } = useContext(StylingContext)

    //Functions--------------------------------------------------

    //Random Color Generator
    const RandomColorGenerator = () => {
        let ranNum = Math.floor(Math.random() * ListOfFontColors.length)

        changeFontColor(ListOfFontColors[ranNum])
    }
    //Show-------------------------------------------------------

    return (
        <NavigationEvents onWillFocus={() => RandomColorGenerator()} />
    )
}

const styles = StyleSheet.create({

})

export default ChangeColor;