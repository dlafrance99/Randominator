import React, { useContext, useEffect } from 'react';

import { Context as ListContext } from '../Context/ListContext'

const ResolveLoadingScreen = () => {

    //Context
    const { fetchLocalLists } = useContext(ListContext)


    //UseEffect
    useEffect(() => {
        fetchLocalLists()
    }, [])


    return null
}

export default ResolveLoadingScreen;