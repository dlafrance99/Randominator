import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../Components/Header';
import GenericButton from '../Components/GenericButton';
import Footer from '../Components/Footer';
import ChangeColor from '../Components/ChangeColor';
import AdMobBan from '../Components/AdMobBan';

const HomeScreen = ({ navigation }) => {

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='RANDOMINATOR'
                />

                <View style={styles.content}>
                    <GenericButton
                        title='RANDOMINATE'
                        style={styles.Butt}
                        target={() => navigation.navigate('SelectList')}
                    />

                    <GenericButton
                        title='RANDO NUMBER'
                        style={styles.Butt}
                        target={() => navigation.navigate('RandoNumberInput')}
                    />

                    <GenericButton
                        title='CREATE LIST'
                        style={styles.Butt}
                        target={() => navigation.navigate('CreateList')}
                    />

                    <GenericButton
                        title='EDIT LISTS'
                        style={styles.Butt}
                        target={() => navigation.navigate('SelectEditList')}
                    />

                </View>

                <Footer />

                <AdMobBan />
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
        flex: 1
    }
})

export default HomeScreen;