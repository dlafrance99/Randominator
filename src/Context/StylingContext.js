import createDataContext from './createDataContext';
import { navigate } from '../NavigationRef';
import { AsyncStorage } from 'react-native';

const styleReducer = (state, action) => {
    switch (action.type) {
        case 'change_font_color':
            return { ...state, FontColor: action.payload }
        case 'Update_Warning':
            return { ...state, Warning: action.payload }
        default:
            return state;
    }
}

const fetchWarning = (dispatch) => {
    return async () => {
        let Warning = await AsyncStorage.getItem('Warning')
        Warning = JSON.parse(Warning)

        if (Warning) {
            dispatch({ type: 'Update_Warning', payload: Warning })
        }

        if (Warning===true){
            navigate('ResolveLoading')
        } else {
            navigate('Warning')
        }
    }
}

const changeWarning = (dispatch) => {
    return async (value) => {
        let stringValue = JSON.stringify(value)
        await AsyncStorage.setItem('Warning', stringValue)
        dispatch({ type: 'Update_Warning', payload: value })
    }
}

const changeFontColor = (dispatch) => {
    return (value) => {
        dispatch({ type: 'change_font_color', payload: value })
    }
}

export const { Provider, Context } = createDataContext(
    styleReducer,
    { changeFontColor, fetchWarning, changeWarning },
    { ListOfFontColors: ['#b76cfd', '#ff2281', '#ffd300', '#13ca91', '#ff9472', '#d9eb4b', '#7fff00', '#ff2079', '#08f7fe', '#09fbd3', '#fe53bb', '#f5d300', '#ffacfc', '#f148fb', '#7122fa', '#560a86', '#011ffd', '#75d5fd'], FontColor: '#09fbd3', Warning: false }
)