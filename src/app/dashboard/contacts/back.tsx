"use client"
import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@radix-ui/react-menu";

import {Textarea} from "@/components/ui/textarea";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Input} from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Pagination} from "@/components/ui/pagination";
import {contactSamples} from "@/constants/index.d";

function Page(props) {
    // STATES GO HERE
    const [activeSection, setActiveSection] = useState("contacts")
    const [showContactModal, setShowContactModal] = useState(false)
    const [showImportModal, setShowImportModal] = useState(false)
    const [contacts, setContacts] = useState(contactSamples)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const handleCreateContact = (newContact) => {
        setContacts([...contacts, newContact])
    }
    const handleImportContacts = (importedContacts) => {
        setContacts([...contacts, ...importedContacts])
    }
    const handleDeleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id))
    }
    const handleEditContact = (updatedContact) => {
        setContacts(contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact)))
    }
    const filteredContacts = contacts.filter((contact) =>
        `${contact.name} ${contact.email} ${contact.phone} ${contact.company}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
    )
    const contactsPerPage = 10
    const totalPages = Math.ceil(filteredContacts.length / contactsPerPage)
    const startIndex = (currentPage - 1) * contactsPerPage
    const endIndex = startIndex + contactsPerPage
    const paginatedContacts = filteredContacts.slice(startIndex, endIndex)

    return (
        <main className="flex-1 grid grid-cols-[1fr_400px] gap-6 p-4 sm:px-6 sm:py-0">
            {/*LEFT SIDE TABLE*/}
            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Contacts</CardTitle>
                        <CardDescription>Manage your contacts and their information.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Phone</TableHead>
                                        <TableHead>Company</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {paginatedContacts.map((contact) => (
                                        <TableRow key={contact.id}>
                                            <TableCell>{contact.name}</TableCell>
                                            <TableCell>{contact.email}</TableCell>
                                            <TableCell>{contact.phone}</TableCell>
                                            <TableCell>{contact.company}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="outline" size="sm" onClick={() => handleEditContact(contact)}>
                                                    Edit
                                                </Button>
                                                <Button variant="destructive" size="sm" onClick={() => handleDeleteContact(contact.id)}>
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                        </div>
                    </CardContent>
                </Card>
                {showContactModal && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Create Contact</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create Contact</DialogTitle>
                                <DialogDescription>Add a new contact to your CRM.</DialogDescription>
                            </DialogHeader>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    const formData = new FormData(e.target)
                                    const newContact = {
                                        id: contacts.length + 1,
                                        name: formData.get("name"),
                                        email: formData.get("email"),
                                        phone: formData.get("phone"),
                                        company: formData.get("company"),
                                    }
                                    handleCreateContact(newContact)
                                    setShowContactModal(false)
                                }}
                            >
                                <div className="grid gap-4 py-4">
                                    <div className="grid items-center grid-cols-4 gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input id="name" name="name" className="col-span-3" />
                                    </div>
                                    <div className="grid items-center grid-cols-4 gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Email
                                        </Label>
                                        <Input id="email" name="email" className="col-span-3" />
                                    </div>
                                    <div className="grid items-center grid-cols-4 gap-4">
                                        <Label htmlFor="phone" className="text-right">
                                            Phone
                                        </Label>
                                        <Input id="phone" name="phone" className="col-span-3" />
                                    </div>
                                    <div className="grid items-center grid-cols-4 gap-4">
                                        <Label htmlFor="company" className="text-right">
                                            Company
                                        </Label>
                                        <Input id="company" name="company" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter />
                            </form>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
            {/* RIGHT SIDE FORM*/}
            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Details</CardTitle>
                        <CardDescription>View and manage the details of a specific contact.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="contact-name">Name</Label>
                                <Input id="contact-name" type="text" defaultValue="John Doe"/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-email">Email</Label>
                                <Input id="contact-email" type="email" defaultValue="johndoe@example.com"/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-phone">Phone</Label>
                                <Input id="contact-phone" type="tel" defaultValue="555-1234"/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-company">Company</Label>
                                <Input id="contact-company" type="text" defaultValue="Acme Inc."/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contact-notes">Notes</Label>
                                <Textarea id="contact-notes" rows={3} defaultValue="This is a sample contact note."/>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-2">
                            <Button variant="outline">Save</Button>
                            <Button variant="outline" color="danger">
                                Delete
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}

export default Page;