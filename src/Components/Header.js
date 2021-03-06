import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons'

import { Context as StylingContext } from '../Context/StylingContext';

const Header = ({ title, design, target, target2 }) => {
    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    //Functions
    const HeaderDesign = () => {
        if (design === 'Subheader') {
            return (
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => target()} style={styles.Flex}>
                        <Ionicons
                            name='ios-arrow-back'
                            style={[styles.Icon, { color: FontColor, textShadowColor: FontColor }]}
                        />
                    </TouchableOpacity>

                    <Text style={[styles.Subheader, { color: FontColor, textShadowColor: FontColor }]}>
                        {title}
                    </Text>

                    <View style={styles.Flex} />
                </View>
            )
        } else if (design === 'Home') {
            return (
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => target()} style={styles.Flex}>
                        <Ionicons
                            name='md-home'
                            style={[styles.Icon, { color: FontColor, textShadowColor: FontColor }]}
                        />
                    </TouchableOpacity>

                    <Text style={[styles.Subheader, { color: FontColor, textShadowColor: FontColor }]}>
                        {title}
                    </Text>

                    <View style={styles.Flex} />
                </View>
            )
        } else if (design === 'Sub-Home') {
            return (
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => target()} style={styles.Flex}>
                        <Ionicons
                            name='ios-arrow-back'
                            style={[styles.Icon, { color: FontColor, textShadowColor: FontColor }]}
                        />
                    </TouchableOpacity>

                    <Text style={[styles.Subheader, { color: FontColor, textShadowColor: FontColor }]}>
                        {title}
                    </Text>

                    <TouchableOpacity onPress={() => target2()} style={styles.Flex}>
                        <Ionicons
                            name='md-home'
                            style={[styles.Icon, { color: FontColor, textShadowColor: FontColor }]}
                        />
                    </TouchableOpacity>
                </View>
            )
        } else if (design === 'Sub') {
            return (
                <Text style={[styles.Sub, { color: FontColor, textShadowColor: FontColor }]}>
                    {title}
                </Text>
            )
        } else {
            return (
                <Text style={[styles.Header, { color: FontColor, textShadowColor: FontColor }]}>
                    {title}
                </Text>
            )
        }
    }

    return (
        <>
            {HeaderDesign()}
        </>
    )
}

const styles = StyleSheet.create({
    Header: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        paddingTop: 60,
        fontSize: 45,
        textShadowRadius: 15
    },
    Subheader: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 40,
        flex: 5,
        textShadowRadius: 15
    },
    Sub: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        fontSize: 30,
        flex: 1,
        textShadowRadius: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Icon: {
        fontSize: 40,
        marginTop: 50,
        marginLeft: 15,
        textShadowRadius: 15
    },
    Flex: {
        flex: 1
    },
})

export default Header;