import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';

import { Context as StylingContext } from '../Context/StylingContext';

const ChangeColor = () => {
    //Context
    const { state: { ListOfFontColors, FontColor }, changeFontColor } = useContext(StylingContext)

    //Functions
    const updateFontColor = () => {
        const randomNum = Math.ceil(Math.random() * ListOfFontColors.length)

        changeFontColor(ListOfFontColors[randomNum])
    }

    return (
        <>
            <NavigationEvents onWillFocus={() => updateFontColor()} />
        </>
    )
}

export default ChangeColor;