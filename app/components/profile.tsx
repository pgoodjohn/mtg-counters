"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type ProfileProps = {
};

const Profile: React.FC<ProfileProps> = () => {
    return (
        <div className="text-center">
            <Image src="https://cards.scryfall.io/art_crop/front/e/5/e5d1c814-4c22-4917-95ae-dffaf491db32.jpg?1717644342" alt="Player Avatar" width={350} height={150} sizes="(max-width: 350px), (max-height: 150px)" />
        </div>
    )
};

export default Profile;