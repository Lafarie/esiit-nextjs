import Image from "next/image";
import {StaticImageData} from "next/image";
import pubg from "./pubgTeam";
import archi from "./archi.jpg";
import "./index.scss";
import Members from "../../components/teams/titleTeam/members";

export const metadata = {
  title: "ESIIT - Teams",
};

// interface Member {
//   name: string;
//   image: StaticImageData;
// }

// const memberList: Member[] = [
//   { name: 'John Doe', image: '/archi.jpg' },
//   { name: 'Jane Smith', image: '/archi.jpg' },
// ];

const Teams: React.FC = () => {
  return (
    <>
      <section>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Image
            src=""
            alt="meet our team"
            className="h-96 w-screen bg-slate-300"
            width={500} // specify the width
            height={300}
          />
          <h1 className="absolute text-center text-4xl text-white">
            Meet Our Teams
          </h1>
        </div>
        <Members members={pubg} />
      </section>
      <section>
        <h1 className="font-permanent-marker text-center text-4xl md:text-4xl lg:text-6xl">
          Official Teams
        </h1>
        <div className="grid w-full grid-flow-row bg-slate-600 sm:grid-flow-col">
          <div className="grid grid-cols-1 items-center justify-between sm:grid-cols-2">
            <div className="m-5 flex justify-center sm:justify-end">
              <Image
                src={archi} // specify the correct src
                alt="official team"
                className="w-150 h-96 bg-cyan-500"
                width={500} // specify the width
                height={300} // specify the height
              />
            </div>
            <div className="flex items-center justify-center text-center">
              <h1 className="font-urbanist text-4xl md:text-4xl lg:text-4xl">
                PUBG OFFICIAL TEAM
              </h1>
            </div>
          </div>
        </div>
        
      </section>

      <section>
        <div className="grid w-full grid-flow-row bg-slate-600 sm:grid-flow-col">
          <div className="grid grid-cols-1 items-center justify-between sm:grid-cols-2">
            <div className="flex items-center justify-center text-center">
              <Image
                src=""
                alt="official team"
                className="w-150 h-96 bg-cyan-500"
                width={500} // specify the width
                height={300}
              />
            </div>
            <div className="flex items-start justify-center text-center">
              <h1 className="font-urbanist text-4xl md:text-4xl lg:text-4xl">PUBG OFFICIAL TEAM</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-red-400">
          <div className="m-1 grid grid-cols-2  items-center justify-center gap-1 sm:flex">
            <div className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                className="w-full"
                src={archi}
                alt="Sunset in the mountains"
                width={500} // specify the width
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  The Coldest Sunset
                </div>
              </div>
            </div>
            <div className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                className="w-full"
                src={archi}
                alt="Sunset in the mountains"
                width={500} // specify the width
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  The Coldest Sunset
                </div>
              </div>
            </div>
            <div className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                className="w-full"
                src={archi}
                alt="Sunset in the mountains"
                width={500} // specify the width
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  The Coldest Sunset
                </div>
              </div>
            </div>
            <div className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                className="w-full"
                src={archi}
                alt="Sunset in the mountains"
                width={500} // specify the width
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  The Coldest Sunset
                </div>
              </div>
            </div>
            <div className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                className="w-full"
                src={archi}
                alt="Sunset in the mountains"
                width={500} // specify the width
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  The Coldest Sunset
                </div>
              </div>
            </div>
            <div className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                className="w-full"
                src={archi}
                alt="Sunset in the mountains"
                width={500} // specify the width
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  The Coldest Sunset
                </div>
              </div>
            </div>
            <div className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                className="w-full"
                src={archi}
                alt="Sunset in the mountains"
                width={500} // specify the width
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  The Coldest Sunset
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
