'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import axios from "axios";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {UiContextProvider} from "@/context/ui-context";
import {Header} from "@/components/header/header";
import {Products} from "@/components/products/products";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, []);

    return (
        <QueryClientProvider client={new QueryClient()}>
            <UiContextProvider>
                <html lang="en">
                <body className={inter.className}>
                <div className='flex flex-col'>
                    <Header/>
                    <div className="p-5 lg:p-0">
                        {children}
                    </div>
                </div>
                </body>
                </html>
            </UiContextProvider>
        </QueryClientProvider>
    );
}
