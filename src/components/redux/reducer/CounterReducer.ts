const CHANGE_COUNTER = "CHANGE_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";

export type InitialStateType = typeof initialState

const initialState = {
    value: 0
};

export const CounterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case CHANGE_COUNTER:
            return {...state, value: state.value + 1}

        case RESET_COUNTER:
            return {...state, value: 0}
        default: return state;
    }
}

type ActionsType = ChangeCounterAC | ResetCounterAC

type ChangeCounterAC = ReturnType<typeof changeCounterAC>
export const changeCounterAC = () => {
    return {type: CHANGE_COUNTER} as const
}

type ResetCounterAC = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () => {
    return {type: RESET_COUNTER} as const
}