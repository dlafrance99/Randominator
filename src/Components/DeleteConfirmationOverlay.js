import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import Spacer from './Spacer';

const SCREEN_WIDTH = Dimensions.get('window').width

const DeleteConfirmationOverlay = ({ targetDelete, targetCancel }) => {

    //Context
    const { state: { List, SelectedList }, setList } = useContext(ListContext)

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.Border}>
                    <Spacer />

                    <Text style={styles.HeaderFontRed}>
                        Are You Sure You Want to Delete List: "{List[SelectedList].Name}"?
                    </Text>

                    <Spacer />
                    <Spacer />

                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => targetCancel()} style={styles.ButtGreen}>
                            <Text style={styles.HeaderFont}>
                                No
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => targetDelete()} style={styles.ButtRed}>
                            <Text style={styles.HeaderFont}>
                                Yes, Delete!
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <Spacer />
                    <Spacer />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    Border: {
        width: .9 * SCREEN_WIDTH,
        borderWidth: 5,
        borderRadius: 10,
        shadowRadius: 5,
        shadowOpacity: .8,
        alignSelf: 'center',
        borderColor: '#ce0000',
        shadowColor: '#ce0000',
    },
    HeaderFont: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        fontSize: 30,
        textShadowRadius: 15,
        color: '#09090a',
    },
    HeaderFontRed: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        fontSize: 30,
        textShadowRadius: 15,
        color: '#ce0000',
    },
    Icon: {
        fontSize: 50,
        marginRight: 15,
        color: '#ce0000',
        textShadowColor: '#ce0000'
    },
    ButtGreen: {
        alignSelf: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#085E2D',
        paddingHorizontal: 10,
        backgroundColor: '#0c9547'

    },
    ButtRed: {
        alignSelf: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#8F0000',
        paddingHorizontal: 10,
        backgroundColor: '#ce0000'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default DeleteConfirmationOverlay;