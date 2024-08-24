import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4">
              <div className="text-2xl font-bold">
                <a href="/">MyLogo</a>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-gray-300">Home</a>
                <a href="/about" className="hover:text-gray-300">About</a>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </div>
              <div className="flex space-x-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </nav>
          </header>

          <main className="flex flex-col items-center text-center mt-32 bg-zinc-500">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
