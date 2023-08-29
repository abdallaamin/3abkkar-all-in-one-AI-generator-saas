
"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("9401c0d1-a374-4eff-8fe3-a897a41285a7");
    }, []);

    return null;
};
