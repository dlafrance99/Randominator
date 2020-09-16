import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width

const DeleteListLayout = ({ title, target }) => {

    return (
        <>
            <TouchableOpacity onPress={() => target(title)} style={styles.Butt}>
                <View style={styles.Border}>
                    <Text style={styles.HeaderFont}>
                        {title}
                    </Text>

                    <FontAwesome
                        name='trash-o'
                        style={styles.Icon}
                    />
                </View>
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
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: '#ce0000',
        shadowColor: '#ce0000',
    },
    HeaderFont: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        fontSize: 50,
        textShadowRadius: 15,
        flex: 1,
        color: '#ce0000',
        textShadowColor: '#ce0000',
    },
    Icon: {
        fontSize: 50,
        marginRight: 15,
        color: '#ce0000',
        textShadowColor: '#ce0000',
        alignSelf: 'center'
    },
    Butt: {
        alignSelf: 'center',
    }
})

export default DeleteListLayout;