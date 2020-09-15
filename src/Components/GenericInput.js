import React, { useContext } from 'react';
import { Input } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';


const GenericInput = ({ title, val, onChangeVal }) => {

    //Context
    const { state: { FontColor } } = useContext(StylingContext)

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
            />
        </>
    )
}

export default GenericInput;