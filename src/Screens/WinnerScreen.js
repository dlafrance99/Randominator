import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';
import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import GenericButton from '../Components/GenericButton';
import ChangeColor from '../Components/ChangeColor';
import AdMobBan from '../Components/AdMobBan';

const WinnerScreen = ({ navigation }) => {

    //State------------------------
    const [Winner, setWinner] = useState('')

    //Context----------------------
    const { state: { List, SelectedList, WinnerIndex }, setList } = useContext(ListContext)
    const { state: { FontColor } } = useContext(StylingContext)

    //Functions--------------------
    useEffect(() => {
        setWinner(List[SelectedList].Array[WinnerIndex])
        if (List[SelectedList].Reduction) {
            updateList()
        }
    }, [])

    const updateList = () => {
        let updatedList = []
        let updatedArray = []
        let updatedUsedArray = List[SelectedList].usedArray

        for (let i = 0; i < List[SelectedList].Array.length; i++) {
            if (List[SelectedList].Array[i] !== List[SelectedList].Array[WinnerIndex]) {
                updatedArray.push(List[SelectedList].Array[i])
            } else if (List[SelectedList].Array[i] === List[SelectedList].Array[WinnerIndex]) {
                updatedUsedArray.push(List[SelectedList].Array[i])
            }
        }

        if (updatedArray.length === 1) {
            for (let i = 0; i < updatedUsedArray.length; i++) {
                updatedArray.push(updatedUsedArray[i])
            }
            updatedUsedArray = []
        }

        for (let i = 0; i < List.length; i++) {
            if (SelectedList !== i) {
                updatedList.push(List[i])
            } else if (SelectedList === i) {
                updatedList.push({ Name: List[i].Name, Array: updatedArray, Reduction: true, usedArray: updatedUsedArray })
            }
        }

        setList(updatedList)
    }

    //Show-------------------------

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='Winner!'
                    design='Home'
                    target={() => navigation.navigate('Home')}
                />

                <View style={styles.content}>
                    <View style={[styles.WinnerContent, { borderColor: FontColor, shadowColor: FontColor }]}>
                        <Text h1 style={[styles.WinnerText, { color: FontColor, textShadowColor: FontColor }]}>
                            {Winner}
                        </Text>
                    </View>

                    <GenericButton
                        title='Try Again?'
                        target={() => navigation.navigate('Randominate')}
                    />
                </View>

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
        flex: 1,
    },
    WinnerContent: {
        borderWidth: 5,
        borderRadius: 10,
        shadowRadius: 5,
        shadowOpacity: .8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginBottom: 100
    },
    WinnerText: {
        fontFamily: 'Kailasa-Bold',
        textAlign: 'center',
        textShadowRadius: 15
    }
})


export default WinnerScreen;