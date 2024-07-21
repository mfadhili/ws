import Link from "next/link";
import {UsersIcon} from "@/components/svgs/index.d";

export function Logo() {
    return <Link href={"#"}
                 className={"group flex h-9 w-full shrink-0 items-center justify-start gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:text-base p-2"}
                 prefetch={false}
    >
        <UsersIcon className={"h-4 w-4 transition-all group-hover:scale-110"}/>
        <span className="">Whatsapp CRM</span>
    </Link>;
}