"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import {
    Card,
} from "@/components/ui/card"

import { ScrollArea } from "@/components/ui/scroll-area";


import {
    Commander
} from "./types";
import Image from "next/image";
import CommanderSearch from "./commanderSearch";
import CommanderSearchResultSelector from "./commanderSearchResultSelector";


type CommanderViewProps = {
    commanders: Commander[],
    selectedCommander?: Commander | null,
    setSelectedCommander: (value: Commander) => void;
    rotate: boolean,
}

const CommanderView: React.FC<CommanderViewProps> = ({ commanders, selectedCommander, setSelectedCommander, rotate, }) => {
    return (
        <div className="pt-4">
            {selectedCommander &&
                <div>
                    <Image src={selectedCommander?.art_url} alt="Player Avatar" height={150} width={350} className="w-auto" />
                    <p>{selectedCommander.name}</p>
                </div>
            }
            {selectedCommander == null &&
                <div className="text-2xl">
                    Select a Commander
                </div>
            }
            <CommanderSelector commanders={commanders} selectedCommander={selectedCommander} setSelectedCommander={setSelectedCommander} rotate={rotate} />
        </div>
    )
}

const CommanderSelector: React.FC<CommanderViewProps> = ({ commanders, selectedCommander, setSelectedCommander, rotate }) => {

    const handleCommanderSelected = (commander: Commander) => {
        console.log("Selected Commander:", commander);
        setSelectedCommander(commander);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="m-2">{selectedCommander ? "Change" : "Select"} Commander</Button>
            </DialogTrigger>
            <DialogContent
                className={cn(
                    rotate ? 'transform rotate-180' : '',
                )}>
                <DialogHeader>
                    <DialogTitle>Commanders</DialogTitle>
                    <DialogDescription>
                        Choose your commander
                    </DialogDescription>
                </DialogHeader>
                    {selectedCommander &&
                        <Card key={selectedCommander.name} className="mb-2">
                            <DialogClose asChild>
                                <Button variant="ghost" className="h-[100px] w-full flex">
                                    <div className="w-[100px] mr-2">
                                        <Image src={selectedCommander.art_url} alt={selectedCommander.name} height="626" width="274" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <p className="p-4">{selectedCommander.name}</p>
                                    </div>
                                    <div className="flex-grow"></div>
                                </Button>
                            </DialogClose>
                        </Card>
                    }
                    <CommanderSearch handleCommanderSelected={handleCommanderSelected} />
                    <ScrollArea className="h-[400px] border-none p-6">
                        {commanders.map((commander) => (
                            <CommanderSearchResultSelector key={commander.name} name={commander.name} handleCommanderSelected={handleCommanderSelected} />
                        ))}
                    </ScrollArea>
                <DialogClose asChild>
                    <Button>Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog >
    )
}

export default CommanderView