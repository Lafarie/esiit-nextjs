import Image from "next/image";
import { StaticImageData } from "next/image";
import pubg from "./pubgTeam";
import image from "../../assets/images/event-bg.jpg";
import "./index.scss";
import Members from "../../components/teams/members";
import TitleCardComponent from "../../components/teams/titleCard";
export const metadata = {
  title: "ESIIT - Teams",
};

const Teams: React.FC = () => {
  return (
    <>
      <section className="bg-red-600">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Image
            src=""
            alt="meet our team"
            className="h-96 w-screen bg-slate-300"
            width={500}
            height={300}
          />
          <h1 className="absolute text-center text-4xl text-white">
            Meet Our Teams
          </h1>
        </div>
      </section>
      <section>
        <h1 className="font-permanent-marker text-center text-4xl md:text-4xl lg:text-6xl">
          Official Teams
        </h1>
        <TitleCardComponent titleCards={[{ name: "PUBG OFFICIAL TEAM", image: image, right: true }]} />
        <Members members={pubg} />
        <TitleCardComponent titleCards={[{ name: "VALORANT OFFICIAL TEAM", image: image, right: false }]} />
        <Members members={pubg} />
        <TitleCardComponent titleCards={[{ name: "COD OFFICIAL TEAM", image: image, right: true }]} />
        <Members members={pubg} />
      </section>
    </>
  );
};

export default Teams;