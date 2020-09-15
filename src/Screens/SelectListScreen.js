import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import ChangeColor from '../Components/ChangeColor';
import Header from '../Components/Header';
import ListSelectionButt from '../Components/ListSelectionButt';

const SelectListScreen = ({ navigation }) => {

    //Context
    const { state: { List } } = useContext(ListContext)

    //Functions
    useEffect(() => {
        console.log({ List })
    }, [])

    //Show
    const showLists = () => {
        let Lists = [];

        for (let i = 0; i < List.length; i++) {
            Lists.push(
                <>
                    <ListSelectionButt
                        title={List[i].Name}
                        target={()=>console.log('hit this list selection')}
                    />
                </>
            )
        }
        return Lists;
    }

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='Select a List'
                    design='Subheader'
                    target={() => navigation.navigate('Home')}
                />

                <ScrollView style={styles.content}>
                    {showLists()}
                </ScrollView>
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