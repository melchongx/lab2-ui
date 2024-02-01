import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";


export default function Header() {
  return (
    <main className="flex min-w-full justify-center space-x-7 mt-8 p-1">
      <div className="">
        <img
          className="rounded-md mx-10"
          src={logo}
          width={28}
          height={28}
          alt="logo"
        />
      </div>
      <div className="flex items-center space-x-7">
        <a className="text-zinc-400 hover:text-white">Roadmaps</a>
        <a className="text-zinc-400 hover:text-white">Best Practices</a>
        <a className="text-zinc-400 hover:text-white">Questions</a>
        <div className="inline-flex space-x-1 items-baseline group">
          <a className="text-sky-300 group-hover:text-white">Teams</a>
          <a className="text-xs text-black font-semibold bg-sky-200 p-0.5 rounded-sm group-hover:bg-white">
            NEW
          </a>
        </div>
        <div className="flex items-center rounded-md border-solid border border-zinc-800 px-2 space-x-1">
          <IoSearchOutline />
          <MdKeyboardCommandKey />
          <h1 className="text-zinc-400">K</h1>
        </div>
      </div>
      <div className="flex items-center space-x-7">
        <a className="text-zinc-400 hover:text-white">Login</a>
        <a className="flex items-center justify-center text-white text-sm font-medium bg-gradient-to-r w-28 from-blue-600 to-indigo-600 rounded-3xl px-6 py-1">
          Sign Up
        </a>
      </div>
    </main>
  );
}
