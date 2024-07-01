import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type SettingsDialogProps = {
    initialState: string;
    setInitialValue: (newValue: string) => void;
};

const SettingsDialog: React.FC<SettingsDialogProps> = ({ initialState, setInitialValue }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Settings</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>Settings</DialogHeader>
                <Select value={initialState} onValueChange={setInitialValue}>
                    <SelectTrigger>
                        <SelectValue placeholder="Starting Life" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                        <SelectItem value="40">40</SelectItem>
                    </SelectContent>
                </Select>
            </DialogContent>
        </Dialog>
    );
}

export default SettingsDialog;