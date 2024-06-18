import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "../../components/ui/dialog";
import { Button } from "@/components/ui/button";

type LandsProps = {
    rotate: boolean;
};

const Lands: React.FC<LandsProps> = ({ rotate }) => {
    const [manaTotal, setManaTotal] = useState(0);

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
            </DialogContent>
        </Dialog>
    );
};

export default Lands;