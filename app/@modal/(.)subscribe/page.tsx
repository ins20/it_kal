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

import { Subscribe } from "@/features/user/subscribe";

export default function page() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Dialog open defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Подписаться</DialogTitle>
        </DialogHeader>
        <Subscribe />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Подписаться</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <Subscribe />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
