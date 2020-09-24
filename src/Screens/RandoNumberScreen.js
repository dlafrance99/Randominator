import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as ListContext } from '../Context/ListContext';
import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Spacer from '../Components/Spacer';
import Countdown from '../Components/Countdown';
import GenericButton from '../Components/GenericButton';

const RandoNumberScreen = ({ navigation }) => {
    //Variables--------------------
    let timerIntervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 22, 24, 26, 28, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 300, 400, 500, 1000]

    //State------------------------
    const [WinningNumber, setWinningNumber] = useState(0)

    const [CurrentColor, setCurrentColor] = useState(FontColor)

    const [RandominatorRunning, setRandominatorRunning] = useState(true)

    const [TimeInterval, setTimeInterval] = useState(timerIntervals[CurrentIndex])
    const [CurrentIndex, setCurrentIndex] = useState(0)

    const [WinnerSelected, setWinnerSelected] = useState(false)
    const [WinnerFlashRunning, setWinnerFlashRunning] = useState(true)

    //Context----------------------
    const { state: { MinNumber, MaxNumber } } = useContext(ListContext)
    const { state: { ListOfFontColors, FontColor }, changeFontColor } = useContext(StylingContext)

    //Functions--------------------

    //UseEffect
    useEffect(() => {
        setCurrentColor(FontColor)
    }, [])

    //Reset
    const Reset = () => {
        setRandominatorRunning(true)
        setTimeInterval(timerIntervals[0])
        setCurrentIndex(0)
        setWinnerSelected(false)
        setWinnerFlashRunning(true)
    }

    //Random Color Generator
    const RandomColorGenerator = () => {
        let ranNum = Math.floor(Math.random() * ListOfFontColors.length)

        changeFontColor(ListOfFontColors[ranNum])
        setCurrentColor(ListOfFontColors[ranNum])
    }

    // RandomNumber
    const RandomNumberGenerator = () => {
        let Minimum = MinNumber;
        let Maximum = MaxNumber

        if (Minimum < 0) {
            Minimum = Minimum - 1
        }

        if (Maximum >= 0) {
            Maximum = Maximum + 1
        }

        setWinningNumber(parseInt(Math.random() * ((Maximum) - Minimum) + Minimum))
    }

    //Choose the next item
    const NextSelection = () => {
        if (CurrentIndex < timerIntervals.length) {
            setCurrentIndex(latestCurrentIndex => latestCurrentIndex + 1)
            setTimeInterval(timerIntervals[CurrentIndex])
            RandomNumberGenerator()
            RandomColorGenerator()
        } else {
            setRandominatorRunning(false)
            setCurrentIndex(0)
            setWinnerSelected(true)
        }
    }

    //Show Winner Flashing
    const WinnerFlash = () => {
        if (CurrentIndex <= 7 && CurrentColor === FontColor) {
            setCurrentColor('#747474')
            setCurrentIndex(latestCurrentIndex => latestCurrentIndex + 1)
        } else if (CurrentIndex <= 7 && CurrentColor !== FontColor) {
            setCurrentColor(FontColor)
            setCurrentIndex(latestCurrentIndex => latestCurrentIndex + 1)
        } else {
            setWinnerFlashRunning(false)
            setCurrentColor(FontColor)
        }
    }

    //Show-------------------------

    const showCountdown = () => {
        if (RandominatorRunning) {
            return (
                <>
                    <Countdown
                        isActive={RandominatorRunning}
                        target={() => NextSelection()}
                        timeToChange={TimeInterval}
                    />
                </>
            )
        } else {
            return null
        }
    }

    return (
        <>
            <NavigationEvents onWillFocus={() => Reset()} />
            {
                WinnerSelected
                    ?
                    <Countdown
                        isActive={WinnerFlashRunning}
                        target={() => WinnerFlash()}
                        timeToChange={300}
                    />
                    :
                    null
            }

            {showCountdown()}

            <View style={styles.wrapper}>
                <Header
                    title='Randominating'
                    design='Subheader'
                    target={() => navigation.navigate('RandoNumberInput')}
                />

                <SubHeader title={MinNumber + " - " + MaxNumber} />

                <Spacer />

                <View style={styles.content}>
                    {<Text style={[styles.WinningText, { color: CurrentColor, textShadowColor: CurrentColor }]}>
                        {WinningNumber}
                    </Text>}

                    {
                        WinnerSelected
                            ?
                            <>
                                <GenericButton
                                    title='Try Again?'
                                    target={() => Reset()}
                                />

                                <Spacer />

                                <GenericButton
                                    title='Done?'
                                    target={() => navigation.navigate('Home')}
                                />
                            </>
                            :
                            null
                    }
                </View>

                <Spacer />
                <Spacer />
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
        marginTop: 100,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    WinningText: {
        fontSize: 100,
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        paddingTop: 60,
        textShadowRadius: 15,
        marginBottom: 100
    }
})

export default RandoNumberScreen;