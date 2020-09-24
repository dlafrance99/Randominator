import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import ChangeColor from '../Components/ChangeColor';

const SettingsScreen = ({ navigation }) => {

    //Context---------------------------------------
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='Settings'
                    design='Home'
                    target={() => navigation.navigate('Home')}
                />

                <ScrollView style={styles.content}>
                    <Text h4 style={[styles.Text, { color: FontColor, textShadowColor: FontColor }]}>
                        Heyo
                    </Text>
                </ScrollView>
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
        flex: 1
    },
})

export default SettingsScreen;