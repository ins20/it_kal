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
    <div className="flex flex-col w-11/12 md:w-8/12 p-4 md:p-0">
      <Header />
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:p-20">
            <CarouselPage>
              <h2 className={"text-white text-base xl:text-4xl xl:mt-20"}>
                Конец года – отличная возможность подвести итоги, сделать выводы
                и перейти на новый уровень.{" "}
              </h2>
              <h2
                className={
                  "text-white text-base text-center mt-10 xl:text-4xl xl:mt-20"
                }
              >
                Шаг за шагом, выполняя простые советы и рекомендации экспертов
                компании «Киберпротект», вы сможете обезопасить себя и своих
                близких в цифровой среде.{" "}
              </h2>
              <p className="text-white xl:text-2xl mt-10">кибербезопасный новый год</p>
              <p className="text-white xl:text-2xl text-center mt-10">
                31 шаг на пути к вашей цифровой безопасности
              </p>
              <Image
                src={"/santa.png"}
                alt="santa"
                width={1325}
                height={1416}
                className="absolute w-1/2 h-[70%] object-cover -z-10 brightness-50 bottom-0 right-10"
              />
            </CarouselPage>
          </CarouselItem>
          <CarouselItem className="md:p-20">
            <CarouselPage>
              <Image
                src={"/snowman.png"}
                alt="snowman"
                width={1680}
                height={1380}
                className="absolute w-1/2 h-[70%] object-cover -z-10 brightness-50 bottom-0 right-10"
              />
              <Calendar />
            </CarouselPage>
          </CarouselItem>
          <CarouselItem className="md:p-20">
            <CarouselPage>
              <About />
            </CarouselPage>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="flex bg-deepBlue text-white border-none drop-shadow-3xl w-16 h-16 -left-6 " />
        <CarouselNext className="flex bg-deepBlue text-white border-none drop-shadow-3xl w-16 h-16 -right-6" />
      </Carousel>
    </div>
  );
}

function CarouselPage(props: React.PropsWithChildren<{}>) {
  return (
    <div className="relative w-full p-10 h-[500px] md:h-[700px] bg-gradient-to-r from-deepBlue to-accentBlue rounded-4xl drop-shadow-sm md:drop-shadow-2xl">
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
