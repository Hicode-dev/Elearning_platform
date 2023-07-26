import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MiddleBanner from "@/components/MiddleBanner";
import EmbrasePage from "@/components/EmbrasePage";
import ExpandCards from "@/components/ExpandCards";
import Testimonials from "@/components/Testimonials";
import UploadImage from "@/components/UploadImage";
import SetApart from "@/components/SetApart";
import BecomeAnInstructor from "@/components/BecomeAnInstructor";
import Patners from "@/components/Patners";
import OurPatners from "@/components/OurPatners";
import LearningCommunity from "@/components/LearningCommunity";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="px-8">
        <HeroBanner />
        <MiddleBanner />
        <SetApart />
        <EmbrasePage />
        {/* There is a missen component here this expand card is just used to fil this space */}
        <ExpandCards />
        <Testimonials />
        <UploadImage />
        <BecomeAnInstructor />
        <Patners />
        <OurPatners />
        <LearningCommunity />
      </div>
      <Footer />
    </main>
  );
}
