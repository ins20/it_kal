import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Header from "@/widgets/header";
import Calendar from "@/widgets/calendar";
import About from "@/widgets/about";

import { useMediaQuery } from "@/hooks/use-media-query";

export default function Home() {
  return (
    <div className="flex flex-col w-11/12 md:w-8/12 p-4 xl:p-0">
      <Header />
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:p-20">
            <CarouselPage>
              <h2 className={"text-white text-lg xl:text-4xl xl:mt-20"}>
                Конец года – отличная возможность подвести итоги, сделать выводы
                и перейти на новый уровень.{" "}
              </h2>
              <h2
                className={
                  "text-white text-lg text-right mt-10 xl:text-4xl xl:mt-20"
                }
              >
                Шаг за шагом, выполняя простые советы и рекомендации экспертов
                компании «Киберпротект», вы сможете обезопасить себя и своих
                близких в цифровой среде.{" "}
              </h2>
              <Image
                src={"/blue-girl.png"}
                alt="blue-girl"
                width={290}
                height={600}
                className="absolute -z-10 bottom-0 right-0 brightness-50 object-cover"
              />
            </CarouselPage>
          </CarouselItem>
          <CarouselItem className="md:p-20">
            <CarouselPage>
              <Calendar />
              <Image
                src={"/red-girl.png"}
                alt="red-girl"
                width={360}
                height={600}
                className="absolute -z-10 bottom-0 right-0 brightness-50 object-cover"
              />
            </CarouselPage>
          </CarouselItem>
          <CarouselItem className="md:p-20">
            <CarouselPage>
              <About />
            </CarouselPage>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="md:flex hidden bg-deepBlue text-white border-none drop-shadow-3xl w-20 h-20" />
        <CarouselNext className="md:flex hidden bg-deepBlue text-white border-none drop-shadow-3xl w-20 h-20" />
      </Carousel>
    </div>
  );
}

function CarouselPage(props: React.PropsWithChildren<{}>) {
  return (
    <div className="w-full p-10 h-[700px] bg-gradient-to-r from-deepBlue to-accentBlue rounded-4xl drop-shadow-sm md:drop-shadow-2xl">
      {props.children}
      <Image
        src="/frozen.png"
        alt="frozen"
        width={1920}
        height={1080}
        className="absolute w-full h-full -z-10 top-0 left-0 rounded-4xl brightness-50 object-cover"
      />
    </div>
  );
}
