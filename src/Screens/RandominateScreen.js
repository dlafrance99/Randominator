import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';
import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import ItemsLayout from '../Components/ItemsLayout';
import Spacer from '../Components/Spacer';
import Countdown from '../Components/Countdown';

const RandominateScreen = ({ navigation }) => {
    //State--------------------------------
    const [RandomNum, setRandomNum] = useState(0)
    const [RandominatorRunning, setRandominatorRunning] = useState(true)
    const [TimeInterval, setTimeInterval] = useState(2000)

    //Context--------------------------------
    const { state: { List, SelectedList } } = useContext(ListContext)
    const { state: { ListOfFontColors }, changeFontColor } = useContext(StylingContext)

    //Functions--------------------------------

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
        setTimeInterval(latestTimeInterval => latestTimeInterval + 1000)
        RandomNumberGenerator()
        RandomColorGenerator()
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

                {/* Delete this later */}
                <SubHeader title={TimeInterval} />

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