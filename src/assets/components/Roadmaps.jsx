import { useState } from "react";
import { CiBookmark } from "react-icons/ci";

export default function Roadmaps(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex w-full border border-solid border-zinc-700 rounded-md px-3 py-4 hover:border-zinc-500">
      <a className="text-zinc-400">{props.roadmap.name}</a>
      <div className="ml-2">
        <CiBookmark
          className={
            isFavorite
              ? "text-yellow-500 hover:text-zinc-500"
              : "text-zinc-400 hover:text-zinc-500"
          }
          size={20}
          onClick={() => setIsFavorite((state) => !state)}
        />
      </div>
    </div>
  );
}
