"use client";

import { ShareIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

type Props = {
  id: string;
};

export default function Share({ id }: Props) {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      userAgent
    );
  return (
    <>
      <Button
        size={isMobile ? "icon" : "default"}
        variant={isMobile ? "outline" : "link"}
        onClick={() => {
          if (isMobile) {
            navigator.share({ url: `https://it-kal.vercel.app/${id}` });
          } else {
            navigator.clipboard.writeText(`https://it-kal.vercel.app/${id}`);
            toast({
              title: "Ссылка скопирована",
            });
          }
        }}
      >
        {isMobile ? <ShareIcon className="h-6 w-6" /> : "Cкопировать"}
      </Button>
    </>
  );
}
