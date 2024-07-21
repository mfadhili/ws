"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export function BroadcastTemplates({setEditingTemplate, setShowDeleteModal}) {


    const handleEditTemplate = (template) => {
        setEditingTemplate(template)
    }
    const handleDeleteTemplate = (template) => {
        setShowDeleteModal(null)
    }

    return <Card>
        <CardHeader>
            <CardTitle>Broadcast Templates</CardTitle>
            <CardDescription>Manage your broadcast message templates.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-4">
                <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-medium">New Product Launch</h4>
                            <p className="text-muted-foreground">Announce a new product to your customers.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm"
                                    onClick={() => handleEditTemplate("new-product-launch")}>
                                Edit
                            </Button>
                            <Button variant="destructive" size="sm"
                                    onClick={() => setShowDeleteModal("new-product-launch")}>
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-medium">Holiday Promotion</h4>
                            <p className="text-muted-foreground">Announce a holiday promotion to your customers.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleEditTemplate("holiday-promotion")}>
                                Edit
                            </Button>
                            <Button variant="destructive" size="sm"
                                    onClick={() => setShowDeleteModal("holiday-promotion")}>
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-medium">Customer Feedback</h4>
                            <p className="text-muted-foreground">Request feedback from your customers.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleEditTemplate("customer-feedback")}>
                                Edit
                            </Button>
                            <Button variant="destructive" size="sm"
                                    onClick={() => setShowDeleteModal("customer-feedback")}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>;
}