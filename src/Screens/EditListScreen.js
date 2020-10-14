import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import Header from '../Components/Header';
import DeleteItemLayout from '../Components/DeleteItemLayout';
import Spacer from '../Components/Spacer';
import FullButton from '../Components/FullButton';
import DeleteListLayout from '../Components/DeleteListLayout';
import DeleteConfirmationOverlay from '../Components/DeleteConfirmationOverlay';
import PlusButton from '../Components/PlusButton';
import GenericInput from '../Components/GenericInput';
import GenericButton from '../Components/GenericButton';
import ChangeColor from '../Components/ChangeColor';

const SCREEN_WIDTH = Dimensions.get('window').width

const EditListScreen = ({ navigation }) => {
    //State--------------------------------------
    const [DeleteConfirm, setDeleteConfirm] = useState(false)
    const [CurrentList, setCurrentList] = useState('')
    const [Item, setItem] = useState('')
    const [ChangeName, setChangeName] = useState(false)
    const [NewName, setNewName] = useState('')
    const [Reduced, setReduced] = useState(false)

    //Context--------------------------------------
    const { state: { List, SelectedList }, setList } = useContext(ListContext)

    //Functions--------------------------------------
    //UseEffect
    useEffect(() => {
        setDeleteConfirm(false)
        setChangeName(false)
        setCurrentList(List[SelectedList].Name)
        if (List[SelectedList].Reduction) {
            setReduced(true)
        }
    }, [])

    //Deletes a Single Item
    const handleDeleteItem = (value) => {
        if (!Reduced) {
            let newArray = []

            for (let i = 0; i < List[SelectedList].Array.length; i++) {
                if (List[SelectedList].Array[i] !== value) {
                    newArray.push(List[SelectedList].Array[i])
                }
            }
            newArray = { Name: List[SelectedList].Name, Array: newArray }

            let newList = []

            for (let i = 0; i < List.length; i++) {
                if (i !== SelectedList) {
                    newList.push(List[i])
                } else if (i === SelectedList) {
                    newList.push(newArray)
                }
            }

            setList(newList)

        } else if (Reduced) {
            let newArray = []
            let newUsedArray = List[SelectedList].usedArray

            for (let i = 0; i < List[SelectedList].Array.length; i++) {
                if (List[SelectedList].Array[i] !== value) {
                    newArray.push(List[SelectedList].Array[i])
                }
            }

            newArray = { Name: List[SelectedList].Name, Array: newArray, Reduction: true, usedArray: newUsedArray }

            let newList = []

            for (let i = 0; i < List.length; i++) {
                if (i !== SelectedList) {
                    newList.push(List[i])
                } else if (i === SelectedList) {
                    newList.push(newArray)
                }
            }

            setList(newList)

        }
    }

    const handleDeleteUsedItem = (value) => {
        let newArray = List[SelectedList].Array
        let newUsedArray = []

        for (let i = 0; i < List[SelectedList].usedArray.length; i++) {
            if (List[SelectedList].usedArray[i] !== value) {
                newUsedArray.push(List[SelectedList].usedArray[i])
            }
        }

        newArray = { Name: List[SelectedList].Name, Array: newArray, Reduction: true, usedArray: newUsedArray }

        let newList = []

        for (let i = 0; i < List.length; i++) {
            if (i !== SelectedList) {
                newList.push(List[i])
            } else if (i === SelectedList) {
                newList.push(newArray)
            }
        }

        setList(newList)
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

        let updatedList;

        if (!Reduced) {
            updatedList = { Name: List[SelectedList].Name, Array: ListItems }
        } else if (Reduced) {
            updatedList = { Name: List[SelectedList].Name, Array: ListItems, Reduction: true, usedArray: List[SelectedList].usedArray }
        }

        let MainList = [];

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
        let updatedList;

        if (!Reduced) {
            updatedList = { Name: NewName, Array: List[SelectedList].Array }
        } else if (Reduced) {
            updatedList = { Name: NewName, Array: List[SelectedList].Array, Reduction: true, usedArray: List[SelectedList].usedArray }
        }

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

    //Resets usedArray to being empty and putting all items in that list into Array
    const handleResetSelection = () => {
        let newArray = List[SelectedList].Array

        for (let i = 0; i < List[SelectedList].usedArray.length; i++) {
            newArray.push(List[SelectedList].usedArray[i])
        }

        let updatedList = { Name: List[SelectedList].Name, Array: newArray, Reduction: true, usedArray: [] }

        let MainList = [];

        for (let i = 0; i < List.length; i++) {
            if (i !== SelectedList) {
                MainList.push(List[i])
            } else if (i === SelectedList) {
                MainList.push(updatedList)
            }
        }

        setList(MainList)
    }

    //Show--------------------------------------
    const showArray = () => {
        let Item = [];

        for (let i = 0; i < List[SelectedList].Array.length; i++) {
            Item.push(
                <DeleteItemLayout
                    title={List[SelectedList].Array[i]}
                    target={(value) => handleDeleteItem(value)}
                    key={i + List[SelectedList].Array[i]}
                />
            )
        }

        return Item;
    }

    const showUsedArray = () => {
        let Item = [];

        for (let i = 0; i < List[SelectedList].usedArray.length; i++) {
            Item.push(
                <DeleteItemLayout
                    title={List[SelectedList].usedArray[i]}
                    target={(value) => handleDeleteUsedItem(value)}
                    key={i + List[SelectedList].usedArray[i]}
                />
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
                    design='Sub-Home'
                    target={() => navigation.navigate('SelectEditList')}
                    target2={() => navigation.navigate('Home')}
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

                                {
                                    Reduced
                                        ?
                                        <Header
                                            title='Not Selected Yet'
                                            design='Sub'
                                        />
                                        :
                                        null
                                }

                                {showArray()}

                                {
                                    Reduced && List[SelectedList].usedArray.length > 0
                                        ?
                                        <>
                                            <Header
                                                title='Already Selected'
                                                design='Sub'
                                            />
                                            {showUsedArray()}
                                        </>
                                        :
                                        null
                                }

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

                                            <FullButton
                                                title='Save Name'
                                                target={() => handleNameChange()}
                                            />
                                        </>
                                        :
                                        <FullButton
                                            title='Edit List Name'
                                            target={() => setChangeName(true)}
                                        />
                                }

                                <Spacer />

                                {
                                    Reduced && List[SelectedList].usedArray.length > 0
                                        ?
                                        <FullButton
                                            title='Reset Selected'
                                            target={() => handleResetSelection()}
                                        />
                                        :
                                        null
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