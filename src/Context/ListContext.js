import createDataContext from './createDataContext';
import { navigate } from '../NavigationRef';
import { AsyncStorage } from 'react-native';

const ListReducer = (state, action) => {
    switch (action.type) {
        case 'Add_To_List':
            return { ...state, List: action.payload }
        case 'Change_Selected_List':
            return { ...state, SelectedList: action.payload }
        default:
            return state;
    }
}

const fetchLocalLists = (dispatch) => {
    return async () => {
        let localList = await AsyncStorage.getItem('List')
        localList = JSON.parse(localList)

        dispatch({ type: 'Add_To_List', payload: localList })

        navigate('Home')
    }
}

const setList = (dispatch) => {
    return async (value) => {
        let stringValue = JSON.stringify(value)
        await AsyncStorage.setItem('List', stringValue)
        dispatch({ type: 'Add_To_List', payload: value })
    }
}

const ChangeSelectedList = (dispatch) => {
    return (value) => {
        dispatch({ type: 'Change_Selected_List', payload: value })
    }
}

export const { Provider, Context } = createDataContext(
    ListReducer,
    { setList, fetchLocalLists, ChangeSelectedList },
    { List: [], SelectedList: '' }
)