const initialState = {

    numPad: ['0','1','2','3','4','5','6','7','8','9','+','-','/','*', '.'],
    barValue: '',
    memory: [],

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OPERATION_EVAL':
            return {
                ...state,
                barValue: eval(state.barValue),
                memory: state.memory.concat([eval(state.barValue)]),
            }
        case 'ENTER_VALUE':
            return {
                ...state,
                barValue: state.barValue + action.numAction,
            }
        case 'RESET_ALL': 
            return {
                ...state,
                barValue: '',
        }

        case 'DELETE_LAST':
            return {
                ...state,
                barValue: state.barValue.substring( 0, state.barValue.length -1 ),
        }
        case 'CLEAR_RESULTS':
            return {
                ...state,
                memory: state.memory.filter(x=> x !== action.iAction),
            }
        default:   
            return state
    }
}

export default reducer;