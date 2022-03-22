import {changeCounterAC, CounterReducer, InitialStateType, resetCounterAC} from "./CounterReducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
        value: 0
    };
})

test("counter should increase by 1", () => {
    const endState = CounterReducer(startState, changeCounterAC());
    const newValue = 1;

    expect(endState.value).toBe(newValue);
} );

test("counter should increase by 0", () => {
    const endState = CounterReducer(startState, resetCounterAC());

    expect(endState.value).toBe(startState.value);
} );