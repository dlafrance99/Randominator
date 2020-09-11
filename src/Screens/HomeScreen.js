import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import Header from '../Components/Header';
import GenericButton from '../Components/GenericButton';
import Footer from '../Components/Footer';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.wrapper}>
                <Header
                    title='RANDOMINATOR'
                />

                <View style={styles.content}>
                    <GenericButton
                        title='CREATE NEW LIST'
                        style={styles.Butt}
                        target={() => navigation.navigate('CreateList')}
                    />

                    <GenericButton
                        title='SAVED LIST'
                        style={styles.Butt}
                        target={() => navigation.navigate('SavedLists')}
                    />
                </View>

                <Footer />
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