import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm border-b">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-5 px-5 py-3">
        <div className="min-w-80 sm:ps-10">
        <Link href="/" className="text-2xl font-bold text-primary">
          <Image src={'/medcrizz-dark.png'} alt="" width={150} height={150}/>
        </Link>
        </div>
        <SearchField />
        <UserButton className="sm:ms-auto  hidden sm:block" />
      </div>
    </header>
  );
}
