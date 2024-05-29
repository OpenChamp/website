/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import champEyeLogo from "./champ_eye.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="items-center grid grid-cols-3 gap-8 p-4 px-8 bg-stone-900">
        <Image
          src={champEyeLogo}
          alt="OpenChamp Logo"
          height={48}
          width={48}
          className="select-text"
        />
        <nav className="flex justify-center overflow-auto">
          <ul className="flex gap-12 font-bold text-sm tracking-wider text-stone-200">
            <li>
              <a href="/">GAME</a>
            </li>
            <li>
              <a href="/">PATCH NOTES</a>
            </li>
            <li>
              <a href="/">DEV BLOG</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-end">
          <a href="https://discord.gg/D49KQesc">
            <button className="px-4 py-2 bg-cyan-800 font-bold hover:bg-cyan-400 transition-all duration-300 hover:text-stone-800 rounded-lg">
              {/* DOWNLOAD */}
              DISCORD
            </button>
          </a>
        </div>
      </div>

      <div className="h-[640px] bg-stone-950 grid place-items-center relative overflow-hidden">
        <img
          src="/hero.webp"
          alt="OpenChamp Logo"
          className="absolute opacity-25 blur-lg rounded-3xl select-text object-center"
        />
        <Image
          src="/champ_eye.webp"
          alt="OpenChamp Logo"
          height={420}
          width={420}
          className="absolute opacity-50 blur-lg animate-spinSlow select-text"
        />
        <div className="grid place-items-center gap-8 z-10">
          <h1 className="text-5xl font-bold text-stone-200">OpenChamp</h1>
          <a href="https://discord.gg/D49KQesc">
            <button className="px-6 py-4 mt-4 text-stone-100 bg-[#b68236] font-bold border border-[#b99f4c] hover:bg-[#f3da8b] hover:text-stone-800 transition-all duration-300 hover:shadow-glow ">
              JOIN OUR DISCORD
            </button>
          </a>
        </div>
      </div>

      <div className="p-2 grid place-items-center min-h-[600px] bg-stone-950">
        <div className="grid grid-cols-2 px-8">
          <div className="grid gap-8 place-items-center">
            <h2>
              <span className="text-3xl font-bold text-stone-200">EPIC</span>
              <br />
              <span className="text-5xl font-bold text-stone-200">
                CHAMPIONS
              </span>
            </h2>
            <p className="text-stone-500 text-lg max-w-xl">
              From Blue Steve, to Red John. or something in between (purple
              Bob?), we have every color of the champion rainbow.
            </p>
            <div className="flex gap-8">
              <button className="px-6 py-4 text-stone-100 bg-[#b68236] font-bold border border-[#b99f4c] hover:bg-[#f3da8b] hover:text-stone-800 transition-all duration-300">
                BROWSE CHAMPIONS
              </button>
              <button className="px-6 py-4 text-stone-100 bg-cyan-800 font-bold hover:bg-cyan-400 hover:text-stone-800 transition-all duration-300">
                PLAY
              </button>
            </div>
          </div>

          <div className="grid place-items-center">
            <Image
              src="/champ_eye.webp"
              alt="OpenChamp Logo"
              className="rounded-lg opacity-90"
              height={360}
              width={360}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
