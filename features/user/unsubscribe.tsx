"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { useSWRConfig } from "swr";

export default function Unsubscribe() {
  const unsubscribe = useSWRConfig();
  async function onClick() {
    try {
      await unsubscribe.mutate(
        "/users/me",
        api.patch(`/users/${localStorage.getItem("user_id")}/unsubscribe/`)
      );
    } catch (error) {}
  }
  return (
    <Button variant={"link"} onClick={onClick} className="text-white">
      Отписаться
    </Button>
  );
}
