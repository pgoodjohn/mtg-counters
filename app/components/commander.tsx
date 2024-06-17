"use client";
import React, { useState } from "react";
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
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ScrollArea } from "@/components/ui/scroll-area"


import {
    Commander
} from "./types";
import Image from "next/image";


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
                <Image src={selectedCommander?.art_url} alt="Player Avatar" height={150} width={350} className="w-auto" />
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
                    <ScrollArea className="h-[700px] border-none p-6">
                        {commanders.map((commander) => (
                            <Card key={commander.name} className="my-3">
                                <DialogClose asChild>
                                    <Button variant="ghost" onClick={() => handleCommanderSelected(commander)} className="h-[125px] w-full">
                                        <div className="flex">
                                            <div className="w-[100px]">
                                                <Image src={commander.art_url} alt={commander.name} height="626" width="274"/>
                                            </div>
                                            <p className="p-4">{commander.name}</p>
                                        </div>
                                    </Button>
                                </DialogClose>
                            </Card>      
                            // <Button variant={"outline"}>
                            //     <div className="w-[100px]">
                            //         <Image src={commander.art_url} alt={commander.name} height="626" width="274" />
                            //     </div>
                            //     {commander.name}
                            // </Button>
                        ))}
                    </ScrollArea>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}

export default CommanderView