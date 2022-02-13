import {changeCounterAC, CounterReducer} from "./CounterReducer";

test("counter should increase by 1", () => {
    const startState: number = 0;

    const endState = CounterReducer(startState, changeCounterAC());
    const newValue = 1;

    expect(endState).toBe(newValue);
} );