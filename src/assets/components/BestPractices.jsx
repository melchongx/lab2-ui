import { CiBookmark } from "react-icons/ci";
import { bestPractices } from "../../data";

export default function BestPractices() {
  return (
    <div>
      <div className="flex items-center mt-16">
        <div className="top-1/2 left-0 border-t w-full border-zinc-700"></div>
        <div className="border border-solid border-zinc-700 rounded-lg w-1/3 text-zinc-400 text-center p-1">
          Best Practices
        </div>
        <div className="top-1/2 right-0 border-t w-full border-zinc-700"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 w-1/2 mt-10 gap-2 content-center">
          {bestPractices.map((roadmap, index) => (
            <div
              className="flex w-full border border-solid border-zinc-700 rounded-md px-3 py-4 hover:border-zinc-500"
              href="#"
            >
              <a className="text-zinc-400">{roadmap.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
