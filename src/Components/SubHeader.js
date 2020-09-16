import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';


const SubHeader = ({ title }) => {

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
        margin: 5,
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        shadowRadius: 5,
        shadowOpacity: .8,
    },
    HeaderFont: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        fontSize: 35,
        textShadowRadius: 15
    },
})

export default SubHeader;