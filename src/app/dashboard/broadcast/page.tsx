"use client"
import React, {useState} from 'react';
import {SideNav} from "@/components/navbar/sideNav";
import {ResponsiveMenu} from "@/components/navbar/responsiveMenu";
import {MainTitle} from "@/components/section/mainTitle";
import {AvatarMenu} from "@/components/account/avatarMenu";
import {BroadcastSection} from "@/components/section/broadcastSection";
import {BroadcastForm} from "@/components/broadcast/broadcastForm";
import {BroadcastTemplates} from "@/components/broadcast/broadcastTemplates";
import {ChatSection} from "@/components/chat/chatSection";
import {Card} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {DatePicker} from "@/components/broadcast/datePicker";

export function MainContent(props: {
    selectedGroups: any[],
    broadcastSchedule: any,
    broadcastSchedule1: (value: (((prevState: null) => null) | null)) => void,
    showBroadcastModal: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    showGroupModal: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    editingTemplate: (value: (((prevState: null) => null) | null)) => void,
    showDeleteModal: (value: (((prevState: null) => null) | null)) => void
}) {
    return <main className="flex-1 grid grid-cols-[1fr_400px] gap-6 p-4 sm:px-6 sm:py-0">
        {/* BROADCAST SECTION*/}
        <BroadcastSection>
            <BroadcastForm
                selectedGroups={props.selectedGroups}
                broadcastSchedule={props.broadcastSchedule}
                setBroadcastSchedule={props.broadcastSchedule1}
                setShowBroadcastModal={props.showBroadcastModal}
                setShowGroupModal={props.showGroupModal}
            />
            <BroadcastTemplates
                setEditingTemplate={props.editingTemplate}
                setShowDeleteModal={props.showDeleteModal}
            />
        </BroadcastSection>
        {/*CHAT SECTION*/}
        <ChatSection/>
        <div className="grid gap-4">
            <Card className="bg-white text-foreground"/>
        </div>
    </main>;
}

export function DialogSection(props: {
    editingTemplate: any,
    onOpenChange: () => void,
    selectedGroups: any[],
    onCheckedChange: () => void,
    onCheckedChange1: () => void,
    onCheckedChange2: () => void,
    selected: any,
    onChange: (date: Date) => void,
    showBroadcastModal: boolean,
    onClick: () => void,
    showGroupModal: boolean,
    onClick1: () => void,
    showDeleteModal: any,
    onClick2: () => any
}) {
    return <>
        {props.editingTemplate && (
            <Dialog open onOpenChange={props.onOpenChange}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit {props.editingTemplate} Template</DialogTitle>
                        <DialogDescription>Make changes to the template and click save when you're
                            done.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="subject" className="text-right">
                                Subject
                            </Label>
                            <Input id="subject" defaultValue="New Product Launch" className="col-span-3"/>
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="message" className="text-right">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                defaultValue="We are excited to announce the launch of our new product. Check it out today!"
                                className="col-span-3 min-h-[200px]"
                            />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label>Customer Groups</Label>
                            <div className="col-span-3 flex flex-wrap gap-2">
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox checked={props.selectedGroups.includes(1)}
                                              onCheckedChange={props.onCheckedChange}/>
                                    Group 1
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox checked={props.selectedGroups.includes(2)}
                                              onCheckedChange={props.onCheckedChange1}/>
                                    Group 2
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox checked={props.selectedGroups.includes(3)}
                                              onCheckedChange={props.onCheckedChange2}/>
                                    Group 3
                                </Label>
                            </div>
                        </div>
                        <div className="grid items-center grid-cols-2 gap-4">
                            <DatePicker selected={props.selected}
                                        onChange={props.onChange}/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )}
        {props.showBroadcastModal && (
            <Dialog open onOpenChange={props.onOpenChange}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Send Broadcast Message</DialogTitle>
                        <DialogDescription>Review the message and send it to your selected customer
                            groups.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="subject" className="text-right">
                                Subject
                            </Label>
                            <Input id="subject" className="col-span-3"/>
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="message" className="text-right">
                                Message
                            </Label>
                            <Textarea id="message" className="col-span-3 min-h-[200px]"/>
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label>Customer Groups</Label>
                            <div className="col-span-3 flex flex-wrap gap-2">
                                {props.selectedGroups.includes(1) && <Badge>Group 1</Badge>}
                                {props.selectedGroups.includes(2) && <Badge>Group 2</Badge>}
                                {props.selectedGroups.includes(3) && <Badge>Group 3</Badge>}
                            </div>
                        </div>
                        <div className="grid items-center grid-cols-2 gap-4">
                            <Label htmlFor="schedule" className="text-right">
                                Schedule
                            </Label>
                            <DatePicker selected={props.selected}
                                        onChange={props.onChange}/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={props.onOpenChange}>
                            Cancel
                        </Button>
                        <Button type="button" onClick={props.onClick}>
                            Send Broadcast
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )}
        {props.showGroupModal && (
            <Dialog open onOpenChange={props.onOpenChange}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Select Customer Groups</DialogTitle>
                        <DialogDescription>Choose the customer groups you want to send the broadcast
                            to.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label className="text-right">Groups</Label>
                            <div className="col-span-3 flex flex-wrap gap-2">
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox checked={props.selectedGroups.includes(1)}
                                              onCheckedChange={props.onCheckedChange}/>
                                    Group 1
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox checked={props.selectedGroups.includes(2)}
                                              onCheckedChange={props.onCheckedChange1}/>
                                    Group 2
                                </Label>
                                <Label className="flex items-center gap-2 font-normal">
                                    <Checkbox checked={props.selectedGroups.includes(3)}
                                              onCheckedChange={props.onCheckedChange2}/>
                                    Group 3
                                </Label>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={props.onOpenChange}>
                            Cancel
                        </Button>
                        <Button type="button" onClick={props.onClick1}>
                            Send Broadcast
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )}
        {props.showDeleteModal && (
            <Dialog open onOpenChange={props.onOpenChange}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete {props.showDeleteModal} Template</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this template? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={props.onOpenChange}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={props.onClick2}>
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )}
    </>;
}

const Dashboard = () => {
    const [editingTemplate, setEditingTemplate] = useState(null)
    const [showDeleteModal, setShowDeleteModal] = useState(null)
    const [selectedGroups, setSelectedGroups] = useState([])
    const [showGroupModal, setShowGroupModal] = useState(false)
    const [broadcastSchedule, setBroadcastSchedule] = useState(null)
    const [showBroadcastModal, setShowBroadcastModal] = useState(false)


    const handleCloseModal = () => {
        setEditingTemplate(null)
        setShowBroadcastModal(false)
        setShowDeleteModal(null)
        setShowGroupModal(false)
    }
    const handleGroupSelect = (groupId) => {
        if (selectedGroups.includes(groupId)) {
            setSelectedGroups(selectedGroups.filter((id) => id !== groupId))
        } else {
            setSelectedGroups([...selectedGroups, groupId])
        }
    }
    const handleSendBroadcast = () => {
        setShowBroadcastModal(false)
    }
    return (
        <>
            <MainContent selectedGroups={selectedGroups} broadcastSchedule={broadcastSchedule}
                         broadcastSchedule1={setBroadcastSchedule} showBroadcastModal={setShowBroadcastModal}
                         showGroupModal={setShowGroupModal} editingTemplate={setEditingTemplate}
                         showDeleteModal={setShowDeleteModal}/>
            <DialogSection editingTemplate={editingTemplate} onOpenChange={handleCloseModal}
                           selectedGroups={selectedGroups} onCheckedChange={() => handleGroupSelect(1)}
                           onCheckedChange1={() => handleGroupSelect(2)} onCheckedChange2={() => handleGroupSelect(3)}
                           selected={broadcastSchedule} onChange={(date: Date) => setBroadcastSchedule(date)}
                           showBroadcastModal={showBroadcastModal} onClick={handleSendBroadcast}
                           showGroupModal={showGroupModal} onClick1={() => setShowBroadcastModal(true)}
                           showDeleteModal={showDeleteModal} onClick2={() => handleDeleteTemplate(showDeleteModal)}/>
        </>
    )
};

export default Dashboard;