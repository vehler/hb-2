import { MainNav } from "@/components/secure-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { LogoutButton } from "@/components/auth/logout-button";
import { SecureFooter } from "@/components/secure-footer";

export default function SecureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky px-4 container mx-auto top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <LogoutButton />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex flex-1 container mx-auto py-6 px-4">{children}</main>
      <SecureFooter />
    </div>
  );
}