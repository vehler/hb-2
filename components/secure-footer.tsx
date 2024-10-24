import Link from "next/link";
import { getNavigationItems } from "@/lib/services/navigation.service";

export async function SecureFooter() {
  const navigationItems = await getNavigationItems();

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="w-full mx-auto flex justify-betwen gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          </div>
          <p className="w-full text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} HomeBoards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}