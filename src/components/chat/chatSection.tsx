import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SendIcon} from "@/components/svgs/index.d";

export function ChatSection() {
    return <div className="grid gap-4">
        <Card>
            <CardHeader>
                <CardTitle>Chat</CardTitle>
                <CardDescription>Communicate with your customers in real-time.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="/placeholder-user.jpg"/>
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="font-medium">Olivia Martin</div>
                            <div className="text-xs text-muted-foreground">2:39pm</div>
                        </div>
                        <div>
                            <p>Hi there! I have a question about your product.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="/placeholder-user.jpg"/>
                        <AvatarFallback>LJ</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="font-medium">Liam Johnson</div>
                            <div className="text-xs text-muted-foreground">2:40pm</div>
                        </div>
                        <div>
                            <p>Sure, how can I help you?</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="/placeholder-user.jpg"/>
                        <AvatarFallback>EB</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="font-medium">Emma Brown</div>
                            <div className="text-xs text-muted-foreground">2:41pm</div>
                        </div>
                        <div>
                            <p>Great, I'd like to learn more about your pricing.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-auto">
                    <Input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full rounded-lg bg-background pl-4 pr-12"
                    />
                    <Button variant="ghost" size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2">
                        <SendIcon className="h-4 w-4"/>
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>;
}