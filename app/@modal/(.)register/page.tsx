"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Register } from "@/features/user/register";

export default function page() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Dialog open defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Регистрация</DialogTitle>
        </DialogHeader>
        <Register />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Регистрация</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <Register />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
