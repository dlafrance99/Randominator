import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

import { FontAwesome } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width

const FullButton = ({ title, target }) => {

    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <TouchableOpacity onPress={() => target()} style={[styles.Border, { borderColor: FontColor, shadowColor: FontColor }]}>
                <Text style={[styles.HeaderFont, { color: FontColor, textShadowColor: FontColor }]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    Border: {
        width: .9 * SCREEN_WIDTH,
        borderWidth: 5,
        shadowRadius: 5,
        shadowOpacity: .8,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: 5
    },
    HeaderFont: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        fontSize: 40,
        textShadowRadius: 15,
        flex: 1
    },
    Icon: {
        fontSize: 50,
        marginRight: 15,
    },
    Butt: {
        alignSelf: 'center',
    }
})

export default FullButton;