import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const SavedListsScreen = () => {
    return (
        <>
            <View style={styles.wrapper}>
                <Header
                    title='SAVED LISTS'
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

export default SavedListsScreen;