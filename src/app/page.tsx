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
              <main className="flex-1 grid grid-cols-[1fr_400px] gap-6 p-4 sm:px-6 sm:py-0">
                  {/* BROADCAST SECTION*/}
                  <BroadcastSection>
                      <BroadcastForm
                          selectedGroups={selectedGroups}
                          broadcastSchedule={broadcastSchedule}
                          setBroadcastSchedule={setBroadcastSchedule}
                          setShowBroadcastModal={setShowBroadcastModal}
                          setShowGroupModal={setShowGroupModal}
                      />
                      <BroadcastTemplates
                          setEditingTemplate={setEditingTemplate}
                          setShowDeleteModal={setShowDeleteModal}
                      />
                  </BroadcastSection>
                  {/*CHAT SECTION*/}
                  <ChatSection/>
                  <div className="grid gap-4">
                      <Card className="bg-white text-foreground"/>
                  </div>
              </main>
          </div>
          {editingTemplate && (
              <Dialog open onOpenChange={handleCloseModal}>
                  <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle>Edit {editingTemplate} Template</DialogTitle>
                          <DialogDescription>Make changes to the template and click save when you're done.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                          <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="subject" className="text-right">
                                  Subject
                              </Label>
                              <Input id="subject" defaultValue="New Product Launch" className="col-span-3" />
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
                                      <Checkbox checked={selectedGroups.includes(1)} onCheckedChange={() => handleGroupSelect(1)} />
                                      Group 1
                                  </Label>
                                  <Label className="flex items-center gap-2 font-normal">
                                      <Checkbox checked={selectedGroups.includes(2)} onCheckedChange={() => handleGroupSelect(2)} />
                                      Group 2
                                  </Label>
                                  <Label className="flex items-center gap-2 font-normal">
                                      <Checkbox checked={selectedGroups.includes(3)} onCheckedChange={() => handleGroupSelect(3)} />
                                      Group 3
                                  </Label>
                              </div>
                          </div>
                          <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="schedule" className="text-right">
                                  Schedule
                              </Label>
                              <Input
                                  id="schedule"
                                  type="datetime-local"
                                  defaultValue={new Date().toISOString().slice(0, 16)}
                                  className="col-span-3"
                              />
                          </div>
                      </div>
                      <DialogFooter>
                          <Button type="submit">Save Changes</Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>
          )}
          {showBroadcastModal && (
              <Dialog open onOpenChange={handleCloseModal}>
                  <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle>Send Broadcast Message</DialogTitle>
                          <DialogDescription>Review the message and send it to your selected customer groups.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                          <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="subject" className="text-right">
                                  Subject
                              </Label>
                              <Input id="subject" className="col-span-3" />
                          </div>
                          <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="message" className="text-right">
                                  Message
                              </Label>
                              <Textarea id="message" className="col-span-3 min-h-[200px]" />
                          </div>
                          <div className="grid items-center grid-cols-4 gap-4">
                              <Label>Customer Groups</Label>
                              <div className="col-span-3 flex flex-wrap gap-2">
                                  {selectedGroups.includes(1) && <Badge>Group 1</Badge>}
                                  {selectedGroups.includes(2) && <Badge>Group 2</Badge>}
                                  {selectedGroups.includes(3) && <Badge>Group 3</Badge>}
                              </div>
                          </div>
                          <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="schedule" className="text-right">
                                  Schedule
                              </Label>
                              <Input
                                  id="schedule"
                                  type="datetime-local"
                                  value={broadcastSchedule}
                                  onChange={(e) => setBroadcastSchedule(e.target.value)}
                                  className="col-span-3"
                              />
                          </div>
                      </div>
                      <DialogFooter>
                          <Button variant="outline" onClick={handleCloseModal}>
                              Cancel
                          </Button>
                          <Button type="button" onClick={handleSendBroadcast}>
                              Send Broadcast
                          </Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>
          )}
          {showGroupModal && (
              <Dialog open onOpenChange={handleCloseModal}>
                  <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle>Select Customer Groups</DialogTitle>
                          <DialogDescription>Choose the customer groups you want to send the broadcast to.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                          <div className="grid items-center grid-cols-4 gap-4">
                              <Label className="text-right">Groups</Label>
                              <div className="col-span-3 flex flex-wrap gap-2">
                                  <Label className="flex items-center gap-2 font-normal">
                                      <Checkbox checked={selectedGroups.includes(1)} onCheckedChange={() => handleGroupSelect(1)} />
                                      Group 1
                                  </Label>
                                  <Label className="flex items-center gap-2 font-normal">
                                      <Checkbox checked={selectedGroups.includes(2)} onCheckedChange={() => handleGroupSelect(2)} />
                                      Group 2
                                  </Label>
                                  <Label className="flex items-center gap-2 font-normal">
                                      <Checkbox checked={selectedGroups.includes(3)} onCheckedChange={() => handleGroupSelect(3)} />
                                      Group 3
                                  </Label>
                              </div>
                          </div>
                      </div>
                      <DialogFooter>
                          <Button variant="outline" onClick={handleCloseModal}>
                              Cancel
                          </Button>
                          <Button type="button" onClick={() => setShowBroadcastModal(true)}>
                              Send Broadcast
                          </Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>
          )}
          {showDeleteModal && (
              <Dialog open onOpenChange={handleCloseModal}>
                  <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle>Delete {showDeleteModal} Template</DialogTitle>
                          <DialogDescription>
                              Are you sure you want to delete this template? This action cannot be undone.
                          </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                          <Button variant="outline" onClick={handleCloseModal}>
                              Cancel
                          </Button>
                          <Button variant="destructive" onClick={() => handleDeleteTemplate(showDeleteModal)}>
                              Delete
                          </Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>
          )}
      </div>

  );
}

