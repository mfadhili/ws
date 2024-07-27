import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Logo} from "@/components/navbar/logo";
import Link from "next/link";
import {AirplayIcon, BriefcaseIcon, ContactIcon, SettingsIcon} from "@/components/svgs/index.d";

export function SideNav() {
    return <aside className={"fixed inset-y-0 left-0 z-10 flex w-64 flex-col border-r bg-background sm:flex"}>
        <nav className={"flex flex-col items-start gap-4 px-6 py-5"}>
            <TooltipProvider>
                <Logo/>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="contacts"
                            className="flex w-full items-center justify-start gap-3 rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8"
                            prefetch={false}
                        >
                            <ContactIcon className="h-5 w-5"/>
                            <span>Contacts</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Contacts</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="deals"
                            className="flex w-full items-center justify-start gap-3 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8"
                            prefetch={false}
                        >
                            <BriefcaseIcon className="h-5 w-5"/>
                            <span>Deals</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Deals</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="settings"
                            className="flex w-full items-center justify-start gap-3 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8"
                            prefetch={false}
                        >
                            <SettingsIcon className="h-5 w-5"/>
                            <span>Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="broadcast"
                            className="flex w-full items-center justify-start gap-3 rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8"
                            prefetch={false}
                        >
                            <AirplayIcon className="h-5 w-5"/>
                            <span>Broadcast</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Broadcast</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>
    </aside>;
}