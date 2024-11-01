// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 rounded-xl mx-auto max-w-lg">
      <header className="flex items-center justify-between container mx-auto p-2">
        <button className="p-2 text-black">Logo</button>
        <button className="p-2 text-black">Menu</button>
      </header>
      <main className="p-4 text-black">
        <section>
          <h1>Welcome to my app!</h1>
        </section>
      </main>
    </div>
  );
}
