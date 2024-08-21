"use client";

import { useRouter } from "next/navigation";

export default function useBack() {
  const router = useRouter();
  return router.back;
}
