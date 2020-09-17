import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

const ItemsLayout = ({ title, randoNum, index }) => {
    //State
    const [Color, setColor] = useState('#747474')

    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            {
                randoNum === index
                    ?
                    <View style={[styles.Border, { borderColor: FontColor, shadowColor: FontColor }]}>
                        <Text style={[styles.HeaderFont, { color: FontColor, textShadowColor: FontColor }]}>
                            {title}
                        </Text>
                    </View>
                    :
                    <View style={[styles.Border, { borderColor: Color, shadowColor: Color }]}>
                        <Text style={[styles.HeaderFont, { color: Color, textShadowColor: Color }]}>
                            {title}
                        </Text>
                    </View>
            }
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