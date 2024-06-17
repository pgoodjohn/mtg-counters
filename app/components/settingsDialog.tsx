import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type SettingsDialogProps = {    
    initialState: number;
    setInitialValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SettingsDialog: React.FC<SettingsDialogProps> = ({initialState, setInitialValue}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Settings</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>Settings</DialogHeader>
                <select value={initialState} onChange={setInitialValue} className="rounded p-1 border-gray-400">
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select> 
            </DialogContent>
        </Dialog>
    );
}

export default SettingsDialog;