"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { NavigationItem } from "@/lib/types";
import { getSecureNavigationItems } from "@/lib/services/navigation.service";

export function MainNav() {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<NavigationItem[]>([]);

  useEffect(() => {
    const loadNavigation = async () => {
      const items = await getSecureNavigationItems();
      setNavigation(items);
    };
    loadNavigation();
  }, []);

  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/dashboard" className="flex items-center space-x-2">
        <Home className="h-6 w-6" />
        <span className="hidden md:inline-block font-bold text-xl">HomeBoards</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}