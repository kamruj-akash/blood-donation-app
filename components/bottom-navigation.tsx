import Link from "next/link"
import { Home, Heart, Search, BarChart2, User } from "lucide-react"

export function BottomNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white shadow-lg border-t border-gray-100 z-50">
      <div className="flex h-16 items-center justify-around px-4">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-app-red transition-colors duration-200 ease-in-out hover:text-app-red-dark"
        >
          <Home className="h-6 w-6 fill-current" />
          <span className="text-xs font-medium">Home</span>
        </Link>
        <Link
          href="/requests"
          className="flex flex-col items-center gap-1 text-app-red-dark transition-colors duration-200 ease-in-out hover:text-app-red"
        >
          <Heart className="h-6 w-6" />
          <span className="text-xs font-medium">Requests</span>
        </Link>
        <Link
          href="/find-donors"
          className="flex flex-col items-center gap-1 text-app-red-dark transition-colors duration-200 ease-in-out hover:text-app-red"
        >
          <Search className="h-6 w-6" />
          <span className="text-xs font-medium">Find Donors</span>
        </Link>
        <Link
          href="/impact"
          className="flex flex-col items-center gap-1 text-app-red-dark transition-colors duration-200 ease-in-out hover:text-app-red"
        >
          <BarChart2 className="h-6 w-6" />
          <span className="text-xs font-medium">Impact</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center gap-1 text-app-red-dark transition-colors duration-200 ease-in-out hover:text-app-red"
        >
          <User className="h-6 w-6" />
          <span className="text-xs font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  )
}
