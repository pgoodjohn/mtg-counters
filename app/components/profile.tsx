"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type ProfileProps = {
};

const Profile: React.FC<ProfileProps> = () => {
    return (
        <div className="text-center">
            <Image src="https://placeholder.com/350x150" alt="Player Avatar" width={350} height={150} />
        </div>
    )
};

export default Profile;