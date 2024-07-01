"use client";
import React, {useState} from "react";
import Counter from "./counter";
import SettingsDialog from "./settingsDialog";

export default function CounterContainer() {
    const [counterOne, setCounterOne] = useState(40);
    const [counterTwo, setCounterTwo] = useState(40);
    const [initialState, setInitialState] = useState("40");

    const resetCounters = () => {
        setCounterOne(parseInt(initialState));
        setCounterTwo(parseInt(initialState));
    };

    const selectNewInitialState = (newValue: string) => {
        setInitialState(newValue);
        setCounterOne(parseInt(newValue));
        setCounterTwo(parseInt(newValue));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            <Counter value={counterOne} setValue={setCounterOne} rotate={true} opponentValue={counterTwo}/>
            <div className="flex border-y border-gray-300 min-w-full justify-center py-2 px-8">
                <SettingsDialog setInitialValue={selectNewInitialState} initialState={initialState}/>
                <div className="flex-grow"></div>
                <button className="mx-2 p-1 px-2 rounded bg-red-400 hover:bg-red-500 text-white" onClick={resetCounters}>Reset</button>
            </div>
            <Counter value={counterTwo} setValue={setCounterTwo} rotate={false} opponentValue={counterOne}/>
        </div>
    );
}