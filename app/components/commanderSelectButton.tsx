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

type CommanderSelectButtonProps = {
    card: Card;
    commander: Commander;
    handleCommanderSelected: (commander: Commander) => void;
};

const CommanderSelectButton: React.FC<CommanderSelectButtonProps> = ({ card, commander, handleCommanderSelected }) => {

    return (
        <Button variant="ghost" onClick={() => handleCommanderSelected(commander)} className="h-[100px] w-full flex">
            <HoverCard>
                <HoverCardTrigger>
                    <div className="w-[100px] mr-2">
                        {card.image_uris &&
                            <Image src={card.image_uris.art_crop} alt={card.name} height="626" width="274" />
                        }
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="p-4">{card.name}</p>
                    </div>
                    <div className="flex-grow"></div>
                </HoverCardTrigger>
                <HoverCardContent className="flex w-auto">
                    {card.image_uris &&
                        <Image src={card.image_uris.large} alt={card.name} height="626" width="274" />
                    }
                    <p className="max-w-[200px] p-4">{card.oracle_text}</p>
                </HoverCardContent>
            </HoverCard>
        </Button>
    )
};

export default CommanderSelectButton;