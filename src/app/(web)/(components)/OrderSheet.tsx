'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { useState, useEffect } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export type OrderItem = {
    food: { _id: string, foodName: string }; 
    quantity: number;
};

export const OrderSheet = ({setIsSheetOpen}:any) => {
    const existingOrder = localStorage.getItem('orderItems');
    const [foodOrderItems, setOrderItems] = useState<OrderItem[]>(existingOrder ? JSON.parse(existingOrder) : []);

    useEffect(() => {
        localStorage.setItem('orderItems', JSON.stringify(foodOrderItems));
    }, [foodOrderItems]);

    const onMinusOrderItem = (idx: number) => {
        const newOrderItems = [...foodOrderItems];
        if (newOrderItems[idx].quantity > 1) {
            newOrderItems[idx].quantity -= 1;
            setOrderItems(newOrderItems);
        }
    };

    const onPlusOrderItem = (idx: number) => {
        const newOrderItems = [...foodOrderItems];
        newOrderItems[idx].quantity += 1;
        setOrderItems(newOrderItems);
    };
    const closeSheet=()=>{
        setIsSheetOpen(true)
    }

    return (
        <Sheet>
            <SheetTrigger>
            <div className="rounded-full bg-white flex items-center justify-center p-3 cursor-pointer" >
                    <img className="w-[16px] h-[16px]" src="/shopping-cart.png" alt="Shopping Cart" />
                </div>
            </SheetTrigger>
        <SheetContent>
        <SheetTitle className="text-white flex items-center gap-3">
            <PiShoppingCartSimpleBold className="w-5 h-5"/>
            Order detail
        </SheetTitle>
            
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
            <SheetClose>
                <div>Close</div>
            </SheetClose>
        </SheetContent>
      </Sheet>
          
    );
}
