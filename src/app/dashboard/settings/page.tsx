import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@radix-ui/react-menu";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CloudIcon, WebhookIcon, ZapIcon} from "lucide-react";
import {Input} from "@/components/ui/input";

function Switch(props: { defaultChecked: boolean, id: string }) {
    return null;
}

function Page(props) {
    return (
        <main className="flex-1 grid grid-cols-[1fr_400px] gap-6 p-4 sm:px-6 sm:py-0">
            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>General Settings</CardTitle>
                        <CardDescription>Manage your general account settings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" defaultValue="Acme CRM"/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="info@acmecrm.com"/>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" defaultValue="********"/>
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit">Save Changes</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Manage your notification settings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-4">
                            <div className="flex items-center justify-between gap-2">
                                <Label htmlFor="email-notifications" className="flex flex-col gap-1">
                                    <span>Email Notifications</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                        Receive email notifications for important updates.
                      </span>
                                </Label>
                                <Switch id="email-notifications" defaultChecked/>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <Label htmlFor="push-notifications" className="flex flex-col gap-1">
                                    <span>Push Notifications</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                        Receive push notifications for real-time updates.
                      </span>
                                </Label>
                                <Switch id="push-notifications"/>
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit">Save Changes</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Security</CardTitle>
                        <CardDescription>Manage your security settings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-4">
                            <div className="flex items-center justify-between gap-2">
                                <Label htmlFor="two-factor-auth" className="flex flex-col gap-1">
                                    <span>Two-Factor Authentication</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                        Add an extra layer of security to your account.
                      </span>
                                </Label>
                                <Switch id="two-factor-auth"/>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <Label htmlFor="session-timeout" className="flex flex-col gap-1">
                                    <span>Session Timeout</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                        Automatically log out after a period of inactivity.
                      </span>
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="15 minutes"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="15">15 minutes</SelectItem>
                                        <SelectItem value="30">30 minutes</SelectItem>
                                        <SelectItem value="60">1 hour</SelectItem>
                                        <SelectItem value="120">2 hours</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit">Save Changes</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4">
                {/*SETTINGS CONTENT*/}
                <Card>
                    <CardHeader>
                        <CardTitle>Integrations</CardTitle>
                        <CardDescription>Connect your CRM with other tools and services.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <CloudIcon className="h-8 w-8"/>
                                    <div>
                                        <h4 className="text-lg font-medium">Salesforce</h4>
                                        <p className="text-muted-foreground">Sync your contacts and deals with
                                            Salesforce.</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                        Connect
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <WebhookIcon className="h-8 w-8"/>
                                    <div>
                                        <h4 className="text-lg font-medium">HubSpot</h4>
                                        <p className="text-muted-foreground">Integrate your CRM with HubSpot's marketing
                                            tools.</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                        Connect
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <ZapIcon className="h-8 w-8"/>
                                    <div>
                                        <h4 className="text-lg font-medium">Zapier</h4>
                                        <p className="text-muted-foreground">Automate your workflows with Zapier
                                            integrations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                        Connect
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Billing</CardTitle>
                        <CardDescription>Manage your subscription and payment details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="plan">Plan</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select plan"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="basic">Basic</SelectItem>
                                        <SelectItem value="pro">Pro</SelectItem>
                                        <SelectItem value="enterprise">Enterprise</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="payment-method">Payment Method</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select payment method"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="visa">Visa</SelectItem>
                                        <SelectItem value="mastercard">Mastercard</SelectItem>
                                        <SelectItem value="amex">American Express</SelectItem>
                                        <SelectItem value="paypal">PayPal</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="card-number">Card Number</Label>
                                <Input id="card-number" type="text" defaultValue/>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

export default Page;