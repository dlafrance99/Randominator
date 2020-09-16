import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as ListContext } from '../Context/ListContext';

import ChangeColor from '../Components/ChangeColor';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import ItemsLayout from '../Components/ItemsLayout';
import Spacer from '../Components/Spacer';

const RandominateScreen = ({ navigation }) => {
    //UseEffect
    useEffect(() => {

    }, [])

    //Context
    const { state: { List, SelectedList } } = useContext(ListContext)

    //Show
    const showItems = () => {
        let Item = [];

        if (List[SelectedList].Array.length < 4) {
            for (let i = 0; i < List[SelectedList].Array.length; i++) {
                Item.push(
                    <>
                        <ItemsLayout title={List[SelectedList].Array[i]} />
                    </>
                )
            }
        } else if (List[SelectedList].Array.length > 4 && List[SelectedList].Array.length < 7) {
            for (let i = 0; i < List[SelectedList].Array.length; i += 2) {
                Item.push(
                    <>
                        <View style={styles.row}>
                            <ItemsLayout title={List[SelectedList].Array[i]} />
                            {
                                List[SelectedList].Array[i + 1]
                                    ?
                                    <ItemsLayout title={List[SelectedList].Array[i + 1]} />
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
            <ChangeColor />
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