import React, { useContext, useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as ListContext } from '../Context/ListContext';

import Header from '../Components/Header';
import GenericInput from '../Components/GenericInput';
import GenericButton from '../Components/GenericButton';
import Spacer from '../Components/Spacer';
import PlusButton from '../Components/PlusButton';
import ListingItems from '../Components/ListingItems';
import ChangeColor from '../Components/ChangeColor';
import AdMobBan from '../Components/AdMobBan';

const SCREEN_WIDTH = Dimensions.get('window').width

const CreateListScreen = ({ navigation }) => {

    //State
    const [ListName, setListName] = useState('')
    const [Item, setItem] = useState('')
    const [ListItems, setListItems] = useState([])
    const [ListNameError, setListNameError] = useState(false)
    const [ErrorText, setErrorText] = useState('false')


    //Context
    const { state: { List }, setList } = useContext(ListContext)

    //Functions
    const addMoreItems = () => {
        ListItems.push(Item)
        setItem('')
    }

    const saveList = () => {
        if (ListName === '') {
            setErrorText('You Must Name Your List')
            return setListNameError(true)
        }

        if (Item !== '') {
            ListItems.push(Item)
        }

        if (List) {
            setList([...List, { Name: ListName, Array: ListItems }])
        } else {
            setList([{ Name: ListName, Array: ListItems }])
        }

        navigation.navigate('Home')
    }

    const Reset = () => {
        setListNameError(false)
        setErrorText('')
        setListName('')
        setListItems([])
        setItem('')
    }

    const ShowList = () => {
        let newList = []

        for (let i = 0; i < ListItems.length; i++) {
            newList.push(
                <ListingItems
                    unit={ListItems[i]}
                    key={i + ListItems[i]}
                />
            )
        }
        return newList;
    }

    return (
        <>
            <NavigationEvents onWillFocus={() => Reset()} />
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='CREATE A LIST'
                    design='Home'
                    target={() => navigation.navigate('Home')}
                />

                <ScrollView style={styles.Content}>
                    <GenericInput
                        title='List Name'
                        val={ListName}
                        onChangeVal={setListName}
                    />

                    <GenericInput
                        title='Item'
                        val={Item}
                        onChangeVal={setItem}
                    />


                    <PlusButton
                        target={() => addMoreItems()}
                    />

                    {ShowList()}

                    <Spacer />

                    {
                        ListNameError
                            ?
                            <>
                                <Spacer />

                                <Text style={styles.errorText}>
                                    {ErrorText}
                                </Text>
                            </>
                            :
                            null
                    }

                    <Spacer />

                </ScrollView>

                <GenericButton
                    title='Save List'
                    target={() => saveList()}
                />

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
    Content: {
        flex: 1,
        width: .9 * SCREEN_WIDTH,
        alignSelf: 'center'
    },
    errorText: {
        color: 'red',
        alignSelf: 'center'
    }
})

export default CreateListScreen;