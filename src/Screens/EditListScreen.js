import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import Header from '../Components/Header';
import DeleteItemLayout from '../Components/DeleteItemLayout';
import Spacer from '../Components/Spacer';
import EditListNameLayout from '../Components/EditListNameLayout';
import DeleteListLayout from '../Components/DeleteListLayout';
import DeleteConfirmationOverlay from '../Components/DeleteConfirmationOverlay';
import PlusButton from '../Components/PlusButton';
import GenericInput from '../Components/GenericInput';
import ChangeColor from '../Components/ChangeColor';

const SCREEN_WIDTH = Dimensions.get('window').width

const EditListScreen = ({ navigation }) => {
    //State--------------------------------------
    const [DeleteConfirm, setDeleteConfirm] = useState(false)
    const [CurrentList, setCurrentList] = useState('')
    const [Item, setItem] = useState('')
    const [ChangeName, setChangeName] = useState(false)
    const [NewName, setNewName] = useState('')

    //Context--------------------------------------
    const { state: { List, SelectedList }, setList } = useContext(ListContext)

    //Functions--------------------------------------
    //UseEffect
    useEffect(() => {
        setDeleteConfirm(false)
        setChangeName(false)
        setCurrentList(List[SelectedList].Name)
    }, [])

    //Deletes a Single Item
    const handleDeleteItem = (value) => {
        let Lists = []

        for (let i = 0; i < List[SelectedList].Array.length; i++) {
            if (List[SelectedList].Array[i] !== value) {
                Lists.push(List[SelectedList].Array[i])
            }
        }
        Lists = { Name: List[SelectedList].Name, Array: Lists }

        let MainList = []

        for (let i = 0; i < List.length; i++) {
            if (i !== SelectedList) {
                MainList.push(List[i])
            } else if (i === SelectedList) {
                MainList.push(Lists)
            }
        }

        setList(MainList)
    }

    //Deletes a whole list
    const handleDeleteList = () => {
        let MainList = []

        for (let i = 0; i < List.length; i++) {
            if (i !== SelectedList) {
                MainList.push(List[i])
            }
        }

        setList(MainList)

        navigation.navigate('SelectEditList')
    }

    //Adds Items to list
    const handleAddItems = () => {
        let ListItems = List[SelectedList].Array
        ListItems.push(Item)
        let updatedList = { Name: List[SelectedList].Name, Array: ListItems }

        let MainList = []

        for (let i = 0; i < List.length; i++) {
            if (i !== SelectedList) {
                MainList.push(List[i])
            } else if (i === SelectedList) {
                MainList.push(updatedList)
            }
        }

        setItem('')

        setList(MainList)
    }

    //Edits Name Change
    const handleNameChange = () => {
        let updatedList = { Name: NewName, Array: List[SelectedList].Array }

        let MainList = [];

        for (let i = 0; i < List.length; i++) {
            if (i !== SelectedList) {
                MainList.push(List[i])
            } else if (i === SelectedList) {
                MainList.push(updatedList)
            }
        }

        setNewName('')
        setChangeName(false)
        setCurrentList(NewName)

        setList(MainList)
    }

    //Show--------------------------------------
    const showItems = () => {
        let Item = [];

        for (let i = 0; i < List[SelectedList].Array.length; i++) {
            Item.push(
                <>
                    <DeleteItemLayout
                        title={List[SelectedList].Array[i]}
                        target={(value) => handleDeleteItem(value)}
                    />
                </>
            )
        }

        return Item;
    }


    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title={'Edit List: "' + CurrentList + '"'}
                    design='Subheader'
                    target={() => navigation.navigate('SelectEditList')}
                />

                <Spacer />
                <Spacer />
                {
                    DeleteConfirm
                        ?
                        <DeleteConfirmationOverlay
                            targetDelete={(value) => handleDeleteList(value)}
                            targetCancel={() => setDeleteConfirm(false)}
                            ListName={CurrentList}
                        />
                        :
                        <>
                            <ScrollView style={styles.content}>
                                {showItems()}

                                <Spacer />

                                <GenericInput
                                    title="Add Item"
                                    val={Item}
                                    onChangeVal={setItem}
                                />

                                <PlusButton
                                    target={() => handleAddItems()}
                                />

                                <Spacer />

                                {
                                    ChangeName
                                        ?
                                        <>
                                            <GenericInput
                                                title='Change Name'
                                                val={NewName}
                                                onChangeVal={setNewName}
                                            />

                                            <EditListNameLayout
                                                title='Save Name'
                                                target={() => handleNameChange()}
                                            />
                                        </>
                                        :
                                        <EditListNameLayout
                                            title='Edit List Name'
                                            target={() => setChangeName(true)}
                                        />
                                }

                                <Spacer />
                                <Spacer />
                            </ScrollView>

                            <DeleteListLayout
                                title='Delete List'
                                target={() => setDeleteConfirm(true)}
                            />
                            <Spacer />
                            <Spacer />
                        </>
                }

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
        alignSelf: 'center'
    },
})

export default EditListScreen;