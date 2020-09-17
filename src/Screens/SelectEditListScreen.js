import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import ChangeColor from '../Components/ChangeColor';
import Header from '../Components/Header';
import ListSelectionButt from '../Components/ListSelectionButt';

const SelectEditListScreen = ({ navigation }) => {

    //Context
    const { state: { List }, ChangeSelectedList } = useContext(ListContext)

    //Functions
    const handleListSelection = (value) => {
        ChangeSelectedList(value)
        navigation.navigate('EditList')
    }

    //Show
    const showLists = () => {
        let Lists = [];

        for (let i = 0; i < List.length; i++) {
            Lists.push(
                <>
                    <ListSelectionButt
                        title={List[i].Name}
                        key={List[i].Name}
                        target={() => handleListSelection(i)}
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
                    title='Select a List to Edit'
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

export default SelectEditListScreen;