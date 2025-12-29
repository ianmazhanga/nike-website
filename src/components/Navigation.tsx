import { Link } from 'react-router-dom'
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.13-1.503 1.989-2.38L24 7.8z" />
            </svg>
          </Link>

          {/* Center Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              New & Featured
            </Link>
            <Link
              to="/men"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Men
            </Link>
            <Link
              to="/women"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Women
            </Link>
            <Link
              to="/kids"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Kids
            </Link>
            <Link
              to="/sale"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Sale
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <SearchIcon className="w-5 h-5 text-gray-600" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none ml-2 w-40 text-sm"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <UserIcon className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBagIcon className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}