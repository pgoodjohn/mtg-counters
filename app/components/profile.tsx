"use client";
import React, { useState } from "react";
import { Commander } from "./types";
import CommanderView from "./commander";
import Lands from "./lands";

type ProfileProps = {
    rotate: boolean;
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
    {
        "name": "Dogmeat, Ever Loyal",
        "art_url": "",
    },
    {
        "name": "The Wise Mothman",
        "art_url": "",
    }
]

const Profile: React.FC<ProfileProps> = ({ rotate = false }) => {
    const [selectedCommander, setSelectedCommander] = useState<Commander | null>(null);

    return (
        <div className="flex w-screen">
            <div className="items-center w-1/3 p-4">
                <Lands colors={selectedCommander?.colors} rotate={rotate}/>
           </div>
            <div className="flex flex-col items-center text-center w-1/3 min-w-[350px]">
                <CommanderView commanders={commanders} selectedCommander={selectedCommander} setSelectedCommander={setSelectedCommander} rotate={rotate} />
            </div>
            <div className="w-1/3"></div>
        </div>
    )
};

export default Profile;