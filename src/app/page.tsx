"use client"
import {SideNav} from "@/components/navbar/sideNav";
import {ChatSection} from "@/components/chat/chatSection";
import {ResponsiveMenu} from "@/components/navbar/responsiveMenu";
import {AvatarMenu} from "@/components/account/avatarMenu";
import {MainTitle} from "@/components/section/mainTitle";
import {BroadcastSection} from "@/components/section/broadcastSection";

import {Card} from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {useState} from "react";
import {BroadcastForm} from "@/components/broadcast/broadcastForm";
import {BroadcastTemplates} from "@/components/broadcast/broadcastTemplates";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

export default function Home() {
    return (
        <div>
            Home page
        </div>
    )
}

