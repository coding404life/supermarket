import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-slate-700 text-white">
      <nav className="flex justify-between items-center max-w-screen-lg mx-auto">
        <Link href="/" className="text-xl font-bold">
          Supermarket
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
