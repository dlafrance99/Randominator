import React, { useContext, useEffect } from 'react';

import { Context as StylingContext } from '../Context/StylingContext';

const ResolveLoadingScreen = ({ navigation }) => {

    //Context
    const { fetchWarning } = useContext(StylingContext)


    //UseEffect
    useEffect(() => {
        fetchWarning()
    }, [])


    return null
}

export default ResolveLoadingScreen;