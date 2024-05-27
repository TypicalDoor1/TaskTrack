import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        {/* Other content */}
      </main>
    </div>
  );
};