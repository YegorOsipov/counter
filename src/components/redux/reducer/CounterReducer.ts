type ActionsType = ChangeCounterAC

const CHANGE_COUNTER = "CHANGE_COUNTER";

const initialState: number = 0;

export const CounterReducer = (state = initialState, action: ActionsType): number => {
    switch (action.type) {
        case CHANGE_COUNTER:
            let copyState = state + 1;
            return  copyState
        default: return state;
    }
}

type ChangeCounterAC = ReturnType<typeof changeCounterAC>
export const changeCounterAC = () => {
    return {
        type: CHANGE_COUNTER,
    }
}