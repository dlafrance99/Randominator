import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import ChangeColor from '../Components/ChangeColor';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import GenericInput from '../Components/GenericInput';
import GenericButton from '../Components/GenericButton';
import Spacer from '../Components/Spacer';

const SCREEN_WIDTH = Dimensions.get('window').width

const RandoNumberScreen = ({ navigation }) => {

    //State--------------------------------
    const [MinNumber, setMinNumber] = useState('')
    const [MaxNumber, setMaxNumber] = useState('')
    const [RandomNumber, setRandomNumber] = useState(0)

    //Functions--------------------------------
    //Random Number
    const RandomNum = () => {
        let minimum = parseInt(MinNumber)
        let maximum = parseInt(MaxNumber)

        if (minimum < 0) {
            minimum = minimum - 1
        }

        if (maximum >= 0) {
            maximum = maximum + 1
        }

        setRandomNumber(parseInt(Math.random() * ((maximum) - minimum) + minimum))
    }

    //Handle Error
    const ShowRandomNum = () => {
        if (!RandomNumber) {
            return 'Not a Number'
        } else {
            return RandomNumber
        }
    }
    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='Select a List to Edit'
                    design='Subheader'
                    target={() => navigation.navigate('Home')}
                />

                <View style={styles.content}>

                    <GenericInput
                        title='Lowest Number'
                        val={MinNumber}
                        onChangeVal={setMinNumber}
                        design='Number'
                    />

                    <Spacer />
                    <Spacer />

                    <GenericInput
                        title='Highest Number'
                        val={MaxNumber}
                        onChangeVal={setMaxNumber}
                        design='Number'
                    />

                    <Spacer />
                    <Spacer />

                    <GenericButton
                        title='RANDOMINATE!'
                        target={() => RandomNum()}
                    />

                    <SubHeader
                        title={ShowRandomNum()}
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
})

export default RandoNumberScreen;