import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Commander } from "./types";
import { Card } from "scryfall-sdk";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { DialogClose } from "@radix-ui/react-dialog";

type CommanderSelectButtonProps = {
    card: Card;
    commander: Commander;
    handleCommanderSelected: (commander: Commander) => void;
};

const CommanderSelectButton: React.FC<CommanderSelectButtonProps> = ({ card, commander, handleCommanderSelected }) => {

    return (
        <DialogClose asChild>
            <Button variant="ghost" onClick={() => handleCommanderSelected(commander)} className="h-[100px] w-full flex">
                <div className="w-[100px] mr-2">
                    <HoverCard>
                        <HoverCardTrigger>
                            {card.image_uris &&
                                <Image src={card.image_uris.art_crop} alt={card.name} height="626" width="274" />
                            }
                        </HoverCardTrigger>
                        <HoverCardContent className="flex w-auto max-w-[600px]">
                            {card.image_uris &&
                                <Image src={card.image_uris.large} alt={card.name} height="626" width="274" />
                            }
                            <p className="p-4 text-wrap text-left">{card.oracle_text}</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <div className="flex items-center justify-center">
                    <p className="p-4">{card.name}</p>
                </div>
                <div className="flex-grow"></div>
            </Button>
        </DialogClose>

    )
};

export default CommanderSelectButton;