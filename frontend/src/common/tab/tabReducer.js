const INITIAL_STATE = { selected: '' }

//state = INITIAL_STATE (paramatro padrao ecmascript 2015)
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TAB_SELECTED':
           return { ...state, selected: action.payload }
        default:
           return state
    }

}