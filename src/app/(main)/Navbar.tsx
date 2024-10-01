import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm border-b">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-5 px-5 py-3">
        <div className="min-w-80 sm:ps-10">
        <Link href="/" className="text-2xl font-bold text-primary">
        <Image 
              src={resolvedTheme === 'dark' ? '/medcrizz-dark.png' : '/medcrizz-light.png'} 
              alt="MedCrizz Logo" 
              width={150} 
              height={150}
              priority
            />
        </Link>
        </div>
        <SearchField />
        <UserButton className="sm:ms-auto  hidden sm:block" />
      </div>
    </header>
  );
}
