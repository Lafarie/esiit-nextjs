import Image from "next/image";
import { StaticImageData } from "next/image";

interface TitleCard {
  name: string;
  image: StaticImageData;
  right?: boolean;
}

function TitleCardComponent({ titleCards }: { titleCards: TitleCard[] }) {
  return (
    <>
      {titleCards.map((card, index) => (
        <div
          key={index}
          className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
        >
          <div
            className={`flex justify-center sm:justify-${card.right ? "end" : "start"} order-${card.right ? "2" : "1"}  sm:order-${card.right ? "2" : "1"}`}
          >
            <Image
              src={card.image}
              alt={card.name}
              className="w-full h-auto"
              width={700}
              height={300}
            />
          </div>
          <div
            className={`flex items-center justify-center text-center order-1 sm:order-${card.right ? "1" : "2"}`}
          >
            <h1 className="font-urbanist md:text-4xl lg:text-4xl text-xl ">
              {card.name}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default TitleCardComponent;
