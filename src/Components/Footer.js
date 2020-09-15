import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { FontAwesome } from '@expo/vector-icons';

import { Context as StylingContext } from '../Context/StylingContext';

const Footer = ({ navigation }) => {
    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <View style={styles.content}>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <FontAwesome
                        name='gear'
                        style={[styles.Icon, { color: FontColor, textShadowColor: FontColor }]}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <FontAwesome
                        name='info-circle'
                        style={[styles.Icon, { color: FontColor, textShadowColor: FontColor }]}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    Icon: {
        color: '#747474',
        fontSize: 40,
        textShadowRadius: 10,
        padding: 15
    }
})

export default withNavigation(Footer);