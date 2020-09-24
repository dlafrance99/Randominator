import React, { useState, useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import Header from '../Components/Header';
import GenericInput from '../Components/GenericInput';
import GenericButton from '../Components/GenericButton';
import Spacer from '../Components/Spacer';
import ChangeColor from '../Components/ChangeColor';

import { Context as ListContext } from '../Context/ListContext';

const SCREEN_WIDTH = Dimensions.get('window').width

const RandoNumberInputScreen = ({ navigation }) => {

    //State----------------------------------
    const [Error, setError] = useState(false)

    //Context----------------------------------
    const { state: { MinNumber, MaxNumber }, ChangeMinNumber, ChangeMaxNumber } = useContext(ListContext)

    //Functions--------------------------------
    //Random Number
    const RandomNum = () => {
        if (MinNumber === '' || MaxNumber === '' || !parseInt(MinNumber) || !parseInt(MaxNumber)) {
            setError(true)
        } else {
            let Min = parseInt(MinNumber)
            let Max = parseInt(MaxNumber)

            ChangeMinNumber(Min)
            ChangeMaxNumber(Max)

            navigation.navigate('RandoNumber')
        }
    }

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='Select a List to Edit'
                    design='Home'
                    target={() => navigation.navigate('Home')}
                />

                <View style={styles.content}>

                    <GenericInput
                        title='Minimum Number'
                        val={MinNumber.toString()}
                        onChangeVal={(value) => ChangeMinNumber(value)}
                        design='Number'
                    />

                    <Spacer />
                    <Spacer />

                    <GenericInput
                        title='Maximum Number'
                        val={MaxNumber.toString()}
                        onChangeVal={(value) => ChangeMaxNumber(value)}
                        design='Number'
                    />

                    <Spacer />

                    {
                        Error
                            ?
                            <Text style={styles.errorText}>
                                You must enter two numbers to Randominate
                            </Text>
                            :
                            null
                    }

                    <Spacer />

                    <GenericButton
                        title='RANDOMINATE!'
                        target={() => RandomNum()}
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
        flex: 1,
        width: .9 * SCREEN_WIDTH,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 200
    },
    errorText: {
        fontFamily: 'Kailasa-Bold',
        color: 'red'
    }
})

export default RandoNumberInputScreen;