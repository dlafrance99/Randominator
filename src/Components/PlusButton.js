import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Context as StylingContext } from '../Context/StylingContext';

import { FontAwesome } from '@expo/vector-icons';

const PlusButton = ({ target }) => {

    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <TouchableOpacity onPress={() => target()}>
                <FontAwesome
                    name='plus-circle'
                    style={[styles.Icon, { color: FontColor }]}
                />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    Icon: {
        fontSize: 40,
        alignSelf: 'center'
    }
})

export default PlusButton;