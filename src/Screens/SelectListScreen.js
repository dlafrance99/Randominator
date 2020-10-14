import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import Header from '../Components/Header';
import ListSelectionButt from '../Components/ListSelectionButt';
import ChangeColor from '../Components/ChangeColor';
import AdMobBan from '../Components/AdMobBan';

const SelectListScreen = ({ navigation }) => {

    //Context
    const { state: { List }, ChangeSelectedList } = useContext(ListContext)

    //Functions
    const handleListSelection = (value) => {
        ChangeSelectedList(value)
        navigation.navigate('Randominate')
    }

    useEffect(() => {
        console.log(List)
    }, [])

    //Show
    const showListItems = () => {
        let Lists = [];

        if (List) {
            for (let i = 0; i < List.length; i++) {
                Lists.push(
                    <ListSelectionButt
                        title={List[i].Name}
                        key={List[i].Name}
                        target={() => handleListSelection(i)}
                    />
                )
            }
        } else {
            return null
        }
        return Lists;
    }

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='Select a List'
                    design='Home'
                    target={() => navigation.navigate('Home')}
                />

                <ScrollView style={styles.content}>
                    {showListItems()}
                </ScrollView>

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
        flex: 1
    },
})

export default SelectListScreen;