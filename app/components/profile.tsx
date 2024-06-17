"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";

type ProfileProps = {
};

type Commander = {
    name: string;
    art_url: string;
};

const commanders = [
    {
        "name": "Omo, Queen of Vesuva",
        "art_url": "https://cards.scryfall.io/art_crop/front/e/5/e5d1c814-4c22-4917-95ae-dffaf491db32.jpg?1717644342",
    },
    {
        "name": "The Thirteenth Doctor",
        "art_url": "https://cards.scryfall.io/art_crop/front/0/d/0dc4ec90-1650-4b98-9350-66341394cf0b.jpg?1696636504",
    },
    {
        "name": "Olivia, Opulent Outlaw",
        "art_url": "https://cards.scryfall.io/art_crop/front/5/5/55e6c31b-f9e9-4e42-a875-985d99300d9d.jpg?1714110406",
    },
    {
        "name": "Yuma, Proud Protector",
        "art_url": "https://cards.scryfall.io/art_crop/front/1/8/18df72be-07d2-4412-b36d-a45119763db3.jpg?1714110413",
    },
    {
        "name": "Aragorn and Arwen, Wed",
        "art_url": "https://cards.scryfall.io/art_crop/front/d/7/d7d4c97a-9319-4534-9a49-da000f41a02d.jpg?1715720374",
    },
    {
        "name": "Sauron, the Lidless Eye",
        "art_url": "https://cards.scryfall.io/art_crop/front/d/8/d82a4c78-d2fc-425a-8d0e-2e64509a08f1.jpg?1715720382",
    },
]

const Profile: React.FC<ProfileProps> = () => {
    const getRandomCommander = () => {
        const randomIndex = Math.floor(Math.random() * commanders.length);
        return commanders[randomIndex];
    };

    const [selectedCommander, setSelectedCommander] = useState<Commander | null>(null);

    const handleCommanderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCommander(commanders.filter(commander => commander.art_url === event.target.value)[0])
    };

    if (selectedCommander === null) {
        setSelectedCommander(getRandomCommander());
    }

    return (
        <div className="flex w-screen">
            <div className="items-center w-1/3 p-4">
                <Dialog>
                    <DialogTrigger>
                        <Button>
                            Lands
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>Lands</DialogHeader>
                        <DialogDescription>
                            Keep track of your lands (WIP)
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            </div>
            {selectedCommander &&
                <div className="flex flex-col items-center text-center w-1/3 min-w-[350px]">
                    <Image src={selectedCommander.art_url} alt="Player Avatar" width={350} height={150} sizes="(max-width: 350px), (max-height: 150px)" />
                    <select onChange={handleCommanderChange} value={selectedCommander.art_url}>
                        {commanders.map((commander, index) => (
                            <option key={index} value={commander.art_url}>{commander.name}</option>
                        ))}
                    </select>
                </div>
            }
            <div className="w-1/3"></div>
        </div>
    )
};

export default Profile;