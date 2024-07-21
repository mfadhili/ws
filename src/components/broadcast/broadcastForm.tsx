"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {useState} from "react";

export function BroadcastForm({selectedGroups, broadcastSchedule, setShowGroupModal, setBroadcastSchedule, setShowBroadcastModal}) {



    const handleSaveTemplate = () => {}

    return <Card>
        <CardHeader>
            <CardTitle>Broadcast Messages</CardTitle>
            <CardDescription>Create and send broadcast messages to your contacts.</CardDescription>
        </CardHeader>
        <CardContent>
            {/*BROAD CAST FORM*/}
            <form className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" type="text" placeholder="Enter subject"/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter message" className="min-h-[200px]"/>
                </div>
                <div className="grid gap-2">
                    <Label>Customer Groups</Label>

                    <div className="flex flex-wrap gap-2">
                        {selectedGroups.includes(1) && <Badge>Group 1</Badge>}
                        {selectedGroups.includes(2) && <Badge>Group 2</Badge>}
                        {selectedGroups.includes(3) && <Badge>Group 3</Badge>}
                    </div>
                    <div className="flex">
                        <Button variant="outline" type={"button"} onClick={() => setShowGroupModal(true)}>
                            Select Groups
                        </Button>
                    </div>

                </div>
                <div className="grid gap-2">
                    <Label htmlFor="schedule">Schedule</Label>
                    <Input
                        id="schedule"
                        type="datetime-local"
                        value={broadcastSchedule}
                        onChange={(e) => setBroadcastSchedule(e.target.value)}
                    />
                </div>
                <div className="flex justify-between">
                    <Button type="button" onClick={handleSaveTemplate}>
                        Save as Template
                    </Button>
                    <Button type="button" onClick={() => setShowBroadcastModal(true)}>
                        Send Broadcast
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card>
;
}