"use client"
import React, {useState} from 'react';
import DataTable from "@/app/dashboard/contacts/data-table";
import {getData} from "@/lib/utilities"
import {columns} from "@/app/dashboard/contacts/columns";
import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import Link from "next/link";

const sample = [
    {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "555-1234",
    company: "Acme Inc.",
    group: "Clients",
},
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-5678",
        company: "Globex Corp.",
        group: "Leads",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "555-9012",
        company: "Stark Industries",
        group: "Clients",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "555-3456",
        company: "Acme Inc.",
        group: "Leads",
    },
    {
        id: 5,
        name: "Michael Brown",
        email: "michael@example.com",
        phone: "555-7890",
        company: "Globex Corp.",
        group: "Clients",
    },
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-1234",
        company: "Acme Inc.",
        group: "Clients",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-5678",
        company: "Globex Corp.",
        group: "Leads",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "555-9012",
        company: "Stark Industries",
        group: "Clients",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "555-3456",
        company: "Acme Inc.",
        group: "Leads",
    },
    {
        id: 5,
        name: "Michael Brown",
        email: "michael@example.com",
        phone: "555-7890",
        company: "Globex Corp.",
        group: "Clients",
    },
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-1234",
        company: "Acme Inc.",
        group: "Clients",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-5678",
        company: "Globex Corp.",
        group: "Leads",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "555-9012",
        company: "Stark Industries",
        group: "Clients",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "555-3456",
        company: "Acme Inc.",
        group: "Leads",
    },
    {
        id: 5,
        name: "Michael Brown",
        email: "michael@example.com",
        phone: "555-7890",
        company: "Globex Corp.",
        group: "Clients",
    },
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-1234",
        company: "Acme Inc.",
        group: "Clients",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-5678",
        company: "Globex Corp.",
        group: "Leads",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "555-9012",
        company: "Stark Industries",
        group: "Clients",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "555-3456",
        company: "Acme Inc.",
        group: "Leads",
    },
    {
        id: 5,
        name: "Michael Brown",
        email: "michael@example.com",
        phone: "555-7890",
        company: "Globex Corp.",
        group: "Clients",
    },
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-1234",
        company: "Acme Inc.",
        group: "Clients",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-5678",
        company: "Globex Corp.",
        group: "Leads",
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "555-9012",
        company: "Stark Industries",
        group: "Clients",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "555-3456",
        company: "Acme Inc.",
        group: "Leads",
    },
    {
        id: 5,
        name: "Michael Brown",
        email: "michael@example.com",
        phone: "555-7890",
        company: "Globex Corp.",
        group: "Clients",
    }
]
const viewCardDummy = {
        id: 0,
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "555-3456",
        company: "Acme Inc.",
        group: "Leads",
    }

 function Page(props) {
    // const data =   await getData()
    const data = sample

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showSaveModal, setShowSaveModal] = useState(false)
     const [selectedContact, setSelectedContact] = useState(viewCardDummy)

     const handleDelete = () => {
         setShowDeleteModal(false)
     }
     const handleSave = () => {
         setShowSaveModal(false)
     }
     const handleContactSelect = (contact) => {
         setSelectedContact(contact)
    }

    return (
        <div className="flex-1 grid grid-cols-[1fr_400px] gap-6 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Contacts Overview</CardTitle>
                        <CardDescription>View and manage your contacts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/*TABLE SECTION*/}
                        <div className="container mx-auto py-2">
                            <DataTable columns={columns} data={data} setViewContact={handleContactSelect}/>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Details</CardTitle>
                        <CardDescription>View and manage the details of a specific contact.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/*VIEW SELECTED CONTACT SECTION*/}
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="contact-name">Name</Label>
                                <Input id="contact-name" type="text"  value={selectedContact.name} readOnly={true}/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-email">Email</Label>
                                <Input id="contact-email" type="email" value={selectedContact.email} readOnly={true}/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-phone">Phone</Label>
                                <Input id="contact-phone" type="tel" value={selectedContact.phone} readOnly={true}/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-company">Company</Label>
                                <Input id="contact-company" type="text" value={selectedContact.company} readOnly={true}/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-notes">Notes</Label>
                                <Textarea id="contact-notes" rows={3} defaultValue="This is a sample contact note." readOnly={true}/>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        {/* VIEWED CONTACT OPERATIONS*/}
                        <div className="flex gap-2">
                            <Button variant="outline">New</Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline">Save</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Save Changes?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Are you sure you want to save the changes to this contact?
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleSave}>Save</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline" color="danger"
                                            onClick={() => setShowDeleteModal(true)}
                                    >
                                        Delete
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete Contact?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Are you sure you want to delete this contact? This action cannot be undone.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <Link
                                href="#"
                                className="ml-auto inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Chat
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Customer Groups</CardTitle>
                        <CardDescription>View and manage the customer groups for this contact.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* SELECTED CONTACT CUSTOMER GROUPS*/}
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <div className="font-medium">VIP Customers</div>
                                <Button variant="outline" size="sm">
                                    View
                                </Button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="font-medium">Frequent Buyers</div>
                                <Button variant="outline" size="sm">
                                    View
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Page;