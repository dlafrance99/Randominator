import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import Header from '../Components/Header';
import ChangeColor from '../Components/ChangeColor';
import DeleteItemLayout from '../Components/DeleteItemLayout';
import Spacer from '../Components/Spacer';
import DeleteListLayout from '../Components/DeleteListLayout';
import DeleteConfirmationOverlay from '../Components/DeleteConfirmationOverlay';
import PlusButton from '../Components/PlusButton';

const EditListScreen = ({ navigation }) => {
    //State
    const [DeleteConfirm, setDeleteConfirm] = useState(false)
    const [CurrentList, setCurrentList] = useState('')

    //Context
    const { state: { List, SelectedList }, setList } = useContext(ListContext)

    //Functions
    //UseEffect
    useEffect(() => {
        setDeleteConfirm(false)
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

    //Show
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

                                <PlusButton 
                                
                                />

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
        flex: 1
    },
})

export default EditListScreen;