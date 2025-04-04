import Image from "next/image";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="w-full bg-gray-100 py-0">
      <div className="header_inner myContainer flex flex-row items-center justify-between">
        <div className="logo_container">
          <Image
            src="/logo.png"
            alt="Business Name"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[80px] h-auto"
          />
        </div>
        <Nav />
      </div>
    </header>
  );
};
