
import { cn } from "@/lib/utils";
import Image from "next/image";

type props = {
  title: string;
  description: string;
  image: string;
  site: string;
};

function AboutProject(props: props) {
  return (
    <div className="text-white md:w-96 xl:h-full">
      <Image
        className={"rounded-2xl"}
        src={props.image}
        alt={props.title}
        width={1920}
        height={1080}
      />
      <br />
      <h2>{props.title}</h2>
      <br />
      <p className="text-sm text-secondaryLightBlue">{props.description}</p>
    </div>
  );
}

export default function About() {
  return (
    <div
       id="scrollAbout"
      className={cn(
        "h-5/6 pr-2 xl:pr-0 overflow-y-scroll xl:overflow-y-auto space-y-10 mt-5",
        "md:h-full md:space-y-0 md:h-min md:h-full md:flex items-center justify-around"
      )}
    >
      <AboutProject
        title="Кибер Забота – образовательный проект по цифровой гигиене"
        image="/cybercare.png"
        site="https://cyber-care.ru/"
        description="В 2021 году компания Киберпротект разработала и запустила бесплатный всероссийский проект по обучению детей и взрослых основам безопасного поведения в Интернете – Кибер Забота.В рамках проекта было разработано два бесплатных образовательных курса, дающих представление учителям и школьникам о современных киберугрозах и основных способах противодействия им, принципах безопасного общения и поведения в сети, безопасного хранения данных."
      />
      <AboutProject
        title="Киберпротект – российский разработчик ПО"
        image="/cyberprotect.png"
        site="https://cyberprotect.ru/"
        description="«Киберпротект» — российский разработчик систем резервного копирования, защиты от утечки данных (DLP) и инфраструктурного программного обеспечения. Решениями компании пользуются организации любого масштаба, которые заинтересованы в надежной киберзащите, сохранности данных и работоспособности ИТ-инфраструктуры. "
      />
    </div>
  );
}
