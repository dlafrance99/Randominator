import createDataContext from './createDataContext';

const styleReducer = (state, action) => {
    switch (action.type) {
        case 'change_font_color':
            return { ...state, FontColor: action.payload }

        default:
            return state;
    }
}

const changeFontColor = (dispatch) => {
    return (value) => {
        dispatch({ type: 'change_font_color', payload: value })
    }
}

export const { Provider, Context } = createDataContext(
    styleReducer,
    { changeFontColor },
    { ListOfFontColors: ['#b76cfd', '#ff2281', '#ffd300', '#13ca91', '#ff9472', '#d9eb4b', '#ce0000', '#7fff00', '#ff2079', '#08f7fe', '#09fbd3', '#fe53bb', '#f5d300', '#ffacfc', '#f148fb', '#7122fa', '#560a86', '#011ffd', '#75d5fd'], FontColor: '#09fbd3' }
)