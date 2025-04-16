import Image from "next/image";
import { Nav } from "./Nav";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="w-full bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex flex-row items-center justify-between">
        <div className="logo_container">
          <Image
            src="/logo.webp"
            alt="Anvar Nağıyev"
            title="Anvar Nağıyev"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[80px] h-auto"
            priority
          />
        </div>
        <div className="hidden md:block">
          <Nav />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};
