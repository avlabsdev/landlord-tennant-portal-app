import Image from "next/image";
import houseIconSVG from './images/house-chimney-user-solid.svg'
import profilePhoto from './images/profile-photo.png'
import menuIcon from './images/bars.svg'

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-4 flex flex-col gap-4">
      <header className="flex items-center justify-between container mx-auto p-2 bg-stone-900 rounded-xl border border-stone-800">
        <button className="p-2 text-white flex items-center gap-3">
          <Image src={houseIconSVG} alt="House icon" className="h-6 w-auto" />
          <span className="font-bold">RentHero&trade;</span>
        </button>
        <button className="p-2 text-white font-bold">
          <Image src={menuIcon} alt="House icon" className="h-6 w-auto" />
        </button>
      </header>
      <main className="p-4 text-white bg-stone-900 rounded-xl border border-stone-800 container mx-auto">
        <section className="flex flex-col gap-4">
          <Image src={profilePhoto} alt="Profile photo" className="w-full rounded-xl" />
          <h1 className="font-bold text-xl">Welcome to my app!</h1>
          <p>This is an app idea I had in mind I wanted to make for a while and finally got around to it recently.</p>
          <p>There will be many rapid iterations ongoing likely filled with many updates. My goal is to have this functioning ASAP.</p>
        </section>
      </main>
    </div>
  );
}
