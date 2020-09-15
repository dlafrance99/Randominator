import React, { useContext, useEffect } from 'react';
import { NavigationEvents } from 'react-navigation';

import { Context as StylingContext } from '../Context/StylingContext';

import Countdown from '../Components/Countdown';

const ChangeColor = () => {
    //Context
    const { state: { ChangeColors, ListOfFontColors, FontColor }, changeFontColor } = useContext(StylingContext)

    //Functions
    const updateFontColor = () => {
        const randomNum = Math.ceil(Math.random() * ListOfFontColors.length)

        let newColor = ListOfFontColors[randomNum]

        if (newColor) {
            changeFontColor(newColor)
        } else {
            changeFontColor(ListOfFontColors[0])
        }
    }

    return (
        <>
            <NavigationEvents onWillFocus={() => updateFontColor()} />

            <Countdown
                isActive={ChangeColors}
                target={() => updateFontColor()}
            />
        </>
    )
}

export default ChangeColor;