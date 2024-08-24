"use client";

import { Button } from "@/components/ui/button";

import { api } from "@/lib/api";
import useSWR, { useSWRConfig } from "swr";

export function Subscribe() {
  const user = useSWR(
    "/users/me",
    async () => api.get(`/users/${localStorage.getItem("user_id")}/`),
    {
      shouldRetryOnError: false,
    }
  );

  const subscribe = useSWRConfig();

  async function onClick() {
    try {
      await subscribe.mutate(
        `/users/me`,
        api.patch(`/users/${user.data?.data?.oid || ""}/subscribe/`)
      );
    } catch (error: any) {
      const message = error?.response?.data.detail;
    }
  }
  return (
    <Button variant={"link"} onClick={onClick} className="text-white">
      Подписаться
    </Button>
  );
}
