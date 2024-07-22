"use client";
import React, { useState } from "react";
import { Commander } from "./types";
import CommanderView from "./commander";
import Lands from "./lands";

type ProfileProps = {
    rotate: boolean;
};

const getFavouriteCommanders = (): Commander[] => {
    const omo: Commander = {name: "Omo, Queen of Vesuva", art_url: "", colors: []};
    const olivia: Commander = {name: "Olivia, Opulent Outlaw", art_url: "", colors: []};
    const yuma: Commander = {name: "Yuma, Proud Protector", art_url: "", colors: []};
    const doctor: Commander = {name: "The Thirteenth Doctor", art_url: "", colors: []};
    const aragorn: Commander = {name: "Aragorn and Arwen, Wed", art_url: "", colors: []};
    const sauron: Commander = {name: "Sauron, the Lidless Eye", art_url: "", colors: []};
    const dogmeat: Commander = {name: "Dogmeat, Ever Loyal", art_url: "", colors: []};
    const mothman: Commander = {name: "The Wise Mothman", art_url: "", colors: []};
    const ezio: Commander = {name: "Ezio Auditore da Firenze", art_url: "", colors: []};
    const rin: Commander = {name: "Rin and Seri, Inseparable", art_url: "", colors: []};
    return [rin, ezio, dogmeat, mothman, omo, olivia, yuma, doctor, aragorn, sauron];
}

const commanders = getFavouriteCommanders();

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