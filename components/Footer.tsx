import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-700 text-white mt-8">
      <div className="max-w-screen-lg mx-auto text-center md:flex justify-between">
        <p>&copy; 2024 Supermarket. All rights reserved.</p>

        <div className="mt-3 md:mt-0 flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
