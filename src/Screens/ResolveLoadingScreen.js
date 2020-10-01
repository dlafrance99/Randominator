import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';

import { Context as ListContext } from '../Context/ListContext';
import { Context as StylingContext } from '../Context/StylingContext';

const ResolveLoadingScreen = ({ navigation }) => {

    //Context
    const { fetchLocalLists } = useContext(ListContext)
    const { state: { Warning }, fetchWarning } = useContext(StylingContext)


    //UseEffect
    useEffect(() => {
        fetchLocalLists()
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: '#09090a' }} />
    )
}

export default ResolveLoadingScreen;