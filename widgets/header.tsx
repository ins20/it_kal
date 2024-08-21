"use client";

import useSWR from "swr";

import { Button } from "@/components/ui/button";
import Unsubscribe from "@/features/user/unsubscribe";
import { api } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Header() {
  const user = useSWR(
    "/users/me",
    async () => api.get(`/users/${localStorage.getItem("user_id")}/`),
    {
      shouldRetryOnError: false,
    }
  );
  return (
    <header className="flex xl:flex-row flex-col items-center justify-between">
      <Image src={"/logo.svg"} alt="logo" width={340} height={200} />

      {user.data?.data ? (
        <div className="text-white">
          {user.data.data.email}
          <Unsubscribe />
        </div>
      ) : user.isLoading ? (
        <div className="flex gap-2">
          <Skeleton className="w-28 h-4" />
          <Skeleton className="w-28 h-4" />
        </div>
      ) : (
        <nav className="flex">
          <Button asChild variant={"link"} className="text-white">
            <Link href={"/login"}>Авторизоваться</Link>
          </Button>
          <Button asChild variant={"link"} className="text-white">
            <Link href={"/subscribe"}>Подписаться</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
