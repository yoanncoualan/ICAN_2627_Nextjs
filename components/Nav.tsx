"use client";
 
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useEffect } from "react";
 
export default function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
 
  useEffect(() => {
    console.log(searchParams.get("v"));
  }, [searchParams]);
 
  return (
    <nav>
      <Link
        href="/mon-compte?v=2"
        className={clsx("", {
          active: pathname === "/mon-compte",
        })}
      >
        Mon compte
      </Link>
      <Link
        href="/mon-compte/profil"
        className={clsx("", {
          active: pathname === "/mon-compte/profil",
        })}
      >
        Mon profil
      </Link>
    </nav>
  );
}