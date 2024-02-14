import { Inter } from "next/font/google";
import "./globals.css";
import UserLogedProvider from "./context/UserLoged";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Spottunes",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <UserLogedProvider>
                <body className={inter.className}>{children}</body>
            </UserLogedProvider>
        </html>
    );

}
