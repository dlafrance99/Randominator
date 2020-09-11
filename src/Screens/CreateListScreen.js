import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import Header from '../Components/Header';

const CreateListScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.wrapper}>
                <Header
                    title='CREATE A LIST'
                    design='Subheader'
                    target={() => navigation.navigate('Home')}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#09090a'
    },
})

export default CreateListScreen;