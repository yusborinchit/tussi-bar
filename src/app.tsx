import SpotifyIcon from "./components/icons/spotify-icon";
import { useBar } from "./hooks/use-bar";

export default function App() {
  const bar = useBar();

  return (
    <main className="grid min-h-screen place-items-center bg-zinc-950 px-4 font-new-amsterdam text-zinc-50">
      <section className="flex items-center">
        <h1 className="flex flex-col text-7xl leading-[0.75] opacity-10">
          <span>Tussi</span>
          <span>Bar</span>
          <span>of</span>
          <span>the</span>
          <span>Day</span>
        </h1>
        <div className="-ml-20 flex flex-col items-center text-center font-schoolbell">
          <p className="relative w-fit max-w-xl text-[38px] leading-[1] tracking-tighter">
            <span className="text-5xl text-purple-500">"</span>
            {bar.first_bar}
          </p>
          <p className="relative w-fit max-w-xl text-[38px] leading-[1] tracking-tighter">
            {bar.second_bar}
            <span className="text-5xl text-purple-500">"</span>
          </p>
          <a
            href={bar.url}
            target="_blank"
            className="ml-auto mt-6 flex items-center gap-1 opacity-60"
          >
            <SpotifyIcon width={42} height={42} />
            <span className="font-sans text-xl tracking-tighter opacity-60">
              Escucha "{bar.song_title}" acá
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
