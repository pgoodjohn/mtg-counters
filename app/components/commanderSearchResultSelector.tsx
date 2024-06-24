"use client";
import React, { useState } from 'react';
import { Commander } from './types';
import * as Scry from "scryfall-sdk";
import {
    Card,
} from "@/components/ui/card"
import CommanderSelectButton from './commanderSelectButton';

type CommanderSearchResultProps = {
    name: string;
    handleCommanderSelected: (commander: Commander) => void;
}

const CommanderSearchResultSelector: React.FC<CommanderSearchResultProps> = ({ name, handleCommanderSelected }) => {

    const [card, setCard] = React.useState<Scry.Card | null>(null);
    const [commander, setCommander] = useState<Commander | null>(null);

    async function loadCard(name: string) {
        const card = await Scry.Cards.byName(name);
        console.debug(card);
        setCard(card);

        let commander: Commander = {
            name: card.name,
            art_url: card.image_uris?.art_crop || "",
            colors: card.colors?? [],
        };
        setCommander(commander);
    }

    if (card === null) {
        loadCard(name);
    }

    return (
        <div key={name}>
            {card && commander &&
            <Card key={card.name} className="mb-2">
                <CommanderSelectButton card={card} commander={commander} handleCommanderSelected={handleCommanderSelected}/>
            </Card>
            }
        </div>
    )
}

export default CommanderSearchResultSelector;