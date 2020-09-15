import createDataContext from './createDataContext';

const ListReducer = (state, action) => {
    switch (action.type) {
        case 'Add_To_List':
            return { ...state, List: action.payload }
        default:
            return state;
    }
}

const setList = (dispatch) => {
    return (value) => {
        dispatch({ type: 'Add_To_List', payload: value })
    }
}

export const { Provider, Context } = createDataContext(
    ListReducer,
    { setList },
    { List: [] }
)