"use client";
import React, { useState, useEffect } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(20);
    const [changeAmount, setChangeAmount] = useState(0);

    const resetCounter = () => {
        setCounter(20);
        setChangeAmount(0);
    };

    const decreaseCounter = () => {
        setCounter(counter - 1);
        setChangeAmount(changeAmount - 1);
    };

    const increaseCounter = () => {
        setCounter(counter + 1);
        setChangeAmount(changeAmount + 1);
    };

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setChangeAmount(0);
        }, 5000);

        return () => {
            clearTimeout(timer1);
        };
    }, [changeAmount]);

    return (
        <div className="flex flex-col items-center">
            <div className="flex">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={decreaseCounter}
                >
                    -
                </button>

                <p className="text-8xl px-4 font-bold">
                    {counter}
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={increaseCounter}
                >
                    +                
                </button>
            </div>
            <p className="p-4 min-h-[56px]">
                {changeAmount != 0 ? changeAmount : ""}
            </p>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={resetCounter}>
                Reset
            </button>
        </div>
    )
}