"use client";
import React, { useState, useEffect } from "react";

type CounterProps = {
    value: number;
    setValue: (value: number) => void;
};

const Counter: React.FC<CounterProps> = ({ value, setValue }) => {
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                    onClick={decreaseCounter}
                >
                    -
                </button>

                <p className="text-9xl px-8 font-bold font-mono">
                    {value}
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                    onClick={increaseCounter}
                >
                    +                
                </button>
            </div>
            <p className="p-4 min-h-[56px] font-mono">
                {changeAmount != 0 ? changeAmount : ""}
            </p>
        </div>
    )
}

export default Counter;