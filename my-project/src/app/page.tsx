import Image from "next/image";
import houseIconSVG from './images/house-chimney-user-solid.svg'
// import profilePhoto from './images/profile-photo.png'
import menuIcon from './images/bars.svg'
import apartmentsPhoto from './images/apartments.jpg'
import moneyCheckIcon from './images/money-check.svg'
import requestsIcon from './images/requests.svg'
import trackingIcon from './images/tracking.svg'
import crownIcon from './images/crown.svg'

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-4 flex flex-col gap-4">
      <header className="flex items-center justify-between container mx-auto p-2 bg-stone-900 rounded-xl border border-stone-800">
        <button className="p-2 text-stone-200 flex items-center gap-2">
          <Image src={houseIconSVG} alt="House icon" className="h-6 w-auto" />
          <span className="font-bold">RentHero&trade;</span>
        </button>
        <button className="p-2 text-stone-200 font-bold">
          <Image src={menuIcon} alt="House icon" className="h-6 w-auto" />
        </button>
      </header>
      <main className="p-4 bg-stone-900 rounded-xl border border-stone-800 container mx-auto">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 border-stone-800 border rounded-xl items-center justify-center">
            <Image priority={true} src={apartmentsPhoto} alt="Apartments photo" className="rounded-xl mix-blend-screen z-0" />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex gap-4 sm:w-1/2 w-full">
              <button className="flex items-center justify-center border border-stone-800 rounded-xl aspect-square bg-red-700 hover:bg-red-600 transition-colors w-full">
                <Image src={moneyCheckIcon} alt="Money check icon" className="h-8" />
              </button>
              <button className="flex items-center justify-center border border-stone-800 rounded-xl aspect-square bg-purple-700 hover:bg-purple-600 transition-colors w-full">
                <Image src={requestsIcon} alt="Money check icon" className="h-8" />
              </button>
            </div>
            <div className="flex gap-4 sm:w-1/2 w-full">
              <button className="flex items-center justify-center border border-stone-800 rounded-xl aspect-square bg-blue-700 hover:bg-blue-600 transition-colors w-full">
                <Image src={trackingIcon} alt="Money check icon" className="h-8" />
              </button>
              <button className="flex items-center justify-center border border-stone-800 rounded-xl aspect-square bg-teal-700 hover:bg-teal-600 transition-colors w-full">
                <Image src={crownIcon} alt="Money check icon" className="h-8" />
              </button>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <h1 className="font-bold text-4xl text-stone-200">Rent the right way!</h1>
            <p className="text-stone-400">This is an app idea I had in mind I wanted to make for a while and finally got around to it recently.</p>
            <p className="text-stone-400">There will be many rapid iterations ongoing likely filled with many updates. My goal is to have this functioning ASAP.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
