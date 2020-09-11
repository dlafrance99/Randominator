import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { FontAwesome } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
    return (
        <>
            <View style={styles.content}>
                <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                    <FontAwesome
                        name='gear'
                        style={styles.Icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Info')}>
                    <FontAwesome
                        name='info-circle'
                        style={styles.Icon}
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
        marginHorizontal: 15,
        marginBottom: 25
    },
    Icon: {
        color: '#747474',
        fontSize: 40
    }
})

export default withNavigation(Footer);