import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

const GenericButton = ({ title, target }) => {
    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <TouchableOpacity onPress={() => target()} style={[styles.Butt, { borderColor: FontColor, shadowColor: FontColor }]}>
                <Text h4 style={[styles.Text, { color: FontColor, textShadowColor: FontColor }]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    Butt: {
        borderWidth: 5,
        alignSelf: 'center',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        marginVertical: 20,
        shadowRadius: 5,
        shadowOpacity: .8,
    },
    Text: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        textShadowRadius: 5
    }
})

export default GenericButton;