import { roadmaps } from "../../data";
import Roadmaps from "./Roadmaps";

export default function RoleBasedRoadmaps() {
  return (
    <div>
      <div className="flex items-center mt-16">
        <div className="top-1/2 left-0 border-t w-full border-zinc-700"></div>
        <div className="border border-solid border-zinc-700 rounded-lg w-1/3 text-zinc-400 text-center p-1">
          Role Based Roadmaps
        </div>
        <div className="top-1/2 right-0 border-t w-full border-zinc-700"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 w-1/2 mt-10 gap-2 content-center">
          {roadmaps.map((roadmap) => (
            <Roadmaps key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>
      </div>
    </div>
  );
}
