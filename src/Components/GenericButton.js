import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const GenericButton = ({ title, target }) => {
    return (
        <>
            <TouchableOpacity onPress={() => target()} style={styles.Butt}>
                <Text h4 style={styles.Text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    Butt: {
        borderWidth: 5,
        borderColor: '#747474',
        alignSelf: 'center',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#2e2e2e',
        marginVertical: 20
    },
    Text: {
        fontFamily: 'Kailasa-Bold',
        color: '#747474',
        textAlign: 'center',
    }
})

export default GenericButton;