import Link from "next/link";

interface NavItems {
  id: number;
  name: string;
  url: string;
}

const navItems: NavItems[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "#about" },
  { id: 3, name: "Projects", url: "#projects" },
  { id: 4, name: "Skills", url: "#skills" },
  { id: 5, name: "Contact", url: "#contact" },
];

export const Nav = () => {
  return (
    <nav>
      <ul className="w-full flex flex-row items-center gap-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative py-2 px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-200"
          >
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
