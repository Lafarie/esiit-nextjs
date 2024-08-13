import Image from "next/image";
import { StaticImageData } from "next/image";

interface Member {
  name: string;
  image: StaticImageData;
}

function Members({ members }: { members: Member[] }) {
  return (
    <>
      <div className="flex items-center justify-center gap-1
      ">
        <div className="m-1 grid grid-cols-2  items-center justify-center gap-1 sm:flex ">
          {members.map((member, index) => (
            <div key={index} className="group relative max-w-[200px] overflow-hidden rounded shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 translate-y-full transform text-center font-bold text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Members;
