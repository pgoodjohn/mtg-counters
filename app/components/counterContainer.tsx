"use client";
import {React, useState} from "react";
import Counter from "./counter";

export default function CounterContainer() {

    const [counterOne, setCounterOne] = useState(20);
    const [counterTwo, setCounterTwo] = useState(20);

    const resetCounters = () => {
        setCounterOne(20);
        setCounterTwo(20);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            <div className="transform rotate-180 min-h-[1/2]vh p-4">
                <Counter value={counterOne} setValue={setCounterOne}  />
            </div>
            <div>
                <button onClick={resetCounters}>Reset</button>
            </div>
            <div className="p-4">
                <Counter value={counterTwo} setValue={setCounterTwo} />
            </div>
        </div>
    );
}