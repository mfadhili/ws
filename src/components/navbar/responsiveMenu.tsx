import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {AirplayIcon, BriefcaseIcon, ContactIcon, MenuIcon, SettingsIcon, UsersIcon} from "@/components/svgs/index.d";
import Link from "next/link";

export function ResponsiveMenu() {
    return <>
        {/* MENU FOR SM VIEW*/}
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <MenuIcon className="h-5 w-5"/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href="/"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        prefetch={false}
                    >
                        <UsersIcon className="h-5 w-5 transition-all group-hover:scale-110"/>
                        <span className="sr-only">Acme CRM</span>
                    </Link>
                    <Link href="contacts" className="flex items-center gap-4 px-2.5 text-foreground"
                          prefetch={false}>
                        <ContactIcon className="h-5 w-5"/>
                        Contacts
                    </Link>
                    <Link
                        href="deals"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <BriefcaseIcon className="h-5 w-5"/>
                        Deals
                    </Link>
                    <Link
                        href="settings"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <SettingsIcon className="h-5 w-5"/>
                        Settings
                    </Link>
                    <Link
                        href="broadcast"
                        className="flex items-center gap-4 px-2.5 bg-accent text-accent-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <AirplayIcon className="h-5 w-5"/>
                        Broadcast
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    </>;
}