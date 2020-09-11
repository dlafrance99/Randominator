import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons'

const Header = ({ title, design, target }) => {

    const HeaderDesign = () => {
        if (design === 'Subheader') {
            return (
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => target()} style={styles.Flex}>
                        <Ionicons
                            name='ios-arrow-back'
                            style={styles.Icon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.Subheader}>
                        {title}
                    </Text>

                    <View style={styles.Flex} />
                </View>
            )
        } else {
            return (
                <Text style={styles.Header}>
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
        color: '#747474',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 45
    },
    Subheader: {
        fontFamily: 'Kailasa-Bold',
        color: '#747474',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 30,
        flex: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Icon: {
        fontSize: 35,
        color: '#747474',
        marginTop: 50,
        marginLeft: 10,
    },
    Flex: {
        flex: 1
    },
})

export default Header;