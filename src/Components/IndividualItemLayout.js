import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

const IndividualItemLayout = ({ title, randoNum, winnerIndex, winnerTitle, winnerSelction }) => {

    //State------------------------------------------------------
    const [Color, setColor] = useState('#747474')

    //Context----------------------------------------------------
    const { state: { FontColor } } = useContext(StylingContext)

    //Functions--------------------------------------------------

    //Show-------------------------------------------------------
    const showIndividualItem = () => {
        if (!winnerSelction || (winnerSelction && (randoNum === winnerIndex))) {
            return (
                <View style={[styles.WinnerContent, { borderColor: FontColor, shadowColor: FontColor }]}>
                    <Text h1 style={[styles.WinnerText, { color: FontColor, textShadowColor: FontColor }]}>
                        {title}
                    </Text>
                </View>
            )
        } else if (winnerSelction && (randoNum !== winnerIndex)) {
            return (
                <View style={[styles.WinnerContent, { borderColor: Color, shadowColor: Color }]}>
                    <Text h1 style={[styles.WinnerText, { color: Color, textShadowColor: Color }]}>
                        {winnerTitle}
                    </Text>
                </View>
            )
        }
    }

    return (
        <>
            {showIndividualItem()}
        </>
    )
}

const styles = StyleSheet.create({
    WinnerContent: {
        borderWidth: 5,
        borderRadius: 10,
        shadowRadius: 5,
        shadowOpacity: .8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginBottom: 100
    },
    WinnerText: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        textShadowRadius: 15
    }
})

export default IndividualItemLayout;