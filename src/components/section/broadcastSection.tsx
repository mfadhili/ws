import {BroadcastForm} from "@/components/broadcast/broadcastForm";
import {BroadcastTemplates} from "@/components/broadcast/broadcastTemplates";

export function BroadcastSection({children}) {
    return <div className="grid gap-4">
        {children}
    </div>;
}