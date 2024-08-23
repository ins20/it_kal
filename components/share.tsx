"use client";

import { ShareIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  id: string;
};

export default function Share({ id }: Props) {
  const [isCopied, setIsCopied] = React.useState(false);
  return (
    <>
      <Button
        size={"icon"}
        variant={"outline"}
        onClick={() => {
          if (navigator.canShare()) {
            navigator.share({ url: `https://it-kal.vercel.app/${id}` });
          } else {
            navigator.clipboard.writeText(`https://it-kal.vercel.app/${id}`);
            setIsCopied(true);
          }
        }}
      >
        <ShareIcon className="h-6 w-6" />
      </Button>
      {isCopied && <p className="text-xs">Ссылка скопирована</p>}
    </>
  );
}
