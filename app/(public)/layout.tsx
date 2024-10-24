import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center mx-auto px-4">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Register
              </Link>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto">{children}</main>
      <footer className="border-t">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <p className="text-sm text-muted-foreground">
            © 2024 HomeBoards. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
