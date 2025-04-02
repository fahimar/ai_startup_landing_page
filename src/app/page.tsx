import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* <div className="bg-black"> */}
      <Header />
      <Hero />
      {/* </div> */}
    </main>
  );
}
