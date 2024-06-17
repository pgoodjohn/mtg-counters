"use client";
import React, { useState, useEffect } from "react";
import Profile from "./profile";

type CounterProps = {
    value: number;
    setValue: (value: number) => void;
    rotate?: boolean;
};

const Counter: React.FC<CounterProps> = ({ value, setValue, rotate }) => {
    const [changeAmount, setChangeAmount] = useState(0);

    const changeCounter = (amount: number) => {
        setValue(value + amount);
        setChangeAmount(changeAmount + amount);
    }

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setChangeAmount(0);
        }, 5000);

        return () => {
            clearTimeout(timer1);
        };
    }, [changeAmount]);

    return (
        <div className={`flex flex-col items-center flex-grow ${rotate ? 'transform rotate-180' :  ''}`}>
            <Profile />
            <div className="flex-grow" />
            <div className="flex">
                <div className="flex flex-col">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4 rounded-t" onClick={() => changeCounter(-2)}>
                        -2
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4"  onClick={() => changeCounter(-3)}>
                        -3
                    </button> 
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4" onClick={() => changeCounter(-5)} >
                        -5
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4 rounded-b"  onClick={() => changeCounter(-10)}>
                        -10
                    </button>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded text-6xl"
                    onClick={() => changeCounter(-1)}
                >
                    -
                </button>

                <p className="text-9xl px-8 font-bold font-mono w-72 text-center">
                    {value}
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded text-6xl"
                    onClick={() => changeCounter(1)}
                >
                    +                
                </button>
                <div className="flex flex-col">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4 rounded-t"  onClick={() => changeCounter(2)}>
                        +2
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4"  onClick={() => changeCounter(3)}>
                        +3
                    </button> 
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4" onClick={() => changeCounter(5)}>
                        +5
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 h-1/4 rounded-b"  onClick={() => changeCounter(10)}>
                        +10
                    </button>
                </div>
            </div>
            <p className="p-4 min-h-[56px] font-mono">
                {changeAmount !== 0 ? changeAmount : ""}
            </p>
        </div>
    )
}

export default Counter;