import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "../../components/ui/dialog";
import { Button } from "@/components/ui/button";
import ManaSymbol from "./manaSymbol";

type LandsProps = {
    rotate: boolean;
    colors?: string[];
};

type ColoredManaTotal = {
    [key: string]: number;
};


const Lands: React.FC<LandsProps> = ({ rotate, colors }) => {
    const [manaTotal, setManaTotal] = useState(0);
    const [coloredManaTotal, setColoredManaTotal] = useState<ColoredManaTotal>({});

    const changeColoredMana = (color: string, amount: number) => {
        setManaTotal(manaTotal + amount);
        coloredManaTotal[color] = (coloredManaTotal[color] ?? 0) + amount;
        setColoredManaTotal(coloredManaTotal);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Lands</Button>
            </DialogTrigger>
            <DialogContent className={`${rotate ? 'transform rotate-180' : ''}`}>
                <DialogHeader>Lands</DialogHeader>
                <DialogDescription>
                    Keep track of your lands (WIP)
                </DialogDescription>
                <div className="flex justify-between items-center" >
                    <Button onClick={() => setManaTotal(manaTotal - 1)}>-</Button>
                    <p>{manaTotal}</p>
                    <Button onClick={() => setManaTotal(manaTotal + 1)}>+</Button>
                </div>
                {colors && colors.map((color) => {
                    return (
                        <div key={color} className="flex w-full items-center">
                            <div className="pr-4">
                                <ManaSymbol color={color}/>
                            </div>
                            <div className="flex justify-between items-center w-full" >
                                <Button onClick={() => changeColoredMana(color, -1)}>-</Button>
                                <p className="p-6 font-mono">{coloredManaTotal[color]?? 0}</p>
                                <Button onClick={() => changeColoredMana(color, + 1)}>+</Button>
                            </div>
                        </div>
                    );
                })
            }
            {/* {colors && colors.map((color) => {}} */}
            </DialogContent>
        </Dialog>
    );
};

export default Lands;