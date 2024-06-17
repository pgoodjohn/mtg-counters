"use client";
import React, {useState} from "react";
import Counter from "./counter";

export default function CounterContainer() {
    const [counterOne, setCounterOne] = useState(20);
    const [counterTwo, setCounterTwo] = useState(20);
    const [initialState, setInitialState] = useState(20);

    const resetCounters = () => {
        setCounterOne(initialState);
        setCounterTwo(initialState);
    };

    const selectNewInitialState = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInitialState(Number(e.target.value));
        setCounterOne(Number(e.target.value));
        setCounterTwo(Number(e.target.value));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            {/* <div className="transform rotate-180 min-h-[1/2]vh p-4"> */}
            <Counter value={counterOne} setValue={setCounterOne} rotate={true}/>
            {/* </div> */}
            <div className="flex border-y border-gray-300 min-w-full justify-center py-2 px-8">
                <select value={initialState} onChange={selectNewInitialState} className="rounded p-1 border-gray-400">
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select>
                <button className="mx-2 p-1 px-2 rounded bg-red-400 hover:bg-red-500 text-white" onClick={resetCounters}>Reset</button>
            </div>
            <Counter value={counterTwo} setValue={setCounterTwo} />
        </div>
    );
}