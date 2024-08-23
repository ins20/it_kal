"use client";

import { checkRead } from "@/actions";
import { Button } from "@/components/ui/button";
import db from "@/db.json";
import { cn, isAvailable } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

export default function page({ params }: { params: { id: string } }) {
  const data = db[+params.id - 1];
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      checkRead(userId, +params.id - 1);
    }
  }, []);
  return (
    <div className="text-white h-full md:w-1/2 rounded-4xl drop-shadow-2xl p-10 backdrop-blur-md">
      {isAvailable(+params.id) ? (
        <div className="h-5/6 overflow-y-auto">
          <h1 className={cn("text-left text-xl", "md:text-3xl md:mt-20")}>
            {data.title}
          </h1>
          <p className={cn("text-right text-xl mt-10", "md:text-3xl")}>
            {data.description}
          </p>
        </div>
      ) : (
        <p
          className={cn(
            "text-white mt-36 text-5xl opacity-20 text-center",
            "md:text-9xl"
          )}
        >
          {+params.id} день не доступен
        </p>
      )}

      <Button asChild variant="link" className="p-0 text-white">
        <Link href="/">Главная</Link>
      </Button>
    </div>
  );
}
