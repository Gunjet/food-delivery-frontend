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
            
    <Tabs className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="cart">Cart</TabsTrigger>
        <TabsTrigger value="order">Order</TabsTrigger>
      </TabsList>
      <TabsContent value="cart">
        <Card>
          <CardHeader>
            <CardTitle>My cart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
          <CardFooter>
            <Button>Add Food</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="order">
        <Card>
          <CardHeader>
            <CardTitle>Order history</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">

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
