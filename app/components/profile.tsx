"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type ProfileProps = {
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
    }
]

const Profile: React.FC<ProfileProps> = () => {
    const getRandomCommander = () => {
        const randomIndex = Math.floor(Math.random() * commanders.length);
        return commanders[randomIndex];
    };

    const [selectedCommander, setSelectedCommander] = useState(getRandomCommander());

    const handleCommanderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCommander(commanders.filter(commander => commander.art_url === event.target.value)[0])
    };

    return (
        <div className="text-center">
            <Image src={selectedCommander.art_url} alt="Player Avatar" width={350} height={150} sizes="(max-width: 350px), (max-height: 150px)" />
            <select onChange={handleCommanderChange} value={selectedCommander.art_url}>
                {commanders.map((commander, index) => (
                    <option key={index} value={commander.art_url}>{commander.name}</option>
                ))}
            </select>
        </div>
    )
};

export default Profile;