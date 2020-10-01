import React, { useContext, useEffect } from 'react';

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


    return null
}

export default ResolveLoadingScreen;