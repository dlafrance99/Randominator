import React, { useContext } from 'react';
import { Input } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';


const GenericInput = ({ title, val, onChangeVal, design }) => {

    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    //Functions
    const handleKeyboardDesign = () => {
        if (design === 'Number') {
            return 'numbers-and-punctuation'
        } else {
            return 'default'
        }
    }

    return (
        <>
            <Input
                label={title}
                labelStyle={{ color: FontColor }}
                inputStyle={{ color: FontColor }}
                inputContainerStyle={{ borderBottomColor: FontColor }}
                value={val}
                onChangeText={onChangeVal}
                keyboardAppearance='dark'
                returnKeyType='done'
                keyboardType={handleKeyboardDesign()}
            />
        </>
    )
}

export default GenericInput;