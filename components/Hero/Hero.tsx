import { Velustro } from "uvcanvas";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-alt-black overflow-hidden relative">
      <div className=" absolute sm:inset-5 tablet:inset-10 laptop_l:inset-20 text-alt-white z-10 text-center w-screen sm:py-12 tablet:py-24 laptop_l:py-32">
        <HeroContent />
      </div>

      <Velustro />

      <div className=" absolute bottom-0 left-0 w-full">
        velocity scroll
      </div>
    </div>
  );
}
