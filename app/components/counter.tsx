"use client";
import { kill } from "process";
import React, { useState, useEffect } from "react";

export default function Counter({value, setValue}) {

    const [changeAmount, setChangeAmount] = useState(0);

    const decreaseCounter = () => {
        setValue(value - 1);
        setChangeAmount(changeAmount - 1);
    };

    const increaseCounter = () => {
        setValue(value + 1);
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
                    {value}
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
        </div>
    )
}
