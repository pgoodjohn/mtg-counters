"use client";
import React, { useState, useEffect } from "react";
import Profile from "./profile";
import Confetti from 'react-confetti'

type CounterProps = {
    value: number;
    setValue: (value: number) => void;
    rotate: boolean;
    opponentValue: number;
};

const Counter: React.FC<CounterProps> = ({ value, setValue, rotate = false, opponentValue }) => {
    const [changeAmount, setChangeAmount] = useState(0);

    const changeCounter = (amount: number) => {
        setValue(value + amount);
        setChangeAmount(changeAmount + amount);
    }

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setChangeAmount(0);
        }, 7000);

        return () => {
            clearTimeout(timer1);
        };
    }, [changeAmount]);

    return (
        <div className={`w-screen flex flex-col items-center flex-grow ${rotate ? 'transform rotate-180' :  ''}`}>
            {opponentValue <= 0 &&
                <Confetti />
            }
            <Profile rotate={rotate}/>
            <div className="flex-grow" />
            <div className="px-8 font-mono text-2xl">
                <p className="h-[56px]">
                    {changeAmount !== 0 ? changeAmount : ""}
                </p>
            </div>
            <div className="flex pb-8">
                <div className="flex flex-col">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 h-1/3 rounded-t" onClick={() => changeCounter(-2)}>
                        -2
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 h-1/3"  onClick={() => changeCounter(-5)}>
                        -5
                    </button> 
                    <button className="bg-blue-500 border-blue-500 hover:bg-blue-700 text-white font-bold px-4 h-1/3 rounded-b"  onClick={() => changeCounter(-10)}>
                        -10
                    </button>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded text-6xl"
                    onClick={() => changeCounter(-1)}
                >
                    -
                </button>

                <p className="text-10xl px-8 font-bold font-mono w-72 text-center">
                    {value}
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded text-6xl"
                    onClick={() => changeCounter(1)}
                >
                    +                
                </button>
                <div className="flex flex-col">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 h-1/3 rounded-t"  onClick={() => changeCounter(2)}>
                        +2
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 h-1/3"  onClick={() => changeCounter(5)}>
                        +5
                    </button> 
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 h-1/3 rounded-b"  onClick={() => changeCounter(10)}>
                        +10
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter;