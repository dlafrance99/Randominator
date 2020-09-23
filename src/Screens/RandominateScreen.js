import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';
import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import ItemsLayout from '../Components/ItemsLayout';
import Spacer from '../Components/Spacer';
import Countdown from '../Components/Countdown';

const RandominateScreen = ({ navigation }) => {
    //Variables----------------------------
    let timerIntervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 22, 24, 26, 28, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 300, 400, 500, 1000]

    //State--------------------------------
    const [RandomNum, setRandomNum] = useState(0)
    const [RandominatorRunning, setRandominatorRunning] = useState(true)

    const [TimeInterval, setTimeInterval] = useState(timerIntervals[CurrentIndex])
    const [CurrentIndex, setCurrentIndex] = useState(0)

    const [WinnerSelected, setWinnerSelected] = useState(false)
    const [WinnerFlashRunning, setWinnerFlashRunning] = useState(true)

    //Context--------------------------------
    const { state: { List, SelectedList, WinnerIndex }, ChangeWinnerIndex } = useContext(ListContext)
    const { state: { ListOfFontColors }, changeFontColor } = useContext(StylingContext)

    //Functions--------------------------------


    //Reset
    const Reset = () => {
        setRandominatorRunning(true)
        setTimeInterval(timerIntervals[0])
        setCurrentIndex(0)
        setWinnerSelected(false)
        setWinnerFlashRunning(true)
    }

    //Random Number Generator
    const RandomNumberGenerator = () => {
        let ranNum = Math.floor(Math.random() * List[SelectedList].Array.length)

        setRandomNum(ranNum)
    }

    //Random Color Generator
    const RandomColorGenerator = () => {
        let ranNum = Math.floor(Math.random() * ListOfFontColors.length)

        changeFontColor(ListOfFontColors[ranNum])
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
            ChangeWinnerIndex(RandomNum)
            setCurrentIndex(0)
            setWinnerSelected(true)
        }
    }

    //Show Winner Flashing
    const WinnerFlash = () => {
        if (CurrentIndex <= 7 && RandomNum === WinnerIndex) {
            setRandomNum((List[SelectedList].Array.length) + 1)
            setCurrentIndex(latestCurrentIndex => latestCurrentIndex + 1)
        } else if (CurrentIndex <= 7 && RandomNum !== WinnerIndex) {
            setRandomNum(WinnerIndex)
            setCurrentIndex(latestCurrentIndex => latestCurrentIndex + 1)
        } else {
            setWinnerFlashRunning(false)
            setRandomNum(WinnerIndex)
            navigation.navigate('Winner')
        }
    }

    //Show
    const showItems = () => {
        let Item = [];

        if (List[SelectedList].Array.length < 4) {
            for (let i = 0; i < List[SelectedList].Array.length; i++) {
                Item.push(
                    <>

                        <ItemsLayout
                            title={List[SelectedList].Array[i]}
                            randoNum={RandomNum}
                            index={i}
                        />

                    </>
                )
            }
        } else if (List[SelectedList].Array.length > 4 && List[SelectedList].Array.length < 7) {

            for (let i = 0; i < List[SelectedList].Array.length; i += 2) {
                Item.push(
                    <>
                        <View style={styles.row}>
                            <ItemsLayout
                                title={List[SelectedList].Array[i]}
                                randoNum={RandomNum}
                                index={i}
                            />
                            {
                                List[SelectedList].Array[i + 1]
                                    ?
                                    <ItemsLayout
                                        title={List[SelectedList].Array[i + 1]}
                                        randoNum={RandomNum}
                                        index={i + 1}
                                    />
                                    :
                                    null
                            }
                        </View>
                    </>
                )
            }
        }

        return Item;
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
            <Countdown
                isActive={RandominatorRunning}
                target={() => NextSelection()}
                timeToChange={TimeInterval}
            />

            <View style={styles.wrapper}>
                <Header
                    title='Randominating'
                    design='Subheader'
                    target={() => navigation.navigate('SelectList')}
                />

                <SubHeader title={List[SelectedList].Name} />

                <Spacer />

                <View style={styles.content}>
                    {showItems()}

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
        justifyContent: 'center',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1
    }

})

export default RandominateScreen;