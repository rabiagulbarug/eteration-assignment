'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import axios from "axios";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {UiContextProvider} from "@/context/ui-context";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, []);

    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

    return (
        <QueryClientProvider client={new QueryClient()}>
            <UiContextProvider>
                <html lang="en">
                    <body className={inter.className}>{children}</body>
                </html>
            </UiContextProvider>
        </QueryClientProvider>
    );
}
