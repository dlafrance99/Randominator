import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

const ItemsLayout = ({ title }) => {

    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <View style={[styles.Border, { borderColor: FontColor, shadowColor: FontColor }]}>
                <Text style={[styles.HeaderFont, { color: FontColor, textShadowColor: FontColor }]}>
                    {title}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    Border: {
        borderWidth: 5,
        alignSelf: 'center',
        shadowRadius: 5,
        shadowOpacity: .8,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    HeaderFont: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        fontSize: 50,
        textShadowRadius: 15
    },
})

export default ItemsLayout;