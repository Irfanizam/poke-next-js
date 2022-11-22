import React from 'react';

import Link from "next/link";

const Layout = ({children, title}: any) => {
    return (
        <div>
            <header className="bg-slate-900 py-10 mb-10">
                <Link href="/">
                        <h1 className="text-6xl text-center text-amber-400">{title}</h1>
                </Link>
            </header>

            <main className="container mx-auto">
                {children}
            </main>

            <footer className="flex justify-center items-center mt-10">
               
            </footer>
        </div>
    );
};

export default Layout;
