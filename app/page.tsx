import Board from "@/components/Board";
import { Display } from "@/components/Display";
import Footer from "@/components/Footer";
import { Search } from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white ">
      <Board/>
      <Search/>
      <Display/>
      <Display/>
      <Display/>
      <Display/>
      <Footer/>
    </div>
  );
}
