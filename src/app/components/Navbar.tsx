import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
    return(
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-950 text-gray-200'>
        <Link 
          href='/' 
          className='uppercase font-bold text-base h-12 flex items-center'
        >
          Next Store
        </Link>

        <div className="flex items-center gap-8">
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border border-spacing-1 border-emerald-400 rounded-md px-2 py-1 hover:text-emerald-400 hover:transition">
                Fazer login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    )
}

