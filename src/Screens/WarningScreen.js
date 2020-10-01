import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import GenericButton from '../Components/GenericButton';


const SCREEN_WIDTH = Dimensions.get('window').width

const ResolveLoadingScreen = ({ navigation }) => {

    //Context
    const { state: { FontColor, Warning }, changeWarning } = useContext(StylingContext)

    //Functions
    const handleAcceptWarning = () => {
        changeWarning(true)
        navigation.navigate('ResolveLoading')
    }

    return (
        <>
            {
                Warning
                    ?
                    null
                    :
                    <>
                        <View style={styles.wrapper}>
                            <Header
                                title='Warning'
                            />

                            <View style={styles.content}>
                                <Text h3 style={[styles.text, { color: FontColor, textShadowColor: FontColor }]}>
                                    This app uses bright neon colors, which may change at a rapid pace. This may affect users who are susceptible to photosensitive epilepsy or other photo sensitivities.
                                </Text>

                                <GenericButton
                                    title='Accept'
                                    target={() => handleAcceptWarning()}
                                />
                            </View>

                        </View>
                    </>
            }
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#09090a',
    },
    content: {
        justifyContent: 'center',
        flex: 1,
        width: .9 * SCREEN_WIDTH,
        alignSelf: 'center',
        marginBottom: 100
    },
    text: {
        fontFamily: 'Kailasa-Bold',
        textShadowRadius: 15,
        textAlign: 'center'
    }
})

export default ResolveLoadingScreen;