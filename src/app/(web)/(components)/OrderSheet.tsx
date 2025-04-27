'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState, useEffect } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export type OrderItem = {
  food: { _id: string; foodName: string };
  quantity: number;
};

export const OrderSheet = ({ setIsSheetOpen }: any) => {
  const [foodOrderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingOrder = localStorage.getItem("orderItems");
      setOrderItems(existingOrder ? JSON.parse(existingOrder) : []);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("orderItems", JSON.stringify(foodOrderItems));
    }
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

  const closeSheet = () => {
    setIsSheetOpen(true);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded-full bg-white flex items-center justify-center p-3 cursor-pointer">
          <img className="w-[16px] h-[16px]" src="/shopping-cart.png" alt="Shopping Cart" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="text-white flex items-center gap-3">
          <PiShoppingCartSimpleBold className="w-5 h-5" />
          Order detail
        </SheetTitle>

        <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Cart</TabsTrigger>
        <TabsTrigger value="password">Order</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className="text-[1.2rem]">My cart</CardTitle>
          </CardHeader>
          <CardContent className="">
            {/* <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div> */}
            <div className="flex space-x-4">
              <div className="w-[14vh] h-[14vh] rounded-2xl border-[1px] border-red-300"></div>
              <div className="flex justify-between">
               <div className="flex flex-col ">
                 <p className="text-[#EF4444] font-semibold text-md">Sunshine Stackers </p>
                 <p className="text-sm w-[13vw]">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
               </div>
               <div className="rounded-full justify-center items-center w-[3vh] h-[3vh] flex border-[1px] border-[#EF4444] p-2">
                 <p className="text-[1.2rem] text-[#EF4444]">x</p>
               </div>
              </div>

              {/* <div className="flex justify-between">
                <p>too shirhg</p>
                <p>$12.99</p>
              </div> */}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-white rounded-full border-[#EF4444] text-[#EF4444] w-full border-[1px]">Add food</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Order history</CardTitle>
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
};

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"