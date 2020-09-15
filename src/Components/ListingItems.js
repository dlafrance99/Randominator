import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';


const ListingItems = ({ unit }) => {

    //Context
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <Text h4 style={[styles.MainText, { color: FontColor }]}>
                {unit}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({

})

export default ListingItems;