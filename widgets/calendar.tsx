import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import db from "@/db.json";

import { cn, isAvailable } from "@/lib/utils";
import Link from "next/link";

export default function Calendar() {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center",
        "xl:justify-start xl:gap-10 xl:w-10/12 xl:mt-16",
        "lg:w-full lg:gap-10 lg:mt-10",
        "md:w-full md:justify-start md:gap-5 md:mt-0",
        "w-full gap-1"
      )}
    >
      {db.map((item, index) =>
        isAvailable(index + 1) ? (
          <div key={item.title}>
            <div className="md:hidden block">
              <Popover>
                <PopoverTrigger
                  className={cn(
                    "rounded-full border-2 border-white text-white",
                    "w-12 h-12"
                  )}
                >
                  {index + 1}
                </PopoverTrigger>
                <PopoverContent className="bg-secondaryUltraLightGrey">
                  <h3 className="text-deepBlue">{item.title}</h3>
                  <br />
                  <p className="text-sm">
                    {item.description.substring(0, 200) + "..."}
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href={String(index + 1)}>Подробнее</Link>
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
            <div className="md:block hidden">
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger
                  className={cn(
                    "flex items-center justify-center w-20 h-20",
                    "rounded-full border-2 border-white text-white hover:bg-deepBlue"
                  )}
                >
                  {index + 1}
                </HoverCardTrigger>
                <HoverCardContent className="bg-secondaryUltraLightGrey">
                  <h3 className="text-deepBlue">{item.title}</h3>
                  <br />
                  <p className="text-sm">
                    {item.description.substring(0, 200) + "..."}
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href={String(index + 1)}>Подробнее</Link>
                  </Button>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        ) : (
          <div
            key={item.title}
            className={cn(
              "cursor-not-allowed rounded-full border-2 border-red text-white flex items-center justify-center",
              "md:w-20 md:h-20 w-12 h-12"
            )}
          >
            {index + 1}
          </div>
        )
      )}
    </div>
  );
}
