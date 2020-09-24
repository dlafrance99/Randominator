import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';
import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import GenericButton from '../Components/GenericButton';
import ChangeColor from '../Components/ChangeColor';

const WinnerScreen = ({ navigation }) => {

    //State------------------------

    //Context----------------------
    const { state: { List, SelectedList, WinnerIndex } } = useContext(ListContext)
    const { state: { FontColor } } = useContext(StylingContext)

    //Functions--------------------

    //Show-------------------------

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='Winner!'
                    design='Home'
                    target={() => navigation.navigate('Home')}
                />

                <View style={styles.content}>
                    <View style={[styles.WinnerContent, { borderColor: FontColor, shadowColor: FontColor }]}>
                        <Text h1 style={[styles.WinnerText, { color: FontColor, textShadowColor: FontColor }]}>
                            {List[SelectedList].Array[WinnerIndex]}
                        </Text>
                    </View>

                    <GenericButton
                        title='Try Again?'
                        target={() => navigation.navigate('Randominate')}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#09090a'
    },
    content: {
        justifyContent: 'center',
        flex: 1,
    },
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


export default WinnerScreen;