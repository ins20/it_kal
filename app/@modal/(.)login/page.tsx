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
import { Login } from "@/features/user/login";

export default function page() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Dialog open defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Авторизация</DialogTitle>
        </DialogHeader>
        <Login />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Авторизация</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <Login />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
