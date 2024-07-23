"use client"
import React, {useState} from 'react';
import {SideNav} from "@/components/navbar/sideNav";
import {ResponsiveMenu} from "@/components/navbar/responsiveMenu";
import {MainTitle} from "@/components/section/mainTitle";
import {AvatarMenu} from "@/components/account/avatarMenu";

function DashboardLayout({children}: {children: React.ReactNode}) {


    return (
        <div className={"flex min-h-screen w-full"}>
            <SideNav/>
            <div className="flex flex-1 flex-col  ml-64">
                <header
                    className={"sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-2"}
                >
                    <ResponsiveMenu/>
                    {/* HEADER TITLE AND SEARCH CONTACTS AND ACCOUNT OPTIONS*/}
                    <MainTitle/>
                    <AvatarMenu/>
                </header>
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;