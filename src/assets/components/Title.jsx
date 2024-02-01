export default function Title() {
  return (
    <div className="">
      <div className="flex justify-center items-center mt-16">
        <div className="flex justify-center items-center border border-dashed border-violet-700 px-2 py-1 rounded-md space-x-2">
          <p className="text-purple-400">
            <span className="text-white text-xs font-semibold">NEW</span> Announcing roadmaps for teams. <span className="font-semibold"> Learn more!</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center align-middle mt-5">
        <h1 className=" text-5xl font-bold bg-gradient-to-b from-purple-100 to-purple-500 bg-clip-text text-transparent">
          Developer Roadmaps
        </h1>
        <br />
      </div>
      <div className="flex w-full justify-center">
        <div className="flex justify-center align-middle items-center mt-5 w-1/2 space-x-1">
          <p className="text-zinc-400 text-lg text-center">
            <span className="text-zinc-400 text-lg font-semibold">roadmaps.sh</span> is a community effort to create roadmaps, guides and other educational
            content to help guide developers in picking up a path and guide their
            learnings.
          </p>
        </div>
      </div>
    </div>
  );
}
