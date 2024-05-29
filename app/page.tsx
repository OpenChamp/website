/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="items-center grid grid-cols-3 gap-8 p-4 px-8 bg-stone-900">
        <img
          src="/champeye.webp"
          alt="OpenChamp Logo"
          height={48}
          width={48}
          className="select-text"
        />
        <nav className="flex justify-center overflow-auto">
          <ul className="flex gap-12 font-bold text-sm tracking-wider text-stone-200">
            <li>
              <a href="/">GAME*</a>
            </li>
            <li>
              <a href="/">PATCH NOTES*</a>
            </li>
            <li>
              <a href="/">DEV BLOG*</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-end">
          <a
            href="https://discord.gg/f6DGjvTWYT"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          className="absolute opacity-25 blur-lg rounded-3xl select-text object-fill"
        />
        <img
          src="/champeye.webp"
          alt="OpenChamp Logo"
          height={420}
          width={420}
          className="absolute opacity-50 blur-lg animate-spinSlow select-text"
        />
        <div className="grid place-items-center gap-8 z-10">
          <h1 className="text-5xl font-bold text-stone-200">OpenChamp</h1>
          <a
            href="https://discord.gg/f6DGjvTWYT"
            target="_blank"
            rel="noopener noreferrer"
          >
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
                BROWSE CHAMPIONS*
              </button>
              <button className="px-6 py-4 text-stone-100 bg-cyan-800 font-bold hover:bg-cyan-400 hover:text-stone-800 transition-all duration-300">
                PLAY*
              </button>
            </div>
          </div>

          <div className="grid place-items-center">
            <img
              src="/champeye.webp"
              alt="OpenChamp Logo"
              className="rounded-lg opacity-90 max-w-[400px] select-text"
            />
          </div>
        </div>
      </div>
      <footer className="h-[600px] grid place-items-center p-4 bg-stone-900">
        <div className="flex flex-col gap-10 items-center">
          <p className="text-stone-300 text-md max-w-xl text-center italic opacity-80 p-2">
            *: Coming soon!
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://discord.gg/f6DGjvTWYT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 text-stone-100 bg-stone-800 font-bold hover:bg-[#f3da8b] hover:text-stone-800 transition-all duration-300">
                JOIN OUR DISCORD
              </button>
            </a>
            {/* Github */}
            <a
              href="https://github.com/OpenChamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 text-stone-100 bg-green-800 font-bold hover:bg-green-400 hover:text-stone-800 transition-all duration-300">
                GITHUB
              </button>
            </a>
            <a
              href="https://ko-fi.com/openchamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 text-stone-100 bg-cyan-800 font-bold hover:bg-cyan-400 hover:text-stone-800 transition-all duration-300">
                DONATE
              </button>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/champeye.webp"
              alt="OpenChamp Logo"
              height={42}
              width={42}
              className=""
            />
            <h1 className="text-3xl font-bold text-stone-200">OpenChamp</h1>
          </div>
        </div>
      </footer>
    </main>
  );
}
